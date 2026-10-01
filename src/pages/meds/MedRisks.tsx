import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { ENDO_SOCIETY_2017, SOC8, UCSF, TFS_BLOOD_CLOTS, TFS_CPA_MENINGIOMA, TFS_BREAST_CANCER, TFS_BONE } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  ENDO_SOCIETY_2017,
  SOC8,
  UCSF,
  TFS_BLOOD_CLOTS,
  TFS_CPA_MENINGIOMA,
  TFS_BREAST_CANCER,
  TFS_BONE,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '用药风险：需要提前知道的事',
    lead: '风险不是用来吓人的，而是用来做选择的。同一个药物在不同给药途径、不同剂量、不同基础健康状况下，风险并不相同——所以真正有用的问法不是"这个药危不危险"，而是"以我的情况，用哪种方式、哪个剂量，风险最低"。这一页按器官系统梳理女性化激素治疗中需要提前了解的风险，以及哪些情况必须立刻就医。',
    hasDoses: true,
    blocks: [
      {
        heading: '血栓风险（VTE）',
        note: '静脉血栓栓塞（VTE）包括深静脉血栓与肺栓塞，是雌激素治疗中最需要理解的一类风险。口服雌激素经门静脉直接进入肝脏，首过效应会刺激肝脏合成凝血因子，使凝血倾向增强；透皮途径（凝胶、贴片）绕过首过效应，对凝血因子的影响小得多。因此在选择给药途径时，血栓风险是最实际的考量之一。',
        quote: '风险的高低主要取决于给药途径和是否存在下列风险因素，而不是单纯看剂量。',
        cards: [
          {
            title: '口服途径',
            level: '首过效应显著',
            rows: [
              { label: '首过效应', value: '药物经胃肠道吸收后先经过门静脉进入肝脏，肝脏暴露浓度远高于外周循环。' },
              { label: '对凝血的影响', value: '刺激肝脏合成凝血因子，并影响凝血抑制物，使整体凝血倾向上升。' },
              { label: '适用考量', value: '无上述风险因素、年龄较轻且不吸烟者，口服通常仍是可行选项；存在风险因素时，应优先与医生讨论换成透皮途径。' },
            ],
          },
          {
            title: '透皮途径',
            level: '绕过首过效应',
            rows: [
              { label: '首过效应', value: '药物经皮肤吸收后直接进入体循环，不经过门静脉，肝脏在首过阶段基本不参与。' },
              { label: '对凝血的影响', value: '对凝血因子合成的影响很小，是目前认为血栓风险最低的给药途径。' },
              { label: '适用考量', value: '存在吸烟、肥胖、年龄超过 40 岁、一级亲属静脉血栓史、已知易栓症、长期制动或近期手术、偏头痛伴先兆中任一情况时，透皮途径通常是更合理的选择。' },
            ],
          },
        ],
      },
      {
        heading: '肝脏与代谢',
        note: '肝脏承担雌激素与抗雄药物的代谢。口服途径给肝脏带来的负担明显大于透皮途径；而部分抗雄药物本身具有直接的肝毒性，这是需要单独关注的另一件事。',
        cards: [
          {
            title: '肝功能损害',
            level: '需定期复查',
            rows: [
              { label: '醋酸环丙孕酮（CPA）', value: '有肝毒性风险，个案中可发展为严重肝损伤，用药期间需要定期监测肝功能。' },
              { label: '比卡鲁胺', value: '说明书中有严重肝损伤（含致死病例）的警告；UCSF 指南因这一风险明确不推荐在跨性别人群中使用。用药前与用药期间都应评估肝功能。' },
              { label: '口服雌激素', value: '增加肝脏代谢负担，对胆汁分泌与肝脏合成功能均有影响。透皮途径可明显减轻这部分负担。' },
              { label: '需要警惕的表现', value: '皮肤或眼白发黄、尿色变深、持续右上腹不适、无法解释的极度乏力或恶心，出现任一情况应尽快就医，不要等到下次复查。' },
            ],
          },
          {
            title: '血脂与甘油三酯',
            level: '途径差异明显',
            rows: [
              { label: '口服途径', value: '会升高甘油三酯，对 HDL 与 LDL 的影响与透皮途径不同。甘油三酯显著升高时存在胰腺炎风险，需要认真对待。' },
              { label: '透皮途径', value: '对血脂谱影响很小，在血脂异常或心血管风险较高的人群中通常更受推荐。' },
              { label: '需要关注的人', value: '已有血脂异常、糖尿病、肥胖、或一级亲属早发心血管疾病者，起始前应查血脂并定期复查。' },
            ],
          },
          {
            title: '胆囊',
            level: '与口服途径相关',
            rows: [
              { label: '机制', value: '雌激素增加胆汁中胆固醇的饱和度，使胆固醇更容易析出结晶，胆结石风险随之升高。' },
              { label: '途径差异', value: '这一效应主要与口服途径相关，透皮途径对其影响较小。' },
              { label: '症状', value: '进食后右上腹或上腹绞痛、向右肩背部放射、伴恶心呕吐，需要就医评估。' },
            ],
          },
        ],
      },
      {
        heading: '内分泌与神经系统相关风险',
        note: '这一类风险多数与抗雄药物相关，也更依赖长期随访才能发现。它们的共同特点是早期没有症状，因此不能靠自我感觉判断。',
        quote: '低剂量方案不等于低风险，它把风险从血栓换成了骨骼。',
        cards: [
          {
            title: '催乳素',
            level: '与 CPA 相关',
            rows: [
              { label: '机制', value: 'CPA 具有孕激素活性，可刺激垂体分泌催乳素，使血催乳素水平升高。' },
              { label: '长期风险', value: '长期高剂量使用与催乳素瘤、脑膜瘤的关联有病例报道。风险随累积剂量上升，这也是推荐量持续下调的原因——WPATH SOC-8（2022）已将 CPA 推荐量降至 10 mg/日。' },
              { label: '需要就医的表现', value: '溢乳、持续头痛、视野改变或视力下降，需要尽快评估，而不是继续观察。' },
            ],
          },
          {
            title: '情绪与认知',
            level: '个体差异大',
            rows: [
              { label: '报告内容', value: '孕激素类药物，尤其是 CPA，与抑郁情绪、疲乏的关联有报告。' },
              { label: '如何理解', value: '这类关联多来自观察与个例，无法预测某个人会不会出现；个体差异很大，有的人完全不受影响。' },
              { label: '应对', value: '如果情绪在用药后明显变差，这本身就是需要调整方案的临床信息，应当告诉医生；出现自伤念头属于急症。' },
            ],
          },
          {
            title: '骨骼（低激素陷阱）',
            level: '最容易被忽视',
            rows: [
              { label: '机制', value: '骨密度同时受雌激素与睾酮保护。如果雌激素剂量不足以维持骨密度，而睾酮又被抗雄药物抑制，骨骼会同时失去两种保护。' },
              { label: '谁会遇到', value: '使用低剂量雌激素的非二元人群、长期处于低激素状态者、以及已进入绝经年龄段者。' },
              { label: '为什么危险', value: '骨质流失早期没有任何症状，往往在骨折或骨密度检查时才被发现。' },
              { label: '可做的监测', value: '必要时做基线骨密度检查并按医生建议随访，保证钙与维生素 D 摄入，并让激素水平维持在能保护骨骼的范围内。' },
            ],
          },
          {
            title: '高钾血症',
            level: '螺内酯相关',
            rows: [
              { label: '机制', value: '螺内酯是保钾利尿剂，会减少肾脏排钾，使血钾升高。' },
              { label: '风险升高的情况', value: '与 ACEI/ARB 类药物、NSAIDs 合用，或本身存在肾功能不全时，风险明显升高。' },
              { label: '表现', value: '明显心悸、心律不齐、肌肉无力或抽搐。早期往往没有症状，因此有上述合并情况时监测不可省略。' },
            ],
          },
        ],
      },
      {
        heading: '生育力与乳腺',
        note: '这两件事的共同点是：都需要在开始用药之前就想清楚，因为等到问题出现时，可选项已经变少了。',
        cards: [
          {
            title: '生育力保存',
            level: '用药前决定',
            rows: [
              { label: '影响', value: '雌激素联合抗雄药物会抑制精子生成，这种抑制不一定在停药后完全恢复。' },
              { label: '可逆性', value: '睾酮抑制的效果不是避孕手段，也不保证可逆。把"停药后会恢复"当作前提是有风险的。' },
              { label: '建议', value: '如果将来可能想要亲生子女，应在开始用药前咨询精子冷冻保存。这是唯一能真正保留选择的时机。' },
            ],
          },
          {
            title: '乳腺监测',
            level: '证据有限',
            rows: [
              { label: '风险数据', value: '长期雌激素暴露下，AMAB 人群的乳腺癌风险数据仍然有限，目前没有一致证据显示风险大幅升高。' },
              { label: '仍然需要警惕', value: '出现乳房肿块、单侧固定硬块、乳头溢液或皮肤改变时需要就诊，不要默认它是"发育中的正常现象"。' },
              { label: '为什么', value: 'AMAB 人群的乳腺组织相对致密，影像评估更困难，因此任何持续存在的异常都应让医生判断。' },
            ],
          },
        ],
      },
      {
        heading: '安全红线：出现这些情况立即就医',
        note: '以下情况不属于"再观察几天"的范畴。它们指向可能危及生命的急症，处理时间直接影响结果。',
        rows: [
          { label: '下肢', value: '单侧下肢肿胀、发热、压痛——需要排除深静脉血栓（DVT）。' },
          { label: '呼吸与循环', value: '突发气短、胸痛、咯血——需要排除肺栓塞（PE）。' },
          { label: '神经系统', value: '突发剧烈头痛、视力改变、视物重影、肢体麻木无力。' },
          { label: '肝脏', value: '皮肤或眼白发黄、尿色变深、持续右上腹痛、无法解释的极度乏力。' },
          { label: '电解质', value: '心悸伴肌肉无力或抽搐——可能与血钾异常有关。' },
          { label: '情绪', value: '出现自伤念头——这是需要立即获得帮助的医疗情况。' },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Treatment Risks: What to Know in Advance',
    lead: 'Risk is not a scare tactic; it is the raw material of a decision. The same drug carries different risks by route, by dose and by baseline health — so the useful question is not "is this drug dangerous" but "for my situation, which route and which dose carry the least risk". This page walks through the risks of feminising hormone therapy by organ system, and sets out the situations that require immediate medical attention.',
    hasDoses: true,
    blocks: [
      {
        heading: 'Thrombotic Risk (VTE)',
        note: 'Venous thromboembolism (VTE) covers deep-vein thrombosis and pulmonary embolism, and it is the risk most worth understanding in estrogen therapy. Oral estrogen absorbed from the gut passes through the portal vein straight into the liver; that first-pass exposure stimulates hepatic synthesis of clotting factors and shifts the balance toward clotting. Transdermal routes (gel, patch) bypass first-pass metabolism and have far less effect on clotting factors. When choosing a route, thrombotic risk is one of the most practical considerations.',
        quote: 'How high the risk runs depends mainly on the route of administration and on whether the factors below are present — not on dose alone.',
        cards: [
          {
            title: 'Oral route',
            level: 'Substantial first-pass effect',
            rows: [
              { label: 'First-pass effect', value: 'After gut absorption the drug enters the liver via the portal vein, exposing the liver to concentrations far above those in the systemic circulation.' },
              { label: 'Effect on clotting', value: 'Stimulates hepatic synthesis of clotting factors and affects natural anticoagulants, shifting the overall balance toward coagulation.' },
              { label: 'When it is reasonable', value: 'For younger non-smokers with none of the risk factors listed here, oral use usually remains a reasonable option; when risk factors are present, discuss switching to a transdermal route.' },
            ],
          },
          {
            title: 'Transdermal route',
            level: 'Bypasses first-pass metabolism',
            rows: [
              { label: 'First-pass effect', value: 'Drug absorbed through the skin enters the systemic circulation directly, avoiding the portal vein and largely bypassing hepatic first-pass exposure.' },
              { label: 'Effect on clotting', value: 'Minimal effect on clotting-factor synthesis; this is currently regarded as the route with the lowest thrombotic risk.' },
              { label: 'When it is preferred', value: 'With any of the following — smoking, obesity, age over 40, a first-degree relative with venous thrombosis, known thrombophilia, prolonged immobilisation or recent surgery, or migraine with aura — transdermal delivery is usually the more sensible choice.' },
            ],
          },
        ],
      },
      {
        heading: 'Liver and Metabolism',
        note: 'The liver handles the metabolism of both estrogen and anti-androgens. Oral delivery places a clearly greater burden on the liver than transdermal delivery, and some anti-androgens carry direct liver toxicity of their own — a separate problem that deserves separate attention.',
        cards: [
          {
            title: 'Liver injury',
            level: 'Requires periodic testing',
            rows: [
              { label: 'Cyproterone acetate (CPA)', value: 'Carries a risk of hepatotoxicity, which in individual cases has progressed to serious liver injury; liver function should be monitored during treatment.' },
              { label: 'Bicalutamide', value: 'Its label carries a warning for severe liver injury, including fatal cases; the UCSF guidelines advise against using it in transgender people for this reason. Liver function should be assessed before and during treatment.' },
              { label: 'Oral estrogen', value: 'Increases hepatic metabolic burden and affects both bile secretion and hepatic synthetic function. The transdermal route avoids much of this.' },
              { label: 'Warning signs', value: 'Yellowing of the skin or eyes, dark urine, persistent right-upper-abdominal discomfort, or unexplained extreme fatigue or nausea — seek care promptly rather than waiting for the next scheduled test.' },
            ],
          },
          {
            title: 'Lipids and triglycerides',
            level: 'Clear route-dependent difference',
            rows: [
              { label: 'Oral route', value: 'Raises triglycerides and affects HDL and LDL differently from the transdermal route. Markedly raised triglycerides carry a risk of pancreatitis and should be taken seriously.' },
              { label: 'Transdermal route', value: 'Has little effect on the lipid profile and is generally preferred in people with dyslipidaemia or higher cardiovascular risk.' },
              { label: 'Who should watch this', value: 'Those with existing dyslipidaemia, diabetes, obesity, or a first-degree relative with premature cardiovascular disease should have lipids checked before starting and periodically thereafter.' },
            ],
          },
          {
            title: 'Gallbladder',
            level: 'Linked to the oral route',
            rows: [
              { label: 'Mechanism', value: 'Estrogen increases the cholesterol saturation of bile, making cholesterol crystallisation more likely and raising the risk of gallstones.' },
              { label: 'Route dependence', value: 'This effect is mainly associated with the oral route; transdermal delivery has much less influence.' },
              { label: 'Symptoms', value: 'Postprandial right-upper-abdominal or epigastric colic radiating to the right shoulder or back, with nausea and vomiting, warrants medical assessment.' },
            ],
          },
        ],
      },
      {
        heading: 'Endocrine and Neurological Risks',
        note: 'Most risks in this group relate to anti-androgen therapy, and most only surface through long-term follow-up. What they share is that they are silent early on, which is why how you feel is not a reliable guide.',
        quote: 'A low-dose regimen is not a low-risk regimen; it trades thrombotic risk for skeletal risk.',
        cards: [
          {
            title: 'Prolactin',
            level: 'Related to CPA',
            rows: [
              { label: 'Mechanism', value: 'CPA has progestogenic activity and can stimulate pituitary prolactin secretion, raising blood prolactin levels.' },
              { label: 'Long-term risk', value: 'Prolactinoma and meningioma have been reported with prolonged high-dose use. Risk rises with cumulative dose, which is why recommended doses keep falling — WPATH SOC-8 (2022) lowered the CPA recommendation to 10 mg/day.' },
              { label: 'When to seek care', value: 'Galactorrhoea, persistent headache, or changes in visual field or acuity need prompt evaluation rather than continued observation.' },
            ],
          },
          {
            title: 'Mood and cognition',
            level: 'Highly individual',
            rows: [
              { label: 'What has been reported', value: 'Progestogens, and CPA in particular, have been reported in association with depressed mood and fatigue.' },
              { label: 'How to read this', value: 'Such associations come largely from observational reports and individual cases; they cannot predict what will happen to any one person, and individual variation is wide — some people are unaffected.' },
              { label: 'What to do', value: 'If your mood clearly worsens after starting treatment, that is itself clinical information that warrants revisiting the regimen with your clinician; thoughts of self-harm are an emergency.' },
            ],
          },
          {
            title: 'Bone (the low-hormone trap)',
            level: 'Most easily overlooked',
            rows: [
              { label: 'Mechanism', value: 'Bone density is protected by both estrogen and testosterone. If the estrogen dose is too low to maintain bone density while an anti-androgen suppresses testosterone, the skeleton loses both forms of protection at once.' },
              { label: 'Who this affects', value: 'Non-binary people on low-dose estrogen, those who have spent a long time in a low-hormone state, and those already in the postmenopausal age range.' },
              { label: 'Why it is dangerous', value: 'Bone loss is asymptomatic early on and is often found only after a fracture or on a bone-density scan.' },
              { label: 'What can be done', value: 'Where indicated, obtain a baseline bone-density scan and follow up as advised, keep calcium and vitamin D intake adequate, and keep hormone levels within a range that protects bone.' },
            ],
          },
          {
            title: 'Hyperkalaemia',
            level: 'Related to spironolactone',
            rows: [
              { label: 'Mechanism', value: 'Spironolactone is a potassium-sparing diuretic; it reduces renal potassium excretion and raises serum potassium.' },
              { label: 'When risk rises', value: 'Concurrent ACE inhibitors or ARBs, NSAIDs, or pre-existing renal impairment all raise the risk substantially.' },
              { label: 'Presentation', value: 'Marked palpitations, irregular heartbeat, muscle weakness or cramps. It is often asymptomatic early, so monitoring is not optional when the above conditions apply.' },
            ],
          },
        ],
      },
      {
        heading: 'Fertility and Breast Tissue',
        note: 'These two have something in common: both need to be thought through before treatment starts, because once the problem appears the available options have already narrowed.',
        cards: [
          {
            title: 'Fertility preservation',
            level: 'Decide before starting',
            rows: [
              { label: 'Impact', value: 'Estrogen combined with an anti-androgen suppresses sperm production, and that suppression does not necessarily recover fully after stopping.' },
              { label: 'Reversibility', value: 'Testosterone suppression is not a contraceptive method and is not guaranteed to be reversible. Treating "it will come back after I stop" as a given is risky.' },
              { label: 'Recommendation', value: 'If biological children may matter to you later, consult about sperm cryopreservation before starting treatment. That is the only point at which the choice is genuinely open.' },
            ],
          },
          {
            title: 'Breast monitoring',
            level: 'Limited evidence',
            rows: [
              { label: 'Risk data', value: 'Breast cancer risk data for AMAB people under long-term estrogen exposure remain limited, and there is currently no consistent evidence of a large increase in risk.' },
              { label: 'Still worth checking', value: 'A breast lump, a fixed unilateral mass, nipple discharge or skin changes warrants assessment — do not assume it is simply part of development.' },
              { label: 'Why', value: 'Breast tissue in AMAB people tends to be denser, which makes imaging harder to interpret, so any persistent abnormality should be assessed by a clinician.' },
            ],
          },
        ],
      },
      {
        heading: 'Safety Lines: Seek Care Immediately If…',
        note: 'The following do not fall into the "wait a few days and see" category. They point to potentially life-threatening emergencies where time to treatment directly affects the outcome.',
        rows: [
          { label: 'Lower limb', value: 'Unilateral leg swelling, warmth or tenderness — deep-vein thrombosis (DVT) must be excluded.' },
          { label: 'Breathing and circulation', value: 'Sudden shortness of breath, chest pain, coughing blood — pulmonary embolism (PE) must be excluded.' },
          { label: 'Neurological', value: 'Sudden severe headache, visual change, double vision, limb numbness or weakness.' },
          { label: 'Liver', value: 'Yellowing of the skin or eyes, dark urine, persistent right-upper-abdominal pain, unexplained extreme fatigue.' },
          { label: 'Electrolytes', value: 'Palpitations together with muscle weakness or cramps — possibly related to abnormal potassium.' },
          { label: 'Mood', value: 'Thoughts of self-harm — this is a medical situation requiring immediate help.' },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function MedRisks() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
