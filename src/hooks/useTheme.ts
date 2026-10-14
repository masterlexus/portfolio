import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

const darkQuery = '(prefers-color-scheme: dark)';

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove('dark', 'light');
  root.classList.add(theme);
};

const readStored = (): Theme | null => {
  try {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' || stored === 'light' ? stored : null;
  } catch {
    return null;
  }
};

const systemTheme = (): Theme =>
  window.matchMedia(darkQuery).matches ? 'dark' : 'light';

export const useTheme = create<ThemeStore>((set) => {
  const initial = readStored() ?? systemTheme();
  applyTheme(initial);

  // Follow the OS setting until the visitor picks a theme explicitly.
  window.matchMedia(darkQuery).addEventListener('change', () => {
    if (readStored()) return;
    const next = systemTheme();
    applyTheme(next);
    set({ theme: next });
  });

  return {
    theme: initial,
    toggleTheme: () =>
      set((state) => {
        const next = state.theme === 'dark' ? 'light' : 'dark';
        try {
          localStorage.setItem('theme', next);
        } catch {
          /* storage unavailable */
        }
        applyTheme(next);
        return { theme: next };
      }),
  };
});
