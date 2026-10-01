import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { TFS_PROGESTOGENS, TFS_HAIR_LOSS, TFS_BONE } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  TFS_PROGESTOGENS,
  TFS_HAIR_LOSS,
  TFS_BONE,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '其它相关药物与辅助用药',
    lead: '雌激素与抗雄激素是女性化方案的主干，但实际用药清单往往更长：孕激素、骨骼与营养补充剂、用于毛发和皮肤的药物，以及一些经常被私下尝试的东西。这一页按类别说明它们各自在做什么、证据强度如何，以及哪些做法应当明确排除。判断一种辅助用药是否值得使用，关键不在于它是否"常见"，而在于它能否解决一个具体问题，且风险是否可接受。',
    hasDoses: true,
    blocks: [
      {
        heading: '孕激素',
        note: '孕激素常被期望承担两件事：促进乳腺发育，以及抑制睾酮。就现有证据看，这两项期待都被高估了。乳腺发育主要由雌激素驱动，孕激素在其中的作用仍不清楚；对促性腺激素的抑制则依品种和剂量而异，且通常是部分的。不同孕激素在代谢、血栓与情绪方面的风险差别很大，不能当作一类药来对待。',
        quote: '孕激素在女性化方案中不是必需组成部分，它的作用主要是辅助性的，且不同孕激素的风险差别很大。',
        cards: [
          {
            title: '微粒化黄体酮',
            level: '口服 · 通常睡前服用',
            rows: [
              { label: '剂量', value: '口服 100–200 mg/日，通常安排在睡前服用。' },
              { label: '机制', value: '属于孕激素，对促性腺激素有部分抑制作用。这种抑制通常不足以单独把睾酮压到女性范围，因此它是辅助而非替代抗雄激素治疗的手段。' },
              { label: '特点', value: '口服后有明显镇静作用，因此被安排在睡前；部分人正是用它来改善睡眠或情绪。微粒化制剂的设计目的是改善口服吸收，但个体间血药水平差异仍然很大。' },
              { label: '风险', value: '嗜睡、头晕、情绪波动。肝功能不全者需谨慎，已有肝脏疾病者应在用药前与医生讨论。镇静作用可能影响夜间起床或次日清晨的警觉度，需要开车或操作机械的人要留意。' },
            ],
          },
          {
            title: '醋酸甲羟孕酮（MPA）',
            level: '口服 · 不作为首选',
            rows: [
              { label: '剂量', value: '口服 2.5–10 mg/日。' },
              { label: '特点', value: '属于合成孕激素，半衰期较长，因此血药水平相对平稳，不需要像微粒化黄体酮那样与睡眠绑定。' },
              { label: '风险', value: '与抑郁症状和骨密度下降的关联已有报告。这类信号来自观察性资料，因果方向并不完全清楚，但足以影响用药选择。这也是它在激素治疗中不作为首选的原因。' },
              { label: '结论', value: '不建议作为常规选择。若医生出于特定理由开具，应明确复查情绪状态与骨密度，而不是长期默认沿用。' },
            ],
          },
        ],
      },
      {
        heading: '骨健康与营养补充',
        note: '长期处于低雌激素状态时，骨量流失是最容易被忽视的后果之一，因为它没有任何早期症状。补充剂的作用是补上饮食中的缺口，而不是替代激素本身。',
        rows: [
          { label: '钙', value: '成人每日 1000–1200 mg，来自饮食与补充剂合计。用于长期低雌激素状态下的骨保护。分次服用比一次大剂量吸收更好，随餐服用通常耐受性更佳。' },
          { label: '维生素 D', value: '每日 800–2000 IU，具体按血检结果由医生调整。它影响钙的吸收与骨代谢，缺乏时单补钙的效果有限。' },
          { label: '骨密度检查（DEXA）', value: '长期处于低激素状态者建议定期做。它是判断骨量是否已经在下降的客观手段，也是决定是否需要进一步干预的依据。' },
          { label: '关键原则', value: '补充剂不能替代足够的雌激素。如果骨密度已经在下降，根本的处理是评估激素方案是否合适，而不是只加钙片。把钙和维生素 D 当作激素不足的补偿，会掩盖真正需要解决的问题。' },
        ],
      },
      {
        heading: '用于毛发与皮肤的药物',
        note: '这些药物处理的是症状，不改变激素方案本身的逻辑。它们可以在激素水平已经稳定后继续使用，但不能用来弥补抗雄激素治疗不充分。',
        cards: [
          {
            title: '米诺地尔',
            level: '外用为主',
            rows: [
              { label: '用法', value: '外用 5% 溶液或泡沫，每日 1–2 次，用于雄激素性脱发。需要涂在头皮而非头发上，并保持规律使用。' },
              { label: '口服低剂量', value: '属于超说明书用法，需要医生评估。剂量、适应证与监测都没有统一标准，不应自行尝试。' },
              { label: '特点', value: '起效慢，通常需要持续使用数月才能判断是否有效。停药后效果会消退，新长出的毛发会随药物撤去而逐渐脱落，因此它更像是维持而非治愈。' },
              { label: '风险', value: '外用可能引起局部刺激、瘙痒或头皮干燥。口服低剂量可能引起低血压、心悸、多毛，其中多毛对部分使用者来说与治疗目标相反。' },
            ],
          },
          {
            title: '非那雄胺与度他雄胺',
            level: '抑制 5α-还原酶',
            rows: [
              { label: '剂量', value: '非那雄胺 1 mg/日 与度他雄胺 0.5 mg/日。' },
              { label: '机制', value: '抑制 5α-还原酶，降低双氢睾酮（DHT）。DHT 是毛囊小型化的主要驱动因素，降低它对脱发和体毛有直接作用。' },
              { label: '适用范围', value: '用于脱发与体毛。度他雄胺抑制的酶亚型更广，作用通常更强，但差别主要体现在毛发的改善程度上，而非激素水平的整体改变。' },
              { label: '注意', value: '它们不降低睾酮，单独使用对女性化作用有限。若目标是整体的女性化，仍需依靠雌激素与抗雄激素治疗，而不是把这类药物当作替代。' },
            ],
          },
        ],
      },
      {
        heading: '明确不建议的做法',
        note: '以下做法的问题不在于"风险高低"这一抽象判断，而在于它们要么无法被验证，要么用错误的手段替代了正确的手段。',
        rows: [
          { label: '使用来源不明或非正规渠道的注射剂', value: '无法确认成分、浓度与无菌条件，存在感染与剂量错误风险。药瓶上的标示与实际含量可能不一致，因此连"用了多少"这件事都无法确定。' },
          { label: '使用动物来源的复合雌激素制品', value: '成分复杂且难以标准化，批次之间差异大，在现代方案中已被淘汰。可监测性与剂量可控性都远不如单一成分的制剂。' },
          { label: '自行配伍高剂量方案或自行加量', value: '风险与剂量和血药峰值相关，超范围加量不会加快预期效果，只会增加风险。女性化改变受受体与时间限制，超过一定水平后并不会按比例加速。' },
          { label: '用睾酮抑制当作避孕手段', value: '它不保证可逆，也不保证有效避孕。激素治疗期间仍可能保有生育能力，需要避孕时应采用独立的、确有把握的方法。' },
          { label: '把补充剂当作激素方案的替代', value: '钙和维生素 D 不能替代雌激素对骨骼的保护作用。它们只处理营养侧的缺口，无法补上激素缺乏造成的骨量流失。' },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Other Related and Adjunctive Medications',
    lead: 'Estrogen and anti-androgens are the backbone of a feminizing regimen, but the actual medication list is often longer: progestogens, bone and nutritional supplements, drugs for hair and skin, and a number of things people try on their own. This page goes through them by category — what each one does, how strong the evidence is, and which practices should be ruled out. The test for any adjunct is not whether it is common, but whether it addresses a specific problem at an acceptable level of risk.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Progestogens',
        note: 'Progestogens are often expected to do two things: promote breast development and suppress testosterone. On the available evidence, both expectations are overstated. Breast development is driven mainly by estrogen, and the contribution of a progestogen remains unclear; suppression of gonadotropins varies with the agent and dose and is usually partial. Progestogens differ substantially in metabolic, thrombotic and mood-related risk and should not be treated as one class.',
        quote: 'Progestogens are not an essential component of a feminizing regimen; their role is mainly adjunctive, and the risks differ substantially between agents.',
        cards: [
          {
            title: 'Micronized progesterone',
            level: 'Oral · usually at bedtime',
            rows: [
              { label: 'Dose', value: 'Oral 100–200 mg per day, usually taken at bedtime.' },
              { label: 'Mechanism', value: 'A progestogen with partial suppression of gonadotropins. That suppression is usually not enough to bring testosterone into the female range on its own, so it is an adjunct to, not a replacement for, anti-androgen therapy.' },
              { label: 'Characteristics', value: 'It is noticeably sedating after oral intake, which is why it is scheduled at bedtime; some people use it precisely to improve sleep or mood. Micronization is designed to improve oral absorption, but blood levels still vary widely between individuals.' },
              { label: 'Risks', value: 'Drowsiness, dizziness and mood fluctuation. Use with caution in hepatic impairment, and discuss any existing liver disease with your clinician beforehand. Sedation may affect night-time waking or next-morning alertness, which matters if you drive or operate machinery.' },
            ],
          },
          {
            title: 'Medroxyprogesterone acetate (MPA)',
            level: 'Oral · not first-line',
            rows: [
              { label: 'Dose', value: 'Oral 2.5–10 mg per day.' },
              { label: 'Characteristics', value: 'A synthetic progestogen with a longer half-life, so blood levels are relatively steady and it does not need to be tied to sleep the way micronized progesterone is.' },
              { label: 'Risks', value: 'Associations with depressive symptoms and reduced bone density have been reported. These signals come from observational data and the direction of causation is not fully established, but they are enough to shape prescribing choices. This is also why it is not first-line in hormone therapy.' },
              { label: 'Bottom line', value: 'Not recommended as a routine choice. If a clinician prescribes it for a specific reason, mood and bone density should be reviewed explicitly rather than carried along by default long term.' },
            ],
          },
        ],
      },
      {
        heading: 'Bone Health and Nutritional Supplements',
        note: 'During prolonged low-estrogen states, bone loss is one of the most easily overlooked consequences because it produces no early symptoms. Supplements fill a gap in intake; they do not replace the hormone itself.',
        rows: [
          { label: 'Calcium', value: '1000–1200 mg per day for adults, counting food and supplements together. Used for bone protection during prolonged low-estrogen states. Divided doses are absorbed better than a single large dose, and taking it with food is usually better tolerated.' },
          { label: 'Vitamin D', value: '800–2000 IU per day, adjusted by your clinician according to blood test results. It affects calcium absorption and bone metabolism, and calcium supplementation alone is of limited value when vitamin D is deficient.' },
          { label: 'Bone density testing (DEXA)', value: 'Advised periodically for those in a prolonged low-hormone state. It is the objective way to tell whether bone mass is already declining and the basis for deciding whether further intervention is needed.' },
          { label: 'Key principle', value: 'Supplements cannot substitute for adequate estrogen. If bone density is already falling, the underlying task is to assess whether the hormone regimen is appropriate, not simply to add calcium tablets. Treating calcium and vitamin D as compensation for insufficient hormone obscures the problem that actually needs solving.' },
        ],
      },
      {
        heading: 'Medications for Hair and Skin',
        note: 'These drugs address symptoms; they do not change the logic of the hormone regimen itself. They can reasonably continue once hormone levels are stable, but they are not a way to make up for inadequate anti-androgen therapy.',
        cards: [
          {
            title: 'Minoxidil',
            level: 'Mainly topical',
            rows: [
              { label: 'Use', value: 'Topical 5% solution or foam, once or twice daily, for androgenetic hair loss. It needs to be applied to the scalp rather than the hair, and used consistently.' },
              { label: 'Low-dose oral', value: 'This is off-label use and requires clinician assessment. Dosing, indications and monitoring are not standardised, so it should not be attempted on your own.' },
              { label: 'Characteristics', value: 'Onset is slow and several months of continuous use are usually needed before you can judge whether it is working. Benefits regress after stopping, and regrown hair is gradually lost as the drug is withdrawn, so this is maintenance rather than cure.' },
              { label: 'Risks', value: 'Topical use may cause local irritation, itching or scalp dryness. Low-dose oral use may cause low blood pressure, palpitations and increased body hair — the last of which runs counter to the goal for some users.' },
            ],
          },
          {
            title: 'Finasteride and dutasteride',
            level: '5α-reductase inhibition',
            rows: [
              { label: 'Dose', value: 'Finasteride 1 mg per day and dutasteride 0.5 mg per day.' },
              { label: 'Mechanism', value: 'They inhibit 5α-reductase and lower dihydrotestosterone (DHT). DHT is a major driver of hair follicle miniaturisation, so lowering it acts directly on hair loss and body hair.' },
              { label: 'Scope of use', value: 'Used for hair loss and body hair. Dutasteride inhibits a broader range of enzyme isoforms and is usually the more potent of the two, but the difference shows mainly in hair improvement rather than in overall hormone levels.' },
              { label: 'Caution', value: 'They do not lower testosterone, and used alone their feminizing effect is limited. If the goal is overall feminisation, that still rests on estrogen and anti-androgen therapy rather than on these drugs as a substitute.' },
            ],
          },
        ],
      },
      {
        heading: 'Practices That Are Explicitly Not Advised',
        note: 'The problem with the following is not an abstract judgement about how risky they are, but that they either cannot be verified or substitute the wrong tool for the right one.',
        rows: [
          { label: 'Injectables of unknown or unregulated origin', value: 'The composition, concentration and sterility cannot be confirmed, creating risks of infection and dosing error. What the vial says and what it contains may differ, so even the question of how much you took cannot be answered.' },
          { label: 'Animal-derived conjugated estrogen products', value: 'The composition is complex and difficult to standardise, with wide variation between batches, and it has been superseded in modern practice. Both monitoring and dose control are far worse than with single-component preparations.' },
          { label: 'Self-designed high-dose regimens or self-increased doses', value: 'Risk tracks dose and peak blood levels; exceeding the usual range does not accelerate the intended effects, it only adds risk. Feminising changes are limited by receptors and time, so beyond a certain level they do not speed up proportionally.' },
          { label: 'Using testosterone suppression as contraception', value: 'It is not reliably reversible and does not reliably prevent pregnancy. Fertility may persist during hormone therapy, so anyone who needs contraception should use a separate method that actually works.' },
          { label: 'Treating supplements as a replacement for a hormone regimen', value: 'Calcium and vitamin D cannot replace the bone-protective effect of estrogen. They address a nutritional shortfall and cannot make up for bone loss caused by hormone deficiency.' },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function OtherMeds() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
