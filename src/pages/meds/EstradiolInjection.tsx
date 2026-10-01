import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { ENDO_SOCIETY_2017, SOC8, TFS_INJECTABLE, TFS_E2_DOSES } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  ENDO_SOCIETY_2017,
  SOC8,
  TFS_INJECTABLE,
  TFS_E2_DOSES,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '雌二醇针剂（注射剂）',
    lead: '注射用雌二醇是把雌二醇与一个酯基结合后溶于油性溶剂，注入肌肉或皮下形成储库，再由体内的酯酶逐步水解、缓慢释放出活性雌二醇。不同的酯基决定了释放速度，也决定了注射间隔和两次注射之间血药浓度的落差。它绕过消化道与肝脏首过效应，单位剂量的血药浓度远高于口服，这一点既是效率优势，也决定了它的波动特征。',
    hasDoses: true,
    blocks: [
      {
        heading: '常用酯类与剂量',
        note: '四类酯的主要区别在释放速度。酯链越长，释放越平缓，给药间隔也越长；而间隔越短，两次注射之间的峰谷落差就越小。',
        cards: [
          {
            title: '戊酸雌二醇（EV）',
            level: '最常用',
            rows: [
              { label: '常用剂量', value: '5–20 mg，肌内注射或皮下注射。' },
              { label: '给药间隔', value: '每 1–2 周一次；常见做法是 10 mg 每周一次，或 20 mg 每 2 周一次。' },
              { label: '特点', value: '肌内注射后血药半衰期约 4–5 天，血药峰值通常出现在注射后 2–3 天。间隔取 2 周时峰谷波动会比较明显。' },
            ],
          },
          {
            title: '环戊丙酸雌二醇（EC）',
            rows: [
              { label: '常用剂量', value: '2–5 mg。' },
              { label: '给药间隔', value: '每 1–2 周一次。' },
              { label: '特点', value: '酯链更长，释放比戊酸雌二醇平缓，血药波动更小。' },
            ],
          },
          {
            title: '苯甲酸雌二醇（EB）',
            rows: [
              { label: '常用剂量', value: '2–5 mg。' },
              { label: '给药间隔', value: '每 3–5 天一次。' },
              { label: '特点', value: '作用时间短，需要较频繁注射；血药峰值出现快，波动大。' },
            ],
          },
          {
            title: '十一酸雌二醇（EU）',
            rows: [
              { label: '常用剂量', value: '10–20 mg。' },
              { label: '给药间隔', value: '每 4 周一次。' },
              { label: '特点', value: '作用时间最长，适合希望减少注射频率的人，但峰谷波动也最明显。' },
            ],
          },
        ],
      },
      {
        heading: '为什么注射剂的药代特点重要',
        note: '注射剂绕过消化道与肝脏首过效应，几乎全部药物进入体循环，因此单位剂量的血药浓度远高于口服。这是它的优势，也是它的风险来源——峰值过高与谷值过低都来自同一个药代曲线。',
        quote: '同一支药，注射间隔从 2 周缩短到 1 周，平均血药浓度不变，但峰谷差会大幅减小，主观感受和情绪稳定性往往因此改善。',
        rows: [
          { label: '血药峰值', value: '在注射后数天内出现，具体时间取决于酯类：戊酸雌二醇大致在注射后 2–3 天。峰值过高时，部分人会感到短暂的情绪波动或其他体感变化。' },
          { label: '血药谷值', value: '指下次注射前的低谷，高低取决于给药间隔。间隔越长谷值越低，临近注射时更容易出现疲乏、情绪低落或潮热。' },
          { label: '与口服的差别', value: '注射绕过消化道与肝脏首过效应，几乎全部药物进入体循环，单位剂量的血药浓度远高于口服；但两次注射之间的落差也比口服和透皮途径更明显。' },
          { label: '采血时机', value: '测雌二醇时必须记录距上次注射的天数，否则数值无法解读。缺少这一信息时，同一个数字可能代表峰值，也可能代表谷值。' },
        ],
      },
      {
        heading: '注射操作与安全',
        rows: [
          { label: '注射部位', value: '肌内注射常用臀大肌或股外侧肌；皮下注射常用腹部或大腿皮下脂肪。需要轮换注射部位，避免同一位置反复注射造成硬结。' },
          { label: '无菌', value: '使用一次性注射器与针头，酒精消毒，不要共用。' },
          { label: '药液', value: '酯类通常溶于油性溶剂（如蓖麻油、芝麻油），注射前检查有无浑浊或沉淀。' },
          { label: '风险', value: '注射部位疼痛、红肿、硬结、无菌性炎症；消毒不严会造成感染；对溶剂过敏者可能出现局部或全身反应。' },
          { label: '处置', value: '出现持续加重的红肿热痛、发热，需要就医。' },
        ],
      },
      {
        heading: '常见困扰',
        rows: [
          { label: '注射后几天情绪或体感波动明显', value: '与血药峰值和随后的下降有关，可与医生讨论缩短间隔、降低单次剂量。' },
          { label: '临近下次注射时出现疲乏、情绪低落、潮热', value: '属于谷值表现，同样可以通过调整间隔改善。' },
          { label: '出现注射部位硬块', value: '轮换部位，长期不消退或伴疼痛时就医。' },
          { label: '漏打一次', value: '不要自行加倍补打，按医生给的方案处理。' },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Estradiol Injections',
    lead: 'Injectable estradiol is estradiol bound to an ester and dissolved in an oil vehicle. It is injected into muscle or subcutaneous tissue to form a depot, from which tissue esterases gradually hydrolyse the ester and release active estradiol. The ester determines how fast that release happens, and therefore both the interval between injections and how far levels fall between them. Because injections bypass the digestive tract and hepatic first-pass metabolism, the blood level per unit dose is far higher than with oral use — an efficiency advantage that also defines the fluctuation profile.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Common Esters and Doses',
        note: 'The four esters differ mainly in release rate. A longer ester chain releases more smoothly and allows a longer interval, while a shorter interval leaves less distance between peak and trough.',
        cards: [
          {
            title: 'Estradiol valerate (EV)',
            level: 'Most commonly used',
            rows: [
              { label: 'Typical dose', value: '5–20 mg by intramuscular or subcutaneous injection.' },
              { label: 'Interval', value: 'Every 1–2 weeks; a common approach is 10 mg once weekly, or 20 mg every 2 weeks.' },
              { label: 'Notes', value: 'After intramuscular injection the serum half-life is about 4–5 days, and the peak usually occurs 2–3 days after the injection. With a 2-week interval the peak-to-trough swing is fairly pronounced.' },
            ],
          },
          {
            title: 'Estradiol cypionate (EC)',
            rows: [
              { label: 'Typical dose', value: '2–5 mg.' },
              { label: 'Interval', value: 'Every 1–2 weeks.' },
              { label: 'Notes', value: 'A longer ester chain than valerate, so the release is smoother and the blood level fluctuates less.' },
            ],
          },
          {
            title: 'Estradiol benzoate (EB)',
            rows: [
              { label: 'Typical dose', value: '2–5 mg.' },
              { label: 'Interval', value: 'Every 3–5 days.' },
              { label: 'Notes', value: 'Short-acting, so injections are needed relatively often; the peak arrives quickly and the swing is large.' },
            ],
          },
          {
            title: 'Estradiol undecylate (EU)',
            rows: [
              { label: 'Typical dose', value: '10–20 mg.' },
              { label: 'Interval', value: 'Every 4 weeks.' },
              { label: 'Notes', value: 'The longest-acting of the four, useful if you want fewer injections, but it also gives the most pronounced peak-to-trough swing.' },
            ],
          },
        ],
      },
      {
        heading: 'Why the Pharmacokinetics of Injections Matter',
        note: 'Injections bypass the digestive tract and hepatic first-pass metabolism, so almost the entire dose reaches the systemic circulation and the blood level per unit dose is far higher than with oral use. That is the advantage and also the source of the risk — an excessive peak and an excessive trough come from the same pharmacokinetic curve.',
        quote: 'With the same product, shortening the interval from 2 weeks to 1 week leaves the average blood level unchanged but greatly reduces the peak-to-trough difference, which often improves how people feel and how stable their mood is.',
        rows: [
          { label: 'Peak', value: 'Appears within days of the injection, depending on the ester: with estradiol valerate, roughly 2–3 days after injection. When the peak is high, some people notice transient mood shifts or other short-lived changes.' },
          { label: 'Trough', value: 'The low point just before the next injection, set by the interval. The longer the interval, the lower the trough, and fatigue, low mood or hot flushes become more likely as the next injection approaches.' },
          { label: 'Difference from oral', value: 'Injections bypass the digestive tract and first-pass metabolism, so almost the whole dose reaches the systemic circulation and the level per unit dose is far higher than oral; the fall between injections is also more pronounced than with oral or transdermal routes.' },
          { label: 'Sampling timing', value: 'When estradiol is measured, always record the number of days since the last injection, otherwise the value cannot be interpreted. Without that information the same number could represent a peak or a trough.' },
        ],
      },
      {
        heading: 'Injection Technique and Safety',
        rows: [
          { label: 'Injection site', value: 'Intramuscular injection usually uses the gluteus maximus or the vastus lateralis; subcutaneous injection usually uses the fat of the abdomen or the thigh. Rotate sites so the same spot is not used repeatedly, which is how firm lumps form.' },
          { label: 'Sterility', value: 'Use a single-use syringe and needle, disinfect the skin with alcohol, and never share equipment.' },
          { label: 'Solution', value: 'Esters are usually dissolved in an oil vehicle (such as castor oil or sesame oil). Check for cloudiness or precipitate before injecting.' },
          { label: 'Risks', value: 'Pain, redness, swelling, firm lumps and aseptic inflammation at the injection site; poor disinfection can cause infection; people allergic to the vehicle may have local or systemic reactions.' },
          { label: 'When to seek care', value: 'Seek medical care if redness, heat or pain keeps worsening, or if a fever develops.' },
        ],
      },
      {
        heading: 'Common Concerns',
        rows: [
          { label: 'Marked mood or physical fluctuation in the days after an injection', value: 'This relates to the peak and the fall that follows it. Shortening the interval and lowering the single dose can be discussed with your clinician.' },
          { label: 'Fatigue, low mood or hot flushes as the next injection approaches', value: 'These are trough effects and can likewise be improved by adjusting the interval.' },
          { label: 'A firm lump at the injection site', value: 'Rotate sites; seek medical attention if it does not resolve over time or is painful.' },
          { label: 'A missed injection', value: 'Do not double the next dose on your own; follow the plan your clinician gave you.' },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function EstradiolInjection() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
