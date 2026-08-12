import React from 'react';
import WikiArticle from '../components/WikiArticle.jsx';

export default function Disclaimer() {
  return (
    <WikiArticle title="医学免责声明 / Medical Disclaimer">
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
    </WikiArticle>
  );
}
