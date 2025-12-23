# Kindredflip 网站内容发布手册 (完整版)

本指南涵盖了网站内容的发布流程。所有数据均由 **一个文件** 控制：`lib/constants.ts`。

---

## 🟢 第一部分：发布 Gold 推荐商品 (ARTICLES)

**对应页面**: `/gold`
**适用场景**: 推荐高质量、值得购买的商品 (Good Batches)。

### 模板代码
```typescript
{
  id: 'unique-id-here',          
  title: '[GOLD] 商品标题',
  excerpt: '显示在卡片上的简短介绍',
  image: 'https://...',          
  date: 'Oct 25, 2025',
  author: 'YourName',
  tags: ['Shoes', 'Review'],     
  rating: 5,                     
  isFeatured: true,              
  isSale: true,                  

  // --- 🔍 SEO 高级配置 (可选) ---
  // 填写这些字段可以让 Google 和 Discord 分享链接看起来更专业
  // 如果不填，系统会自动使用 title 和 excerpt
  seoTitle: 'Air Jordan 4 Black Cat Review - Best Batch 2025',
  seoDescription: 'In-hand review of the GX Batch AJ4 Black Cat. Comparison with Retail. Best CNFans finds.',
  seoKeywords: ['jordan 4', 'black cat', 'cnfans spreadhseet', 'gx batch'],

  // 购买链接 (下拉菜单)
  agentLinks: {
      'CNfans': 'https://cnfans.com/...',
  },

  // 文章正文 (Markdown)
  content: [
    "这里是正文段落1。",
    "![图片说明](https://图片链接.jpg)"
  ],
  verdict: "总结评价"
},
```

---

## 🟢 第二部分：配置 Agent 详情页链接 (AGENT_LINKS)

**对应页面**: `/agent/[agentName]`
**适用场景**: 当您需要修改某个 Agent 的 Spreadsheet 主链接，或配置详情页下方分类图标（Shoes, Hoodies 等）的具体跳转链接时。

在 `lib/constants.ts` 文件中，找到 `AGENT_LINKS` 对象。

### 配置主表格 & 分类链接 (Tab页)
通常 Google Spreadsheet 不同的分类在不同的 Sheet (Tab) 里。您可以复制每个 Tab 的链接（链接末尾通常带有 `#gid=xxxx`）填入配置中。

```typescript
'cnfans': { 
  // 1. 主链接 (点击页面顶部大按钮时跳转)
  spreadsheet: 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here',
  
  // 2. 分类链接 (点击页面下方图标时跳转)
  // Key 必须大写，例如: SHOES, HOODIES, TECH, BAGS
  categories: {
      'SHOES': 'https://docs.google.com/spreadsheets/d/.../edit#gid=111',
      'HOODIES': 'https://docs.google.com/spreadsheets/d/.../edit#gid=222',
      'TECH': 'https://docs.google.com/spreadsheets/d/.../edit#gid=333',
      // 如果没有配置某个分类，系统会默认跳转到主链接
  }
},
```

---

## 🧪 第三部分：发布 The Lab 实验室评测 (LAB_ITEMS)

**重要说明：一个配置，两处显示。**
您不需要分别配置列表页和详情页。系统会从同一个对象中读取不同的字段。

### 1. 列表页显示字段 (`/thelab`)
列表页只显示简短的信息，用于快速浏览：
*   `image`: 封面图
*   `title`: 标题
*   `status`: 右上角的 PASS 或 FAIL 标签
*   `price`: 价格
*   `weight`: 重量
*   `note`: 一句话简短评价 (显示在引号里)

### 2. 详情页显示字段 (`/thelab/[id]`)
当用户点击卡片进入详情页时，系统会额外加载以下字段：
*   `content`: **[核心]** 详细的长篇评测文章 (支持 Markdown 图片混排)
*   `agentLinks`: 购买按钮链接
*   `seoTitle`: 浏览器标签页标题
*   `date` / `author`: 发布信息

### 模板代码 (完整版)
在 `lib/constants.ts` 的 `LAB_ITEMS` 数组中添加：

```typescript
{
  // --- 列表页字段 ---
  id: 'l1',                      
  category: 'SHOES',             // SHOES, TECH, BAGS, ACCESSORIES
  title: 'Nike Dunk Low VT Batch',
  price: '$28.00',
  weight: '1.1kg',
  status: 'PASS',                // PASS (绿色通过) 或 FAIL (红色避雷)
  image: 'https://...',          
  note: 'Stitching is accurate. Best budget batch.', 

  // --- 详情页字段 ---
  content: [
      "## 评测正文开始",
      "The VT Batch is widely considered the budget king.",
      "![鞋底细节](https://img.com/sole.jpg)", 
      "The sole is slightly softer than retail."
  ],
  
  // 购买链接 (仅限 PASS 状态显示)
  agentLinks: {
      'CNfans': 'https://cnfans.com/product/...'
  },

  // SEO 配置 (可选)
  seoTitle: 'Nike Dunk Low Panda VT Batch Review',
  seoKeywords: ['nike', 'dunk', 'vt batch']
},
```

---

## ❓ 常见问题

**Q: 之前的 QC_ITEMS 是什么？**
A: 那是旧代码，已经被删除。现在所有的评测和红黑榜都统一使用 `LAB_ITEMS`。

**Q: 如何在内容中换行？**
A: 在 `content` 数组中插入一个空字符串 `"",` 即可。