import React from 'react';
import { useLanguage } from '../../context/LanguageContext.jsx';

const CONTENT = {
  zh: {
    title: '雌激素在 AMAB Enby HRT 中的不同剂量效应与给药途径药理特性分析',
    intro: '本文从剂量效应、生物利用度与安全性三个维度，分析不同雌激素给药方案在 AMAB（指派性别为男性）非二元个体 HRT 中的药理特性。',
    dosageHeading: '不同剂量的效应',
    dosageNote: '雌激素的剂量直接决定了对下丘脑-垂体-性腺轴（HPG 轴）的负反馈强度，进而影响内源性睾酮水平、靶器官改变以及性功能与体力。',
    dosageFields: {
      hpg: 'HPG轴与睾酮',
      organ: '靶器官效应',
      sexual: '性功能与体力影响',
      suitability: 'AMAB Enby 适用性',
    },
    dosage: [
      {
        level: '低剂量',
        hpg: '负反馈极弱，内源性睾酮维持在较高水平（接近顺性别男性或微幅下降）。',
        organ: '皮肤油腻度微幅下降，体脂重分布极不明显；乳腺发育速度极慢且程度受限（若未联合 SERM，仍可能出现轻微乳腺芽，但过程漫长）。',
        sexual: '基础体力、肌肉量及精力基本不受影响；对自发性勃起、性欲及精子生成的抑制极轻微。',
        suitability: '适合追求极度微弱或渐进改变、希望最大程度保留生理体力与性功能的个体。',
      },
      {
        level: '中剂量',
        hpg: '产生中度负反馈，可部分降低睾酮水平，但通常不足以单药完全压制睾酮。',
        organ: '体脂开始向臀部、大腿及皮下转移；皮肤显著变细变软；引发明确的乳腺发育（乳头发育、乳腺管延伸）；体毛生长速度适度减缓。',
        sexual: '肌肉量与净体力适度下降；自发性勃起频率减少，精子生成量及性欲中度受抑。',
        suitability: '适合寻求中性偏女性化外观、接受适度体能变化但希望避免过度身体彻底改组的个体。',
      },
      {
        level: '高剂量',
        hpg: '产生强烈负反馈，可实现单药将睾酮完全压制至女性范围（小于 50 ng/dL）。',
        organ: '体脂重分布显著，塑造明显女性化轮廓；肌肉量大幅减少；体毛生长明显变细变慢；推动充分的乳腺发育（可达 Tanner 3 期或以上）。',
        sexual: '自发性勃起基本消失，精子生成深度受抑或停滞，性欲显著减退，基础代谢率与体力明显下降。',
        suitability: '适合体貌诉求高度偏向女性化、且不介意性功能与体能大幅下降的 AMAB Enby 个体。',
      },
    ],
    bioHeading: '生物利用度对比',
    bioRanking: '生物利用度排序：注射给药 > 口服给药 > 皮肤吸收（贴片或凝胶）',
    bioFields: { level: '利用程度', mechanism: '药理机制', performance: '表现' },
    bio: [
      {
        route: '注射给药',
        level: '高利用率',
        mechanism: '脂溶性雌二醇酯类直接注入肌肉或皮下组织形成储库。',
        performance: '完全绕过消化道破坏与肝脏首过效应，药物 100% 进入局部组织并随着酯酶水解释放为活性雌二醇，单位剂量转化效率极高。',
      },
      {
        route: '口服给药',
        level: '中利用率',
        mechanism: '经胃肠道粘膜吸收后，通过门静脉系统首先进入肝脏。',
        performance: '受制于强烈的肝脏首过效应，很大一部分活性 17β-雌二醇在首次通过肝脏时被代谢转化为生物活性较低的雌酮（E1）或结合物，最终进入外周体循环的活性雌二醇比例低于注射。',
      },
      {
        route: '皮肤吸收（贴片或凝胶）',
        level: '相对低利用率',
        mechanism: '药物分子需穿过皮肤的角质层屏障，再由皮下微血管吸收进入体循环。',
        performance: '受限于皮肤屏障的天然通透性、给药面积、角质层厚度及个体皮脂状态，单位剂量下的即时吸收转化率最低，需依靠持续贴敷或每日涂抹维持稳定血药浓度。',
      },
    ],
    safetyHeading: '安全性对比',
    safetyRanking: '安全性排序：皮肤吸收（贴片或凝胶） > 口服给药 > 注射给药',
    safetyFields: { level: '安全等级', advantages: '临床优势', risk: '风险概况' },
    safety: [
      {
        route: '皮肤吸收（贴片或凝胶）',
        level: '最高安全性',
        advantages: '完全绕过肝脏首过效应，不刺激肝脏过度合成凝血因子，对脂质代谢影响极小。',
        risk: '静脉血栓栓塞症（VTE）、深静脉血栓及肝脏毒性风险最低；血药浓度曲线平缓，无剧烈峰谷波动，适合高龄或有心血管潜在风险者。',
      },
      {
        route: '口服给药',
        level: '中等安全性',
        advantages: '给药方式非侵入性，可控性极高，发生不良反应时停药可使血药浓度较快回落。',
        risk: '大量雌激素直接经过门静脉冲击肝脏，刺激凝血因子合成，导致 VTE 及心血管代谢风险相对透皮途径明显上升，并增加肝脏代谢负担。',
      },
      {
        route: '注射给药',
        level: '相对低安全性',
        advantages: '无胃肠道刺激，且绕过胃肠道代谢。',
        risk: '早期产生极高血药峰值，增加血管内皮与凝血系统负荷并可能诱发情绪波动，末期出现谷值；存在撤药滞后性，出现严重副作用时无法立即止用；存在侵入性感染或无菌性炎症风险。',
      },
    ],
  },
  en: {
    title: 'Dose-Dependent Effects and Pharmacokinetic Properties of Different Administration Routes of Estrogen in AMAB Enby HRT',
    intro: 'This article analyzes the pharmacological properties of different estrogen regimens in HRT for AMAB (assigned male at birth) non-binary individuals across three dimensions: dose-dependent effects, bioavailability, and safety.',
    dosageHeading: 'Dose-Dependent Effects',
    dosageNote: 'The estrogen dose directly determines the strength of negative feedback on the hypothalamic-pituitary-gonadal (HPG) axis, which in turn affects endogenous testosterone levels, target-organ changes, and sexual/physical function.',
    dosageFields: {
      hpg: 'HPG axis & testosterone',
      organ: 'Target-organ effects',
      sexual: 'Sexual & physical impact',
      suitability: 'Suitability for AMAB enby',
    },
    dosage: [
      {
        level: 'Low dose',
        hpg: 'Very weak negative feedback; endogenous testosterone remains at a relatively high level (close to that of a cisgender male or only slightly reduced).',
        organ: 'Skin oiliness decreases slightly; body-fat redistribution is barely noticeable; breast development is extremely slow and limited in extent (without combined SERM use, mild breast budding may still occur, but the process is prolonged).',
        sexual: 'Baseline stamina, muscle mass and energy are essentially unaffected; suppression of spontaneous erections, libido and spermatogenesis is very slight.',
        suitability: 'Suitable for individuals seeking extremely subtle or gradual changes who wish to preserve physical strength and sexual function to the greatest extent.',
      },
      {
        level: 'Medium dose',
        hpg: 'Produces moderate negative feedback and can partially lower testosterone levels, but is usually insufficient to fully suppress testosterone as a single agent.',
        organ: 'Body fat begins to redistribute to the hips, thighs and subcutaneously; skin becomes noticeably finer and softer; induces clear breast development (nipple development, ductal elongation); body-hair growth slows moderately.',
        sexual: 'Muscle mass and net physical strength decline moderately; spontaneous erections become less frequent; spermatogenesis and libido are moderately suppressed.',
        suitability: 'Suitable for individuals seeking a neutral-to-feminine appearance who accept moderate physical changes but wish to avoid a complete bodily overhaul.',
      },
      {
        level: 'High dose',
        hpg: 'Produces strong negative feedback and can achieve complete suppression of testosterone to the female range (below 50 ng/dL) as a single agent.',
        organ: 'Body-fat redistribution is marked, shaping a distinctly feminine silhouette; muscle mass decreases substantially; body-hair growth becomes notably finer and slower; promotes full breast development (up to Tanner stage 3 or beyond).',
        sexual: 'Spontaneous erections essentially disappear; spermatogenesis is deeply suppressed or halted; libido declines significantly; basal metabolic rate and physical strength clearly decrease.',
        suitability: 'Suitable for AMAB enby individuals whose physical-appearance goals lean heavily toward feminization and who do not mind a substantial decline in sexual function and physical performance.',
      },
    ],
    bioHeading: 'Bioavailability Comparison',
    bioRanking: 'Bioavailability ranking: Injection > Oral > Transdermal (patch or gel)',
    bioFields: { level: 'Utilization', mechanism: 'Pharmacokinetic mechanism', performance: 'Performance' },
    bio: [
      {
        route: 'Injection',
        level: 'High utilization',
        mechanism: 'Lipophilic estradiol esters are injected directly into muscle or subcutaneous tissue to form a depot.',
        performance: 'Completely bypasses gastrointestinal destruction and hepatic first-pass metabolism; 100% of the drug enters local tissue and is hydrolyzed by esterases to release active estradiol, giving an extremely high conversion efficiency per unit dose.',
      },
      {
        route: 'Oral',
        level: 'Medium utilization',
        mechanism: 'After absorption through the gastrointestinal mucosa, it first enters the liver via the portal venous system.',
        performance: 'Subject to a strong hepatic first-pass effect; a large fraction of active 17β-estradiol is metabolized on first pass through the liver into the less bioactive estrone (E1) or conjugates, so the proportion of active estradiol reaching the systemic circulation is lower than with injection.',
      },
      {
        route: 'Transdermal (patch or gel)',
        level: 'Relatively low utilization',
        mechanism: 'Drug molecules must cross the stratum corneum barrier of the skin and are then absorbed into the systemic circulation through the subepidermal capillaries.',
        performance: 'Limited by the skin barrier\u2019s natural permeability, application area, stratum corneum thickness and individual sebum status; immediate absorption per unit dose is the lowest, requiring continuous wearing or daily application to maintain stable blood concentrations.',
      },
    ],
    safetyHeading: 'Safety Comparison',
    safetyRanking: 'Safety ranking: Transdermal (patch or gel) > Oral > Injection',
    safetyFields: { level: 'Safety level', advantages: 'Clinical advantages', risk: 'Risk profile' },
    safety: [
      {
        route: 'Transdermal (patch or gel)',
        level: 'Highest safety',
        advantages: 'Completely bypasses hepatic first-pass metabolism, does not over-stimulate hepatic synthesis of coagulation factors, and has minimal impact on lipid metabolism.',
        risk: 'Lowest risk of venous thromboembolism (VTE), deep-vein thrombosis and hepatotoxicity; blood concentration curves are smooth without sharp peaks and troughs, suitable for older individuals or those with potential cardiovascular risk.',
      },
      {
        route: 'Oral',
        level: 'Medium safety',
        advantages: 'Non-invasive administration with very high controllability; discontinuing the drug allows blood concentrations to fall relatively quickly if adverse reactions occur.',
        risk: 'A large amount of estrogen passes through the portal vein and impacts the liver, stimulating coagulation-factor synthesis, which markedly raises VTE and cardiometabolic risk relative to the transdermal route and increases hepatic metabolic burden.',
      },
      {
        route: 'Injection',
        level: 'Relatively low safety',
        advantages: 'No gastrointestinal irritation and bypasses gastrointestinal metabolism.',
        risk: 'Produces very high early blood peaks that increase load on the vascular endothelium and coagulation system and may trigger mood swings, with troughs at the end of the cycle; has a washout lag so it cannot be stopped immediately if severe side effects occur; carries a risk of invasive infection or aseptic inflammation.',
      },
    ],
  },
};

export default function EstrogenOverview() {
  const { lang } = useLanguage();
  const c = CONTENT[lang] || CONTENT.zh;

  return (
    <div className="content">
      <h2>{c.title}</h2>
      <p>{c.intro}</p>

      <h3>{c.dosageHeading}</h3>
      <p>{c.dosageNote}</p>
      {c.dosage.map((item) => (
        <div key={item.level} className="dosage-block">
          <h4>{item.level}</h4>
          <table className="med-effect-table">
            <tbody>
              <tr>
                <th>{c.dosageFields.hpg}</th>
                <td>{item.hpg}</td>
              </tr>
              <tr>
                <th>{c.dosageFields.organ}</th>
                <td>{item.organ}</td>
              </tr>
              <tr>
                <th>{c.dosageFields.sexual}</th>
                <td>{item.sexual}</td>
              </tr>
              <tr>
                <th>{c.dosageFields.suitability}</th>
                <td>{item.suitability}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      <h3>{c.bioHeading}</h3>
      <blockquote className="info-quote">
        <strong>{c.bioRanking}</strong>
      </blockquote>
      {c.bio.map((item) => (
        <div key={item.route} className="route-block">
          <h4>{item.route} · {item.level}</h4>
          <table className="med-effect-table">
            <tbody>
              <tr>
                <th>{c.bioFields.mechanism}</th>
                <td>{item.mechanism}</td>
              </tr>
              <tr>
                <th>{c.bioFields.performance}</th>
                <td>{item.performance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      <h3>{c.safetyHeading}</h3>
      <blockquote className="info-quote">
        <strong>{c.safetyRanking}</strong>
      </blockquote>
      {c.safety.map((item) => (
        <div key={item.route} className="route-block">
          <h4>{item.route} · {item.level}</h4>
          <table className="med-effect-table">
            <tbody>
              <tr>
                <th>{c.safetyFields.advantages}</th>
                <td>{item.advantages}</td>
              </tr>
              <tr>
                <th>{c.safetyFields.risk}</th>
                <td>{item.risk}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
