import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in view.
 * @param {string[]} sectionIds
 * @param {string}   rootMargin  IntersectionObserver rootMargin
 */
export function useScrollSpy(sectionIds = [], rootMargin = '-35% 0px -55% 0px') {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin },
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
