import { useState } from "react";
import { Globe, Mail, Phone, Copy, Check, ExternalLink, MapPin } from "lucide-react";
import { copyToClipboard } from "../utils/helpers";
import ExportButton from "./ExportButton";
import MyNotes from "./MyNotes";
import ViewToggle from "./ViewToggle";
import PaginationChip from "./PaginationChip";

const PAGE_SIZE = 10;

function ContactRow({ icon: Icon, value, copyable }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await copyToClipboard(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  if (!value || value === "—") return null;
  return (
    <div className="contact-row">
      <Icon size={14} className="contact-icon" />
      <span className="contact-value">{value}</span>
      {copyable && (
        <button className="mini-copy-btn" onClick={handleCopy}>
          {copied ? <Check size={12} /> : <Copy size={12} />}
        </button>
      )}
    </div>
  );
}

function ConsultancyCard({ item, index }) {
  return (
    <div className="consultancy-card">
      <div className="card-number">#{index}</div>
      <div className="consultancy-header">
        <div className="consultancy-avatar">{item.name.charAt(0)}</div>
        <div className="consultancy-title-group">
          <h3 className="consultancy-name">{item.name}</h3>
          {item.contactPerson && <p className="consultancy-contact-person">{item.contactPerson}</p>}
        </div>
        {item.website && (
          <a href={item.website} target="_blank" rel="noopener noreferrer"
             className="website-link" title="Visit website">
            <ExternalLink size={15} />
          </a>
        )}
      </div>
      {item.location && (
        <div className="card-meta" style={{ marginTop: "4px" }}>
          <span className="meta-chip"><MapPin size={12} /> {item.location}</span>
        </div>
      )}
      <div className="contact-list">
        {item.email   && <ContactRow icon={Mail}  value={item.email}   copyable />}
        {item.phone   && <ContactRow icon={Phone} value={item.phone}   copyable />}
        {item.website && <ContactRow icon={Globe} value={item.website} copyable />}
      </div>
      {item.myNotes && <MyNotes text={item.myNotes} />}
    </div>
  );
}

export default function ConsultancySection({ consultancies, searchQuery, view, setView }) {
  const [page, setPage] = useState(-1);

  const filtered = consultancies.filter((c) => {
    const q = searchQuery.toLowerCase();
    return !q ||
      (c.name          && c.name.toLowerCase().includes(q))          ||
      (c.contactPerson && c.contactPerson.toLowerCase().includes(q)) ||
      (c.location      && c.location.toLowerCase().includes(q))      ||
      (c.email         && c.email.toLowerCase().includes(q));
  });

  const paginated = page === -1
    ? filtered
    : filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const exportData = filtered.map((c, i) => {
    const row = { "#": i + 1 };
    if (c.name)          row["Agency Name"]    = c.name;
    if (c.contactPerson) row["Contact Person"] = c.contactPerson;
    if (c.location)      row["Location"]       = c.location;
    if (c.email)         row["Email"]          = c.email;
    if (c.phone)         row["Phone"]          = c.phone;
    if (c.website)       row["Website"]        = c.website;
    if (c.myNotes)       row["My Notes"]       = c.myNotes;
    return row;
  });

  const gridClass = view === "list" ? "cards-list" : view === "compact" ? "cards-compact" : "cards-grid";

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Consultancy Contacts</h2>
          <p className="section-subtitle">
            {filtered.length} contact{filtered.length !== 1 ? "s" : ""}
            {page !== -1 && ` · showing ${paginated.length}`}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <PaginationChip
            total={filtered.length}
            pageSize={PAGE_SIZE}
            currentPage={page}
            onChange={setPage}
          />
          <ViewToggle view={view} setView={setView} />
          <ExportButton label="Consultancy Contacts" csvData={exportData} />
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="empty-state"><p>No contacts match your search.</p></div>
      ) : (
        <div className={gridClass}>
          {paginated.map((c, i) => (
            <ConsultancyCard key={c.id} item={c} index={i + 1} />
          ))}
        </div>
      )}
    </section>
  );
}