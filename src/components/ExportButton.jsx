import { useState } from "react";
import { Download, FileSpreadsheet, FileText, FileType, X } from "lucide-react";
import { exportToCSV, exportToPDF, exportToDoc } from "../utils/exportUtils";

export default function ExportButton({ label, csvData }) {
  const [open, setOpen] = useState(false);

  const filename = `Career8X_${label.replace(/[^a-z0-9]/gi, "_")}`;
  const title    = `Career8X — ${label}`;

  const handleCSV = () => {
    exportToCSV(csvData, `${filename}.csv`);
    setOpen(false);
  };

  const handlePDF = () => {
    exportToPDF(csvData, title);
    setOpen(false);
  };

  const handleDoc = () => {
    exportToDoc(csvData, title);
    setOpen(false);
  };

  return (
    <div className="export-wrap">
      <button className="export-btn" onClick={() => setOpen(!open)}>
        <Download size={14} />
        Export
      </button>

      {open && (
        <>
          <div className="export-backdrop" onClick={() => setOpen(false)} />
          <div className="export-dropdown">
            <div className="export-dropdown-header">
              <span>Export as</span>
              <button className="export-close" onClick={() => setOpen(false)}><X size={13} /></button>
            </div>
            <button className="export-option" onClick={handleCSV}>
              <FileSpreadsheet size={15} className="export-option-icon spreadsheet" />
              <div>
                <div className="export-option-title">Excel / CSV</div>
                <div className="export-option-desc">Opens in Excel, Google Sheets</div>
              </div>
            </button>
            <button className="export-option" onClick={handlePDF}>
              <FileText size={15} className="export-option-icon pdf" />
              <div>
                <div className="export-option-title">PDF</div>
                <div className="export-option-desc">Save or print via browser</div>
              </div>
            </button>
            <button className="export-option" onClick={handleDoc}>
              <FileType size={15} className="export-option-icon doc" />
              <div>
                <div className="export-option-title">Word / DOC</div>
                <div className="export-option-desc">Opens in Word, Google Docs</div>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
