// Pagination filter chip — shows beside view toggle
// Automatically builds page options based on total count

export default function PaginationChip({ total, pageSize, currentPage, onChange }) {
  if (total <= pageSize) return null; // hide if fits on one page

  const pageCount = Math.ceil(total / pageSize);
  const options = [{ label: "Show All", value: -1 }];

  for (let i = 0; i < pageCount; i++) {
    const start = i * pageSize + 1;
    const end   = Math.min((i + 1) * pageSize, total);
    options.push({ label: `${start}–${end}`, value: i });
  }

  return (
    <div className="pagination-chip-wrap">
      <select
        className="pagination-chip-select"
        value={currentPage}
        onChange={(e) => onChange(Number(e.target.value))}
        title="Show entries"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}