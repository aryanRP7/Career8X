import { useState } from "react";
import {
  Star, CheckCircle, Bookmark, Copy, ExternalLink,
  MapPin, Monitor, Briefcase, Check, DollarSign
} from "lucide-react";
import { copyToClipboard } from "../utils/helpers";
import MyNotes from "./MyNotes";
import FileChip from "./FileChip";

const WORK_MODE_COLOR = {
  Remote: "tag-cyan",
  Hybrid: "tag-blue",
  "On-site": "tag-orange",
};
function CoverLetterText({ text }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="cover-letter-inline">
      <div className="cover-letter-inline-label">
        Cover Letter
        <button className="cover-letter-toggle" onClick={() => setExpanded(!expanded)}>
          {expanded ? "▲ collapse" : "▼ read"}
        </button>
      </div>
      {expanded && <pre className="cover-letter-body">{text}</pre>}
    </div>
  );
}
export default function JobCard({
  job, index,
  isFavorite, isApplied, isSaved,
  onToggleFavorite, onToggleApplied, onToggleSaved,
  view = "grid",
}) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isList = view === "list";

  const handleCopy = async () => {
    await copyToClipboard(job.applyLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`job-card ${isApplied ? "applied-card" : ""}`}>
      {/* Card number */}
      <div className="card-number">#{index}</div>

      {/* Header */}
      <div className="card-header">
        <div className="company-avatar">{job.companyName.charAt(0)}</div>
        <div className="card-title-group">
          <h3 className="job-title">{job.jobTitle}</h3>
          <p className="company-name">{job.companyName}</p>
        </div>
        <div className="card-actions">
          <button
            className={`action-btn ${isFavorite ? "active-star" : ""}`}
            onClick={() => onToggleFavorite(job.id)}
            title="Favourite"
          >
            <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>
          <button
            className={`action-btn ${isSaved ? "active-save" : ""}`}
            onClick={() => onToggleSaved(job.id)}
            title="Save"
          >
            <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
          </button>
          <button
            className={`action-btn ${isApplied ? "active-applied" : ""}`}
            onClick={() => onToggleApplied(job.id)}
            title="Mark applied"
          >
            <CheckCircle size={16} />
          </button>
        </div>
      </div>

      {/* Meta chips — only show if the field exists */}
      <div className="card-meta">
        {job.location && (
          <span className="meta-chip">
            <MapPin size={12} /> {job.location}
          </span>
        )}
        {job.workExperience && (
          <span className="meta-chip">
            <Briefcase size={12} /> {job.workExperience}
          </span>
        )}
        {job.workMode && (
          <span className={`meta-chip work-mode ${WORK_MODE_COLOR[job.workMode] || ""}`}>
            <Monitor size={12} /> {job.workMode}
          </span>
        )}
        {job.payRange && (
          <span className="pay-range-chip">
            <DollarSign size={12} /> {job.payRange}
          </span>
        )}
      </div>

      {/* Description — hidden in list view */}
      {!isList && job.jobDescription && job.jobDescription.length > 0 && (
        <>
          <div className={`card-description ${expanded ? "expanded" : ""}`}>
            <ul>
              {job.jobDescription.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
          {job.jobDescription.length > 2 && (
            <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Show less ↑" : "Show more ↓"}
            </button>
          )}
        </>
      )}

      {/* My Notes — hidden in list view */}
      {!isList && <MyNotes text={job.myNotes} />}
      {!isList && job.coverLetterText && <CoverLetterText text={job.coverLetterText} />}

      {/* Applied badge */}
      {isApplied && (
        <div className="applied-badge">
          <Check size={12} /> Applied
        </div>
      )}

      {/* File chips — Resume + Cover Letter */}
      {(job.resumeFile || job.coverLetterFile) && (
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          <FileChip file={job.resumeFile} label="Resume" company={job.companyName} role={job.jobTitle} />
          <FileChip file={job.coverLetterFile} label="Cover Letter" company={job.companyName} role={job.jobTitle} />
        </div>
      )}

      {/* Footer */}
      {job.applyLink && (
        <div className="card-footer">
          <button className="icon-ghost-btn" onClick={handleCopy} title="Copy link">
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied!" : "Copy link"}
          </button>
          <a
            href={job.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="apply-btn"
          >
            Apply <ExternalLink size={13} />
          </a>
        </div>
      )}
    </div>
  );
}
