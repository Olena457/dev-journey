import TeamList from '../components/TeamList/TeamList';
import TeachList from '../components/TeachList/TeachList';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';

export default function Home() {
  return (
    <div>
      <main >
        <TeachList/>
        <PortfolioCard/>
        <TeamList />
      </main>
    </div>
  );
}
