export type Language = 'zh' | 'en';
export type Theme = 'light' | 'dark';
export type NavigateFn = (path: string) => void;

export interface NavLink {
  path: string;
  label: string;
}

export interface NavTreeNode extends NavLink {
  children?: NavTreeNode[];
}

export interface TocEntry {
  id: string;
  text: string;
  level: number;
}

export interface ContributorLink {
  kind: 'qq' | 'mail' | 'link';
  text: string;
  href?: string;
  external?: boolean;
}

export interface Contributor {
  name: string;
  role: string;
  desc: string;
  links: ContributorLink[];
}

export interface CardItem {
  path: string;
  title: string;
  desc: string;
  tag: string;
}
