import React from 'react';
import WikiArticle from '../components/WikiArticle.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Disclaimer() {
  const { lang } = useLanguage();
  const zh = lang === 'zh';

  return (
    <WikiArticle title={zh ? '医学免责声明 / Medical Disclaimer' : 'Medical Disclaimer'}>
      {zh ? (
        <>
          <blockquote className="info-quote">
            <strong>重要声明：</strong>
            <br />
            本站 (MtX.wiki) 所提供的所有内容，包括但不限于文字、图片、数据、建议、用药信息等，
            仅供<strong>一般性信息参考</strong>之用，<strong>绝非医疗建议、诊断或治疗意见</strong>。
            <br />
            禁止将本站内容作为做出任何医疗决定的依据。
            <br />
            您的健康决策应当由<strong>资质齐全、了解您的个人情况的合格医疗专业人士</strong>在面谈的基础上做出。
          </blockquote>

          <h2>1. 非医疗建议 (No Medical Advice)</h2>
          <p>
            本站发布的 HRT（激素替代治疗）、药物、手术等信息，均来自公开资料整理与社群经验分享，
            并未经过医疗机构或药品监管部门的审查或认证。
            <strong>任何用药或治疗决定都可能带来永久性后果，包括但不限于生育能力丧失、骨质疏松、血栓风险等。</strong>
          </p>
          <p>
            请在采取任何行动之前，<strong>务必咨询执业内分泌科、整形外科或性医学专科的医生</strong>，
            并确保该医生了解您的完整病史与当前用药情况。
          </p>

          <h2>2. 个体差异 (Individual Variation)</h2>
          <p>
            每个人的基因、体质、现有疾病及药物敏感性均有所不同。
            本站展示的“标准方案”仅为参考，
            <strong>不能保证对您个人来说是安全或适用的</strong>。
            您在执行任何建议时，需自行承担因此可能引起的全部风险与后果。
          </p>

          <h2>3. 资料准确性 (Accuracy of Information)</h2>
          <p>
            本站力求提供准确、最新的信息，但药物配方、适应症、副作用及监测方法等知识
            正在快速更新之中。
            <strong>本站不对内容的完整性、及时性或准确性作任何明示或默示的保证</strong>，
            亦不承担因依赖或使用本站内容所导致的直接或间接损失。
          </p>

          <h2>4. 第三方链接 (External Links)</h2>
          <p>
            本站可能包含指向第三方网站的链接。在您离开本站之前，请仔细阅读
            该等网站的隐私政策与免责声明，本站对第三方网站的内容或做法不承担任何责任。
          </p>

          <h2>5. 紧急情况 (Emergency)</h2>
          <p>
            若您正面临健康危急，立即停止阅读并<strong>拨打本地紧急救援电话</strong>
            (例如中国大陆 120 或 119)，或前往最近的医院就诊。
          </p>

          <hr />
          <p className="subtitle">
            访问或使用本站内容，即表示您已阅读并理解上述声明，
            并同意：<strong>本站不对因 reliance 于本站内容所采取的任何行动或不采取行动承担责任。</strong>
          </p>
          <p className="subtitle">© {new Date().getFullYear()} MtX.wiki · 本声明定期更新</p>
        </>
      ) : (
        <>
          <blockquote className="info-quote">
            <strong>Important notice:</strong>
            <br />
            All content provided by this site (MtX.wiki), including but not limited to text, images, data, advice, and
            medication information, is for <strong>general informational purposes only</strong> and is
            <strong> not medical advice, diagnosis, or treatment</strong>.
            <br />
            Do not rely on this site&apos;s content as a basis for any medical decision.
            <br />
            Your health decisions should be made on the basis of an in-person consultation with a
            <strong> qualified medical professional who knows your personal situation</strong>.
          </blockquote>

          <h2>1. No Medical Advice</h2>
          <p>
            Information on this site about HRT, medications, and surgery is compiled from public sources and community
            experience sharing. It has not been reviewed or certified by medical institutions or drug regulatory
            authorities. <strong>Any medication or treatment decision may have permanent consequences, including but not
            limited to loss of fertility, osteoporosis, and risk of thrombosis.</strong>
          </p>
          <p>
            Before taking any action, <strong>always consult an endocrinologist, plastic surgeon, or sexual health
            specialist</strong>, and make sure that doctor is aware of your full medical history and current medications.
          </p>

          <h2>2. Individual Variation</h2>
          <p>
            Everyone differs in genetics, constitution, existing conditions, and drug sensitivity. The “standard
            protocols” shown on this site are for reference only and <strong>are not guaranteed to be safe or suitable
            for you personally</strong>. You bear all risks and consequences of acting on any suggestion.
          </p>

          <h2>3. Accuracy of Information</h2>
          <p>
            This site strives to provide accurate, up-to-date information, but knowledge of drug formulations,
            indications, side effects, and monitoring methods is changing rapidly.
            <strong>This site makes no express or implied warranty as to the completeness, timeliness, or accuracy of its
            content</strong>, and assumes no responsibility for direct or indirect loss caused by relying on or using it.
          </p>

          <h2>4. External Links</h2>
          <p>
            This site may contain links to third-party websites. Before leaving this site, please read those websites&apos;
            privacy policies and disclaimers carefully. This site is not responsible for the content or practices of any
            third-party website.
          </p>

          <h2>5. Emergency</h2>
          <p>
            If you are facing a health emergency, stop reading and <strong>call your local emergency number</strong>
            (e.g. 120 or 119 in mainland China), or go to the nearest hospital.
          </p>

          <hr />
          <p className="subtitle">
            By accessing or using this site, you acknowledge that you have read and understood the above statement and
            agree that <strong>this site is not responsible for any actions taken or not taken in reliance on its content</strong>.
          </p>
          <p className="subtitle">© {new Date().getFullYear()} MtX.wiki · This statement is updated regularly</p>
        </>
      )}
    </WikiArticle>
  );
}
