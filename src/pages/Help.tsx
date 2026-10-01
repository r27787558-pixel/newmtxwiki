import React from 'react';
import WikiArticle from '../components/WikiArticle';
import { useLanguage } from '../context/LanguageContext';

export default function Help() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle
      title={zh ? '救助资源' : 'Help Resources'}
      lead={
        zh
          ? '紧急情况与心理危机时的求助渠道。请优先使用你所在地区的官方号码。'
          : 'Where to turn in an emergency or a mental-health crisis. Always prefer the official numbers for your region.'
      }
    >
      <blockquote className="info-quote">
        {zh ? (
          <>
            <strong>本站无法提供实时救助。</strong>
            如果你或他人正面临即时的人身危险，请立刻拨打你所在国家或地区的紧急号码，
            不要等待网络回复。以下号码可能随时间调整，请以官方最新公布为准。
          </>
        ) : (
          <>
            <strong>This site cannot provide live emergency assistance.</strong> If you or someone else
            is in immediate danger, call your local emergency number now — do not wait for a reply
            online. The numbers below may change; always confirm with official sources.
          </>
        )}
      </blockquote>

      <section className="section">
        <h2>{zh ? '1. 紧急情况（中国大陆）' : '1. Emergencies (mainland China)'}</h2>
        <table className="med-effect-table">
          <thead>
            <tr>
              <th>{zh ? '情形' : 'Situation'}</th>
              <th>{zh ? '号码' : 'Number'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{zh ? '人身安全受威胁、正在遭受暴力或骚扰' : 'Immediate danger, violence or harassment'}</td>
              <td>
                <strong>110</strong>
              </td>
            </tr>
            <tr>
              <td>{zh ? '医疗急救、自伤或服药过量' : 'Medical emergency, self-harm or overdose'}</td>
              <td>
                <strong>120</strong>
              </td>
            </tr>
            <tr>
              <td>{zh ? '火灾、被困' : 'Fire or being trapped'}</td>
              <td>
                <strong>119</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="subtitle">
          {zh
            ? '在其他国家或地区，请拨打当地的紧急号码（如欧盟 112、美国 911 等），并说明你的位置。'
            : 'Elsewhere, dial your local emergency number (e.g. 112 in the EU, 911 in the US) and state your location clearly.'}
        </p>
      </section>

      <section className="section">
        <h2>{zh ? '2. 心理危机与情绪支持' : '2. Mental-health crisis and emotional support'}</h2>
        <ul>
          <li>
            {zh ? (
              <>
                <strong>全国统一心理援助热线 12356</strong>
                ：由卫生健康行政部门设立，提供心理咨询与危机干预。
                各地接通方式与服务时间可能不同，请以当地官方公布为准（
                <a
                  href="https://www.beijing.gov.cn/fuwu/bmfw/jhsyfwzdzx/2025gjjtr/xgxx/202505/t20250508_4084704.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  参考：北京市政府相关介绍
                </a>
                ）。
              </>
            ) : (
              <>
                <strong>National psychological assistance hotline 12356</strong> (mainland China),
                established by health authorities for counselling and crisis intervention. Routing and
                opening hours vary by region — confirm with local official sources (
                <a
                  href="https://www.beijing.gov.cn/fuwu/bmfw/jhsyfwzdzx/2025gjjtr/xgxx/202505/t20250508_4084704.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  reference: Beijing municipal government
                </a>
                ).
              </>
            )}
          </li>
          <li>
            {zh
              ? '也可以前往当地综合医院的精神科 / 心理科，或精神卫生中心就诊；急诊科同样可以处理急性心理危机。'
              : 'You can also go to the psychiatry or psychology department of a general hospital, or a mental-health centre. Emergency departments also handle acute psychiatric crises.'}
          </li>
          <li>
            {zh
              ? '如果身边有可信任的人，尽量让自己不要独处。'
              : 'If you have someone you trust, try not to be alone.'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '3. 跨性别专项支持' : '3. Trans-specific support'}</h2>
        <p>
          {zh
            ? '由社群组织运营的同伴支持渠道，通常比综合热线更了解跨性别议题：'
            : 'Peer-support channels run by community organisations usually understand trans-specific issues better than general hotlines:'}
        </p>
        <ul>
          <li>
            {zh ? (
              <>
                <strong>全国跨性别热线</strong>（跨儿心理小组等社群组织运营）—— 具体联系方式与服务时间
                请以组织官方渠道为准：
                <a href="https://kuaerxinli.org/" target="_blank" rel="noreferrer">
                  跨儿心理小组
                </a>
                。
              </>
            ) : (
              <>
                <strong>National trans hotline</strong>, run by community organisations such as Kuaer
                Psychology. For current contact details and hours, check the organisation’s official
                channels:{' '}
                <a href="https://kuaerxinli.org/" target="_blank" rel="noreferrer">
                  Kuaer Psychology
                </a>
                .
              </>
            )}
          </li>
          <li>
            {zh
              ? '社群内的互助群组也可以提供陪伴与经验参考，但请注意甄别信息来源，尤其是涉及用药的内容。'
              : 'Community mutual-aid groups can offer company and lived experience — but verify information carefully, especially anything about medication.'}
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>{zh ? '4. 其他求助方向' : '4. Other avenues'}</h2>
        <ul>
          <li>
            {zh
              ? '就医遇到歧视或拒绝诊疗：可向医院医务科、患者服务中心投诉，必要时通过法律途径维权。'
              : 'Discrimination or refusal of care: complain to the hospital’s medical affairs office or patient service centre, and seek legal remedies if needed.'}
          </li>
          <li>
            {zh
              ? '家庭暴力：可向公安机关报案，并向当地妇联、法律援助机构求助。'
              : 'Domestic violence: report to the police, and contact local women’s federations or legal-aid organisations.'}
          </li>
          <li>
            {zh
              ? '经济困难：了解当地低保、临时救助与公益基金会的援助项目。'
              : 'Financial hardship: look into local social assistance, emergency relief and NGO grant programmes.'}
          </li>
        </ul>
      </section>

      <div className="section placeholder">
        <span className="placeholder-badge">{zh ? '内容建设中' : 'Content in progress'}</span>
        <p className="placeholder-text">
          {zh
            ? '各地友善医疗机构名单、法律援助渠道与社群互助组织正在整理中，欢迎提供你所在地的资源。'
            : 'Lists of trans-friendly clinics, legal-aid channels and community groups by region are being compiled. Local resources are very welcome.'}
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
