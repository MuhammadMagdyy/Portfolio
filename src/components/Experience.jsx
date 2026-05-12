import SectionHeader from './ui/SectionHeader';
import Timeline      from './ui/Timeline';
import { EXPERIENCE } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="exp" className="dark:bg-zinc-900/30 bg-zinc-50/60">
      <div className="max-w-[1060px] mx-auto section-pad">
        <SectionHeader
          eyebrow="Work Experience"
          title="Professional"
          accent="Experience"
          subtitle="Hands-on engineering roles across AI research and enterprise ERP systems."
        />
        <Timeline items={EXPERIENCE} />
      </div>
    </section>
  );
}
