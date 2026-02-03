import Header from "./components/Header";
import GameEventCardSection from "./components/GameEventCardSection";

export default function Game() {
  return (
    <div className="flex flex-col h-full grow justify-center items-center">
      <Header />
      <GameEventCardSection />
    </div>
  );
}
