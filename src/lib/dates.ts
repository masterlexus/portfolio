const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/** The site's notion of "now", as 'YYYY-MM'. */
export function nowYM(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

/** Months since year 0 for a 'YYYY-MM' string. */
export function toMonthIndex(ym: string): number {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
}

export function yearOf(ym: string): number {
  return Number(ym.slice(0, 4));
}

export function formatYM(ym: string): string {
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** "May 2026 - Sep 2026"; an open end renders as "Now". */
export function formatRange(start: string, end?: string): string {
  return `${formatYM(start)} - ${end ? formatYM(end) : 'Now'}`;
}

/** "2023 - 2026", or a single year when start and end share it. */
export function formatYearRange(start: string, end?: string): string {
  const a = yearOf(start);
  const b = end ? yearOf(end) : null;
  if (b === null) return `${a} - Now`;
  return a === b ? `${a}` : `${a} - ${b}`;
}
