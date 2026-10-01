import React from 'react';
import WikiArticle from '../components/WikiArticle';
import { useLanguage } from '../context/LanguageContext';

export default function Guide() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle
      title={zh ? '生活指南' : 'Life Guide'}
      lead={
        zh
          ? '关于出柜、社会支持、日常自我照顾与常见困境的经验性建议。本页不涉及医疗方案。'
          : 'Practical guidance on coming out, social support, everyday self-care and common difficulties. No medical protocols here.'
      }
    >
      <blockquote className="info-quote">
        {zh ? (
          <>
            本页内容来自社群经验与常识性建议，<strong>不构成心理或医疗建议</strong>。如果你正处于危机中，
            请先看<a href="#/help">《救助资源》</a>。
          </>
        ) : (
          <>
            This page draws on community experience and general common sense. It is{' '}
            <strong>not psychological or medical advice</strong>. If you are in crisis, start with{' '}
            <a href="#/help">Help Resources</a>.
          </>
        )}
      </blockquote>

      <section className="section">
        <h2>{zh ? '1. 出柜：把安全放在第一位' : '1. Coming out: safety first'}</h2>
        <ul>
          <li>
            {zh
              ? '先评估现实风险：你的经济来源、居住安排是否依赖对方？如果答案依赖，通常意味着需要先做准备。'
              : 'Assess the real risk first: does your income or housing depend on this person? If so, preparation usually comes before disclosure.'}
          </li>
          <li>
            {zh
              ? '先建立支持网，再出柜。至少先让一两个可信任的人知道，而不是独自面对所有反应。'
              : 'Build a support network before coming out. Let at least one or two trusted people know first, so you are not handling every reaction alone.'}
          </li>
          <li>
            {zh
              ? '你不需要一次性、对所有人出柜。分对象、分阶段是完全正常的做法。'
              : 'You do not have to come out to everyone at once. Doing it person by person, in stages, is completely normal.'}
          </li>
          <li>
            {zh
              ? '准备好被问到的问题，也准备好「我现在不想谈这个」这句话。'
              : 'Prepare for the questions you will get — and prepare the sentence “I don’t want to talk about this right now.”'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '2. 社会支持与社群' : '2. Social support and community'}</h2>
        <ul>
          <li>
            {zh
              ? '找到同类是最有效的缓冲之一。线上社群、线下小组、兴趣圈子都可以是入口。'
              : 'Finding peers is one of the most effective buffers. Online groups, local meetups and hobby circles are all valid entry points.'}
          </li>
          <li>
            {zh
              ? '注意社群也可能是压力源：比较、内卷与话语权争夺同样存在，必要时可以退出来休息。'
              : 'Communities can also be a source of stress — comparison, competition and status battles exist there too. It is fine to step away and rest.'}
          </li>
          <li>
            {zh
              ? '维护少数几个能说真话的关系，比认识很多人更重要。'
              : 'A few relationships where you can speak honestly matter more than knowing many people.'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '3. 日常自我照顾' : '3. Everyday self-care'}</h2>
        <ul>
          <li>
            {zh
              ? '把「过渡」拆成可完成的小步骤：证件、称呼、着装、声音、社交圈，不必同时推进。'
              : 'Break transition into completable steps: documents, name and pronouns, clothing, voice, social circle — you do not have to push them all at once.'}
          </li>
          <li>
            {zh
              ? '声音、体态这类非医疗的改变需要长期练习，进步慢是正常的。'
              : 'Non-medical changes such as voice and posture take long practice; slow progress is normal.'}
          </li>
          <li>
            {zh
              ? '睡眠、饮食与规律作息对情绪的稳定作用，往往被严重低估。'
              : 'Sleep, food and routine are usually underrated as stabilisers for mood.'}
          </li>
          <li>
            {zh
              ? '遇到歧视或骚扰时，优先保证人身安全，事后保留证据并寻求法律或社群支持。'
              : 'When facing discrimination or harassment, prioritise your physical safety, then keep evidence and seek legal or community support.'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '4. 几个常见误区' : '4. A few common myths'}</h2>
        <ul>
          <li>
            {zh
              ? '「必须完全符合某种标准才算跨性别」——不存在统一标准，也没有谁有资格给你发证。'
              : '“You must meet some standard to really be trans” — no such standard exists, and nobody is qualified to certify you.'}
          </li>
          <li>
            {zh
              ? '「只要做了某一步，一切都会好起来」——任何单一改变都解决不了所有问题。'
              : '“Once I do this one thing, everything will be fine” — no single change solves everything.'}
          </li>
          <li>
            {zh
              ? '「别人的方案可以直接照搬」——每个人的处境、身体与资源都不同。'
              : '“I can just copy someone else’s plan” — everyone’s circumstances, body and resources differ.'}
          </li>
        </ul>
      </section>

      <div className="section placeholder">
        <span className="placeholder-badge">{zh ? '内容建设中' : 'Content in progress'}</span>
        <p className="placeholder-text">
          {zh
            ? '证件与法律事务、职场与校园、家庭沟通等专题正在整理中，欢迎分享你的经验。'
            : 'Deep-dives on documents and legal matters, work and campus, and family communication are being compiled. Sharing your experience is welcome.'}
        </p>
        <p className="placeholder-hint">
          {zh ? '期待你的加入... ' : 'Your contribution is welcome... '}
          <a href="#/contributors" className="placeholder-cta">
            {zh ? '参与贡献' : 'Contribute'}
          </a>
        </p>
      </div>
    </WikiArticle>
  );
}
