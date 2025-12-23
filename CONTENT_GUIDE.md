# Kindredflip Content Update Manual

To update the website, you only need to edit **one file**: `lib/constants.ts`.

## 1. How to Add a New Item (Article + Homepage Card)

Go to `lib/constants.ts` and scroll to the `ARTICLES` array. Add a new object to the list using this template:

```typescript
{
  id: 'unique-id-001',           // Must be unique (e.g., 'a7', 'gold-watch')
  title: '[GOLD] Your Product Title Here',
  excerpt: 'A short description appearing on the list page.',
  image: 'https://your-cloudinary-url.com/image.jpg', 
  date: 'Oct 25, 2025',
  author: 'YourName',
  tags: ['Tech', 'Review'],      // Used for coloring and filtering
  rating: 5,                     // 1 to 5
  
  // CRITICAL SETTINGS
  isFeatured: true,              // Set TRUE to show on Home Page "Gold Spreadsheet"
  isSale: true,                  // Adds a "Gold" badge on the image
  
  // The Full Content (Paragraphs)
  content: [
    "Paragraph 1 text goes here...",
    "Paragraph 2 text goes here...",
    "Conclusion text..."
  ],
  
  pros: ["Good battery", "Cheap"],
  cons: ["Shipping slow"],
  verdict: "Buy it now."
},
```

### What happens when you save?
1. **Home Page**: It automatically appears in the "Gold Spreadsheet" section (because `isFeatured: true`).
2. **Gold List Page**: It appears in the full list at `/gold`.
3. **Detail Page**: A new page is automatically created at `/gold/unique-id-001`.

---

## 2. How to Add a "The Lab" Test Result

Go to `lib/constants.ts` and scroll to `LAB_ITEMS`. Use this template:

```typescript
{
  id: 'l10',
  category: 'SHOES',             // SHOES, TECH, BAGS, etc.
  title: 'Nike Dunk Low VT Batch',
  price: '$28.00',
  weight: '1.1kg',
  status: 'PASS',                // PASS or FAIL
  image: 'https://your-cloudinary-url.com/image.jpg',
  note: 'Stitching is perfect. Best budget batch.'
},
```

---

## 3. Image Hosting (Cloudinary)

1. Upload image to Cloudinary.
2. Click "Copy URL".
3. Paste into the `image: '...'` field in the code.
4. **Tip**: Add `f_auto,q_auto` to the URL for speed. 
   * Before: `.../upload/v1234/shoe.jpg`
   * After:  `.../upload/f_auto,q_auto/v1234/shoe.jpg`
