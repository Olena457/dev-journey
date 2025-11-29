export interface HeaderMenuItem {
  id: number;
  item: string;
  link: string;
}
export type TechnologyItem = {
  id: number;
  name: string;
  iconId: string;
};

type ClickHandler = (event: React.MouseEvent<SVGSVGElement>) => void;

export interface IconProps {
  id: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: ClickHandler;
}


export type teamData = {
  id: string;
  title: string;
  description: string;
  role: string;
  imageMobile: string;
  imageDesktop: string;
  href: string;
};

export type TeamCardProps = teamData;
