import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import MedDocView from './MedDocView';
import { ENDO_SOCIETY_2017, SOC8, TFS_BLOOD_CLOTS, TFS_E2_DOSES, TFS_ORAL_VS_TRANSDERMAL } from './sources';
import type { MedDoc, MedSource } from './meddoc';
import type { Language } from '../../i18n';

const SOURCES: MedSource[] = [
  ENDO_SOCIETY_2017,
  SOC8,
  TFS_E2_DOSES,
  TFS_ORAL_VS_TRANSDERMAL,
  TFS_BLOOD_CLOTS,
];

/**
 * 本页原先把「数据」和「排版成 JSX」写在一起，是药物区里唯一没有走 MedDoc 结构的页面。
 * 现已收编：下方只保留双语数据，排版交给 MedDocView，与其余十个页面一致。
 */
const CONTENT: Record<Language, MedDoc> = {
  zh: {
    title: '雌激素在 AMAB Enby HRT 中的不同剂量效应与给药途径药理特性分析',
    lead: '本文从剂量效应、生物利用度与安全性三个维度，分析不同雌激素给药方案在 AMAB（指派性别为男性）非二元个体 HRT 中的药理特性。',
    hasDoses: false,
    blocks: [
      {
        heading: '不同剂量的效应',
        note: '雌激素的剂量直接决定了对下丘脑-垂体-性腺轴（HPG 轴）的负反馈强度，进而影响内生性睾酮水平、靶器官改变以及性功能与体力。',
        cards: [
          {
            title: '低剂量',
            rows: [
              {
                label: 'HPG轴与睾酮',
                value: '负反馈极弱，内生性睾酮维持在较高水平（接近顺性别男性或微幅下降）。',
              },
              {
                label: '靶器官效应',
                value:
                  '皮肤油腻度微幅下降，体脂重分布极不明显；乳腺发育速度极慢且程度受限（若未联合 SERM，仍可能出现轻微乳腺芽，但过程漫长）。',
              },
              {
                label: '性功能与体力影响',
                value:
                  '基础体力、肌肉量及精力基本不受影响；对自发性勃起、性欲及精子生成的抑制极轻微。',
              },
              {
                label: 'AMAB Enby 适用性',
                value:
                  '适合追求极度微弱或渐进改变、希望最大程度保留生理体力与性功能的个体。',
              },
            ],
          },
          {
            title: '中剂量',
            rows: [
              {
                label: 'HPG轴与睾酮',
                value: '产生中度负反馈，可部分降低睾酮水平，但通常不足以单药完全压制睾酮。',
              },
              {
                label: '靶器官效应',
                value:
                  '体脂开始向臀部、大腿及皮下转移；皮肤显著变细变软；引发明确的乳腺发育（乳头发育、乳腺管延伸）；体毛生长速度适度减缓。',
              },
              {
                label: '性功能与体力影响',
                value:
                  '肌肉量与净体力适度下降；自发性勃起频率减少，精子生成量及性欲中度受抑。',
              },
              {
                label: 'AMAB Enby 适用性',
                value:
                  '适合寻求中性偏女性化外观、接受适度体能变化但希望避免过度身体彻底改组的个体。',
              },
            ],
          },
          {
            title: '高剂量',
            rows: [
              {
                label: 'HPG轴与睾酮',
                value: '产生强烈负反馈，可实现单药将睾酮完全压制至女性范围（小于 50 ng/dL）。',
              },
              {
                label: '靶器官效应',
                value:
                  '体脂重分布显著，塑造明显女性化轮廓；肌肉量大幅减少；体毛生长明显变细变慢；推动充分的乳腺发育（可达 Tanner 3 期或以上）。',
              },
              {
                label: '性功能与体力影响',
                value:
                  '自发性勃起基本消失，精子生成深度受抑或停滞，性欲显著减退，基础代谢率与体力明显下降。',
              },
              {
                label: 'AMAB Enby 适用性',
                value:
                  '适合体貌诉求高度偏向女性化、且不介意性功能与体能大幅下降的 AMAB Enby 个体。',
              },
            ],
          },
        ],
      },
      {
        heading: '生物利用度对比',
        quote: '生物利用度排序：注射给药 > 口服给药 > 皮肤吸收（贴片或凝胶）',
        cards: [
          {
            title: '注射给药',
            level: '高利用率',
            rows: [
              {
                label: '药理机制',
                value: '脂溶性雌二醇酯类直接注入肌肉或皮下组织形成储库。',
              },
              {
                label: '表现',
                value:
                  '完全绕过消化道破坏与肝脏首过效应，药物 100% 进入局部组织并随着酯酶水解释放为活性雌二醇，单位剂量转化效率极高。',
              },
            ],
          },
          {
            title: '口服给药',
            level: '中利用率',
            rows: [
              {
                label: '药理机制',
                value: '经胃肠道粘膜吸收后，通过门静脉系统首先进入肝脏。',
              },
              {
                label: '表现',
                value:
                  '受制于强烈的肝脏首过效应，很大一部分活性 17β-雌二醇在首次通过肝脏时被代谢转化为生物活性较低的雌酮（E1）或结合物，最终进入外周体循环的活性雌二醇比例低于注射。',
              },
            ],
          },
          {
            title: '皮肤吸收（贴片或凝胶）',
            level: '相对低利用率',
            rows: [
              {
                label: '药理机制',
                value: '药物分子需穿过皮肤的角质层屏障，再由皮下微血管吸收进入体循环。',
              },
              {
                label: '表现',
                value:
                  '受限于皮肤屏障的天然通透性、给药面积、角质层厚度及个体皮脂状态，单位剂量下的即时吸收转化率最低，需依靠持续贴敷或每日涂抹维持稳定血药浓度。',
              },
            ],
          },
        ],
      },
      {
        heading: '安全性对比',
        quote: '安全性排序：皮肤吸收（贴片或凝胶） > 口服给药 > 注射给药',
        cards: [
          {
            title: '皮肤吸收（贴片或凝胶）',
            level: '最高安全性',
            rows: [
              {
                label: '临床优势',
                value:
                  '完全绕过肝脏首过效应，不刺激肝脏过度合成凝血因子，对脂质代谢影响极小。',
              },
              {
                label: '风险概况',
                value:
                  '静脉血栓栓塞症（VTE）、深静脉血栓及肝脏毒性风险最低；血药浓度曲线平缓，无剧烈峰谷波动，适合高龄或有心血管潜在风险者。',
              },
            ],
          },
          {
            title: '口服给药',
            level: '中等安全性',
            rows: [
              {
                label: '临床优势',
                value:
                  '给药方式非侵入性，可控性极高，发生不良反应时停药可使血药浓度较快回落。',
              },
              {
                label: '风险概况',
                value:
                  '大量雌激素直接经过门静脉冲击肝脏，刺激凝血因子合成，导致 VTE 及心血管代谢风险相对透皮途径明显上升，并增加肝脏代谢负担。',
              },
            ],
          },
          {
            title: '注射给药',
            level: '相对低安全性',
            rows: [
              {
                label: '临床优势',
                value: '无胃肠道刺激，且绕过胃肠道代谢。',
              },
              {
                label: '风险概况',
                value:
                  '早期产生极高血药峰值，增加血管内皮与凝血系统负荷并可能诱发情绪波动，末期出现谷值；存在撤药滞后性，出现严重副作用时无法立即止用；存在侵入性感染或无菌性炎症风险。',
              },
            ],
          },
        ],
      },
    ],
    sources: SOURCES,
  },
  en: {
    title:
      'Dose-Dependent Effects and Pharmacokinetic Properties of Different Administration Routes of Estrogen in AMAB Enby HRT',
    lead: 'This article analyzes the pharmacological properties of different estrogen regimens in HRT for AMAB (assigned male at birth) non-binary individuals across three dimensions: dose-dependent effects, bioavailability, and safety.',
    hasDoses: false,
    blocks: [
      {
        heading: 'Dose-Dependent Effects',
        note: 'The estrogen dose directly determines the strength of negative feedback on the hypothalamic-pituitary-gonadal (HPG) axis, which in turn affects endogenous testosterone levels, target-organ changes, and sexual/physical function.',
        cards: [
          {
            title: 'Low dose',
            rows: [
              {
                label: 'HPG axis & testosterone',
                value:
                  'Very weak negative feedback; endogenous testosterone remains at a relatively high level (close to that of a cisgender male or only slightly reduced).',
              },
              {
                label: 'Target-organ effects',
                value:
                  'Skin oiliness decreases slightly; body-fat redistribution is barely noticeable; breast development is extremely slow and limited in extent (without combined SERM use, mild breast budding may still occur, but the process is prolonged).',
              },
              {
                label: 'Sexual & physical impact',
                value:
                  'Baseline stamina, muscle mass and energy are essentially unaffected; suppression of spontaneous erections, libido and spermatogenesis is very slight.',
              },
              {
                label: 'Suitability for AMAB enby',
                value:
                  'Suitable for individuals seeking extremely subtle or gradual changes who wish to preserve physical strength and sexual function to the greatest extent.',
              },
            ],
          },
          {
            title: 'Medium dose',
            rows: [
              {
                label: 'HPG axis & testosterone',
                value:
                  'Produces moderate negative feedback and can partially lower testosterone levels, but is usually insufficient to fully suppress testosterone as a single agent.',
              },
              {
                label: 'Target-organ effects',
                value:
                  'Body fat begins to redistribute to the hips, thighs and subcutaneously; skin becomes noticeably finer and softer; induces clear breast development (nipple development, ductal elongation); body-hair growth slows moderately.',
              },
              {
                label: 'Sexual & physical impact',
                value:
                  'Muscle mass and net physical strength decline moderately; spontaneous erections become less frequent; spermatogenesis and libido are moderately suppressed.',
              },
              {
                label: 'Suitability for AMAB enby',
                value:
                  'Suitable for individuals seeking a neutral-to-feminine appearance who accept moderate physical changes but wish to avoid a complete bodily overhaul.',
              },
            ],
          },
          {
            title: 'High dose',
            rows: [
              {
                label: 'HPG axis & testosterone',
                value:
                  'Produces strong negative feedback and can achieve complete suppression of testosterone to the female range (below 50 ng/dL) as a single agent.',
              },
              {
                label: 'Target-organ effects',
                value:
                  'Body-fat redistribution is marked, shaping a distinctly feminine silhouette; muscle mass decreases substantially; body-hair growth becomes notably finer and slower; promotes full breast development (up to Tanner stage 3 or beyond).',
              },
              {
                label: 'Sexual & physical impact',
                value:
                  'Spontaneous erections essentially disappear; spermatogenesis is deeply suppressed or halted; libido declines significantly; basal metabolic rate and physical strength clearly decrease.',
              },
              {
                label: 'Suitability for AMAB enby',
                value:
                  'Suitable for AMAB enby individuals whose physical-appearance goals lean heavily toward feminization and who do not mind a substantial decline in sexual function and physical performance.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Bioavailability Comparison',
        quote: 'Bioavailability ranking: Injection > Oral > Transdermal (patch or gel)',
        cards: [
          {
            title: 'Injection',
            level: 'High utilization',
            rows: [
              {
                label: 'Pharmacokinetic mechanism',
                value:
                  'Lipophilic estradiol esters are injected directly into muscle or subcutaneous tissue to form a depot.',
              },
              {
                label: 'Performance',
                value:
                  'Completely bypasses gastrointestinal destruction and hepatic first-pass metabolism; 100% of the drug enters local tissue and is hydrolyzed by esterases to release active estradiol, giving an extremely high conversion efficiency per unit dose.',
              },
            ],
          },
          {
            title: 'Oral',
            level: 'Medium utilization',
            rows: [
              {
                label: 'Pharmacokinetic mechanism',
                value:
                  'After absorption through the gastrointestinal mucosa, it first enters the liver via the portal venous system.',
              },
              {
                label: 'Performance',
                value:
                  "Subject to a strong hepatic first-pass effect; a large fraction of active 17β-estradiol is metabolized on first pass through the liver into the less bioactive estrone (E1) or conjugates, so the proportion of active estradiol reaching the systemic circulation is lower than with injection.",
              },
            ],
          },
          {
            title: 'Transdermal (patch or gel)',
            level: 'Relatively low utilization',
            rows: [
              {
                label: 'Pharmacokinetic mechanism',
                value:
                  'Drug molecules must cross the stratum corneum barrier of the skin and are then absorbed into the systemic circulation through the subepidermal capillaries.',
              },
              {
                label: 'Performance',
                value:
                  "Limited by the skin barrier's natural permeability, application area, stratum corneum thickness and individual sebum status; immediate absorption per unit dose is the lowest, requiring continuous wearing or daily application to maintain stable blood concentrations.",
              },
            ],
          },
        ],
      },
      {
        heading: 'Safety Comparison',
        quote: 'Safety ranking: Transdermal (patch or gel) > Oral > Injection',
        cards: [
          {
            title: 'Transdermal (patch or gel)',
            level: 'Highest safety',
            rows: [
              {
                label: 'Clinical advantages',
                value:
                  'Completely bypasses hepatic first-pass metabolism, does not over-stimulate hepatic synthesis of coagulation factors, and has minimal impact on lipid metabolism.',
              },
              {
                label: 'Risk profile',
                value:
                  'Lowest risk of venous thromboembolism (VTE), deep-vein thrombosis and hepatotoxicity; blood concentration curves are smooth without sharp peaks and troughs, suitable for older individuals or those with potential cardiovascular risk.',
              },
            ],
          },
          {
            title: 'Oral',
            level: 'Medium safety',
            rows: [
              {
                label: 'Clinical advantages',
                value:
                  'Non-invasive administration with very high controllability; discontinuing the drug allows blood concentrations to fall relatively quickly if adverse reactions occur.',
              },
              {
                label: 'Risk profile',
                value:
                  'A large amount of estrogen passes through the portal vein and impacts the liver, stimulating coagulation-factor synthesis, which markedly raises VTE and cardiometabolic risk relative to the transdermal route and increases hepatic metabolic burden.',
              },
            ],
          },
          {
            title: 'Injection',
            level: 'Relatively low safety',
            rows: [
              {
                label: 'Clinical advantages',
                value: 'No gastrointestinal irritation and bypasses gastrointestinal metabolism.',
              },
              {
                label: 'Risk profile',
                value:
                  'Produces very high early blood peaks that increase load on the vascular endothelium and coagulation system and may trigger mood swings, with troughs at the end of the cycle; has a washout lag so it cannot be stopped immediately if severe side effects occur; carries a risk of invasive infection or aseptic inflammation.',
              },
            ],
          },
        ],
      },
    ],
    sources: SOURCES,
  },
};

export default function EstrogenOverview() {
  const { lang } = useLanguage();
  return <MedDocView doc={CONTENT[lang] || CONTENT.zh} />;
}
