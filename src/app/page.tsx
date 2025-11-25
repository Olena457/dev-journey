import TeamList from '../components/TeamList/TeamList';

export default function Home() {
  return (
    <div className="mycontainer flex  items-center justify-center  dark:bg-black">
      <main className="bg-amber-800 ">
        <TeamList />
      </main>
    </div>
  );
}
