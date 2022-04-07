import { useState } from 'react';
import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import { projects } from '../utils/projectsData';

function Home() {
  const [fromServer, setFromServer] = useState('');

  async function callme() {
    const respt = await fetch(`/api/MyOrders`).then((r) => r.text());
    console.log(`reutrned ${respt}`);
    setFromServer(respt);
  }

  return (
    <div className="home">
      <h1>What Can I Deploy to Static Apps?</h1>
      <button onClick={callme}>Call API {fromServer}</button>
      <div className="card-grid">
        {projects.map((project) => {
          const Icon = projectIcons[project.id];
          return (
            <SmallCard
              key={project.id}
              Icon={Icon}
              title={project.name}
              slug={project.slug}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
