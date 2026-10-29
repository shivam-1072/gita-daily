// Gita Daily Wisdom — STANDALONE app (works without any generator platform).
// VERSES and BANK constants are inlined above this script in the exported file.
(function () {
  "use strict";
  const CHAPTERS = [null,
    "Arjuna Vishada Yoga", "Sankhya Yoga", "Karma Yoga", "Jnana Yoga",
    "Karma Sannyasa Yoga", "Dhyana Yoga", "Jnana Vijnana Yoga",
    "Akshara Brahma Yoga", "Raja Vidya Raja Guhya Yoga", "Vibhuti Yoga",
    "Vishvarupa Darshana Yoga", "Bhakti Yoga", "Kshetra Kshetrajna Vibhaga Yoga",
    "Gunatraya Vibhaga Yoga", "Purushottama Yoga", "Daivasura Sampad Vibhaga Yoga",
    "Shraddhatraya Vibhaga Yoga", "Moksha Sannyasa Yoga"];
  const COUNTS = [null, 47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 34, 27, 20, 24, 28, 78];

  const $ = (id) => document.getElementById(id);
  const verseTagEl = $("verseTagEl"), chNameEl = $("chNameEl"), chSubEl = $("chSubEl"),
    slokEl = $("slokEl"), transEl = $("transEl"), hiEl = $("hiEl"),
    enEl = $("enEl"), exEl = $("exEl"), refEl = $("refEl"),
    traEl = $("traEl"), sharedEl = $("sharedEl"), synEl = $("synEl"),
    purEl = $("purEl"), purMoreBtn = $("purMoreBtn"), vbLink = $("vbLink"),
    chSel = $("chSel"), vSel = $("vSel"), tomorrowEl = $("tomorrowEl"),
    progEl = $("progEl"), toast = $("toast"),
    quoteBox = $("quoteBox"), quoteCat = $("quoteCat"),
    quoteText = $("quoteText"), quoteRef = $("quoteRef");

  let flatIndex = 0;

  function showToast(msg) {
    toast.textContent = msg;
    toast.style.display = "block";
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => (toast.style.display = "none"), 2200);
  }
  function flatToCV(f) {
    let acc = 0;
    for (let c = 1; c <= 18; c++) {
      if (f < acc + COUNTS[c]) return { c, v: f - acc + 1 };
      acc += COUNTS[c];
    }
    return { c: 18, v: 78 };
  }
  function cvToFlat(c, v) {
    let acc = 0;
    for (let i = 1; i < c; i++) acc += COUNTS[i];
    return acc + (v - 1);
  }
  function verseByFlat(f) {
    f = ((f % 700) + 700) % 700;
    const cv = flatToCV(f);
    for (const x of VERSES) if (x.c === cv.c && x.v === cv.v) return x;
    return VERSES[f];
  }

  // PVDATA (Vedabase chapter data) is inlined in the exported file.
  const QUOTES = [
    { t: "You have the right to your duty, but never to its fruits.", ref: "2.47", cat: "💪 MOTIVATION" },
    { t: "The mind can be your best friend — or your worst enemy.", ref: "6.6", cat: "💪 MOTIVATION" },
    { t: "Become My instrument — the battle is already won.", ref: "11.33", cat: "🦁 COURAGE" },
    { t: "Do not yield to weakness; it does not befit you. Arise!", ref: "2.3", cat: "🦁 COURAGE" },
    { t: "Slain, you gain heaven; victorious, you enjoy the earth. Fight on!", ref: "2.37", cat: "🦁 COURAGE" },
    { t: "Like the ocean, stay full and still while desires flow in.", ref: "2.70", cat: "🕊 PEACE" },
    { t: "Surrender all your duties to Me — I will free you from every sin.", ref: "18.66", cat: "🕊 PEACE" },
    { t: "Even a little progress on this path protects you from great fear.", ref: "2.40", cat: "🕊 PEACE" },
    { t: "The soul is never born and never dies.", ref: "2.20", cat: "🦉 WISDOM" },
    { t: "Whenever goodness declines, I appear — age after age.", ref: "4.8", cat: "🦉 WISDOM" },
    { t: "Whatever you do, do it as an offering to Me.", ref: "9.27", cat: "🦉 WISDOM" },
    { t: "I am the taste of water, the light of the sun and the moon.", ref: "7.8", cat: "🦉 WISDOM" },
    { t: "The humble sage sees every being with equal vision.", ref: "5.18", cat: "🦉 WISDOM" },
    { t: "Offer Me a leaf, a flower, fruit or water with love — I accept.", ref: "9.26", cat: "🙏 DEVOTION" },
    { t: "Always think of Me, devote yourself to Me — you shall reach Me.", ref: "18.65", cat: "🙏 DEVOTION" },
    { t: "I carry what My devotees lack, and preserve what they have.", ref: "9.22", cat: "🙏 DEVOTION" },
    { t: "Even the greatest sinner, if devoted to Me, is to be called saintly.", ref: "9.30", cat: "🙏 DEVOTION" },
    { t: "Whatever a great person does, the world follows.", ref: "3.21", cat: "⚖ DUTY" },
    { t: "Your own duty, done imperfectly, beats another's done perfectly.", ref: "3.35", cat: "⚖ DUTY" },
    { t: "The wise act without attachment, for the welfare of the world.", ref: "3.25", cat: "⚖ DUTY" },
    { t: "Weapons cannot cut the soul, nor fire burn it.", ref: "2.23", cat: "🦁 COURAGE" },
    { t: "Death is certain for the born — so grieve not.", ref: "2.27", cat: "🕊 PEACE" },
    { t: "Fix the mind on Me and rest your intelligence in Me.", ref: "12.8", cat: "🧘 FOCUS" },
    { t: "From anger comes delusion; from delusion, ruin of reason.", ref: "2.63", cat: "🧘 FOCUS" },
    { t: "Do your duty balanced, letting go of success and failure.", ref: "2.48", cat: "⚖ DUTY" },
    { t: "Calmness, gentleness, silence, self-control — austerity of the mind.", ref: "17.16", cat: "🧘 FOCUS" },
    { t: "Fearlessness and purity of heart — these are divine nature.", ref: "16.1", cat: "🦉 WISDOM" },
    { t: "I sit in everyone's heart; memory and knowledge come from Me.", ref: "15.15", cat: "🙏 DEVOTION" },
    { t: "One who is steady in happiness and distress rises above.", ref: "2.15", cat: "🕊 PEACE" },
    { t: "Abandon all fear — devote yourself to Me alone.", ref: "18.66", cat: "🙏 DEVOTION" }
  ];

  const V11 = {
    example: "Imagine you're about to start a big project. Your boss (like Dhritarashtra) asks: \"Before we begin, what's the situation on the ground?\"<br><br>This verse teaches us: Before any action, a wise leader assesses the battlefield – both outer and inner.",
    reflection: "\"What 'Kurukshetra' (battlefield) are you facing today – and have you paused to assess it before jumping in?\""
  };

  function pvChapter(c) { return (PVDATA[String(c).padStart(2, "0")] || {}); }
  function nearestWithPur(chData, v) {
    const verses = chData.verses || [];
    for (let d = 1; d < 40; d++) {
      const fwd = verses.find((x) => x.v === v + d && x.pur);
      if (fwd) return fwd;
      const back = verses.find((x) => x.v === v - d && x.pur);
      if (back) return back;
    }
    return null;
  }
  function fillVedabase(verse) {
    const chData = pvChapter(verse.c);
    chSubEl.textContent = chData.chTitle || "";
    const x = (chData.verses || []).find((y) => y.v === verse.v);
    vbLink.href = "https://vedabase.io/en/library/bg/" + verse.c + "/" + (x && x.shared ? x.shared : verse.v) + "/";
    if (!x || !x.tra) {
      traEl.textContent = "Translation not available for this verse.";
      synEl.textContent = "";
      purEl.textContent = "";
      purMoreBtn.hidden = true;
      sharedEl.hidden = true;
      return;
    }
    traEl.textContent = x.tra;
    if (x.shared) {
      sharedEl.hidden = false;
      const parts = x.shared.split("-").map(Number);
      sharedEl.textContent = parts[1]
        ? "📖 Translation & purport shared with verses " + parts[0] + "–" + parts[1] + " (as in Vedabase)."
        : "📖 Translation & purport shared with verse " + parts[0] + " (as in Vedabase).";
    } else { sharedEl.hidden = true; }
    synEl.textContent = x.syn || "—";
    if (x.pur) {
      purEl.textContent = x.pur;
      if (x.pur.length > 900) {
        purEl.classList.add("clamped");
        purMoreBtn.hidden = false;
        purMoreBtn.textContent = "📖 Read full purport";
        purMoreBtn.onclick = () => {
          const open = purEl.classList.toggle("clamped");
          purMoreBtn.textContent = open ? "📖 Read full purport" : "🔼 Show less";
        };
      } else { purEl.classList.remove("clamped"); purMoreBtn.hidden = true; }
    } else {
      purEl.classList.remove("clamped");
      purMoreBtn.hidden = true;
      purEl.innerHTML = "";
      const note = document.createElement("div");
      note.className = "sharedNote";
      note.textContent = "Vedabase gives no separate purport for this verse — its meaning flows with the neighbouring verses.";
      purEl.appendChild(note);
      const near = nearestWithPur(chData, verse.v);
      if (near) {
        const btn = document.createElement("button");
        btn.className = "linkBtn";
        btn.textContent = "📜 See purport of " + verse.c + "." + near.v + " →";
        btn.onclick = () => render(cvToFlat(verse.c, near.v));
        purEl.appendChild(btn);
      }
    }
  }
  function initQuote() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const day = Math.floor((now - start) / 86400000);
    const q = QUOTES[day % QUOTES.length];
    quoteCat.textContent = "✨ TODAY'S INSPIRATION " + q.cat;
    quoteText.textContent = "\u201C" + q.t + "\u201D";
    quoteRef.textContent = "— Bhagavad Gita " + q.ref + "  •  tap to read";
    quoteBox.onclick = () => {
      const m = q.ref.match(/(\d+)\.(\d+)/);
      if (m) render(cvToFlat(parseInt(m[1], 10), parseInt(m[2], 10)));
    };
  }
  function wisdomFor(verse) {
    if (verse.c === 1 && verse.v === 1) return V11;
    const b = BANK[String(verse.c)] || BANK["1"];
    return {
      example: b.ex[verse.v % b.ex.length],
      reflection: b.ref[(verse.v + 1) % b.ref.length]
    };
  }

  function buildVerseOptions(c) {
    vSel.innerHTML = "";
    for (let v = 1; v <= COUNTS[c]; v++) {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = "Verse " + v;
      vSel.appendChild(o);
    }
  }

  function render(f) {
    flatIndex = ((f % 700) + 700) % 700;
    const verse = verseByFlat(flatIndex);
    if (!verse) return;
    verseTagEl.textContent = "✨ Chapter " + verse.c + " • Verse " + verse.v + " ✨";
    chNameEl.textContent = "(" + CHAPTERS[verse.c] + ")";
    fillVedabase(verse);
    slokEl.textContent = (verse.slok || "").replace(/\s*\|\|/g, " ॥").trim();
    transEl.textContent = verse.trans || "";
    hiEl.textContent = verse.hi || "";
    enEl.textContent = verse.en || verse.enAlt || "";
    chSel.value = String(verse.c);
    buildVerseOptions(verse.c);
    vSel.value = String(verse.v);
    const tmr = verseByFlat(flatIndex + 1);
    tomorrowEl.textContent = "with Verse " + tmr.c + "." + tmr.v;
    progEl.textContent = "Verse " + (flatIndex + 1) + " of 700 • " + verse.c + "." + verse.v + " • " + CHAPTERS[verse.c];
    try { history.replaceState(null, "", "#" + verse.c + "." + verse.v); } catch (e) {}
    try {
      const done = JSON.parse(localStorage.getItem("gita-read") || "[]");
      if (done.indexOf(flatIndex) === -1) {
        done.push(flatIndex);
        localStorage.setItem("gita-read", JSON.stringify(done.slice(-700)));
      }
      localStorage.setItem("gita-last", String(flatIndex));
    } catch (e) {}
    const w = wisdomFor(verse);
    exEl.innerHTML = w.example;
    refEl.textContent = w.reflection;
  }

  function cardText() {
    const verse = verseByFlat(flatIndex);
    const tmr = verseByFlat(flatIndex + 1);
    return "🦚 BHAGAVAD GITA 🦚 — DAILY WISDOM SERIES\n"
      + "✨ Chapter " + verse.c + " • Verse " + verse.v + " ✨ (" + CHAPTERS[verse.c] + ")\n\n"
      + "🔆 SANSKRIT SHLOKA\n" + verse.slok + "\n\n"
      + "🇮🇳 HINDI\n" + verse.hi + "\n\n"
      + "🇬🇧 ENGLISH\n" + verse.en + "\n\n"
      + "💡 SIMPLE EXAMPLE\n" + exEl.innerText + "\n\n"
      + "🤔 REFLECTION FOR TODAY\n" + refEl.innerText + "\n\n"
      + "🙏 Hare Krishna! See you tomorrow 🙏 with Verse " + tmr.c + "." + tmr.v;
  }

  function boot() {
    document.title = "Bhagavad Gita Daily Wisdom";
    initQuote();
    chSel.innerHTML = "";
    for (let c = 1; c <= 18; c++) {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = "Ch " + c + " • " + CHAPTERS[c].split(" ").slice(0, 2).join(" ");
      chSel.appendChild(o);
    }
    chSel.addEventListener("change", () => {
      buildVerseOptions(parseInt(chSel.value, 10));
      render(cvToFlat(parseInt(chSel.value, 10), 1));
    });
    vSel.addEventListener("change", () => {
      render(cvToFlat(parseInt(chSel.value, 10), parseInt(vSel.value, 10)));
    });
    $("prevBtn").addEventListener("click", () => render(flatIndex - 1));
    $("nextBtn").addEventListener("click", () => render(flatIndex + 1));
    $("todayBtn").addEventListener("click", () => render(Math.floor(Date.now() / 86400000) % 700));
    $("randBtn").addEventListener("click", () => render(Math.floor(Math.random() * 700)));
    $("copyBtn").addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(cardText()); showToast("Card copied — paste it in WhatsApp 📋"); }
      catch (e) { showToast("Copy blocked by browser"); }
    });
    $("shareBtn").addEventListener("click", async () => {
      try {
        if (navigator.share) await navigator.share({ title: "Gita Daily Wisdom", text: cardText() });
        else { await navigator.clipboard.writeText(cardText()); showToast("Card copied — paste it anywhere 📋"); }
      } catch (e) {}
    });
    $("speakBtn").addEventListener("click", () => {
      try {
        speechSynthesis.cancel();
        const v = verseByFlat(flatIndex);
        const u = new SpeechSynthesisUtterance(v.slok.replace(/\n/g, " ") + ". " + v.en);
        u.lang = "hi-IN"; u.rate = 0.9;
        speechSynthesis.speak(u);
        showToast("🔊 Playing shloka + meaning");
      } catch (e) { showToast("Audio not supported"); }
    });
    let start = 0;
    try {
      const last = parseInt(localStorage.getItem("gita-last") || "NaN", 10);
      if (!isNaN(last) && last >= 0 && last < 700) start = last;
    } catch (e) {}
    const m = (location.hash || "").match(/#(\d+)\.(\d+)/);
    if (m) {
      const c = parseInt(m[1], 10), v = parseInt(m[2], 10);
      if (c >= 1 && c <= 18 && v >= 1 && v <= COUNTS[c]) start = cvToFlat(c, v);
    }
    render(start);
  }

  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();

