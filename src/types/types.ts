export interface LetterAnimationProps {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
}

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
  isMaintenance?: boolean;
};
export type PetProgectsProps = PetProgectsData;

export interface MarqueeItem {
  id: number;
  imageProgect: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  id: string;
  width?: string;
  height?: string;
  className?: string;
  icon?: React.FC<IconProps>;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}
export interface Diploma {
  id: number;
  title: string;
  image: string;
}
export interface CarouselCardData {
  id: string;
  title: string;
  description: string;
}

export interface CarouselProps {
  data: CarouselCardData[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items?: FAQItem[];
  className?: string;
}

export interface AccordionIconProps extends IconProps {
  isOpen: boolean;
}
export interface StartNowContent {
  label: string;
  title: string;
  description: string;
  buttonText: string;
}
