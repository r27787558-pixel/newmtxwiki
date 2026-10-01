import type { Language } from './types';

export type { Language };

export interface Translations {
  brand: string;
  tagline: string;
  navHome: string;
  navMeds: string;
  navSurgery: string;
  navSurvey: string;
  navGuide: string;
  navHelp: string;
  navDisclaimer: string;
  navContact: string;
  navContributors: string;
  sidebarNavGroup: string;
  sidebarResourceGroup: string;
  sidebarHrt: string;
  sidebarSurvey: string;
  sidebarDisclaimer: string;
  sidebarContribute: string;
  medsLabel: string;
  medsOverview: string;
  medsInfo: string;
  medsMonitoring: string;
  medsRisks: string;
  medsEstrogens: string;
  medsAntiAndrogens: string;
  medsSerms: string;
  estrogenOverview: string;
  estrogenInjection: string;
  estrogenValerateTablets: string;
  estrogenTablets: string;
  estrogenGel: string;
  estrogenPatch: string;
  estrogenOthers: string;
  medsLead: string;
  footerDisclaimer: string;
  footerDisclaimerText: string;
  footerReadFull: string;
  footerEmergency: string;
  themeToggleToDark: string;
  themeToggleToLight: string;
  langSwitchToEn: string;
  langSwitchToZh: string;
  tocTitle: string;
  skipToContent: string;
  menuOpen: string;
  menuClose: string;
  backToTop: string;
  notFoundTitle: string;
  notFoundDesc: string;
  notFoundBack: string;
  wipTitle: string;
  wipHint: string;
  wipCta: string;
  tableHint: string;
  medNotice: string;
  medNoticeLink: string;
  medSources: string;
  medDoseNote: string;
  medGuidelineNote: string;
}

export const UI: Record<Language, Translations> = {
  zh: {
    brand: 'MtX.wiki',
    tagline: '知识库',
    navHome: '首页',
    navMeds: '药物',
    navSurgery: '手术',
    navSurvey: '调查',
    navGuide: '生活指南',
    navHelp: '救助',
    navDisclaimer: '医学声明',
    navContact: '联系',
    navContributors: '贡献者',
    sidebarNavGroup: '导航',
    sidebarResourceGroup: '资源',
    sidebarHrt: 'HRT 指南',
    sidebarSurvey: '调查问卷',
    sidebarDisclaimer: '医学声明',
    sidebarContribute: '在 GitHub 上贡献',
    medsLabel: '药物',
    medsOverview: 'HRT指南（综述）',
    medsInfo: '药物信息',
    medsMonitoring: '用药期间的监测',
    medsRisks: '用药风险',
    medsEstrogens: '雌激素类药物',
    medsAntiAndrogens: '抗雄激素类药物',
    medsSerms: '选择性雌激素受体调节剂',
    estrogenOverview: '综述',
    estrogenInjection: '雌二醇针剂',
    estrogenValerateTablets: '戊酸雌二醇片',
    estrogenTablets: '雌二醇片',
    estrogenGel: '雌二醇凝胶',
    estrogenPatch: '雌二醇贴片',
    estrogenOthers: '其它药物',
    medsLead: '面向 MtX 群体的用药科普：雌激素与抗雄激素药物、SERMs，以及用药期间的监测与风险管理。',
    footerDisclaimer: '医学免责声明：',
    footerDisclaimerText: '本站内容仅供参考，不构成医疗建议。任何用药或治疗决策请务必咨询合格的医生。',
    footerReadFull: '阅读完整声明',
    footerEmergency: '紧急救助',
    themeToggleToDark: '暗色',
    themeToggleToLight: '亮色',
    langSwitchToEn: 'EN',
    langSwitchToZh: '中文',
    tocTitle: '目录',
    skipToContent: '跳到正文',
    menuOpen: '打开导航菜单',
    menuClose: '关闭导航菜单',
    backToTop: '回到顶部',
    notFoundTitle: '页面不存在',
    notFoundDesc: '你访问的地址可能已被移动或尚未创建。',
    notFoundBack: '返回首页',
    wipTitle: '内容建设中',
    wipHint: '期待你的加入...',
    wipCta: '参与贡献',
    tableHint: '表格可左右滑动查看',
    medNotice:
      '以下内容为科普与文献汇总，不构成用药建议。剂量范围来自公开指南与药典，个体差异极大，必须由了解你完整病史的医生评估后决定。',
    medNoticeLink: '阅读《医学免责声明》',
    medSources: '参考来源',
    medDoseNote:
      '本页剂量为成人常见范围，仅作理解用途；起始剂量、调整节奏与停药方式需遵医嘱。',
    medGuidelineNote:
      'Endocrine Society 指南第 3 版预计于 2026 年春季发布，UCSF 指南的新版在等待它、已相应推迟。本页引用的是当前最新的已发布版本，但它们即将被取代。',
  },
  en: {
    brand: 'MtX.wiki',
    tagline: 'Knowledge base',
    navHome: 'Home',
    navMeds: 'Medications',
    navSurgery: 'Surgery',
    navSurvey: 'Survey',
    navGuide: 'Life Guide',
    navHelp: 'Help',
    navDisclaimer: 'Disclaimer',
    navContact: 'Contact',
    navContributors: 'Contributors',
    sidebarNavGroup: 'Navigation',
    sidebarResourceGroup: 'Resources',
    sidebarHrt: 'HRT Guide',
    sidebarSurvey: 'Survey',
    sidebarDisclaimer: 'Medical Disclaimer',
    sidebarContribute: 'Contribute on GitHub',
    medsLabel: 'Medications',
    medsOverview: 'HRT Overview',
    medsInfo: 'Medication Info',
    medsMonitoring: 'Monitoring',
    medsRisks: 'Risks',
    medsEstrogens: 'Estrogens',
    medsAntiAndrogens: 'Anti-androgens',
    medsSerms: 'SERMs',
    estrogenOverview: 'Overview',
    estrogenInjection: 'Estradiol Injection',
    estrogenValerateTablets: 'Estradiol Valerate Tablets',
    estrogenTablets: 'Estradiol Tablets',
    estrogenGel: 'Estradiol Gel',
    estrogenPatch: 'Estradiol Patches',
    estrogenOthers: 'Other Medications',
    medsLead: 'Medication guides for the MtX community: estrogens and anti-androgens, SERMs, and monitoring and risk management during treatment.',
    footerDisclaimer: 'Medical disclaimer:',
    footerDisclaimerText: 'Content on this site is for reference only and does not constitute medical advice. Always consult a qualified doctor before making any medication or treatment decisions.',
    footerReadFull: 'Read full disclaimer',
    footerEmergency: 'Emergency help',
    themeToggleToDark: 'Dark',
    themeToggleToLight: 'Light',
    langSwitchToEn: 'EN',
    langSwitchToZh: '中文',
    tocTitle: 'Contents',
    skipToContent: 'Skip to content',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    backToTop: 'Back to top',
    notFoundTitle: 'Page not found',
    notFoundDesc: 'The address you requested may have moved or does not exist yet.',
    notFoundBack: 'Back to home',
    wipTitle: 'Content in progress',
    wipHint: 'Your contribution is welcome...',
    wipCta: 'Contribute',
    tableHint: 'Scroll the table sideways to see more',
    medNotice:
      'The following is educational material compiled from published guidance; it is not a prescription. Dose ranges are drawn from public guidelines and pharmacopoeias, individual variation is large, and any regimen must be decided by a clinician who knows your full history.',
    medNoticeLink: 'Read the Medical Disclaimer',
    medSources: 'Sources',
    medDoseNote:
      'Doses shown are common adult ranges, provided for understanding only; starting dose, titration and discontinuation must follow medical advice.',
    medGuidelineNote:
      'A third edition of the Endocrine Society guideline is expected in spring 2026, and the new UCSF guideline has been deferred to follow it. The versions cited here are the latest currently published, but they will soon be superseded.',
  },
};
