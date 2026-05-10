// ─────────────────────────────────────────────
//  MY DATA — Section 5
//  Supports: links, text blocks, bookmarks
//  For each item you can have:
//    { type: "link", title: "...", url: "..." }
//    { type: "text", title: "...", body: "..." }
//    { type: "both", title: "...", url: "...", body: "..." }
//  Files go in: public/myfiles/ folder
// ─────────────────────────────────────────────

export const myItems = [
  // ── LINKS / BOOKMARKS ──
  {
    type: "link",
    id: 1,
    title: "Figma Design Inspiration Reel",
    url: "https://www.instagram.com/reel/example1",
    label: "Instagram Reel",
  },
  {
    type: "link",
    id: 2,
    title: "React Advanced Patterns – Educational Video",
    url: "https://www.youtube.com/watch?v=example",
    label: "YouTube",
  },
  {
    type: "link",
    id: 3,
    title: "UX Portfolio Inspiration",
    url: "https://dribbble.com",
    label: "Dribbble",
  },

  // ── TEXT NOTES ──
  {
    type: "text",
    id: 4,
    title: "Interview Prep Checklist",
    body: `Before every interview:
• Review the company's product and recent news
• Practice STAR stories (3 conflict, 3 achievement)
• Prepare 5 questions to ask the interviewer
• Set up your camera, lighting, mic the night before
• Sleep 8 hrs. Drink water. Breathe.`,
  },
  {
    type: "text",
    id: 5,
    title: "My Job Search Goals",
    body: `Target: Land a UI/UX or Frontend role by Q3 2026
• Apply to 5 jobs per week minimum
• Follow up after 7 days if no response
• Network: 2 LinkedIn connections per day
• Portfolio update: Add 2 new case studies`,
  },

  // ── BOTH (link + note) ──
  {
    type: "both",
    id: 6,
    title: "Refactoring UI – Key Notes",
    url: "https://www.refactoringui.com",
    label: "Visit Site",
    body: `Key takeaways from Refactoring UI:
• Use HSL colors — easier to manipulate than hex
• Font size alone doesn't create hierarchy — use weight + color
• Don't use grey text on coloured backgrounds
• Spacing: start with too much, then reduce`,
  },
];

// ─────────────────────────────────────────────
//  MY FILES — files stored in /public/myfiles/
//  Add your PDF, DOCX, TXT filenames here
// ─────────────────────────────────────────────

export const myFiles = [
  {
    id: 1,
    name: "Resume_2026.pdf",
    label: "My Resume",
    description: "Latest resume — updated May 2026",
    type: "pdf",
  },
  {
    id: 2,
    name: "Cover_Letter_Template.docx",
    label: "Cover Letter Template",
    description: "Generic cover letter to customize per application",
    type: "docx",
  },
  {
    id: 3,
    name: "Portfolio_Notes.txt",
    label: "Portfolio Case Study Notes",
    description: "Raw notes for upcoming portfolio update",
    type: "txt",
  },
];
