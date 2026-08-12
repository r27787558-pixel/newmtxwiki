import React from 'react';
import WikiArticle from '../components/WikiArticle.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Contact() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle
      title={zh ? '联系我们' : 'Contact Us'}
      lead={
        zh
          ? 'MtX.wiki 处于建设初期，非常需要大家的参与和支持。'
          : 'MtX.wiki is in its early stage and needs your participation and support.'
      }
    >
      <section className="section">
        <h2>{zh ? '联系站长' : 'Contact the maintainer'}</h2>
        <p>{zh ? '有意共建本站，或有任何建议、反馈，欢迎通过 QQ 联系站长：' : 'Interested in building this site together, or have any suggestions or feedback? Reach out via QQ:'}</p>
        <div className="contact-card">
          <span className="contact-label">{zh ? 'QQ' : 'QQ'}:</span>
          <strong className="contact-value">2132248873</strong>
          <span className="contact-hint">
            {zh ? '（在 QQ 中搜索该号码添加好友）' : '(search this number in QQ to add as a friend)'}
          </span>
        </div>
      </section>

      <section className="section">
        <h2>{zh ? '参与贡献' : 'Contribute'}</h2>
        <p>
          {zh
            ? '本站是开源项目，欢迎通过 GitHub 提交内容、修复问题或提出改进建议：'
            : 'This site is open source. You are welcome to contribute content, report issues, or suggest improvements on GitHub:'}
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/r27787558-pixel/newmtxwiki"
              target="_blank"
              rel="noreferrer"
            >
              github.com/r27787558-pixel/newmtxwiki
            </a>
          </li>
          <li>
            <a
              href="https://github.com/r27787558-pixel/newmtxwiki/issues"
              target="_blank"
              rel="noreferrer"
            >
              {zh ? '提交 Issue（建议 / 反馈）' : 'Open an Issue (suggestions / feedback)'}
            </a>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '紧急情况' : 'Emergencies'}</h2>
        <blockquote className="info-quote">
          {zh
            ? '本站提供的信息不能替代专业医疗帮助。若您正面临健康或安全危急，请立即拨打本地紧急救援电话（例如中国大陆 120 或 119）。'
            : 'Information on this site is not a substitute for professional medical help. If you are facing a health or safety emergency, call your local emergency number immediately (e.g. 120 or 119 in mainland China).'}
        </blockquote>
      </section>
    </WikiArticle>
  );
}
