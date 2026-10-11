(function () {
  "use strict";

  const IMG = (id, w) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 1000}&q=80`;

  const EN = {
    "top.address": "Rotermanni 9, Tallinn",
    "top.hours": "Tue–Sat 18:00–00:00 · Sun brunch 13:00–17:00",
    "nav.story": "Story",
    "nav.menu": "Menu",
    "nav.spaces": "Spaces",
    "nav.gallery": "Atmosphere",
    "nav.visit": "Find us",
    "nav.cta": "Book a table",
    "hero.eyebrow": "Asian kitchen · Rotermanni, Tallinn",
    "hero.title": "Beauty<br><em>in every</em><br>seam",
    "hero.lead":
      "Japan, Korea, Thailand and Vietnam at one table. Omakase at the counter, robata over binchotan charcoal and cocktails with yuzu and sake.",
    "btn.reserve": "Book a table",
    "btn.menu": "View menu",
    "hero.badge": "seats at the<br>omakase counter",
    "info.k1": "Cuisine",
    "info.v1": "Japan · Korea · Thailand · Vietnam",
    "info.k2": "Dinner",
    "info.v2": "Tue–Sat, 18:00–00:00",
    "info.k3": "Average bill",
    "story.note":
      "Kintsugi is the Japanese art of repairing broken ceramics. The crack is not hidden but highlighted — and becomes its beauty.",
    "story.eyebrow": "01 — Story",
    "story.title": "We piece<br><em>Asia</em> together",
    "story.body":
      "Every KINTSU dish is a seam between two traditions. Japanese knife precision and Korean fermentation. Thai sourness and Vietnamese herbs. Estonian fish, seaweed and northern berries — in Asian technique.",
    fact1: "White oak binchotan charcoal for the robata",
    "fact2.b": "21 days",
    fact2: "Dry-aged fish, jukusei technique",
    fact3: "Sake, shochu and Japanese whisky on the list",
    "menu.eyebrow": "02 — Menu",
    "tab.omakase": "Omakase",
    "tab.robata": "Robata",
    "tab.dimsum": "Dim sum",
    "tab.bar": "Bar",
    "spaces.eyebrow": "03 — Spaces",
    "spaces.title": "Three ways<br><em>to spend the evening</em>",
    "spaces.body":
      "From dinner at the chef’s counter to a private evening behind shoji screens — choose the mood.",
    "card1.t": "Omakase counter",
    "card1.d":
      "Eight seats facing the chef, at a counter of pale cedar. Twelve courses prepared before your eyes.",
    "card1.m": "2 seatings · 18:30 & 21:15 · €145",
    "card2.t": "Main dining room",
    "card2.d":
      "Terracotta walls, light oak and the soft glow of paper lanterns. À la carte menu and an open robata.",
    "card2.m": "48 seats · à la carte",
    "card3.t": "Tsuki room",
    "card3.d":
      "A private room behind shoji screens for dinners of up to 12 guests. Its own menu and a sake sommelier.",
    "card3.m": "up to 12 guests · from €120 per guest",
    "gallery.eyebrow": "04 — Atmosphere",
    "gallery.title": "An evening <em>at KINTSU</em>",
    "chef.quote": "“The crack is where a dish begins to tell its story.”",
    "chef.name": "Head chef of KINTSU",
    "res.eyebrow": "05 — Reservations",
    "res.title": "Your table<br><em>awaits</em>",
    "res.body":
      "Bookings open 30 days ahead. For the omakase counter please arrive 10 minutes before the seating.",
    "res.small": "Groups of 7+ and the Tsuki room — by phone.",
    "f.space": "Where to sit",
    "f.hall": "Main room",
    "f.omakase": "Omakase counter",
    "f.name": "Name",
    "f.phone": "Phone",
    "f.date": "Date",
    "f.guests": "Guests",
    "f.time": "Time",
    "f.submit": "Send request",
    "f.thanks": "Thank you",
    "f.new": "New booking",
    "visit.eyebrow": "06 — Find us",
    "visit.address": "Rotermanni 9<br>10111 Tallinn",
    "visit.body":
      "In the Rotermann Quarter, between the Old Town and the port. Entrance from the square, under the sign with our mark.",
    "visit.map": "Open in maps",
    "h.mon": "Mon",
    "h.closed": "Closed",
    "h.tt": "Tue – Thu",
    "h.fs": "Fri – Sat",
    "h.sun": "Sun",
    "h.brunch": "13:00 – 17:00 · dim sum brunch",
    "foot.addr": "Rotermanni 9, 10111 Tallinn",
    "foot.note":
      "A fictional restaurant for a design example. Photos: Unsplash.",
  };

  const MSG = {
    ru: {
      title: "KINTSU — азиатская кухня в Таллине",
      mon: "По понедельникам мы закрыты — выберите другой день.",
      sunOmakase:
        "По воскресеньям омакасе не проводится — выберите главный зал или другой день.",
      error: "Пожалуйста, укажите имя, телефон, дату и время.",
      hall: "Главный зал",
      omakase: "Стойка омакасе",
      thanks: (n, d, t, s, g) =>
        `${n}, ждём вас ${d} в ${t}. ${s}, гостей: ${g}. Мы позвоним, чтобы подтвердить бронь.`,
      locale: "ru-RU",
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню",
    },
    en: {
      title: "KINTSU — Asian kitchen in Tallinn",
      mon: "We are closed on Mondays — please choose another day.",
      sunOmakase:
        "There is no omakase on Sundays — choose the main room or another day.",
      error: "Please enter your name, phone, date and time.",
      hall: "Main room",
      omakase: "Omakase counter",
      thanks: (n, d, t, s, g) =>
        `${n}, we look forward to seeing you on ${d} at ${t}. ${s}, guests: ${g}. We will call to confirm.`,
      locale: "en-GB",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
  };

  /* ===================== Меню (цены в евро) ===================== */
  const MENUS = {
    omakase: {
      img: IMG("1617196034796-73dfa7b1fd56"),
      title: { ru: "Омакасе", en: "Omakase" },
      caption: { ru: "Нигири от шефа", en: "Chef’s nigiri" },
      note: {
        ru: "Сет из двенадцати подач — 145 € · сопровождение сакэ — 85 € · подачи можно заказать отдельно",
        en: "Twelve-course set — €145 · sake pairing — €85 · courses also available à la carte",
      },
      items: [
        [
          "Сакидзукэ",
          "Sakizuke",
          "Гребешок, юдзу, икра форели, лист сисо",
          "Scallop, yuzu, trout roe, shiso leaf",
          14,
        ],
        [
          "Сасими",
          "Sashimi",
          "Балтийский судак сухой выдержки, свежий васаби",
          "Dry-aged Baltic pike-perch, fresh wasabi",
          18,
        ],
        [
          "Тяван-муси",
          "Chawanmushi",
          "Нежный яичный крем, даси из угря, трюфель",
          "Silky egg custard, eel dashi, truffle",
          15,
        ],
        [
          "Нигири ×6",
          "Nigiri ×6",
          "Тунец оторо, кампати, сладкая креветка, угорь",
          "Otoro tuna, kampachi, sweet shrimp, eel",
          36,
        ],
        [
          "Вагю A5",
          "Wagyu A5",
          "Миядзаки, обожжённый на бинтётане, соль Окинавы",
          "Miyazaki, seared over binchotan, Okinawa salt",
          42,
        ],
        [
          "Мисо-суп",
          "Miso soup",
          "Трёхлетнее мисо, морские водоросли Сааремаа",
          "Three-year miso, Saaremaa seaweed",
          8,
        ],
        [
          "Вагаси",
          "Wagashi",
          "Матча, чёрный кунжут, облепиха",
          "Matcha, black sesame, sea buckthorn",
          12,
        ],
      ],
    },
    robata: {
      img: IMG("1763604048392-18f8383a6542"),
      title: { ru: "Робата", en: "Robata" },
      caption: { ru: "Гриль на углях", en: "Charcoal grill" },
      note: {
        ru: "Гриль на углях бинтётан · главный зал · à la carte",
        en: "Binchotan charcoal grill · main room · à la carte",
      },
      items: [
        [
          "Чёрная треска",
          "Black cod",
          "Маринад сайкё-мисо 48 часов, маринованный имбирь",
          "48-hour saikyo miso, pickled ginger",
          34,
        ],
        [
          "Утка по-пекински",
          "Peking duck",
          "Хрустящая кожа, блинчики, огурец, соус хойсин",
          "Crisp skin, pancakes, cucumber, hoisin",
          38,
        ],
        [
          "Рёбра гальби",
          "Galbi short ribs",
          "Корейский маринад, груша, кунжут, кимчи",
          "Korean marinade, pear, sesame, kimchi",
          32,
        ],
        [
          "Осьминог",
          "Octopus",
          "Угли, тайский соус наам джим, жареный рис",
          "Charcoal, Thai nam jim, toasted rice",
          28,
        ],
        [
          "Якитори цукунэ",
          "Tsukune yakitori",
          "Куриные фрикадельки, желток, соус таре",
          "Chicken meatballs, egg yolk, tare",
          16,
        ],
        [
          "Кукуруза и мисо",
          "Corn & miso",
          "Мисо-масло, нори, лайм",
          "Miso butter, nori, lime",
          12,
        ],
      ],
    },
    dimsum: {
      img: IMG("1629684782790-385ed5adb497"),
      title: { ru: "Дим-сам", en: "Dim sum" },
      caption: { ru: "Ручная лепка", en: "Handmade daily" },
      note: {
        ru: "Ручная лепка каждое утро · по воскресеньям — бранч 13:00–17:00",
        en: "Handmade every morning · Sunday brunch 13:00–17:00",
      },
      items: [
        [
          "Хар гау",
          "Har gow",
          "Креветка, бамбук, прозрачное тесто — 4 шт",
          "Shrimp, bamboo, crystal dough — 4 pcs",
          14,
        ],
        [
          "Сяо лун бао",
          "Xiao long bao",
          "Свинина и бульон внутри, имбирный уксус — 4 шт",
          "Pork and broth inside, ginger vinegar — 4 pcs",
          15,
        ],
        [
          "Сиу май с крабом",
          "Crab siu mai",
          "Камчатский краб, икра летучей рыбы — 4 шт",
          "King crab, flying fish roe — 4 pcs",
          18,
        ],
        [
          "Гёдза с уткой",
          "Duck gyoza",
          "Хрустящее дно, соус понзу с юдзу — 5 шт",
          "Crispy base, yuzu ponzu — 5 pcs",
          13,
        ],
        [
          "Бао с чашу",
          "Chashu bao",
          "Свиная грудинка, хойсин, маринованный огурец — 2 шт",
          "Pork belly, hoisin, pickled cucumber — 2 pcs",
          14,
        ],
        [
          "Трюфельные с шиитаке",
          "Truffle & shiitake",
          "Грибы шиитаке, чёрный трюфель — 3 шт",
          "Shiitake, black truffle — 3 pcs",
          19,
        ],
      ],
    },
    bar: {
      img: IMG("1557395703-b5202a63d0f3"),
      title: { ru: "Бар", en: "Bar" },
      caption: { ru: "Авторские коктейли", en: "Signature cocktails" },
      note: {
        ru: "Авторские коктейли · 40+ сакэ и японский виски",
        en: "Signature cocktails · 40+ sake and Japanese whisky",
      },
      items: [
        [
          "Kintsugi",
          "Kintsugi",
          "Японский виски, юдзу, мёд, биттер из хурмы",
          "Japanese whisky, yuzu, honey, persimmon bitters",
          17,
        ],
        [
          "Sakura Negroni",
          "Sakura Negroni",
          "Джин Roku, сакэ, вермут с сакурой, кампари",
          "Roku gin, sake, sakura vermouth, Campari",
          16,
        ],
        [
          "Tallinn Highball",
          "Tallinn Highball",
          "Японский виски, содовая, эстонский можжевельник",
          "Japanese whisky, soda, Estonian juniper",
          15,
        ],
        [
          "Thai Basil Sour",
          "Thai Basil Sour",
          "Ром, тайский базилик, лемонграсс, лайм",
          "Rum, Thai basil, lemongrass, lime",
          14,
        ],
        [
          "Дзюнмай дайгиндзё",
          "Junmai daiginjo",
          "Сакэ премиум-класса из Ямагути — бокал 100 мл",
          "Premium sake from Yamaguchi — 100 ml glass",
          22,
        ],
        [
          "Юдзу-лимонад",
          "Yuzu lemonade",
          "Безалкогольный: юдзу, мята, тоник",
          "Alcohol-free: yuzu, mint, tonic",
          8,
        ],
      ],
    },
  };

  const i18nNodes = document.querySelectorAll("[data-i18n]");
  const RU = {};
  i18nNodes.forEach((n) => {
    RU[n.dataset.i18n] = n.innerHTML;
  });

  let lang = "ru";
  try {
    if (localStorage.getItem("kintsu-lang") === "en") lang = "en";
  } catch (e) {
    /* хранилище недоступно */
  }

  const fmtPrice = (n) => (lang === "en" ? "€" + n : n + " €");

  function applyLang() {
    const dict = lang === "en" ? EN : RU;
    i18nNodes.forEach((n) => {
      const v = dict[n.dataset.i18n];
      if (v !== undefined) n.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.title = MSG[lang].title;
    document.querySelectorAll(".lang__btn").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    burger.setAttribute(
      "aria-label",
      nav.classList.contains("is-open")
        ? MSG[lang].menuClose
        : MSG[lang].menuOpen,
    );
    renderMenu(current, false);
    renderTimes();
    if (!thanks.hidden && lastBooking) showThanks(lastBooking);
  }

  document.querySelectorAll(".lang__btn").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      try {
        localStorage.setItem("kintsu-lang", lang);
      } catch (e) {
        /* ничего */
      }
      applyLang();
    });
  });

  /* ===================== Меню ===================== */
  const menuSection = document.getElementById("menu");
  const tabs = document.querySelectorAll(".tab");
  const list = document.getElementById("dishes");
  const title = document.getElementById("menu-title");
  const note = document.getElementById("menu-note");
  const menuImg = document.getElementById("menu-img");
  const menuCaption = document.getElementById("menu-caption");
  let current = "omakase";

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function renderMenu(key, animatePhoto) {
    const menu = MENUS[key];
    current = key;
    menuSection.dataset.theme = key;
    title.textContent = menu.title[lang];
    note.textContent = menu.note[lang];
    menuCaption.textContent = menu.caption[lang];
    menuImg.alt = menu.caption[lang];

    if (animatePhoto && menuImg.getAttribute("src") !== menu.img) {
      menuImg.classList.add("is-swapping");
      setTimeout(() => {
        menuImg.src = menu.img;
        menuImg.onload = () => menuImg.classList.remove("is-swapping");
        setTimeout(() => menuImg.classList.remove("is-swapping"), 900);
      }, 250);
    } else {
      menuImg.src = menu.img;
    }

    list.innerHTML = "";
    menu.items.forEach(([nameRu, nameEn, descRu, descEn, price], i) => {
      const li = el("li", "dish");
      li.style.animationDelay = i * 55 + "ms";
      li.append(
        el("span", "dish__num", String(i + 1).padStart(2, "0")),
        el("span", "dish__name", lang === "en" ? nameEn : nameRu),
        el("span", "dish__price", fmtPrice(price)),
        el("span", "dish__desc", lang === "en" ? descEn : descRu),
      );
      list.appendChild(li);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      renderMenu(tab.dataset.menu, true);
    });
  });

  Object.values(MENUS).forEach((m) => {
    const im = new Image();
    im.src = m.img;
  });

  const header = document.getElementById("header");
  const onScroll = () =>
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  function setNav(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute(
      "aria-label",
      open ? MSG[lang].menuClose : MSG[lang].menuOpen,
    );
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", () =>
    setNav(!nav.classList.contains("is-open")),
  );
  nav
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setNav(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNav(false);
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("is-visible"));
  }

  const form = document.getElementById("reserve-form");
  const dateInput = document.getElementById("date");
  const timesBox = document.getElementById("times");
  const error = document.getElementById("form-error");
  const thanks = document.getElementById("thanks");
  const thanksText = document.getElementById("thanks-text");
  let lastBooking = null;

  const toISO = (d) => {
    const z = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate());
  };
  const today = new Date();
  const max = new Date();
  max.setDate(today.getDate() + 30);
  dateInput.min = toISO(today);
  dateInput.max = toISO(max);

  // Омакасе — два сеанса; зал — каждые 30 минут; воскресенье — бранч; понедельник — выходной
  function slotsFor(space, iso) {
    const day = iso ? new Date(iso + "T12:00").getDay() : null;
    if (day === 1) return { slots: [], msg: MSG[lang].mon };
    if (space === "omakase")
      return day === 0
        ? { slots: [], msg: MSG[lang].sunOmakase }
        : { slots: ["18:30", "21:15"] };
    if (day === 0)
      return { slots: ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30"] };
    return {
      slots: [
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
      ],
    };
  }

  function renderTimes() {
    const picked = form.elements.time
      ? (form.querySelector('input[name="time"]:checked') || {}).value
      : null;
    const { slots, msg } = slotsFor(form.elements.space.value, dateInput.value);
    timesBox.innerHTML = "";
    if (!slots.length) {
      timesBox.appendChild(el("p", "times__empty", msg));
      return;
    }
    slots.forEach((t) => {
      const label = el("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "time";
      input.value = t;
      if (t === picked) input.checked = true;
      label.append(input, el("span", "", t));
      timesBox.appendChild(label);
    });
  }

  function showThanks(b) {
    const pretty = new Date(b.date + "T12:00").toLocaleDateString(
      MSG[lang].locale,
      { weekday: "long", day: "numeric", month: "long" },
    );
    thanksText.textContent = MSG[lang].thanks(
      b.name,
      pretty,
      b.time,
      MSG[lang][b.space],
      b.guests,
    );
  }

  form
    .querySelectorAll('input[name="space"]')
    .forEach((r) => r.addEventListener("change", renderTimes));
  dateInput.addEventListener("change", renderTimes);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    error.textContent = "";
    form
      .querySelectorAll(".is-invalid")
      .forEach((f) => f.classList.remove("is-invalid"));

    const data = new FormData(form);
    const b = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      date: String(data.get("date") || ""),
      time: data.get("time"),
      guests: data.get("guests"),
      space: data.get("space"),
    };

    const bad = [];
    if (!b.name) bad.push(form.elements.name.closest(".field"));
    if (b.phone.replace(/\D/g, "").length < 7)
      bad.push(form.elements.phone.closest(".field"));
    if (!b.date) bad.push(dateInput.closest(".field"));
    if (!b.time) bad.push(timesBox.closest(".times"));
    if (bad.length) {
      bad.forEach((x) => x.classList.add("is-invalid"));
      error.textContent = MSG[lang].error;
      return;
    }

    // Отправка на сервер, когда он появится:

    lastBooking = b;
    showThanks(b);
    form.hidden = true;
    thanks.hidden = false;
  });

  document.getElementById("new-booking").addEventListener("click", () => {
    form.reset();
    lastBooking = null;
    renderTimes();
    thanks.hidden = true;
    form.hidden = false;
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLang();
})();
