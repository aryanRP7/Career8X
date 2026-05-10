import { useState } from "react";
import Navbar from "./components/Navbar";
import JobsBoard from "./components/JobsBoard";
import ConsultancySection from "./components/ConsultancySection";
import NotesSection from "./components/NotesSection";
import AppliedSection from "./components/AppliedSection";
import MySection from "./components/MySection";
import { jobsData } from "./data/jobsData";
import { consultancyData } from "./data/consultancyData";
import { notesData } from "./data/notesData";
import { appliedJobsData } from "./data/appliedJobsData";
import { savedForLaterData } from "./data/savedForLaterData";
import { myItems, myFiles } from "./data/myData";
import { personalNote } from "./data/personalNote";
import { useJobState } from "./hooks/useJobState";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Clock } from "lucide-react";
import "./index.css";

// ── Update this date whenever you redeploy ──
const LAST_UPDATED = "09 May 2026";

// ── STORAGE VERSION — bump (e.g. "v2") ONLY to wipe all user state ──
// WARNING: changing this clears favorites, applied, saved for ALL users
const STORAGE_VERSION = "v1";

// Dark mode key is versioned independently so bumping it resets the preference to dark
const DARK_MODE_KEY = "dashboard_dark_mode_v2";

export default function App() {
  const [activeTab, setActiveTab]   = useState("applied");
  // Default dark mode = true (dark on landing)
  const [darkMode, setDarkMode] = useLocalStorage(DARK_MODE_KEY, true);
  const [searchQuery, setSearchQuery] = useState("");
  const [noteHover, setNoteHover]   = useState(false);
  // Global view state — persists across tab switches
  const [view, setView] = useState("grid");
  const jobState = useJobState(STORAGE_VERSION);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  // Applied toggle — NO page switching, job just silently enters Applied section
  const handleToggleApplied = (id) => {
    jobState.toggleApplied(id);
    // No navigation — user stays on current page
  };

  const rootStyle = darkMode ? {} : { background: "#f5f5f7", minHeight: "100vh" };

  return (
    <div className={darkMode ? "" : "light"} style={rootStyle}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="main-content">
        <div className="page-header">
          <div
            className="last-updated"
            onMouseEnter={() => setNoteHover(true)}
            onMouseLeave={() => setNoteHover(false)}
          >
            <span className="last-updated-dot" />
            <Clock size={11} />
            Last updated: {LAST_UPDATED}
            {noteHover && personalNote && (
              <div className="personal-note-popup">
                <span className="personal-note-emoji">💬</span>
                {personalNote}
              </div>
            )}
          </div>
        </div>

        {activeTab === "applied" && (
          <AppliedSection
            appliedJobs={appliedJobsData}
            savedForLater={savedForLaterData}
            searchQuery={searchQuery}
            jobState={jobState}
            onUnmarkApplied={(id) => jobState.toggleApplied(id)}
            view={view}
            setView={setView}
          />
        )}
        {activeTab === "jobs" && (
          <JobsBoard
            jobs={jobsData}
            jobState={{
              ...jobState,
              toggleApplied: handleToggleApplied,
            }}
            searchQuery={searchQuery}
            view={view}
            setView={setView}
          />
        )}
        {activeTab === "consultancy" && (
          <ConsultancySection
            consultancies={consultancyData}
            searchQuery={searchQuery}
            view={view}
            setView={setView}
          />
        )}
        {activeTab === "notes" && (
          <NotesSection notes={notesData} searchQuery={searchQuery} />
        )}
        {activeTab === "my" && (
          <MySection items={myItems} files={myFiles} />
        )}
      </main>
    </div>
  );
}
