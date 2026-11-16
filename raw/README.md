# `raw/` — 原始食譜素材層（唯讀 Source of Truth）

本資料夾為 **個人智慧食譜庫（Smart Recipe Wiki）** 三層式架構中的**第一層：原始素材層**。

## 用途說明
您可以將任何日常收集到的食譜素材直接放入此資料夾，例如：
- 食譜書或手寫筆記的照片、手機截圖（`.png`, `.jpg`, `.webp`）
- IG Reels / Shorts / TikTok 的多張連續步驟截圖，或短影音檔案（`.mp4`）
- YouTube 料理影片的字幕摘錄、網址與重點筆記（`.txt`, `.md`）
- Instagram / Facebook / Threads 料理貼文的複製文字

## AI 維護鐵律（Read-Only Rule）
1. **唯讀保護**：此資料夾內的所有檔案皆為原始證據來源（Source of Truth）。
2. **嚴禁修改或刪除**：AI 代理（Agent）在執行食譜提取（Ingest）時，**僅可讀取**本資料夾內的檔案，**絕對不會修改、覆寫、重新命名或刪除**您放入的任何原始檔案。
3. **新增食譜方式**：將新素材放入 `raw/` 後，只需對 AI 說：「請幫我把 `raw/` 裡的新素材整理進食譜庫」，AI 即會自動依照根目錄 `AGENTS.md` 的 5 步驟 SOP 更新 `wiki/`、`pages/` 與 `index.html`。
