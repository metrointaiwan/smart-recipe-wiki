# 食譜知識庫更新日誌（Wiki Ingest Log）

本檔案採 **Append-only（僅限追加）** 模式維護，完整記錄每次知識庫初始化與新增食譜的時間軸。
標準紀錄格式：`## [YYYY-MM-DD] ingest | 食譜名稱`

---

## [2026-11-16] init | 建立個人智慧食譜庫（Smart Recipe Wiki）三層式架構
- 初始化 `AGENTS.md`、`raw/`、`wiki/`、`pages/` 與 `assets/` 靜態網站架構。
- 設定 2026 年 11 月台灣晚秋／初冬當季食材評估基準與紫、灰、白、綠視覺主題。

## [2026-11-16] ingest | 秋季栗子南瓜濃湯
- **檔案路徑**：`wiki/recipes/20261116-chestnut-pumpkin-soup.md`、`pages/20261116-chestnut-pumpkin-soup.html`
- **分類標籤**：`湯品類`, `燉煮類`
- **價格與耗時**：`$`（約 NT$ 100 左右）｜總耗時 35 分鐘（備料 15 分 + 烹調 20 分）
- **當季評估**：`is_seasonal: true`（當季食材：南瓜、栗子｜推薦分數：96 分）

## [2026-11-16] ingest | 柚香蜂蜜醃白蘿蔔
- **檔案路徑**：`wiki/recipes/20261116-yuzu-pickled-radish.md`、`pages/20261116-yuzu-pickled-radish.html`
- **分類標籤**：`醃製類`, `涼拌類`
- **價格與耗時**：`$`（約 NT$ 100 左右）｜總耗時 20 分鐘（不含冷藏入味）
- **當季評估**：`is_seasonal: true`（當季食材：白蘿蔔｜推薦分數：92 分）

## [2026-11-16] ingest | 麻油香菇雞湯
- **檔案路徑**：`wiki/recipes/20261116-sesame-mushroom-chicken-soup.md`、`pages/20261116-sesame-mushroom-chicken-soup.html`
- **分類標籤**：`湯品類`, `燉煮類`
- **價格與耗時**：`$$`（約 NT$ 500 左右）｜總耗時 50 分鐘（備料 15 分 + 烹調 35 分）
- **當季評估**：`is_seasonal: true`（當季食材：香菇、老薑｜推薦分數：89 分）

## [2026-11-16] ingest | 高麗菜鮮肉水煎包
- **檔案路徑**：`wiki/recipes/20261116-cabbage-pan-fried-buns.md`、`pages/20261116-cabbage-pan-fried-buns.html`
- **分類標籤**：`煎炒類`, `主食飯麵類`
- **價格與耗時**：`$`（約 NT$ 100 左右）｜總耗時 60 分鐘（備料 35 分 + 烹調 25 分）
- **當季評估**：`is_seasonal: true`（當季食材：高麗菜、青蔥｜推薦分數：85 分）

## [2026-11-16] ingest | 地瓜起司可樂餅
- **檔案路徑**：`wiki/recipes/20261116-sweet-potato-cheese-croquette.md`、`pages/20261116-sweet-potato-cheese-croquette.html`
- **分類標籤**：`炸物類`, `糕點類`
- **價格與耗時**：`$`（約 NT$ 100 左右）｜總耗時 45 分鐘（備料 25 分 + 烹調 20 分）
- **當季評估**：`is_seasonal: true`（當季食材：台農57號地瓜｜推薦分數：82 分）

## [2026-11-16] ingest | 清蒸鱸魚佐包心白菜
- **檔案路徑**：`wiki/recipes/20261116-steamed-sea-bass-cabbage.md`、`pages/20261116-steamed-sea-bass-cabbage.html`
- **分類標籤**：`蒸煮類`
- **價格與耗時**：`$$`（約 NT$ 500 左右）｜總耗時 30 分鐘（備料 15 分 + 烹調 15 分）
- **當季評估**：`is_seasonal: true`（當季食材：包心白菜｜推薦分數：78 分，排第 6 名預設隱藏）

## [2026-11-16] ingest | 蒜香奶油骰子牛
- **檔案路徑**：`wiki/recipes/20261116-garlic-butter-diced-beef.md`、`pages/20261116-garlic-butter-diced-beef.html`
- **分類標籤**：`煎炒類`
- **價格與耗時**：`$$`（約 NT$ 500 左右）｜總耗時 20 分鐘（備料 10 分 + 烹調 10 分）
- **當季評估**：`is_seasonal: false`（常備快手料理｜推薦分數：0 分）

## [2026-11-16] ingest | 奶香Q彈鮮奶麻糬球
- **原始素材**：`raw/20261116-milk-mochi-balls/01.jpg ~ 10.jpg`（10 張連續短影音截圖合併，補全白砂糖與沾粉克數、小火慢攪時間）
- **檔案路徑**：`wiki/recipes/20261116-milk-mochi-balls.md`、`pages/20261116-milk-mochi-balls.html`
- **分類標籤**：`糕點類`, `飲品甜湯類`
- **價格與耗時**：`$`（約 NT$ 100 左右）｜總耗時 15 分鐘（備料 3 分 + 烹調搓球 12 分）
- **當季評估**：`is_seasonal: false`（常年零失敗免烤箱甜點｜推薦分數：0 分）
