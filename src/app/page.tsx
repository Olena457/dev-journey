import { HeroComponet } from '../components/HeroComponent/HeroComponent';
import HeaderComponent from '../components/HeaderContainer/HeaderContainer';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import TeachList from '../components/TeachList/TeachList';
import TeamList from '../components/TeamList/TeamList';
import { ServicesList } from '../components/ServiceList/ServiceList';
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
