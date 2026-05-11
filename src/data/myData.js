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
    title: "Figma Design Reel",
    url: "https://www.instagram.com/reel/DU4hXqiEXnH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    label: "Instagram Reel",
  },
  {
    type: "link",
    id: 2,
    title: "Figma – Educational Video",
    url: "https://youtu.be/RNmbN-r84ms?si=PrARcdku3E33kMUE",
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
  {
    type: "text",
    id: 7,
    title: "Prompt",
    body: `• Attached is my resume for reference 
and the job description is -
FIRST NAME AND POSITION
FULL JD 

now Act as a senior recruiter who reads 200 resume a day. Rewrite my resume for this position and replace every responsibility with my role achievements. eliminate everything generic and make my value impossible to ignore. Make a ATS optimized 10/10 resume which definitely gets me an interview as I want this job. Keep this resume high ended and add the points given in the job description above. Give extremely High ended and ATS 10/10. Please add all points given in this JD. Make sure its high ended and directly related to the JD that makes me perfect undeniable candidate, also make sure that the AI check passes the resume with 10/10 ATS give the content here . Refer this given resume. strictly follow the format of the given resume and add all required points given in JD. Add all points from the JD. Refer to the given resume and make this one as high ended as possible. 

Add all points and skills listed in this COMPANY and POSITION also reflect these skills and points in experience Please give me a resume that definitely gets short listed here. Remove points from resume that are not mentioned in this JD or relatable. Add all points and skills given in this JD, add keywords given in this jD Give the final updated resume inside a markdown code block so it appears in a separate black copyable box.
(Requirements:
- Use clean Markdown structure
- Do not use bullet symbols like •
- Do not use em dashes)

• Give all core skills as per the given JD. Add skills as per COMPANY NAME and POSITION JD . Use all keywords. Give all the core skills from the given JD. Refer the format given in PDF resume. 

• Reflect all the skills given in this JD in my experience section as well give me final complete resume 

• Instead of generic soft skills, replace the “Core Competencies” section with stronger, more technical, and role-specific competencies that better reflect practical expertise and measurable capabilities.

• This line in the resume is currently too short and leaves empty space on the page. Add one strong, relevant keyword or technical term based on the job description to make the line slightly longer while also improving ATS relevance and alignment with the role.

• This line in the resume is slightly too long and wraps into a second line in the document. Remove or replace one unnecessary word so the sentence fits cleanly within a single line while preserving meaning, professionalism, and ATS relevance.

• Identify max 6 most important and ATS-relevant word(s) or short phrases in the following professional summary that should be highlighted or emphasized to improve alignment with the job description.

• Write a compelling, high-impact cover letter tailored to the job description provided below, using the CV as reference.
Give a cover letter for this position, which begins with a powerful idea that benefits their company instead of I am applying. It connects my specific experience to the companies’ exact needs and builds trust, keep the text below 200 words look into my experience and job description.
CV for reference:
[COVER LETTER 
Date - 05/07/2026 
Dear Hiring Team,
…
Warm regards, 
John Doe]

Job Description:
[JD]
`,
  },
];

// ─────────────────────────────────────────────
//  MY FILES — files stored in /public/myfiles/
//  Add your PDF, DOCX, TXT filenames here
// ─────────────────────────────────────────────

export const myFiles = [
  {
    id: 1,
    name: "Main_Product_ Designer_Falguni Dekate_ Resume.pdf",
    label: "My Resume",
    description: "Latest resume — updated May 2026",
    type: "pdf",
  },
  
  {
    id: 2,
    name: "Main_Product_ Designer_Falguni Dekate_ Resume.docx",
    label: "Cover Letter Template",
    description: "Generic cover letter to customize per application",
    type: "docx",
  },
  {
    id: 3,
    name: "Cover Letter Falguni Dekate.docx",
    label: "Cover Letter Docx",
    description: "Cover Letter Docx",
    type: "docx",
  },
  {
    id: 4,
    name: "Prompt Job.pdf",
    label: "Prompt",
    description: "Prompt for resume",
    type: "pdf",
  },
];
