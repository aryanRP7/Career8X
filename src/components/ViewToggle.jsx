import { LayoutGrid, List, Grid3X3 } from "lucide-react";

// view: "grid" | "compact" | "list"
export default function ViewToggle({ view, setView }) {
  return (
    <div className="view-toggle">
      <button
        className={`view-toggle-btn ${view === "grid" ? "active" : ""}`}
        onClick={() => setView("grid")}
        title="Grid view (3 columns)"
      >
        <LayoutGrid size={14} />
      </button>
      <button
        className={`view-toggle-btn ${view === "compact" ? "active" : ""}`}
        onClick={() => setView("compact")}
        title="Compact grid (6 per row)"
      >
        <Grid3X3 size={14} />
      </button>
      <button
        className={`view-toggle-btn ${view === "list" ? "active" : ""}`}
        onClick={() => setView("list")}
        title="List view"
      >
        <List size={14} />
      </button>
    </div>
  );
}
