import type { MedSource } from './meddoc';

/**
 * 药物类页面共用的参考来源。
 *
 * 之前每个页面各自抄了一份来源数组，改一处要改十次；而且早期版本只写了指南名称、
 * 没有链接，读者无法自行核对。这里统一为带 URL 的条目，页面按需引用。
 */

export const SOC8: MedSource = {
  label:
    'WPATH — Standards of Care for the Health of Transgender and Gender Diverse People, Version 8 (Coleman et al., 2022)',
  url: 'https://doi.org/10.1080/26895269.2022.2100644',
};

export const ENDO_SOCIETY_2017: MedSource = {
  label:
    'Endocrine Society — Endocrine Treatment of Gender-Dysphoric/Gender-Incongruent Persons: A Clinical Practice Guideline (Hembree et al., 2017)',
  url: 'https://doi.org/10.1210/jc.2017-01658',
};

export const UCSF: MedSource = {
  label:
    'UCSF Gender Affirming Health Program — Guidelines for the Primary and Gender-Affirming Care of Transgender and Gender Nonbinary People (Deutsch, 2016)',
  url: 'https://transcare.ucsf.edu/guidelines',
};

export const TFS_INTRO: MedSource = {
  label: 'Transfeminine Science — An Introduction to Hormone Therapy for Transfeminine People (Aly, 2018)',
  url: 'https://transfemscience.org/articles/transfem-intro/',
};

export const TFS_GUIDELINES: MedSource = {
  label: 'Transfeminine Science — Clinical Guidelines with Information on Transfeminine Hormone Therapy (Aly, 2020)',
  url: 'https://transfemscience.org/articles/transfem-hormone-guidelines/',
};

export const TFS_E2_DOSES: MedSource = {
  label: 'Transfeminine Science — Approximate Comparable Dosages of Estradiol by Different Routes (Aly, 2020)',
  url: 'https://transfemscience.org/articles/e2-equivalent-doses/',
};

export const TFS_INJECTABLE: MedSource = {
  label: 'Transfeminine Science — An Informal Meta-Analysis of Estradiol Curves with Injectable Estradiol Preparations (Aly, 2021)',
  url: 'https://transfemscience.org/articles/injectable-e2-meta-analysis/',
};

export const TFS_SUBLINGUAL: MedSource = {
  label: 'Transfeminine Science — An Exploration of Sublingual Estradiol as an Alternative to Oral Estradiol (Sam, 2021)',
  url: 'https://transfemscience.org/articles/sublingual-e2-transfem/',
};

export const TFS_ORAL_VS_TRANSDERMAL: MedSource = {
  label: 'Transfeminine Science — A Comparison of Oral and Transdermal Estradiol in Transfeminine Hormone Therapy (Sam, 2020)',
  url: 'https://transfemscience.org/articles/oral-vs-transdermal-e2/',
};

export const TFS_BLOOD_CLOTS: MedSource = {
  label: 'Transfeminine Science — Estrogens and Their Influences on Coagulation and Risk of Blood Clots (Aly, 2020)',
  url: 'https://transfemscience.org/articles/estrogens-blood-clots/',
};

export const TFS_CPA: MedSource = {
  label:
    'Transfeminine Science — Low Doses of Cyproterone Acetate Are Maximally Effective for Testosterone Suppression (Aly, 2019, updated 2025)',
  url: 'https://transfemscience.org/articles/cpa-dosage/',
};

export const TFS_CPA_MENINGIOMA: MedSource = {
  label: 'Transfeminine Science — Recent Developments on Cyproterone Acetate and Meningioma Risk Out of France (Aly, 2020)',
  url: 'https://transfemscience.org/articles/cpa-meningioma/',
};

export const TFS_SPIRO: MedSource = {
  label:
    'Transfeminine Science — A Review of Studies on Spironolactone and Testosterone Suppression (Aly, 2018, updated 2025)',
  url: 'https://transfemscience.org/articles/spiro-testosterone/',
};

export const TFS_BICA: MedSource = {
  label:
    'Transfeminine Science — Bicalutamide and its Adoption by the Medical Community for Use in Transfeminine Hormone Therapy (Aly, 2020, updated 2025)',
  url: 'https://transfemscience.org/articles/bica-adoption/',
};

export const TFS_SERMS: MedSource = {
  label: 'Transfeminine Science — A Review of Selective Estrogen Receptor Modulators and their Potential for Transfeminine Hormone Therapy (Lain, 2019)',
  url: 'https://transfemscience.org/articles/serms-transfem/',
};

export const TFS_NONBINARY: MedSource = {
  label: 'Transfeminine Science — An Exploration of Possibilities for Hormone Therapy in Non-Binary Transfeminine People (Aly, 2019)',
  url: 'https://transfemscience.org/articles/nonbinary-transfem-overview/',
};

export const TFS_PROGESTOGENS: MedSource = {
  label: 'Transfeminine Science — Oral Progesterone Achieves Very Low Levels and Has Only Weak Progestogenic Effects (Aly, 2018)',
  url: 'https://transfemscience.org/articles/oral-p4-low-levels/',
};

export const TFS_BREAST_CANCER: MedSource = {
  label: 'Transfeminine Science — Breast Cancer Risk with Hormone Therapy in Transfeminine People (Aly, 2020)',
  url: 'https://transfemscience.org/articles/breast-cancer/',
};

export const TFS_HAIR_LOSS: MedSource = {
  label: 'Transfeminine Science — A Review of Pharmaceutical Interventions for Scalp Hair Loss (Sam, 2025)',
  url: 'https://transfemscience.org/articles/hair-loss/',
};

export const TFS_BONE: MedSource = {
  label: 'Transfeminine Science — On Changes in Bone Shape in Transfeminine Individuals Under Gender-Affirming Hormone Therapy (Lain, 2020)',
  url: 'https://transfemscience.org/articles/bone-shape-changes/',
};
