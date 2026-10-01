import React from 'react';
import WikiArticle from '../components/WikiArticle';
import { useLanguage } from '../context/LanguageContext';

export default function Survey() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle
      title={zh ? '问卷调查' : 'Survey'}
      lead={
        zh
          ? '面向 MtX 群体的调查与数据收集。我们希望通过真实数据，让这个群体的需求被看见。'
          : 'Surveys and data collection for the MtX community — so that our needs can be seen through real data.'
      }
    >
      <blockquote className="info-quote">
        {zh ? (
          <>
            <strong>当前状态：</strong>暂无进行中的问卷。有新的问卷上线时，会在此页面公布入口与有效期。
          </>
        ) : (
          <>
            <strong>Current status:</strong> there is no survey running right now. When one opens, its
            link and closing date will be announced on this page.
          </>
        )}
      </blockquote>

      <section className="section">
        <h2>{zh ? '1. 这个页面用来做什么' : '1. What this page is for'}</h2>
        <ul>
          <li>
            {zh
              ? '发布面向 MtX 群体的问卷，收集用药、就医、心理健康与社会处境等主题的真实数据。'
              : 'Publish surveys for the MtX community, gathering real data on medication, healthcare access, mental health and social conditions.'}
          </li>
          <li>
            {zh
              ? '把调查结果整理成便于引用的图文，供社群、研究者与媒体参考。'
              : 'Turn the results into citable summaries for the community, researchers and media.'}
          </li>
          <li>
            {zh
              ? '为本站的内容建设提供依据——写什么、优先写什么，由数据说话。'
              : 'Inform what this site should write next — the data decides what matters most.'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '2. 数据与隐私原则' : '2. Data and privacy principles'}</h2>
        <ul>
          <li>
            {zh
              ? '最小化收集：只问与研究目的直接相关的问题，不收集身份证号、精确住址等可定位身份的信息。'
              : 'Data minimisation: we ask only what the research question requires, and never collect ID numbers or precise addresses.'}
          </li>
          <li>
            {zh
              ? '匿名优先：问卷默认匿名，不要求登录，不记录不必要的设备指纹。'
              : 'Anonymous by default: no login required, no unnecessary device fingerprinting.'}
          </li>
          <li>
            {zh
              ? '结果公开、可核验：发布聚合统计而非个体原始回答；任何个体数据都不会单独展示。'
              : 'Open, verifiable results: we publish aggregate statistics, never individual raw responses.'}
          </li>
          <li>
            {zh
              ? '可撤回：如果技术上可行，你可以在截止日期前要求删除自己的回答。'
              : 'Withdrawable: where technically possible, you may ask us to delete your response before the closing date.'}
          </li>
          <li>
            {zh
              ? '第三方面向：本站不参与、不背书任何以商业营销或身份追踪为目的的问卷。'
              : 'No commercial use: we do not run or endorse surveys aimed at marketing or identity tracking.'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '3. 为什么社群数据重要' : '3. Why community data matters'}</h2>
        <p>
          {zh
            ? 'MtX 群体规模小、分布分散，在公开统计中往往被并入「跨性别」总体而失去可见度，导致医疗资源、政策讨论与学术研究都缺少针对性依据。真实、可引用的社群自采样数据，是我们争取被看见的基础材料之一。'
            : 'The MtX community is small and dispersed, and is usually folded into the general “transgender” category in public statistics — losing visibility, and leaving healthcare planning, policy debate and academic research without targeted evidence. Honest, citable community data is one of the basic tools we have for being seen.'}
        </p>
        <p className="subtitle">
          {zh
            ? '需要说明的是：自采样问卷存在样本偏差，不能等同于流行病学调查。我们会在发布结果时一并说明其局限。'
            : 'A caveat: self-selected surveys carry sampling bias and are not equivalent to epidemiological studies. We state these limitations alongside every result we publish.'}
        </p>
      </section>

      <section className="section">
        <h2>{zh ? '4. 如何参与' : '4. How to take part'}</h2>
        <ul>
          <li>
            {zh
              ? '填写问卷：问卷入口开放后会在本页顶部公布。'
              : 'Take a survey: the link appears at the top of this page once one is open.'}
          </li>
          <li>
            {zh
              ? '提议题目：你认为哪些问题值得被调查？欢迎通过「联系」页面告诉我们。'
              : 'Suggest questions: what do you think deserves to be studied? Tell us via the Contact page.'}
          </li>
          <li>
            {zh
              ? '协助研究：如果你有统计或问卷设计经验，欢迎在 GitHub 上参与。'
              : 'Help with research: if you have survey-design or statistics experience, join us on GitHub.'}
          </li>
        </ul>
        <p>
          <a href="#/contact">{zh ? '前往联系页面 →' : 'Go to the contact page →'}</a>
        </p>
      </section>

      <div className="section placeholder">
        <span className="placeholder-badge">{zh ? '内容建设中' : 'Content in progress'}</span>
        <p className="placeholder-text">
          {zh
            ? '首份问卷正在设计中，结果展示区也尚未上线，欢迎参与共建。'
            : 'The first survey is being designed and the results section is not live yet. Contributions are welcome.'}
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
