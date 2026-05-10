import { useState } from "react";
import { Star, Bookmark, CheckCircle, LayoutGrid } from "lucide-react";
import JobCard from "./JobCard";
import ExportButton from "./ExportButton";
import ViewToggle from "./ViewToggle";

const FILTER_OPTIONS = [
  { id: "all",       label: "All",     icon: LayoutGrid  },
  { id: "favorites", label: "Starred", icon: Star        },
  { id: "saved",     label: "Saved",   icon: Bookmark    },
  { id: "applied",   label: "Applied", icon: CheckCircle },
];

function matchesSearch(job, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    (job.companyName    && job.companyName.toLowerCase().includes(q))    ||
    (job.jobTitle       && job.jobTitle.toLowerCase().includes(q))       ||
    (job.location       && job.location.toLowerCase().includes(q))       ||
    (job.workMode       && job.workMode.toLowerCase().includes(q))       ||
    (job.workExperience && job.workExperience.toLowerCase().includes(q)) ||
    (job.jobDescription && job.jobDescription.some((d) => d.toLowerCase().includes(q)))
  );
}

export default function JobsBoard({ jobs, jobState, searchQuery, view, setView }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const { isFavorite, isApplied, isSaved, toggleFavorite, toggleApplied, toggleSaved } = jobState;

  const filtered = jobs.filter((job) => {
    if (!matchesSearch(job, searchQuery)) return false;
    if (activeFilter === "favorites") return isFavorite(job.id);
    if (activeFilter === "saved")     return isSaved(job.id);
    if (activeFilter === "applied")   return isApplied(job.id);
    return true;
  });

  const exportData = filtered.map((job, i) => {
    const row = { "#": i + 1 };
    if (job.companyName)    row["Company"]     = job.companyName;
    if (job.jobTitle)       row["Job Title"]   = job.jobTitle;
    if (job.location)       row["Location"]    = job.location;
    if (job.workMode)       row["Work Mode"]   = job.workMode;
    if (job.workExperience) row["Experience"]  = job.workExperience;
    if (job.payRange)       row["Pay Range"]   = job.payRange;
    if (job.applyLink)      row["Apply Link"]  = job.applyLink;
    if (job.jobDescription) row["Description"] = job.jobDescription.join(" | ");
    if (job.myNotes)        row["My Notes"]    = job.myNotes;
    return row;
  });

  const gridClass = view === "list" ? "cards-list" : view === "compact" ? "cards-compact" : "cards-grid";

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Jobs Board</h2>
          <p className="section-subtitle">
            {filtered.length} position{filtered.length !== 1 ? "s" : ""} listed
          </p>
        </div>
        <div className="section-header-actions">
          <div className="filter-tabs">
            {FILTER_OPTIONS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`filter-tab ${activeFilter === id ? "active" : ""}`}
                onClick={() => setActiveFilter(id)}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>
          <ViewToggle view={view} setView={setView} />
          <ExportButton label="Jobs Board" csvData={exportData} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No jobs match your current filters.</p>
        </div>
      ) : (
        <div className={gridClass}>
          {filtered.map((job, index) => (
            <JobCard
              key={job.id}
              job={job}
              index={index + 1}
              isFavorite={isFavorite(job.id)}
              isApplied={isApplied(job.id)}
              isSaved={isSaved(job.id)}
              onToggleFavorite={toggleFavorite}
              onToggleApplied={toggleApplied}
              onToggleSaved={toggleSaved}
              view={view}
            />
          ))}
        </div>
      )}
    </section>
  );
}
