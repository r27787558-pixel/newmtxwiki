import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { ENDO_SOCIETY_2017, SOC8, UCSF, TFS_E2_DOSES, TFS_GUIDELINES } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  ENDO_SOCIETY_2017,
  SOC8,
  UCSF,
  TFS_E2_DOSES,
  TFS_GUIDELINES,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '用药期间的监测：查什么、多久查一次、结果怎么看',
    lead: '监测不是为了走流程。它要回答三个具体问题：药物有没有起效、有没有出现可逆的早期损伤、以及当前剂量是否已经超出你的身体承受范围。这三件事无法靠自我感觉判断——肝酶升高、血钾偏高、骨密度下降在早期通常没有任何症状。',
    hasDoses: true,
    blocks: [
      {
        heading: '开始用药前的基线检查',
        note: '基线的意义在于给你自己留一条参照线。没有基线，之后所有"异常"都无从判断是药物造成还是本来就如此。',
        cards: [
          {
            title: '内分泌与性腺轴',
            level: '判断起点',
            rows: [
              { label: '总睾酮', value: '确认内生性雄激素水平的起点，也是之后判断抑制是否充分的基准。' },
              { label: '雌二醇（E2）', value: '基线通常偏低；同时测雌酮（E1）有助于理解后续口服途径的代谢走向。' },
              { label: 'LH 与 FSH', value: '反映促性腺激素的驱动强度。用药后下降说明负反馈已经建立。' },
              { label: '催乳素', value: '使用醋酸环丙孕酮（CPA）前必须测，之后需要定期对比。' },
            ],
          },
          {
            title: '脏器功能与代谢',
            level: '判断安全边界',
            rows: [
              { label: '肝功能', value: 'ALT、AST、ALP、总胆红素。CPA 与比卡鲁胺都可能造成肝损伤，必须在用药前留下底数。' },
              { label: '肾功能与电解质', value: '肌酐、eGFR、血钾。使用螺内酯前尤其关键，因为它是保钾利尿剂。' },
              { label: '血常规', value: '红细胞与血小板计数，作为整体健康与出血风险的参照。' },
              { label: '血脂与血糖', value: '总胆固醇、甘油三酯、HDL、LDL，空腹血糖或 HbA1c。口服雌激素会改变血脂谱，需要基线对比。' },
              { label: '维生素 D 与钙', value: '长期低雌激素状态下骨代谢是薄弱环节，起始时了解储备有助于判断是否需要补充。' },
            ],
          },
          {
            title: '按个人情况追加',
            level: '风险分层',
            rows: [
              { label: '血栓风险筛查', value: '若有一级亲属静脉血栓史、已知易栓症、或既往血栓事件，应在开始口服雌激素前与医生讨论，必要时筛查凝血功能。' },
              { label: '骨密度（DEXA）', value: '计划长期使用低剂量雌激素、或已经有长时间低激素状态、或存在骨折风险因素时建议做基线。' },
              { label: '丙型肝炎 / 乙肝相关检查', value: '涉及肝功能解读与用药安全，按医生判断。' },
            ],
          },
        ],
      },
      {
        heading: '复查节奏',
        note: '时间点会随方案、剂量与个人风险变化。以下是一般规律，具体由医生决定。',
        quote: '调整剂量后必须复查，而不是仅凭感觉判断。血药浓度与主观感受经常不一致。',
        cards: [
          {
            title: '起始与调量阶段',
            level: '每 1–3 个月',
            rows: [
              { label: '目的', value: '确认激素水平是否进入目标区间、是否出现早期不良反应，并据此调整剂量。' },
              { label: '重点项目', value: '总睾酮、雌二醇；使用螺内酯时加查血钾与肌酐；使用 CPA 或比卡鲁胺时加查肝功能。' },
            ],
          },
          {
            title: '稳定维持阶段',
            level: '每 6–12 个月',
            rows: [
              { label: '目的', value: '在方案与剂量不再变动后，做长期安全性随访。' },
              { label: '重点项目', value: '激素水平、肝功能、血脂、血常规、催乳素（用 CPA 者）。' },
            ],
          },
          {
            title: '螺内酯的特殊节奏',
            level: '起始与加量后 1–2 周',
            rows: [
              { label: '为什么', value: '血钾升高通常出现在开始用药或增加剂量后不久，且早期无症状。' },
              { label: '例外', value: 'UCSF 指南认为，对健康的年轻患者，若无合并用药与肾功能异常，常规反复查血钾的必要性有限；但一旦合并 ACEI/ARB、NSAIDs 或存在肾脏问题，监测就不可省略。' },
            ],
          },
          {
            title: '骨密度随访',
            level: '每 1–2 年',
            rows: [
              { label: '适用对象', value: '长期处于低雌激素状态、已绝经年龄段、或基线骨密度偏低者。' },
            ],
          },
        ],
      },
      {
        heading: '结果怎么看：常用参考区间',
        note: '目标区间是方向而非绝对标准。指南给出的是范围，个体的合理目标值取决于你想要的改变程度与身体反应。',
        cards: [
          {
            title: '总睾酮',
            level: '抑制目标',
            rows: [
              { label: '女性范围参考', value: '低于 50 ng/dL（约 1.8 nmol/L）。Endocrine Society 2017 指南将这一水平作为抗雄激素治疗充分的一般参考。' },
              { label: '注意', value: '数值不是越低越好。过度抑制同样带来骨质流失、疲乏与性功能问题。' },
            ],
          },
          {
            title: '雌二醇（E2）',
            level: '维持目标',
            rows: [
              { label: '常见区间', value: '约 100–200 pg/mL（367–734 pmol/L），大致对应绝经前女性的范围。' },
              { label: '上限考量', value: '200 pg/mL 常被用作口服途径下的一般上限参考，主要用于限制血栓与肝脏负担；该阈值并非来自随机对照试验，各机构表述不一。' },
              { label: '采血时机', value: '口服或凝胶、贴片者，按医生建议在用药后固定时间点采血；注射者需注明距上次注射的天数，否则数值无法解读。' },
            ],
          },
          {
            title: '催乳素',
            level: '用 CPA 时重点看',
            rows: [
              { label: '关注点', value: '较基线明显且持续升高，或出现溢乳、头痛、视野改变时需要进一步评估。' },
              { label: '背景', value: '长期高剂量 CPA 与催乳素瘤、脑膜瘤的关联已有病例报道。推荐量因此持续下调，WPATH SOC-8（2022）已将 CPA 推荐量降至 10 mg/日。' },
            ],
          },
          {
            title: '肝功能',
            level: '相对变化比绝对值重要',
            rows: [
              { label: '解读方式', value: '以自身基线为参照。轻度的转氨酶波动常见，但持续上升或超过正常上限数倍需要立即就医评估。' },
              { label: '症状', value: '黄疸、深色尿、右上腹持续不适、明显乏力或恶心——出现这些不要等待下次复查。' },
            ],
          },
        ],
      },
      {
        heading: '出现这些情况不要等下次复查',
        note: '以下任一情况属于应当尽快就医的范畴，与是否到了复查时间无关。',
        rows: [
          { label: '呼吸系统', value: '突发气短、胸痛、咯血——需排除肺栓塞。' },
          { label: '下肢', value: '单侧小腿或大腿肿胀、发热、压痛——需排除深静脉血栓。' },
          { label: '神经系统', value: '突发剧烈头痛、视力改变、视物重影、肢体麻木无力。' },
          { label: '肝损伤表现', value: '皮肤或眼白发黄、尿色变深如浓茶、持续右上腹痛、无法解释的极度乏力。' },
          { label: '心脏与电解质', value: '明显心悸、心律不齐、肌肉无力或抽搐（可能与血钾异常有关）。' },
          { label: '情绪', value: '出现自伤念头或严重抑郁加重——这是需要立即获得帮助的医疗情况。' },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Monitoring While on Treatment: What to Test, How Often, and How to Read It',
    lead: 'Monitoring is not box-ticking. It answers three concrete questions: whether the medication is working, whether any early and reversible damage has appeared, and whether the current dose has exceeded what your body tolerates. None of these can be judged by how you feel — raised liver enzymes, high potassium and falling bone density are typically silent at first.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Baseline Testing Before Starting',
        note: 'The point of a baseline is to leave yourself a reference line. Without one, no later "abnormal" result can be attributed to the medication rather than to how you already were.',
        cards: [
          {
            title: 'Endocrine and gonadal axis',
            level: 'Establishing the starting point',
            rows: [
              { label: 'Total testosterone', value: 'Confirms the starting level of endogenous androgen and becomes the benchmark for judging whether suppression is adequate.' },
              { label: 'Estradiol (E2)', value: 'Usually low at baseline; measuring estrone (E1) as well helps interpret later metabolism via the oral route.' },
              { label: 'LH and FSH', value: 'Reflects the driving strength of gonadotropin signalling. A fall after starting indicates negative feedback has been established.' },
              { label: 'Prolactin', value: 'Must be measured before using cyproterone acetate (CPA) and compared periodically thereafter.' },
            ],
          },
          {
            title: 'Organ function and metabolism',
            level: 'Defining the safety boundary',
            rows: [
              { label: 'Liver function', value: 'ALT, AST, ALP, total bilirubin. Both CPA and bicalutamide can cause liver injury, so a pre-treatment baseline is essential.' },
              { label: 'Kidney function and electrolytes', value: 'Creatinine, eGFR, potassium. Especially critical before spironolactone, which is a potassium-sparing diuretic.' },
              { label: 'Complete blood count', value: 'Red cell and platelet counts as a reference for general health and bleeding risk.' },
              { label: 'Lipids and glucose', value: 'Total cholesterol, triglycerides, HDL, LDL, fasting glucose or HbA1c. Oral estrogen shifts the lipid profile, so a baseline is needed for comparison.' },
              { label: 'Vitamin D and calcium', value: 'Bone metabolism is a weak point under prolonged low-estrogen states; knowing your reserve helps decide whether supplementation is needed.' },
            ],
          },
          {
            title: 'Added according to individual risk',
            level: 'Risk stratification',
            rows: [
              { label: 'Thrombosis risk screening', value: 'With a first-degree relative with venous thromboembolism, a known thrombophilia, or a previous clot, discuss screening before starting oral estrogen.' },
              { label: 'Bone density (DEXA)', value: 'Advised for those planning long-term low-dose estrogen, those who have already spent a long time in a low-hormone state, or those with fracture risk factors.' },
              { label: 'Hepatitis serology', value: 'Relevant to interpreting liver function and to medication safety; at the clinician\'s discretion.' },
            ],
          },
        ],
      },
      {
        heading: 'Testing Schedule',
        note: 'Timing varies with regimen, dose and individual risk. The following is the general pattern; your clinician decides the specifics.',
        quote: 'A dose change must be followed by repeat testing, not by impression alone. Blood levels and subjective experience frequently disagree.',
        cards: [
          {
            title: 'Initiation and dose adjustment',
            level: 'Every 1–3 months',
            rows: [
              { label: 'Purpose', value: 'Confirm hormone levels have entered the target range, catch early adverse effects, and adjust the dose accordingly.' },
              { label: 'Key tests', value: 'Total testosterone, estradiol; add potassium and creatinine with spironolactone; add liver function with CPA or bicalutamide.' },
            ],
          },
          {
            title: 'Stable maintenance',
            level: 'Every 6–12 months',
            rows: [
              { label: 'Purpose', value: 'Long-term safety follow-up once the regimen and dose have stopped changing.' },
              { label: 'Key tests', value: 'Hormone levels, liver function, lipids, complete blood count, prolactin (with CPA).' },
            ],
          },
          {
            title: 'A special schedule for spironolactone',
            level: '1–2 weeks after starting or increasing',
            rows: [
              { label: 'Why', value: 'Raised potassium usually appears soon after starting or increasing the dose, and is asymptomatic early on.' },
              { label: 'Exception', value: 'The UCSF guidelines consider routine repeated potassium testing of limited necessity in healthy young patients without interacting medication or renal impairment; when an ACE inhibitor/ARB, an NSAID or kidney disease is present, monitoring is not optional.' },
            ],
          },
          {
            title: 'Bone density follow-up',
            level: 'Every 1–2 years',
            rows: [
              { label: 'Who', value: 'Those in a prolonged low-estrogen state, those in the postmenopausal age range, or those with a low baseline bone density.' },
            ],
          },
        ],
      },
      {
        heading: 'Reading the Results: Common Reference Ranges',
        note: 'Target ranges are directions, not absolute standards. Guidelines give ranges; your reasonable target depends on how much change you want and how your body responds.',
        cards: [
          {
            title: 'Total testosterone',
            level: 'Suppression target',
            rows: [
              { label: 'Female-range reference', value: 'Below 50 ng/dL (about 1.8 nmol/L). The Endocrine Society 2017 guideline uses this level as a general reference for adequate anti-androgen therapy.' },
              { label: 'Caution', value: 'Lower is not better. Over-suppression likewise causes bone loss, fatigue and sexual dysfunction.' },
            ],
          },
          {
            title: 'Estradiol (E2)',
            level: 'Maintenance target',
            rows: [
              { label: 'Common range', value: 'Roughly 100–200 pg/mL (367–734 pmol/L), broadly corresponding to the premenopausal female range.' },
              { label: 'Upper limit', value: '200 pg/mL is often used as a general ceiling reference for the oral route, mainly to limit thrombotic and hepatic burden; that threshold does not come from randomised trials and institutions state it differently.' },
              { label: 'Sampling timing', value: 'For oral, gel or patch users, sample at a consistent time after dosing as advised; for injections, record the number of days since the last injection, otherwise the value cannot be interpreted.' },
            ],
          },
          {
            title: 'Prolactin',
            level: 'Key when using CPA',
            rows: [
              { label: 'What to watch', value: 'A marked and persistent rise above baseline, or galactorrhoea, headache or visual-field changes, warrants further evaluation.' },
              { label: 'Background', value: 'Prolactinoma and meningioma have been reported with prolonged high-dose CPA. Recommended doses have been falling in response, and WPATH SOC-8 (2022) lowered the CPA recommendation to 10 mg/day.' },
            ],
          },
          {
            title: 'Liver function',
            level: 'Trend matters more than a single value',
            rows: [
              { label: 'How to read it', value: 'Use your own baseline. Mild transaminase fluctuation is common, but a sustained rise, or a rise to several times the upper limit of normal, needs urgent assessment.' },
              { label: 'Symptoms', value: 'Jaundice, dark urine, persistent right-upper-abdominal discomfort, marked fatigue or nausea — do not wait for the next scheduled test.' },
            ],
          },
        ],
      },
      {
        heading: 'Do Not Wait for the Next Appointment If…',
        note: 'Any of the following warrants prompt medical assessment, regardless of where you are in the testing cycle.',
        rows: [
          { label: 'Respiratory', value: 'Sudden shortness of breath, chest pain, coughing blood — pulmonary embolism must be excluded.' },
          { label: 'Lower limb', value: 'Unilateral calf or thigh swelling, warmth, tenderness — deep-vein thrombosis must be excluded.' },
          { label: 'Neurological', value: 'Sudden severe headache, visual change, double vision, limb numbness or weakness.' },
          { label: 'Liver injury', value: 'Yellowing of skin or eyes, urine the colour of strong tea, persistent right-upper-abdominal pain, unexplained extreme fatigue.' },
          { label: 'Cardiac and electrolyte', value: 'Marked palpitations, irregular heartbeat, muscle weakness or cramps (possibly related to abnormal potassium).' },
          { label: 'Mood', value: 'Thoughts of self-harm or severe worsening depression — this is a medical situation requiring immediate help.' },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function Monitoring() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
