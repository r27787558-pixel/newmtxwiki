import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { ENDO_SOCIETY_2017, SOC8, UCSF, TFS_ORAL_VS_TRANSDERMAL, TFS_E2_DOSES } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  ENDO_SOCIETY_2017,
  SOC8,
  UCSF,
  TFS_ORAL_VS_TRANSDERMAL,
  TFS_E2_DOSES,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '雌二醇贴片',
    lead: '贴片把雌二醇经皮肤持续送入体循环，绕开了消化道的降解和肝脏的首过效应。它的血药浓度曲线在整个用药周期内接近一条平线，这是它区别于口服和注射的核心特点，也是它常被推荐给血栓风险较高者的原因。代价是吸收依赖皮肤状态，效果受贴敷质量和个体差异影响较大。',
    hasDoses: true,
    blocks: [
      {
        heading: '规格与剂量',
        rows: [
          {
            label: '常见释放速率',
            value: '0.025、0.0375、0.05、0.075、0.1、0.2 mg/日。不同产品的规格组合不完全相同。',
          },
          { label: '常用剂量范围', value: '0.05–0.2 mg/日。' },
          {
            label: '更换频率',
            value: '多数产品每周更换 2 次（即每 3–4 天一次）；也有每周更换 1 次的产品。',
          },
          {
            label: '剂量表述方式',
            value: '贴片的规格标注的是每日递送的雌二醇量（mg/日），不是贴片内药物总量，因此不同产品之间可以直接比较每日递送量。',
          },
        ],
        quote: '贴片是血药浓度最平稳的给药途径，没有口服的峰值冲击，也没有注射的谷值下坠。',
      },
      {
        heading: '使用方法',
        note: '贴片的效果很大程度上取决于是否贴牢、是否轮换位置。具体部位以产品说明书为准，不同产品的建议位置可能不同。',
        rows: [
          {
            label: '贴敷部位',
            value: '臀部或腹部，避开腰围处衣物摩擦的位置与乳房。',
          },
          {
            label: '轮换',
            value: '每次更换时换到不同位置，同一部位不要连续贴敷。',
          },
          {
            label: '皮肤准备',
            value: '贴在清洁、干燥、没有油脂和毛发的完整皮肤上，不要使用乳液。',
          },
          {
            label: '按压',
            value: '贴上后用手掌按压约 10 秒，确保边缘贴合。',
          },
          {
            label: '更换',
            value: '按说明书周期更换，撕下旧贴片后再贴新的。',
          },
        ],
      },
      {
        heading: '优势与局限',
        cards: [
          {
            title: '优势',
            level: '透皮途径的特点',
            rows: [
              {
                label: '血药浓度',
                value: '最平稳，没有峰谷波动。',
              },
              {
                label: '肝脏与血栓',
                value: '绕过肝脏首过效应，血栓风险低于口服途径，对血脂影响极小。',
              },
              {
                label: '使用频率',
                value: '每周只需更换 2 次，依从性通常优于每日使用的凝胶。',
              },
            ],
          },
          {
            title: '局限',
            level: '需要权衡的地方',
            rows: [
              {
                label: '皮肤',
                value: '可能引起局部皮肤刺激或过敏。',
              },
              {
                label: '粘附',
                value: '出汗、洗澡、摩擦可能导致贴片脱落。',
              },
              {
                label: '吸收差异',
                value: '不同个体和不同部位的皮肤吸收差异较大，同样的规格未必给出同样的血药水平。',
              },
              {
                label: '价格',
                value: '通常高于口服制剂。',
              },
              {
                label: '使用意愿',
                value: '贴片外观可能影响一部分人的使用意愿。',
              },
            ],
          },
        ],
      },
      {
        heading: '注意事项',
        rows: [
          {
            label: '皮肤反应',
            value: '贴敷部位发红、瘙痒是常见的，通常在撕下后消退；若出现持续不消的水疱、严重瘙痒或大面积皮疹，需就医并更换途径。',
          },
          {
            label: '贴片脱落',
            value: '脱落后若短时间内发现，可以重新贴回或更换新贴片，按说明书处理；反复脱落时与医生讨论更换产品类型。',
          },
          {
            label: '洗澡与游泳',
            value: '多数产品耐短时间沐浴，但长时间浸泡、桑拿或游泳可能影响粘附。',
          },
          {
            label: '影像学检查',
            value: '含金属背衬的贴片在需要做核磁共振（MRI）前应告知医生并按要求移除。',
          },
          {
            label: '不要自行叠加',
            value: '多贴几张不会加快预期效果，只会提高血药水平并增加风险。',
          },
          {
            label: '采血时机',
            value: '测雌二醇时按医生要求的时间点采血，并告知正在使用贴片。',
          },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Estradiol Patches',
    lead: 'A patch delivers estradiol through the skin into the systemic circulation, bypassing gastrointestinal degradation and hepatic first-pass metabolism. Its blood level stays close to a flat line across the dosing interval — the property that separates it from oral and injectable routes and the reason it is often favoured when thrombotic risk is a concern. The trade-off is that absorption depends on skin condition, and results vary considerably with how well the patch adheres and with individual variation.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Formulations and Dosing',
        rows: [
          {
            label: 'Common release rates',
            value: '0.025, 0.0375, 0.05, 0.075, 0.1 and 0.2 mg per day. The set of strengths available is not identical across products.',
          },
          { label: 'Usual dose range', value: '0.05–0.2 mg per day.' },
          {
            label: 'Change frequency',
            value: 'Most products are changed twice weekly (that is, every 3–4 days); once-weekly products also exist.',
          },
          {
            label: 'How the dose is expressed',
            value: 'The strength printed on a patch is the amount of estradiol delivered per day (mg per day), not the total drug content of the patch, so daily delivery can be compared directly between products.',
          },
        ],
        quote: 'The patch gives the steadiest blood level of any route: no oral peak to absorb, and no end-of-interval trough as with injections.',
      },
      {
        heading: 'How to Use It',
        note: 'A patch works only as well as it adheres and as well as you rotate sites. Follow the product label for specific placement, since recommended sites differ between products.',
        rows: [
          {
            label: 'Application site',
            value: 'Buttocks or abdomen, avoiding areas rubbed by the waistband and avoiding the breasts.',
          },
          {
            label: 'Rotation',
            value: 'Move to a different site with each change; do not apply to the same spot twice in a row.',
          },
          {
            label: 'Skin preparation',
            value: 'Apply to clean, dry, intact skin free of oil and hair. Do not use lotion.',
          },
          {
            label: 'Pressure',
            value: 'Press with the palm of your hand for about 10 seconds after applying, so that the edges seal.',
          },
          {
            label: 'Removal and replacement',
            value: 'Change on the schedule given in the label; remove the old patch before applying the new one.',
          },
        ],
      },
      {
        heading: 'Advantages and Limitations',
        cards: [
          {
            title: 'Advantages',
            level: 'What the transdermal route offers',
            rows: [
              {
                label: 'Blood level',
                value: 'The steadiest of any route, with no peaks and troughs.',
              },
              {
                label: 'Liver and clotting',
                value: 'Bypasses hepatic first-pass metabolism; thrombotic risk is lower than with the oral route and the effect on lipids is minimal.',
              },
              {
                label: 'Dosing frequency',
                value: 'Changed only twice weekly, so adherence is usually better than with daily gel.',
              },
            ],
          },
          {
            title: 'Limitations',
            level: 'What you trade away',
            rows: [
              {
                label: 'Skin',
                value: 'Local skin irritation or allergy can occur.',
              },
              {
                label: 'Adhesion',
                value: 'Sweating, bathing or friction can loosen or dislodge the patch.',
              },
              {
                label: 'Absorption variability',
                value: 'Skin absorption differs considerably between individuals and between body sites, so the same strength does not necessarily produce the same blood level.',
              },
              {
                label: 'Cost',
                value: 'Usually higher than oral formulations.',
              },
              {
                label: 'Willingness to use',
                value: 'The visible appearance of a patch may put some people off using it.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Cautions',
        rows: [
          {
            label: 'Skin reactions',
            value: 'Redness and itching at the application site are common and usually settle after removal. Persistent blistering, severe itching or a widespread rash needs medical assessment and a change of route.',
          },
          {
            label: 'Patch falls off',
            value: 'If you notice soon after it happens, you can reapply it or replace it with a new patch, following the label. If patches keep falling off, discuss switching to a different product with your clinician.',
          },
          {
            label: 'Bathing and swimming',
            value: 'Most products tolerate a short shower, but prolonged soaking, sauna or swimming can affect adhesion.',
          },
          {
            label: 'Imaging procedures',
            value: 'Patches with a metal backing should be reported to the clinician and removed as instructed before an MRI.',
          },
          {
            label: 'Do not stack patches',
            value: 'Applying several patches does not speed up the expected effects; it only raises blood levels and adds risk.',
          },
          {
            label: 'Blood sampling',
            value: 'When estradiol is measured, sample at the time your clinician specifies and tell them that you are using patches.',
          },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function EstradiolPatch() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
