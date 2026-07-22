<script>
/* =====================================================================
   Cornerstone: Person — task data + live dashboard
   ---------------------------------------------------------------------
   THIS IS YOUR SINGLE SOURCE OF TRUTH. Edit the TASKS array below.

   Each task:
     id     : unique short string
     title  : what it is (can include a Quarto link path)
     type   : "reading" | "response" | "practice" | "deliverable" | "admin"
     due    : "YYYY-MM-DD"  (deadline; responses/practices due at class time)
     status : "todo"     -> a committed task; shows in warnings
              "optional" -> a Reading Response option (you pick 8 of 12);
                            lives in the tracker, doesn't nag you
              "done"     -> finished; struck through, counts toward progress
     link   : (optional) URL/path, e.g. "submissions/rr1.qmd"
     note   : (optional) short reminder text
   ===================================================================== */
window.TASKS = [
  // --- Admin / start of term ---
  { id:"profile-submit", title:"Post & submit Personal Profile (Canvas)", type:"admin", due:"2026-09-16", status:"todo" },
  { id:"profile-read",   title:"Read classmates' Personal Profiles", type:"admin", due:"2026-09-19", status:"todo" },

  // --- Practices (start before the class that discusses them) ---
  { id:"prac-confession", title:"Practice confession to someone you trust", type:"practice", due:"2026-09-27", status:"todo", note:"Before the Sep 28 class on Communal Life." },
  { id:"prac-fast",       title:"24-hour fast", type:"practice", due:"2026-10-04", status:"todo", note:"Needs a clear day; before Oct 5." },
  { id:"prac-prayer-start", title:"Begin a week-long prayer practice", type:"practice", due:"2026-10-26", status:"todo", note:"Start ~1 week before the Nov 2 prayer response." },
  { id:"prac-lectio",     title:"Practice Lectio Divina across the week", type:"practice", due:"2026-11-16", status:"todo", note:"For the Nov 16 Biblical Studies response." },
  { id:"prac-examen",     title:"Begin the Daily Examen", type:"practice", due:"2026-12-07", status:"todo", note:"For the Dec 7 Theological Reflection." },
  { id:"read-nouwen",     title:"Start Nouwen, In the Name of Jesus (90 pp)", type:"reading", due:"2026-12-01", status:"todo", note:"Biggest single reading — pace ~15 pp/day for Dec 14." },

  // --- Reading Responses: choose 8 of these 12 (status "optional") ---
  { id:"rr1",  title:"RR — Dying & Rising", type:"response", due:"2026-09-21", status:"optional" },
  { id:"rr2",  title:"RR — Communal Life", type:"response", due:"2026-09-28", status:"optional" },
  { id:"rr3",  title:"RR — Silence, Solitude & Fasting", type:"response", due:"2026-10-05", status:"optional" },
  { id:"rr4",  title:"RR — Chastity, Simplicity, Generosity", type:"response", due:"2026-10-26", status:"optional" },
  { id:"rr5",  title:"RR — Prayer & Dark Nights", type:"response", due:"2026-11-02", status:"optional" },
  { id:"rr6",  title:"RR — Sabbath, Justice, Suffering", type:"response", due:"2026-11-09", status:"optional" },
  { id:"rr7",  title:"RR — Biblical Studies (Lectio)", type:"response", due:"2026-11-16", status:"optional" },
  { id:"rr8",  title:"RR — Gratitude (Thanksgiving)", type:"response", due:"2026-11-23", status:"optional" },
  { id:"rr9",  title:"RR — Theological Studies", type:"response", due:"2026-11-30", status:"optional" },
  { id:"rr10", title:"RR — Theological Reflection", type:"response", due:"2026-12-07", status:"optional" },
  { id:"rr11", title:"RR — Teachableness / Nouwen & Bill", type:"response", due:"2026-12-14", status:"optional" },
  { id:"rr12", title:"RR — 'Person in 20 years' (1 page)", type:"response", due:"2026-12-14", status:"optional" },

  // --- Deliverables ---
  { id:"rhythm", title:"Rhythm of Life due (Word doc → Canvas)", type:"deliverable", due:"2026-12-16", status:"todo", note:"Late = one full letter grade per day." },
  { id:"final",  title:"Final Exam due", type:"deliverable", due:"2026-12-18", status:"todo" }
];

/* ---------------------------------------------------------------------
   READINGS TRACKER — one row per class week that has reading.
   Set status:"done" when you've finished that week's reading.
   pages are my estimates from the assigned ranges (guides, not exact).
   --------------------------------------------------------------------- */
window.READINGS = [
  { week:"Sep 21", topic:"Dying & Rising", pages:45, due:"2026-09-21", status:"todo", items:[
    { who:"James K.A. Smith", what:"You Are What You Love, ch. 1", pages:"pp. 1–25" },
    { who:"Dallas Willard", what:"“Spiritual Formation as a Part of Salvation”", pages:"" },
    { who:"Eugene Peterson", what:"“On Pentecostals, Poets, and Professors” (Subversive Spirituality)", pages:"pp. 245–249, 252–256" }
  ]},
  { week:"Sep 28", topic:"Communal Life", pages:75, due:"2026-09-28", status:"todo", items:[
    { who:"Dietrich Bonhoeffer", what:"Life Together", pages:"pp. 21–57, 66–89, 110–122" },
    { who:"John Ortberg", what:"“Your Hidden Curriculum” (Leadership, 2009)", pages:"" }
  ]},
  { week:"Oct 5", topic:"Silence, Solitude & Fasting", pages:40, due:"2026-10-05", status:"todo", items:[
    { who:"Kathleen Norris", what:"Amazing Grace: A Vocabulary of Faith", pages:"pp. 16–17" },
    { who:"Choose one", what:"Nouwen, The Way of the Heart (pp. 19–40) — OR — Sue Monk Kidd, Firstlight (pp. 160–168)", pages:"" },
    { who:"Len Vander Zee", what:"“Retreating into Real Life” (The Banner)", pages:"pp. 14–17" },
    { who:"Richard Foster", what:"Celebration of Discipline, ch. 4 (Fasting)", pages:"pp. 47–61" },
    { who:"Watch", what:"Tech-fasting video (youtube.com/watch?v=dRl8EIhrQjQ)", pages:"" }
  ]},
  { week:"Oct 26", topic:"Chastity, Simplicity, Generosity", pages:47, due:"2026-10-26", status:"todo", items:[
    { who:"Rebecca K. DeYoung", what:"Glittering Vices", pages:"pp. 159–179" },
    { who:"Mother Teresa", what:"No Greater Love", pages:"pp. 38–49" },
    { who:"Richard Foster", what:"Celebration of Discipline (Simplicity)", pages:"pp. 79–95" }
  ]},
  { week:"Nov 2", topic:"Prayer & Dark Nights", pages:41, due:"2026-11-02", status:"todo", items:[
    { who:"Eugene Peterson", what:"“Praying by the Book” (Working the Angles)", pages:"pp. 30–43" },
    { who:"Marjorie Thompson", what:"“Communication and Communion with God” (Soul Feast)", pages:"pp. 33–55" },
    { who:"Brother Lawrence", what:"The Practice of the Presence of God (in Devotional Classics)", pages:"pp. 81–87" }
  ]},
  { week:"Nov 9", topic:"Sabbath, Justice, Suffering", pages:62, due:"2026-11-09", status:"todo", items:[
    { who:"Barbara Brown Taylor", what:"The Preaching Life", pages:"pp. 26–39" },
    { who:"Eugene Peterson", what:"Working the Angles", pages:"pp. 44–53" },
    { who:"Martin Luther King, Jr.", what:"Selections: “Nonviolence and Racial Justice,” “Letter from a Birmingham Jail,” “A Tough Mind and a Tender Heart,” “I See the Promised Land”", pages:"" }
  ]},
  { week:"Nov 16", topic:"Biblical Studies", pages:29, due:"2026-11-16", status:"todo", items:[
    { who:"Marjorie Thompson", what:"“Chewing the Bread of the Word” (Soul Feast)", pages:"pp. 19–31" },
    { who:"Athanasius", what:"Letter to Marcellinus (in On the Incarnation) — assigned pages only!", pages:"pp. 97–108, 114–119" }
  ]},
  { week:"Nov 23", topic:"Gratitude", pages:5, due:"2026-11-23", status:"todo", items:[
    { who:"—", what:"No assigned reading. Thanksgiving break: an opportunity to write a gratitude response.", pages:"" }
  ]},
  { week:"Nov 30", topic:"Theological Studies", pages:28, due:"2026-11-30", status:"todo", items:[
    { who:"Eugene Peterson", what:"“The Seminary as a Place of Spiritual Formation” (Subversive Spirituality)", pages:"pp. 54–60" },
    { who:"Robert L. Wilken", what:"“Finding God and Seeking God” (The Spirit of Early Christian Thought)", pages:"pp. 106–109" },
    { who:"Diogenes Allen", what:"“Christian Doctrine and the Spiritual Life” (Spiritual Theology)", pages:"pp. 152–158" },
    { who:"Ellen Charry", what:"“John Calvin” (By the Renewing of Your Minds)", pages:"pp. 199, 201–205, 210–217" }
  ]},
  { week:"Dec 7", topic:"Theological Reflection", pages:48, due:"2026-12-07", status:"todo", items:[
    { who:"David Rylaarsdam", what:"“Theological Reflection in Augustine’s Confessions” (For God So Loved the World)", pages:"pp. 199–209" },
    { who:"Augustine", what:"Confessions, Book 1 OR Book 8", pages:"pp. 14–33 or 137–157" },
    { who:"Sue Monk Kidd", what:"Firstlight", pages:"pp. 95–113" },
    { who:"Read or watch", what:"“Daily Examen” — OR — the Examen video (ignatianspirituality.com)", pages:"" }
  ]},
  { week:"Dec 14", topic:"Life-Long Formation", pages:110, due:"2026-12-14", status:"todo", items:[
    { who:"David Rylaarsdam", what:"“A Teachable Teacher: Docilitas and the Vocation of John Calvin” (Marginal Resistance)", pages:"pp. 165–180" },
    { who:"Henri Nouwen", what:"In the Name of Jesus — ⚠️ 90 pp, start early", pages:"pp. 11–101" },
    { who:"Eugene Peterson", what:"“Developing a ‘lived theology’ of the call” (interview)", pages:"" },
    { who:"Diana Butler Bass", what:"“Intentionality, Practice, and Vitality”", pages:"" }
  ]}
];

/* ---- Dashboard renderer (runs only where #task-dashboard exists) ---- */
(function () {
  function parseDate(s){ const [y,m,d]=s.split("-").map(Number); return new Date(y, m-1, d); }
  function today(){ const t=new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }
  function daysUntil(s){ return Math.round((parseDate(s)-today())/86400000); }
  function fmt(s){ return parseDate(s).toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"}); }
  function rel(n){ if(n<0) return `${-n} day${n===-1?"":"s"} overdue`; if(n===0) return "due today"; if(n===1) return "due tomorrow"; return `in ${n} days`; }

  function taskHTML(t, cls){
    const link = t.link ? `<a href="${t.link}">${t.title}</a>` : t.title;
    const note = t.note ? `<span class="note">${t.note}</span>` : "";
    return `<div class="task ${cls}">
      <span class="pill ${t.type}">${t.type}</span>
      <span class="body">${link}${note}</span>
      <span class="meta">${fmt(t.due)} · ${rel(daysUntil(t.due))}</span>
    </div>`;
  }

  function render(){
    const root = document.getElementById("task-dashboard");
    if(!root) return;
    const tasks = window.TASKS.slice();

    // Committed (todo) tasks drive the warnings
    const committed = tasks.filter(t=>t.status==="todo");
    const overdue  = committed.filter(t=>daysUntil(t.due)<0).sort((a,b)=>parseDate(a.due)-parseDate(b.due));
    const soon     = committed.filter(t=>{const d=daysUntil(t.due);return d>=0&&d<=7;}).sort((a,b)=>parseDate(a.due)-parseDate(b.due));
    const upcoming = committed.filter(t=>daysUntil(t.due)>7).sort((a,b)=>parseDate(a.due)-parseDate(b.due));
    const done     = tasks.filter(t=>t.status==="done").sort((a,b)=>parseDate(b.due)-parseDate(a.due));

    // Banner
    let banner="", bclass="ok";
    if(overdue.length){ bclass="alert"; banner=`🔴 ${overdue.length} task${overdue.length>1?"s":""} overdue`+(soon.length?` · ${soon.length} due within a week`:""); }
    else if(soon.length){ bclass="warn"; banner=`🟠 ${soon.length} task${soon.length>1?"s":""} due within the next 7 days`; }
    else { banner="🟢 Nothing due in the next 7 days — nice work."; }

    // Hero: next committed deadline not done
    const next=[...overdue,...soon,...upcoming][0];
    const hero = next
      ? `<div class="dash-hero"><div class="label">Next up</div>
           <div class="title">${next.title}</div>
           <div class="when">${fmt(next.due)} — <b>${rel(daysUntil(next.due))}</b></div></div>`
      : `<div class="dash-hero"><div class="label">Next up</div><div class="title">All caught up 🎉</div></div>`;

    // Reading Response progress
    const responses = tasks.filter(t=>t.type==="response");
    const rrDone = responses.filter(t=>t.status==="done").length;
    const rrNext = responses.filter(t=>t.status!=="done" && daysUntil(t.due)>=0)
                            .sort((a,b)=>parseDate(a.due)-parseDate(b.due))[0];
    const pct = Math.min(100, Math.round(rrDone/8*100));
    const rrBlock = `
      <div class="task-group">
        <h3>Reading Responses — ${rrDone} of 8 done</h3>
        <div class="progress-wrap">
          <div class="progress-bar-outer"><div class="progress-bar-inner" style="width:${pct}%"></div></div>
          <div class="progress-label">You must complete 8 of the 12 options.${rrNext?` Next opportunity: <b>${rrNext.title.replace("RR — ","")}</b> on ${fmt(rrNext.due)} (${rel(daysUntil(rrNext.due))}).`:""} <a href="responses.html">Open the tracker →</a></div>
        </div>
      </div>`;

    // Reading progress
    const readings = (window.READINGS||[]);
    const rDone = readings.filter(r=>r.status==="done").length;
    const rPages = readings.reduce((s,r)=>s+r.pages,0);
    const rPagesDone = readings.filter(r=>r.status==="done").reduce((s,r)=>s+r.pages,0);
    const rNext = readings.filter(r=>r.status!=="done" && daysUntil(r.due)>=0)
                          .sort((a,b)=>parseDate(a.due)-parseDate(b.due))[0];
    const rPct = readings.length? Math.round(rDone/readings.length*100):0;
    const readBlock = `
      <div class="task-group">
        <h3>Readings — ${rDone} of ${readings.length} weeks · ~${rPagesDone}/${rPages} pp</h3>
        <div class="progress-wrap">
          <div class="progress-bar-outer"><div class="progress-bar-inner" style="width:${rPct}%"></div></div>
          <div class="progress-label">${rNext?`Next: <b>${rNext.topic}</b> (~${rNext.pages} pp) by ${fmt(rNext.due)} — ${rel(daysUntil(rNext.due))}.`:"All reading done 🎉"} <a href="readings.html">Open the reading tracker →</a></div>
        </div>
      </div>`;

    function group(title, arr, cls){
      if(!arr.length) return "";
      return `<div class="task-group"><h3>${title}</h3>${arr.map(t=>taskHTML(t,cls)).join("")}</div>`;
    }

    const legend = `
      <div class="type-legend">
        <span class="legend-title">Task types</span>
        <span class="legend-item"><span class="pill admin">admin</span> setup / logistics</span>
        <span class="legend-item"><span class="pill practice">practice</span> spiritual discipline</span>
        <span class="legend-item"><span class="pill reading">reading</span> assigned reading</span>
        <span class="legend-item"><span class="pill response">response</span> reading response</span>
        <span class="legend-item"><span class="pill deliverable">deliverable</span> graded submission</span>
        <span class="legend-note">Edit everything in <code>assets/tasks.js</code>.</span>
      </div>`;

    root.innerHTML =
      `<div id="dash-banner" class="${bclass}">${banner}</div>` +
      hero +
      rrBlock +
      readBlock +
      group("🔴 Overdue", overdue, "overdue") +
      group("🟠 Due this week", soon, "soon") +
      group("Upcoming", upcoming, "upcoming") +
      (done.length?`<details class="task-group"><summary><b>✅ Completed (${done.length})</b></summary>${done.map(t=>taskHTML(t,"done")).join("")}</details>`:"") +
      legend;
  }

  // Full reading tracker (for readings.qmd via #reading-tracker) — itemized per week
  function renderReadingTracker(){
    const root=document.getElementById("reading-tracker");
    if(!root||!window.READINGS) return;
    const cards=window.READINGS.map(r=>{
      const d=daysUntil(r.due); const done=r.status==="done";
      let cls="rc-upcoming",badge="upcoming";
      if(done){cls="rc-done";badge="✔ read";}
      else if(d<0){cls="rc-overdue";badge=rel(d);}
      else if(d<=7){cls="rc-soon";badge=rel(d);}
      else {badge=rel(d);}
      const items=(r.items||[]).map(it=>`
        <li>
          <span class="rl-who">${it.who}</span>
          <span class="rl-what">${it.what}</span>
          ${it.pages?`<span class="rl-pages">${it.pages}</span>`:""}
        </li>`).join("");
      return `<div class="reading-card ${cls}">
        <div class="reading-card-head">
          <span class="rc-check">${done?"✅":"☐"}</span>
          <span class="rc-week">${r.week}</span>
          <span class="rc-topic">${r.topic}</span>
          <span class="rc-meta">~${r.pages} pp · <b>${badge}</b></span>
        </div>
        <ul class="reading-list">${items}</ul>
      </div>`;
    }).join("");
    const total=window.READINGS.reduce((s,r)=>s+r.pages,0);
    const doneN=window.READINGS.filter(r=>r.status==="done").length;
    root.innerHTML=`
      <p class="progress-label">${doneN} of ${window.READINGS.length} weeks read · ~${total} pp total. Mark a week <code>"done"</code> in <code>assets/tasks.js</code> to check it off.</p>
      ${cards}`;
  }

  function boot(){ render(); renderReadingTracker(); }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
</script>
