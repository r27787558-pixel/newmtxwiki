import type { Translations } from './i18n';
import type { Language } from './types';

/**
 * 站点导航与路由的**唯一数据源**。
 *
 * Header、Sidebar 与 App 的文档标题都从这里派生，新增页面时只需改这一个文件
 * （外加 i18n.ts 里的词条），避免出现「菜单改了一处、另一处忘改」的问题。
 */

export interface NavNode {
  /** hash 路由路径，例如 'meds/estrogens'（不带 #/ 前缀） */
  path: string;
  /** i18n 词条键名，渲染时用 t[labelKey] 取值 */
  labelKey: keyof Translations;
  children?: NavNode[];
}

export interface NavGroup {
  titleKey: keyof Translations;
  nodes: NavNode[];
}

/** 主导航树：首页 / 药物（三层）/ 手术 */
const SITE_NAV: NavNode[] = [
  { path: 'index', labelKey: 'navHome' },
  {
    path: 'meds',
    labelKey: 'medsLabel',
    children: [
      { path: 'hrt-overview', labelKey: 'medsOverview' },
      { path: 'meds/monitoring', labelKey: 'medsMonitoring' },
      { path: 'meds/risks', labelKey: 'medsRisks' },
      {
        path: 'meds/estrogens',
        labelKey: 'medsEstrogens',
        children: [
          { path: 'meds/estrogens/overview', labelKey: 'estrogenOverview' },
          { path: 'meds/estrogens/injection', labelKey: 'estrogenInjection' },
          { path: 'meds/estrogens/valerate', labelKey: 'estrogenValerateTablets' },
          { path: 'meds/estrogens/tablets', labelKey: 'estrogenTablets' },
          { path: 'meds/estrogens/gel', labelKey: 'estrogenGel' },
          { path: 'meds/estrogens/patch', labelKey: 'estrogenPatch' },
        ],
      },
      { path: 'meds/anti-androgens', labelKey: 'medsAntiAndrogens' },
      { path: 'meds/serms', labelKey: 'medsSerms' },
      { path: 'meds/others', labelKey: 'estrogenOthers' },
    ],
  },
  { path: 'surgery', labelKey: 'navSurgery' },
];

/** 资源导航树：调查 / 指南 / 救助 / 声明 / 联系 / 贡献者 */
const RESOURCE_NAV: NavNode[] = [
  { path: 'survey', labelKey: 'navSurvey' },
  { path: 'guide', labelKey: 'navGuide' },
  { path: 'help', labelKey: 'navHelp' },
  { path: 'disclaimer', labelKey: 'navDisclaimer' },
  { path: 'contact', labelKey: 'navContact' },
  { path: 'contributors', labelKey: 'navContributors' },
];

/** 侧边栏分组 */
export const NAV_GROUPS: NavGroup[] = [
  { titleKey: 'sidebarNavGroup', nodes: SITE_NAV },
  { titleKey: 'sidebarResourceGroup', nodes: RESOURCE_NAV },
];

/** 顶栏里作为下拉菜单展示的分组路径（药物） */
export const HEADER_DROPDOWN_PATH = 'meds';

/** 首页路径 */
export const HOME_PATH = 'index';

/** 顶栏线性链接：主导航去掉 首页/药物，再接上资源导航 */
export const HEADER_LINKS: NavNode[] = [
  ...SITE_NAV.filter((n) => n.path !== 'index' && n.path !== HEADER_DROPDOWN_PATH),
  ...RESOURCE_NAV,
];

/** 深度优先展开（不含自身） */
export function flattenChildren(node: NavNode): NavNode[] {
  const out: NavNode[] = [];
  const walk = (nodes: NavNode[] | undefined) => {
    nodes?.forEach((n) => {
      out.push(n);
      walk(n.children);
    });
  };
  walk(node.children);
  return out;
}

/** 在树中按路径查找节点 */
export function findNode(nodes: NavNode[], path: string): NavNode | undefined {
  for (const node of nodes) {
    if (node.path === path) return node;
    const hit = node.children ? findNode(node.children, path) : undefined;
    if (hit) return hit;
  }
  return undefined;
}

const ALL_NAV_NODES = NAV_GROUPS.flatMap((g) => g.nodes);

/** 顶栏药物下拉的条目：分组自身 + 其所有后代 */
export const HEADER_MEDS_MENU: NavNode[] = (() => {
  const node = findNode(ALL_NAV_NODES, HEADER_DROPDOWN_PATH);
  if (!node) return [];
  return [node, ...flattenChildren(node)];
})();

/**
 * 判断某个导航节点在当前路径下是否处于「激活」状态。
 * 父节点只要其子树里有匹配项，也算激活。
 */
export function isNodeActive(node: NavNode, currentPath: string): boolean {
  if (node.path === currentPath) return true;
  if (currentPath.startsWith(`${node.path}/`)) return true;
  return node.children ? node.children.some((c) => isNodeActive(c, currentPath)) : false;
}

/** 判断某个具体路径是否对应当前路由（含子路由归属） */
export function isPathActive(path: string, currentPath: string): boolean {
  return currentPath === path || currentPath.startsWith(`${path}/`);
}

/** 文档标题（浏览器标签页） */
const PAGE_TITLES: Record<string, Record<Language, string>> = {
  index: { zh: '首页', en: 'Home' },
  meds: { zh: '药物', en: 'Medications' },
  'hrt-overview': { zh: 'HRT 指南（综述）', en: 'HRT Guide (Overview)' },
  surgery: { zh: '手术', en: 'Surgery' },
  survey: { zh: '调查问卷', en: 'Survey' },
  guide: { zh: '生活指南', en: 'Life Guide' },
  help: { zh: '救助资源', en: 'Help Resources' },
  disclaimer: { zh: '医学免责声明', en: 'Medical Disclaimer' },
  contact: { zh: '联系', en: 'Contact' },
  contributors: { zh: '贡献者名单', en: 'Contributors' },
  'meds/monitoring': { zh: '用药期间的监测', en: 'Monitoring' },
  'meds/risks': { zh: '用药风险', en: 'Risks' },
  'meds/estrogens': { zh: '雌激素类药物', en: 'Estrogens' },
  'meds/estrogens/overview': { zh: '雌激素综述', en: 'Estrogens Overview' },
  'meds/estrogens/injection': { zh: '雌二醇针剂', en: 'Estradiol Injection' },
  'meds/estrogens/valerate': { zh: '戊酸雌二醇片', en: 'Estradiol Valerate Tablets' },
  'meds/estrogens/tablets': { zh: '雌二醇片', en: 'Estradiol Tablets' },
  'meds/estrogens/gel': { zh: '雌二醇凝胶', en: 'Estradiol Gel' },
  'meds/estrogens/patch': { zh: '雌二醇贴片', en: 'Estradiol Patches' },
  'meds/anti-androgens': { zh: '抗雄激素类药物', en: 'Anti-androgens' },
  'meds/serms': { zh: '选择性雌激素受体调节剂', en: 'SERMs' },
  'meds/others': { zh: '其它药物', en: 'Other Medications' },
  'not-found': { zh: '页面不存在', en: 'Page Not Found' },
};

/** 解析页面名称（不含站点名） */
export function resolvePageName(path: string, lang: Language): string {
  const segs = path.split('/');
  while (segs.length > 0) {
    const entry = PAGE_TITLES[segs.join('/')];
    if (entry) return entry[lang];
    segs.pop();
  }
  return PAGE_TITLES.index[lang];
}

/**
 * 解析文档标题：从完整路径逐级向上回退，
 * 因此 'meds/estrogens/unknown' 会落到 'meds/estrogens' 的标题。
 */
export function resolvePageTitle(path: string, lang: Language, brand: string): string {
  return `${resolvePageName(path, lang)} · ${brand}`;
}

/** 判断路径是否命中已知页面（用于 404 兜底） */
export function isKnownPath(path: string): boolean {
  const segs = path.split('/');
  while (segs.length > 0) {
    if (PAGE_TITLES[segs.join('/')]) return true;
    segs.pop();
  }
  return false;
}

/**
 * 从 location.hash 解析出内部路由路径（纯函数，便于测试）。
 *
 * - `#/meds/estrogens` → `meds/estrogens`
 * - `#meds`            → `meds`（兼容不加斜杠的旧链接，但仅限已知路径）
 * - `#main`            → `index`（页内锚点不能被误判为路由）
 */
export function pathFromHash(rawHash: string): string {
  if (!rawHash) return HOME_PATH;
  if (rawHash.startsWith('#/')) {
    const path = rawHash.slice(2);
    return path || HOME_PATH;
  }
  const legacy = rawHash.replace(/^#/, '');
  return isKnownPath(legacy) ? legacy : HOME_PATH;
}
