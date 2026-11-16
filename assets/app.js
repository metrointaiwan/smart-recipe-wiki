/**
 * Smart Recipe Wiki — 前端互動邏輯 (assets/app.js)
 * 負責：
 * 1. 頂部搜尋框即時關鍵字過濾（比對料理名稱、食材、分類與亮點說明）
 * 2. 10 大料理分類與「🌟 當季推薦」按鈕點擊篩選（支援多重分類標籤）
 * 3. 搜尋或篩選時自動隱藏「#seasonal-section（當季推薦專區）」，讓結果直接置頂並動態更新標題；
 *    清空搜尋且回到「全部食譜」時自動恢復顯示當季推薦專區。
 * 4. 當季推薦專區「展開／收合第 6 名以後食譜」按鈕切換
 */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("recipe-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const categoryButtons = document.querySelectorAll(".category-btn");
  const allRecipeCards = document.querySelectorAll("#all-recipes-grid .recipe-card");
  const totalRecipeCount = allRecipeCards.length;

  const visibleCountEl = document.getElementById("visible-recipe-count");
  const emptyStateEl = document.getElementById("no-results-box");
  const activeFilterStatusEl = document.getElementById("active-filter-status");

  // 當季推薦專區與結果區標題元素
  const seasonalSection = document.getElementById("seasonal-section");
  const seasonalToggleBtn = document.getElementById("seasonal-toggle-btn");
  const seasonalExtraCards = document.querySelectorAll("#seasonal-grid .seasonal-extra");
  const allRecipesHeadingEl = document.getElementById("all-recipes-heading");
  const allRecipesBadgeEl = document.getElementById("all-recipes-badge");

  let currentCategory = "ALL";
  let isSeasonalExpanded = false;

  /**
   * 執行搜尋關鍵字與分類標籤雙重過濾，並控制當季推薦區顯隱與標題更新
   */
  function filterRecipes() {
    const rawQuery = searchInput ? searchInput.value.trim() : "";
    const query = rawQuery.toLowerCase();
    const isFiltering = query.length > 0 || currentCategory !== "ALL";
    let matchCount = 0;

    allRecipeCards.forEach((card) => {
      const categoriesAttr = card.getAttribute("data-categories") || "";
      const categoriesList = categoriesAttr.split(",").map((c) => c.trim());
      const isSeasonal = card.getAttribute("data-seasonal") === "true";
      const keywords = (card.getAttribute("data-keywords") || "").toLowerCase();
      const textContent = (card.textContent || "").toLowerCase();

      // 1. 檢查分類條件
      let categoryMatch = false;
      if (currentCategory === "ALL") {
        categoryMatch = true;
      } else if (currentCategory === "SEASONAL") {
        categoryMatch = isSeasonal;
      } else {
        categoryMatch = categoriesList.includes(currentCategory);
      }

      // 2. 檢查關鍵字條件（支援空白分隔多個關鍵字）
      let keywordMatch = true;
      if (query.length > 0) {
        const terms = query.split(/\s+/);
        keywordMatch = terms.every(
          (term) => keywords.includes(term) || textContent.includes(term)
        );
      }

      if (categoryMatch && keywordMatch) {
        card.classList.remove("is-hidden");
        matchCount++;
      } else {
        card.classList.add("is-hidden");
      }
    });

    // 更新搜尋列下方統計數量與空狀態顯示
    if (visibleCountEl) {
      visibleCountEl.textContent = String(matchCount);
    }

    if (emptyStateEl) {
      emptyStateEl.classList.toggle("is-hidden", matchCount > 0);
    }

    const categoryLabel =
      currentCategory === "ALL"
        ? "全部食譜"
        : currentCategory === "SEASONAL"
        ? "🌟 當季推薦"
        : currentCategory;

    // 更新搜尋框下方篩選狀態提示文字
    if (activeFilterStatusEl) {
      if (rawQuery) {
        activeFilterStatusEl.textContent = `目前篩選：【${categoryLabel}】＋ 關鍵字「${rawQuery}」`;
      } else {
        activeFilterStatusEl.textContent = `目前分類：【${categoryLabel}】`;
      }
    }

    // UX 規則：搜尋或篩選時自動隱藏「當季推薦專區」，讓結果置頂；恢復預設時重新顯示
    if (seasonalSection) {
      if (isFiltering) {
        seasonalSection.style.display = "none";
        seasonalSection.classList.add("is-hidden");
      } else {
        seasonalSection.style.display = "";
        seasonalSection.classList.remove("is-hidden");
      }
    }

    // 動態更新下方結果區塊標題與徽章
    if (allRecipesHeadingEl) {
      if (isFiltering) {
        allRecipesHeadingEl.textContent = `🔍 搜尋／篩選結果（共 ${matchCount} 道食譜）`;
      } else {
        allRecipesHeadingEl.textContent = "📖 全部食譜總覽";
      }
    }

    if (allRecipesBadgeEl) {
      if (isFiltering) {
        allRecipesBadgeEl.textContent = rawQuery
          ? `${categoryLabel}・關鍵字「${rawQuery}」`
          : `分類篩選：${categoryLabel}`;
      } else {
        allRecipesBadgeEl.textContent = `共 ${totalRecipeCount} 道完整食譜`;
      }
    }
  }

  // 綁定搜尋框即時輸入事件
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      filterRecipes();
    });
  }

  // 綁定清除搜尋與重置篩選按鈕
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
      }
      currentCategory = "ALL";
      categoryButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-category") === "ALL");
      });
      filterRecipes();
    });
  }

  // 綁定分類導覽列按鈕點擊事件
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCat = btn.getAttribute("data-category") || "ALL";
      currentCategory = selectedCat;

      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      filterRecipes();
    });
  });

  // 綁定當季推薦專區「展開／收合第 6 名以後食譜」按鈕
  if (seasonalToggleBtn && seasonalExtraCards.length > 0) {
    const extraCount = seasonalExtraCards.length;

    const updateToggleBtnText = () => {
      if (isSeasonalExpanded) {
        seasonalToggleBtn.textContent = `▲ 收合當季推薦（僅顯示前 5 名）`;
        seasonalToggleBtn.setAttribute("aria-expanded", "true");
      } else {
        seasonalToggleBtn.textContent = `▼ 展開查看全部當季推薦（+${extraCount} 道）`;
        seasonalToggleBtn.setAttribute("aria-expanded", "false");
      }
    };

    updateToggleBtnText();

    seasonalToggleBtn.addEventListener("click", () => {
      isSeasonalExpanded = !isSeasonalExpanded;
      seasonalExtraCards.forEach((card) => {
        card.classList.toggle("is-hidden", !isSeasonalExpanded);
      });
      updateToggleBtnText();
    });
  }
});
