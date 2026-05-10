import { useState, useRef, useEffect } from "react";
import { FileText, Eye, Download, Share2 } from "lucide-react";

const BASE = `${process.env.PUBLIC_URL || ""}/myfiles/resumes/`;

/* ── View: open PDF in new tab with stamp overlaid on the page top-right ── */
function viewWithStamp(fileUrl, company, role) {
  const win = window.open("", "_blank");
  if (!win) { window.open(fileUrl, "_blank"); return; }
  win.document.write(`<!DOCTYPE html><html><head>
<meta charset="utf-8"><title>${company} — ${role}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#3a3a3a;display:flex;flex-direction:column;height:100%;min-height:100vh;font-family:system-ui,sans-serif;overflow:hidden;position:fixed;width:100%;top:0;left:0;}
  /* Thin top navigation bar */
  .topbar{
    background:#1a1a2e;color:#fff;padding:0 20px;
    display:flex;align-items:center;justify-content:space-between;
    flex-shrink:0;height:38px;border-bottom:1px solid #333;
  }
  .topbar-left{font-size:10px;opacity:.4;letter-spacing:.04em;text-transform:uppercase}
  .topbar-right{font-size:11px;color:#888}
  /* PDF viewer area */
.viewer{position:relative;flex:1;display:flex;overflow:hidden;-webkit-overflow-scrolling:touch;}
iframe{flex:1;border:none;width:100%;display:block;height:100%;min-height:0;-webkit-overflow-scrolling:touch;}
  /* The stamp — positioned in the top-right corner of the viewer, 
     matching where top-right of the PDF page would be visible */
  .stamp{
    position:absolute;
    top:18px;
    right:28px;
    background:rgba(98,84,232,0.92);
    color:#fff;
    font-family:system-ui,sans-serif;
    font-size:11px;
    font-weight:600;
    padding:5px 12px;
    border-radius:4px;
    pointer-events:none;
    z-index:100;
    white-space:nowrap;
    box-shadow:0 2px 8px rgba(0,0,0,0.35);
    letter-spacing:.01em;
  }
  .stamp span{opacity:.7;font-weight:400;margin-right:6px}
</style></head><body>
<div class="topbar">
  <span class="topbar-left">Career8X · Reference</span>
  <span class="topbar-right">${new Date().toLocaleDateString()}</span>
</div>
<div class="viewer">
  <iframe src="${fileUrl}#toolbar=1&navpanes=0&scrollbar=1" title="Document"></iframe>
  <div class="stamp"><span>For:</span>${company} &nbsp;·&nbsp; ${role}</div>
</div>
</body></html>`);
  win.document.close();
}

/* ── Download: fetch PDF blob → direct download (no tab opened) ──
   The stamp is written as a separate overlay PDF using html2canvas approach
   is not feasible without a server. Best practical approach on GitHub Pages:
   direct blob download of the original PDF, no tab switch.              ── */
async function downloadDirect(fileUrl, filename) {
  try {
    const res  = await fetch(fileUrl);
    const blob = await res.blob();
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  } catch (_) {
    // fallback if fetch fails (e.g. CORS in local dev)
    const a    = document.createElement("a");
    a.href     = fileUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

/* ── Share menu fallback (desktop / no Web Share API) ── */
function ShareMenu({ fileUrl, filename, onClose }) {
  const fullUrl = window.location.origin.startsWith("file")
    ? fileUrl
    : `${window.location.origin}${fileUrl}`;
  const enc  = encodeURIComponent(fullUrl);
  const text = encodeURIComponent(filename);

  const opts = [
    { label: "WhatsApp",  href: `https://wa.me/?text=${text}%20${enc}` },
    { label: "Telegram",  href: `https://t.me/share/url?url=${enc}&text=${text}` },
    { label: "Email",     href: `mailto:?subject=${text}&body=${enc}` },
    { label: "Copy link", href: null,
      onClick: () => { navigator.clipboard?.writeText(fullUrl).catch(() => {}); onClose(); } },
  ];

  return (
    <div className="file-chip-share-menu">
      {opts.map((o) =>
        o.href
          ? <a key={o.label} className="file-chip-share-opt" href={o.href}
               target="_blank" rel="noopener noreferrer" onClick={onClose}>{o.label}</a>
          : <button key={o.label} className="file-chip-share-opt" onClick={o.onClick}>{o.label}</button>
      )}
    </div>
  );
}

/* ══════════════════ MAIN COMPONENT ══════════════════ */
export default function FileChip({ file, label = "Resume", company = "", role = "" }) {
  const [open,  setOpen]  = useState(false);
  const [share, setShare] = useState(false);
  const [busy,  setBusy]  = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setShare(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  if (!file) return null;

  const fileUrl = BASE + file;

  const handleView = () => {
    if (company && role) viewWithStamp(fileUrl, company, role);
    else window.open(fileUrl, "_blank");
    setOpen(false);
  };

  const handleDownload = async () => {
    setOpen(false);
    setBusy(true);
    await downloadDirect(fileUrl, file);
    setBusy(false);
  };

  const handleShare = async () => {
    const fullUrl = `${window.location.origin}${fileUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: file, text: `${label}: ${file}`, url: fullUrl });
        setOpen(false);
        return;
      } catch (_) { /* cancelled */ }
    }
    setShare(true);
  };

  const cls = label === "Cover Letter" ? "resume-btn cover-letter-btn" : "resume-btn";

  return (
    <div className="file-chip-wrap" ref={ref} style={{ position: "relative" }}>
      <button
        className={cls}
        onClick={() => { setOpen(!open); setShare(false); }}
        disabled={busy}
      >
        <FileText size={12} />
        {busy ? "…" : label}
        <span className="file-chip-caret">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="file-chip-dropdown">
          <button className="file-chip-opt" onClick={handleView}>
            <Eye size={13} /> View
          </button>
          <button className="file-chip-opt" onClick={handleDownload}>
            <Download size={13} /> Download
          </button>
          <button className="file-chip-opt" onClick={handleShare}>
            <Share2 size={13} /> Share
          </button>
          {share && (
            <ShareMenu
              fileUrl={fileUrl}
              filename={file}
              onClose={() => { setShare(false); setOpen(false); }}
            />
          )}
        </div>
      )}
    </div>
  );
}
