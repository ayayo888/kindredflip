# Kindredflip 网站内容发布手册 (完整版)

本指南涵盖了网站内容的发布流程。所有数据均由 **一个文件** 控制：`lib/constants.ts`。

**核心原理说明**：
*   `lib/constants.ts` 就像是你的 Excel 数据库。
*   网站的列表页（`/gold` 和 `/thelab`）会**直接读取**这个文件里的数组。
*   **你不需要做任何“上架”操作**。只要代码里加了数据，保存文件，网页上就会自动显示出来。

---

## 🟢 第一部分：发布 Gold 推荐商品 (ARTICLES)

**对应页面**: `/gold`
**适用场景**: 推荐高质量、值得购买的商品 (Good Batches)。

### 上架流程
1. 打开 `lib/constants.ts`。
2. 找到 `export const ARTICLES = [ ... ]` 数组。
3. 在数组中**复制粘贴**一个新的对象（参考下方模板）。
4. **保存文件**。
5. **结果**：该商品会立即出现在 `/gold` 列表页的最上方（或取决于你插入的位置）。

### 模板代码
```typescript
{
  id: 'unique-id-here',          // 唯一ID，不能重复
  title: '[GOLD] 商品标题',
  excerpt: '显示在卡片上的简短介绍',
  image: 'https://...',          // Cloudinary 图片链接
  date: 'Oct 25, 2025',
  author: 'YourName',
  tags: ['Shoes', 'Review'],     // 标签，用于列表页的筛选按钮
  rating: 5,                     // 1-5 星级
  
  // --- 首页显示控制 ---
  isFeatured: true,              // 【关键】设为 true，才会同时出现在首页的 "Gold Spreadsheet" 区域
  isSale: true,                  // 设为 true，图片上会显示 "Gold" 徽章

  // --- 购买链接配置 ---
  rawLink: 'https://weidian.com/item...', // 淘宝/微店原链接
  agentLinks: {
      'CNfans': 'https://cnfans.com/...', // 你的推广链接
      'Mulebuy': 'https://mulebuy.com/...',
  },

  // --- 文章正文 (Markdown) ---
  content: [
    "这里是正文段落1。",
    "", // 空字符串代表换行
    "![图片说明](https://图片链接.jpg)", // 插入图片
    "这里是正文段落2。"
  ],
  verdict: "总结评价"
},
```

---

## 🟢 第二部分：发布 The Lab 实验室评测 (LAB_ITEMS)

**对应页面**: `/thelab`
**适用场景**: 只有简短评价的红黑榜测试 (Pass/Fail)。

### 上架流程
1. 打开 `lib/constants.ts`。
2. 找到 `export const LAB_ITEMS = [ ... ]` 数组。
3. 在数组中添加一个新对象。
4. **保存文件**。
5. **结果**：该评测会自动出现在 `/thelab` 列表页。

**注意**：`LAB_ITEMS` 数组也是**首页** "The Lab" 区域的数据源。首页默认只显示数组里的**前 4 个**。所以如果你想让最新的评测上首页，请把它加到数组的**最前面**。

### 模板代码
```typescript
{
  // --- 列表页显示字段 ---
  id: 'l1',                      // 唯一ID
  category: 'SHOES',             // 分类：SHOES, TECH, BAGS, ACCESSORIES
  title: 'Nike Dunk Low VT Batch',
  price: '$28.00',
  weight: '1.1kg',
  status: 'PASS',                // 状态：PASS (绿色) 或 FAIL (红色)
  image: 'https://...',          
  note: '一句话简评，显示在列表卡片上。', 

  // --- 详情页显示字段 ---
  date: '2025-10-20',
  author: 'LabTech_01',
  content: [
      "## 详细评测内容",
      "这里可以写很长的评测...",
      "![细节图](https://...)"
  ],
  
  // 购买链接 (仅限 PASS 状态显示)
  agentLinks: {
      'CNfans': 'https://cnfans.com/product/...'
  },

  // SEO 配置 (如果不填会自动生成)
  seoTitle: 'Nike Dunk Low Panda VT Batch Review',
},
```

---

## 🟢 第三部分：配置首页分类卡片 (Category Grid)

**对应位置**: 首页上方的方形卡片网格 (Shoes, Hoodies, Tech...)。

### 配置流程
1. 打开 `lib/constants.ts`。
2. 找到 `export const CATEGORIES = [ ... ]` 数组。
3. 直接修改数组里的对象。

### 字段说明
*   `name`: 卡片上显示的名称 (如 "Shoes")。
*   `image`: 卡片里的图片链接。
*   `itemCount`: 右上角显示的数字角标 (如 1240)。
*   `href`: **点击卡片后的跳转链接**。
    *   **跳转到站内筛选**: 填写 `/gold?category=shoes` (这将自动筛选 Gold 列表页)。
    *   **跳转到外部表格**: 填写 `https://docs.google.com/...` (如果你希望点击直接去 Google Sheet)。

### 代码示例
```typescript
{ 
  id: '1', 
  name: 'Shoes', 
  image: 'https://...', 
  color: 'blue', 
  itemCount: 1240,
  
  // 修改这里来改变点击后的去向
  href: '/gold?category=shoes'  
},
```

---

## 🟢 第四部分：配置 Agent 详情页链接 (AGENT_LINKS)

**对应页面**: `/agent/[agentName]`
**适用场景**: 修改 Agent 的表格链接或 Tab 分类。

在 `lib/constants.ts` 找到 `AGENT_LINKS`。

```typescript
'cnfans': { 
  // 1. 主表格链接
  spreadsheet: 'https://docs.google.com/...',
  
  // 2. 分类链接 (对应页面下方的 12 个图标)
  // 当用户点击 "SHOES" 图标时，会跳转到这里配置的链接
  categories: {
      'SHOES': 'https://.../edit#gid=111',
      'HOODIES': 'https://.../edit#gid=222',
      // 如果没配，默认跳转到主表格链接
  },

  // 3. (新增) 优惠券/注册链接配置
  // 配置此链接后：
  // - 列表页的 "Coupons" 按钮会直接跳转到这里
  // - 详情页的 "CLAIM COUPONS NOW" 按钮会直接跳转到这里
  affiliate: 'https://cnfans.com/register/?ref=YOUR_CODE'
},
```

---

## 🟢 第五部分：配置购买链接与 Agent 支持 (Agent Selector)

详情页的 "Buy on CNfans" 大按钮和 "Select Agent" 下拉菜单支持多种代理平台。

### 1. 目前支持的 Agent 列表
系统目前内置支持以下 29 个平台（**注意区分大小写**）：

`CNfans`, `Mulebuy`, `Hoobuy`, `Kakobuy`, `Gtbuy`, `Vigorbuy`, `Eastmallbuy`, `Rizzitgo`, `Hipobuy`, `Tigbuy`, `Cnshopper`, `Oopbuy`, `Acbuy`, `Pingubuy`, `Pantherbuy`, `Ootdbuy`, `Itaobuy`, `Allchinabuy`, `Ponybuy`, `Cssbuy`, `Orientdig`, `Bbdbuy`, `Npbuy`, `Joyagoo`, `Sugargoo`, `Lovegobuy`, `Superbuy`, `Basetao`, `Hubbuycn`.

### 2. 如何在商品中添加这些链接？
在 `lib/constants.ts` 的 `ARTICLES` 或 `LAB_ITEMS` 中，找到 `agentLinks` 字段。

**规则**：
*   **CNfans**: 如果配置了，会显示为页面上最大的**主购买按钮**。
*   **其他 Agent**: 如果配置了，会自动收纳进 "Select Agent" 下拉菜单。

```typescript
agentLinks: {
    // 主按钮
    'CNfans': 'https://cnfans.com/product/123456',
    
    // 下拉菜单项 (Key 必须与上方的支持列表拼写一致)
    'Mulebuy': 'https://mulebuy.com/product/123456', 
    'Hoobuy': 'https://hoobuy.com/product/123456',
    'Sugargoo': 'https://sugargoo.com/...'
}
```

### 3. 如何增加全新的 Agent 平台？
如果未来出现了一个新平台（例如叫 "NewCoolBuy"），你需要修改代码才能让它出现在下拉菜单中。

1.  打开文件：`components/AgentSelector.tsx`
2.  找到顶部的 `ALL_SUPPORTED_AGENTS` 数组。
3.  在数组中添加新名字：`"NewCoolBuy"`。
4.  **保存**。
5.  现在你可以在 `lib/constants.ts` 中使用 `'NewCoolBuy': '...'` 了。

---

## 🟢 第六部分：配置社交媒体链接 (Discord & Telegram)

**对应位置**: 首页顶部 Hero 区域按钮 & 右下角悬浮按钮。

### 配置流程
1. 打开 `lib/constants.ts`。
2. 找到文件最顶部的 `SOCIAL_LINKS` 常量（通常在第 0 部分）。
3. 将链接替换为你自己的社群链接。

```typescript
export const SOCIAL_LINKS = {
  // 替换为你自己的 Discord 邀请链接
  discord: 'https://discord.gg/your-invite-code',
  
  // 替换为你自己的 Telegram 频道链接
  telegram: 'https://t.me/your-channel-link',
};
```

---

## ⚡️ Cloudinary 图片优化技巧

为了让网站加载更快，在 `lib/constants.ts` 填入图片链接时，请直接填入原图链接即可。

我们的代码 (`lib/cloudinaryLoader.ts`) 会自动拦截 `res.cloudinary.com` 的链接，并自动添加 `f_auto,q_auto,w_1000` 等参数进行压缩和格式转换。

**你只需要：**
1. 上传图片到 Cloudinary。
2. 复制 URL。
3. 粘贴到 `image: '...'` 中。
4. Done。