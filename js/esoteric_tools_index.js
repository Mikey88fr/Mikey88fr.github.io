// Esoteric Tools index (v1 — manual, alpha)
// Edit this file when you add/remove/update tools.
// NOTE: replace YOUR_GITHUB_USERNAME with your actual GitHub handle.

window.ESOTERIC_TOOLS = [
  {
    id: "vox_populi",
    name: "vox_populi",
    status: "prototype/alpha",
    kind: "bot",
    tagline: "Telegram community bot for healthier, offline-leaning group engagement.",
    description: [
      "vox_populi is a Telegram bot intended for community organisers and moderators.",
      "It nudges groups toward healthier engagement instead of endless scrolling,",
      "and is designed to encourage offline meetups and real-world connection.",
      "",
      "Right now it is early alpha: some features may work, some may be half-wired,",
      "and nothing is guaranteed safe or stable enough for production communities."
    ].join("\n"),
    audience: "Telegram group/channel owners and moderators with a technical friend.",
    risks: [
      "- Prototype/alpha: features may be incomplete or break without warning.",
      "- Requires someone comfortable with Python / bots / hosting to deploy safely.",
      "- Not audited for security or abuse-resistance; do not trust it with sensitive data."
    ].join("\n"),
    github_url: "https://github.com/Mikey88fr/Vox_Populi",
    exposed_files: [] // reserved for future FILES/VIEW/SNIPPET commands
  },
  {
    id: "synthcache",
    name: "synthcache",
    status: "prototype/alpha",
    kind: "extension",
    tagline: "Privacy-focused bookmark manager with an After Dark mode and planned scam/AI detection.",
    description: [
      "synthcache is a browser extension that treats bookmarks like a private archive instead of",
      "a surveillance feed. It supports normal bookmarking with tags pulled from site metadata.",
      "",
      "Its After Dark mode hides porn bookmarks from normal view and only reveals them in",
      "private/incognito windows with a 4-digit code. In normal mode, there is no obvious sign",
      "those bookmarks exist.",
      "",
      "Planned but not finished: built-in AI/scam detection for text and images, including",
      "common scammer language patterns and basic checks for AI-generated or stolen profile images."
    ].join("\n"),
    audience: "People who want private, sane bookmarking and are worried about scams and fake personas.",
    risks: [
      "- Prototype/alpha: the UX exists, but detection logic is incomplete.",
      "- Not a magic anti-scam shield; it will miss things and may produce false alarms.",
      "- Extension security and privacy have not been formally audited."
    ].join("\n"),
    github_url: "https://github.com/Mikey88fr/Synthcache",
    exposed_files: []
  },
  {
    id: "vouch",
    name: "vouch",
    status: "prototype",
    kind: "web-app",
    tagline: "Experimental community-watch plus dating concept built around receipts, not vibes.",
    description: [
      "vouch is an early-stage web app idea that merges neighbourhood-watch thinking with dating.",
      "The concept is to make it easier for people to share receipts and patterns of behaviour,",
      "instead of relying purely on individual gut feeling and opaque rumours.",
      "",
      "At this stage it is more experiment than product. Expect rough edges, missing flows,",
      "and design questions that are still being worked out."
    ].join("\n"),
    audience: "Designers, developers, and organisers exploring safer dating/community tooling.",
    risks: [
      "- Prototype only: not suitable for real-world safety decisions yet.",
      "- Social and legal questions are unresolved; treat this as a sandbox, not a solution.",
      "- Data handling and consent flows need thorough review before any public deployment."
    ].join("\n"),
    github_url: "https://github.com/Mikey88fr/Vouch",
    exposed_files: []
  }
];

