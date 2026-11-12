"use strict";

/* =========================================================
   ALI TORKAMAN — PORTFOLIO PROJECT DATABASE
   Single Source of Truth
   =========================================================

   برای افزودن پروژه جدید:
   یک object جدید به انتهای آرایه PROJECTS اضافه کنید.

   category:
   advertising -> تبلیغات
   branding   -> هویت بصری
   packaging  -> بسته‌بندی
   digital    -> طراحی دیجیتال
   poster     -> پوستر
   editorial  -> ادیتوریال

   type:
   concept -> پروژه مفهومی
   client  -> پروژه واقعی مشتری

   featured:
   true  -> نمایش در صفحه اصلی
   false -> نمایش فقط در صفحه پروژه‌ها

   ========================================================= */

const PROJECTS = [

    /* =====================================================
       01 — NOVA
       ===================================================== */

    {
        id: "nova",
        title: "NOVA",
        category: "advertising",
        categoryLabel: "تبلیغات فشن",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "کانسپت کمپین فشن با رویکرد مینیمالیسم شهری، ترکیب‌بندی دقیق و هویت بصری پریمیوم.",

        description:
            "NOVA یک کانسپت تبلیغاتی برای معرفی یک برند فشن است. ایده بصری پروژه بر ایجاد تعادل میان محصول، فضای منفی و تایپوگرافی متمرکز است؛ رویکردی که با حذف عناصر غیرضروری، توجه مخاطب را به پیام اصلی و شخصیت برند هدایت می‌کند.",

        cover: "images/001.webp",

        tools: ["Photoshop", "AI-assisted"],

        services: [
            "Art Direction",
            "Fashion Advertising",
            "Visual Concept Development",
            "Photo Compositing"
        ]
    },

    /* =====================================================
       02 — VANTA
       ===================================================== */

    {
        id: "vanta",
        title: "VANTA",
        category: "advertising",
        categoryLabel: "تبلیغات محصول",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "کانسپت تبلیغاتی هدفون پریمیوم با تمرکز بر نمایش محصول، نورپردازی تجاری و پرداخت متریال.",

        description:
            "VANTA یک کانسپت تبلیغاتی برای معرفی یک هدفون بی‌سیم پریمیوم است. در این پروژه، محصول به‌عنوان نقطه کانونی تصویر تعریف شده و نورپردازی، کنتراست و جزئیات متریال برای انتقال حسی دقیق، مدرن و تکنولوژیک به کار رفته‌اند.",

        cover: "images/002.webp",

        tools: ["Photoshop", "AI-assisted"],

        services: [
            "Product Advertising",
            "Art Direction",
            "Product Visualization",
            "Photo Compositing"
        ]
    },

    /* =====================================================
       03 — ROAST
       ===================================================== */

    {
        id: "roast",
        title: "ROAST",
        category: "advertising",
        categoryLabel: "تبلیغات غذایی",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "کانسپت تبلیغات غذایی با تأکید بر اشتهابرانگیزی، نورپردازی و برجسته‌سازی بافت محصول.",

        description:
            "ROAST یک کانسپت تبلیغاتی در حوزه غذاست که با تکیه بر تصویرسازی محصول، کنتراست کنترل‌شده و ترکیب‌بندی هدفمند، تجربه‌ای بصری و اشتهابرانگیز ایجاد می‌کند. ساختار طراحی به‌گونه‌ای شکل گرفته که محصول در نگاه نخست قابل تشخیص باشد و بیشترین سهم توجه را به خود اختصاص دهد.",

        cover: "images/003.webp",

        tools: ["Photoshop"],

        services: [
            "Food Advertising",
            "Art Direction",
            "Food Photo Manipulation",
            "Campaign Key Visual"
        ]
    },

    /* =====================================================
       04 — NEXA
       ===================================================== */

    {
        id: "nexa",
        title: "NEXA",
        category: "digital",
        categoryLabel: "تبلیغات محصول دیجیتال",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "کانسپت معرفی محصول مالی دیجیتال با تمرکز بر وضوح پیام، سادگی و اعتماد بصری.",

        description:
            "NEXA یک کانسپت بصری برای معرفی محصولی در حوزه فناوری مالی (Fintech) است. جهت‌گیری طراحی بر ساده‌سازی پیام، سازمان‌دهی اطلاعات و ایجاد ارتباطی روشن میان فناوری و اعتماد شکل گرفته است. زبان بصری پروژه تلاش می‌کند پیچیدگی خدمات مالی دیجیتال را به تجربه‌ای قابل فهم و منسجم تبدیل کند.",

        cover: "images/004.webp",

        tools: ["Figma"],

        services: [
            "Digital Advertising",
            "Digital Visual Design",
            "Campaign Concept",
            "Art Direction"
        ]
    },

    /* =====================================================
       05 — NOIR
       ===================================================== */

    {
        id: "noir",
        title: "NOIR",
        category: "packaging",
        categoryLabel: "بسته‌بندی و تبلیغات محصول",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "کانسپت معرفی Cold Brew با هویت بصری تیره، کنتراست بالا و تمرکز بر حضور محصول.",

        description:
            "NOIR یک کانسپت تبلیغاتی برای محصول Cold Brew است. فضای تیره، کنتراست کنترل‌شده و تأکید بر فرم محصول، شخصیت بصری متمایزی برای آن ایجاد می‌کنند. هدف طراحی، ساخت تصویری یکپارچه و قابل استفاده در معرفی محصول و ارتباطات بازاریابی یک برند نوشیدنی است.",

        cover: "images/005.webp",

        tools: ["Photoshop", "AI-assisted"],

        services: [
            "FMCG Advertising",
            "Product Visual Design",
            "Packaging Visual",
            "Campaign Design"
        ]
    },

    /* =====================================================
       06 — موبایل مرکزی
       ===================================================== */

    {
        id: "markazi-mobile",
        title: "موبایل مرکزی",
        category: "advertising",
        categoryLabel: "تبلیغات فروشگاهی",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "طراحی محتوای تبلیغاتی برای کمپین فروش ویژه فروشگاه موبایل و تجهیزات دیجیتال.",

        description:
            "این طرح با هدف معرفی پیشنهاد فروش یک فروشگاه موبایل و لوازم دیجیتال توسعه یافته است. اولویت طراحی، ایجاد سلسله‌مراتب روشن میان محصول، پیام فروش و اطلاعات تکمیلی است تا مخاطب در زمان کوتاه، پیشنهاد اصلی را تشخیص دهد و مسیر توجه او در ترکیب‌بندی حفظ شود.",

        cover: "images/006.webp",

        tools: ["Photoshop", "Illustrator"],

        services: [
            "Advertising Design",
            "Social Media Design",
            "Art Direction",
            "Commercial Visual Design"
        ]
    },

    /* =====================================================
       07 — پوشاک آریا
       ===================================================== */

    {
        id: "arya-apparel",
        title: "پوشاک آریا",
        category: "advertising",
        categoryLabel: "تبلیغات محیطی",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "کانسپت بیلبورد حراج پایان فصل با تمرکز بر خوانایی سریع و برجسته‌سازی پیشنهاد فروش.",

        description:
            "این طرح، کانسپت یک بیلبورد تبلیغاتی برای کمپین حراج پایان فصل فروشگاه پوشاک آریا است. ساختار گرافیکی با اولویت خوانایی از فاصله دور، تفکیک پیام اصلی از اطلاعات فرعی و ایجاد کنتراست مناسب شکل گرفته است؛ اصولی که در طراحی رسانه‌های محیطی برای انتقال سریع پیام اهمیت دارند.",

        cover: "images/007.webp",

        tools: ["Photoshop", "Illustrator"],

        services: [
            "Outdoor Advertising",
            "Billboard Design",
            "Campaign Visual",
            "Art Direction"
        ]
    },

    /* =====================================================
       08 — خانه‌نو
       ===================================================== */

    {
        id: "khaneh-no",
        title: "خانه‌نو",
        category: "digital",
        categoryLabel: "طراحی دیجیتال و شبکه‌های اجتماعی",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "طراحی محتوای تبلیغاتی برای معرفی محصول فروشگاه آنلاین لوازم دکوراسیون منزل.",

        description:
            "این طرح برای معرفی محصول در یک فروشگاه آنلاین دکوراسیون منزل طراحی شده است. ترکیب‌بندی، نمایش محصول و جای‌گذاری اطلاعات کاربردی با هدف ایجاد تعادل میان جذابیت بصری و انتقال سریع اطلاعات انجام شده تا محتوا در بستر شبکه‌های اجتماعی نیز خوانا و مؤثر باقی بماند.",

        cover: "images/008.webp",

        tools: ["Photoshop", "Illustrator"],

        services: [
            "Social Media Design",
            "Digital Advertising",
            "Product Presentation",
            "Visual Design"
        ]
    },

    /* =====================================================
       09 — WEEKEND UPGRADE
       ===================================================== */

    {
        id: "weekend-upgrade",
        title: "آخر هفته، وقتشه ارتقا بدی.",
        category: "advertising",
        categoryLabel: "کمپین فروش",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "کانسپت پست تبلیغاتی کمپین تخفیف فروشگاه محصولات و تجهیزات دیجیتال.",

        description:
            "این طرح با محوریت پیام «آخر هفته، وقتشه ارتقا بدی» برای یک کمپین فروش دیجیتال توسعه یافته است. پیام تبلیغاتی در مرکز سلسله‌مراتب بصری قرار دارد و ترکیب تصویر محصول، تایپوگرافی و فضای گرافیکی به شکلی تنظیم شده که پیشنهاد فروش در نگاه نخست دیده شود.",

        cover: "images/009.webp",

        tools: ["Photoshop"],

        services: [
            "Social Media Advertising",
            "Campaign Key Visual",
            "Advertising Design",
            "Visual Composition"
        ]
    },

    /* =====================================================
       10 — FOODINO
       ===================================================== */

    {
        id: "foodino",
        title: "فودینو",
        category: "advertising",
        categoryLabel: "تبلیغات غذایی",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: true,

        shortDescription:
            "طراحی محتوای تبلیغاتی برای معرفی برگر ویژه رستوران با تمرکز بر جذابیت بصری محصول.",

        description:
            "این طرح یک محتوای تبلیغاتی برای معرفی برگر ویژه رستوران فودینو است. تصویر غذا نقش اصلی را در جلب توجه دارد و تایپوگرافی و اطلاعات فروش در جایگاه‌های مکمل قرار گرفته‌اند. هدف، ایجاد ارتباط سریع میان محصول و پیام تبلیغاتی در قالبی مناسب برای انتشار دیجیتال است.",

        cover: "images/010.webp",

        tools: ["Photoshop", "Illustrator", "AI-assisted"],

        services: [
            "Food Advertising",
            "Social Media Design",
            "Food Visual Composition",
            "Campaign Design"
        ]
    },

    /* =====================================================
       11 — VEIL
       ===================================================== */

    {
        id: "veil",
        title: "VEIL",
        category: "advertising",
        categoryLabel: "تبلیغات عطر و محصولات لوکس",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: false,

        shortDescription:
            "طراحی Key Visual برای کانسپت عطر نیش با محوریت حضور نامرئی و ماندگاری رایحه.",

        description:
            "VEIL یک کانسپت تبلیغاتی برای دنیای عطرهای نیش است. ایده مرکزی پروژه، تبدیل مفهوم انتزاعی «رایحه‌ای که دیده نمی‌شود، اما می‌ماند» به یک استعاره بصری مینیمال است. کنترل فضای منفی، جزئیات محدود و ترکیب‌بندی آرام به شکل‌گیری لحنی ظریف و لوکس کمک می‌کنند.",

        cover: "images/011.webp",

        tools: ["Photoshop", "AI-assisted"],

        services: [
            "Art Direction",
            "Key Visual Design",
            "Luxury Advertising",
            "Campaign Concept"
        ]
    },

    /* =====================================================
       14 — AIR JORDAN 1
       ===================================================== */

    {
        id: "air-jordan-1",
        title: "AIR JORDAN 1",
        category: "advertising",
        categoryLabel: "تبلیغات ورزشی و محصول",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: false,

        shortDescription:
            "کانسپت پوستر تبلیغاتی Air Jordan 1 با تمرکز بر نمایش محصول و ترکیب‌بندی پویا.",

        description:
            "این اثر یک کانسپت تبلیغاتی مستقل برای محصول Air Jordan 1 است. جهت‌گیری بصری بر نمایش شاخص محصول، ترکیب‌بندی پویا، نورپردازی کنترل‌شده و تایپوگرافی هدفمند استوار است. این پروژه تمرینی و غیررسمی است و به سفارش یا تأیید Nike یا Jordan Brand تولید نشده است.",

        cover: "images/014.webp",

        tools: ["Photoshop", "Illustrator", "AI-assisted"],

        services: [
            "Product Advertising",
            "Art Direction",
            "Product Visual Design",
            "Photo Compositing"
        ]
    },

    /* =====================================================
       15 — ARCEN
       ===================================================== */

    {
        id: "arcen",
        title: "ARCEN",
        category: "branding",
        categoryLabel: "هویت بصری",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: false,

        shortDescription:
            "طراحی نشانه مینیمال و هندسی با تمرکز بر تناسبات، فضای منفی و ماندگاری فرم.",

        description:
            "ARCEN یک پروژه مفهومی در زمینه طراحی هویت بصری است. نشانه با رویکردی هندسی و مینیمال توسعه یافته و تمرکز اصلی بر تناسبات فرمی، تعادل بصری و استفاده هدفمند از فضای منفی قرار دارد. هدف، دستیابی به نمادی ساده، متمایز و قابل تشخیص در اندازه‌ها و کاربردهای مختلف است.",

        cover: "images/015.webp",

        tools: ["Illustrator"],

        services: [
            "Logo Design",
            "Brand Identity",
            "Geometric Design",
            "Visual Identity Development"
        ]
    },

    /* =====================================================
       16 — DAYTONA
       ===================================================== */

    {
        id: "daytona",
        title: "DAYTONA — TIME IS RACING",
        category: "advertising",
        categoryLabel: "تبلیغات محصول لوکس",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: false,

        shortDescription:
            "کانسپت تبلیغاتی Rolex Daytona Ref. 6239 با پیوند مفهومی زمان، سرعت و مسابقه.",

        description:
            "این کانسپت مستقل با الهام از پیوند تاریخی مدل Cosmograph Daytona با مسابقات اتومبیل‌رانی شکل گرفته است. ساعت به‌عنوان عنصر اصلی تصویر، با مسیر مسابقه و خطوط حرکتی در یک ساختار بصری واحد ارتباط پیدا می‌کند. هدف، بازنمایی مفهوم «زمان در رقابت» از طریق ترکیب‌بندی، حرکت و نمایش محصول است. این اثر غیررسمی است و به سفارش یا تأیید Rolex تولید نشده است.",

        cover: "images/016.webp",

        tools: ["Photoshop", "AI-assisted"],

        services: [
            "Luxury Product Advertising",
            "Art Direction",
            "Product Visual Design",
            "Photo Compositing",
            "Concept Development"
        ]
    },

    /* =====================================================
       17 — FERRARI SF90
       ===================================================== */

    {
        id: "ferrari-sf90",
        title: "FERRARI SF90",
        category: "poster",
        categoryLabel: "پوستر تبلیغاتی خودرو",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: false,

        shortDescription:
            "طراحی پوستر مفهومی Ferrari SF90 با تمرکز بر حضور محصول و هویت بصری عملکردمحور.",

        description:
            "این اثر یک پوستر مفهومی مستقل برای Ferrari SF90 است. ساختار طراحی با هدف برجسته‌سازی فرم خودرو و انتقال حس قدرت و عملکرد شکل گرفته است. پروژه جنبه تمرینی و نمایشی دارد و به سفارش یا تأیید Ferrari تولید نشده است.",

        cover: "images/017.webp",

        tools: ["Photoshop"],

        services: [
            "Automotive Poster Design",
            "Product Visual",
            "Advertising Design",
            "Visual Composition"
        ]
    },

    /* =====================================================
       18 — MONOFORM ARC/01
       ===================================================== */

    {
        id: "monoform-arc-01",
        title: "MONOFORM — ARC/01",
        category: "advertising",
        categoryLabel: "تبلیغات محصول صوتی",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: false,

        shortDescription:
            "کانسپت تبلیغاتی اسپیکر قابل‌حمل ARC/01 با ترکیب فرم محصول، خطوط صوتی و هویت تکنولوژیک.",

        description:
            "این کانسپت تبلیغاتی برای معرفی اسپیکر قابل‌حمل ARC/01 با هویت MONOFORM طراحی شده است. محصول در نقطه کانونی قرار می‌گیرد و خطوط موج‌دار پیرامونی، مفهوم انتشار صدا را به یک عنصر گرافیکی تبدیل می‌کنند. زمینه تیره، تأکیدهای آبی و مرجانی و تایپوگرافی فشرده، زبان بصری مدرن و محصول‌محور کمپین را شکل می‌دهند.",

        cover: "images/018.webp",

        tools: ["AI-assisted"],

        services: [
            "Product Advertising",
            "Art Direction",
            "Key Visual Design",
            "Product Visual Composition",
            "Campaign Design"
        ]
    },

    /* =====================================================
       19 — VEKTOR SHIFT/01
       ===================================================== */

    {
        id: "vektor-shift-01",
        title: "VEKTOR — SHIFT/01",
        category: "advertising",
        categoryLabel: "تبلیغات ورزشی",
        type: "concept",
        typeLabel: "پروژه مفهومی",
        year: "2026",
        featured: false,

        shortDescription:
            "کانسپت کمپین کفش ورزشی SHIFT/01 با تأکید بر حرکت، انرژی شهری و نمایش محصول.",

        description:
            "این کانسپت تبلیغاتی برای معرفی کفش ورزشی SHIFT/01 با هویت VEKTOR توسعه یافته است. خطوط منحنی و مسیرهای رنگی، مفهوم حرکت و پویایی شهری را در اطراف محصول بازنمایی می‌کنند. ترکیب مشکی با سبز نئونی و آبی، در کنار تیتر قدرتمند «MOTION DOESN’T WAIT.» شخصیت پرانرژی و عملکردمحور کمپین را تقویت می‌کند.",

        cover: "images/019.webp",

        tools: ["AI-assisted"],

        services: [
            "Sports Advertising",
            "Product Advertising",
            "Art Direction",
            "Key Visual Design",
            "Campaign Visual"
        ]
    },

    /* =====================================================
       20 — ZENITH
       ===================================================== */

    {
        id: "zenith",
        title: "ZENITH — LESS NOISE. MORE FOCUS.",

        category: "advertising",
        categoryLabel: "تبلیغات محصول دیجیتال",

        type: "concept",
        typeLabel: "پروژه مفهومی",

        year: "2026",

        featured: false,

        shortDescription:
            "کانسپت تبلیغاتی هدفون بی‌سیم پریمیوم با تمرکز بر طراحی محصول، نورپردازی سینمایی و هویت بصری تکنولوژیک.",

        description:
            "ZENITH یک کانسپت تبلیغاتی برای معرفی یک هدفون بی‌سیم پریمیوم است. ایده مرکزی پروژه با شعار «LESS NOISE. MORE FOCUS.» بر ایجاد ارتباط میان فناوری، تمرکز و تجربه شنیداری شکل گرفته است. استفاده از پس‌زمینه تیره، نورهای آبی الکتریکی، انعکاس‌های کنترل‌شده و نمایش نزدیک محصول، زبان بصری مدرن و مینیمالیستی کمپین را شکل می‌دهد. ساختار ترکیب‌بندی با ایجاد تضاد میان فضای منفی و حضور قدرتمند محصول، توجه مخاطب را به سوژه اصلی هدایت می‌کند. این پروژه یک کانسپت مستقل و غیررسمی است.",

        cover: "images/020.webp",

        tools: ["AI-assisted"],

        services: [
            "Product Advertising",
            "Art Direction",
            "Key Visual Design",
            "Product Visualization",
            "Advertising Composition",
            "Campaign Concept"
        ]
    },

{
  id: "zenith-neon",
  title: "ZENITH — HEAR MORE. FEEL MORE.",
  category: "advertising",
  categoryLabel: "تبلیغات محصول دیجیتال",
  type: "concept",
  typeLabel: "پروژه مفهومی",
  year: "2026",
  featured: false,
  cover: "images/021.webp",
  description:
    "A high-impact product advertising concept for ZENITH premium wireless headphones. Combining cinematic product visualization, neon-lime lighting, sculptural motion elements, and a bold dark aesthetic to communicate immersive sound, performance, and modern technology.",
  tools: ["AI-assisted"],
  services: [
    "Product Advertising",
    "Art Direction",
    "Key Visual Design",
    "Product Visualization",
    "Advertising Composition",
    "Brand Campaign Concept"
  ]
},

];
