import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { ENDO_SOCIETY_2017, TFS_E2_DOSES, TFS_SUBLINGUAL, TFS_ORAL_VS_TRANSDERMAL } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  ENDO_SOCIETY_2017,
  TFS_E2_DOSES,
  TFS_SUBLINGUAL,
  TFS_ORAL_VS_TRANSDERMAL,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '雌二醇片',
    lead: '雌二醇片提供的是 17β-雌二醇本身，也就是人体内源的天然雌激素，不需要在体内再经过水解这一步。它是口服雌激素里最直接的一种形式：药物进入体内时，已经是最终起效的分子。理解它的关键不在于「天然」这个标签，而在于口服途径本身带来的首过效应，以及由此产生的代谢比例、肝脏负担和血栓风险。',
    hasDoses: true,
    blocks: [
      {
        heading: '基本参数',
        note: '以下参数用于快速定位这种剂型。具体剂量与用法由医生根据你的情况决定。',
        rows: [
          {
            label: '成分',
            value:
              '17β-雌二醇（常见形式为雌二醇半水合物）。这是人体内源的天然雌激素本身，不需要在体内水解转化即可与雌激素受体结合。',
          },
          {
            label: '常用规格',
            value: '1 mg、2 mg 两种片剂规格。',
          },
          {
            label: '常用剂量',
            value:
              '口服 1–4 mg/日。起始剂量、加量节奏与最终维持剂量由医生根据激素水平、身体反应与个人目标决定。',
          },
          {
            label: '给药方式',
            value:
              '口服。也存在舌下或颊黏膜含服的用法，但这属于超说明书使用，需要医生评估后决定，不应自行更改给药途径。',
          },
          {
            label: '商品名举例',
            value: 'Estrofem、诺坤复。不同地区的商品名与规格可能不同，以药盒上的通用名为准。',
          },
        ],
      },
      {
        heading: '与戊酸雌二醇片的区别',
        note: '两者最终提供的活性成分都是雌二醇，差别在于分子形式和随之而来的药代特征。戊酸雌二醇是酯，进入体内后要先被酯酶水解，才能释放出雌二醇；雌二醇片则跳过了这一步。临床上两者常被视为可以互换，实际选择往往取决于可获得性和价格，而不是药效上的显著差异。',
        cards: [
          {
            title: '戊酸雌二醇片',
            level: '需要水解的酯',
            rows: [
              {
                label: '分子形式',
                value: '本身是雌二醇的戊酸酯，不是活性分子，必须先经酯酶水解释放雌二醇。',
              },
              {
                label: '标示剂量与实际含量',
                value:
                  '分子量更大，同等标示剂量下提供的雌二醇略少。也就是说，相同毫克数的两种片剂并不完全等价。',
              },
              {
                label: '药代特征',
                value: '水解步骤在吸收后发生，带来的差异主要体现在起效与代谢细节上，临床上通常不构成显著区别。',
              },
            ],
          },
          {
            title: '雌二醇片',
            level: '已经是活性分子',
            rows: [
              {
                label: '分子形式',
                value: '已经是雌二醇本身，不需要水解步骤，进入体循环后可直接发挥作用。',
              },
              {
                label: '制剂工艺',
                value:
                  '微粉化工艺用于提高口服吸收的稳定性。雌二醇颗粒越细，溶出与吸收越一致，片与片之间的差异越小。',
              },
              {
                label: '药代特征',
                value:
                  '口服后仍要经过肝脏首过效应，大部分活性雌二醇在这一步被转化为生物活性较低的雌酮及结合物，这与戊酸雌二醇片相同。',
              },
            ],
          },
        ],
      },
      {
        heading: '口服与舌下含服',
        note: '舌下或颊黏膜含服让药物经黏膜直接进入体循环，绕过肝脏首过效应。这不是更「安全」的通用结论，而是改变了药物的代谢路径和血药曲线形状。舌下含服属于超说明书用法，需要医生评估；因为峰值高且消退快，通常需要一天内分次服用。',
        rows: [
          {
            label: '口服',
            value:
              '药物经胃肠道吸收后先经门静脉进入肝脏，首过效应明显。相当一部分雌二醇在肝脏被转化为雌酮，因此循环中雌酮与雌二醇的比例偏高。肝脏直接暴露于较高浓度的雌激素，凝血因子合成受刺激，肝脏代谢负担与血栓风险相对更高。血药浓度整体较平稳，谷峰波动小，适合每日一次给药。',
          },
          {
            label: '舌下含服',
            value:
              '药物经口腔黏膜吸收，直接进入体循环，避开首过效应，因此循环中雌酮与雌二醇的比例更接近生理状态，肝脏暴露明显减少。代价是血药峰值很高而消退很快，一天之内浓度起伏较大，通常需要分次服用才能维持接近稳定的水平。关于这种用法的长期临床结局，证据有限，多数结论来自药代动力学研究而非结局试验，因此更适合在医生指导下作为个体化选择，而不是默认方案。',
          },
        ],
      },
      {
        heading: '注意事项',
        note: '以下几条是口服雌二醇最需要长期留意的方向。它们不是恐吓，而是决定复查项目和给药途径选择的实际依据。',
        rows: [
          {
            label: '肝功能',
            value:
              '口服途径经过肝脏首过，肝脏处在相对高浓度的雌激素环境中，长期使用需定期监测肝功能。有基础肝病者应在开始前与医生讨论。',
          },
          {
            label: '血栓风险',
            value:
              '口服雌激素刺激肝脏合成凝血因子，静脉血栓风险高于透皮途径。存在血栓危险因素者（既往血栓事件、已知易栓症、一级亲属血栓史、肥胖、吸烟、长期制动等）应与医生讨论改为透皮途径，也就是凝胶或贴片。',
          },
          {
            label: '血脂',
            value:
              '口服途径对甘油三酯的影响比透皮途径明显，因此有高甘油三酯或相关代谢问题时，透皮途径通常更合适。复查时应把血脂纳入常规项目。',
          },
          {
            label: '漏服',
            value:
              '想起来时尽快补服。如果已经接近下次服药时间，就跳过这一次，按原计划服用下一剂，不要服用双倍剂量来补偿。',
          },
          {
            label: '药物相互作用',
            value:
              '部分抗癫痫药、抗结核药和某些抗生素会诱导肝酶，可能加快雌激素代谢、降低药效。开始任何新药之前，应把全部合并用药（包括中草药与非处方药）告知医生。',
          },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Estradiol Tablets',
    lead: 'Estradiol tablets supply 17β-estradiol itself — the natural estrogen the body already produces — with no hydrolysis step required inside the body. It is the most direct oral estrogen option: by the time the drug reaches the bloodstream, it is already the active molecule. The important question is not whether it is "natural" but what the oral route does to it, namely first-pass metabolism and the resulting estrone ratio, hepatic load and thrombotic risk.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Basic Parameters',
        note: 'These parameters serve to locate the formulation quickly. The specific dose and regimen are decisions for your clinician.',
        rows: [
          {
            label: 'Active ingredient',
            value:
              '17β-estradiol (commonly as estradiol hemihydrate). This is the endogenous natural estrogen itself and binds estrogen receptors without any hydrolysis step.',
          },
          {
            label: 'Common strengths',
            value: 'Tablets are commonly available in 1 mg and 2 mg strengths.',
          },
          {
            label: 'Common dose',
            value:
              '1–4 mg per day orally. The starting dose, the pace of escalation and the eventual maintenance dose are set by your clinician according to hormone levels, your response and your goals.',
          },
          {
            label: 'Route',
            value:
              'Oral. Sublingual or buccal administration is also used, but it is off-label and should be decided with a clinician rather than changed on your own.',
          },
          {
            label: 'Brand examples',
            value:
              'Estrofem and 诺坤复. Brand names and available strengths differ between countries, so check the generic name on the packaging.',
          },
        ],
      },
      {
        heading: 'Difference from Estradiol Valerate Tablets',
        note: 'Both products ultimately deliver the same active substance, estradiol; the difference lies in the molecular form and the pharmacokinetics that follow from it. Estradiol valerate is an ester and must be hydrolysed by esterases before it can release estradiol, whereas estradiol tablets skip that step. In clinical practice the two are often treated as interchangeable, and the actual choice tends to depend on availability and price rather than on any meaningful difference in effect.',
        cards: [
          {
            title: 'Estradiol valerate tablets',
            level: 'An ester requiring hydrolysis',
            rows: [
              {
                label: 'Molecular form',
                value:
                  'An ester of estradiol rather than the active molecule itself; it must first be hydrolysed by esterases to release estradiol.',
              },
              {
                label: 'Label strength versus delivered estradiol',
                value:
                  'The molecule is larger, so an equal labelled dose delivers slightly less estradiol. Two tablets of the same milligram strength are therefore not exactly equivalent.',
              },
              {
                label: 'Pharmacokinetics',
                value:
                  'Hydrolysis occurs after absorption; the resulting differences concern the details of onset and metabolism rather than any large clinical distinction.',
              },
            ],
          },
          {
            title: 'Estradiol tablets',
            level: 'Already the active molecule',
            rows: [
              {
                label: 'Molecular form',
                value:
                  'Already estradiol itself, with no hydrolysis step needed; it can act directly once it reaches the systemic circulation.',
              },
              {
                label: 'Formulation',
                value:
                  'Micronisation is used to improve the consistency of oral absorption. Finer particles dissolve and absorb more uniformly, reducing variation between tablets.',
              },
              {
                label: 'Pharmacokinetics',
                value:
                  'After oral administration it still undergoes hepatic first-pass metabolism, where much of the active estradiol is converted to the less bioactive estrone and to conjugates — exactly as with estradiol valerate tablets.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Oral versus Sublingual Use',
        note: 'Sublingual or buccal administration lets the drug enter the systemic circulation directly through the mucosa, bypassing hepatic first-pass metabolism. This is not a blanket claim that it is "safer"; it changes the metabolic route and the shape of the blood-level curve. Sublingual use is off-label and should be assessed by a clinician; because peaks are high and fall quickly, it usually has to be taken in divided doses across the day.',
        rows: [
          {
            label: 'Oral',
            value:
              'After gastrointestinal absorption the drug passes through the portal vein into the liver, so first-pass metabolism is substantial. A considerable fraction of the estradiol is converted to estrone in the liver, giving a relatively high estrone-to-estradiol ratio in circulation. The liver is directly exposed to higher estrogen concentrations, coagulation-factor synthesis is stimulated, and hepatic load and thrombotic risk are correspondingly higher. Blood levels are comparatively steady with small peak-to-trough swings, which suits once-daily dosing.',
          },
          {
            label: 'Sublingual',
            value:
              'The drug is absorbed through the oral mucosa straight into the systemic circulation, avoiding first pass, so the circulating estrone-to-estradiol ratio is closer to the physiological state and hepatic exposure is clearly reduced. The trade-off is a very high peak that falls quickly, with wide swings within a day, so divided dosing is usually needed to keep levels anywhere near steady. Evidence on the long-term clinical outcomes of this route is limited: most conclusions come from pharmacokinetic studies rather than outcome trials, which makes it a reasonable individualised choice under medical supervision rather than a default regimen.',
          },
        ],
      },
      {
        heading: 'Precautions',
        note: 'The following are the areas that matter most for long-term oral estradiol use. They are not meant to alarm you; they are the practical basis for which tests are ordered and which route is chosen.',
        rows: [
          {
            label: 'Liver function',
            value:
              'The oral route passes through the liver first, exposing it to relatively high estrogen concentrations, so long-term use requires periodic liver-function monitoring. Anyone with pre-existing liver disease should discuss this before starting.',
          },
          {
            label: 'Thrombotic risk',
            value:
              'Oral estrogen stimulates hepatic synthesis of coagulation factors, and venous thrombotic risk is higher than with the transdermal route. Anyone with risk factors for clotting — a previous clot, known thrombophilia, a first-degree relative with venous thromboembolism, obesity, smoking or prolonged immobility — should discuss switching to a transdermal route, meaning gel or patch.',
          },
          {
            label: 'Lipids',
            value:
              'The oral route affects triglycerides more noticeably than the transdermal route, so a transdermal route is usually preferable when there is high triglycerides or a related metabolic issue. Lipids should be part of routine follow-up testing.',
          },
          {
            label: 'Missed dose',
            value:
              'Take it as soon as you remember. If the next dose is already close, skip the missed one and continue on schedule; do not take a double dose to make up for it.',
          },
          {
            label: 'Drug interactions',
            value:
              'Some antiepileptic drugs, antituberculosis drugs and certain antibiotics induce liver enzymes, which can accelerate estrogen metabolism and reduce its effect. Before starting anything new, tell your clinician about every other medication you take, including herbal and over-the-counter products.',
          },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function EstradiolTablets() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
