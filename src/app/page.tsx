import TeamList from '../components/TeamList/TeamList';
import TeachList from '../components/TeachList/TeachList';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import { ServicesList } from '../components/ServiceList/ServiceList';

export default function Home() {
  return (
    <div>
      <main >
        <TeachList/>
        <PortfolioCard/>
        <TeamList />
        <ServicesList/>
      </main>
    </div>
  );
}
