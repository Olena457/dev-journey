// import * as React from 'react';
// import { IconProps } from '@/src/types/types';

// // Імпортуємо всі іконки
// import HtmlIcon from '@/public/icons/HtmlIcon';
// import CssIcon from '@/public/icons/CssIcon';
// import ScssIcon from '@/public/icons/ScssIcon';
// import ReactIcon from '@/public/icons/ReactIcon';
// import ReduxIcon from '@/public/icons/ReduxIcon';
// import JsIcon from '@/public/icons/JsIcon';
// import TypeScriptIcon from '@/public/icons/TypeScriptIcon';
// import NextIcon from '@/public/icons/NextIcon';
// import VueIcon from '@/public/icons/VueIcon';
// import NodeIcon from '@/public/icons/NodeIcon';
// import TailwindIcon from '@/public/icons/TailwindIcon';
// import MuiIcon from '@/public/icons/MuiIcon';
// import FigmaIcon from '@/public/icons/FigmaIcon';
// import FirebaseIcon from '@/public/icons/FirebaseIcon';
// import GitIcon from '@/public/icons/GitIcon';
// import MongoIcon from '@/public/icons/MongoIcon';
// import MysqlIcon from '@/public/icons/MysqlIcon';
// import OptimIcon from '@/public/icons/OptimIcon';

//  export const iconsMap: Record<string, React.FC<IconProps>> = {
//   html: HtmlIcon,
//   css: CssIcon,
//   scss: ScssIcon,
//   react: ReactIcon,
//   redux: ReduxIcon,
//   js: JsIcon,
//   typescript: TypeScriptIcon,
//   next: NextIcon,
//   vue: VueIcon,
//   node: NodeIcon,
//   tailwind: TailwindIcon,
//   mui: MuiIcon,
//   figma: FigmaIcon,
//   firebase: FirebaseIcon,
//   git: GitIcon,
//   mongo: MongoIcon,
//   mysql: MysqlIcon,
//   optim: OptimIcon,
// };

// interface Props extends IconProps {
//   id: string;
// }

// export const IconComponent: React.FC<Props> = ({
//   id,
//   width = '32',
//   height = '32',
//   className,
//   ...rest
// }) => {
//   const Icon = iconsMap[id];
//   if (!Icon) return null;

//   return <Icon width={width} height={height} className={className} {...rest} />;
// };
