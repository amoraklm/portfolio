"use strict";

/* =========================================================
   ALI TORKAMAN — PORTFOLIO PROJECT DATABASE
   Single Source of Truth
   =========================================================
   
   برای اضافه کردن پروژه جدید:
   فقط یک object جدید به انتهای آرایه PROJECTS اضافه کنید.

   type:
   concept -> پروژه مفهومی
   client  -> پروژه واقعی مشتری

   featured:
   true  -> نمایش در صفحه اصلی
   false -> فقط در صفحه پروژه‌ها
   ========================================================= */

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
    }

];

/*
=========================================================
   آینده:
   پروژه‌های جدید فقط به انتهای آرایه PROJECTS اضافه شوند.
   
   نمونه:

   {
       id: "new-project",

       title: "NEW PROJECT",

       category: "advertising",
       categoryLabel: "تبلیغات",

       type: "concept",
       typeLabel: "پروژه مفهومی",

       year: "2026",

       featured: true,

       shortDescription:
           "توضیح کوتاه پروژه.",

       description:
           "توضیح کامل پروژه.",

       cover:
           "images/projects/new-project/cover.webp",

       tools: [
           "Photoshop",
           "AI-assisted"
       ],

       services: [
           "Art Direction",
           "Advertising Design"
       ]
   }

=========================================================
*/
