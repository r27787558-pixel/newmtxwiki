import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { ENDO_SOCIETY_2017, SOC8, UCSF, TFS_CPA, TFS_SPIRO, TFS_BICA, TFS_INTRO } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  ENDO_SOCIETY_2017,
  SOC8,
  UCSF,
  TFS_CPA,
  TFS_SPIRO,
  TFS_BICA,
  TFS_INTRO,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '抗雄激素类药物对比',
    lead: '雌激素与抗雄激素解决的是两个不同的问题。雌激素负责产生女性化改变，抗雄激素负责搬开雄激素这块挡路的石头。同一套方案里，两者不能互相替代，选择抗雄激素时权衡的也始终是同一组变量：抑制强度、肝脏负担、孕激素作用、价格与可获得性。',
    hasDoses: true,
    blocks: [
      {
        heading: '为什么需要抗雄激素',
        note: '雌激素本身通过负反馈也能降低睾酮，但单靠雌激素往往不足以把睾酮压到目标范围，尤其是中低剂量方案。抗雄激素的作用是直接阻断雄激素的生成或作用，让雌激素在更低的剂量下也能发挥效果。',
        quote:
          '抗雄激素不产生女性化效果，它只是移除雄激素的阻力；实际的女性化来自雌激素。',
      },
      {
        heading: '常用抗雄激素药物对比',
        note: '这些药物并不等效，也不是简单的高低排序。不同药物作用于不同的环节，风险落在不同的器官上，因此选择取决于你更在意抑制强度，还是更在意某一类风险。针对这些药物之间头对头的比较研究证据有限，多数用法来自临床经验与药理学推断。',
        cards: [
          {
            title: '醋酸环丙孕酮（CPA）',
            level: '强效，欧洲与加拿大常用',
            rows: [
              {
                label: '作用机制',
                value:
                  '孕激素类药物，一方面在中枢抑制促性腺激素（LH/FSH）从而降低睾酮生成，另一方面在外周竞争性拮抗雄激素受体。',
              },
              {
                label: '常用剂量',
                value:
                  '口服 10–50 mg/日。WPATH SOC-8（2022）推荐 10 mg/日，Endocrine Society（2017）为 25–50 mg/日；研究显示抑制睾酮在 5–10 mg/日 已接近饱和，而肝毒性、脑膜瘤等风险随累积剂量上升，所以推荐量近年一直在下调。',
              },
              {
                label: '优点',
                value: '单药即可显著抑制睾酮，价格低，同时有孕激素作用。',
              },
              {
                label: '风险',
                value:
                  '肝毒性（罕见但可能严重）、催乳素升高、长期高剂量与脑膜瘤和催乳素瘤的关联、抑郁与疲乏。未在美国获批。',
              },
              {
                label: '监测',
                value: '肝功能（基线及定期）、催乳素。',
              },
            ],
          },
          {
            title: '螺内酯',
            level: '美国常用，但抗雄效力有限',
            rows: [
              {
                label: '作用机制',
                value:
                  '醛固酮受体拮抗剂，在受体层面竞争性阻断雄激素，并在很高剂量下抑制雄激素合成。需要注意：它在常规剂量下是较弱的雄激素受体拮抗剂，且多数研究并未发现它能降低睾酮水平。',
              },
              {
                label: '常用剂量',
                value:
                  '口服 100–200 mg/日，因半衰期较短通常分 1–2 次服用。',
              },
              {
                label: '优点',
                value: '在多个国家容易获得，非激素类，价格低。',
              },
              {
                label: '风险',
                value:
                  '疗效上的局限比副作用更值得注意：多项研究未发现它降低睾酮，作为受体拮抗剂在常规剂量下作用较弱，可能不足以对抗明显高于女性范围的睾酮水平。副作用方面有高钾血症（保钾利尿剂）、低血压、多尿、疲乏、乳房胀痛；与 ACEI/ARB、NSAIDs 或肾功能不全合用时风险明显升高。',
              },
              {
                label: '监测',
                value:
                  '血钾与肌酐，在起始与加量后 1–2 周；UCSF 指南认为健康年轻患者无合并用药时常规反复监测的必要性有限。',
              },
            ],
          },
          {
            title: '比卡鲁胺',
            level: '非甾体，UCSF 指南不推荐',
            rows: [
              {
                label: '作用机制',
                value:
                  '非甾体类雄激素受体拮抗剂，在外周阻断雄激素与受体结合，不影响中枢促性腺激素。因此单用时睾酮可能反而升高，通常需要配合雌激素。',
              },
              {
                label: '常用剂量',
                value: '口服 25–50 mg/日，每日一次。需要说明的是，50 mg 这一剂量在跨性别人群中缺乏剂量学依据，主要沿用前列腺癌的用药经验。',
              },
              {
                label: '优点',
                value:
                  '半衰期长所以每日一次即可，无孕激素与中枢作用，部分人报告情绪副作用比 CPA 少。',
              },
              {
                label: '风险',
                value:
                  '肝毒性是主要顾虑，说明书中有严重肝损伤（含致死病例）的警告；UCSF 指南正因这一风险明确不推荐在跨性别人群中使用。单用于女性化方案时睾酮不降反升。',
              },
              {
                label: '监测',
                value: '肝功能，基线与用药早期定期。',
              },
            ],
          },
          {
            title: 'GnRH 激动剂（亮丙瑞林 / 戈舍瑞林）',
            level: '效果确切，价格高',
            rows: [
              {
                label: '作用机制',
                value:
                  '持续刺激垂体导致受体下调，从而抑制 LH/FSH，相当于药物性去势，从源头停止睾酮生成。',
              },
              {
                label: '常用剂量',
                value:
                  '亮丙瑞林 3.75 mg 每月一次，或 11.25 mg 每 3 个月一次；戈舍瑞林 3.6 mg 每月一次，或 10.8 mg 每 3 个月一次。',
              },
              {
                label: '优点',
                value:
                  '抑制作用确切且可逆，不经肝脏代谢，对肝功能没有负担。',
              },
              {
                label: '风险',
                value:
                  '初始用药时可能出现睾酮一过性升高（反跳），需要先用其它抗雄药物覆盖；长期使用伴随骨密度下降；价格高，部分地区难以获得或不在医保内。',
              },
              {
                label: '监测',
                value: '骨密度、睾酮水平。',
              },
            ],
          },
          {
            title: '5α-还原酶抑制剂（非那雄胺 / 度他雄胺）',
            level: '不足以单独作为抗雄药物',
            rows: [
              {
                label: '作用机制',
                value:
                  '抑制 5α-还原酶，阻止睾酮转化为活性更强的双氢睾酮（DHT），但不降低睾酮本身。',
              },
              {
                label: '常用剂量',
                value: '非那雄胺 1 mg/日；度他雄胺 0.5 mg/日。',
              },
              {
                label: '优点',
                value:
                  '主要针对头皮与体毛，对雄激素性脱发有效，副作用相对少。',
              },
              {
                label: '风险',
                value:
                  '不降低血清睾酮，因此作为女性化方案的抗雄药物作用有限，不能单独使用。',
              },
              {
                label: '监测',
                value: '一般无需特殊监测，出现情绪或性功能变化时告知医生。',
              },
            ],
          },
        ],
      },
      {
        heading: '怎么选',
        note: '下面只描述每个角度上的权衡逻辑，不给出结论。实际的取舍还取决于你的具体方案、合并用药、所在地的药品供应与个人风险因素。',
        rows: [
          {
            label: '追求强效抑制',
            value:
              '醋酸环丙孕酮与 GnRH 激动剂都作用于促性腺激素的驱动环节，抑制幅度大；螺内酯与比卡鲁胺主要在外周阻断受体，对睾酮生成的影响较弱。5α-还原酶抑制剂不降低睾酮，走的是另一条路。',
          },
          {
            label: '希望避免孕激素作用',
            value:
              '醋酸环丙孕酮本身是孕激素，并带有中枢作用；比卡鲁胺没有孕激素与中枢作用，但代价是单用时睾酮不降。螺内酯既非孕激素也非甾体，介于两者之间。',
          },
          {
            label: '肝脏风险规避',
            value:
              '醋酸环丙孕酮与比卡鲁胺都需要监测肝功能，比卡鲁胺的说明书带有严重肝损伤警告，UCSF 指南因此不推荐它。GnRH 激动剂不经肝脏代谢，对肝功能没有负担。螺内酯的顾虑不在肝脏，而在抗雄效力有限与血钾、血压。',
          },
          {
            label: '预算与可获得性',
            value:
              '螺内酯与醋酸环丙孕酮价格最低、最容易获得，但 CPA 未在美国获批。比卡鲁胺居中。GnRH 激动剂价格最高，也最可能遇到供应或医保覆盖方面的问题。',
          },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Comparing Anti-Androgens',
    lead: 'Estrogen and anti-androgens solve two different problems. Estrogen produces the feminizing changes; an anti-androgen removes the obstacle that androgens present. One does not substitute for the other, and the choice of anti-androgen always comes down to the same variables: strength of suppression, hepatic burden, progestogenic activity, cost and availability.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Why Anti-Androgens Are Needed',
        note: 'Estrogen alone lowers testosterone through negative feedback, but on estrogen alone testosterone often does not fall into the target range, particularly at low to moderate doses. An anti-androgen blocks androgen production or androgen action directly, which lets estrogen do its work at a lower dose.',
        quote:
          'Anti-androgens do not produce feminization. They remove the resistance posed by androgens; the feminization itself comes from estrogen.',
      },
      {
        heading: 'Comparing the Common Anti-Androgens',
        note: 'These drugs are not interchangeable, and they do not simply rank from weak to strong. Each acts at a different point in the pathway, and each concentrates its risk in a different organ. Head-to-head evidence comparing them is limited, so most use rests on clinical experience and pharmacological reasoning.',
        cards: [
          {
            title: 'Cyproterone acetate (CPA)',
            level: 'Potent, common in Europe and Canada',
            rows: [
              {
                label: 'Mechanism',
                value:
                  'A progestin. It suppresses gonadotropins (LH and FSH) centrally, which lowers testosterone production, and it also competes with androgens at the androgen receptor in the periphery.',
              },
              {
                label: 'Usual dose',
                value:
                  'Oral 10–50 mg/day. WPATH SOC-8 (2022) recommends 10 mg/day and the Endocrine Society (2017) recommends 25–50 mg/day; testosterone suppression approaches saturation at 5–10 mg/day, while hepatotoxicity, meningioma and related risks rise with cumulative dose, so recommended doses have been falling for years.',
              },
              {
                label: 'Advantages',
                value:
                  'Marked testosterone suppression as a single agent, low cost, and progestogenic activity as well.',
              },
              {
                label: 'Risks',
                value:
                  'Hepatotoxicity (rare but potentially serious), raised prolactin, an association of long-term high-dose use with meningioma and prolactinoma, depression and fatigue. It is not approved in the United States.',
              },
              {
                label: 'Monitoring',
                value: 'Liver function, at baseline and periodically, plus prolactin.',
              },
            ],
          },
          {
            title: 'Spironolactone',
            level: 'Common in the United States, limited potency',
            rows: [
              {
                label: 'Mechanism',
                value:
                  'An aldosterone receptor antagonist that competitively blocks the androgen receptor and, at very high doses, inhibits androgen synthesis. Note that at usual doses it is a relatively weak androgen receptor antagonist, and most studies have not found that it lowers testosterone levels.',
              },
              {
                label: 'Usual dose',
                value:
                  'Oral 100–200 mg/day, usually split into 1–2 doses because of the short half-life.',
              },
              {
                label: 'Advantages',
                value:
                  'Easy to obtain in many countries, non-hormonal in class, and inexpensive.',
              },
              {
                label: 'Risks',
                value:
                  'The limitation in efficacy matters more than the side effects: most studies found no fall in testosterone, and as a receptor antagonist it is weak at usual doses, so it may not be enough to oppose testosterone well above the female range. On the safety side there is hyperkalemia (it is a potassium-sparing diuretic), low blood pressure, frequent urination, fatigue and breast tenderness. Risk rises clearly when it is combined with an ACE inhibitor or ARB, an NSAID, or when kidney function is impaired.',
              },
              {
                label: 'Monitoring',
                value:
                  'Potassium and creatinine 1–2 weeks after starting or increasing the dose. The UCSF guidelines consider routine repeated monitoring of limited necessity in healthy young patients who take no interacting medication.',
              },
            ],
          },
          {
            title: 'Bicalutamide',
            level: 'Non-steroidal, requires liver monitoring',
            rows: [
              {
                label: 'Mechanism',
                value:
                  'A non-steroidal androgen receptor antagonist. It blocks androgen binding at the receptor in the periphery and has no central effect on gonadotropins. Used alone it can therefore raise testosterone, and it is usually combined with estrogen.',
              },
              {
                label: 'Usual dose',
                value: 'Oral 25–50 mg/day, once daily.',
              },
              {
                label: 'Advantages',
                value:
                  'A long half-life allows once-daily dosing; it has no progestogenic or central action, and some people report fewer mood side effects than with CPA.',
              },
              {
                label: 'Risks',
                value:
                  'Hepatotoxicity is the main concern, and the product labeling carries a warning for severe liver injury including fatal cases; the UCSF guidelines advise against using it in transgender people for precisely this reason. Used alone in a feminizing regimen, it raises testosterone rather than lowering it.',
              },
              {
                label: 'Monitoring',
                value:
                  'Liver function at baseline and regularly during the early months of use.',
              },
            ],
          },
          {
            title: 'GnRH agonists (leuprolide / goserelin)',
            level: 'Reliable effect, high cost',
            rows: [
              {
                label: 'Mechanism',
                value:
                  'Continuous stimulation of the pituitary downregulates its receptors, suppressing LH and FSH. This amounts to medical castration and stops testosterone production at its source.',
              },
              {
                label: 'Usual dose',
                value:
                  'Leuprolide 3.75 mg monthly, or 11.25 mg every 3 months; goserelin 3.6 mg monthly, or 10.8 mg every 3 months.',
              },
              {
                label: 'Advantages',
                value:
                  'Suppression is reliable and reversible, and the drugs are not metabolized by the liver, so there is no hepatic burden.',
              },
              {
                label: 'Risks',
                value:
                  'A transient rise in testosterone (flare) can occur when treatment starts, so another anti-androgen is used to cover the first weeks; long-term use is accompanied by loss of bone density; cost is high, and access or insurance coverage is limited in some regions.',
              },
              {
                label: 'Monitoring',
                value: 'Bone density and testosterone level.',
              },
            ],
          },
          {
            title: '5-alpha reductase inhibitors (finasteride / dutasteride)',
            level: 'Not sufficient as an anti-androgen on their own',
            rows: [
              {
                label: 'Mechanism',
                value:
                  'They inhibit 5-alpha reductase and prevent conversion of testosterone to the more potent dihydrotestosterone (DHT), but they do not lower testosterone itself.',
              },
              {
                label: 'Usual dose',
                value: 'Finasteride 1 mg/day; dutasteride 0.5 mg/day.',
              },
              {
                label: 'Advantages',
                value:
                  'They act mainly on scalp and body hair and are effective for androgenetic hair loss, with relatively few side effects.',
              },
              {
                label: 'Risks',
                value:
                  'They do not lower serum testosterone, so their role as the anti-androgen in a feminizing regimen is limited and they cannot be used alone.',
              },
              {
                label: 'Monitoring',
                value:
                  'No specific monitoring is generally required; report any mood or sexual-function changes to your clinician.',
              },
            ],
          },
        ],
      },
      {
        heading: 'How to Choose',
        note: 'What follows describes the trade-off on each axis only; it does not conclude which agent to use. The real decision also depends on your regimen, your other medications, local drug supply and your individual risk factors.',
        rows: [
          {
            label: 'Seeking strong suppression',
            value:
              'Cyproterone acetate and the GnRH agonists both act on gonadotropin drive and suppress testosterone strongly. Spironolactone and bicalutamide mainly block the receptor in the periphery and have less effect on testosterone production. 5-alpha reductase inhibitors do not lower testosterone at all and take a different route.',
          },
          {
            label: 'Avoiding progestogenic action',
            value:
              'Cyproterone acetate is itself a progestin and has central activity. Bicalutamide has neither a progestogenic nor a central action, at the cost of not lowering testosterone on its own. Spironolactone is neither a progestin nor a steroid, and sits between the two.',
          },
          {
            label: 'Avoiding hepatic risk',
            value:
              'Both cyproterone acetate and bicalutamide require liver monitoring, and the bicalutamide labeling carries a warning for severe liver injury, which is why the UCSF guidelines advise against it. GnRH agonists are not metabolized by the liver and place no burden on it. With spironolactone the concern is not the liver but limited anti-androgenic potency, potassium and blood pressure.',
          },
          {
            label: 'Budget and availability',
            value:
              'Spironolactone and cyproterone acetate are the least expensive and most widely available, though CPA is not approved in the United States. Bicalutamide sits in the middle. GnRH agonists are the most expensive and the most likely to run into supply or insurance-coverage problems.',
          },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function AntiAndrogens() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
