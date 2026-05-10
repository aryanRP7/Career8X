import { useState } from "react";
import { ExternalLink, Download, FileText, File, Link2, AlignLeft, Folder } from "lucide-react";

const FILE_ICON = {
  pdf:  { icon: FileText, color: "#ef4444" },
  docx: { icon: FileText, color: "#2563eb" },
  doc:  { icon: FileText, color: "#2563eb" },
  txt:  { icon: File,     color: "#6b7280" },
  default: { icon: File,  color: "#6b7280" },
};

function LinkCard({ item }) {
  return (
    <div className="my-link-card">
      <div className="my-card-icon-wrap link-icon">
        <Link2 size={18} />
      </div>
      <div className="my-card-body">
        <h4 className="my-card-title">{item.title}</h4>
        {item.label && <span className="my-link-label">{item.label}</span>}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="my-goto-btn"
        >
          Go to Link <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

function TextCard({ item }) {
  return (
    <div className="my-text-card">
      <div className="my-text-header">
        <AlignLeft size={15} className="my-text-icon" />
        <h4 className="my-card-title">{item.title}</h4>
      </div>
      <pre className="my-text-body">{item.body}</pre>
    </div>
  );
}

function BothCard({ item }) {
  return (
    <div className="my-both-card">
      <div className="my-both-header">
        <div className="my-card-icon-wrap both-icon">
          <Link2 size={16} />
        </div>
        <div>
          <h4 className="my-card-title">{item.title}</h4>
          {item.label && <span className="my-link-label">{item.label}</span>}
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="my-goto-btn small"
        >
          Go to Link <ExternalLink size={12} />
        </a>
      </div>
      {item.body && <pre className="my-text-body">{item.body}</pre>}
    </div>
  );
}

function FileCard({ file }) {
  const ext = (file.type || file.name?.split(".").pop() || "default").toLowerCase();
  const { icon: Icon, color } = FILE_ICON[ext] || FILE_ICON.default;
  return (
    <div className="my-file-card">
      <div className="my-file-icon" style={{ color }}>
        <Icon size={24} />
        <span className="my-file-ext">.{ext}</span>
      </div>
      <div className="my-file-body">
        <h4 className="my-card-title">{file.label || file.name}</h4>
        {file.description && <p className="my-file-desc">{file.description}</p>}
        <a
          href={`${process.env.PUBLIC_URL || ""}/myfiles/${file.name}`}
          download={file.name}
          className="my-download-btn"
        >
          <Download size={13} />
          Download
        </a>
      </div>
    </div>
  );
}

export default function MySection({ items, files }) {
  const [activeTab, setActiveTab] = useState("files");

  const links = items.filter((i) => i.type === "link");
  const texts = items.filter((i) => i.type === "text");
  const boths = items.filter((i) => i.type === "both");

  const allLinks = [...links, ...boths];
  const allTexts = texts;
  const allFiles = files || [];

  const TABS = [
    { id: "files", label: "Files", icon: Folder, count: allFiles.length },
    { id: "links", label: "Links", icon: Link2,  count: allLinks.length },
    { id: "notes", label: "Notes", icon: AlignLeft, count: allTexts.length },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">My Space</h2>
          <p className="section-subtitle">Bookmarks, notes &amp; files</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="myspace-tabs">
        {TABS.map(({ id, label, icon: Icon, count }) => (
          <button
            key={id}
            className={`myspace-tab ${activeTab === id ? "active" : ""}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={14} />
            {label}
            <span className="myspace-tab-count">{count}</span>
          </button>
        ))}
      </div>

      {/* Files tab */}
      {activeTab === "files" && (
        allFiles.length === 0
          ? <div className="empty-state"><p>No files yet. Add entries to myFiles in myData.js and place files in public/myfiles/</p></div>
          : (
            <>
              <p className="my-files-hint"><code>public/myfiles/</code></p>
              <div className="my-files-grid">
                {allFiles.map((file) => <FileCard key={file.id} file={file} />)}
              </div>
            </>
          )
      )}

      {/* Links tab */}
      {activeTab === "links" && (
        allLinks.length === 0
          ? <div className="empty-state"><p>No links yet. Add type: "link" or type: "both" entries in myData.js</p></div>
          : <div className="my-links-grid">
              {links.map((item) => <LinkCard key={item.id} item={item} />)}
              {boths.map((item) => <BothCard key={item.id} item={item} />)}
            </div>
      )}

      {/* Notes tab */}
      {activeTab === "notes" && (
        allTexts.length === 0
          ? <div className="empty-state"><p>No notes yet. Add type: "text" entries in myData.js</p></div>
          : <div className="my-texts-grid">
              {allTexts.map((item) => <TextCard key={item.id} item={item} />)}
            </div>
      )}
    </section>
  );
}
