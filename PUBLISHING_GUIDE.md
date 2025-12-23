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

## 🧪 第二部分：发布 The Lab 实验室评测 (LAB_ITEMS)

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
