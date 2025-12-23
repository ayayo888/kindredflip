# Kindredflip 网站内容发布手册 (完整版)

本指南涵盖了网站内容的发布流程，所有数据均由 **一个文件** 控制：`lib/constants.ts`。

---

## 🟢 第一部分：发布 Gold 推荐商品 (Articles)

Gold 页面用于展示高质量推荐商品。

### 1. 找到列表
打开 `lib/constants.ts` 并找到 `export const ARTICLES = [...]`。

### 2. 复制并粘贴模板
```typescript
{
  id: 'unique-id-here',          // 唯一ID (例如 'jordan4-gx')
  title: '[GOLD] 商品标题',
  excerpt: '简短描述',
  image: 'https://...',          // 图片链接
  date: 'Oct 25, 2025',
  author: 'YourName',
  tags: ['Shoes', 'Review'],     // 标签
  rating: 5,
  isFeatured: true,              // 是否上首页推荐
  isSale: true,                  // 是否显示 Gold 金标

  // 链接配置 (手动模式)
  rawLink: 'https://weidian.com/...', // 原始链接 (用于复制)
  agentLinks: {
      'CNfans': 'https://cnfans.com/product/?...', // 必须手动填入完整推广链接
      'Mulebuy': 'https://mulebuy.com/product/?...'
  },

  content: ["内容段落1...", "内容段落2..."],
  pros: ["优点1", "优点2"],
  cons: ["缺点1"],
  verdict: "总结评价"
},
```

---

## 🧪 第二部分：发布 The Lab 实验室评测 (Lab Items)

"The Lab" 栏目用于发布硬核 QC 评测和避雷指南。这里的核心是有 **PASS** 和 **FAIL** 两种状态。

### 1. 找到列表
打开 `lib/constants.ts` 并找到 `export const LAB_ITEMS = [...]`。

### 2. 复制并粘贴模板
在数组中添加新对象：

```typescript
{
  id: 'lab-001',                 // 唯一ID (决定URL: /thelab/lab-001)
  category: 'SHOES',             // 分类 (必须大写): SHOES, HOODIES, TECH, BAGS, ACCESSORIES
  title: 'Nike Dunk Low VT Batch',
  price: '$28.00',               // 预估价格
  weight: '1.1kg',               // 实测重量
  status: 'PASS',                // 状态: 'PASS' (通过) 或 'FAIL' (未通过/避雷)
  image: 'https://...',          // 图片链接 (推荐 1:1 正方形)
  note: '走线工整，目前性价比最高的批次。', // 列表页显示的一句话短评
  
  // --- 手动 SEO 配置 (可选) ---
  // 如果不填，系统会自动生成类似 "✅ Review: Title | The Lab" 的标题。
  // 如果想针对 Google 优化关键词，请填写以下字段：
  seoTitle: 'Nike Dunk Low Panda VT Batch Review 2025 - Verified Weight & QC',
  seoDescription: '深度评测 $28 的 VT Batch Dunk。我们测量了实际重量和皮质。点击查看完整 QC 报告。',
  seoKeywords: ['nike dunk low', 'vt batch', 'reps review', 'cnfans finds'],

  // --- 详情页内容 ---
  date: '2025-10-20',
  author: 'LabTech_01',
  content: [
    "第一段深度评测内容...",
    "第二段...",
    "总结..."
  ],
  
  // --- 购买链接配置 (仅当 status 为 'PASS' 时生效) ---
  // 如果是 FAIL，系统会自动隐藏所有购买按钮，防止用户误买垃圾。
  rawLink: 'https://weidian.com/...', 
  agentLinks: {
      'CNfans': 'https://cnfans.com/...',
      'Mulebuy': 'https://mulebuy.com/...'
  }
},
```

### 3. 关键逻辑说明
1.  **SEO 自动优化**:
    *   页面标题会自动加上 `✅` 或 `❌` 表情符号，增加 Google 搜索结果点击率。
    *   OpenGraph (社交分享卡片) 会自动使用你配置的 `image`。
    *   **优先使用**：如果你填写了 `seoTitle`，系统会优先使用它，否则使用默认格式。
2.  **PASS vs FAIL**:
    *   设为 `PASS`: 详情页显示绿色印章，右侧显示购买按钮。
    *   设为 `FAIL`: 详情页显示红色 REJECT 印章，右侧变为红色警告框，**强制隐藏**所有链接。
3.  **分类 (Category)**:
    *   请使用现有的分类名 (SHOES, TECH 等)，以便首页的文件夹标签样式统一。

---

## ❓ 常见问题 (FAQ)

**Q: 我填了 agentLinks 但下拉菜单没显示？**
A: 请检查 Key (键名) 是否拼写正确且区分大小写。支持列表：`CNfans`, `Mulebuy`, `Hoobuy`, `Superbuy` 等。

**Q: 图片链接用什么？**
A: 推荐使用 Cloudinary 或 Imgur 的直链。如果使用 Cloudinary，建议在 URL 中加上 `f_auto,q_auto` 参数以提升加载速度。
