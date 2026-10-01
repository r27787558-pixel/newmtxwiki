import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import type { MedDoc, MedSource } from './meddoc';
import { SOC8, TFS_SERMS, TFS_NONBINARY } from './sources';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  SOC8,
  TFS_SERMS,
  TFS_NONBINARY,
];

const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '选择性雌激素受体调节剂（SERM）',
    lead: 'SERM 在 AMAB 非二元人群的 HRT 中是一个被反复讨论、但证据基础相当薄弱的方向。它吸引人的地方在于一种设想：拿到雌激素对骨骼和代谢的部分好处，同时限制乳腺发育。这个设想在药理上说得通，在临床上却没有被充分验证。以下内容区分"机制上合理"与"已被证据支持"这两件事。',
    hasDoses: true,
    blocks: [
      {
        heading: '什么是 SERM',
        note: 'SERM 不是激素本身，而是一类在不同组织中对雌激素受体分别起激动或拮抗作用的药物。这种组织选择性正是它在非二元 HRT 中被讨论的原因。',
        quote: 'SERM 的核心特征是组织选择性——在骨骼和脂代谢上表现为雌激素样的保护作用，在乳腺和子宫内膜上则表现为拮抗作用。',
        cards: [
          {
            title: '作用原理',
            level: '组织选择性',
            rows: [
              { label: '组织选择性', value: '同一个分子与雌激素受体结合后，在不同组织中触发的下游效应并不相同：在骨骼与脂代谢上偏向激动，在乳腺与子宫内膜上偏向拮抗。这种差异来自不同组织内受体亚型与共调节蛋白的组成不同，而不是药物本身会"挑地方去"。' },
              { label: '与雌激素的区别', value: '雌激素对受体是全面激动，作用方向一致；SERM 的作用方向随组织而变。因此 SERM 不能被视为"温和的雌激素"，也不能简单按雌激素的剂量逻辑去理解。' },
              { label: '不等于抗雄激素', value: 'SERM 没有抗雄激素作用，不能替代抗雄药物。它不抑制睾酮的生成，也不阻断雄激素受体；把 SERM 当作抗雄激素使用是概念上的错误。' },
            ],
          },
        ],
      },
      {
        heading: '雷洛昔芬',
        note: '雷洛昔芬是讨论最多的一个 SERM，原因之一是它在顺性别绝经后女性中有明确的批准适应症，安全数据相对完整；但这些数据不能直接外推到 AMAB 人群的 HRT。',
        cards: [
          {
            title: '雷洛昔芬',
            level: '证据非常有限',
            rows: [
              { label: '机制', value: '在骨骼与脂代谢上作为雌激素受体激动剂，在乳腺与子宫内膜上作为拮抗剂。' },
              { label: '常用剂量', value: '口服 60 mg/日，每日一次。这是它用于绝经后女性骨质疏松的批准剂量，并非为非二元 HRT 设定的剂量。' },
              { label: '在 AMAB 人群中的用途', value: '部分 AMAB 非二元个体希望获得雌激素对骨骼的保护和部分代谢益处，同时限制乳腺发育，会考虑使用雷洛昔芬。这是一个目标明确的诉求，但能否通过雷洛昔芬实现，目前没有可靠答案。' },
              { label: '证据强度', value: '证据非常有限。在这个人群中的使用主要来自社区经验与个案，缺乏随机对照试验。这不是标准方案，任何指南都没有把它列为非二元 HRT 的常规选项。' },
              { label: '风险', value: '静脉血栓栓塞风险与雌激素类似，这一点常被低估。潮热是常见不良反应。雷洛昔芬不易透过血脑屏障，因此基本没有雌激素对中枢神经系统（情绪、性欲）的作用——如果期待的是情绪或性欲方面的改变，雷洛昔芬通常给不了。' },
              { label: '监测', value: '血栓风险因素评估，按医生判断。开始前应明确既往血栓事件、易栓症与一级亲属血栓史，具体检查项目与复查节奏由医生决定。' },
            ],
          },
        ],
      },
      {
        heading: '他莫昔芬',
        note: '他莫昔芬同样是 SERM，但在跨性别 HRT 中使用较少，主要原因是代谢依赖性与不良反应特征，而非单纯的证据不足。',
        cards: [
          {
            title: '他莫昔芬',
            level: '不作为非二元 HRT 的常规选择',
            rows: [
              { label: '机制', value: '与雷洛昔芬同属 SERM，在各组织中对雌激素受体分别起激动或拮抗作用。' },
              { label: '常用剂量', value: '口服 10–20 mg/日。这是它在该类药物一般临床使用中的剂量区间，不是为非二元 HRT 确立的剂量。' },
              { label: '使用现状', value: '在跨性别 HRT 中使用较少。它是前体药物，需要经 CYP2D6 代谢才有活性，因此效果受个体代谢差异和合并用药影响——同样的剂量在不同人身上可能产生相当不同的活性代谢物水平。' },
              { label: '风险', value: '潮热、情绪影响、静脉血栓风险；半衰期长，停药后作用消退慢，出现不良反应时无法通过停药迅速终止。在非二元 HRT 中不作为常规选择。' },
            ],
          },
        ],
      },
      {
        heading: '重要提醒',
        note: '以下几条不是免责声明，而是使用这类药物前必须弄清楚的前提。',
        rows: [
          { label: '与雌激素合用', value: 'SERM 与雌激素合用时两者会相互影响，必须由医生评估，不要自行叠加。' },
          { label: '不能替代抗雄药物', value: 'SERM 没有抗雄激素作用，不能替代抗雄药物。' },
          { label: '乳腺发育', value: '关于 SERM 能否限制乳腺发育，目前缺乏可靠证据支持；把它当作"确定的乳腺发育阻断方案"是没有依据的。' },
          { label: '血栓风险', value: '使用前需要评估血栓风险。' },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title: 'Selective Estrogen Receptor Modulators (SERMs)',
    lead: 'SERMs are a recurring topic in HRT for AMAB non-binary people, but the evidence base is thin. Their appeal is a specific proposition: capture some of the bone and metabolic benefits of estrogen while limiting breast development. That proposition is pharmacologically coherent and clinically unproven. What follows separates "mechanistically plausible" from "supported by evidence".',
    hasDoses: true,
    blocks: [
      {
        heading: 'What a SERM Is',
        note: 'A SERM is not a hormone. It is a class of drugs that act as agonists or antagonists at the estrogen receptor depending on the tissue. That tissue selectivity is precisely why SERMs come up in non-binary HRT.',
        quote: 'The defining feature of a SERM is tissue selectivity — estrogen-like protective effects in bone and lipid metabolism, antagonism in breast and endometrium.',
        cards: [
          {
            title: 'Mechanism of action',
            level: 'Tissue selectivity',
            rows: [
              { label: 'Tissue selectivity', value: 'The same molecule bound to the estrogen receptor does not trigger the same downstream response everywhere: the effect leans agonist in bone and lipid metabolism, and antagonist in breast and endometrium. This difference comes from the mix of receptor subtypes and co-regulator proteins in each tissue, not from the drug choosing where to go.' },
              { label: 'How it differs from estrogen', value: 'Estrogen is a full agonist and its effects point in one direction. A SERM changes direction with the tissue. It therefore should not be read as "mild estrogen", and its dosing cannot be reasoned about the way estrogen dosing is.' },
              { label: 'Not an anti-androgen', value: 'SERMs have no anti-androgen effect and cannot replace anti-androgen medication. They do not suppress testosterone production and do not block the androgen receptor; using one as an anti-androgen is a conceptual error.' },
            ],
          },
        ],
      },
      {
        heading: 'Raloxifene',
        note: 'Raloxifene is the most discussed SERM, partly because it has a well-defined approved indication in cisgender postmenopausal women and therefore a comparatively complete safety record. That record does not transfer directly to HRT in AMAB people.',
        cards: [
          {
            title: 'Raloxifene',
            level: 'Evidence is very limited',
            rows: [
              { label: 'Mechanism', value: 'Acts as an estrogen receptor agonist in bone and lipid metabolism and as an antagonist in breast and endometrium.' },
              { label: 'Typical dose', value: '60 mg once daily by mouth. This is the approved dose for osteoporosis in postmenopausal women, not a dose established for non-binary HRT.' },
              { label: 'Use in AMAB people', value: 'Some AMAB non-binary individuals who want the bone protection and part of the metabolic benefit of estrogen while limiting breast development consider raloxifene. The goal is clear; whether raloxifene achieves it has no reliable answer.' },
              { label: 'Strength of evidence', value: 'Evidence is very limited. Use in this population rests mainly on community experience and individual cases, with no randomised controlled trials. This is not a standard regimen, and no guideline lists it as a routine option for non-binary HRT.' },
              { label: 'Risks', value: 'Venous thromboembolism risk is similar to that of estrogen, and this is often underestimated. Hot flushes are common. Raloxifene crosses the blood-brain barrier poorly, so it essentially provides none of the central nervous system effects of estrogen on mood and libido — if a change in mood or libido is what you are hoping for, raloxifene generally will not deliver it.' },
              { label: 'Monitoring', value: 'Assessment of thrombosis risk factors, at the clinician\'s discretion. Prior clot events, known thrombophilia and first-degree family history should be established beforehand; the specific tests and the follow-up interval are the clinician\'s call.' },
            ],
          },
        ],
      },
      {
        heading: 'Tamoxifen',
        note: 'Tamoxifen is also a SERM, but it is used less often in transgender HRT, mainly because of its metabolic dependence and its adverse-effect profile rather than a simple lack of evidence.',
        cards: [
          {
            title: 'Tamoxifen',
            level: 'Not a routine choice in non-binary HRT',
            rows: [
              { label: 'Mechanism', value: 'Like raloxifene, a SERM that acts as an agonist or antagonist at the estrogen receptor depending on the tissue.' },
              { label: 'Typical dose', value: '10–20 mg once daily by mouth. This is a dose range from general clinical use of the drug, not one established for non-binary HRT.' },
              { label: 'Current use', value: 'Used infrequently in transgender HRT. It is a prodrug that requires metabolism via CYP2D6 to become active, so its effect depends on individual metabolic variation and on concurrent medication — the same dose can produce quite different levels of active metabolite in different people.' },
              { label: 'Risks', value: 'Hot flushes, mood effects and venous thrombosis risk; the half-life is long, so effects fade slowly after stopping and an adverse reaction cannot be terminated quickly by discontinuation. It is not a routine choice in non-binary HRT.' },
            ],
          },
        ],
      },
      {
        heading: 'Important Cautions',
        note: 'These are not boilerplate disclaimers. They are prerequisites that need to be settled before this class of drug is used.',
        rows: [
          { label: 'Combining with estrogen', value: 'A SERM and estrogen interact with each other when used together; a clinician must assess this, and you should not stack them on your own.' },
          { label: 'Cannot replace an anti-androgen', value: 'SERMs have no anti-androgen effect and cannot replace anti-androgen medication.' },
          { label: 'Breast development', value: 'There is no reliable evidence that SERMs limit breast development; treating one as a "guaranteed breast-development blocker" is unfounded.' },
          { label: 'Thrombosis risk', value: 'Thrombosis risk must be assessed before use.' },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function Serms() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
