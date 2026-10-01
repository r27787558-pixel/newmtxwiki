import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { ENDO_SOCIETY_2017, UCSF, TFS_ORAL_VS_TRANSDERMAL, TFS_E2_DOSES } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  ENDO_SOCIETY_2017,
  UCSF,
  TFS_ORAL_VS_TRANSDERMAL,
  TFS_E2_DOSES,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '雌二醇凝胶',
    lead: '雌二醇凝胶是透皮给药的雌二醇制剂：药物经皮肤吸收后直接进入体循环，绕过肝脏首过效应。它的实际剂量并不只由标签上的毫克数决定——浓度、每单位含量、涂抹面积与皮肤状态共同决定了进入体内的量。因此本页把用法单独列为一节，因为用法在这里就是剂量的一部分。',
    hasDoses: true,
    blocks: [
      {
        heading: '常见产品与剂量',
        note: '不同产品的浓度与单次递送量并不通用，换用产品时必须重新确认剂量。整体上，凝胶方案的每日雌二醇递送量通常在 0.75–3 mg 的范围内，具体取决于产品与医生方案。',
        cards: [
          {
            title: 'EstroGel',
            level: '0.06%',
            rows: [
              { label: '浓度与规格', value: '0.06% 凝胶，定量泵瓶，每泵约 1.25 g。' },
              { label: '每单位含量', value: '每泵含雌二醇 0.75 mg。' },
              { label: '常用每日用量', value: '按医生方案，通常 1–2 泵（即 0.75–1.5 mg 雌二醇）/日。' },
            ],
          },
          {
            title: 'Divigel',
            level: '0.1%',
            rows: [
              { label: '浓度与规格', value: '0.1% 凝胶，单次剂量小袋装。' },
              { label: '每单位含量', value: '每袋含雌二醇 0.25 mg、0.5 mg 或 1.0 mg。' },
              { label: '常用每日用量', value: '每日一袋，1.0 mg 规格较常见。' },
            ],
          },
          {
            title: 'Sandrena',
            level: '0.1%',
            rows: [
              { label: '浓度与规格', value: '0.1% 凝胶，单次剂量小袋装。' },
              { label: '每单位含量', value: '每袋含雌二醇 0.5 mg 或 1.0 mg。' },
              { label: '常用每日用量', value: '每日一袋。' },
            ],
          },
        ],
      },
      {
        heading: '涂抹方法与吸收',
        note: '涂抹部位和皮肤状态直接影响吸收量，因此凝胶的使用方法不是细节，而是剂量的一部分。同一支凝胶，涂在规定的面积上和涂在更小的面积上，进入体内的量并不相同。',
        rows: [
          { label: '涂抹部位', value: 'EstroGel 通常涂于上臂与肩部；Divigel 与 Sandrena 通常涂于大腿；具体以说明书为准。' },
          { label: '涂抹面积', value: '按说明书覆盖指定面积，不要自行缩小或扩大。' },
          { label: '避开部位', value: '乳房与生殖器区域不要涂抹。' },
          { label: '干燥时间', value: '涂抹后自然干燥，干燥前避免接触衣物与他人皮肤。' },
          { label: '洗澡与游泳', value: '按说明书要求留出时间间隔。' },
        ],
      },
      {
        heading: '优势与局限',
        note: '透皮途径的优势主要来自绕过肝脏首过效应；代价是吸收的可控性更依赖使用者本身的操作与皮肤条件。',
        cards: [
          {
            title: '透皮途径的优势',
            level: '相对口服途径',
            rows: [
              { label: '肝脏首过效应', value: '凝胶经皮肤吸收后直接进入体循环，绕过肝脏首过效应。' },
              { label: '凝血与血栓', value: '对凝血因子合成影响小，因此血栓风险低于口服途径。' },
              { label: '血脂', value: '对血脂影响很小。' },
              { label: '血药浓度', value: '血药浓度比口服平稳。' },
            ],
          },
          {
            title: '局限与注意事项',
            level: '用法决定实际吸收',
            rows: [
              { label: '吸收的个体差异', value: '吸收的个体差异较大，受皮肤厚度、角质层状态、涂抹面积、出汗与沐浴影响。' },
              { label: '依从性', value: '需要每天使用，依从性不好时血药水平波动明显。' },
              { label: '药物转移', value: '存在药物转移到他人皮肤的可能，尤其是与儿童或孕妇有密切接触时需要注意。' },
            ],
          },
        ],
      },
      {
        heading: '注意事项',
        note: '以下几条都属于使用方式本身带来的问题，调整使用方法通常就能避免，不需要停药。',
        rows: [
          { label: '转移风险', value: '涂药部位干燥前不要让其他人接触；干燥后穿衣遮盖；与儿童或孕妇密切接触时尤其注意。' },
          { label: '洗澡与游泳', value: '按说明书要求间隔一定时间再洗浴或游泳，否则可能影响吸收。' },
          { label: '皮肤反应', value: '涂抹部位出现持续发红、瘙痒或皮疹时告知医生。' },
          { label: '防晒', value: '部分产品说明提示涂抹部位应避免强烈日晒。' },
          { label: '与其它外用产品的相互作用', value: '涂抹部位不要同时使用其它外用护肤品或防晒霜，以免影响吸收。' },
          { label: '不要自行加量', value: '凝胶的吸收个体差异大，自行加量可能导致血药水平超出预期。' },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Estradiol Gel',
    lead: 'Estradiol gel is a transdermal estradiol formulation: the drug is absorbed through the skin and enters the systemic circulation directly, bypassing hepatic first-pass metabolism. The dose you actually receive is not set by the milligram figure on the label alone — concentration, the amount delivered per unit, application area and skin condition all determine how much reaches the body. The method of use therefore has its own section here, because with gel the method is part of the dose.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Common Products and Doses',
        note: 'Concentrations and per-unit delivery differ between products and are not interchangeable, so the dose must be re-confirmed whenever you switch products. Overall, gel regimens typically deliver somewhere in the range of 0.75–3 mg of estradiol per day, depending on the product and the prescriber\'s regimen.',
        cards: [
          {
            title: 'EstroGel',
            level: '0.06%',
            rows: [
              { label: 'Concentration and format', value: '0.06% gel in a metered-dose pump bottle, approximately 1.25 g per pump.' },
              { label: 'Estradiol per unit', value: 'Each pump contains 0.75 mg of estradiol.' },
              { label: 'Typical daily dose', value: 'As prescribed, commonly 1–2 pumps (that is, 0.75–1.5 mg of estradiol) per day.' },
            ],
          },
          {
            title: 'Divigel',
            level: '0.1%',
            rows: [
              { label: 'Concentration and format', value: '0.1% gel in single-dose sachets.' },
              { label: 'Estradiol per unit', value: 'Each sachet contains 0.25 mg, 0.5 mg or 1.0 mg of estradiol.' },
              { label: 'Typical daily dose', value: 'One sachet daily; the 1.0 mg strength is the more common choice.' },
            ],
          },
          {
            title: 'Sandrena',
            level: '0.1%',
            rows: [
              { label: 'Concentration and format', value: '0.1% gel in single-dose sachets.' },
              { label: 'Estradiol per unit', value: 'Each sachet contains 0.5 mg or 1.0 mg of estradiol.' },
              { label: 'Typical daily dose', value: 'One sachet daily.' },
            ],
          },
        ],
      },
      {
        heading: 'How to Apply It, and How It Is Absorbed',
        note: 'The application site and the condition of the skin directly affect how much is absorbed, so the method of use is not a detail — it is part of the dose. The same tube applied over the specified area and over a smaller area does not deliver the same amount.',
        rows: [
          { label: 'Application site', value: 'EstroGel is usually applied to the upper arms and shoulders; Divigel and Sandrena are usually applied to the thigh; follow the product information for the specifics.' },
          { label: 'Application area', value: 'Cover the specified area as directed; do not shrink or enlarge it on your own.' },
          { label: 'Sites to avoid', value: 'Do not apply to the breasts or the genital area.' },
          { label: 'Drying time', value: 'Let it dry naturally after application, and avoid contact with clothing or other people\'s skin until it is dry.' },
          { label: 'Washing and swimming', value: 'Leave the interval specified in the product information.' },
        ],
      },
      {
        heading: 'Advantages and Limitations',
        note: 'The advantages of the transdermal route come mainly from bypassing hepatic first-pass metabolism. The trade-off is that how much you absorb depends more on your own technique and on your skin.',
        cards: [
          {
            title: 'Advantages of the transdermal route',
            level: 'Relative to the oral route',
            rows: [
              { label: 'Hepatic first-pass effect', value: 'Absorbed through the skin, the gel enters the systemic circulation directly and bypasses hepatic first-pass metabolism.' },
              { label: 'Coagulation and thrombosis', value: 'It has little effect on the synthesis of coagulation factors, so the thrombotic risk is lower than with the oral route.' },
              { label: 'Lipids', value: 'Its effect on the lipid profile is very small.' },
              { label: 'Blood levels', value: 'Plasma concentrations are steadier than with oral dosing.' },
            ],
          },
          {
            title: 'Limitations and cautions',
            level: 'Method determines actual absorption',
            rows: [
              { label: 'Individual variability in absorption', value: 'Absorption varies considerably between individuals and is affected by skin thickness, the state of the stratum corneum, the application area, sweating and bathing.' },
              { label: 'Adherence', value: 'Daily use is required, and blood levels fluctuate noticeably when adherence is poor.' },
              { label: 'Drug transfer', value: 'The drug can be transferred to another person\'s skin, which deserves particular attention with close contact with children or pregnant women.' },
            ],
          },
        ],
      },
      {
        heading: 'Cautions',
        note: 'Each of the following arises from the method of use itself. Adjusting how you apply the gel usually resolves it, and stopping treatment is not required.',
        rows: [
          { label: 'Transfer risk', value: 'Do not let anyone else touch the application site before it dries; cover it with clothing once dry; take particular care with close contact with children or pregnant women.' },
          { label: 'Washing and swimming', value: 'Wait the interval specified in the product information before bathing or swimming, otherwise absorption may be affected.' },
          { label: 'Skin reactions', value: 'Tell your clinician if persistent redness, itching or a rash appears at the application site.' },
          { label: 'Sun exposure', value: 'Some product information advises avoiding intense sun exposure on the application site.' },
          { label: 'Interaction with other topical products', value: 'Do not use other topical skincare products or sunscreen on the application site at the same time, as this may affect absorption.' },
          { label: 'Do not increase the dose on your own', value: 'Absorption of gel varies widely between individuals, so increasing the dose yourself can push blood levels above the intended range.' },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function EstradiolGel() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
