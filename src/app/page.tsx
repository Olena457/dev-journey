import { HeroComponent } from '../components/HeroComponent/HeroComponent';
import {CarouselCard}from '../components/CarouselCard/CarouselCard'
import HeaderComponent from '../components/HeaderContainer/HeaderContainer';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import TeachList from '../components/TeachList/TeachList';
import TeamList from '../components/TeamList/TeamList';
import { AccordionText } from '../components/AccordionText/AccordionText';
import { ServicesList } from '../components/ServiceList/ServiceList';
import { DiplomaGallery } from '../components/DiplomaGallery/DiplomaGallery';
import PhotoMarquee from '../components/PhotoMarquee/PhotoMarquee';

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
        <ServicesList />
        <DiplomaGallery />
        <AccordionText/>
        <PhotoMarquee />
      </main>
    </div>
  );
}
