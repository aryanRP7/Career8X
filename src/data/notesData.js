// ─────────────────────────────────────────────
//  NOTES DATA — 3 categories: UIUX, DSA, Coding
//  Each topic: { title, boxes: [{heading, content}], links[] }
//  Coding has sub: { id, label, topics[] }
// ─────────────────────────────────────────────

export const notesData = [
  // ═══════════════════════════════════════════════
  //  UI/UX — 30 topics
  // ═══════════════════════════════════════════════
  {
    id: "uiux",
    category: "UI/UX",
    icon: "🎨",
    topics: [
      {
        title: "Core Design Principles",
        boxes: [
          { heading: "Gestalt Principles", content: `• Proximity    → nearby items feel related\n• Similarity   → similar items feel grouped\n• Continuity   → eyes follow smooth paths\n• Closure      → brain completes incomplete shapes\n• Figure/Ground → foreground vs background separation` },
          { heading: "Visual Hierarchy", content: `• Size, weight, color, contrast, spacing = hierarchy tools\n• Most important element → largest / highest contrast\n• Z-pattern and F-pattern reading` },
          { heading: "Color Theory", content: `• 60-30-10 rule: dominant / secondary / accent\n• WCAG contrast: 4.5:1 normal · 3:1 large text · 7:1 AAA\n• Warm = energy/urgency · Cool = calm/trust\n• Color blindness: 8% males; never rely on color alone` },
          { heading: "Typography", content: `• Serif = trust, tradition · Sans-serif = modern, digital\n• Ideal line length: 50–75 characters\n• Line height: 1.4–1.6× font size\n• Limit typefaces to 2 per design; max 3 weights` },
          { heading: "Spacing", content: `• 8px grid — all spacing divisible by 8\n• White space = breathing room + perceived quality` },
        ],
        links: [
          { label: "Laws of UX", url: "https://lawsofux.com" },
          { label: "WCAG Contrast Checker", url: "https://webaim.org/resources/contrastchecker/" },
        ],
      },
      {
        title: "UX Research Methods",
        boxes: [
          { heading: "Qualitative Methods", content: `• User Interviews      → 1:1 conversations, open-ended questions\n• Contextual Inquiry   → observe users in their environment\n• Diary Studies        → users log experiences over time\n• Usability Testing    → watch users attempt real tasks\n• Card Sorting         → understand users' mental models\n• Tree Testing         → test navigation/IA without visual design` },
          { heading: "Quantitative Methods", content: `• Surveys              → large-scale data collection\n• A/B Testing          → compare two variants statistically\n• Heatmaps             → see where users click/scroll\n• Funnel Analysis      → identify drop-off points` },
          { heading: "When to Use What", content: `• Formative (early)    → interviews, card sort, contextual inquiry\n• Evaluative (testing) → usability test, A/B test\n• Generative           → co-design workshops` },
        ],
        links: [
          { label: "NN/g Research Methods", url: "https://www.nngroup.com/articles/which-ux-research-methods/" },
          { label: "Maze – Usability Testing", url: "https://maze.co" },
        ],
      },
      {
        title: "Design Thinking Process",
        boxes: [
          { heading: "5 Stages (Stanford d.school)", content: `1. EMPATHIZE  → understand user needs and pain points\n   Tools: interviews, observations, empathy maps\n2. DEFINE     → synthesize research into a problem statement\n   Tools: HMW statements, user personas, journey maps\n3. IDEATE     → generate many solutions without judgment\n   Tools: Crazy 8s, brain dumping, SCAMPER\n4. PROTOTYPE  → build a quick version to test ideas\n   Fidelity: paper → lo-fi → mid-fi → hi-fi\n5. TEST       → gather user feedback and iterate` },
          { heading: "Key Mindsets", content: `• Human-centered → design FOR users, not AT them\n• Bias toward action → make, don't just plan\n• Fail early, fail cheap → prototyping reduces risk\n• Radical collaboration → diverse perspectives = better solutions` },
        ],
        links: [
          { label: "Stanford d.school", url: "https://dschool.stanford.edu/resources" },
          { label: "IDEO Design Thinking", url: "https://designthinking.ideo.com" },
        ],
      },
      {
        title: "Information Architecture (IA)",
        boxes: [
          { heading: "IA Components", content: `• Organization systems  → how content is categorized\n• Labeling systems      → language/terminology used\n• Navigation systems    → how users move through content\n• Search systems        → how users find specific content` },
          { heading: "Organization Schemes", content: `• Alphabetical    → encyclopedias, dictionaries\n• Chronological   → news, blogs, timelines\n• Geographical    → maps, store finders\n• Task-based      → action-oriented apps\n• Audience-based  → sections per user type` },
          { heading: "Navigation Patterns", content: `• Global nav    → present on every page\n• Local nav     → section-specific sidebar/tabs\n• Contextual    → inline links to related content` },
          { heading: "Card Sort Types", content: `• Open sort   → users group and name categories\n• Closed sort → users sort into pre-defined categories` },
        ],
        links: [
          { label: "OptimalSort Tool", url: "https://www.optimalworkshop.com/optimalsort" },
        ],
      },
      {
        title: "Nielsen's 10 Usability Heuristics",
        boxes: [
          { heading: "Heuristics 1–5", content: `1. Visibility of system status\n   → Keep users informed with feedback (loading, saving...)\n2. Match between system and real world\n   → Use familiar language and metaphors\n3. User control and freedom\n   → Undo, redo, easy exit from any state\n4. Consistency and standards\n   → Same action = same result throughout\n5. Error prevention\n   → Design to prevent errors before they happen` },
          { heading: "Heuristics 6–10", content: `6. Recognition over recall\n   → Make objects, actions, options visible\n7. Flexibility and efficiency\n   → Accelerators for expert users (keyboard shortcuts)\n8. Aesthetic and minimalist design\n   → Every extra element competes with the important ones\n9. Help users recover from errors\n   → Plain language error messages, suggest fixes\n10. Help and documentation\n    → Easy to search, focused on user tasks` },
        ],
        links: [
          { label: "Nielsen Norman – 10 Heuristics", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
        ],
      },
      {
        title: "Figma Workflow & Shortcuts",
        boxes: [
          { heading: "Must-Know Shortcuts", content: `V → Move          R → Rectangle\nT → Text          F → Frame\nP → Pen           L → Line\nCtrl+G  → Group    Ctrl+Shift+G → Ungroup\nCtrl+D  → Duplicate   Alt+Drag → Duplicate\nCtrl+E  → Flatten     Ctrl+[/] → Send back/front` },
          { heading: "Auto Layout", content: `• Shift+A → add auto layout to selection\n• Horizontal / Vertical / Wrap modes\n• Makes components responsive automatically` },
          { heading: "Components", content: `• Master component → Alt+Ctrl+K\n• Variant properties → Status, Size, State\n• Boolean properties → show/hide layers\n• Naming: Button/Primary/Default (/ = hierarchy)` },
          { heading: "Developer Handoff", content: `• Inspect panel → shows CSS, measurements\n• Export → SVG for icons, PNG for rasters\n• Tokens → connect to style dictionary` },
        ],
        links: [
          { label: "Figma Shortcuts", url: "https://help.figma.com/hc/en-us/articles/360040328653" },
          { label: "Figma Learn", url: "https://help.figma.com/hc/en-us/categories/360002051613" },
        ],
      },
      {
        title: "Prototyping & Interaction Design",
        boxes: [
          { heading: "Fidelity Levels", content: `Paper (Lo-fi)   → Fastest. Test structure.\nWireframe       → Grayscale. Structure only.\nMid-fi          → Some visual hierarchy.\nHi-fi           → Pixel-perfect. Real colors/fonts.` },
          { heading: "Interaction Patterns", content: `• Progressive disclosure → reveal complexity as needed\n• Skeleton screens      → show layout before content loads\n• Micro-animations      → confirm action, guide attention\n• Optimistic UI         → show success before server responds\n• Toast notifications   → brief, non-blocking feedback` },
          { heading: "Figma Prototyping", content: `• Connect frames with arrows → defines flow\n• Trigger: On Click / Hover / Drag / After Delay\n• Animation: Instant / Dissolve / Smart Animate / Push\n• Smart Animate → works with matching layer names\n• Overflow: Horizontal / Vertical → scrolling` },
        ],
        links: [],
      },
      {
        title: "Accessibility (a11y)",
        boxes: [
          { heading: "WCAG Levels", content: `A   → minimum compliance\nAA  → standard for most products (aim here)\nAAA → highest, not always feasible` },
          { heading: "Key Rules", content: `• Color contrast: 4.5:1 for text, 3:1 for large text\n• All interactive elements keyboard-navigable\n• Images need alt text; decorative images alt=""\n• Focus indicators must be visible\n• Don't rely on color alone to convey information` },
          { heading: "ARIA Basics", content: `• role="button", role="navigation", role="dialog"\n• aria-label → labels elements without visible text\n• aria-hidden="true" → hides from screen readers\n• aria-live → announces dynamic content changes` },
          { heading: "Testing Tools", content: `• Axe browser extension\n• WAVE (Web Accessibility Evaluation Tool)\n• Lighthouse accessibility audit\n• Screen reader: NVDA (Windows) / VoiceOver (Mac)` },
        ],
        links: [
          { label: "WebAIM", url: "https://webaim.org" },
          { label: "axe DevTools", url: "https://www.deque.com/axe/" },
        ],
      },
      {
        title: "Color Theory & Palette Design",
        boxes: [
          { heading: "Color Models", content: `HSL → Hue, Saturation, Lightness (easiest to manipulate)\nRGB → Red, Green, Blue (screen display)\nHex → #RRGGBB (web shorthand)` },
          { heading: "Palette Types", content: `• Monochromatic → one hue, many lightness values\n• Analogous      → 3 adjacent colors on wheel\n• Complementary  → opposite colors, high contrast\n• Triadic        → 3 evenly spaced colors\n• Split-comp     → one + two adjacent to complement` },
          { heading: "Practical Rules", content: `• 60-30-10: dominant / secondary / accent\n• Darken by reducing lightness, not adding black\n• Tint = add white · Shade = add black · Tone = add grey\n• Test palette in greyscale to check hierarchy` },
        ],
        links: [
          { label: "Coolors Palette Generator", url: "https://coolors.co" },
          { label: "Adobe Color", url: "https://color.adobe.com" },
        ],
      },
      {
        title: "Typography in UI",
        boxes: [
          { heading: "Type Scale", content: `Use a modular scale: 12, 14, 16, 20, 24, 32, 48, 64px\n• Base: 16px (body)\n• Small: 12–14px (captions, labels)\n• Headings: 24–64px\n• Ratio: 1.25 (Major Third) or 1.333 (Perfect Fourth)` },
          { heading: "Font Pairing", content: `• Display + body = classic combination\n• Max 2 typefaces, max 3 weights\n• Contrast personality: geometric sans + humanist serif\n• Google Fonts: Inter, DM Sans, Syne, Playfair, Lora` },
          { heading: "Readability Rules", content: `• Line length: 50–75 characters per line\n• Line height: 1.4–1.6× font size for body text\n• Letter spacing: –0.01em for headings, +0.01em for caps\n• Avoid justified text on the web (uneven word spacing)` },
        ],
        links: [
          { label: "Typescale Tool", url: "https://typescale.com" },
          { label: "Google Fonts", url: "https://fonts.google.com" },
        ],
      },
      {
        title: "Responsive Design",
        boxes: [
          { heading: "Breakpoints", content: `Mobile:  < 640px\nTablet:  640px – 1024px\nDesktop: > 1024px\nLarge:   > 1280px\n\nMobile-first → design for smallest screen first, then add` },
          { heading: "Grid Systems", content: `• 4-column grid on mobile\n• 8-column grid on tablet\n• 12-column grid on desktop\n• Gutters: 16px mobile · 24px tablet · 32px desktop` },
          { heading: "Flexible Patterns", content: `• Stack → vertical on mobile, horizontal on desktop\n• Reveal/Hide → show more detail at wider screens\n• Reflow → grid reflows from multi-col to single col\n• Off-canvas → nav slides in on mobile` },
        ],
        links: [],
      },
      {
        title: "Design Systems",
        boxes: [
          { heading: "Core Layers", content: `Tokens     → colors, spacing, type, radius, shadow values\nAtoms      → buttons, inputs, icons, avatars\nMolecules  → form fields, card headers, nav items\nOrganisms  → cards, modals, sidebars, headers\nTemplates  → page layouts\nPages      → filled templates with real content` },
          { heading: "Token Types", content: `• Color tokens: --color-primary-500, --text-muted\n• Spacing tokens: --space-4 = 16px\n• Typography tokens: --font-body, --text-sm\n• Shadow tokens: --shadow-md` },
          { heading: "Maintenance", content: `• Single source of truth in Figma + code\n• Version every release (1.0, 1.1, 2.0)\n• Changelog for breaking changes\n• Usage guidelines per component` },
        ],
        links: [
          { label: "Design Systems Repo", url: "https://designsystemsrepo.com" },
          { label: "Storybook", url: "https://storybook.js.org" },
        ],
      },
      {
        title: "User Persona & Journey Mapping",
        boxes: [
          { heading: "Persona Components", content: `• Name + photo (makes them feel real)\n• Demographics: age, location, job, income\n• Goals and motivations\n• Pain points and frustrations\n• Tech savviness and tools used\n• Quote that captures their mindset` },
          { heading: "Journey Map Structure", content: `Stages → phases user goes through (Discover → Buy → Use)\nActions → what user does at each stage\nThoughts → what user thinks\nEmotions → feeling at each stage (emoji/curve)\nPain Points → where frustration peaks\nOpportunities → where design can improve` },
        ],
        links: [
          { label: "NN/g Journey Mapping", url: "https://www.nngroup.com/articles/customer-journey-mapping/" },
        ],
      },
      {
        title: "Usability Testing",
        boxes: [
          { heading: "Test Types", content: `Moderated    → facilitator guides user live\nUnmoderated  → user completes tasks alone, recorded\nRemote       → over video call / tool (Maze, Lookback)\nIn-person    → observe in same room\nHallway      → grab random people, quick 5-min test` },
          { heading: "5-User Rule", content: `Testing with 5 users catches ~85% of usability issues.\nAdding more users shows diminishing returns.\nBetter: run 5 users → fix → run 5 more.` },
          { heading: "Script Structure", content: `1. Introduction + consent\n2. Warm-up questions\n3. Task scenarios (realistic, not leading)\n4. Post-task rating (SEQ: 1–7)\n5. Debrief questions\n6. System Usability Scale (SUS)` },
        ],
        links: [
          { label: "Maze Unmoderated Testing", url: "https://maze.co" },
          { label: "SUS Calculator", url: "https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html" },
        ],
      },
      {
        title: "Mobile UX Patterns",
        boxes: [
          { heading: "Touch Targets", content: `• Minimum touch target: 44×44px (Apple) / 48×48dp (Google)\n• Spacing between targets: ≥ 8px\n• Primary actions within thumb zone (bottom of screen)\n• Avoid placing important actions at very top corners` },
          { heading: "Mobile Patterns", content: `• Bottom navigation → 3–5 top-level sections\n• Hamburger menu → secondary/overflow nav\n• FAB (Floating Action Button) → primary action\n• Pull-to-refresh → manual content update\n• Swipe actions → contextual row actions (delete, archive)` },
          { heading: "Gestures", content: `• Tap       → select / activate\n• Long press → contextual menu\n• Swipe     → navigate / dismiss\n• Pinch     → zoom\n• Double tap → zoom / like` },
        ],
        links: [
          { label: "Material Design", url: "https://m3.material.io" },
          { label: "Apple HIG", url: "https://developer.apple.com/design/human-interface-guidelines/" },
        ],
      },
      {
        title: "Micro-interactions & Animation",
        boxes: [
          { heading: "4 Parts of a Micro-interaction", content: `1. Trigger  → what starts it (user action or system event)\n2. Rules    → what happens\n3. Feedback → what the user sees/hears/feels\n4. Loops    → does it repeat or end?` },
          { heading: "Animation Principles (Disney)", content: `• Squash & stretch → conveys weight\n• Anticipation     → prepares user for action\n• Ease in/out      → natural movement, not linear\n• Follow-through   → elements overshoot then settle\n• Staging          → direct attention` },
          { heading: "Motion Values", content: `Duration:\n  xs: 100ms (instant feedback)\n  sm: 200ms (small transitions)\n  md: 300ms (modals, panels)\n  lg: 500ms (page transitions)\n\nEasing:\n  ease-out   → enters fast, slows to stop\n  ease-in    → starts slow, exits fast\n  ease-in-out → slow start and end (best for loops)` },
        ],
        links: [],
      },
      {
        title: "Dark Mode Design",
        boxes: [
          { heading: "Dark Mode Principles", content: `• Don't just invert — pure black (#000) causes eye strain\n• Use dark grey: #121212 (Material) or #0d0d0f\n• Elevation shows via lighter surface, not shadow\n• Reduce saturation of colors in dark mode\n• Text on dark: 87% (primary), 60% (secondary), 38% (disabled)` },
          { heading: "Common Mistakes", content: `• Using pure white text on pure black → harsh contrast\n• Same brand colors — many look wrong on dark backgrounds\n• Ignoring images — they may need dark-mode variants\n• Forgetting system UI elements (scrollbars, selects)` },
        ],
        links: [],
      },
      {
        title: "Wireframing Best Practices",
        boxes: [
          { heading: "Lo-fi Wireframe Rules", content: `• Use grey boxes for images (never real photos)\n• Lorem ipsum or squiggly lines for text\n• Box = container, X through box = image placeholder\n• No colors — only black, white, grey\n• Keep annotations outside the frame` },
          { heading: "Wireframe Hierarchy", content: `• Paper sketch → digital lo-fi → mid-fi → hi-fi\n• Lo-fi: layout and structure only\n• Mid-fi: content, spacing, real labels\n• Hi-fi: colors, typography, real images` },
          { heading: "What to Wireframe First", content: `1. Most critical user flow (e.g. onboarding, checkout)\n2. Most complex screens\n3. Screens with unclear data requirements\nDon't wireframe: splash screens, marketing pages (do those later)` },
        ],
        links: [],
      },
      {
        title: "Portfolio & Case Study Tips",
        boxes: [
          { heading: "Case Study Structure", content: `1. Overview + role\n2. Problem statement\n3. Research & insights\n4. Ideation + sketches\n5. Wireframes\n6. Hi-fi designs\n7. Prototype / testing\n8. Results & learnings` },
          { heading: "Portfolio DOs", content: `✓ Show your process, not just final UI\n✓ Include metrics / outcomes\n✓ 3–5 strong projects beats 10 weak ones\n✓ Keep it fast-loading (compress images)\n✓ Custom domain (yourname.com)` },
          { heading: "Portfolio DON'Ts", content: `✗ Don't show UI-only without context\n✗ Don't use default Behance/Dribbble layout\n✗ Don't claim solo work that was a team effort\n✗ Don't use tiny screenshots — use full-bleed visuals` },
        ],
        links: [
          { label: "UX Portfolio Examples – NN/g", url: "https://www.nngroup.com/articles/ux-portfolio/" },
        ],
      },
      {
        title: "Emotional Design",
        boxes: [
          { heading: "Don Norman's 3 Levels", content: `1. Visceral  → immediate reaction, aesthetics, "looks beautiful"\n2. Behavioral → pleasure of use, usability, efficiency\n3. Reflective → meaning, identity, "this brand gets me"` },
          { heading: "Techniques", content: `• Personality in copy (Slack, Mailchimp)\n• Delight moments: empty states, success animations\n• Error messages with empathy ("Oops, that's on us")\n• Progress indicators that celebrate completion\n• Surprise & delight: Easter eggs, confetti` },
        ],
        links: [],
      },
      {
        title: "Heuristic Evaluation",
        boxes: [
          { heading: "Process", content: `1. Gather 3–5 evaluators (not users)\n2. Each evaluates independently\n3. Each records violations with heuristic reference\n4. Combine findings\n5. Severity rating: 0 (not a problem) to 4 (usability catastrophe)` },
          { heading: "Severity Scale", content: `0 → Not a usability problem\n1 → Cosmetic only — fix if time\n2 → Minor — low priority fix\n3 → Major — important to fix\n4 → Catastrophic — must fix before launch` },
        ],
        links: [],
      },
      {
        title: "Competitive Analysis",
        boxes: [
          { heading: "Framework", content: `• Direct competitors → same product category\n• Indirect competitors → solve same problem differently\n• Best-in-class → excellent UX in any domain (benchmark)\n\nEvaluate: Onboarding · Nav · Key flows · Error states · Empty states · a11y` },
          { heading: "Template", content: `| Feature          | Your App | Comp A | Comp B |\n|------------------|----------|--------|--------|\n| Onboarding steps |    3     |   5    |   2    |\n| Mobile nav type  | Bottom   | Hamburger | Tab |\n| Search           |  Filter  |  Full  |  None  |` },
        ],
        links: [],
      },
      {
        title: "UX Writing & Microcopy",
        boxes: [
          { heading: "Principles", content: `• Clear → say exactly what it does\n• Concise → remove every unnecessary word\n• Useful → helps user decide or act\n• Human → friendly, not robotic\n• Consistent → same terms throughout` },
          { heading: "Button Labels", content: `✓ "Save changes" → specific action\n✓ "Delete account" → clear consequence\n✗ "OK" → vague, what does OK do?\n✗ "Submit" → generic, not action-oriented\n\nRule: Button label = what happens when clicked` },
          { heading: "Error Messages", content: `Bad:  "Error 404"\nGood: "We couldn't find that page — try searching instead"\n\nBad:  "Invalid input"\nGood: "Enter a valid email address (e.g. you@example.com)"` },
        ],
        links: [],
      },
      {
        title: "Design Handoff & Dev Collaboration",
        boxes: [
          { heading: "Handoff Checklist", content: `□ All components use shared styles/tokens\n□ Every state covered: default, hover, active, disabled, loading, error, empty\n□ Spacing annotated\n□ Assets exported at 1×, 2× (SVG for icons)\n□ Motion specs documented\n□ Edge cases & error states included` },
          { heading: "Communication Tips", content: `• Attend sprint planning — understand constraints early\n• Use Inspect panel, not screenshots\n• Leave implementation notes in Figma comments\n• Clarify intent: "This should feel snappy — under 200ms"\n• Be present during build phase for questions` },
        ],
        links: [],
      },
      {
        title: "Eye Tracking & F/Z Patterns",
        boxes: [
          { heading: "F-Pattern", content: `Users scan: 1 horizontal pass across top → shorter horizontal pass below → vertical scan down left side.\n\nBest for: long text pages, articles, lists\nImplication: Put key info at top and left` },
          { heading: "Z-Pattern", content: `Eyes move: top-left → top-right → diagonal to bottom-left → bottom-right\n\nBest for: sparse, visual pages (landing pages, ads)\nImplication: CTA goes bottom-right` },
          { heading: "Implications for Design", content: `• First word on each line is most important\n• Navigation always top or left\n• Put CTAs at end of natural eye path\n• Don't put key info in bottom-center` },
        ],
        links: [],
      },
      {
        title: "Cognitive Load in UX",
        boxes: [
          { heading: "Types of Cognitive Load", content: `Intrinsic    → complexity of the task itself\nExtraneous   → complexity added by poor design (reduce this!)\nGermane      → mental effort to form long-term memory (enable this)` },
          { heading: "Reducing Cognitive Load", content: `• Chunking → group related info (max 7±2 items per group)\n• Progressive disclosure → show details only when needed\n• Default values → reduce choices\n• Recognition over recall → show options, don't make users remember\n• Short instructions → max 5 words per instruction` },
        ],
        links: [],
      },
      {
        title: "Forms Best Practices",
        boxes: [
          { heading: "Layout", content: `• Single column > multi-column (less error-prone)\n• Labels above fields (not inside — disappear on focus)\n• Group related fields\n• Progress indicator for multi-step forms\n• Primary CTA at end, secondary action less prominent` },
          { heading: "Validation", content: `• Inline validation: validate on blur, not on keystroke\n• Show success state (green checkmark)\n• Error messages directly below field\n• Never clear the form on error\n• Preserve user input when showing errors` },
          { heading: "Reducing Friction", content: `• Fewer fields = higher completion rate\n• Auto-fill wherever possible\n• Optional fields marked (not required ones)\n• Input masks for phone, date, card numbers\n• Smart defaults (country from IP, auto-format)` },
        ],
        links: [],
      },
      {
        title: "Navigation Patterns",
        boxes: [
          { heading: "Primary Nav Types", content: `Top nav bar  → desktop, 5–8 items, shows everything\nSidebar      → complex apps, lots of sections (dashboards)\nBottom bar   → mobile, 3–5 items, always visible\nHamburger    → secondary/overflow only, hides nav\nMega menu    → e-commerce, content-heavy sites` },
          { heading: "Breadcrumbs", content: `• Show location hierarchy: Home > Category > Page\n• Use for sites 2+ levels deep\n• Don't use on mobile (space) — use back button instead\n• Current page at end, not a link` },
          { heading: "Tab Patterns", content: `• Max 5 tabs\n• Short, single-word labels\n• Active state clearly distinct\n• Don't use tabs for unrelated content sections\n• Scrollable tabs if 5+ needed on mobile` },
        ],
        links: [],
      },
      {
        title: "Design Review & Critique",
        boxes: [
          { heading: "Critique Structure (I Like / I Wish / What If)", content: `I like...  → specific positive observation\nI wish...  → specific concern or improvement\nWhat if... → exploratory suggestion\n\nKeeps critique constructive and idea-generating` },
          { heading: "Presenting Your Work", content: `1. Context: what problem, who's the user\n2. Constraints: time, tech, business\n3. Options considered (show 2–3 directions)\n4. Decision rationale\n5. Open questions / what you need feedback on\n\nNever: "I know it's not finished but..." (own your work)` },
        ],
        links: [],
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        boxes: [
          { heading: "Key Metrics", content: `CTR  → Click-through rate\nCVR  → Conversion rate\nBounce Rate → % who leave without action\nTime on Page → engagement signal\nHeatmaps → show what gets attention` },
          { heading: "UX Tactics for CRO", content: `• Social proof: testimonials, logos, star ratings\n• Scarcity: "Only 3 left", "Offer ends tonight"\n• Trust signals: SSL, return policy, guarantees\n• Clear CTA: one primary action per page\n• Reduce steps to conversion\n• Above-the-fold value proposition` },
        ],
        links: [],
      },
    ],
  },

  // ═══════════════════════════════════════════════
  //  DSA — 30 topics
  // ═══════════════════════════════════════════════
  {
    id: "dsa",
    category: "DSA",
    icon: "🧠",
    topics: [
      {
        title: "Big O Notation",
        boxes: [
          { heading: "Common Complexities (Best → Worst)", content: `O(1)        → Constant  — array access, hash lookup\nO(log n)    → Logarithmic — binary search\nO(n)        → Linear — single loop\nO(n log n)  → Linearithmic — merge sort, heap sort\nO(n²)       → Quadratic — nested loops\nO(2ⁿ)       → Exponential — recursive subsets\nO(n!)       → Factorial — permutations` },
          { heading: "Space vs Time", content: `Time complexity  → number of operations\nSpace complexity → extra memory used\n\nIn-place algorithm → O(1) extra space\nAuxiliary space   → temporary data structures used` },
        ],
        links: [
          { label: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com" },
        ],
      },
      {
        title: "Arrays",
        boxes: [
          { heading: "Operations & Complexity", content: `Access      → O(1)\nSearch      → O(n)\nInsertion at end   → O(1) amortized\nInsertion at index → O(n)\nDeletion           → O(n)` },
          { heading: "Common Techniques", content: `Two Pointers   → start+end move inward (reverse, two-sum)\nSliding Window → expand/shrink window of fixed/variable size\nPrefix Sum     → precompute cumulative sums for range queries\nKadane's Algo  → max subarray (track local_max, global_max)` },
          { heading: "Key Problems", content: `• Two Sum → hash map O(n)\n• Maximum Subarray → Kadane's\n• Container With Most Water → two pointers\n• Product of Array Except Self → prefix × suffix\n• Merge Intervals → sort + compare` },
        ],
        links: [],
      },
      {
        title: "Strings",
        boxes: [
          { heading: "Common Operations", content: `Length         → O(n) in Python, O(1) in C++\nSubstring      → O(k)\nConcatenation  → O(n) — avoid in loops; use join()\nReverse        → O(n)\nComparison     → O(min(a,b))` },
          { heading: "Techniques", content: `• Sliding window → longest substring without repeating chars\n• Two pointers → palindrome check, reverse words\n• Hash map → character frequency, anagram check\n• Z-algorithm / KMP → pattern matching in O(n)\n• Trie → prefix search` },
          { heading: "Key Problems", content: `• Valid Anagram → sort or frequency map\n• Longest Palindromic Substring → expand around center\n• Minimum Window Substring → sliding window + freq map\n• Group Anagrams → sorted string as key\n• Encode/Decode Strings → delimiter approach` },
        ],
        links: [],
      },
      {
        title: "Linked Lists",
        boxes: [
          { heading: "Types", content: `Singly Linked  → each node has next pointer\nDoubly Linked  → each node has prev + next\nCircular       → tail points back to head` },
          { heading: "Operations", content: `Prepend  → O(1)\nAppend   → O(1) if tail pointer, else O(n)\nDelete   → O(1) if node given, O(n) to search\nSearch   → O(n)` },
          { heading: "Techniques & Problems", content: `• Floyd's Cycle Detection → fast/slow pointer (detect cycle)\n• Reverse Linked List → iterative: prev, curr, next\n• Find Middle → fast moves 2, slow moves 1\n• Merge Two Sorted Lists → dummy head\n• LRU Cache → doubly linked list + hash map` },
        ],
        links: [],
      },
      {
        title: "Stacks & Queues",
        boxes: [
          { heading: "Stack (LIFO)", content: `Push  → O(1)\nPop   → O(1)\nPeek  → O(1)\n\nUse cases: undo/redo, balanced brackets, DFS, call stack\nImplement: list in Python, LinkedList in Java` },
          { heading: "Queue (FIFO)", content: `Enqueue → O(1)\nDequeue → O(1)\n\nUse cases: BFS, task scheduling, printer queue\nImplement: collections.deque in Python\nDeque → double-ended (push/pop both ends)` },
          { heading: "Monotonic Stack", content: `Elements kept in increasing or decreasing order.\n\nProblems:\n• Next Greater Element → O(n)\n• Largest Rectangle in Histogram\n• Daily Temperatures\n• Trapping Rain Water` },
        ],
        links: [],
      },
      {
        title: "Hash Maps & Sets",
        boxes: [
          { heading: "Complexity", content: `Insert  → O(1) average, O(n) worst\nDelete  → O(1) average\nLookup  → O(1) average\n\nCollision resolution: chaining vs open addressing` },
          { heading: "Common Use Cases", content: `• Frequency counting (character/word count)\n• Two Sum (complement lookup)\n• Caching / memoization\n• Grouping (group anagrams)\n• Duplicate detection` },
          { heading: "Key Problems", content: `• Two Sum → store complement in map\n• Valid Sudoku → 3 sets per row/col/box\n• Longest Consecutive Sequence → O(n) with set\n• Subarray Sum Equals K → prefix sum + map\n• Top K Frequent Elements → bucket sort or heap` },
        ],
        links: [],
      },
      {
        title: "Trees",
        boxes: [
          { heading: "Terminology", content: `Root     → top node (no parent)\nLeaf     → node with no children\nHeight   → longest path from node to leaf\nDepth    → distance from root to node\nDiameter → longest path between any two nodes` },
          { heading: "Tree Traversals", content: `Inorder   (L → Root → R) → BST gives sorted order\nPreorder  (Root → L → R) → copy a tree, serialization\nPostorder (L → R → Root) → delete a tree, eval expressions\nLevel Order (BFS)         → row by row, uses queue` },
          { heading: "Key Problems", content: `• Invert Binary Tree → swap left/right recursively\n• Max Depth → 1 + max(left, right)\n• Lowest Common Ancestor → check if node in subtree\n• Path Sum → DFS, subtract target\n• Serialize/Deserialize → preorder with null markers` },
        ],
        links: [],
      },
      {
        title: "Binary Search Tree (BST)",
        boxes: [
          { heading: "BST Property", content: `Left subtree values < node value\nRight subtree values > node value\n\nSearch, Insert, Delete → O(log n) average, O(n) worst (skewed)` },
          { heading: "BST Operations", content: `Search → compare, go left or right\nInsert → recurse to correct position\nDelete:\n  → Leaf: remove directly\n  → One child: replace with child\n  → Two children: replace with in-order successor` },
          { heading: "Validation", content: `Validate BST: pass min/max bounds down recursion\n  isValid(node, min=-∞, max=+∞):\n    return min < node.val < max\n      and isValid(left, min, node.val)\n      and isValid(right, node.val, max)` },
        ],
        links: [],
      },
      {
        title: "Heaps & Priority Queues",
        boxes: [
          { heading: "Heap Properties", content: `Min-Heap: parent ≤ children (root = minimum)\nMax-Heap: parent ≥ children (root = maximum)\n\nPush → O(log n)\nPop  → O(log n)\nPeek → O(1)\nHeapify → O(n)` },
          { heading: "Use Cases", content: `• K Largest / Smallest elements\n• Merge K Sorted Lists\n• Top K Frequent Elements\n• Median of Data Stream (two heaps)\n• Dijkstra's algorithm` },
          { heading: "Python heapq", content: `import heapq\nh = []\nheapq.heappush(h, val)\nheapq.heappop(h)\nheapq.heapify(list)  # O(n)\n# Max-heap: push -val, pop negated result\nheapq.nlargest(k, list)  # O(n log k)` },
        ],
        links: [],
      },
      {
        title: "Graphs",
        boxes: [
          { heading: "Representations", content: `Adjacency List  → {node: [neighbors]} — sparse graphs O(V+E)\nAdjacency Matrix → grid[i][j] = weight — dense, O(V²) space\nEdge List       → [(u, v, w)] — simple storage` },
          { heading: "BFS vs DFS", content: `BFS (Queue):\n  → Shortest path (unweighted)\n  → Level-by-level exploration\n  → Mark visited BEFORE enqueuing\n\nDFS (Stack/Recursion):\n  → Connected components\n  → Cycle detection\n  → Topological sort` },
          { heading: "Key Problems", content: `• Number of Islands → DFS/BFS flood fill\n• Clone Graph → BFS + hash map\n• Course Schedule → cycle detection (topological sort)\n• Rotting Oranges → multi-source BFS\n• Pacific Atlantic Water Flow → reverse BFS from both oceans` },
        ],
        links: [],
      },
      {
        title: "BFS & DFS Patterns",
        boxes: [
          { heading: "BFS Template", content: `from collections import deque\ndef bfs(start):\n    q = deque([start])\n    visited = {start}\n    while q:\n        node = q.popleft()\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                q.append(neighbor)` },
          { heading: "DFS Template (Iterative)", content: `def dfs(start):\n    stack = [start]\n    visited = {start}\n    while stack:\n        node = stack.pop()\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                stack.append(neighbor)` },
          { heading: "Grid BFS/DFS", content: `DIRECTIONS = [(0,1),(0,-1),(1,0),(-1,0)]\n# Before visiting: check bounds + visited\ndef valid(r, c, rows, cols, visited, grid):\n    return 0<=r<rows and 0<=c<cols and (r,c) not in visited and grid[r][c] != '0'` },
        ],
        links: [],
      },
      {
        title: "Dynamic Programming (DP)",
        boxes: [
          { heading: "When to Use DP", content: `✓ Problem has optimal substructure\n✓ Overlapping subproblems\n✓ Asked for min/max/count/exists\n\nAsk: "Can I break this into smaller same-shape problems?"` },
          { heading: "Approaches", content: `Top-Down (Memoization):\n  Recursive + cache results\n  from functools import lru_cache\n\nBottom-Up (Tabulation):\n  Fill table from base case up\n  Usually more space-efficient` },
          { heading: "Key DP Patterns", content: `1D DP:\n  Fibonacci, House Robber, Climbing Stairs, Coin Change\n\n2D DP:\n  Longest Common Subsequence, Edit Distance,\n  Unique Paths, Knapsack\n\nInterval DP:\n  Burst Balloons, Matrix Chain Multiplication` },
        ],
        links: [],
      },
      {
        title: "Recursion & Backtracking",
        boxes: [
          { heading: "Recursion Anatomy", content: `1. Base case → stops recursion\n2. Recursive case → calls itself with smaller input\n3. Trust the recursion → assume recursive call works\n\nCommon mistake: forgetting base case → stack overflow` },
          { heading: "Backtracking Template", content: `def backtrack(state, choices):\n    if is_goal(state):\n        result.append(state[:])\n        return\n    for choice in choices:\n        if is_valid(choice):\n            make_choice(state, choice)  # add\n            backtrack(state, choices)\n            undo_choice(state, choice)  # remove (BACKTRACK)` },
          { heading: "Key Problems", content: `• Subsets / Permutations / Combinations\n• N-Queens\n• Sudoku Solver\n• Word Search\n• Letter Combinations of Phone Number` },
        ],
        links: [],
      },
      {
        title: "Sorting Algorithms",
        boxes: [
          { heading: "Comparison-Based Sorts", content: `Bubble Sort   → O(n²) avg, O(n) best (already sorted)\nSelection Sort → O(n²) always\nInsertion Sort → O(n²) avg, O(n) best — good for small n\nMerge Sort    → O(n log n) always, O(n) space — stable\nQuick Sort    → O(n log n) avg, O(n²) worst, O(log n) space\nHeap Sort     → O(n log n) always, O(1) space` },
          { heading: "Non-Comparison Sorts", content: `Counting Sort → O(n+k), stable — for small integer range\nRadix Sort    → O(nk), stable  — for fixed-length integers\nBucket Sort   → O(n) avg — for uniform distribution` },
          { heading: "Which to Use?", content: `Interview default → Merge Sort (stable, predictable)\nIn-place needed   → Quick Sort or Heap Sort\nNearly sorted     → Insertion Sort\nBuilt-in          → Python: Timsort (merge + insertion)` },
        ],
        links: [],
      },
      {
        title: "Binary Search",
        boxes: [
          { heading: "Template", content: `def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = lo + (hi - lo) // 2  # avoids overflow\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1` },
          { heading: "Variants", content: `Find leftmost occurrence:  hi = mid - 1 when found\nFind rightmost occurrence: lo = mid + 1 when found\nSearch rotated array:      find pivot, search appropriate half\nSearch in answer space:    binary search on the answer value` },
          { heading: "Key Problems", content: `• Search in Rotated Sorted Array\n• Find Minimum in Rotated Array\n• Koko Eating Bananas (answer space BS)\n• Median of Two Sorted Arrays → O(log(min(m,n)))\n• Find Peak Element` },
        ],
        links: [],
      },
      {
        title: "Sliding Window",
        boxes: [
          { heading: "Fixed Window", content: `Use when window size k is constant:\n\nfor i in range(k):\n    window_sum += arr[i]\nmax_sum = window_sum\nfor i in range(k, len(arr)):\n    window_sum += arr[i] - arr[i-k]\n    max_sum = max(max_sum, window_sum)` },
          { heading: "Variable Window", content: `Use when window expands/shrinks by condition:\n\nleft = 0\nfor right in range(len(s)):\n    # expand window (add s[right])\n    while not valid(window):\n        # shrink window (remove s[left])\n        left += 1\n    # update answer` },
          { heading: "Key Problems", content: `• Longest Substring Without Repeating Chars\n• Minimum Window Substring\n• Permutation in String\n• Fruits Into Baskets\n• Longest Subarray with Sum ≤ K` },
        ],
        links: [],
      },
      {
        title: "Two Pointers",
        boxes: [
          { heading: "Opposite Ends Pattern", content: `left, right = 0, len(arr) - 1\nwhile left < right:\n    if condition:\n        left += 1\n    else:\n        right -= 1\n\nUse for: sorted arrays, palindromes, target sum` },
          { heading: "Same Direction Pattern", content: `slow = 0\nfor fast in range(len(arr)):\n    if condition:\n        arr[slow] = arr[fast]\n        slow += 1\n\nUse for: remove duplicates, move zeros, partition` },
          { heading: "Key Problems", content: `• Two Sum II (sorted array)\n• Container With Most Water\n• 3Sum → sort + two pointers\n• Remove Duplicates from Sorted Array\n• Trapping Rain Water → precompute max left/right` },
        ],
        links: [],
      },
      {
        title: "Tries (Prefix Trees)",
        boxes: [
          { heading: "Structure", content: `class TrieNode:\n    def __init__(self):\n        self.children = {}  # char → TrieNode\n        self.is_end = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()` },
          { heading: "Operations", content: `Insert → O(L) where L = word length\nSearch → O(L)\nStartsWith → O(L)\n\nAll traverse character by character from root` },
          { heading: "Use Cases", content: `• Autocomplete / prefix search\n• Spell checking\n• IP routing tables\n• Word Search II (trie + DFS on board)` },
        ],
        links: [],
      },
      {
        title: "Greedy Algorithms",
        boxes: [
          { heading: "When Greedy Works", content: `• Greedy choice property: local optimum → global optimum\n• Optimal substructure\n\nProve it works → exchange argument (assume optimal differs, show contradiction)\nGreedy often: scheduling, interval problems, coin change (some)` },
          { heading: "Classic Problems", content: `• Activity Selection / Non-overlapping Intervals → sort by end\n• Jump Game → track max reachable index\n• Gas Station → pick start where total gas ≥ 0\n• Partition Labels → track last occurrence\n• Task Scheduler → count frequency` },
        ],
        links: [],
      },
      {
        title: "Union-Find (Disjoint Set Union)",
        boxes: [
          { heading: "Implementation", content: `parent = list(range(n))\nrank   = [0] * n\n\ndef find(x):\n    if parent[x] != x:\n        parent[x] = find(parent[x])  # path compression\n    return parent[x]\n\ndef union(x, y):\n    px, py = find(x), find(y)\n    if rank[px] < rank[py]: px, py = py, px\n    parent[py] = px\n    if rank[px] == rank[py]: rank[px] += 1` },
          { heading: "Use Cases", content: `• Number of Connected Components\n• Redundant Connection (detect cycle)\n• Accounts Merge\n• Number of Islands (alternative to BFS)\n• Kruskal's MST algorithm` },
        ],
        links: [],
      },
      {
        title: "Shortest Path Algorithms",
        boxes: [
          { heading: "Dijkstra's Algorithm", content: `Single-source, non-negative weights → O((V+E) log V)\n\n1. Priority queue: (distance, node)\n2. Process closest unvisited node\n3. Relax all edges from it\n4. Skip if already visited with shorter path` },
          { heading: "Bellman-Ford", content: `Single-source, handles negative weights → O(VE)\nDetects negative cycles.\n\nRelax all edges V-1 times.\nIf still relaxable on Vth pass → negative cycle.` },
          { heading: "Floyd-Warshall", content: `All-pairs shortest path → O(V³), O(V²) space\n\nfor k in range(V):\n  for i in range(V):\n    for j in range(V):\n      dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])` },
        ],
        links: [],
      },
      {
        title: "Topological Sort",
        boxes: [
          { heading: "When to Use", content: `Ordering nodes in a DAG (Directed Acyclic Graph)\n• Course schedule (prerequisites)\n• Build system dependencies\n• Compilation order` },
          { heading: "Kahn's Algorithm (BFS)", content: `1. Compute in-degree for all nodes\n2. Enqueue all nodes with in-degree 0\n3. Process queue: add to result, decrease neighbor in-degree\n4. If neighbor in-degree → 0, enqueue it\n5. If result length ≠ V → cycle exists` },
          { heading: "DFS-Based", content: `1. DFS from each unvisited node\n2. After fully exploring a node → push to stack\n3. Stack in reverse = topological order\n\nDetect cycle: track nodes in current DFS path (grey nodes)` },
        ],
        links: [],
      },
      {
        title: "Bit Manipulation",
        boxes: [
          { heading: "Operations", content: `AND  → a & b   (both bits 1)\nOR   → a | b   (either bit 1)\nXOR  → a ^ b   (bits differ)\nNOT  → ~a      (flip bits)\nLeft shift  → a << k  (× 2^k)\nRight shift → a >> k  (÷ 2^k)` },
          { heading: "Common Tricks", content: `x & (x-1)     → clear lowest set bit (count bits: Brian Kernighan)\nx & (-x)       → isolate lowest set bit\nx ^ x = 0      → XOR cancels itself (find single number)\nx ^ 0 = x\nx >> 1 = x // 2\nx & 1          → check if odd\nx | (1<<k)     → set kth bit\nx & ~(1<<k)    → clear kth bit` },
          { heading: "Key Problems", content: `• Single Number → XOR all elements\n• Number of 1 Bits → Brian Kernighan / bin(n).count('1')\n• Counting Bits → dp[i] = dp[i>>1] + (i&1)\n• Missing Number → XOR 0..n with array\n• Reverse Bits` },
        ],
        links: [],
      },
      {
        title: "Interval Problems",
        boxes: [
          { heading: "Common Pattern", content: `1. Sort by start time\n2. Compare current.start with prev.end\n3. If overlap: merge (max end) or count\n\nOverlap condition: a.start <= b.end (after sorting)` },
          { heading: "Key Problems", content: `• Merge Intervals → sort + compare\n• Insert Interval → find position, merge\n• Non-Overlapping Intervals → sort by end, greedy\n• Meeting Rooms → sort, check consecutive\n• Meeting Rooms II → min-heap to track end times` },
        ],
        links: [],
      },
      {
        title: "Matrix Problems",
        boxes: [
          { heading: "Common Traversal", content: `DIRS = [(0,1),(0,-1),(1,0),(-1,0)]\ndef in_bounds(r, c, rows, cols):\n    return 0 <= r < rows and 0 <= c < cols\n\n# BFS/DFS on grid — same as graph but with 2D coords` },
          { heading: "Key Techniques", content: `• DFS flood fill → count islands, color fill\n• Multi-source BFS → rotting oranges, 01 matrix\n• Diagonal traversal → (r+c) is constant per diagonal\n• Spiral order → track 4 boundaries, shrink inward\n• Rotate 90° → transpose then reverse rows` },
          { heading: "Key Problems", content: `• Number of Islands → DFS/BFS\n• 01 Matrix → multi-source BFS from all 0s\n• Search a 2D Matrix → binary search\n• Set Matrix Zeroes → mark rows/cols\n• Game of Life → copy or encode in-place` },
        ],
        links: [],
      },
      {
        title: "Divide & Conquer",
        boxes: [
          { heading: "Pattern", content: `def solve(problem):\n    if base_case(problem):\n        return base_solution\n    left, right = split(problem)\n    left_sol  = solve(left)\n    right_sol = solve(right)\n    return combine(left_sol, right_sol)` },
          { heading: "Key Algorithms", content: `Merge Sort       → split, sort halves, merge\nQuick Sort       → partition around pivot\nBinary Search    → eliminate half each step\nFast Power       → x^n = x^(n/2) * x^(n/2)\nStroessen's Matrix Multiplication` },
          { heading: "Master Theorem", content: `T(n) = aT(n/b) + f(n)\n\nf(n) = O(n^c):\n  c < log_b(a) → T(n) = O(n^log_b(a))\n  c = log_b(a) → T(n) = O(n^c log n)\n  c > log_b(a) → T(n) = O(f(n))` },
        ],
        links: [],
      },
      {
        title: "Common DP Patterns",
        boxes: [
          { heading: "Linear DP", content: `Fibonacci:     dp[i] = dp[i-1] + dp[i-2]\nClimbing Stairs: same as Fibonacci\nHouse Robber:  dp[i] = max(dp[i-1], dp[i-2] + nums[i])\nCoin Change:   dp[amt] = min(dp[amt-c]+1 for c in coins)` },
          { heading: "2D DP", content: `Unique Paths:  dp[r][c] = dp[r-1][c] + dp[r][c-1]\nEdit Distance: dp[i][j] = min(replace, insert, delete)\nLCS:           dp[i][j] = dp[i-1][j-1]+1 if match, else max(left, up)\n0/1 Knapsack:  dp[i][w] = max(skip, take if w >= weight[i])` },
          { heading: "String DP", content: `Palindromic Substrings:     expand around center, or dp[i][j]\nLongest Palindromic Substr: dp[i][j] = dp[i+1][j-1] if s[i]==s[j]\nRegex Matching:             2D DP with * handling` },
        ],
        links: [],
      },
      {
        title: "Math & Number Theory",
        boxes: [
          { heading: "Primes", content: `Sieve of Eratosthenes → find all primes ≤ n in O(n log log n)\n\nprimes = [True] * (n+1)\nfor i in range(2, int(n**0.5)+1):\n    if primes[i]:\n        for j in range(i*i, n+1, i):\n            primes[j] = False` },
          { heading: "GCD & LCM", content: `GCD (Euclidean): gcd(a,b) = gcd(b, a%b), gcd(a,0) = a\nLCM: lcm(a,b) = a*b // gcd(a,b)\n\nPython: from math import gcd, lcm` },
          { heading: "Useful Facts", content: `• Sum 1..n = n(n+1)/2\n• Sum of squares = n(n+1)(2n+1)/6\n• x is perfect square: int(x**0.5)**2 == x\n• Fast power: O(log n)\n• Modular inverse: pow(a, m-2, m) if m is prime (Fermat)` },
        ],
        links: [],
      },
      {
        title: "Interview Strategy",
        boxes: [
          { heading: "UMPIRE Method", content: `U → Understand the problem, clarify edge cases\nM → Match to known pattern\nP → Plan your approach (talk through)\nI → Implement\nR → Review (trace with example)\nE → Evaluate complexity` },
          { heading: "Before Coding", content: `• Ask about input constraints (size, type, edge cases)\n• Confirm expected output format\n• Discuss brute force first\n• Propose optimal approach before coding\n• Think aloud — interviewers want your process` },
          { heading: "After Coding", content: `• Trace through your example manually\n• Check edge cases: empty input, single element, all same\n• State time and space complexity\n• Offer to optimize if time allows` },
        ],
        links: [
          { label: "LeetCode Patterns", url: "https://leetcode.com/explore/" },
          { label: "NeetCode 150", url: "https://neetcode.io/practice" },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════
  //  CODING — subsections for each language
  // ═══════════════════════════════════════════════
  {
    id: "coding",
    category: "Coding",
    icon: "💻",
    subs: [
      // ────────── C ──────────
      {
        id: "c",
        label: "C",
        topics: [
          { title: "Basics & Syntax", boxes: [
            { heading: "Hello World & Compilation", content: `#include <stdio.h>\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}\n\nCompile: gcc -o output file.c\nRun:     ./output` },
            { heading: "Data Types", content: `char    → 1 byte  (-128 to 127)\nint     → 4 bytes (-2^31 to 2^31-1)\nlong    → 8 bytes\nfloat   → 4 bytes (~7 decimal digits)\ndouble  → 8 bytes (~15 decimal digits)\nsize_t  → unsigned, result of sizeof` },
            { heading: "Format Specifiers", content: `%d / %i → int\n%ld     → long\n%f      → float\n%lf     → double\n%c      → char\n%s      → string\n%p      → pointer address\n%u      → unsigned int\n%x      → hexadecimal` },
          ], links: [] },
          { title: "Pointers", boxes: [
            { heading: "Pointer Basics", content: `int x = 10;\nint *ptr = &x;      // ptr holds address of x\nprintf("%d", *ptr); // dereference: print 10\n*ptr = 20;          // change x through pointer\n\nNULL pointer: int *p = NULL; (always initialize)` },
            { heading: "Pointer Arithmetic", content: `int arr[] = {1,2,3,4};\nint *p = arr;       // points to arr[0]\np++;                // now points to arr[1]\n*(p+2);             // arr[3]\n\narr[i] == *(arr + i) == *(p + i)` },
            { heading: "Common Mistakes", content: `• Dangling pointer → pointing to freed memory\n• Wild pointer → uninitialized pointer\n• Memory leak → malloc without free\n• Buffer overflow → writing past array bounds\n• Double free → freeing same memory twice` },
          ], links: [] },
          { title: "Memory Management", boxes: [
            { heading: "Dynamic Allocation", content: `#include <stdlib.h>\n\n// Allocate\nint *arr = malloc(n * sizeof(int));   // uninit\nint *arr = calloc(n, sizeof(int));    // zero-init\narr = realloc(arr, new_size);         // resize\n\n// Free\nfree(arr);\narr = NULL;  // prevent dangling` },
            { heading: "Stack vs Heap", content: `Stack  → local vars, auto-freed, fast, limited (~1–8MB)\nHeap   → malloc/calloc, manual free, unlimited but slower\n\nRule: if data needs to outlive function → heap` },
          ], links: [] },
          { title: "Structs & Unions", boxes: [
            { heading: "Struct", content: `typedef struct {\n    char name[50];\n    int age;\n    float gpa;\n} Student;\n\nStudent s;\nstrcpy(s.name, "Alice");\ns.age = 20;\ns.gpa = 3.8;\n\n// Pointer to struct\nStudent *sp = &s;\nsp->age = 21;  // arrow operator` },
            { heading: "Union", content: `union Data {\n    int i;\n    float f;\n    char c;\n};\n// All members share same memory\n// Size = size of largest member` },
          ], links: [] },
          { title: "File I/O", boxes: [
            { heading: "Reading & Writing Files", content: `FILE *fp = fopen("file.txt", "r");  // "r", "w", "a"\nif (!fp) { perror("Error"); return 1; }\n\nchar buf[256];\nfgets(buf, sizeof(buf), fp);  // read line\nfprintf(fp, "Hello %d\\n", 42);  // write\n\nfclose(fp);` },
          ], links: [] },
          { title: "Arrays & Strings in C", boxes: [
            { heading: "Arrays", content: `int arr[5] = {1,2,3,4,5};\nint size = sizeof(arr)/sizeof(arr[0]);  // 5\n\n// 2D array\nint mat[3][4];\nmat[row][col];` },
            { heading: "String Functions (string.h)", content: `strlen(s)           → length (not counting \\0)\nstrcpy(dst, src)    → copy (unsafe; use strncpy)\nstrcat(dst, src)    → concatenate\nstrcmp(a, b)        → 0 if equal, <0, >0\nstrchr(s, ch)       → first occurrence of ch\nstrstr(hay, needle) → first occurrence of substring` },
          ], links: [] },
        ],
      },
      // ────────── C++ ──────────
      {
        id: "cpp",
        label: "C++",
        topics: [
          { title: "C++ Basics", boxes: [
            { heading: "Hello World & I/O", content: `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!" << endl;\n    int x; cin >> x;\n    return 0;\n}` },
            { heading: "References vs Pointers", content: `int x = 10;\nint &ref = x;    // reference: alias for x, can't be null\nref = 20;        // changes x\n\nint *ptr = &x;   // pointer: can be reassigned, can be null\n*ptr = 30;       // changes x via dereference` },
          ], links: [] },
          { title: "STL Containers", boxes: [
            { heading: "vector", content: `#include <vector>\nvector<int> v = {1,2,3};\nv.push_back(4);      // O(1) amortized\nv.pop_back();        // O(1)\nv.size(); v.empty();\nv[i]; v.front(); v.back();` },
            { heading: "map / unordered_map", content: `#include <map>\nmap<string,int> m;           // sorted, O(log n)\nunordered_map<string,int> um; // O(1) avg\num["key"] = val;\nif (um.count("key")) ...     // check existence\nfor (auto &[k,v] : um) ...   // iterate` },
            { heading: "set / priority_queue", content: `set<int> s;     // sorted unique, O(log n)\ns.insert(x); s.erase(x); s.count(x);\n\npriority_queue<int> maxH;       // max-heap\npriority_queue<int,vector<int>,greater<int>> minH; // min-heap\nmaxH.push(x); maxH.pop(); maxH.top();` },
          ], links: [] },
          { title: "OOP in C++", boxes: [
            { heading: "Classes", content: `class Animal {\nprivate:\n    string name;\npublic:\n    Animal(string n) : name(n) {}  // constructor init list\n    string getName() { return name; }\n    virtual void speak() = 0;      // pure virtual\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(string n) : Animal(n) {}\n    void speak() override { cout << "Woof!"; }\n};` },
            { heading: "Rule of Three/Five", content: `If you define any of:\n  destructor, copy constructor, copy assignment\nYou probably need all three.\n\nRule of Five (C++11):\n  + move constructor\n  + move assignment operator` },
          ], links: [] },
          { title: "Modern C++ (C++11/14/17)", boxes: [
            { heading: "Auto, Range-for, Lambdas", content: `auto x = 42;           // type deduction\nauto& ref = container; // reference deduction\n\nfor (auto& item : vec) { ... }  // range-for\n\nauto add = [](int a, int b) { return a+b; }; // lambda\nsort(v.begin(), v.end(), [](int a, int b) { return a>b; });` },
            { heading: "Smart Pointers", content: `#include <memory>\nshared_ptr<int> sp = make_shared<int>(42); // ref-counted\nunique_ptr<int> up = make_unique<int>(42); // single owner\nweak_ptr<int> wp = sp;  // non-owning observer\n\n// No manual delete needed → RAII` },
          ], links: [] },
          { title: "Algorithms & Iterators", boxes: [
            { heading: "STL Algorithms", content: `#include <algorithm>\nsort(v.begin(), v.end());           // O(n log n)\nreverse(v.begin(), v.end());        // O(n)\nbinary_search(v.begin(),v.end(),x); // O(log n)\nfind(v.begin(),v.end(),x);          // O(n)\ncount(v.begin(),v.end(),x);\nmax_element(v.begin(),v.end());\naccumulate(v.begin(),v.end(),0);    // sum` },
          ], links: [] },
          { title: "Templates", boxes: [
            { heading: "Function & Class Templates", content: `// Function template\ntemplate<typename T>\nT maxVal(T a, T b) { return a > b ? a : b; }\n\n// Class template\ntemplate<typename T>\nclass Stack {\n    vector<T> data;\npublic:\n    void push(T v) { data.push_back(v); }\n    T pop()  { T v=data.back(); data.pop_back(); return v; }\n};` },
          ], links: [] },
        ],
      },
      // ────────── Python ──────────
      {
        id: "python",
        label: "Python",
        topics: [
          { title: "Python Essentials", boxes: [
            { heading: "Data Types & Variables", content: `x = 42          # int\ny = 3.14        # float\ns = "hello"     # str (immutable)\nb = True        # bool\nn = None        # NoneType\n\n# Type check\ntype(x) == int\nisinstance(x, int)` },
            { heading: "String Methods", content: `s.upper() / s.lower()\ns.strip() / s.lstrip() / s.rstrip()\ns.split(sep)           # ["a","b"]\n",".join(["a","b"])   # "a,b"\ns.replace(old, new)\ns.startswith(p) / s.endswith(p)\ns.find(sub)            # -1 if not found\nf"Hello {name}"        # f-string` },
          ], links: [] },
          { title: "Lists, Tuples, Dicts, Sets", boxes: [
            { heading: "List Operations", content: `lst = [1,2,3]\nlst.append(x)     # O(1)\nlst.insert(i, x)  # O(n)\nlst.pop()         # O(1) — last\nlst.pop(i)        # O(n)\nlst.remove(x)     # first occurrence O(n)\nlen(lst); lst.reverse(); lst.sort()\n\n# Comprehension\n[x**2 for x in range(10) if x % 2 == 0]` },
            { heading: "Dict Operations", content: `d = {"a": 1, "b": 2}\nd["key"] = val\nd.get("key", default)\nd.keys(); d.values(); d.items()\ndel d["key"]\n"key" in d          # O(1)\n\n# Comprehension\n{k: v for k,v in lst}\nfrom collections import defaultdict, Counter` },
          ], links: [] },
          { title: "Functions & Scope", boxes: [
            { heading: "Functions", content: `def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\n# *args = tuple of positional args\n# **kwargs = dict of keyword args\ndef func(*args, **kwargs):\n    for a in args: ...\n    for k,v in kwargs.items(): ...` },
            { heading: "Lambda & Map/Filter", content: `double = lambda x: x * 2\nlist(map(lambda x: x**2, [1,2,3]))\nlist(filter(lambda x: x>2, [1,2,3]))\n# Prefer comprehensions over map/filter in Python` },
          ], links: [] },
          { title: "OOP in Python", boxes: [
            { heading: "Classes", content: `class Animal:\n    def __init__(self, name):\n        self.name = name  # instance attribute\n    \n    def speak(self):\n        raise NotImplementedError\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"` },
            { heading: "Dunder Methods", content: `__init__     → constructor\n__str__      → str(obj), print\n__repr__     → repr(obj), debugging\n__len__      → len(obj)\n__eq__       → == operator\n__lt__       → < operator (enables sorting)\n__getitem__  → obj[key]` },
          ], links: [] },
          { title: "Useful Libraries", boxes: [
            { heading: "collections", content: `from collections import Counter, defaultdict, deque, OrderedDict\n\nCounter("aabbc")       # {'a':2,'b':2,'c':1}\ndefaultdict(list)      # auto-creates list on missing key\ndeque — O(1) both ends\nnamedtuple('Point', ['x','y'])` },
            { heading: "itertools", content: `from itertools import combinations, permutations, product\ncombinations([1,2,3], 2)   # (1,2),(1,3),(2,3)\npermutations([1,2,3])      # all orderings\nproduct([1,2],[3,4])       # Cartesian product\nchain(list1, list2)        # concat iterables lazily` },
          ], links: [
            { label: "Python Docs", url: "https://docs.python.org/3/" },
          ] },
          { title: "Error Handling & Context Managers", boxes: [
            { heading: "Try/Except", content: `try:\n    result = 10 / 0\nexcept ZeroDivisionError as e:\n    print(f"Error: {e}")\nexcept (TypeError, ValueError):\n    ...\nelse:\n    print("No error")    # runs if no exception\nfinally:\n    print("Always runs") # cleanup` },
            { heading: "Context Managers", content: `with open("file.txt") as f:\n    content = f.read()\n# file auto-closed after block\n\n# Custom context manager\nfrom contextlib import contextmanager\n@contextmanager\ndef managed():\n    print("enter")\n    yield\n    print("exit")` },
          ], links: [] },
        ],
      },
      // ────────── JavaScript ──────────
      {
        id: "js",
        label: "JavaScript",
        topics: [
          { title: "JS Fundamentals", boxes: [
            { heading: "Variables & Types", content: `let   x = 10;       // block-scoped, reassignable\nconst y = 20;       // block-scoped, immutable binding\nvar   z = 30;       // function-scoped (avoid)\n\n// Types: string, number, bigint, boolean, undefined, null, symbol, object\ntypeof null === "object"  // JS quirk\ntypeof undefined === "undefined"` },
            { heading: "Truthy / Falsy", content: `Falsy: false, 0, "", null, undefined, NaN\nTruthy: everything else (including "0", [], {})\n\n// Nullish coalescing\nconst val = x ?? "default"; // only null/undefined triggers\n// Optional chaining\nconst name = user?.profile?.name;` },
          ], links: [] },
          { title: "Functions & Closures", boxes: [
            { heading: "Function Types", content: `// Declaration (hoisted)\nfunction add(a, b) { return a + b; }\n\n// Expression\nconst mul = function(a, b) { return a * b; };\n\n// Arrow\nconst sub = (a, b) => a - b;\nconst sq  = n => n * n; // single param, no parens needed` },
            { heading: "Closures", content: `function counter() {\n    let count = 0;\n    return () => ++count; // inner func captures count\n}\nconst c = counter();\nc(); // 1\nc(); // 2\n// count is private — classic closure pattern` },
          ], links: [] },
          { title: "Arrays & Objects", boxes: [
            { heading: "Array Methods", content: `const nums = [1,2,3,4,5];\nnums.map(x => x*2)        // [2,4,6,8,10]\nnums.filter(x => x>2)     // [3,4,5]\nnums.reduce((acc,x) => acc+x, 0) // 15\nnums.find(x => x>3)       // 4\nnums.some(x => x>4)       // true\nnums.every(x => x>0)      // true\nnums.flat(); nums.flatMap(fn)` },
            { heading: "Destructuring & Spread", content: `const [a, b, ...rest] = [1,2,3,4];  // array destructure\nconst {name, age=25} = user;         // object destructure\nconst newArr = [...arr1, ...arr2];    // spread\nconst merged = {...obj1, ...obj2};    // object spread` },
          ], links: [] },
          { title: "Async JavaScript", boxes: [
            { heading: "Promises", content: `const p = new Promise((resolve, reject) => {\n    setTimeout(() => resolve("done"), 1000);\n});\np.then(val => console.log(val))\n  .catch(err => console.error(err))\n  .finally(() => console.log("always"));` },
            { heading: "Async/Await", content: `async function fetchData() {\n    try {\n        const res = await fetch(url);\n        const data = await res.json();\n        return data;\n    } catch (err) {\n        console.error(err);\n    }\n}\n\n// Parallel\nawait Promise.all([fetch(url1), fetch(url2)]);` },
          ], links: [
            { label: "MDN JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
          ] },
          { title: "Prototypes & Classes", boxes: [
            { heading: "ES6 Classes", content: `class Animal {\n    #name;  // private field\n    constructor(name) { this.#name = name; }\n    get name() { return this.#name; }\n    speak() { return "..."; }\n    static create(n) { return new Animal(n); }\n}\nclass Dog extends Animal {\n    speak() { return "Woof!"; }\n}` },
          ], links: [] },
          { title: "DOM & Events", boxes: [
            { heading: "DOM Manipulation", content: `document.querySelector(".class")   // first match\ndocument.querySelectorAll("li")   // NodeList\nel.textContent = "new text";\nel.innerHTML = "<b>bold</b>";\nel.classList.add("active");\nel.classList.toggle("open");\nel.setAttribute("href", url);\nparent.appendChild(child);\nel.remove();` },
            { heading: "Events", content: `el.addEventListener("click", handler);\nel.removeEventListener("click", handler);\n\n// Event delegation (attach once to parent)\nparent.addEventListener("click", e => {\n    if (e.target.matches(".item")) {\n        // handle click on any .item\n    }\n});\n\ne.preventDefault(); // stop default action\ne.stopPropagation(); // stop bubbling` },
          ], links: [] },
        ],
      },
      // ────────── Java ──────────
      {
        id: "java",
        label: "Java",
        topics: [
          { title: "Java Basics", boxes: [
            { heading: "Hello World & Types", content: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n\nPrimitive types:\nint, long, double, float, char, boolean, byte, short\n\nWrapper classes:\nInteger, Long, Double, Character, Boolean` },
            { heading: "String Operations", content: `String s = "hello";\ns.length(); s.charAt(i);\ns.substring(start, end);\ns.toLowerCase(); s.toUpperCase();\ns.contains("ell"); s.startsWith("he");\ns.replace("l","L"); s.trim();\nString.valueOf(42);   // int → String\nInteger.parseInt("42"); // String → int\n\nStringBuilder sb = new StringBuilder();\nsb.append("a").append("b"); // O(1) append` },
          ], links: [] },
          { title: "OOP in Java", boxes: [
            { heading: "Class & Inheritance", content: `public class Animal {\n    private String name;\n    public Animal(String name) { this.name = name; }\n    public String getName() { return name; }\n    public void speak() { System.out.println("..."); }\n}\n\npublic class Dog extends Animal {\n    public Dog(String name) { super(name); }\n    @Override\n    public void speak() { System.out.println("Woof!"); }\n}` },
            { heading: "Interfaces & Abstract", content: `interface Drawable {\n    void draw();               // implicitly public abstract\n    default void log() { }     // default method (Java 8+)\n}\n\nabstract class Shape implements Drawable {\n    abstract double area();\n}` },
          ], links: [] },
          { title: "Collections Framework", boxes: [
            { heading: "List, Map, Set", content: `import java.util.*;\n\nList<Integer>   list = new ArrayList<>();  // O(1) get\nList<Integer>   list = new LinkedList<>(); // O(1) insert\nMap<String,Int> map  = new HashMap<>();    // O(1) avg\nMap<String,Int> tmap = new TreeMap<>();    // O(log n) sorted\nSet<Integer>    set  = new HashSet<>();    // O(1) avg\nDeque<Integer>  dq   = new ArrayDeque<>(); // stack+queue` },
            { heading: "PriorityQueue", content: `PriorityQueue<Integer> minH = new PriorityQueue<>();\nPriorityQueue<Integer> maxH = new PriorityQueue<>(Collections.reverseOrder());\n\nminH.offer(x); minH.poll(); minH.peek();\n\n// Custom comparator\nPriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[0]-b[0]);` },
          ], links: [] },
          { title: "Streams & Lambdas (Java 8+)", boxes: [
            { heading: "Stream Operations", content: `list.stream()\n    .filter(x -> x > 2)\n    .map(x -> x * 2)\n    .sorted()\n    .collect(Collectors.toList());\n\nIntStream.range(0, 10).sum();\nlist.stream().mapToInt(x->x).average();\nlist.stream().distinct().count();\nlist.stream().reduce(0, Integer::sum);` },
          ], links: [
            { label: "Oracle Java Docs", url: "https://docs.oracle.com/en/java/" },
          ] },
          { title: "Exception Handling", boxes: [
            { heading: "Try-Catch-Finally", content: `try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(e.getMessage());\n} catch (Exception e) {\n    e.printStackTrace();\n} finally {\n    System.out.println("Always runs");\n}\n\n// Custom exception\nclass MyException extends RuntimeException {\n    MyException(String msg) { super(msg); }\n}` },
          ], links: [] },
          { title: "Concurrency Basics", boxes: [
            { heading: "Threads", content: `// Extend Thread\nThread t = new Thread(() -> System.out.println("Running"));\nt.start(); t.join();\n\n// ExecutorService (preferred)\nExecutorService ex = Executors.newFixedThreadPool(4);\nex.submit(() -> task());\nex.shutdown();\n\n// Synchronized\nsynchronized(this) { /* critical section */ }` },
          ], links: [] },
        ],
      },
      // ────────── HTML ──────────
      {
        id: "html",
        label: "HTML",
        topics: [
          { title: "HTML Structure & Semantics", boxes: [
            { heading: "Document Skeleton", content: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Page Title</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    <!-- content -->\n    <script src="app.js"></script>\n</body>\n</html>` },
            { heading: "Semantic Elements", content: `<header>   → site/section header\n<nav>      → navigation links\n<main>     → primary content (one per page)\n<section>  → thematic grouping\n<article>  → self-contained content\n<aside>    → sidebar / tangential content\n<footer>   → page/section footer\n<figure> + <figcaption> → image with caption\n<time datetime="2026-05-09">May 9</time>` },
          ], links: [] },
          { title: "Text & Links", boxes: [
            { heading: "Headings & Paragraphs", content: `<h1> to <h6>  → headings (one h1 per page for SEO)\n<p>           → paragraph\n<span>        → inline container\n<div>         → block container\n<strong>      → bold + semantic importance\n<em>          → italic + semantic emphasis\n<br>          → line break\n<hr>          → thematic break` },
            { heading: "Links & Images", content: `<a href="url" target="_blank" rel="noopener noreferrer">Link</a>\n<a href="mailto:you@email.com">Email</a>\n<a href="tel:+1234567890">Call</a>\n<a href="#section-id">Anchor</a>\n\n<img src="img.png" alt="Description" width="300" loading="lazy">` },
          ], links: [] },
          { title: "Forms", boxes: [
            { heading: "Form Elements", content: `<form action="/submit" method="POST">\n    <input type="text" name="name" required placeholder="Name">\n    <input type="email" name="email">\n    <input type="password" name="pw" minlength="8">\n    <input type="number" min="0" max="100">\n    <input type="checkbox" id="agree">\n    <input type="radio" name="color" value="red">\n    <select name="country"><option value="us">USA</option></select>\n    <textarea name="msg" rows="5"></textarea>\n    <button type="submit">Submit</button>\n</form>` },
            { heading: "Input Types", content: `text, email, password, number, date, time\nfile, range, color, search, tel, url\ncheckbox, radio, hidden, submit, reset, button\n\nAttributes: required, disabled, readonly, autofocus,\n            placeholder, pattern, min, max, step` },
          ], links: [] },
          { title: "Tables", boxes: [
            { heading: "Table Structure", content: `<table>\n    <thead>\n        <tr><th>Name</th><th>Age</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>Alice</td><td>25</td></tr>\n    </tbody>\n    <tfoot>\n        <tr><td colspan="2">Total: 1</td></tr>\n    </tfoot>\n</table>` },
          ], links: [] },
          { title: "Media & Embeds", boxes: [
            { heading: "Video & Audio", content: `<video width="640" controls autoplay muted loop>\n    <source src="video.mp4" type="video/mp4">\n    Your browser does not support HTML video.\n</video>\n\n<audio controls>\n    <source src="audio.mp3" type="audio/mpeg">\n</audio>` },
            { heading: "Iframe & SVG", content: `<iframe src="https://example.com" width="600" height="400"\n        title="embedded page" sandbox="allow-scripts"></iframe>\n\n<svg width="100" height="100">\n    <circle cx="50" cy="50" r="40" fill="blue"/>\n</svg>` },
          ], links: [
            { label: "MDN HTML Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          ] },
          { title: "Accessibility in HTML", boxes: [
            { heading: "ARIA & Alt Text", content: `<!-- Always provide alt text -->\n<img src="logo.png" alt="Company Logo">\n<img src="divider.png" alt="">  <!-- decorative: empty alt -->\n\n<!-- ARIA roles -->\n<div role="button" tabindex="0" aria-label="Close dialog">\n<div aria-live="polite">Dynamic content</div>\n<button aria-expanded="false" aria-controls="menu">Menu</button>` },
            { heading: "Keyboard Navigation", content: `• tabindex="0"  → add to focus order\n• tabindex="-1" → focusable by JS only\n• tabindex="1+"  → avoid! breaks natural order\n\nAll interactive elements must be keyboard operable:\n<button>, <a href>, <input>, <select>, <textarea>` },
          ], links: [] },
        ],
      },
      // ────────── CSS ──────────
      {
        id: "css",
        label: "CSS",
        topics: [
          { title: "CSS Selectors", boxes: [
            { heading: "Selector Types", content: `*          → universal\np          → element\n.class     → class\n#id        → ID\np.class    → element + class\na, b       → multiple (comma)\na b        → descendant (space)\na > b      → direct child\na + b      → adjacent sibling\na ~ b      → general sibling\n[attr]     → attribute exists\n[attr=val] → attribute equals` },
            { heading: "Pseudo-classes & Pseudo-elements", content: `Pseudo-classes:\n:hover, :focus, :active, :visited\n:first-child, :last-child, :nth-child(n)\n:not(.class), :is(h1,h2), :where()\n\nPseudo-elements:\n::before, ::after       → generated content\n::placeholder           → input placeholder\n::selection             → selected text\n::first-line            → first line of block` },
            { heading: "Specificity", content: `Inline style     → 1000\nID               → 100\nClass/attr/pseudo-class → 10\nElement          → 1\n\nHigher specificity wins.\n!important overrides all (use sparingly).\nEqual specificity → last one wins.` },
          ], links: [] },
          { title: "Box Model", boxes: [
            { heading: "Anatomy", content: `Content → the actual content (text, image)\nPadding → space inside border\nBorder  → line around padding\nMargin  → space outside border\n\n* { box-sizing: border-box; }  /* always include this! */\n/* Makes width/height include padding + border */` },
            { heading: "Margin Collapse", content: `Vertical margins between block elements collapse:\nTop margin 20px + bottom margin 30px = 30px (not 50px)\n\nNo collapse: flexbox/grid children, inline-block, overflow:hidden` },
          ], links: [] },
          { title: "Flexbox", boxes: [
            { heading: "Container Properties", content: `display: flex;\nflex-direction: row | column | row-reverse | column-reverse;\njustify-content: flex-start | center | space-between | space-around | space-evenly;\nalign-items: stretch | center | flex-start | flex-end | baseline;\nalign-content: (multi-line) same values as justify-content;\nflex-wrap: nowrap | wrap;\ngap: 16px;` },
            { heading: "Item Properties", content: `flex-grow: 1;     /* take up remaining space */\nflex-shrink: 0;   /* don't shrink */\nflex-basis: 200px;/* starting size */\nflex: 1 0 auto;   /* shorthand: grow shrink basis */\nalign-self: center;  /* override align-items for this item */\norder: -1;           /* reorder visually */` },
          ], links: [] },
          { title: "CSS Grid", boxes: [
            { heading: "Grid Container", content: `display: grid;\ngrid-template-columns: 1fr 2fr 1fr;   /* 3 cols */\ngrid-template-columns: repeat(3, 1fr);\ngrid-template-columns: repeat(auto-fill, minmax(250px,1fr));\ngrid-template-rows: 100px auto;\ngap: 16px;\njustify-items: center; align-items: center;` },
            { heading: "Grid Item Placement", content: `grid-column: 1 / 3;      /* col 1 to col 3 */\ngrid-column: span 2;     /* span 2 columns */\ngrid-row: 1 / 3;         /* row 1 to row 3 */\ngrid-area: header;       /* named area */\n\n/* Named areas */\ngrid-template-areas:\n  "header header"\n  "sidebar main"\n  "footer footer";` },
          ], links: [] },
          { title: "CSS Variables (Custom Properties)", boxes: [
            { heading: "Defining & Using", content: `/* Define in :root for global scope */\n:root {\n    --color-primary: #6254e8;\n    --space-4: 16px;\n    --font-body: "DM Sans", sans-serif;\n    --radius: 12px;\n}\n\n.button {\n    background: var(--color-primary);\n    padding: var(--space-4);\n    border-radius: var(--radius);\n}\n\n/* With fallback */\ncolor: var(--text, #000);` },
          ], links: [] },
          { title: "Responsive CSS & Media Queries", boxes: [
            { heading: "Media Query Syntax", content: `/* Mobile first — min-width */\n@media (min-width: 640px) { /* tablet */ }\n@media (min-width: 1024px) { /* desktop */ }\n\n/* Dark mode */\n@media (prefers-color-scheme: dark) { }\n\n/* Reduced motion */\n@media (prefers-reduced-motion: reduce) {\n    * { animation-duration: 0.01ms !important; }\n}` },
            { heading: "Fluid Units", content: `px    → fixed\n%     → relative to parent\nem    → relative to element's own font-size\nrem   → relative to root font-size (html = 16px)\nvw/vh → % of viewport width/height\nclamp(min, preferred, max) → fluid value\n\nclamp(1rem, 2.5vw + 0.5rem, 2rem) /* fluid font size */` },
          ], links: [
            { label: "CSS Tricks", url: "https://css-tricks.com" },
            { label: "MDN CSS Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
          ] },
        ],
      },
      // ────────── SQL ──────────
      {
        id: "sql",
        label: "SQL",
        topics: [
          { title: "SQL Basics", boxes: [
            { heading: "Core CRUD", content: `SELECT * FROM users WHERE age > 18 ORDER BY name LIMIT 10;\nINSERT INTO users (name, email) VALUES ('Alice', 'a@b.com');\nUPDATE users SET age = 26 WHERE id = 1;\nDELETE FROM users WHERE id = 1;` },
            { heading: "Filtering & Operators", content: `WHERE age BETWEEN 20 AND 30\nWHERE name LIKE 'A%'        -- starts with A\nWHERE name LIKE '%son'      -- ends with son\nWHERE name IN ('Alice','Bob')\nWHERE email IS NULL\nWHERE email IS NOT NULL\nWHERE age > 18 AND city = 'NYC'` },
          ], links: [] },
          { title: "JOINs", boxes: [
            { heading: "JOIN Types", content: `INNER JOIN → rows matching in both tables\nLEFT JOIN  → all left + matching right (NULLs if no match)\nRIGHT JOIN → all right + matching left\nFULL OUTER JOIN → all rows from both\nCROSS JOIN → every combo (Cartesian product)\n\nSELF JOIN:\nSELECT e.name, m.name AS manager\nFROM employees e\nJOIN employees m ON e.manager_id = m.id` },
          ], links: [] },
          { title: "Aggregations & GROUP BY", boxes: [
            { heading: "Aggregate Functions", content: `COUNT(*) / COUNT(col)   -- count rows / non-null\nSUM(amount)\nAVG(salary)\nMIN(price) / MAX(price)\nGROUP_CONCAT / STRING_AGG (vary by DB)\n\nSELECT dept, COUNT(*) AS count, AVG(salary)\nFROM employees\nGROUP BY dept\nHAVING AVG(salary) > 60000\nORDER BY count DESC;` },
            { heading: "HAVING vs WHERE", content: `WHERE  → filters rows BEFORE grouping\nHAVING → filters groups AFTER aggregation\n\nSELECT city, COUNT(*) AS c\nFROM users\nWHERE active = true         -- filter rows first\nGROUP BY city\nHAVING COUNT(*) > 5;        -- filter groups` },
          ], links: [] },
          { title: "Subqueries & CTEs", boxes: [
            { heading: "Subqueries", content: `-- In WHERE\nSELECT name FROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- In FROM (derived table)\nSELECT * FROM (\n    SELECT dept, AVG(salary) avg_sal FROM employees GROUP BY dept\n) sub WHERE avg_sal > 70000;\n\n-- IN / EXISTS\nSELECT * FROM orders WHERE customer_id IN (SELECT id FROM customers WHERE tier='vip');` },
            { heading: "CTEs (WITH Clause)", content: `WITH high_earners AS (\n    SELECT * FROM employees WHERE salary > 80000\n),\ndept_summary AS (\n    SELECT dept, COUNT(*) cnt FROM high_earners GROUP BY dept\n)\nSELECT * FROM dept_summary ORDER BY cnt DESC;\n\n-- Recursive CTE (hierarchy traversal)\nWITH RECURSIVE tree AS (\n    SELECT id, parent_id FROM categories WHERE parent_id IS NULL\n    UNION ALL\n    SELECT c.id, c.parent_id FROM categories c JOIN tree t ON c.parent_id = t.id\n)\nSELECT * FROM tree;` },
          ], links: [] },
          { title: "Window Functions", boxes: [
            { heading: "Syntax & Functions", content: `function() OVER (PARTITION BY col ORDER BY col ROWS/RANGE)\n\nROW_NUMBER()    → unique rank, no ties\nRANK()          → skips after tie\nDENSE_RANK()    → no skip after tie\nLAG(col, n)     → value n rows back\nLEAD(col, n)    → value n rows ahead\nFIRST_VALUE()   → first value in window\nSUM() OVER ()   → running total` },
            { heading: "Examples", content: `-- Running total\nSELECT date, amount,\n    SUM(amount) OVER (ORDER BY date) AS running_total\nFROM sales;\n\n-- Rank per group\nSELECT name, dept, salary,\n    RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dept_rank\nFROM employees;` },
          ], links: [] },
          { title: "Indexes & Performance", boxes: [
            { heading: "Index Basics", content: `CREATE INDEX idx_email ON users(email);\nCREATE UNIQUE INDEX idx_email ON users(email);\nCREATE INDEX idx_multi ON orders(user_id, created_at); -- composite\nDROP INDEX idx_email;\n\nEXPLAIN SELECT * FROM users WHERE email = 'a@b.com'; -- see query plan` },
            { heading: "When to Index", content: `✓ Columns in WHERE, JOIN ON, ORDER BY, GROUP BY\n✓ Foreign keys\n✓ High-cardinality columns (email > gender)\n✗ Small tables (full scan faster)\n✗ Columns updated very frequently\n✗ Low-cardinality (boolean, status with few values)` },
          ], links: [
            { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
            { label: "SQLZoo", url: "https://sqlzoo.net" },
          ] },
        ],
      },
    ],
  },
];
