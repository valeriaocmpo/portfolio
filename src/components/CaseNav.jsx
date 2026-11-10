import { useState, useEffect, useRef } from "react";
import "./CaseNav.css";

const TARGETS = ".case__overview, .case__section, .case__conclusion";

export default function CaseNav({ sections }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const listRef = useRef(null);

  const items = [
    "Overview",
    ...sections.map((s) => s.heading),
    "Conclusion",
  ];

  // Track which section is in view
  useEffect(() => {
    const targets = document.querySelectorAll(TARGETS);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(targets).indexOf(entry.target);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  // Keep the active pill centred inside the bar (without scrolling the page)
  useEffect(() => {
    function centreActive(behavior) {
      const list = listRef.current;
      const btn  = list?.children[activeIdx];
      if (!list || !btn) return;
      const left = btn.offsetLeft - (list.clientWidth - btn.offsetWidth) / 2;
      list.scrollTo({ left, behavior });
    }
    centreActive("smooth");
    const onResize = () => centreActive("auto");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIdx]);

  function handleClick(idx) {
    const el = document.querySelectorAll(TARGETS)[idx];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="case-nav" aria-label="Case study sections">
      <div className="case-nav__bar">
        <div className="case-nav__list" ref={listRef}>
          {items.map((label, i) => (
            <button
              key={label}
              type="button"
              className={`case-nav__item${i === activeIdx ? " active" : ""}`}
              onClick={() => handleClick(i)}
              aria-current={i === activeIdx ? "true" : undefined}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
