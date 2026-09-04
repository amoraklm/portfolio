"use strict";

/*
 * =========================================================
 * PORTFOLIO PROJECT DATABASE
 * =========================================================
 *
 * Single Source of Truth
 *
 * برای اضافه کردن پروژه جدید فقط یک object
 * به انتهای این آرایه اضافه کنید.
 *
 * id:
 * شناسه یکتا برای آدرس project.html?id=...
 *
 * featured:
 * true  -> نمایش در صفحه اصلی
 * false -> فقط در صفحه پروژه‌ها
 *
 * type:
 * concept -> پروژه مفهومی
 * legacy  -> پروژه‌های قبلی
 * client  -> پروژه واقعی مشتری
 */

const PROJECTS = [

    /* =====================================================
       01 — NOVA
       ===================================================== */

    {
        id: "nova",

        title: "NOVA",

        category: "advertising",
        categoryLabel: "تبلیغات",

        type: "concept",
        typeLabel: "پروژه مفهومی",

        year: "2026",

        featured: true,

        shortDescription:
            "کمپین تبلیغاتی فشن با تمرکز بر مینیمالیسم شهری، فضای منفی و هویت بصری پریمیوم.",

        description:
            "NOVA یک کانسپت کمپین تبلیغاتی برای یک برند فشن فرضی است. تمرکز پروژه روی ایجاد یک زبان تصویری مینیمال، کنترل‌شده و مناسب تبلیغات مدرن بوده است.",

        cover:
            "images/NOVA_AW2026_V2.png",

        tools: [
            "Photoshop",
            "AI-assisted"
        ],

        services: [
            "Art Direction",
            "Advertising Design",
            "Photo Composition",
            "Visual Concept"
        ]
    },


    /* =====================================================
       02 — VANTA
       ===================================================== */

    {
        id: "vanta",

        title: "VANTA",

        category: "advertising",
        categoryLabel: "تبلیغات",

        type: "concept",
        typeLabel: "پروژه مفهومی",

        year: "2026",

        featured: true,

        shortDescription:
            "کمپین معرفی یک هدفون پریمیوم با تمرکز بر نورپردازی تجاری، متریال و Product Visual.",

        description:
            "VANTA یک کانسپت کمپین تبلیغاتی برای یک هدفون بی‌سیم پریمیوم است. طراحی بر نمایش محصول، کنترل نور و ایجاد حس تکنولوژیک و لوکس تمرکز دارد.",

        cover:
            "images/projects/vanta/cover.webp",

        tools: [
            "Photoshop",
            "AI-assisted"
        ],

        services: [
            "Product Advertising",
            "Art Direction",
            "Compositing",
            "Visual Development"
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
            "کمپین تبلیغاتی غذایی با تمرکز بر Food Visual، نورپردازی و اشتهابرانگیزی.",

        description:
            "ROAST یک کانسپت تبلیغاتی برای یک برند غذایی فرضی است که تلاش می‌کند از طریق تصویرسازی محصول، کنتراست، نور و ترکیب‌بندی، توجه مخاطب را جلب کند.",

        cover:
            "images/projects/roast/cover.webp",

        tools: [
            "Photoshop",
            "AI-assisted"
        ],

        services: [
            "Food Advertising",
            "Art Direction",
            "Photo Manipulation",
            "Campaign Visual"
        ]
    },


    /* =====================================================
       04 — NEXA
       ===================================================== */

    {
        id: "nexa",

        title: "NEXA",

        category: "digital",
        categoryLabel: "محصول دیجیتال",

        type: "concept",
        typeLabel: "پروژه مفهومی",

        year: "2026",

        featured: true,

        shortDescription:
            "کانسپت تبلیغاتی برای یک محصول Fintech با تمرکز بر محصول دیجیتال، اعتماد و سادگی.",

        description:
            "NEXA یک کانسپت برای معرفی یک محصول مالی دیجیتال است. هدف اصلی پروژه ایجاد ارتباط میان تکنولوژی، سادگی استفاده و حس اعتماد در یک سیستم بصری یکپارچه بوده است.",

        cover:
            "images/projects/nexa/cover.webp",

        tools: [
            "Photoshop",
            "Figma",
            "AI-assisted"
        ],

        services: [
            "Digital Advertising",
            "UI Visual Design",
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
        categoryLabel: "بسته‌بندی / FMCG",

        type: "concept",
        typeLabel: "پروژه مفهومی",

        year: "2026",

        featured: true,

        shortDescription:
            "کمپین معرفی یک Cold Brew با هویت بصری تیره، جسورانه و متمرکز بر حضور محصول.",

        description:
            "NOIR یک کانسپت کمپین برای یک محصول Cold Brew است که بر ایجاد شخصیت بصری متمایز، فضای تیره و تمرکز حداکثری روی محصول تأکید دارد.",

        cover:
            "images/005.png",

        tools: [
            "Photoshop",
            "AI-assisted"
        ],

        services: [
            "FMCG Advertising",
            "Product Visual",
            "Packaging Visual",
            "Campaign Design"
        ]
    },


    /* =====================================================
       06 — RESA SAFFON
       ===================================================== */

    {
        id: "resa-saffon",

        title: "Resa Saffon",

        category: "packaging",
        categoryLabel: "بسته‌بندی",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "پروژه طراحی بسته‌بندی.",

        description:
            "پروژه‌ای در زمینه طراحی بسته‌بندی.",

        cover:
            "images/project1.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Packaging Design"
        ]
    },


    /* =====================================================
       07 — EVENT POSTER
       ===================================================== */

    {
        id: "event-poster",

        title: "Event Poster",

        category: "poster",
        categoryLabel: "پوستر",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی پوستر رویداد.",

        description:
            "پروژه طراحی پوستر با تمرکز بر ترکیب‌بندی، تایپوگرافی و ایجاد نقطه تمرکز بصری.",

        cover:
            "images/project2.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Poster Design",
            "Visual Composition"
        ]
    },


    /* =====================================================
       08 — BONAFT
       ===================================================== */

    {
        id: "bonaft",

        title: "Bonaft",

        category: "branding",
        categoryLabel: "هویت بصری",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی لوگو و هویت بصری.",

        description:
            "پروژه طراحی لوگو و توسعه هویت بصری برند.",

        cover:
            "images/project3.jpg",

        tools: [
            "Illustrator",
            "Photoshop"
        ],

        services: [
            "Logo Design",
            "Visual Identity"
        ]
    },


    /* =====================================================
       09 — RAISING AWARENESS
       ===================================================== */

    {
        id: "raising-awareness",

        title: "Raising Awareness",

        category: "poster",
        categoryLabel: "پوستر",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی پوستر مفهومی.",

        description:
            "پروژه طراحی پوستر مفهومی با تمرکز بر انتقال پیام از طریق تصویر و ترکیب‌بندی.",

        cover:
            "images/project4.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Conceptual Poster",
            "Visual Communication"
        ]
    },


    /* =====================================================
       10 — FOOLAD-E-ZHARF
       ===================================================== */

    {
        id: "foolad-e-zharf",

        title: "Foolad-e-Zharf",

        category: "packaging",
        categoryLabel: "بسته‌بندی",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی بسته‌بندی.",

        description:
            "پروژه طراحی بسته‌بندی محصول.",

        cover:
            "images/project5.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Packaging Design"
        ]
    },


    /* =====================================================
       11 — KERMANA
       ===================================================== */

    {
        id: "kermana",

        title: "Kermana",

        category: "branding",
        categoryLabel: "هویت بصری",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی لوگو و هویت بصری.",

        description:
            "پروژه طراحی لوگو و هویت بصری.",

        cover:
            "images/project6.jpg",

        tools: [
            "Illustrator"
        ],

        services: [
            "Logo Design",
            "Brand Identity"
        ]
    },


    /* =====================================================
       12 — NAAGOK
       ===================================================== */

    {
        id: "naagok",

        title: "Naagok",

        category: "poster",
        categoryLabel: "پوستر",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی پوستر.",

        description:
            "پروژه طراحی پوستر با تمرکز بر تصویرسازی و ترکیب‌بندی.",

        cover:
            "images/project7.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Poster Design"
        ]
    },


    /* =====================================================
       13 — ADVIEH-KHANЕH
       ===================================================== */

    {
        id: "advieh-khaneh",

        title: "Advieh-Khaneh",

        category: "packaging",
        categoryLabel: "بسته‌بندی",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی بسته‌بندی محصول.",

        description:
            "پروژه طراحی بسته‌بندی برای محصول.",

        cover:
            "images/project8.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Packaging Design"
        ]
    },


    /* =====================================================
       14 — DAYA FOUNDATION
       ===================================================== */

    {
        id: "daya-foundation",

        title: "Daya Foundation",

        category: "branding",
        categoryLabel: "هویت بصری",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی لوگو.",

        description:
            "پروژه طراحی لوگو برای یک مجموعه / بنیاد.",

        cover:
            "images/project9.jpg",

        tools: [
            "Illustrator"
        ],

        services: [
            "Logo Design",
            "Identity Design"
        ]
    },


    /* =====================================================
       15 — LUMINOUS SHADOWS
       ===================================================== */

    {
        id: "luminous-shadows",

        title: "Luminous Shadows",

        category: "editorial",
        categoryLabel: "ادیتوریال",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی جلد کتاب.",

        description:
            "پروژه طراحی جلد کتاب با تمرکز بر تصویرسازی مفهومی و ترکیب‌بندی.",

        cover:
            "images/project10.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Book Cover Design",
            "Editorial Design"
        ]
    },


    /* =====================================================
       16 — CITY CAMPAIGN
       ===================================================== */

    {
        id: "city-campaign",

        title: "City Campaign",

        category: "poster",
        categoryLabel: "کمپین شهری",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی کمپین شهری.",

        description:
            "پروژه طراحی یک کمپین شهری با تمرکز بر ارتباط بصری و انتقال پیام.",

        cover:
            "images/project11.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Campaign Design",
            "Poster Design"
        ]
    },


    /* =====================================================
       17 — SHAHPASAND
       ===================================================== */

    {
        id: "shahpasand",

        title: "Shahpasand",

        category: "packaging",
        categoryLabel: "بسته‌بندی",

        type: "legacy",
        typeLabel: "پروژه قبلی",

        year: "",

        featured: false,

        shortDescription:
            "طراحی بسته‌بندی.",

        description:
            "پروژه طراحی بسته‌بندی محصول.",

        cover:
            "images/project12.jpg",

        tools: [
            "Photoshop"
        ],

        services: [
            "Packaging Design"
        ]
    }

];
