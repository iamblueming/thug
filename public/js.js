const tiles = {
  snapshot: {
    title: "Snapshot",
    icon: "ph-film-strip",
    hint: "A concise overview and the story’s core tension.",
    body: [
      "The film follows Starr, a teenager balancing two environments that expect different versions of her. When she witnesses a fatal incident involving someone she knows, her private life collides with public attention.",
      "From that point, every choice becomes heavier: what she says, what she hides, and what others assume about her community. The story explores how quickly a person can be turned into a symbol—and how hard it is to protect the truth.",
      "This is not only about one event. It is about pressure: the pressure to be “safe,” to be “acceptable,” and to stay quiet when silence feels easier."
    ],
    question: "What details decide whether people see someone as human—or as a headline?"
  },
  twoWorlds: {
    title: "Two Worlds",
    icon: "ph-split-vertical",
    hint: "Identity, code-switching, and the cost of fitting in.",
    body: [
      "Starr learns that language, tone, and even expression can become survival skills. In one place she minimizes herself to avoid being judged; in another place she stays alert to avoid being targeted.",
      "The film shows code-switching as constant decision-making: which words are safe, which reactions will be misunderstood, and which parts of your life must be hidden.",
      "Over time, that split can feel like losing pieces of yourself. The film asks whether belonging should require shrinking."
    ],
    question: "Where do you feel most like yourself—and what changes when you enter a different space?"
  },
  theStop: {
    title: "The Stop",
    icon: "ph-hand-palm",
    hint: "A turning point shaped by power and fear.",
    body: [
      "A single moment reveals how uneven power can be. The scene is tense because it is not just about rules—it's about who is treated as a threat before they do anything.",
      "The film emphasizes how quickly ordinary actions are reinterpreted when fear and authority combine. Afterward, the community carries grief while outsiders debate “what should have happened.”",
      "The scene matters because it forces the audience to sit with panic and consequences—not just opinions."
    ],
    question: "Why do people argue about “what they should have done” instead of asking why the situation was unsafe?"
  },
  family: {
    title: "Family",
    icon: "ph-house",
    hint: "Protection, conflict, and love under pressure.",
    body: [
      "Starr’s family is not perfect, but it is a place where values are taught directly—through rules, stories, and hard conversations.",
      "The film shows parenting as strategy: how to keep a child safe without taking away their future. It also shows disagreement inside love—different beliefs about risk, speaking up, and what strength looks like.",
      "Family becomes a shelter, but also a mirror: it reflects what is at stake if the outside world refuses to change."
    ],
    question: "When does protection become control—and how can families balance both?"
  },
  labels: {
    title: "Labels",
    icon: "ph-tag",
    hint: "How a person can be reduced to a stereotype.",
    body: [
      "After the incident, people search for a simple story: good vs bad, innocent vs guilty. The film challenges that by showing how quickly labels replace complexity.",
      "When someone is treated like a category, every detail becomes “evidence” for the label—clothes, friends, neighborhood, past mistakes. The person disappears and the stereotype becomes the main character.",
      "The film pushes back: a life cannot be summarized by rumors or assumptions."
    ],
    question: "What labels do people use to avoid empathy—and how do those labels get repeated?"
  },
  media: {
    title: "Media Story",
    icon: "ph-newspaper",
    hint: "What gets amplified, edited, or ignored.",
    body: [
      "The film highlights how narratives are built: a clip, a quote, a photo—then a conclusion. Once a storyline spreads, it becomes difficult to correct, even with facts.",
      "Certain voices are treated as “neutral” and others as “biased.” But the choices behind coverage are not neutral: what is shown first, what words are used, whose emotions are trusted.",
      "The result is pressure on witnesses and families to perform grief in a way the public approves."
    ],
    question: "How does media framing change what people believe is “the truth”?"
  },
  silenceVoice: {
    title: "Silence vs Voice",
    icon: "ph-megaphone",
    hint: "The risks of speaking, and the risks of staying quiet.",
    body: [
      "Staying silent can feel safer at first. Speaking up can bring attention, backlash, and isolation. The film makes that choice feel real by showing consequences on relationships and daily life.",
      "But silence also has a cost: it can turn pain into a private burden and allow false stories to harden into “facts.”",
      "The film frames voice as responsibility—not because it is easy, but because it is necessary."
    ],
    question: "What makes someone finally decide, “I can’t stay quiet anymore”?"
  },
  community: {
    title: "Community",
    icon: "ph-users-three",
    hint: "Grief, protest, unity, and difficult choices.",
    body: [
      "The community response is layered: sadness, frustration, fear, and solidarity. The film does not reduce protest to one emotion or one outcome.",
      "It also shows how tension grows when people feel ignored. When systems do not respond, the community finds other ways to be heard.",
      "At its best, community becomes a reminder: people are not alone, and pain is shared."
    ],
    question: "How do communities turn grief into action without losing each other in the process?"
  },
  allyship: {
    title: "Allyship",
    icon: "ph-handshake",
    hint: "Support that costs something vs support that is convenient.",
    body: [
      "The film contrasts different reactions from peers: some listen and learn; others defend comfort and call it “being honest.”",
      "Allyship is shown as behavior, not identity. It includes asking better questions, staying present when it’s uncomfortable, and not turning someone else’s pain into a debate topic.",
      "Real support involves risk—the willingness to change."
    ],
    question: "How can someone prove support through actions rather than words?"
  },
  system: {
    title: "System",
    icon: "ph-scales",
    hint: "Institutions, rules, and uneven consequences.",
    body: [
      "The film points to a pattern: when power is concentrated, accountability can become optional. Procedures may exist, but outcomes can still be unequal.",
      "It also shows how systems protect themselves—through delays, technical language, and shifting blame away from structures.",
      "This section is about the gap between what is legal and what is just."
    ],
    question: "What is one ‘rule’ that seems neutral but creates unequal results?"
  },
  filmCraft: {
    title: "Film Craft",
    icon: "ph-camera",
    hint: "How the movie constructs meaning through visuals and sound.",
    body: [
      "Beyond the plot, the film uses craft to guide emotion: close shots to trap the viewer in tension, wider shots to show isolation, and pacing to build pressure.",
      "Sound design matters too—silences and sudden noise can make a moment feel unsafe. Color and lighting create contrast between spaces and identities.",
      "Looking at craft helps you explain meaning without only summarizing events."
    ],
    question: "Which camera or sound choice affected you most, and what did it make you feel?"
  },
  whatNow: {
    title: "What Now?",
    icon: "ph-compass",
    hint: "Turning reflection into realistic, teen-friendly action.",
    body: [
      "A film can start a conversation, but change requires choices after the credits. For teens, action can be small and still meaningful: learn, listen, challenge stereotypes, and support people who speak up.",
      "It can also mean checking sources, refusing to spread rumors, and noticing whose voices get ignored.",
      "The goal is awareness that becomes consistent behavior."
    ],
    question: "What is one action you can take this week that matches the values you believe in?"
  }
};

/* Spilled background text fragments */
const bgFragments = [
  "I learned to measure my words",
  "Two places asked for two versions of me",
  "They wanted a simple story. The truth wasn’t simple",
  "Silence can look like safety—until it isn’t",
  "A name can become a headline overnight",
  "Who gets believed first?",
  "Grief is real. So is anger",
  "Justice isn’t only a verdict",
  "A community is more than a stereotype",
  "Voice costs something",
  "A camera can frame a person—or reduce them",
  "I wanted to be invisible. I couldn’t",
  "Being ‘polite’ is not the same as being safe",
  "When the room watches you, you learn to perform",
  "Some stories get edited before they are heard",
  "A label can travel faster than the truth"
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function buildBackgroundSpill() {
  const el = document.getElementById("bgText");
  if (!el) return;

  el.innerHTML = "";

  const count = 46; // adjust if you want more/less density
  for (let i = 0; i < count; i++) {
    const frag = document.createElement("div");
    frag.className = "bg__frag";
    frag.textContent = bgFragments[Math.floor(Math.random() * bgFragments.length)];

    // random placement across full viewport
    const top = rand(4, 96);
    const left = rand(3, 94);

    // slight rotation
    const rot = rand(-8, 8);

    // varied opacity per fragment (still subtle)
    const opacity = rand(0.35, 0.95);

    frag.style.top = `${top}%`;
    frag.style.left = `${left}%`;
    frag.style.setProperty("--r", `${rot}deg`);
    frag.style.opacity = opacity.toFixed(2);

    el.appendChild(frag);
  }
}

/* Mobile notice logic */
function setupMobileNotice() {
  const notice = document.getElementById("mobileNotice");
  const closeBtn = document.getElementById("noticeClose");
  if (!notice || !closeBtn) return;

  const dismissed = localStorage.getItem("hideMobileNotice") === "1";
  if (dismissed) return;

  const isMobile = window.matchMedia("(max-width: 820px), (pointer: coarse)").matches;
  if (isMobile) notice.classList.add("is-visible");

  closeBtn.addEventListener("click", () => {
    notice.classList.remove("is-visible");
    localStorage.setItem("hideMobileNotice", "1");
  });
}

/* Modal logic */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalHint = document.getElementById("modalHint");
const modalBody = document.getElementById("modalBody");
const modalQuestion = document.getElementById("modalQuestion");
const modalIcon = document.getElementById("modalIcon");

let lastFocused = null;

function openModal(key) {
  const data = tiles[key];
  if (!data) return;

  lastFocused = document.activeElement;

  modalTitle.textContent = data.title;
  modalHint.textContent = data.hint;
  modalIcon.innerHTML = `<i class="ph ${data.icon}"></i>`;
  modalBody.innerHTML = data.body.map(p => `<p>${p}</p>`).join("");
  modalQuestion.textContent = data.question;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  modal.querySelector(".modal__close")?.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocused && typeof lastFocused.focus === "function") {
    lastFocused.focus();
  }
}

document.querySelectorAll(".card").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.key));
});

modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.dataset && target.dataset.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

/* init */
setupMobileNotice();
buildBackgroundSpill();

/* optional: rebuild background on resize (keeps it dynamic) */
window.addEventListener("resize", () => {
  // only rebuild if there is a real width change
  buildBackgroundSpill();
});

/* ---------------------------
   AmplitudeJS Player Init
   --------------------------- */

Amplitude.init({
  songs: [
    {
      name: "Only God Can Judge Me",
      artist: "2Pac",
      album: "All Eyez on Me",
      writer: "Tupac Shakur",
      url: "./2Pac - Only God Can Judge Me.mp3"
    },
    {
      name: "Keep Ya Head Up",
      artist: "2Pac",
      album: "Strictly 4 My N.I.G.G.A.Z...",
      writer: "Tupac Shakur",
      url: "./2Pac - Keep Ya Head Up.mp3"
    }
  ],
  volume: 0 // start at 0 for fade-in
});

// Stop button
document.getElementById("ampStop")?.addEventListener("click", () => {
  Amplitude.stop();
});

// Autoplay + fade-in (tries; may be blocked by browser)
window.addEventListener("load", async () => {
  const hint = document.getElementById("ampHint");

  try {
    // Attempt play
    Amplitude.play();
    if (hint) hint.hidden = true;

    // Fade volume to 100% over 5 seconds
    const durationMs = 5000;
    const steps = 50;
    const stepMs = durationMs / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const v = Math.min(100, Math.round((step / steps) * 100));
      Amplitude.setVolume(v);
      if (step >= steps) clearInterval(timer);
    }, stepMs);

  } catch (e) {
    // Autoplay blocked
    if (hint) hint.hidden = false;
    Amplitude.setVolume(100);
  }
});
