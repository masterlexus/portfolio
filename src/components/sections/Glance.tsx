import { profile } from '../../data/profile';
import type { ExperienceEntry } from '../../types';
import { useExperienceFocus } from '../../hooks/useExperienceFocus';
import {
  formatRange,
  formatYearRange,
  nowYM,
  toMonthIndex,
} from '../../lib/dates';
import Section from '../layout/Section';

const FIRST_YEAR = 2022;
const LAST_YEAR = 2027;
const DOMAIN_START = FIRST_YEAR * 12;
const DOMAIN_END = (LAST_YEAR + 1) * 12;
const DOMAIN = DOMAIN_END - DOMAIN_START;
const YEARS = Array.from(
  { length: LAST_YEAR - FIRST_YEAR + 1 },
  (_, i) => FIRST_YEAR + i,
);
/** Entries this short (in months) render as a thin mark with an outside label. */
const MARK_MAX_MONTHS = 2;

const LANES: { type: ExperienceEntry['type']; label: string }[] = [
  { type: 'education', label: 'Education' },
  { type: 'work', label: 'Work' },
];

interface Bar {
  entry: ExperienceEntry;
  start: number;
  end: number; // exclusive month index
  row: number;
}

const pct = (month: number) =>
  `${((Math.min(Math.max(month, DOMAIN_START), DOMAIN_END) - DOMAIN_START) / DOMAIN) * 100}%`;

function barSpan(entry: ExperienceEntry) {
  const start = toMonthIndex(entry.start);
  const end = toMonthIndex(entry.end ?? nowYM()) + 1;
  return { start, end };
}

/** Greedy interval packing: each bar goes in the first sub-row it doesn't overlap. */
function packLane(entries: ExperienceEntry[]): { bars: Bar[]; rows: number } {
  const rowEnds: number[] = [];
  const bars = [...entries]
    .map((entry) => ({ entry, ...barSpan(entry) }))
    .sort((a, b) => a.start - b.start)
    .map((b) => {
      let row = rowEnds.findIndex((end) => end <= b.start);
      if (row === -1) row = rowEnds.length;
      rowEnds[row] = b.end;
      return { ...b, row };
    });
  return { bars, rows: Math.max(rowEnds.length, 1) };
}

const NOW_MONTH = toMonthIndex(nowYM()) + 0.5;
const ROW_H = 30;
const ROW_GAP = 6;

function GridLines() {
  return (
    <>
      {YEARS.map((y) => (
        <span
          key={y}
          className="absolute inset-y-0 w-px bg-border"
          style={{ left: pct(y * 12) }}
          aria-hidden="true"
        />
      ))}
      <span
        className="absolute inset-y-0 w-px bg-accent"
        style={{ left: pct(NOW_MONTH) }}
        aria-hidden="true"
      />
    </>
  );
}

function scrollToExperience(id: string) {
  document
    .getElementById(`exp-${id}`)
    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function TimelineBar({ bar }: { bar: Bar }) {
  const { hoveredId, setHovered, open } = useExperienceFocus();
  const { entry } = bar;
  const isMark = bar.end - bar.start <= MARK_MAX_MONTHS;
  const active = hoveredId === entry.id;
  const dimmed = hoveredId !== null && !active;

  const tone = entry.current
    ? 'border-accent bg-accentSurface text-accent'
    : active
      ? 'border-accent bg-bgPrimary text-textPrimary'
      : 'border-border bg-surface text-textPrimary';

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(entry.id)}
      onMouseLeave={() => setHovered(null)}
      onFocus={(e) => e.currentTarget.matches(':focus-visible') && setHovered(entry.id)}
      onBlur={() => setHovered(null)}
      onClick={() => {
        open(entry.id);
        scrollToExperience(entry.id);
      }}
      aria-label={`${entry.title}, ${entry.organization}, ${formatRange(entry.start, entry.end)}`}
      className={`group absolute flex items-center transition-opacity duration-150 ${dimmed ? 'opacity-40' : 'opacity-100'}`}
      style={{
        left: pct(bar.start),
        width: pct(DOMAIN_START + (bar.end - bar.start)),
        top: bar.row * (ROW_H + ROW_GAP),
        height: ROW_H,
      }}
    >
      {isMark ? (
        <>
          <span
            className={`h-2 w-full rounded-sm transition-colors ${active ? 'bg-accent' : 'bg-textMuted'}`}
          />
          <span
            className={`absolute left-full ml-2 whitespace-nowrap text-xs transition-colors ${active ? 'text-textPrimary' : 'text-textMuted'}`}
          >
            {entry.shortLabel}
          </span>
        </>
      ) : (
        <span
          className={`flex h-full w-full items-center overflow-hidden rounded-md border px-2 text-left text-xs transition-colors ${tone}`}
        >
          <span className="truncate">{entry.shortLabel}</span>
        </span>
      )}
    </button>
  );
}

function DesktopTimeline() {
  const lanes = LANES.map((lane) => ({
    ...lane,
    ...packLane(profile.experience.filter((e) => e.type === lane.type)),
  }));

  return (
    <div className="hidden md:block">
      {/* Axis */}
      <div className="flex">
        <div className="w-24 shrink-0" />
        <div className="relative h-7 flex-1">
          {YEARS.map((y) => (
            <span
              key={y}
              className="absolute bottom-2 pl-1.5 font-mono text-[11px] text-textMuted"
              style={{ left: pct(y * 12) }}
            >
              {y}
            </span>
          ))}
          <span
            className="absolute bottom-2 -translate-x-full pr-1.5 font-mono text-[11px] text-accent"
            style={{ left: pct(NOW_MONTH) }}
          >
            now
          </span>
          <GridLines />
        </div>
      </div>

      {lanes.map((lane, i) => (
        <div
          key={lane.type}
          className={`flex ${i > 0 ? 'border-t border-border' : ''}`}
        >
          <div className="flex w-24 shrink-0 items-start pt-[22px] text-xs text-textMuted">
            {lane.label}
          </div>
          <div className="relative flex-1 py-4">
            <GridLines />
            <div
              className="relative"
              style={{ height: lane.rows * ROW_H + (lane.rows - 1) * ROW_GAP }}
            >
              {lane.bars.map((bar) => (
                <TimelineBar key={bar.entry.id} bar={bar} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileTimeline() {
  const entries = [...profile.experience].sort(
    (a, b) => toMonthIndex(b.start) - toMonthIndex(a.start),
  );

  return (
    <ul className="divide-y divide-border border-y border-border md:hidden">
      {entries.map((entry) => {
        const { start, end } = barSpan(entry);
        return (
          <li key={entry.id}>
            <button
              type="button"
              onClick={() => {
                useExperienceFocus.getState().open(entry.id);
                scrollToExperience(entry.id);
              }}
              className="grid w-full grid-cols-[92px_1fr_72px] items-center gap-3 py-2.5 text-left"
            >
              <span className="font-mono text-[11px] text-textMuted">
                {formatYearRange(entry.start, entry.end)}
              </span>
              <span
                className={`truncate text-sm ${entry.current ? 'text-accent' : 'text-textPrimary'}`}
              >
                {entry.shortLabel}
              </span>
              <span
                className="relative h-1.5 rounded-full bg-border"
                aria-hidden="true"
              >
                <span
                  className={`absolute inset-y-0 rounded-full ${entry.current ? 'bg-accent' : 'bg-textMuted'}`}
                  style={{
                    left: pct(start),
                    width: `max(3px, ${pct(DOMAIN_START + end - start)})`,
                  }}
                />
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default function Glance() {
  return (
    <Section id="glance" label="At a glance">
      <DesktopTimeline />
      <MobileTimeline />
    </Section>
  );
}
