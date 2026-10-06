import Hero from './components/Hero';
import TheHook from './components/TheHook';
import WhatWeWillDo from './components/WhatWeWillDo';
import TheExperience from './components/TheExperience';
import WhoIsThisFor from './components/WhoIsThisFor';
import WhoIsNotFor from './components/WhoIsNotFor';
import MeetFranklin from './components/MeetFranklin';
import EventDetails from './components/EventDetails';
import HowToJoin from './components/HowToJoin';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-amber-400 selection:text-black w-full max-w-full overflow-x-hidden relative">
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <TheHook />
        <WhatWeWillDo />
        <TheExperience />
        <WhoIsThisFor />
        <WhoIsNotFor />
        <MeetFranklin />
        <EventDetails />
        <HowToJoin />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
