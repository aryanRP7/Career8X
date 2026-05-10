// ─────────────────────────────────────────────
//  EXPORT UTILITIES — CSV, PDF, DOC
// ─────────────────────────────────────────────

// ── CSV ──────────────────────────────────────
export function exportToCSV(data, filename = "export.csv") {
  if (!data || data.length === 0) return;
  const headers = Object.keys(data[0]);
  const rows = [
    headers.join(","),
    ...data.map((row) =>
      headers.map((h) => {
        const val = row[h] ?? "";
        const str = Array.isArray(val) ? val.join("; ") : String(val);
        return `"${str.replace(/"/g, '""')}"`;
      }).join(",")
    ),
  ];
  triggerDownload(
    new Blob(["\ufeff" + rows.join("\n")], { type: "text/csv;charset=utf-8;" }),
    filename
  );
}

// ── PDF (print dialog) ────────────────────────
export function exportToPDF(data, title = "Career8X Export") {
  const win = window.open("", "_blank");
  if (!win) { alert("Allow pop-ups to export PDF."); return; }

  const cols  = data.length ? Object.keys(data[0]) : [];
  const thead = cols.map((c) => `<th>${c}</th>`).join("");
  const tbody = data.map((row) =>
    `<tr>${cols.map((c) => {
      const val = row[c] ?? "";
      const str = String(val);
      const isLink  = c.toLowerCase().includes("link") || c.toLowerCase().includes("url");
      const isNotes = c.toLowerCase().includes("notes");
      const cell    = isLink && str ? `<a href="${str}">${str}</a>` : str;
      return `<td${isNotes ? ' class="notes"' : ""}>${cell}</td>`;
    }).join("")}</tr>`
  ).join("");

  win.document.write(`<!DOCTYPE html><html><head>
<meta charset="utf-8"><title>${title}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&family=DM+Mono&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'DM Sans',Calibri,sans-serif;font-size:12px;color:#18181e;padding:32px 40px;background:#fff}
  h1{font-size:20px;font-weight:700;color:#6254e8;margin-bottom:4px}
  .meta{font-size:10px;color:#888;margin-bottom:24px;font-family:monospace}
  table{width:100%;border-collapse:collapse}
  th{background:#6254e8;color:#fff;font-size:10px;font-weight:600;text-align:left;padding:8px 10px;text-transform:uppercase;letter-spacing:.05em}
  td{padding:8px 10px;border-bottom:1px solid #e8e8f0;font-size:11px;vertical-align:top;word-break:break-word}
  tr:nth-child(even) td{background:#f8f8fc}
  td.notes{font-style:italic;color:#6254e8}
  a{color:#6254e8;word-break:break-all}
  @media print{body{padding:16px}}
</style></head><body>
<h1>${title}</h1>
<p class="meta">Exported on ${fmtDate()}</p>
<table><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table>
</body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 500);
}

// ── DOC (Word-compatible) ─────────────────────
// Uses a proper bordered table that Word renders correctly
export function exportToDoc(data, title = "Career8X Export") {
  if (!data || data.length === 0) return;
  const cols = Object.keys(data[0]);

  const colWidth = Math.floor(9000 / cols.length); // mso column width in twips

  const thead = `<tr>${cols.map((c) =>
    `<td style="background:#6254e8;padding:6pt 8pt;border:1pt solid #4a3eb8;">
       <p style="color:#ffffff;font-weight:bold;font-size:9pt;margin:0;font-family:Calibri;">${c}</p>
     </td>`
  ).join("")}</tr>`;

  const tbody = data.map((row, ri) => {
    const bg = ri % 2 === 0 ? "#ffffff" : "#f5f5fc";
    return `<tr>${cols.map((c) => {
      const val  = row[c] ?? "";
      const str  = String(val);
      const isLink  = c.toLowerCase().includes("link") || c.toLowerCase().includes("url");
      const isNotes = c.toLowerCase().includes("notes");
      const color   = isNotes ? "color:#6254e8;font-style:italic;" : "color:#18181e;";
      const cell    = isLink && str
        ? `<a href="${str}" style="color:#6254e8;word-break:break-all;">${str}</a>`
        : str;
      return `<td style="background:${bg};padding:5pt 8pt;border:1pt solid #ddd;vertical-align:top;">
        <p style="font-size:10pt;margin:0;font-family:Calibri;${color}">${cell}</p>
      </td>`;
    }).join("")}</tr>`;
  }).join("");

  const html = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8"><title>${title}</title>
<!--[if gte mso 9]><xml>
<w:WordDocument>
  <w:View>Print</w:View>
  <w:Zoom>90</w:Zoom>
  <w:DoNotOptimizeForBrowser/>
</w:WordDocument>
<o:OfficeDocumentSettings>
  <o:TargetScreenSize>1024x768</o:TargetScreenSize>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style>
  @page { size:A4; margin:1cm 1.5cm 1cm 1.5cm; mso-page-orientation:portrait; }
  body  { font-family:Calibri,sans-serif; font-size:10pt; color:#18181e; margin:0; padding:0; }
  h1    { font-size:16pt; font-weight:bold; color:#6254e8; margin:0 0 3pt; }
  .meta { font-size:8pt; color:#888; margin:0 0 12pt; font-family:"Courier New",monospace; }
  table { border-collapse:collapse; width:100%; table-layout:fixed; }
  col.c-cat  { width:70pt; }
  col.c-top  { width:90pt; }
  col.c-sec  { width:80pt; }
  col.c-note { width:auto; }
  td,th { word-wrap:break-word; overflow-wrap:break-word; }
  a     { color:#6254e8; word-break:break-all; }
  p     { margin:0; }
</style>
</head>
<body>
<h1>${title}</h1>
<p class="meta">Exported on ${fmtDate()}</p>
<br>
<table>
  <colgroup>
    <col class="c-cat"/><col class="c-top"/><col class="c-sec"/><col class="c-note"/>
  </colgroup>
  ${thead}${tbody}
</table>
</body></html>`;

  triggerDownload(
    new Blob(["\ufeff", html], { type: "application/vnd.ms-word;charset=utf-8;" }),
    `${title.replace(/[^a-z0-9]/gi, "_")}.doc`
  );
}

// ── Helpers ───────────────────────────────────
function fmtDate() {
  return new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a   = document.createElement("a");
  a.href     = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// kept for legacy callers
export function buildHTMLTable() { return ""; }
