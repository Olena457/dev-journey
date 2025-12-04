export interface HeaderMenuItem {
  id: string;
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


export type teamsCardsData = {
  id: number;
  title: string;
  description: string;
  role: string;
  imageMobile: string;
  imageDesktop: string;
  href: string;
};
export type TeamCardProps = teamsCardsData;


export type PetProgectsData = {
  id: number;
  title: string;
  role: string;
  skills: string;
  imageProgect: string;
  description: string;
  liveHref: string;
  repoHref: string;
};
export type PetProgectsProps = PetProgectsData;

