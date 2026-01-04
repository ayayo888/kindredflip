import { CategoryItem, ArticleItem, LabItem, AgentLinkConfig } from './types';

// =====================================================================
// 0. SOCIAL MEDIA LINKS
// =====================================================================
export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/vjzTND59Mz',
  whatsapp: 'https://wa.me/message/CJTPURWFLLW2P1',
};

// =====================================================================
// 1. AGENT LINKS CONFIGURATION (Spreadsheets)
// =====================================================================
export const AGENT_LINKS: Record<string, AgentLinkConfig> = {
  'cnfans': { 
      spreadsheet: 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here',
      // [配置示例] 为不同分类设置不同的表格链接 (通常是不同的 gid/Tab)
      categories: {
          'SHOES': 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here/edit#gid=1111',
          'HOODIES': 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here/edit#gid=2222',
          'TECH': 'https://docs.google.com/spreadsheets/d/your-cnfans-link-here/edit#gid=3333',
      }
  },
  'mulebuy': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-mulebuy-link-here' },
  'hoobuy': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-hoobuy-link-here' },
  'sugargoo': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-sugargoo-link-here' },
  'superbuy': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-superbuy-link-here' },
  'allchinabuy': { spreadsheet: 'https://docs.google.com/spreadsheets/d/your-allchinabuy-link-here' },
  
  // 其他 Agent (默认只配置主链接)
  'acbuy': { spreadsheet: '#' },
  'basetao': { spreadsheet: '#' },
  'bbdbuy': { spreadsheet: '#' },
  'cnshopper': { spreadsheet: '#' },
  'cssbuy': { spreadsheet: '#' },
  'eastmallbuy': { spreadsheet: '#' },
  'gtbuy': { spreadsheet: '#' },
  'hipobuy': { spreadsheet: '#' },
  'hubbuycn': { spreadsheet: '#' },
  'itaobuy': { spreadsheet: '#' },
  'joyagoo': { spreadsheet: '#' },
  'kakobuy': { spreadsheet: '#' },
  'kameymall': { spreadsheet: '#' },
  'lovegobuy': { spreadsheet: '#' },
  'npbuy': { spreadsheet: '#' },
  'oopbuy': { spreadsheet: '#' },
  'ootdbuy': { spreadsheet: '#' },
  'orientdig': { spreadsheet: '#' },
  'pantherbuy': { spreadsheet: '#' },
  'pingubuy': { spreadsheet: '#' },
  'ponybuy': { spreadsheet: '#' },
  'rizzitgo': { spreadsheet: '#' },
  'tigbuy': { spreadsheet: '#' },
  'vigorbuy': { spreadsheet: '#' },

  'default': { spreadsheet: 'https://docs.google.com/spreadsheets' }
};


// =====================================================================
// 2. 首页分类 (CATEGORY GRID)
// =====================================================================
export const CATEGORIES: CategoryItem[] = [
  { 
    id: '1', 
    name: 'Shoes', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/shoes_ocm0vz.png', 
    color: 'blue', 
    itemCount: 1240,
    href: '/gold?category=shoes' 
  },
  
  { 
    id: '2', 
    name: 'Hoodies', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/Hoodies_fpspfa.png', 
    color: 'red', 
    itemCount: 850,
    href: '/gold?category=hoodies'
  },
  { 
    id: '3', 
    name: 'T-Shirts', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488589/t_jg2rrt.png',
    color: 'yellow', 
    itemCount: 920,
    href: '/gold?category=t-shirts'
  },
  { 
    id: '4', 
    name: 'Jackets', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/jacket_lmg2kr.png',
    color: 'green', 
    itemCount: 450,
    href: '/gold?category=jackets'
  },
  { 
    id: '5', 
    name: 'Jersey', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Jersey_lmh6ob.png', 
    color: 'blue', 
    itemCount: 210,
    href: '/gold?category=jersey'
  },
  { 
    id: '6', 
    name: 'Pants', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488589/pants_dnkfqu.png', 
    color: 'yellow', 
    itemCount: 540,
    href: '/gold?category=pants'
  },
  { 
    id: '7', 
    name: 'Accessories', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/Accessories_n1sciy.png', 
    color: 'red', 
    itemCount: 1100,
    href: '/gold?category=accessories'
  },
  { 
    id: '8', 
    name: 'Bags', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/bags_vjalt6.png', 
    color: 'green', 
    itemCount: 430,
    href: '/gold?category=bags'
  },
  { 
    id: '9', 
    name: 'Tech', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/tech_dh5t1u.png', 
    color: 'blue', 
    itemCount: 320,
    href: '/gold?category=tech'
  },
  { 
    id: '10', 
    name: 'Lifestyle', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Lifestyle_euf6oo.png', 
    color: 'yellow', 
    itemCount: 150,
    href: '/gold?category=lifestyle'
  },
  { 
    id: '11', 
    name: 'Girls', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488587/girls_g4h2li.png',
    color: 'red', 
    itemCount: 280,
    href: '/gold?category=girls'
  },
  { 
    id: '12', 
    name: 'Perfume', 
    image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766488588/Perfume_ugwatb.png', 
    color: 'green', 
    itemCount: 80,
    href: '/gold?category=perfume'
  },
];

// 3. LAB ITEMS (原 QC ITEMS 已被合并至此)
export const LAB_ITEMS: LabItem[] = [
  {
  "id": "7",
  "category": "Airpods",
  "title": "Tiger Build Gen 2 Review: Are These the Best Fake AirPods for Comfort?",
  "price": "$18.00 - $25.00",
  "weight": "0.04kg",
  "status": "PASS",
  "image": "https://res.cloudinary.com/dl24hgcws/image/upload/v1767532117/nanobanana-image-1767531881320_g14rcc.jpg",
  "note": "A deep dive into the classic Gen 2 style using the stable Tiger Build solution.",
  "content": [
    "## The Design That Refuses to Die",
    "Let's be honest: The Gen 2 design is a legend. It has been about seven years, and people still love it. Why? Because not everyone wants silicone tips jammed deep into their ear canals. That \"open-ear\" fit is unmatched for long-term comfort.",
    "But the replica market is a mess of confusing names and cheap junk. If you are hunting for the **best fake airpods** that focus on pure reliability rather than gimmicks, you need to look at the \"Top-tier\" version: the **Tiger Build** solution.",
    "## The Secret Sauce: TB-Airoha-1562E",
    "Here is the most important part of this review. When you are shopping, do not just buy \"Gen 2.\" You need to verify the chip. The gold standard right now is the **TB-Airoha-1562E**.",
    "While cheaper versions use chips like BLUETRUM or the older 1562U, the **TB-Airoha-1562E** is the winner for a few specific reasons:",
    "*   **Multipoint Pairing:** This is the killer feature. You can connect to two devices at once. It switches seamlessly between your iPad and your phone.",
    "*   **Rock-Solid Stability:** Because this earbud is simple (no heavy noise cancellation processing), the connection is incredibly stable. It just works.",
    "*   **Call Quality:** This chip handles microphones much better than budget versions. If you talk on the phone a lot, this is the one you want.",
    "## The Upgrade: UF Edition with USB-C",
    "Recently, a factory version known as **UF** (Gold Chamber) released a massive quality-of-life update that fixes the biggest annoyance of the older models.",
    "They swapped the old Lightning port for **USB-C**. If you have an iPhone 15, iPhone 16, or an Android, this is huge. You can finally use one cable for your laptop, phone, and earbuds. No more carrying that one extra white cable just for your headphones.",
    "## The Reality Check: What It CAN'T Do",
    "I want to manage your expectations. Even though these are the top-tier versions, they are \"pure\" earbuds.",
    "**1. No ANC (Noise Cancellation):** Because they don't seal your ear, they cannot block outside noise. If you are on a loud train, you will hear the train.",
    "**2. No Spatial Audio:** You won't get the head-tracking surround sound effects.",
    "**3. No Auto-EQ:** It doesn't tune the music to your ear shape.",
    "## Who Should Buy These?",
    "After testing the **TB-Airoha-1562E**, I recommend them for three specific groups:",
    "*   **The \"Old School\" User:** If you are still using an iPhone 8 or X (especially on iOS 16 or older), these connect flawlessly.",
    "*   **The Sensitive Ear Crowd:** If Pro-style rubber tips hurt your ears, this is your best option.",
    "*   **The Value Hunter:** Getting multipoint connection and USB-C convenience for around $20 is an unbeatable deal.",
    "### Verdict",
    "If you don't need noise cancellation and just want a reliable, comfortable daily driver, the **TB-Airoha-1562E** (specifically the UF USB-C version) is the way to go."
  ],
  "agentLinks": {
    "Search TB-Airoha-1562E": "https://www.kindredflip.com"
  },
  "seoTitle": "Tiger Build Review: The best fake airpods Gen 2 with USB-C",
  "seoKeywords": [
    "best fake airpods",
    "Tiger Build review",
    "TB-Airoha-1562E",
    "Gen 2 replica USB-C",
    "budget earbuds review"
  ]
},
  {
  "id": "7",
  "category": "Airpods",
  "title": "Is Your Tiger Build Real? The Ultimate Fly CC App Guide",
  "price": "$0.00",
  "weight": "0.0kg",
  "status": "PASS",
  "image": "https://res.cloudinary.com/dl24hgcws/image/upload/v1767508197/nanobanana-image-1767508183526_cgu1o3.jpg",
  "note": "The definitive guide to checking chipset authenticity and customizing settings for Tiger Build earbuds.",
  "content": [
    "So, you picked up a pair of replicas, and the seller insists they are the high-end **Tiger Build** (also known as Ruihu). But how do you know for sure? You don't have to guess. The answer is an app called **Fly CC**.",
    "## The Compatibility Rule: Tiger Build Only",
    "Before we get started, we need to clear up one major thing regarding compatibility. The Fly CC app is designed strictly for the **Tiger Build (TB)** chipset solution. ",
    "![Comparing chipsets](https://res.cloudinary.com/dl24hgcws/image/upload/v1767497809/%E4%BD%A0%E7%9A%84%E6%AE%B5%E8%90%BD%E6%96%87%E5%AD%97_1_o9dtol.png)",
    "If you are using earbuds with **HaoRui** or **HuiLian** solutions, they will **not** connect to this app. This isn't about one being \"better\" than the other; it's simply about software compatibility. Fly CC is currently the most effective way to verify a Tiger Build unit.",
    "**Important Truth Check:** If a seller tells you, \"It's the newest text version so it can't be detected yet,\" or \"We haven't entered it into the software,\" they are wrong. If it is a genuine Tiger Build board, it connects to Fly CC. Period.",
    "## Step 1: Getting Connected",
    "This part is easy. Go to the App Store (iOS) or your Android app market and search for **“Flycc”**. Download it.",
    "Once installed, connect your earbuds to your phone via Bluetooth first. Then, open the app. You should see a \"Connected\" status immediately.",
    "## Step 2: The Moment of Truth (Chip Verification)",
    "Now, look at the very top of the app's homepage. This is where the app reads the hardware.",
    "![Fly CC homepage showing chip model](https://res.cloudinary.com/dl24hgcws/image/upload/v1767498607/This_area_shows_the_chip_model_e.g._AB1562AE_._At_present_the_Tiger_Build_solution_providers_all_use_Airoha_chips_specifically_1571AM_1562AE_1562F_1563E_and_1562E._ucemv0.png)",
    "You will see a model name, like `AB1571AM` or `AB1562AE`. Compare this code with what the seller promised you. If you paid for an AB1562AE chip but the app shows something else, you didn't get what you ordered. This matches the internal hardware to the marketing.",
    "## Step 3: Checking Your Features",
    "Head into the settings menu to see what your earbuds can actually do. Depending on your specific chip model, you should look for these toggles:",
    "*   **Wind Noise Cancellation** (usually with sensitivity adjustments)",
    "*   **Automatic In-Ear Detection**",
    "*   **Game Mode** (Low latency)",
    "*   **Audio EQ Settings** (like HiFi High Fidelity)",
    "*   **ANC / Transparency Mode Switching**",
    "If these options are missing or grayed out, your chipset might lack those specific features.",
    "## Step 4: Fine-Tuning Control Sensitivity",
    "One of the best parts of the **Fly CC** app is the ability to adjust how your earbuds handle touches and squeezes.",
    "**In-Ear Detection:** Turn this on to test if the music automatically pauses when you take an earbud out and plays when you put it back in.",
    "**Squeeze/Press Sensitivity:** You'll see percentage sliders for the Left and Right ears.",
    "*   **Too Sensitive?** If you are accidentally skipping songs just by adjusting the fit, slide the sensitivity down.",
    "*   **Too Slow?** If it feels unresponsive, slide it up. Just be careful—if you set it too high, you might get \"ghost touches\" where the earbud beeps without you touching it.",
    "You can also adjust the \"Press Speed\" and \"Hold Duration\" lower down on the page.",
    "![Sensitivity sliders in settings](https://res.cloudinary.com/dl24hgcws/image/upload/v1767506133/Different_chip_models_and_versions_may_lack_certain_features._i4bun6.png)",
    "## Step 5: Which Factory Made Yours?",
    "If you want to get really technical, look at the bottom right corner of the Settings page. You'll see a grey string of text, something like `BN:c4a4b6.SW`.",
    "The suffix (the letters at the end) tells you the specific manufacturer version. Common ones include **TB**, **CC**, **UF**, and **SW**.",
    "*   **Quick Note:** The **SW** version is generally considered to have better stability, which is why it often costs slightly more than the others.",
	"![Factory Made ](https://res.cloudinary.com/dl24hgcws/image/upload/v1767509469/The_suffix_letters_such_as_CC_TB_UF_and_SW_indicate_different_OEM_factories._smxhc5.png)",
    "## Appendix: How to Update Firmware (OTA)",
    "The app might alert you to a new version, like V310.6.505.157. Updates can bring cool features like Head Tracking support for Spatial Audio or general bug fixes.",
	"![OTA ](https://res.cloudinary.com/dl24hgcws/image/upload/v1767506122/It_is_best_to_perform_firmware_updates_on_an_Android_phone._ord32w.png)",
    "**CRITICAL WARNING:**",
    "1.  **Android Only:** You should virtually always use the Android version of Fly CC to run updates. iOS functionality for updates is shaky at best.",
    "2.  **Backup Plan:** If the Fly CC app on Android fails (usually due to file storage permissions), you can try using the official Airoha software called **“CloudCC”** to force the update.",
    "Always make sure your earbuds have plenty of battery life before starting an update!"
  ],
  "agentLinks": {
    "FlyCC (Android/iOS)": "Search 'Flycc' in your App Store"
  },
  "seoTitle": "Fly CC App Guide: Verify Tiger Build & Ruihu Earbuds",
  "seoKeywords": [
    "Fly CC app",
    "Tiger Build earbuds",
    "Ruihu chipset",
    "check Airoha chip",
    "Fly CC vs CloudCC",
    "Huaqiangbei earbud app"
  ]
},
  {
  "id": "8",
  "category": "Airpods",
  "title": "Tiger Build Review: Is This the \"King\" of Huaqiangbei Earbuds?",
  "price": "$35-$65",
  "weight": "0.06kg",
  "status": "PASS",
  "image": "https://res.cloudinary.com/dl24hgcws/image/upload/v1767021442/nanobanana-image-1767021272469_tg4fpm.jpg",
  "note": "The most stable, universally praised board maker in the replica game explained.",
  "content": [
    "## Who (or What) is Tiger Build?",
    "If you've been digging around for the [**best AirPods reps**](https://www.kindredflip.com/thelab/10), you've probably seen sellers bragging about \"Tiger Build\" (or *Yuehu* if they are using the Chinese name). But here's the confusing part: Tiger Build isn't the chip. It's the *Architect*.",
    "Think of it this way: The Chip (usually made by Airoha) is the engine. But someone still has to design the car, choose the tires (battery), pick the sound system (speakers), and write the software that makes the dashboard light up. That's what a **Solution Provider** does.",
    "Tiger Build is essentially the lead designer. They decide which outer shell to use, how to tune the EQ for better bass, and—most crucially—they code the firmware that handles the pop-up animations, the \"Find My\" location tracking, and the multi-device switching. ",
    "## The Chip vs. The Builder",
    "This is where people get ripped off. You can buy a pair of headphones with a high-end **Airoha 1562AE** chip, but if the motherboard was designed by a bad team, it will still suck.",
    "The big players in **Huaqiangbei** are **Tiger Build (TB)**, **Haorui (HR)**, **[Huilian](https://www.kindredflip.com/thelab/9) (HL)**, and **Jieli (JL)**. While both Tiger Build and Haorui might use the exact same Airoha 1562AE chip, Tiger Build is basically the MVP. Their product lineup is huge, and their software just feels more polished.",
    "## Reason #1 to Buy: It Just Works (Stability)",
    "Let's be real: usually, when you buy tech from Huaqiangbei, you're gambling. Will it break in a week? Will the left ear stop pairing?",
    "From a buyer's perspective, **Tiger Build** is famous for one thing: being the **\"Most Stable.\"** They have the lowest defect rate in the market. That's why Reddit and Discord communities love them. It's the safe bet.",
    "**Bonus:** Because Tiger Build is so popular, the parts are standardized. If you lose your charging case, you can actually buy a replacement Tiger Build case from a completely different seller, and it will likely pair up perfectly. Try doing that with a random generic clone—good luck.",
    "![tiger build](https://res.cloudinary.com/dl24hgcws/image/upload/v1767021817/nanobanana-image-1767021802326_xs8plf.jpg)",
    "## Reason #2: The \"Flex\" Factor",
    "Here is a little secret from the seller's side. Go search for **\"Top-tier / High-end\"** replicas. You will see every seller screaming \"Tiger Build\" or \"Airoha\" in their titles.",
    "Why? Because it's a badge of honor. You clearly don't see them bragging about having a \"Bluetrum\" or \"Jieli\" chip (those are the budget, low-quality ones). Sellers know that the moment they put the Tiger Build name on the listing, people trust it. It is the universally accepted standard for \"Top-tier.\"",
    "## The Verdict: Don't Get Scammed",
    "Now that you know Tiger Build is the gold standard for stability, you need to be careful. Because these Super Copies are so accurate, they have created a dangerous side effect in the resale market.",
    "Scammers are flooding places like Facebook Marketplace selling these high-end Tiger Build units as \"Unwanted Gifts\" for Retail Price. They look real, they act real, and they even switch devices like the real thing.",
    "**How to stay safe:**",
    "1.  **Check the Price:** If it's $40, it's a Tiger Build. If it's advertised as genuine Apple for $100 (but retails for $250), it's a scammer selling a Tiger Build.",
    "2.  **Buy from trusted links:** Don't guess. Use the links below to make sure you get the actual Tiger board with the Airoha chip, not a cheap bait-and-switch.",
    
  ],
  "agentLinks": {
    "Tiger Build ": "https://kindredflip.com"
  },
  "seoTitle": "Tiger Build Review: Is This the \"King\" of Huaqiangbei Earbuds?",
  "seoKeywords": [
    "tiger build review",
    "best airpods reps",
    "huaqiangbei earbuds",
    "tiger build features"
  ]
},
  {
  "id": "9",
  "category": "Airpods",
  "title": "Huilian Chipset Review: Is This the Best Brain for Your AirPods Reps?",
  "price": "$20-$60",
  "weight": "0.06kg",
  "status": "PASS",
  "image": "https://res.cloudinary.com/dl24hgcws/image/upload/v1767019286/nanobanana-image-1767019271489_baziu9.png",
  "note": "A deep dive into the specific hardware running the best replicas.",
  "content": [
    "## What makes a fake AirPod \"Smart\"?",
    "If you've spent any time looking for the [best **AirPods reps**](https://www.kindredflip.com/thelab/10), you've definitely seen the name **Huilian** thrown around. But what is it? A brand? A factory? A type of plastic?",
    "To understand why some replicas sound amazing and others sound like garbage, we have to look inside the stem. Specifically, at the PCB (the circuit board). This board holds the battery, the microphone, and most importantly, the **Chip**. Think of the chip as the CPU of the earbud. It's the brain running the whole show.",
    "![huilian clip](https://res.cloudinary.com/dl24hgcws/image/upload/v1767019023/%E6%85%A7%E8%81%94_-_%E5%B7%B2%E7%BC%96%E8%BE%91_mc84xx.jpg)",
    "## The Usual Suspects: Who makes the chips?",
    "Just like computers have Intel or AMD, the replica market uses chips from a few big players. You'll often see names like AIROHA, BES, Bluetrum, MediaTek, Jieli (JL), and Qualcomm.",
    "But here’s the secret: **The chip is just the starting line.** It decides the maximum potential of the headphones (the \"ceiling\"), but it doesn't guarantee they will be good. This is exactly like the smartphone world. You can have two different Android phones running the exact same Snapdragon processor. One runs smooth as butter, and the other lags because the software is bad.",
    "## Enter the \"Solution Provider\": The Real MVP",
    "This is where the magic happens. A **Solution Provider** is strictly the team of engineers who write the software and tune the audio. They take a raw chip and optimize it.",
    "With **Huilian**, things get a little confusing. The actual chip hardware they use is often called \"SmartLink\" in English. But the Solution Provider (the guys writing the code) is *also* called Huilian. I'm still not 100% sure if they are the same company or just two partners with the same name, but in the replica game, they are inseparable.",
    "## The Huilian Signature: Scrubbed Chips & Apple Magic",
    "If you crack open a pair of Huilian buds, you'll notice something sketchy but cool. They physically grind off (scrub) the original factory model numbers from the chip and print their own codes on top. They are very protective of their tech.",
   
    "**Why do people choose Huilian?**",
    "It's all about the software integration. Huilian is famous for mimicking the genuine AirPods operating system better than almost anyone else.",
    "*   **Huilian-247B & Huilian-277:** These are the workhorses. They offer solid stability and that instant \"cloud connectivity\" feeling.",
    "*   **Huilian-377:** This is the high-end option. On newer iOS systems, this model even supports **AI Translation** features, which is wild for a replica.",
    "## The Verdict: Don't Get Scammed",
    "Now that you understand the level of sophistication involved—how Huilian combines specific SmartLink chips with their custom software—you need to be carefully. Because these Super Copies are so accurate, they have created a dangerous side effect in the resale market.",
    "This guide isn't just for buyers—it's for protection. Scammers are flooding places like Facebook Marketplace selling these high-end Super Copies as \"Unwanted Gifts\" for Retail Price.",
    "**How to stay safe:**",
    "1.  Always check the 'Find My' feature in the Bluetooth settings. Cheap fakes often fail here.",
    "2.  Remember: if the price looks too good to be true for a \"genuine\" pair, it's probably a Super Copy.",
    "Ready to find the right batch? Check out the trusted links below to ensure you get a real Huilian chipset and not a cheap knock-off."
  ],
  "agentLinks": {
    "Huilian 377 (Top Tier)": "https://kindredflip.com"
  },
  "seoTitle": "Huilian AirPods Reps Review: 247B, 377, and SmartLink Explained",
  "seoKeywords": [
    "huilian chip review",
    "best airpods reps",
    "huilian vs airoha",
    "huilian 377 features",
    "smartlink chip airpods"
  ]
},
{
  "id": "10",
  "category": "Airpods",
  "title": "AirPods Super Copy Review: The Secret Hierarchy of Replica Airpods",
  "price": "$20-$55.00",
  "weight": "0.06kg",
  "status": "PASS",
  "image": "https://res.cloudinary.com/dl24hgcws/image/upload/v1767016257/nanobanana-image-1767016214611_twcsou.png",
  "note": "Three key things to build AirPods Super Copy",
  "content": [
    "## Are AirPods Super Copies Worth the Hype? The Truth Revealed",
    "Let's be real: spending over $200 on earbuds that you might lose in a week feels painful. That’s probably why you’re here searching for an **AirPods super copy**. But the market is a minefield. You've heard the horror stories of reps breaking in two days or sounding like a tin can on a string.",
    "However, not all replicas are created equal. In the shadowy world of Huaqiangbei electronics, there is a distinct hierarchy. Some are cheap knock-offs sold for only $1, while others—the \"Super Copies\"—are engineered with such precision that they are virtually indistinguishable from the real thing.",
    "![Super Copy AirPods](https://res.cloudinary.com/dl24hgcws/image/upload/v1767016986/%E9%85%8D%E5%9B%BE1_pypbvn.jpg)",
    "In this review, I'm breaking down exactly why some reps slap while others fail, using a simple analogy to explain the tech stack behind them. If you're looking to save money without sacrificing quality, or just want to avoid getting scammed by a fake sold as \"new,\" stick around.",
    "## The Three Pillars of a Premium Replica",
    "Why is there such a massive gap in quality between a $1 fake and a $55 Super Copy? It all comes down to the supply chain. Making a pair of wireless headphones requires three distinct entities working in harmony. Let’s break it down with the **Pizza Analogy**.",
    "### 1. The Chip Provider (The Magic Cheese Farm)",
    "The chipset is the brain of the operation. In our pizza story, this is the 'magic cheese' that determines the potential flavor profile.",
    "*   **Cheap Providers (e.g., Jeili):** This is your standard, processed supermarket cheese. It works, it's edible, but it's nothing special.",
    "*   **Top-Tier Providers (e.g., Airoha, Huilian):** This is the artisanal, high-end magic cheese. It allows for advanced features like true noise cancellation and spatial audio.",
    "**The Catch:** The absolute best chips are reserved for big brands like Sony or Apple. Replicas can't buy those. However, the top-tier \"Super Copy\" manufacturers use the next best thing—high-end chips from Airoha that get dangerously close to the original performance.",
    "**Common High-End Chips to Look For:**",
    "> Huilian-247B, Airoha-1562AE, Huilian-377, Huilian-277, Airoha-1571AM, Airoha-1563E",
    "### 2. The Solution Provider (The Secret-Recipe Chef)",
    "Having good cheese (chips) isn't enough; you need a chef to cook it. This is the PCB solution provider who writes the firmware and software.",
    "Apple has unlimited resources to hire the world's best engineers. But the \"Super Copy\" market has its own master chefs. Companies like **Huilian** and **Tiger Build** act as the copycat experts.",
    "These engineers are brilliant at reverse-engineering. They’ve cracked the code to make the pop-up animation appear instantly on your iPhone. With the latest top-tier solutions, 99% of users cannot tell the difference in a blind audio test. Unless you are a golden-eared audiophile, the sound signature on a properly tuned rep is shockingly good.",
    "### 3. The Factory (The Kitchen Team)",
    "Finally, the factory assembles the physical product. This is where the replica market truly shines today.",
    "Modern Super Copy factories have mastered the external hardware. We're talking about a 1:1 match on:",
    "*   **Build Quality:** The weight and magnetic hinge snap are identical.",
    "*   **Materials:** The specific glossy white plastic feels premium, not hollow.",
    "*   **Packaging:** Even the box text and pull-tabs are replicated perfectly.",
    "When you unbox a \"Super Copy\" batch, you will likely think it's genuine for the first 10 minutes. The illusion is that complete.",
    "## The Verdict: Don't Get Scammed",
    "Now that you understand the level of sophistication involved, you need to be careful. Because these Super Copies are so accurate—combining the right chip, solution, and casing—they have created a dangerous side effect in the resale market.",
    "This guide isn't just for buyers—it's for protection. Scammers are flooding places like Facebook Marketplace selling these high-end Super Copies as \"Unwanted Gifts\" for Retail Price.",
    "**How to stay safe:**",
    "1.  Always check the Find Me in the Bluetooth settings.",
    "2.  Remember: if the price looks too good to be true for a \"genuine\" pair, it's probably a Super Copy.",
    "Ready to find the right batch? Check out the trusted links below to ensure you get the premium Airoha chipset and not a cheap plastic toy."
  ],
  "agentLinks": {
    "Purchase (Airoha 1562AE)": "https://kindredflip.com"
  },
  "seoTitle": "Best AirPods Super Copy Review 2026: Chip-Solution Provider-Factory",
  "seoKeywords": [
    "airpods super copy",
    "best airpod reps 2026",
    "airoha 1562ae review",
    "huaqiangbei airpods",
    "airpods replica guide"
  ]
},
  
];

// 4. ARTICLES (Gold Items)
export const ARTICLES: ArticleItem[] = [
  {
  id: 'unique-id-here',          // 唯一ID，不能重复
  title: '[GOLD] 商品标题',
  excerpt: '显示在卡片上的简短介绍',
  image: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766487642/samples/upscale-face-1.jpg',          // Cloudinary 图片链接
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
    "![图片说明](https://res.cloudinary.com/dl24hgcws/image/upload/v1766487639/samples/breakfast.jpg)", // 插入图片
    "这里是正文段落2。"
  ],
  verdict: "总结评价"
},
  {
    id: 'a1',
    title: '[GOLD] Snanen 360° Magnetic Suction Phone Mount - Hands-Free',
    excerpt: 'The ultimate hands-free holder tested for stability and magnet strength.',
    image: 'https://picsum.photos/500/500?random=20',
    date: 'Oct 12, 2025',
    author: 'RepMaster_J',
    tags: ['Tech', 'Accessories', 'Review'],
    rating: 5,
    isFeatured: true, 
    isSale: true,
    
    // =======================================================
    // 🔗 MANUAL LINK CONFIGURATION
    // 在这里手动配置每个 Agent 的购买链接
    // 1. rawLink: 淘宝/微店原链接 (用于 "Copy Link" 按钮)
    // 2. agentLinks: 粘贴你在各平台的推广链接 (用于下拉菜单)
    // =======================================================
    rawLink: 'https://weidian.com/item.html?itemID=123456789',
    
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/?shop_type=weidian&id=123456789&ref=MY_CODE',
        'Mulebuy': 'https://mulebuy.com/product/?url=https://weidian.com/item.html?itemID=123456789&inviteCode=MY_CODE',
        'Hoobuy': 'https://hoobuy.com/product/2/123456789',
        'Kakobuy': 'https://kakobuy.com/item/123456789',
        // 如果这里不写某个 Agent，下拉菜单里就不会出现它
    },
    // =======================================================

    content: [
      "This phone mount has completely changed my driving setup. The magnet strength is incredible—even over speed bumps, my iPhone 15 Pro Max doesn't budge.",
      "Installation was a breeze. It uses a high-quality 3M adhesive that sticks to the dashboard texture without peeling off in the heat."
    ],
    verdict: "A must-have for anyone who uses GPS navigation daily. 10/10 stability."
  },
  {
    id: 'a2',
    title: '[GOLD] AimoStand – AI Smart Tracking Phone Stand',
    excerpt: 'Built-in AI Camera Smart Auto-Tracking Phone Stand review.',
    image: 'https://picsum.photos/500/500?random=21',
    date: 'Oct 08, 2025',
    author: 'TechWearAddict',
    tags: ['Tech', 'Review'],
    rating: 4,
    isFeatured: true, 
    isSale: true,
    
    rawLink: 'https://item.taobao.com/item.htm?id=987654321', 
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/?shop_type=taobao&id=987654321',
        'Superbuy': 'https://superbuy.com/en/page/buy?url=https://item.taobao.com/item.htm?id=987654321',
        'AllChinaBuy': 'https://www.allchinabuy.com/en/page/buy/?url=https://item.taobao.com/item.htm?id=987654321'
    }
  },
  {
    id: 'a3',
    title: '[GOLD] CyanVue AI Smart Glasses – 8MP Camera',
    excerpt: 'Smart glasses with music & call features. Are they worth the hype?',
    image: 'https://picsum.photos/500/500?random=22',
    date: 'Sept 29, 2025',
    author: 'HaulGod',
    tags: ['Tech', 'Wearable'],
    rating: 5,
    isFeatured: true, 
    isSale: false,
    
    rawLink: 'https://detail.1688.com/offer/11223344.html',
    agentLinks: {
        'CNfans': 'https://cnfans.com/product/?shop_type=1688&id=11223344',
        'Hoobuy': 'https://hoobuy.com/product/0/11223344'
    }
  },
  {
    id: 'a4',
    title: '[GOLD] Carvera Smart 10.26" CarPlay & 4K Dual-Dash Cam',
    excerpt: 'Upgrade your old car with this plug-and-play CarPlay screen.',
    image: 'https://picsum.photos/500/500?random=23',
    date: 'Sept 15, 2025',
    author: 'CarMods',
    tags: ['Car', 'Tech'],
    rating: 4,
    isFeatured: false,
    isSale: true,
    // Example: No agent links configured yet, buttons will be disabled/hidden
  },
  {
    id: 'a5',
    title: 'REVIEW: The Definitive Guide to GX Batch Jordan 4s (2025)',
    excerpt: 'We bought 5 pairs of Black Cats. Here is why GX batch is king.',
    image: 'https://picsum.photos/800/600?random=50',
    date: 'Sept 10, 2025',
    author: 'SneakerHead99',
    tags: ['Shoes', 'Review'],
    rating: 5,
    isFeatured: false,
    content: ["Full review content here..."]
  },
   {
    id: 'a6',
    title: 'HAUL REVIEW: 15kg Summer Haul - Stussy, Corteiz, Nike',
    excerpt: 'A massive breakdown of my latest shipment.',
    image: 'https://picsum.photos/800/600?random=55',
    date: 'Aug 22, 2025',
    author: 'FashionKilla',
    tags: ['Haul', 'Summer'],
    rating: 5,
    isFeatured: false
  }
];

export const GOLD_ITEMS = ARTICLES.filter(item => item.isFeatured);

// =====================================================================
// 5. GLOBAL SITE CONFIG (Icon & Metadata)
// =====================================================================
export const SITE_CONFIG = {
  // 请将此链接替换为您上传到 Cloudinary 的图标 URL (建议 512x512 PNG)
  // 这个图标将用于：
  // 1. 浏览器标签页 (Favicon)
  // 2. 网站导航栏左上角的 Logo
  // 3. 手机添加到主屏幕的图标
  icon: 'https://res.cloudinary.com/dl24hgcws/image/upload/v1766500843/fra_nam9p0.png', // 示例图片，请替换
};