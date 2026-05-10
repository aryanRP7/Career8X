import { useLocalStorage } from "./useLocalStorage";

export function useJobState(version = "v1") {
  const [favorites, setFavorites] = useLocalStorage(`dashboard_favorites_${version}`, []);
  const [applied, setApplied] = useLocalStorage(`dashboard_applied_${version}`, []);
  const [saved, setSaved] = useLocalStorage(`dashboard_saved_${version}`, []);

  const toggle = (list, setList, id) => {
    setList((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return {
    favorites,
    applied,
    saved,
    toggleFavorite: (id) => toggle(favorites, setFavorites, id),
    toggleApplied: (id) => toggle(applied, setApplied, id),
    toggleSaved: (id) => toggle(saved, setSaved, id),
    isFavorite: (id) => favorites.includes(id),
    isApplied: (id) => applied.includes(id),
    isSaved: (id) => saved.includes(id),
  };
}
