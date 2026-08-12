import React, { useEffect, useRef, useState } from 'react';

export default function WikiArticle({ title, lead, children }) {
  const contentRef = useRef(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    const headings = Array.from(root.querySelectorAll('h2, h3'));
    headings.forEach((heading, i) => {
      if (!heading.id) heading.id = `section-${i + 1}`;
    });
    setToc(
      headings.map((heading) => ({
        id: heading.id,
        text: heading.textContent.trim(),
        level: heading.tagName === 'H3' ? 3 : 2,
      })),
    );

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActiveId(visible.values().next().value || '');
      },
      { rootMargin: '-80px 0px -70% 0px' },
    );
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article className="wiki-article">
      <h1 className="wiki-page-title">{title}</h1>
      {lead && <p className="wiki-page-lead">{lead}</p>}
      {toc.length > 1 && (
        <nav className="toc" aria-label="目录">
          <div className="toc-title">目录</div>
          <ul>
            {toc.map((item) => (
              <li key={item.id} className={`toc-level-${item.level}`}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'active' : ''}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="wiki-content" ref={contentRef}>
        {children}
      </div>
    </article>
  );
}
