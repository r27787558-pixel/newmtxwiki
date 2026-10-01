/**
 * 药物类页面的共享数据结构。
 *
 * 此前只有 EstrogenOverview 一个页面，它把「取数据」和「排版成 JSX」写在同一个文件里。
 * 当同类页面增加到十个时，渲染逻辑会被复制十份。这里把排版抽到 MedDocView，
 * 每个页面只负责提供双语数据，与 routes.ts 收敛导航的做同一件事：单一数据源。
 */

export interface MedRow {
  /** 表格左列，通常是考察维度（剂量、半衰期、风险…） */
  label: string;
  /** 表格右列正文 */
  value: string;
}

export interface MedCard {
  /** 卡片小标题，如「醋酸环丙孕酮」「雌二醇针剂」 */
  title: string;
  /** 可选副标题，用于放强度/档位，如「强效 · 常被选为一线」 */
  level?: string;
  rows: MedRow[];
}

export interface MedBlock {
  heading: string;
  /** 标题下的引导段落 */
  note?: string;
  /** 需要强调的一句话，渲染为高亮引用块 */
  quote?: string;
  /** 无卡片时直接渲染的单张表格 */
  rows?: MedRow[];
  /** 每个卡片渲染为「小标题 + 一张表」 */
  cards?: MedCard[];
}

export interface MedSource {
  /** 指南/文献名称，写到可检索的粒度 */
  label: string;
  url?: string;
}

export interface MedDoc {
  title: string;
  lead: string;
  blocks: MedBlock[];
  sources: MedSource[];
  /** 该页是否涉及具体剂量数字，决定是否展示剂量提示 */
  hasDoses?: boolean;
}
