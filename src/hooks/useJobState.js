import { useLocalStorage } from "./useLocalStorage";

export function useJobState(version = "v1") {
  const [favorites, setFavorites] = useLocalStorage(`dashboard_favorites_${version}`, []);
  const [applied,   setApplied]   = useLocalStorage(`dashboard_applied_${version}`,   []);
  const [saved,     setSaved]     = useLocalStorage(`dashboard_saved_${version}`,     []);

  const toggle = (setList, id) => {
    setList((prev) =>
      Array.isArray(prev)
        ? prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        : [id]
    );
  };

  return {
    favorites,
    applied,
    saved,
    toggleFavorite: (id) => toggle(setFavorites, id),
    toggleApplied:  (id) => toggle(setApplied,   id),
    toggleSaved:    (id) => toggle(setSaved,      id),
    isFavorite: (id) => Array.isArray(favorites) && favorites.includes(id),
    isApplied:  (id) => Array.isArray(applied)   && applied.includes(id),
    isSaved:    (id) => Array.isArray(saved)      && saved.includes(id),
  };
}