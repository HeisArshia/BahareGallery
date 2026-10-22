/* ========================================
   LANGUAGE SWITCHER (Persian default + English)

   HOW IT WORKS
   - The English text stays inside the HTML files.
   - The Persian text lives in the "fa" list below.
   - Every translatable element in the HTML has a
     data-i18n="some.key" attribute. The key links the
     English text in the HTML to the Persian text here.

   TO CHANGE A PERSIAN TEXT: find its key below and edit it.
   TO ADD A NEW TEXT: add data-i18n="my.key" in the HTML,
   then add  "my.key": "متن فارسی",  to the "fa" list.
======================================== */

(function () {
    "use strict";

    const STORAGE_KEY = "bahare-lang";
    const DEFAULT_LANG = "fa";
    const DIRECTIONS = { fa: "rtl", en: "ltr" };
    const ARROW = '<span aria-hidden="true">↗</span>';


    /* ----------------------------------------
       PERSIAN TEXTS
    ---------------------------------------- */
    const fa = {
        /* ---- Shared: header, footer, buttons ---- */
        "brand": 'گالری بهاره<span>.</span>',
        "nav.aria": "منوی اصلی",
        "nav.home": "خانه",
        "nav.portfolio": "نمونه‌کارها",
        "nav.about": "درباره من",
        "nav.contact": "تماس",
        "nav.talk": `بیایید حرف بزنیم ${ARROW}`,
        "menu.open": "باز کردن منو",
        "lang.btn": "EN",
        "lang.aria": "تغییر زبان به انگلیسی",

        "footer.tagline": "خلق عکس‌ها، ماندگار کردن احساس‌ها.",
        "footer.social": "شبکه‌های اجتماعی",
        "footer.instagram": "اینستاگرام",
        "footer.contact": "تماس",
        "footer.rights": '&copy; <span id="current-year">2026</span> گالری بهاره. تمامی حقوق محفوظ است.',

        "cta.touch": `تماس با من ${ARROW}`,

        "cat.all": "همه آثار",
        "cat.portrait": "پرتره‌ها",
        "cat.nature": "طبیعت",
        "cat.lifestyle": "سبک زندگی",
        "cat.events": "مراسم",

        "alt.editorial": "پرتره ادیتوریال یک زن",

        /* ---- Home page ---- */
        "home.title": "گالری | بهاره",
        "home.desc": "نمونه‌کارهای عکاسی یک عکاس خلاق؛ پرتره، طبیعت و لحظه‌های خاص.",
        "home.eyebrow": "عکاس و روایتگر تصویری",
        "home.h1": "لحظه‌هایی که<br>به <em>خاطره</em> تبدیل می‌شوند.",
        "home.hero.p": "زیبایی لحظه‌های واقعی، احساس‌های صادقانه و جزئیات کوچکی را ثبت می‌کنم که هر داستان را منحصربه‌فرد می‌کنند.",
        "home.explore": `مشاهده آثار من ${ARROW}`,
        "home.know": "من را بیشتر بشناسید",
        "home.location": '<span aria-hidden="true">✳</span> ساکن شهر شما · پذیرای پروژه‌های جدید',
        "home.hero.alt": "پرتره زنی در نور طبیعی",
        "home.cap1": "۰۱ / قاب منتخب",
        "home.cap2": "پرتره‌ها و داستان‌ها",

        "home.intro.eyebrow": "کمی درباره کار من",
        "home.intro.h2": "عکاسی بیشتر از چیزی است که می‌بینیم؛ <em>آن چیزی است که حس می‌کنیم.</em>",
        "home.intro.p": "از لحظه‌های آرام روزمره تا بزرگ‌ترین جشن‌های زندگی، باور دارم هر عکس باید داستانی را روایت کند که ارزش به یاد ماندن داشته باشد.",

        "home.sel.eyebrow": "چند اثر محبوب",
        "home.sel.h2": "آثار <em>منتخب.</em>",
        "home.sel.all": `مشاهده همه پروژه‌ها ${ARROW}`,
        "home.card.portrait.aria": "مشاهده عکاسی پرتره",
        "home.card.portrait.p": "آدم‌ها، شخصیت و احساس",
        "home.card.nature.aria": "مشاهده عکاسی طبیعت",
        "home.card.nature.alt": "منظره کوهستان با بازتاب در دریاچه‌ای آرام",
        "home.card.nature.p": "جهان، در آرامشی زیبا",
        "home.card.lifestyle.aria": "مشاهده عکاسی سبک زندگی",
        "home.card.lifestyle.alt": "آدم‌هایی که لحظه‌ای شاد را با هم می‌گذرانند",
        "home.card.lifestyle.p": "لحظه‌های طبیعی و بی‌نقشه",

        "home.about.alt": "پرتره‌ای در نور ملایم طبیعی",
        "home.about.eyebrow": "پشت دوربین",
        "home.about.h2": "سلام، من<br><em>بهاره‌ام.</em>",
        "home.about.p": "من عکاسی هستم که از آدم‌ها، مکان‌ها و داستان‌هایی که ما را به هم پیوند می‌دهند الهام می‌گیرم. رویکردم ساده است: فضایی راحت بسازم، به جزئیات توجه کنم و چیزی واقعی ثبت کنم.",
        "home.about.btn": `درباره من بیشتر بدانید ${ARROW}`,

        "home.cta.eyebrow": "داستانی در ذهن دارید؟",
        "home.cta.h2": "بیایید با هم چیزی<br><em>ماندگار بسازیم.</em>",
        "home.cta.p": "ایده، پروژه یا لحظه‌ای خاص دارید که دوست دارید ثبت شود؟ خوشحال می‌شوم بشنوم.",

        /* ---- About page ---- */
        "about.title": "درباره من | گالری بهاره",
        "about.desc": "با عکاس پشت لنز آشنا شوید و رویکرد خلاق او را در عکاسی بشناسید.",
        "about.hero.eyebrow": "کسی که پشت دوربین است",
        "about.hero.h1": "هر عکس<br>با <em>یک احساس</em> آغاز می‌شود.",
        "about.hero.p": "من بهاره‌ام، عکاسی که شیفته احساس‌های واقعی، جزئیات زیبا و داستان‌هایی است که در لحظه‌های معمولی پنهان‌اند.",
        "about.hero.btn": `بیایید در ارتباط باشیم ${ARROW}`,
        "about.hero.alt": "پرتره‌ای نمادین از عکاس",
        "about.hero.note": "کمی بیشتر درباره من.",

        "about.story.eyebrow": "داستان من",
        "about.story.h2": "دقیق‌تر نگاه کردن.<br><em>بیشتر حس کردن.</em>",
        "about.story.p1": "عکاسی راه من برای توجه کردن شد. شروع کردم به دیدن چیزهای کوچک: گرمای نور عصرگاهی، لبخندی ناگهانی، زیبایی آرام یک مکان و احساس‌هایی که گاهی کلمات از توضیحشان ناتوان‌اند.",
        "about.story.p2": "با گذر زمان، آن کنجکاوی به یک کار خلاقانه تبدیل شد. هر پروژه فرصتی است تا با آدم‌های تازه آشنا شوم، دیدگاه‌های تازه کشف کنم و لحظه‌هایی را نگه دارم که شاید بی‌توجه از کنارشان می‌گذشتیم.",
        "about.story.p3": "هدف من فقط ساختن یک تصویر زیبا نیست؛ ساختن عکس‌هایی است که برای بیننده‌شان شخصی، صادقانه و معنادار باشند.",

        "about.phil.alt": "تجهیزات دوربین و عکاسی",
        "about.phil.eyebrow": "رویکرد من",
        "about.phil.h2": "طبیعی، اندیشیده<br><em>و سرشار از احساس.</em>",
        "about.phil.p": "باور دارم بهترین عکس‌ها زمانی شکل می‌گیرند که آدم‌ها راحت خودشان باشند. به نور، ترکیب‌بندی، فضا و جزئیات کوچکی که به هر تصویر شخصیت می‌دهند توجه می‌کنم.",
        "about.phil.1.h": "اصالت",
        "about.phil.1.p": "احساس واقعی به‌جای کمال ساختگی.",
        "about.phil.2.h": "توجه به جزئیات",
        "about.phil.2.p": "پیدا کردن زیبایی در نور، بافت و ترکیب‌بندی.",
        "about.phil.3.h": "ارتباط شخصی",
        "about.phil.3.p": "شناخت آدم‌ها و داستان‌های پشت هر پروژه.",

        "about.insp.eyebrow": "فراتر از عکس‌ها",
        "about.insp.h2": "چیزهای کوچکی که<br><em>به من</em> الهام می‌دهند.",
        "about.insp.p": "مکان‌های تازه، گفت‌وگوهای معنادار، صبح‌های آرام، هنر، موسیقی و لحظه‌های غیرمنتظره زندگی روزمره پیوسته نگاه من به جهان را شکل می‌دهند.",

        "about.cta.eyebrow": "بیایید با هم چیزی بسازیم",
        "about.cta.h2": "داستانی برای<br><em>گفتن دارید؟</em>",
        "about.cta.p": "دوست دارم درباره ایده‌های شما بشنوم و کمک کنم به واقعیت تبدیل شوند.",

        /* ---- Portfolio page ---- */
        "port.title": "نمونه‌کارها | گالری بهاره",
        "port.desc": "مجموعه‌ای از عکس‌های پرتره، طبیعت، سبک زندگی و مراسم را ببینید.",
        "port.eyebrow": "مجموعه‌ای از لحظه‌ها",
        "port.h1": "هنرِ<br><em>متفاوت دیدن.</em>",
        "port.p": "هر عکس داستانی در خود دارد. آدم‌ها، مکان‌ها و لحظه‌هایی را ببینید که الهام‌بخش کار من بوده‌اند.",
        "port.gallery.aria": "گالری عکس",
        "port.filters.aria": "فیلتر عکس‌ها",
        "port.count": "عکس",

        "port.g1.alt": "زنی در نور ملایم طبیعی",
        "port.g1.aria": "مشاهده عکس پرتره",
        "port.g2.alt": "منظره آرام کوهستان با بازتاب در دریاچه",
        "port.g2.aria": "مشاهده عکس طبیعت",
        "port.g3.alt": "دوستانی که لحظه‌ای شاد را با هم تقسیم می‌کنند",
        "port.g3.aria": "مشاهده عکس سبک زندگی",
        "port.g4.aria": "مشاهده پرتره ادیتوریال",
        "port.g5.alt": "نور خورشید از میان جنگلی سبز",
        "port.g5.aria": "مشاهده عکس جنگل",
        "port.g6.alt": "جزئیات یک جشن عروسی باشکوه",
        "port.g6.aria": "مشاهده عکس مراسم",
        "port.g7.alt": "پرتره‌ای طبیعی از سبک زندگی",
        "port.g7.aria": "مشاهده پرتره سبک زندگی",
        "port.g8.alt": "حیات وحش در طبیعت",
        "port.g8.aria": "مشاهده عکس حیات وحش",

        "port.lb.aria": "عکس بزرگ‌شده",
        "port.lb.close": "بستن عکس",
        "port.lb.prev": "عکس قبلی",
        "port.lb.next": "عکس بعدی",

        "port.cta.eyebrow": "پروژه‌ای در ذهن دارید؟",
        "port.cta.h2": "داستان شما شایسته است<br><em>که به یاد بماند.</em>",
        "port.cta.p": "درباره ایده‌هایتان صحبت کنیم و چیزی معنادار بسازیم.",

        /* ---- Contact page ---- */
        "contact.title": "تماس | گالری بهاره",
        "contact.desc": "برای رزرو عکاسی، همکاری و پرسش‌ها با من در تماس باشید.",
        "contact.hero.eyebrow": "در ارتباط باشیم",
        "contact.hero.h1": "بیایید چیزی <em>ماندگار</em> بسازیم.",
        "contact.hero.p": "پروژه‌ای در ذهن دارید، مراسمی در پیش است یا فقط می‌خواهید سلام کنید؟ خوشحال می‌شوم از شما بشنوم.",

        "contact.eyebrow": "تماس با من",
        "contact.h2": "گفت‌وگو را شروع کنید.",
        "contact.p": "کمی درباره آنچه می‌خواهید بگویید. در اولین فرصت پاسخ می‌دهم.",
        "contact.email": "ایمیل",
        "contact.phone": "تلفن / واتساپ",
        "contact.whatsapp": "در واتساپ پیام بدهید",
        "contact.instagram": "اینستاگرام",
        "contact.services.h": "آماده همکاری در",
        "contact.services.p": "پرتره · مراسم · سبک زندگی · ادیتوریال · همکاری‌ها",

        "form.eyebrow": "پیام شما",
        "form.h2": "درباره پروژه‌تان بگویید.",
        "form.name": "نام شما",
        "form.name.ph": "نام و نام خانوادگی",
        "form.email": "آدرس ایمیل",
        "form.service": "به چه خدمتی علاقه دارید؟",
        "form.select": "یک خدمت انتخاب کنید",
        "form.opt.portrait": "عکاسی پرتره",
        "form.opt.event": "عکاسی مراسم",
        "form.opt.lifestyle": "عکاسی سبک زندگی",
        "form.opt.editorial": "عکاسی ادیتوریال",
        "form.opt.collab": "همکاری",
        "form.opt.other": "مورد دیگر",
        "form.date": "تاریخ مورد نظر (اختیاری)",
        "form.message": "بیشتر توضیح دهید",
        "form.message.ph": "ایده، جزئیات مراسم، مکان یا هر پرسشی که دارید...",
        "form.submit": `ارسال درخواست ${ARROW}`,
        "form.note": "اطلاعات شما فقط برای پاسخ به درخواستتان استفاده می‌شود."
    };


    /* ----------------------------------------
       ENGLISH TEXTS THAT ARE NOT IN THE HTML
       (everything else is read from the HTML itself)
    ---------------------------------------- */
    const en = {
        "menu.open": "Open navigation menu",
        "menu.close": "Close navigation menu",
        "lang.btn": "فا",
        "lang.aria": "Switch language to Persian"
    };

    fa["menu.close"] = "بستن منو";


    /* ----------------------------------------
       INTERNALS
    ---------------------------------------- */
    const ATTRIBUTES = [
        ["data-i18n-aria", "aria-label"],
        ["data-i18n-alt", "alt"],
        ["data-i18n-placeholder", "placeholder"],
        ["data-i18n-content", "content"]
    ];

    let currentLang = DEFAULT_LANG;

    function getSavedLang() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && DIRECTIONS[saved]) return saved;
        } catch (error) {
            /* storage can be blocked; fall back to the default */
        }
        return DEFAULT_LANG;
    }

    function saveLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            /* ignore */
        }
    }

    // Remember the English text found in the HTML.
    function captureEnglish() {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (!(key in en)) {
                en[key] = el.tagName === "TITLE" ? el.textContent : el.innerHTML;
            }
        });

        ATTRIBUTES.forEach(([dataAttr, attr]) => {
            document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
                const key = el.getAttribute(dataAttr);
                if (!(key in en)) {
                    en[key] = el.getAttribute(attr) || "";
                }
            });
        });
    }

    function t(key) {
        const dictionary = currentLang === "fa" ? fa : en;

        if (key in dictionary) return dictionary[key];
        if (key in en) return en[key];
        return key;
    }

    function applyLanguage(lang) {
        currentLang = lang;

        const root = document.documentElement;
        root.lang = lang;
        root.dir = DIRECTIONS[lang];

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const value = t(el.dataset.i18n);

            if (el.tagName === "TITLE") {
                el.textContent = value;
            } else {
                el.innerHTML = value;
            }
        });

        ATTRIBUTES.forEach(([dataAttr, attr]) => {
            document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
                el.setAttribute(attr, t(el.getAttribute(dataAttr)));
            });
        });

        // The copyright year lives inside translated text, so refresh it.
        const year = document.querySelector("#current-year");
        if (year) year.textContent = new Date().getFullYear();

        // Let other scripts (menu, lightbox) refresh their own text.
        document.dispatchEvent(new CustomEvent("i18n:change", {
            detail: { lang }
        }));
    }

    function setLang(lang) {
        if (!DIRECTIONS[lang]) return;
        saveLang(lang);
        applyLanguage(lang);
    }

    window.i18n = {
        t,
        getLang: () => currentLang,
        setLang
    };


    /* ----------------------------------------
       START
    ---------------------------------------- */
    captureEnglish();
    applyLanguage(getSavedLang());

    document.querySelectorAll(".lang-toggle").forEach((button) => {
        button.addEventListener("click", () => {
            setLang(currentLang === "fa" ? "en" : "fa");
        });
    });

    // The page is hidden by CSS until the right language is applied.
    document.documentElement.classList.remove("i18n-pending");
})();
