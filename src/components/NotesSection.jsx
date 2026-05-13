import { useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import ExportButton from "./ExportButton";

const CODING_SUBS = ["c","cpp","python","js","java","html","css","sql"];

function NoteBoxCard({ box }) {
  return (
    <div className="note-box-card">
      {box.heading && <div className="note-box-heading">{box.heading}</div>}
      <pre className="note-box-body">{box.content}</pre>
    </div>
  );
}

function NoteAccordion({ topic }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion ${open ? "open" : ""}`}>
      <button className="accordion-trigger" onClick={() => setOpen(!open)}>
        <span className="accordion-title">{topic.title}</span>
        {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
      </button>
      {open && (
        <div className="accordion-content">
          {/* Boxed structure */}
          {topic.boxes && topic.boxes.length > 0 && (
            <div className="note-boxes-list">
              {topic.boxes.map((box, i) => (
                <NoteBoxCard key={i} box={box} />
              ))}
            </div>
          )}
          {/* Fallback: legacy plain content */}
          {!topic.boxes && topic.content && (
            <pre className="note-pre">{topic.content}</pre>
          )}
          {/* Links */}
          {topic.links && topic.links.length > 0 && (
            <div className="note-links">
              <p className="note-links-label">📎 Helpful Links</p>
              {topic.links.map((lnk) => (
                <a key={lnk.url} href={lnk.url} target="_blank" rel="noopener noreferrer" className="note-link">
                  <ExternalLink size={12} />
                  {lnk.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TopicList({ topics, searchQuery }) {
  const filtered = topics.filter((t) => {
    const q = searchQuery.toLowerCase();
    if (!q) return true;
    const contentStr = t.boxes
      ? t.boxes.map(b => b.heading + " " + b.content).join(" ")
      : (t.content || "");
    return t.title.toLowerCase().includes(q) || contentStr.toLowerCase().includes(q);
  });
  if (filtered.length === 0) return <div className="empty-state"><p>No topics match your search.</p></div>;
  return (
    <div className="note-category">
      <div className="accordion-list">
        {filtered.map((topic) => <NoteAccordion key={topic.title} topic={topic} />)}
      </div>
    </div>
  );
}

export default function NotesSection({ notes, searchQuery }) {
  const [activeCategory, setActiveCategory] = useState(notes[0]?.id || "uiux");
  const [activeCodingSub, setActiveCodingSub] = useState("c");

  const currentCat = notes.find((n) => n.id === activeCategory);

  // Build export data
  const buildExport = () => {
    if (!currentCat) return [];
    let topics = currentCat.topics || [];
    if (currentCat.subs) {
      const sub = currentCat.subs.find(s => s.id === activeCodingSub);
      topics = sub ? sub.topics : [];
    }
    const rows = [];
    topics.forEach((t) => {
      if (t.boxes && t.boxes.length > 0) {
        t.boxes.forEach((box) => {
          rows.push({
            "Category": currentCat.category,
            "Topic":    t.title,
            "Section":  box.heading || "",
            "Notes":    (box.content || "").replace(/\n/g, " | "),
          });
        });
      } else {
        rows.push({
          "Category": currentCat.category,
          "Topic":    t.title,
          "Section":  "",
          "Notes":    (t.content || ""),
        });
      }
    });
    return rows;
  };

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Resources</h2>
          <p className="section-subtitle">Interview notes, prep material &amp; helpful links</p>
        </div>
        <div className="notes-export">
          <ExportButton label={`Resources – ${currentCat?.category || ""}`} csvData={buildExport()} />
        </div>
      </div>

      {/* Category tabs */}
      <div className="notes-category-tabs">
        {notes.map((cat) => {
          const count = cat.subs
            ? cat.subs.reduce((a, s) => a + s.topics.length, 0)
            : cat.topics.length;
          return (
            <button
              key={cat.id}
              className={`notes-cat-tab ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.category}
              <span className="notes-cat-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Coding subsection tabs */}
      {currentCat?.subs && (
        <div className="coding-sub-tabs">
          {currentCat.subs.map((sub) => (
            <button
              key={sub.id}
              className={`coding-sub-tab ${activeCodingSub === sub.id ? "active" : ""}`}
              onClick={() => setActiveCodingSub(sub.id)}
            >
              {sub.label}
              <span style={{ fontSize:"11px", opacity:0.65, marginLeft:"4px" }}>({sub.topics.length})</span>
            </button>
          ))}
        </div>
      )}

      {/* Topics */}
      {currentCat?.subs ? (
        (() => {
          const sub = currentCat.subs.find(s => s.id === activeCodingSub);
          return sub ? <TopicList topics={sub.topics} searchQuery={searchQuery} /> : null;
        })()
      ) : (
        <TopicList topics={currentCat?.topics || []} searchQuery={searchQuery} />
      )}
    </section>
  );
}
