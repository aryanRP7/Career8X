import { useState } from "react";
import { Search, Moon, Sun, Menu, X, ClipboardCheck, Briefcase, Users, BookOpen, FolderOpen } from "lucide-react";

const TABS = [
  { id: "applied",     label: "Applied",    icon: ClipboardCheck },
  { id: "jobs",        label: "Jobs Board", icon: Briefcase      },
  { id: "consultancy", label: "Consultancy",icon: Users          },
  { id: "notes",       label: "Resources",  icon: BookOpen       },
  { id: "my",          label: "My Space",   icon: FolderOpen     },
];

export default function Navbar({
  activeTab, setActiveTab,
  darkMode, toggleDarkMode,
  searchQuery, setSearchQuery,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-dot" />
          <span className="logo-text">Career8X</span>
        </div>

        {/* Desktop tabs */}
        <div className="navbar-tabs">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-tab ${activeTab === id ? "active" : ""}`}
              onClick={() => setActiveTab(id)}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* Search + controls */}
        <div className="navbar-right">
          <div className={`search-wrap ${searchFocused ? "focused" : ""}`}>
            <Search size={14} className="search-icon" />
            <input
              type="text"
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="search-input"
            />
          </div>

          <button className="icon-btn" onClick={toggleDarkMode} title="Toggle theme">
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="icon-btn mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`mobile-tab ${activeTab === id ? "active" : ""}`}
              onClick={() => { setActiveTab(id); setMenuOpen(false); }}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
