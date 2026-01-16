import { HeroComponent } from '../components/HeroComponent/HeroComponent';
import HeaderComponent from '../components/HeaderContainer/HeaderContainer';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import TeachList from '../components/TeachList/TeachList';
import TeamList from '../components/TeamList/TeamList';
import { ServicesList } from '../components/ServiceList/ServiceList';
import PhotoMarquee from '../components/PhotoMarquee/PhotoMarquee';
import { DiplomaGallery } from '../components/DiplomaGallery/DiplomaGallery';
import {CarouselCard}from '../components/CarouselCard/CarouselCard'
import { AccordionText } from '../components/AccordionText/AccordionText';

export default function Home() {
  return (
    <div>
      <main >
        <HeroComponent/>
        <CarouselCard/>
        <HeaderComponent/>
        <PortfolioCard/>
        <TeachList/>
        <TeamList />
        <AccordionText/>
        <ServicesList />
        <DiplomaGallery />
        <PhotoMarquee />
      </main>
    </div>
  );
}
