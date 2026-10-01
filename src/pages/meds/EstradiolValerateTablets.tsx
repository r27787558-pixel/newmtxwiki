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
    title: '戊酸雌二醇片',
    lead: '戊酸雌二醇片是最常见的口服雌激素制剂之一。它的关键不在于分子有多复杂，而在于两次转化：先在体内水解出雌二醇，再接受肝脏首过效应的筛选。把这个药讲清楚，基本上就是讲清楚这两步，以及由第二步带来的安全性差异。',
    hasDoses: true,
    blocks: [
      {
        heading: '基本参数',
        rows: [
          {
            label: '成分',
            value: '戊酸雌二醇，是雌二醇与戊酸形成的酯。口服后在体内水解，释放出活性成分雌二醇。',
          },
          {
            label: '常用规格',
            value: '1 mg、2 mg 两种片剂规格。',
          },
          {
            label: '常用剂量',
            value: '口服 2–6 mg/日，临床常见范围是 2–4 mg/日。',
          },
          {
            label: '给药方式',
            value: '口服。也存在舌下含服的用法，属于超说明书使用。',
          },
          {
            label: '商品名举例',
            value: '补佳乐（Progynova）。不同地区还有其它商品名与仿制药，成分相同。',
          },
        ],
      },
      {
        heading: '口服后的代谢路径',
        note: '理解戊酸雌二醇的特点，关键是理解它要经过两次转化：先水解成雌二醇，再受肝脏首过效应影响。',
        quote: '口服途径下，进入体循环的雌酮（E1）比例明显高于雌二醇（E2），这是口服与透皮途径最本质的差别。',
        rows: [
          {
            label: '第一步',
            value: '胃与小肠吸收。戊酸雌二醇的酯键在吸收过程中及吸收之后被酯酶水解，释放出雌二醇。',
          },
          {
            label: '第二步',
            value: '肝脏首过效应。经门静脉进入肝脏的雌二醇被大量转化为雌酮及其结合物，只有一部分以雌二醇的形式进入体循环。',
          },
          {
            label: '结果',
            value: '体循环中雌酮（E1）相对雌二醇（E2）的比例升高，与透皮途径以 E2 为主的格局相反。',
          },
          {
            label: '对肝脏的影响',
            value: '肝脏局部药物暴露高，刺激凝血因子合成，血栓风险高于透皮途径。',
          },
        ],
      },
      {
        heading: '舌下含服',
        note: '将片剂置于舌下让其自行溶解，药物经口腔黏膜直接进入体循环，绕过肝脏首过效应。',
        rows: [
          {
            label: '优点',
            value: '避开首过效应，血药峰值更高，单位剂量利用率更高。',
          },
          {
            label: '缺点',
            value: '峰值高且消退快，一天内需要分多次服用才能维持较平稳的水平；口味不佳；长期对口腔黏膜的影响数据有限。',
          },
          {
            label: '定位',
            value: '属于超说明书用法，是否适合需要医生评估。',
          },
        ],
      },
      {
        heading: '注意事项',
        rows: [
          {
            label: '肝功能',
            value: '口服途径经过肝脏首过，长期使用需要定期监测肝功能。',
          },
          {
            label: '血栓风险',
            value: '口服雌激素刺激凝血因子合成，有血栓危险因素者应与医生讨论是否改用透皮途径。',
          },
          {
            label: '血脂',
            value: '口服途径对甘油三酯的影响比透皮途径明显。',
          },
          {
            label: '漏服',
            value: '想起来时尽快补服，若已接近下次服药时间则跳过，不要一次服用双倍剂量。',
          },
          {
            label: '与其它药物的相互作用',
            value: '部分抗癫痫药、抗结核药和抗生素会诱导肝酶，可能降低药效，合并用药时需告知医生。',
          },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Estradiol Valerate Tablets',
    lead: 'Estradiol valerate tablets are among the most widely used oral estrogen preparations. What matters is not molecular complexity but two conversions: hydrolysis to estradiol in the body, and then selection by hepatic first-pass metabolism. Explaining this drug is largely a matter of explaining those two steps and the safety differences that follow from the second one.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Key Parameters',
        rows: [
          {
            label: 'Ingredient',
            value: 'Estradiol valerate, an ester of estradiol and valeric acid. After oral administration it is hydrolysed in the body to release the active ingredient, estradiol.',
          },
          {
            label: 'Available strengths',
            value: 'Tablets are manufactured in 1 mg and 2 mg strengths.',
          },
          {
            label: 'Typical dose',
            value: 'Oral 2–6 mg/day; 2–4 mg/day is the commonly used clinical range.',
          },
          {
            label: 'Route',
            value: 'Oral. A sublingual method also exists and is an off-label use.',
          },
          {
            label: 'Brand names',
            value: 'Progynova (补佳乐). Other brand names and generics with the same active ingredient are marketed in different regions.',
          },
        ],
      },
      {
        heading: 'Metabolic Pathway After Oral Administration',
        note: 'To understand what makes estradiol valerate distinctive, you have to follow two conversions: hydrolysis to estradiol, and then the hepatic first-pass effect.',
        quote: 'By the oral route, the proportion of estrone (E1) entering the systemic circulation is clearly higher than that of estradiol (E2). This is the most fundamental difference between the oral and transdermal routes.',
        rows: [
          {
            label: 'Step one',
            value: 'Absorption in the stomach and small intestine. The ester bond of estradiol valerate is hydrolysed by esterases during and after absorption, releasing estradiol.',
          },
          {
            label: 'Step two',
            value: 'Hepatic first-pass metabolism. Estradiol entering the liver through the portal vein is largely converted to estrone and its conjugates, and only a fraction reaches the systemic circulation as estradiol.',
          },
          {
            label: 'Result',
            value: 'The ratio of estrone (E1) to estradiol (E2) in the circulation rises, the reverse of the E2-dominant pattern produced by the transdermal route.',
          },
          {
            label: 'Effect on the liver',
            value: 'Hepatic drug exposure is high, which stimulates coagulation factor synthesis and raises thrombotic risk above that of the transdermal route.',
          },
        ],
      },
      {
        heading: 'Sublingual Use',
        note: 'The tablet is placed under the tongue and allowed to dissolve; the drug enters the systemic circulation directly through the oral mucosa, bypassing hepatic first-pass metabolism.',
        rows: [
          {
            label: 'Advantages',
            value: 'Avoids first-pass metabolism, giving a higher peak blood level and greater utilization per unit dose.',
          },
          {
            label: 'Drawbacks',
            value: 'The peak is high and falls quickly, so several doses a day are needed to keep levels reasonably steady; the taste is unpleasant; and long-term data on effects on the oral mucosa are limited.',
          },
          {
            label: 'Status',
            value: 'This is an off-label use, and whether it suits you requires a clinician\'s assessment.',
          },
        ],
      },
      {
        heading: 'Precautions',
        rows: [
          {
            label: 'Liver function',
            value: 'The oral route passes through the liver first, so long-term use requires periodic monitoring of liver function.',
          },
          {
            label: 'Thrombotic risk',
            value: 'Oral estrogen stimulates coagulation factor synthesis. Anyone with thrombotic risk factors should discuss with their clinician whether to switch to a transdermal route.',
          },
          {
            label: 'Blood lipids',
            value: 'The oral route affects triglycerides more markedly than the transdermal route.',
          },
          {
            label: 'Missed dose',
            value: 'Take it as soon as you remember; if the next dose is already close, skip the missed one. Do not take a double dose at once.',
          },
          {
            label: 'Drug interactions',
            value: 'Some antiepileptic drugs, antituberculosis drugs and antibiotics induce hepatic enzymes and may reduce efficacy. Tell your clinician about any medication you take alongside it.',
          },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function EstradiolValerateTablets() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
