import SectionHeader from './ui/SectionHeader';
import Timeline      from './ui/Timeline';
import { EDUCATION } from '../data/portfolio';

export default function Education() {
  return (
    <section id="edu" className="dark:bg-[#09090b] bg-slate-50">
      <div className="max-w-[1060px] mx-auto section-pad">
        <SectionHeader
          eyebrow="Education"
          title="Academic"
          accent="Foundation"
          subtitle="Rigorous German-Egyptian engineering curriculum with international research collaboration."
        />
        <Timeline items={EDUCATION} isEdu />
      </div>
    </section>
  );
}
