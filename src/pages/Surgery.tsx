import React from 'react';
import WikiArticle from '../components/WikiArticle';
import { useLanguage } from '../context/LanguageContext';

export default function Surgery() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle
      title={zh ? '手术相关' : 'Surgery'}
      lead={
        zh
          ? '关于手术的决策思路、沟通清单与准备事项。本页提供的是「如何思考与如何提问」，不构成手术建议。'
          : 'How to think about surgery, what to ask, and how to prepare. This page offers framing and questions — not surgical advice.'
      }
    >
      <blockquote className="info-quote">
        {zh ? (
          <>
            <strong>先读这一条：</strong>
            手术不可逆。本页不会推荐任何具体术式，也不能替代专业评估。任何手术决定都应由
            <strong>你本人</strong>在充分知情、并与具备资质的<strong>外科医生及精神心理科医生</strong>
            充分沟通之后作出。请同时阅读
            <a href="#/disclaimer">《医学免责声明》</a>。
          </>
        ) : (
          <>
            <strong>Read this first:</strong> surgery is irreversible. This page does not recommend any
            specific procedure and cannot replace professional assessment. Every decision should be made
            by <strong>you</strong>, fully informed, after thorough discussion with a
            <strong> qualified surgeon and mental-health professional</strong>. Please also read the{' '}
            <a href="#/disclaimer">Medical Disclaimer</a>.
          </>
        )}
      </blockquote>

      <section className="section">
        <h2>{zh ? '1. 本页覆盖什么' : '1. What this page covers'}</h2>
        <ul>
          <li>{zh ? '术前需要想清楚的问题清单' : 'A checklist of things to settle before surgery'}</li>
          <li>{zh ? '面诊外科医生时值得逐条问清的事项' : 'Questions worth asking your surgeon, one by one'}</li>
          <li>
            {zh ? '现实层面的准备（时间、陪护、费用、请假）' : 'Practical preparation (time, escort, cost, leave)'}
          </li>
          <li>
            {zh ? '术后恢复期的一般注意事项' : 'General considerations during the recovery period'}
          </li>
        </ul>
        <p className="subtitle">
          {zh
            ? '具体的术式、适应证、风险与费用差异极大，且随医疗发展不断变化，本站不在此罗列，请以主刀医生与正规医疗机构的信息为准。'
            : 'Specific procedures, indications, risks and costs vary enormously and change over time. We deliberately do not list them here — rely on your surgeon and a licensed institution.'}
        </p>
      </section>

      <section className="section">
        <h2>{zh ? '2. 做决定之前，先问自己' : '2. Ask yourself first'}</h2>
        <ul>
          <li>
            {zh
              ? '我期待手术解决的具体问题是什么？如果结果不如预期，我能接受吗？'
              : 'What specific problem do I expect surgery to solve? Could I accept it if the result differs from my expectation?'}
          </li>
          <li>
            {zh
              ? '我的动机是「我自己想要」，还是主要来自外界的压力或期待？'
              : 'Is this something I want, or mainly pressure or expectation coming from others?'}
          </li>
          <li>
            {zh
              ? '我的心理状态是否稳定到可以承担一次大手术与术后恢复？'
              : 'Is my mental state stable enough to carry a major operation and its recovery?'}
          </li>
          <li>
            {zh
              ? '我是否了解哪些部分是真正不可逆的？'
              : 'Do I understand exactly which parts are irreversible?'}
          </li>
          <li>
            {zh
              ? '如果多年以后我的认同发生变化，我会怎么看今天这个决定？'
              : 'If my sense of identity shifts years from now, how will I look back on this decision?'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '3. 面诊时值得问清的问题' : '3. Questions to ask at your consultation'}</h2>
        <ul>
          <li>
            {zh
              ? '这位医生做过多少例同类手术？并发症发生率是多少？'
              : 'How many procedures like this has this surgeon performed? What is their complication rate?'}
          </li>
          <li>
            {zh
              ? '手术具体会切除、重建或保留哪些结构？'
              : 'Exactly which structures will be removed, reconstructed, or preserved?'}
          </li>
          <li>
            {zh
              ? '常见的短期与长期并发症分别是什么？如何处理？'
              : 'What are the common short- and long-term complications, and how are they managed?'}
          </li>
          <li>
            {zh
              ? '需要住院多久？恢复期多久？多久能恢复工作或运动？'
              : 'How long is the hospital stay, the recovery period, and the time until I can work or exercise?'}
          </li>
          <li>
            {zh
              ? '术后需要长期服药、扩张或随访吗？'
              : 'Will I need long-term medication, dilation, or follow-up care afterwards?'}
          </li>
          <li>
            {zh
              ? '全部费用是多少？医保或商业保险能覆盖哪些部分？'
              : 'What is the total cost, and what will insurance cover?'}
          </li>
          <li>
            {zh
              ? '如果我对结果不满意，有哪些补救选项？'
              : 'If I am unhappy with the result, what revision options exist?'}
          </li>
        </ul>
        <p className="subtitle">
          {zh
            ? '建议把问题写在纸上带去面诊，并记录医生的回答。你有权要求充分、可理解的解释。'
            : 'Write these down and bring them to the appointment, and note the answers. You are entitled to a full explanation you can understand.'}
        </p>
      </section>

      <section className="section">
        <h2>{zh ? '4. 现实层面的准备' : '4. Practical preparation'}</h2>
        <ul>
          <li>
            {zh
              ? '时间：预留比医生所说更长的恢复期，并为复诊留出档期。'
              : 'Time: budget a longer recovery than you were told, plus time for follow-up visits.'}
          </li>
          <li>
            {zh
              ? '陪护：术后一段时间可能需要人陪同与照护，提前确认由谁承担。'
              : 'Escort: you may need someone with you for a while — decide in advance who that is.'}
          </li>
          <li>
            {zh
              ? '费用：手术费之外还有检查、住院、药品、交通与误工成本。'
              : 'Cost: beyond the surgical fee come tests, hospital stay, medication, travel and lost income.'}
          </li>
          <li>
            {zh
              ? '工作与学业：了解请假政策，必要时提前沟通。'
              : 'Work or study: understand the leave policy and raise it early if needed.'}
          </li>
          <li>
            {zh
              ? '留存记录：保留好病历、知情同意书与费用凭证。'
              : 'Records: keep your medical records, consent forms and receipts.'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '5. 术后恢复的一般原则' : '5. General principles for recovery'}</h2>
        <ul>
          <li>
            {zh
              ? '严格遵循主刀医生给出的护理与复诊安排，不要自行调整。'
              : 'Follow your surgeon’s aftercare and follow-up plan exactly; do not self-adjust it.'}
          </li>
          <li>
            {zh
              ? '出现异常症状（持续发热、剧烈疼痛、出血、伤口异常）立即联系医生或就医。'
              : 'For warning signs (persistent fever, severe pain, bleeding, abnormal wounds), contact your doctor or seek care immediately.'}
          </li>
          <li>
            {zh
              ? '恢复期情绪波动很常见，提前安排好心理支持。'
              : 'Mood swings during recovery are common — line up psychological support in advance.'}
          </li>
          <li>
            {zh ? '不要拿自己的恢复进度和别人比较。' : 'Do not compare your recovery timeline with anyone else’s.'}
          </li>
        </ul>
      </section>

      <div className="section placeholder">
        <span className="placeholder-badge">{zh ? '内容建设中' : 'Content in progress'}</span>
        <p className="placeholder-text">
          {zh
            ? '性别无效化（gender nullification）等具体方向的经验分享与社群资源正在整理中，欢迎有相关经历的伙伴参与撰写。'
            : 'Community experience and resource write-ups for specific directions such as gender nullification are being compiled. Contributions from people with lived experience are very welcome.'}
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
