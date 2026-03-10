---
theme: default
background: '#ffffff'
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: 'The Health Chief of Staff'
mdc: true
fonts:
  sans: 'Assistant'
  serif: 'Playfair Display'
  mono: 'JetBrains Mono'
---

<style>
/* Global resets */
.slidev-layout { background: #ffffff !important; font-family: 'Assistant', sans-serif; }

/* Label pill */
.label {
  font-family: 'Assistant', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.7rem;
  font-weight: 700;
  color: #ef406b;
  margin-bottom: 1rem;
}

/* Section headings */
.slide-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.4rem;
  color: #1a1a1a;
  line-height: 1.15;
  margin-bottom: 0.4rem;
}
.slide-subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  color: #757575;
  font-style: italic;
  margin-bottom: 1.8rem;
}

/* Card */
.card {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 1.4rem;
  box-shadow: 0 2px 20px rgba(0,0,0,0.06);
}

/* Tag badge */
.badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-family: 'Assistant', sans-serif;
  white-space: nowrap;
}

/* Divider */
.divider {
  width: 60px;
  height: 3px;
  background: #ef406b;
  border-radius: 2px;
  margin: 1.2rem auto;
}
</style>

<!-- SLIDE 1: Cover -->
<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(160deg,#fff 60%,#fff5f7 100%);">

<div style="font-family:'Assistant',sans-serif;text-transform:uppercase;letter-spacing:0.3em;font-size:0.68rem;font-weight:700;color:#ef406b;margin-bottom:2rem;">
  LONGEVITY CLINIC &nbsp;·&nbsp; MULTI-AGENT AI SYSTEM
</div>

<h1 style="font-family:'Playfair Display',serif;font-size:3.8rem;font-weight:900;color:#1a1a1a;line-height:1.05;margin-bottom:1rem;">
  The Health<br><em style="color:#ef406b;font-style:normal;">Chief of Staff</em>
</h1>

<div style="width:60px;height:3px;background:#ef406b;border-radius:2px;margin:1.2rem auto;"></div>

<p style="font-family:'Playfair Display',serif;font-size:1.25rem;color:#757575;font-style:italic;line-height:1.7;margin-bottom:2.5rem;">
  רשת סוכני AI הוליסטית<br>לחוויית בריאות ללא חיכוך
</p>

<div style="font-family:'Assistant',sans-serif;font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:#bbb;">
  לאלפיון העליון &nbsp;·&nbsp; Zero Friction Experience
</div>

</div>

---
layout: default
---

<!-- SLIDE 2: Vision -->
<div style="padding:2.5rem 3.5rem;direction:rtl;height:100%;box-sizing:border-box;">

<div class="label">החזון</div>
<h2 class="slide-title">מרפאת לונגבטי לאלפיון העליון</h2>
<p class="slide-subtitle">הסטנדרט אינו רק "מתקדם" — הוא "בלתי מורגש"</p>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.2rem;margin-bottom:1.8rem;">
  <div class="card" style="text-align:center;">
    <div style="font-size:2rem;margin-bottom:0.6rem;">⏱️</div>
    <div style="color:#ef406b;font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;">זמן</div>
    <div style="color:#444;font-size:0.88rem;line-height:1.5;">המשאב היקר ביותר — לא בזבז אפילו שנייה אחת</div>
  </div>
  <div class="card" style="text-align:center;border-color:rgba(239,64,107,0.15);">
    <div style="font-size:2rem;margin-bottom:0.6rem;">🔒</div>
    <div style="color:#ef406b;font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;">פרטיות</div>
    <div style="color:#444;font-size:0.88rem;line-height:1.5;">ערך עליון — VIP Standard מוחלט</div>
  </div>
  <div class="card" style="text-align:center;border-color:rgba(0,196,154,0.2);">
    <div style="font-size:2rem;margin-bottom:0.6rem;">🎯</div>
    <div style="color:#00C49A;font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.4rem;">דיוק</div>
    <div style="color:#444;font-size:0.88rem;line-height:1.5;">Hyper-Personalization — כל החלטה מבוססת נתונים</div>
  </div>
</div>

<div style="background:#fff5f7;border-right:4px solid #ef406b;padding:1rem 1.4rem;border-radius:0 8px 8px 0;">
  <p style="color:#1a1a1a;font-size:1rem;line-height:1.7;margin:0;">
    המערכת הופכת את המרפאה מ<strong style="color:#ef406b;">"ספקית שירות"</strong> ל<strong style="color:#00C49A;">"נאמן הבריאות המרכזי"</strong> של המטופל
  </p>
</div>

</div>

---
layout: default
---

<!-- SLIDE 3: Architecture -->
<div style="padding:2.5rem 3.5rem;direction:rtl;height:100%;box-sizing:border-box;">

<div class="label" style="color:#00C49A;">ארכיטקטורה</div>
<h2 class="slide-title">Unified Data Core</h2>
<p class="slide-subtitle">מאגר נתונים אחוד — ליבת המערכת</p>

<div style="display:flex;gap:2rem;align-items:center;">

  <div style="flex:0 0 190px;background:linear-gradient(160deg,#f0faf7,#e6f7f3);border:2px solid #00C49A;border-radius:16px;padding:1.5rem;text-align:center;">
    <div style="font-size:2.2rem;margin-bottom:0.5rem;">🧠</div>
    <div style="color:#00C49A;font-weight:800;font-size:0.95rem;margin-bottom:0.2rem;">Unified Data Core</div>
    <div style="color:#757575;font-size:0.72rem;margin-bottom:1rem;">Health Chief of Staff</div>
    <div style="display:flex;flex-direction:column;gap:0.3rem;">
      <div style="background:rgba(0,196,154,0.1);border-radius:4px;padding:0.2rem 0.5rem;color:#00C49A;font-size:0.68rem;font-weight:600;">Labs + Genetics</div>
      <div style="background:rgba(0,196,154,0.1);border-radius:4px;padding:0.2rem 0.5rem;color:#00C49A;font-size:0.68rem;font-weight:600;">Wearables</div>
      <div style="background:rgba(0,196,154,0.1);border-radius:4px;padding:0.2rem 0.5rem;color:#00C49A;font-size:0.68rem;font-weight:600;">External Docs</div>
    </div>
  </div>

  <div style="flex:1;display:flex;flex-direction:column;gap:0.9rem;">
    <div class="card" style="display:flex;align-items:center;gap:1rem;border-color:rgba(26,143,191,0.2);">
      <span style="font-size:1.6rem;">🩺</span>
      <div>
        <div style="color:#1A8FBF;font-weight:700;font-size:0.92rem;">Clinical Strategist</div>
        <div style="color:#757575;font-size:0.78rem;margin-top:0.1rem;">עוזר רופא · ניתוח קליני · RAG Query</div>
      </div>
    </div>
    <div class="card" style="display:flex;align-items:center;gap:1rem;border-color:rgba(239,64,107,0.18);">
      <span style="font-size:1.6rem;">🤵</span>
      <div>
        <div style="color:#ef406b;font-weight:700;font-size:0.92rem;">Elite Concierge</div>
        <div style="color:#757575;font-size:0.78rem;margin-top:0.1rem;">עוזר תפעולי · לוגיסטיקה · שרשרת ערך</div>
      </div>
    </div>
    <div class="card" style="display:flex;align-items:center;gap:1rem;border-color:rgba(0,196,154,0.2);">
      <span style="font-size:1.6rem;">🤝</span>
      <div>
        <div style="color:#00C49A;font-weight:700;font-size:0.92rem;">Health Companion</div>
        <div style="color:#757575;font-size:0.78rem;margin-top:0.1rem;">ליווי מטופל · Contextual Nudging · The Vault</div>
      </div>
    </div>
  </div>

</div>

</div>

---
layout: default
---

<!-- SLIDE 4: Mermaid -->
<div style="padding:1.5rem 3.5rem 0.5rem;direction:rtl;">
<div class="label">זרימת מידע</div>
<h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:#1a1a1a;margin-bottom:1rem;">Multi-Agent Flow</h2>
</div>

```mermaid
graph LR
    P[Patient] -->|WhatsApp / App| HC[Health Companion]
    HC -->|Sync| UDC[(Unified Data Core)]
    UDC -->|Clinical Query| CS[Clinical Strategist]
    UDC -->|Logistics| EC[Elite Concierge]
    CS -->|Insights + Flags| DR[Doctor]
    EC -->|Coordination| SVC[External Services]
    DR -->|Approved Plan| HC
    HC -->|Nudges + Updates| P

    style UDC fill:#e6f7f3,stroke:#00C49A,color:#007a5e
    style CS fill:#e8f4fb,stroke:#1A8FBF,color:#1A8FBF
    style EC fill:#fdeef2,stroke:#ef406b,color:#c4234d
    style HC fill:#e6f7f3,stroke:#00C49A,color:#007a5e
    style DR fill:#f5f5f5,stroke:#aaa,color:#333
    style P fill:#fff5f7,stroke:#ef406b,color:#c4234d
    style SVC fill:#f5f5f5,stroke:#aaa,color:#333
```

---
layout: default
---

<!-- SLIDE 5: Clinical Strategist -->
<div style="padding:2.5rem 3.5rem;direction:rtl;height:100%;box-sizing:border-box;">

<div class="label" style="color:#1A8FBF;">ערוץ א׳ — קליני</div>

<div style="display:flex;gap:2.5rem;align-items:flex-start;">
  <div style="flex:1;">
    <h2 class="slide-title">Clinical Strategist</h2>
    <p class="slide-subtitle" style="color:#1A8FBF;">עוזר הרופא — מכפיל כוח קליני</p>

    <div style="display:flex;flex-direction:column;gap:1rem;">
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#1A8FBF;color:#fff;margin-top:2px;">אינטגרציה</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">איסוף והצלבת נתוני מעבדה, בדיקות, גנטיקה, אפיגנטיקה ו-Wearables לתמונת מצב אחת</div>
      </div>
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#1A8FBF;color:#fff;margin-top:2px;">דאשבורד</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">הצפת Anomalies וקורלציות בזמן אמת — הדגל האדום עולה לפני שהרופא מחפש</div>
      </div>
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#1A8FBF;color:#fff;margin-top:2px;">Query Bar</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">ממשק RAG — הרופא שואל בשפה חופשית על היסטוריית המטופל ומקבל תשובות מגובות Citations</div>
      </div>
    </div>
  </div>

  <div class="card" style="flex:0 0 210px;border-color:rgba(26,143,191,0.2);">
    <div style="color:#757575;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.9rem;">דוגמאות משימות</div>
    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.65rem;">
      <li style="color:#333;font-size:0.83rem;line-height:1.4;padding-right:0.7rem;border-right:3px solid #1A8FBF;">סיכום קליני לרופא + דגלים אדומים</li>
      <li style="color:#333;font-size:0.83rem;line-height:1.4;padding-right:0.7rem;border-right:3px solid #1A8FBF;">הכנת מפגש שיקוף תוצאות</li>
      <li style="color:#333;font-size:0.83rem;line-height:1.4;padding-right:0.7rem;border-right:3px solid #1A8FBF;">איסוף מידע יזום טרום ביקור</li>
      <li style="color:#333;font-size:0.83rem;line-height:1.4;padding-right:0.7rem;border-right:3px solid #1A8FBF;">תחקור בשיח חופשי על המטופל</li>
    </ul>
  </div>
</div>

</div>

---
layout: default
---

<!-- SLIDE 6: Elite Concierge -->
<div style="padding:2.5rem 3.5rem;direction:rtl;height:100%;box-sizing:border-box;background:#fff5f7;">

<div class="label">ערוץ ב׳ — תפעולי</div>

<div style="display:flex;gap:2.5rem;align-items:flex-start;">
  <div style="flex:1;">
    <h2 class="slide-title">Elite Concierge</h2>
    <p class="slide-subtitle" style="color:#ef406b;">לוגיסטיקה חרישית — הכול קורה מאחורי הקלעים</p>

    <div style="display:flex;flex-direction:column;gap:1rem;">
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#ef406b;color:#fff;margin-top:2px;">לוגיסטיקה</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">ניהול אוטונומי של תיאום בדיקות דם בבית, משלוחי תוספים וסנכרון יומנים — ישירות מול עוזרי המטופל</div>
      </div>
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#ef406b;color:#fff;margin-top:2px;">מלאי</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">מעקב שרשרת ערך — תוספים, חיישני CGM — הכול מנוטר ומוזמן מחדש אוטומטית</div>
      </div>
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#ef406b;color:#fff;margin-top:2px;">תזמון</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">תזכורות חכמות לביצוע בדיקות + עדכון על בדיקות שלא בוצעו ללא מעורבות המטופל</div>
      </div>
    </div>
  </div>

  <div class="card" style="flex:0 0 210px;border-color:rgba(239,64,107,0.2);">
    <div style="color:#757575;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.9rem;">ה-VIP Experience</div>
    <div style="color:#333;font-size:0.88rem;line-height:1.6;">המטופל לא יודע שכלום קורה — הוא רק מרגיש שהכול</div>
    <div style="margin-top:0.8rem;color:#ef406b;font-size:1.1rem;font-family:'Playfair Display',serif;font-style:italic;">פשוט עובד.</div>
    <div style="margin-top:1.2rem;background:#fdeef2;border-radius:8px;padding:0.8rem;color:#333;font-size:0.78rem;line-height:1.5;">
      ✈️ "ראיתי שאתה טס לחו"ל — סידרתי מלאי תוספים למסע"
    </div>
  </div>
</div>

</div>

---
layout: default
---

<!-- SLIDE 7: Health Companion -->
<div style="padding:2.5rem 3.5rem;direction:rtl;height:100%;box-sizing:border-box;background:#f0faf7;">

<div class="label" style="color:#00C49A;">ערוץ ג׳ — ליווי</div>

<div style="display:flex;gap:2.5rem;align-items:flex-start;">
  <div style="flex:1;">
    <h2 class="slide-title">Health Companion</h2>
    <p class="slide-subtitle" style="color:#00C49A;">שותף לדרך — 24/7 בלי להרגיש "נרדף"</p>

    <div style="display:flex;flex-direction:column;gap:1rem;">
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#00C49A;color:#fff;margin-top:2px;">הנגשה</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">תרגום תוצאות בדיקות מקליני לפשוט — "מה משמעות תוצאות המעבדה עבורי?"</div>
      </div>
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#00C49A;color:#fff;margin-top:2px;">Nudging</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">תזכורות מבוססות מצב פיזיולוגי — "השינה שלך הייתה קטועה, כדאי להקדים מגנזיום"</div>
      </div>
      <div style="display:flex;gap:0.9rem;align-items:flex-start;">
        <span class="badge" style="background:#00C49A;color:#fff;margin-top:2px;">The Vault</span>
        <div style="color:#333;font-size:0.9rem;line-height:1.6;">קליטת ייעוצים ומסמכים חיצוניים ואינטגרציה שלהם בתוכנית הטיפול הכוללת</div>
      </div>
    </div>
  </div>

  <div class="card" style="flex:0 0 210px;border-color:rgba(0,196,154,0.25);background:#fff;">
    <div style="color:#757575;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.9rem;">ערוץ תקשורת</div>
    <div style="text-align:center;padding:0.8rem 0;">
      <div style="font-size:2.2rem;margin-bottom:0.4rem;">💬</div>
      <div style="color:#1a1a1a;font-weight:700;">WhatsApp</div>
      <div style="color:#757575;font-size:0.75rem;margin-top:0.2rem;">+ Dashboard מלא לרופא ולאדמין</div>
    </div>
    <div style="background:#e6f7f3;border-radius:8px;padding:0.8rem;color:#333;font-size:0.78rem;line-height:1.5;margin-top:0.8rem;">
      🗣️ תשאול חופשי בשפה טבעית — המטופל שואל, המערכת עונה
    </div>
  </div>
</div>

</div>

---
layout: default
---

<!-- SLIDE 8: Patient Journey -->
<div style="padding:2.5rem 3.5rem;direction:rtl;height:100%;box-sizing:border-box;">

<div class="label">מסע המטופל</div>
<h2 class="slide-title">Human-AI Synergy</h2>
<p class="slide-subtitle">AI מתאם — אנשים מבצעים — מטופל חווה</p>

<div style="display:flex;gap:0;align-items:stretch;margin-bottom:1.5rem;">
  <div class="card" style="flex:1;text-align:center;border-radius:10px 0 0 10px;border-color:rgba(0,196,154,0.2);">
    <div style="color:#00C49A;font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.6rem;">Onboarding</div>
    <div style="font-size:1.4rem;margin-bottom:0.4rem;">📋</div>
    <div style="color:#333;font-size:0.78rem;line-height:1.4;">שאלונים אדפטיביים מונחי AI</div>
  </div>
  <div style="width:16px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:0.6rem;">▶</div>
  <div class="card" style="flex:1;text-align:center;border-radius:0;border-color:rgba(26,143,191,0.2);">
    <div style="color:#1A8FBF;font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.6rem;">Diagnostics</div>
    <div style="font-size:1.4rem;margin-bottom:0.4rem;">🧪</div>
    <div style="color:#333;font-size:0.78rem;line-height:1.4;">בדיקות דם, DEXA, VO2 Max</div>
  </div>
  <div style="width:16px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:0.6rem;">▶</div>
  <div class="card" style="flex:1;text-align:center;border-radius:0;border-color:rgba(239,64,107,0.18);">
    <div style="color:#ef406b;font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.6rem;">Synthesis</div>
    <div style="font-size:1.4rem;margin-bottom:0.4rem;">⚗️</div>
    <div style="color:#333;font-size:0.78rem;line-height:1.4;">רופא + AI מגבשים פרוטוקול</div>
  </div>
  <div style="width:16px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:0.6rem;">▶</div>
  <div class="card" style="flex:1;text-align:center;border-radius:0;border-color:rgba(0,196,154,0.2);">
    <div style="color:#00C49A;font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.6rem;">Continuous Care</div>
    <div style="font-size:1.4rem;margin-bottom:0.4rem;">🔄</div>
    <div style="color:#333;font-size:0.78rem;line-height:1.4;">ליווי יומיומי — צוות + AI</div>
  </div>
  <div style="width:16px;background:#f5f5f5;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:0.6rem;">▶</div>
  <div class="card" style="flex:1;text-align:center;border-radius:0 10px 10px 0;border-color:rgba(239,64,107,0.18);">
    <div style="color:#ef406b;font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.6rem;">Review</div>
    <div style="font-size:1.4rem;margin-bottom:0.4rem;">📊</div>
    <div style="color:#333;font-size:0.78rem;line-height:1.4;">שיקוף מגמות רבעוני</div>
  </div>
</div>

<div style="background:#fff5f7;border:1px solid rgba(239,64,107,0.15);border-radius:10px;padding:1rem 1.4rem;text-align:center;">
  <span style="color:#ef406b;font-family:'Playfair Display',serif;font-size:1.05rem;font-style:italic;">
    Digital Twin — סימולציות עבור הרופא והמטופל על בסיס כל המידע המצטבר
  </span>
</div>

</div>

---
layout: default
---

<!-- SLIDE 9: Strategic Principles -->
<div style="padding:2.5rem 3.5rem;direction:rtl;height:100%;box-sizing:border-box;background:#fafafa;">

<div class="label">עקרונות ליישום</div>
<h2 class="slide-title">דגשים אסטרטגיים</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:0.5rem;">
  <div class="card" style="border-color:rgba(0,196,154,0.2);">
    <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.7rem;">
      <span style="font-size:1.4rem;">🔐</span>
      <span style="color:#00C49A;font-weight:700;font-size:0.9rem;">פרטיות VIP Standard</span>
    </div>
    <div style="color:#444;font-size:0.86rem;line-height:1.65;">מודלי שפה בסביבות ענן סגורות (VPC), ללא אימון על נתוני לקוחות, הצפנה מקצה לקצה</div>
  </div>
  <div class="card" style="border-color:rgba(239,64,107,0.2);">
    <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.7rem;">
      <span style="font-size:1.4rem;">📚</span>
      <span style="color:#ef406b;font-weight:700;font-size:0.9rem;">Explainability</span>
    </div>
    <div style="color:#444;font-size:0.86rem;line-height:1.65;">כל המלצה קלינית מגובה במקור מדעי (Citations) — הרופא מאשר מהר, בבטחה</div>
  </div>
  <div class="card" style="border-color:rgba(26,143,191,0.2);">
    <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.7rem;">
      <span style="font-size:1.4rem;">👨‍⚕️</span>
      <span style="color:#1A8FBF;font-weight:700;font-size:0.9rem;">Human-in-the-Loop</span>
    </div>
    <div style="color:#444;font-size:0.86rem;line-height:1.65;">כל המלצה רפואית עוברת אישור מהיר של הגורם האנושי לפני הנגשתה למטופל</div>
  </div>
  <div class="card" style="border-color:rgba(0,196,154,0.2);">
    <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.7rem;">
      <span style="font-size:1.4rem;">🎯</span>
      <span style="color:#00C49A;font-weight:700;font-size:0.9rem;">Hyper-Personalization</span>
    </div>
    <div style="color:#444;font-size:0.86rem;line-height:1.65;">ה-AI לומד העדפות, טון ואורח חיים — ומשתלב כחלק בלתי נפרד מיומו של המטופל</div>
  </div>
</div>

</div>

---
layout: default
---

<!-- SLIDE 10: Market -->
<div style="padding:2.5rem 3.5rem;direction:rtl;height:100%;box-sizing:border-box;">

<div class="label">פוטנציאל שוק</div>
<h2 class="slide-title">מעבר למרפאת הלונגבטי</h2>
<p class="slide-subtitle">תשתית הסוכנים ניתנת לפריסה בכל מסגרת בריאות</p>

<div style="display:flex;gap:1.2rem;margin-bottom:1.5rem;">
  <div class="card" style="flex:1;border-color:rgba(239,64,107,0.2);">
    <div style="color:#ef406b;font-weight:700;margin-bottom:0.6rem;">🏥 רופא משפחה פרטי</div>
    <div style="color:#444;font-size:0.88rem;line-height:1.6;">אותה רשת סוכנים בקשר בין מטופל לרופא המשפחה — עם התאמות קלות</div>
  </div>
  <div class="card" style="flex:1;border-color:rgba(0,196,154,0.2);">
    <div style="color:#00C49A;font-weight:700;margin-bottom:0.6rem;">🏢 ארגוני בריאות</div>
    <div style="color:#444;font-size:0.88rem;line-height:1.6;">תשתית Longevity-focused agents לכל ארגון בריאות</div>
  </div>
</div>

<div style="background:#fafafa;border:1px solid rgba(0,0,0,0.07);border-radius:12px;padding:1.4rem;">
  <div style="color:#aaa;font-size:0.68rem;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:1rem;">דוגמאות ליכולות הסוכנים</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.7rem;">
    <div style="color:#333;font-size:0.83rem;padding-right:0.8rem;border-right:3px solid #00C49A;">איסוף תוצאות + עדכון גיליון רפואי</div>
    <div style="color:#333;font-size:0.83rem;padding-right:0.8rem;border-right:3px solid #ef406b;">הנגשת מושגים קליניים לשפה מובנת</div>
    <div style="color:#333;font-size:0.83rem;padding-right:0.8rem;border-right:3px solid #00C49A;">תיאום חכם לפי זמינות ביומן</div>
    <div style="color:#333;font-size:0.83rem;padding-right:0.8rem;border-right:3px solid #ef406b;">ניהול מלאי תוספים + הזמנה אוטומטית</div>
    <div style="color:#333;font-size:0.83rem;padding-right:0.8rem;border-right:3px solid #00C49A;">Behavioral Nudging מבוסס הקשר</div>
    <div style="color:#333;font-size:0.83rem;padding-right:0.8rem;border-right:3px solid #ef406b;">איסוף דיווחים סובייקטיביים שוטפים</div>
  </div>
</div>

</div>

---
layout: default
class: text-center
---

<!-- SLIDE 11: Closing -->
<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(160deg,#fff 50%,#fff5f7 100%);">

<div style="font-family:'Assistant',sans-serif;text-transform:uppercase;letter-spacing:0.3em;font-size:0.68rem;font-weight:700;color:#ef406b;margin-bottom:2rem;">
  LONGEVITY CLINIC &nbsp;·&nbsp; THE FUTURE OF CARE
</div>

<h2 style="font-family:'Playfair Display',serif;font-size:2.9rem;font-weight:900;color:#1a1a1a;line-height:1.15;margin-bottom:1.2rem;">
  ה-AI הוא לא תחליף לרופא —<br>
  <em style="color:#ef406b;font-style:normal;">הוא "מכפיל כוח"</em>
</h2>

<div style="width:60px;height:3px;background:#ef406b;border-radius:2px;margin:1.2rem auto;"></div>

<p style="font-family:'Playfair Display',serif;font-size:1.15rem;color:#757575;font-style:italic;max-width:560px;line-height:1.8;margin-bottom:2.5rem;">
  תחושת ליווי של 24/7 — מבלי להרגיש "נרדף" על ידי אפליקציה,<br>
  אלא נתמך על ידי שותף לדרך
</p>

<div style="display:flex;gap:2.5rem;color:#bbb;font-size:0.78rem;text-transform:uppercase;letter-spacing:0.15em;font-family:'Assistant',sans-serif;">
  <span>Zero Friction</span>
  <span style="color:#ef406b;">·</span>
  <span>Health Trustee</span>
  <span style="color:#ef406b;">·</span>
  <span>Digital Twin</span>
</div>

</div>
