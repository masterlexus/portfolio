import { create } from 'zustand';

/** Shared hover/expand state linking the timeline strip and the experience list. */
interface ExperienceFocusStore {
  hoveredId: string | null;
  openIds: string[];
  setHovered: (id: string | null) => void;
  toggleOpen: (id: string) => void;
  open: (id: string) => void;
}

export const useExperienceFocus = create<ExperienceFocusStore>((set) => ({
  hoveredId: null,
  openIds: [],
  setHovered: (id) => set({ hoveredId: id }),
  toggleOpen: (id) =>
    set((s) => ({
      openIds: s.openIds.includes(id)
        ? s.openIds.filter((x) => x !== id)
        : [...s.openIds, id],
    })),
  open: (id) =>
    set((s) => (s.openIds.includes(id) ? s : { openIds: [...s.openIds, id] })),
}));
