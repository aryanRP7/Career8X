export function copyToClipboard(text) {
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
}

export function highlight(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

export function matchesSearch(job, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    job.companyName.toLowerCase().includes(q) ||
    job.jobTitle.toLowerCase().includes(q) ||
    job.location.toLowerCase().includes(q) ||
    job.tags.some((t) => t.toLowerCase().includes(q)) ||
    job.jobDescription.some((d) => d.toLowerCase().includes(q))
  );
}
