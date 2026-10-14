import { profile } from '../../data/profile';
import Section from '../layout/Section';

/** "Icelandic (native), English, French (fluent)" */
function formatLanguages() {
  const native = profile.languages.filter((l) => l.level === 'native');
  const other = profile.languages.filter((l) => l.level !== 'native');
  const parts = native.map((l) => `${l.language} (native)`);
  other.forEach((l, i) =>
    parts.push(i === other.length - 1 ? `${l.language} (${l.level})` : l.language),
  );
  return parts.join(', ');
}

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'From', value: profile.origin },
  { label: 'Languages', value: formatLanguages() },
  {
    label: 'Interests',
    value: profile.interests
      .map((s, i) => (i === 0 ? s : s.toLowerCase()))
      .join(', '),
  },
];

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-16">
        <div className="max-w-[620px] space-y-4 text-[17px] leading-relaxed text-textSecondary">
          {profile.about.split('\n\n').map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
        <dl className="self-start divide-y divide-border border-y border-border text-sm">
          {facts.map((f) => (
            <div key={f.label} className="grid grid-cols-[96px_1fr] gap-3 py-3">
              <dt className="text-textMuted">{f.label}</dt>
              <dd className="text-textPrimary">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
