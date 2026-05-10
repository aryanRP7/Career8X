import { useState } from "react";

const NOTES_LINE_HEIGHT = 1.55;
const NOTES_FONT_SIZE   = 13;
const TWO_LINE_HEIGHT   = NOTES_FONT_SIZE * NOTES_LINE_HEIGHT * 2; // ~40px

export default function MyNotes({ text }) {
  const [expanded, setExpanded] = useState(false);
  if (!text) return null;

  // Rough heuristic: if text has >2 newlines or >120 chars, show toggle
  const needsToggle = text.length > 100 || text.split("\n").length > 2;

  return (
    <div className="card-my-notes">
      <span className="card-my-notes-label">My Notes</span>
      <span className={`card-my-notes-text${expanded ? " expanded" : ""}`}>
        {text}
      </span>
      {needsToggle && (
        <button
          className="card-my-notes-toggle"
          onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v); }}
        >
          {expanded ? "▲ show less" : "▼ show more"}
        </button>
      )}
    </div>
  );
}
