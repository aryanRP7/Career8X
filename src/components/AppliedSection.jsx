import { useState } from "react";
import {
  MapPin,
  ExternalLink,
  Clock,
  Bookmark,
  Copy,
  Check,
  DollarSign,
  Star,
  FileText,
  CheckCircle,
  Briefcase,
  Monitor,
} from "lucide-react";
import ExportButton from "./ExportButton";
import MyNotes from "./MyNotes";
import ViewToggle from "./ViewToggle";
import FileChip from "./FileChip";
import PaginationChip from "./PaginationChip";
import { copyToClipboard } from "../utils/helpers";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { jobsData } from "../data/jobsData";

const WORK_MODE_COLOR = {
  Remote: "tag-cyan",
  Hybrid: "tag-blue",
  "On-site": "tag-orange",
};
const PAGE_SIZE = 10;

function getGridClass(view) {
  if (view === "list") return "cards-list";
  if (view === "compact") return "cards-compact";
  return "cards-grid";
}

function CoverLetterText({ text }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="cover-letter-inline">
      <div className="cover-letter-inline-label">
        Cover Letter
        <button
          className="cover-letter-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "▲ collapse" : "▼ read"}
        </button>
      </div>
      {expanded && <pre className="cover-letter-body">{text}</pre>}
    </div>
  );
}

/* ── Manual applied card ── */
function AppliedCard({
  item,
  index,
  starred,
  bookmarked,
  onToggleStar,
  onToggleBookmark,
  view,
}) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="applied-jobs-card">
      <div className="card-number"># {index}</div>
      <div className="card-header">
        <div className="company-avatar applied-avatar">
          {item.companyName.charAt(0)}
        </div>
        <div className="card-title-group">
          <h3 className="job-title">{item.jobTitle}</h3>
          <p className="company-name">{item.companyName}</p>
        </div>
        <div className="card-actions">
          <button
            className={`action-btn ${starred ? "active-star" : ""}`}
            onClick={() => onToggleStar(item.id)}
            title="Star"
          >
            <Star size={15} fill={starred ? "currentColor" : "none"} />
          </button>
          <button
            className={`action-btn ${bookmarked ? "active-save" : ""}`}
            onClick={() => onToggleBookmark(item.id)}
            title="Bookmark"
          >
            <Bookmark size={15} fill={bookmarked ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {(item.location ||
        item.workMode ||
        item.workExperience ||
        item.payRange) && (
        <div className="card-meta">
          {item.location && (
            <span className="meta-chip">
              <MapPin size={12} /> {item.location}
            </span>
          )}
          {item.workMode && <span className="meta-chip">{item.workMode}</span>}
          {item.workExperience && (
            <span className="meta-chip">{item.workExperience}</span>
          )}
          {item.payRange && (
            <span className="pay-range-chip">
              <DollarSign size={12} /> {item.payRange}
            </span>
          )}
        </div>
      )}

      {/* Always show in all views */}
      <MyNotes text={item.myNotes} />
      {item.coverLetterText && <CoverLetterText text={item.coverLetterText} />}

      {/* Link row only in grid view */}
      {view === "grid" && item.applyLink && (
        <div className="applied-link-row">
          <span className="applied-link-url">{item.applyLink}</span>
          <button
            className="mini-copy-btn"
            onClick={async () => {
              await copyToClipboard(item.applyLink);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
          </button>
        </div>
      )}

      <div className="applied-card-footer">
        {item.applyLink && (
          <a
            href={item.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="goto-link-btn"
          >
            Go to Link <ExternalLink size={13} />
          </a>
        )}
        {(item.resumeFile || item.coverLetterFile) && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              marginLeft: "auto",
            }}
          >
            <FileChip
              file={item.coverLetterFile}
              label="Cover Letter"
              company={item.companyName}
              role={item.jobTitle}
            />
            <FileChip
              file={item.resumeFile}
              label="Resume"
              company={item.companyName}
              role={item.jobTitle}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Job Board applied card ── */
function JobBoardAppliedCard({ job, index, onUnmark, view }) {
  return (
    <div className="applied-jobs-card">
      <div className="card-number"># {index}</div>
      <div className="card-header">
        <div className="company-avatar">{job.companyName.charAt(0)}</div>
        <div className="card-title-group">
          <h3 className="job-title">{job.jobTitle}</h3>
          <p className="company-name">{job.companyName}</p>
        </div>
        <div className="card-actions">
          <button
            className="action-btn active-applied"
            onClick={() => onUnmark(job.id)}
            title="Unmark applied"
          >
            <CheckCircle size={16} fill="none" />
          </button>
        </div>
      </div>

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
          <span
            className={`meta-chip work-mode ${WORK_MODE_COLOR[job.workMode] || ""}`}
          >
            <Monitor size={12} /> {job.workMode}
          </span>
        )}
        {job.payRange && (
          <span className="pay-range-chip">
            <DollarSign size={12} /> {job.payRange}
          </span>
        )}
      </div>

      {/* Always show in all views */}
      <MyNotes text={job.myNotes} />
      {job.coverLetterText && <CoverLetterText text={job.coverLetterText} />}

      <div className="applied-badge" style={{ width: "fit-content" }}>
        <Check size={12} /> Marked Applied
      </div>

      {job.applyLink && (
        <div className="applied-card-footer">
          <a
            href={job.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="goto-link-btn"
            style={{ fontSize: "13px", padding: "6px 14px" }}
          >
            Go to Link <ExternalLink size={12} />
          </a>
        </div>
      )}
    </div>
  );
}

/* ── Saved card ── */
function SavedCard({
  item,
  index,
  starred,
  bookmarked,
  applied,
  onToggleStar,
  onToggleBookmark,
  onToggleApplied,
  view,
}) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="saved-later-card">
      <div className="card-number saved-num"># {index}</div>
      <div className="card-header">
        <div className="company-avatar saved-avatar">
          {item.companyName.charAt(0)}
        </div>
        <div className="card-title-group">
          <h3 className="job-title">{item.jobTitle}</h3>
          <p className="company-name">{item.companyName}</p>
        </div>
        <div className="card-actions">
          <button
            className={`action-btn ${starred ? "active-star" : ""}`}
            onClick={() => onToggleStar(item.id)}
            title="Star"
          >
            <Star size={15} fill={starred ? "currentColor" : "none"} />
          </button>
          <button
            className={`action-btn ${bookmarked ? "active-save" : ""}`}
            onClick={() => onToggleBookmark(item.id)}
            title="Bookmark"
          >
            <Bookmark size={15} fill={bookmarked ? "currentColor" : "none"} />
          </button>
          <button
            className={`action-btn ${applied ? "active-applied-orange" : ""}`}
            onClick={() => onToggleApplied(item.id)}
            title={applied ? "Unmark applied" : "Mark as applied"}
          >
            <CheckCircle size={15} fill="none" />
          </button>
        </div>
      </div>

      {(item.location || item.workMode || item.payRange) && (
        <div className="card-meta">
          {item.location && (
            <span className="meta-chip">
              <MapPin size={12} /> {item.location}
            </span>
          )}
          {item.workMode && <span className="meta-chip">{item.workMode}</span>}
          {item.payRange && (
            <span className="pay-range-chip">
              <DollarSign size={12} /> {item.payRange}
            </span>
          )}
        </div>
      )}

      {/* Always show in all views */}
      <MyNotes text={item.myNotes} />
      {item.coverLetterText && <CoverLetterText text={item.coverLetterText} />}

      {/* Link row only in grid view */}
      {view === "grid" && item.applyLink && (
        <div className="applied-link-row">
          <span className="applied-link-url">{item.applyLink}</span>
          <button
            className="mini-copy-btn"
            onClick={async () => {
              await copyToClipboard(item.applyLink);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
          </button>
        </div>
      )}

      <div className="applied-card-footer">
        {item.applyLink && (
          <a
            href={item.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="apply-btn"
          >
            Apply <ExternalLink size={13} />
          </a>
        )}
        {(item.resumeFile || item.coverLetterFile) && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              marginLeft: "auto",
            }}
          >
            <FileChip
              file={item.coverLetterFile}
              label="Cover Letter"
              company={item.companyName}
              role={item.jobTitle}
            />
            <FileChip
              file={item.resumeFile}
              label="Resume"
              company={item.companyName}
              role={item.jobTitle}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════ MAIN SECTION ══════════════════════ */
export default function AppliedSection({
  appliedJobs,
  savedForLater,
  searchQuery,
  jobState,
  onUnmarkApplied,
  view,
  setView,
}) {
  const [activeSubTab, setActiveSubTab] = useState("applied");
  const [appliedFilter, setAppliedFilter] = useState("all");
  const [savedFilter, setSavedFilter] = useState("all");
  const [appliedPage, setAppliedPage] = useState(-1);
  const [savedPage, setSavedPage] = useState(-1);

  const [starred, setStarred] = useLocalStorage("applied_starred_v1", {});
  const [bookmarked, setBookmarked] = useLocalStorage(
    "applied_bookmarked_v1",
    {},
  );
  const [savedApplied, setSavedApplied] = useLocalStorage(
    "applied_savedApplied_v1",
    {},
  );

  const toggleStar = (prefix, id) =>
    setStarred((p) => ({ ...p, [`${prefix}-${id}`]: !p[`${prefix}-${id}`] }));
  const toggleBookmark = (prefix, id) =>
    setBookmarked((p) => ({
      ...p,
      [`${prefix}-${id}`]: !p[`${prefix}-${id}`],
    }));
  const toggleSavedApplied = (id) =>
    setSavedApplied((p) => ({ ...p, [id]: !p[id] }));

  const boardAppliedJobs = jobState
    ? jobsData.filter((j) => jobState.isApplied(j.id))
    : [];
  const savedAppliedJobs = savedForLater.filter((j) => savedApplied[j.id]);

  const safeSearch = (list) =>
    list.filter((j) => {
      const q = searchQuery.toLowerCase();
      if (!q) return true;
      return (
        j.companyName?.toLowerCase().includes(q) ||
        j.jobTitle?.toLowerCase().includes(q) ||
        j.location?.toLowerCase().includes(q) ||
        j.myNotes?.toLowerCase().includes(q)
      );
    });

  const filteredApplied = safeSearch(appliedJobs);
  const filteredBoardApplied = boardAppliedJobs.filter((j) => {
    const q = searchQuery.toLowerCase();
    return (
      !q ||
      j.companyName?.toLowerCase().includes(q) ||
      j.jobTitle?.toLowerCase().includes(q)
    );
  });
  const filteredSavedApplied = safeSearch(savedAppliedJobs);
  const filteredSaved = safeSearch(savedForLater);

  const applyAppliedFilter = (list, prefix) => {
    if (appliedFilter === "starred")
      return list.filter((j) => starred[`${prefix}-${j.id}`]);
    if (appliedFilter === "bookmarked")
      return list.filter((j) => bookmarked[`${prefix}-${j.id}`]);
    return list;
  };

  const applySavedFilter = (list) => {
    if (savedFilter === "starred")
      return list.filter((j) => starred[`saved-${j.id}`]);
    if (savedFilter === "bookmarked")
      return list.filter((j) => bookmarked[`saved-${j.id}`]);
    if (savedFilter === "applied")
      return list.filter((j) => savedApplied[j.id]);
    return list;
  };

  const displayApplied = applyAppliedFilter(filteredApplied, "applied");
  const displayBoardApplied = applyAppliedFilter(filteredBoardApplied, "board");
  const displaySavedApplied = filteredSavedApplied;
  const displaySaved = applySavedFilter(filteredSaved);

  const allAppliedDisplay = [
    ...displayApplied,
    ...displayBoardApplied,
    ...displaySavedApplied,
  ];

  const paginatedApplied =
    appliedPage === -1
      ? allAppliedDisplay
      : allAppliedDisplay.slice(
          appliedPage * PAGE_SIZE,
          (appliedPage + 1) * PAGE_SIZE,
        );

  const paginatedSaved =
    savedPage === -1
      ? displaySaved
      : displaySaved.slice(savedPage * PAGE_SIZE, (savedPage + 1) * PAGE_SIZE);

  const totalApplied =
    filteredApplied.length +
    filteredBoardApplied.length +
    filteredSavedApplied.length;

  const manualCount = displayApplied.length;
  const boardCount = displayBoardApplied.length;
  const paginatedManual = paginatedApplied.filter((_, i) => i < manualCount);
  const paginatedBoard = paginatedApplied.filter(
    (_, i) => i >= manualCount && i < manualCount + boardCount,
  );
  const paginatedSavedApplied = paginatedApplied.filter(
    (_, i) => i >= manualCount + boardCount,
  );

  const buildExport = (list) =>
    list.map((j, i) => {
      const row = { "#": i + 1 };
      if (j.companyName) row["Company"] = j.companyName;
      if (j.jobTitle) row["Job Title"] = j.jobTitle;
      if (j.location) row["Location"] = j.location;
      if (j.payRange) row["Pay Range"] = j.payRange;
      if (j.applyLink) row["Apply Link"] = j.applyLink;
      if (j.resumeFile) row["Resume File"] = j.resumeFile;
      if (j.myNotes) row["My Notes"] = j.myNotes;
      if (j.coverLetterText) row["Cover Letter"] = j.coverLetterText;
      return row;
    });

  const gridClass = getGridClass(view);

  const APPLIED_FILTERS = [
    { id: "all", label: "All", icon: null },
    { id: "starred", label: "Starred", icon: <Star size={12} /> },
    { id: "bookmarked", label: "Bookmarked", icon: <Bookmark size={12} /> },
  ];
  const SAVED_FILTERS = [
    { id: "all", label: "All", icon: null },
    { id: "starred", label: "Starred", icon: <Star size={12} /> },
    { id: "bookmarked", label: "Bookmarked", icon: <Bookmark size={12} /> },
    { id: "applied", label: "Applied", icon: <CheckCircle size={12} /> },
  ];

  const currentFilters =
    activeSubTab === "applied" ? APPLIED_FILTERS : SAVED_FILTERS;
  const currentFilter =
    activeSubTab === "applied" ? appliedFilter : savedFilter;
  const setCurrentFilter =
    activeSubTab === "applied"
      ? (v) => {
          setAppliedFilter(v);
          setAppliedPage(-1);
        }
      : (v) => {
          setSavedFilter(v);
          setSavedPage(-1);
        };

  const currentExportData =
    activeSubTab === "applied"
      ? buildExport(allAppliedDisplay)
      : buildExport(displaySaved);

  return (
    <section className="section">
      <div className="section-header" style={{ marginBottom: "20px" }}>
        <div>
          <h2 className="section-title">My Applications</h2>
          <p className="section-subtitle">
            Track applications &amp; saved jobs
          </p>
        </div>
      </div>

      <div
        className="section-header-actions"
        style={{
          marginBottom: "22px",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeSubTab === "applied" ? "active" : ""}`}
            onClick={() => {
              setActiveSubTab("applied");
              setAppliedPage(-1);
            }}
          >
            <Clock size={13} /> Applied ({totalApplied})
          </button>
          <button
            className={`filter-tab ${activeSubTab === "saved" ? "active" : ""}`}
            onClick={() => {
              setActiveSubTab("saved");
              setSavedPage(-1);
            }}
          >
            <Bookmark size={13} /> Saved ({filteredSaved.length})
          </button>
        </div>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="filter-tabs">
            {currentFilters.map((f) => (
              <button
                key={f.id}
                className={`filter-tab ${currentFilter === f.id ? "active" : ""}`}
                onClick={() => setCurrentFilter(f.id)}
              >
                {f.icon} {f.label}
              </button>
            ))}
          </div>
          <PaginationChip
            total={
              activeSubTab === "applied"
                ? allAppliedDisplay.length
                : displaySaved.length
            }
            pageSize={PAGE_SIZE}
            currentPage={activeSubTab === "applied" ? appliedPage : savedPage}
            onChange={
              activeSubTab === "applied" ? setAppliedPage : setSavedPage
            }
          />
          <ViewToggle view={view} setView={setView} />
          <ExportButton
            label={
              activeSubTab === "applied" ? "Applied Jobs" : "Saved For Later"
            }
            csvData={currentExportData}
          />
        </div>
      </div>

      {/* ── Applied content ── */}
      {activeSubTab === "applied" &&
        (allAppliedDisplay.length === 0 ? (
          <div className="empty-state">
            <p>
              No entries match. Add jobs in appliedJobsData.js or mark from Jobs
              Board.
            </p>
          </div>
        ) : (
          <div className={gridClass}>
            {paginatedManual.map((job, i) => (
              <AppliedCard
                key={`manual-${job.id}`}
                item={job}
                index={
                  appliedPage === -1 ? i + 1 : appliedPage * PAGE_SIZE + i + 1
                }
                view={view}
                starred={!!starred[`applied-${job.id}`]}
                bookmarked={!!bookmarked[`applied-${job.id}`]}
                onToggleStar={(id) => toggleStar("applied", id)}
                onToggleBookmark={(id) => toggleBookmark("applied", id)}
              />
            ))}
            {paginatedBoard.map((job, i) => (
              <JobBoardAppliedCard
                key={`board-${job.id}`}
                job={job}
                index={
                  appliedPage === -1
                    ? paginatedManual.length + i + 1
                    : appliedPage * PAGE_SIZE + paginatedManual.length + i + 1
                }
                view={view}
                onUnmark={onUnmarkApplied}
              />
            ))}
            {paginatedSavedApplied.map((job, i) => (
              <AppliedCard
                key={`savedapp-${job.id}`}
                item={job}
                index={
                  appliedPage === -1
                    ? paginatedManual.length + paginatedBoard.length + i + 1
                    : appliedPage * PAGE_SIZE +
                      paginatedManual.length +
                      paginatedBoard.length +
                      i +
                      1
                }
                view={view}
                starred={!!starred[`saved-${job.id}`]}
                bookmarked={!!bookmarked[`saved-${job.id}`]}
                onToggleStar={(id) => toggleStar("saved", id)}
                onToggleBookmark={(id) => toggleBookmark("saved", id)}
              />
            ))}
          </div>
        ))}

      {/* ── Saved content ── */}
      {activeSubTab === "saved" &&
        (displaySaved.length === 0 ? (
          <div className="empty-state">
            <p>No entries match. Add jobs in savedForLaterData.js</p>
          </div>
        ) : (
          <div className={gridClass}>
            {paginatedSaved.map((job, i) => (
              <SavedCard
                key={job.id}
                item={job}
                index={savedPage === -1 ? i + 1 : savedPage * PAGE_SIZE + i + 1}
                view={view}
                starred={!!starred[`saved-${job.id}`]}
                bookmarked={!!bookmarked[`saved-${job.id}`]}
                applied={!!savedApplied[job.id]}
                onToggleStar={(id) => toggleStar("saved", id)}
                onToggleBookmark={(id) => toggleBookmark("saved", id)}
                onToggleApplied={toggleSavedApplied}
              />
            ))}
          </div>
        ))}
    </section>
  );
}
