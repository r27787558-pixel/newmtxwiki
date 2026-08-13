import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Contributor } from '../types';

function getContributors(zh: boolean): Contributor[] {
  return [
    {
      name: 'r27787558-pixel',
      role: zh ? '站长 · 项目维护者' : 'Maintainer · Site owner',
      desc: zh
        ? '发起并维护 MtX.wiki 项目。有意共建本站，欢迎通过 QQ 联系交流。'
        : 'Founded and maintains the MtX.wiki project. Feel free to reach out via QQ if you want to help build the site.',
      links: [
        { kind: 'link', text: 'GitHub', href: 'https://github.com/r27787558-pixel/', external: true },
        { kind: 'qq', text: '2132248873' },
      ],
    },
    {
      name: 'MCdianhe',
      role: zh ? '重要贡献者' : 'Contributor',
      desc: zh
        ? '参与网站内容建设与推广，是本站的重要贡献者。'
        : 'Contributes to content building and promotion — an important contributor to this site.',
      links: [
        { kind: 'link', text: 'GitHub', href: 'https://github.com/mcdianhe', external: true },
        { kind: 'link', text: 'Bilibili', href: 'https://space.bilibili.com/1017760896', external: true },
        { kind: 'qq', text: '2937498939' },
        { kind: 'mail', text: 'mcdianhei@qq.com', href: 'mailto:mcdianhei@qq.com' },
      ],
    },
  ];
}

export default function Contributors() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';
  const [copied, setCopied] = useState<string | null>(null);
  const contributors = getContributors(zh);

  const copyQQ = (value: string) => {
    try {
      navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="wiki-home">
      <h1 className="wiki-page-title">{zh ? '贡献者名单' : 'Contributors'}</h1>
      <p className="wiki-page-lead">
        {zh
          ? '感谢每一位为 MtX.wiki 付出时间与热心的朋友。'
          : 'Thank you to everyone who has dedicated time and care to MtX.wiki.'}
      </p>

      <div className="contributor-grid">
        {contributors.map((c) => (
          <div key={c.name} className="contributor-card">
            <div className="contributor-top">
              <span className="contributor-avatar">{c.name[0].toUpperCase()}</span>
              <div className="contributor-info">
                <h3 className="contributor-name">{c.name}</h3>
                <span className="contributor-role">{c.role}</span>
              </div>
            </div>
            <p className="contributor-desc">{c.desc}</p>
            <div className="contributor-links">
              {c.links.map((link) => {
                if (link.kind === 'qq') {
                  return (
                    <button
                      key={link.kind}
                      type="button"
                      className="contributor-link"
                      onClick={() => copyQQ(link.text)}
                      title={zh ? '点击复制 QQ 号码' : 'Click to copy the QQ number'}
                    >
                      {`QQ ${link.text}`}
                      {copied === link.text && <span className="copied-tip">{zh ? '已复制' : 'Copied'}</span>}
                    </button>
                  );
                }
                return (
                  <a
                    key={link.kind}
                    className="contributor-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.text}
                    {link.external && <span className="link-arrow">↗</span>}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <section className="section">
        <h2>{zh ? '你也可以成为贡献者' : 'You can be a contributor too'}</h2>
        <div className="content">
          <p>
            {zh
              ? '有意共建本站，欢迎通过'
              : 'Interested in building this site together? Reach out via '}
            <a href="#/contact">{zh ? '联系页面' : 'the contact page'}</a>
            {zh ? '或 GitHub 与我们联系。' : ' or GitHub.'}
          </p>
        </div>
      </section>
    </div>
  );
}
