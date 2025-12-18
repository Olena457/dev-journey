import TeamList from '../components/TeamList/TeamList';
import TeachList from '../components/TeachList/TeachList';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import { ServicesList } from '../components/ServiceList/ServiceList';
import HeaderComponent from '../components/HeaderContainer/HeaderContainer';
import { HeroComponet } from '../components/HeroComponent/HeroComponent';
import PhotoMarquee from '../components/PhotoMarquee/PhotoMarquee';

export default function Home() {
  return (
    <div>
      <main >
        <HeroComponet/>
        <HeaderComponent/>
        <PortfolioCard/>
        <TeachList/>
        <TeamList />
        <ServicesList />
        <PhotoMarquee/>
      </main>
    </div>
  );
}
