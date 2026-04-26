import Opening from "@/components/Opening";
import Chapter1 from "@/components/Chapter1";
import Chapter2 from "@/components/Chapter2";
import Chapter3 from "@/components/Chapter3";
import ChapterCard from "@/components/ChapterCard";
import Chapter4 from "@/components/Chapter4";
import Chapter5 from "@/components/Chapter5";
import Chapter6 from "@/components/Chapter6";
import FinalChapter from "@/components/FinalChapter";
import Ending from "@/components/Ending";
import ProgressBar from "@/components/ProgressBar";
import MusicToggle from "@/components/MusicToggle";

export default function Page() {
  return (
    <main className="relative">
      <ProgressBar />
      <MusicToggle />
      <Opening />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <ChapterCard />
      <Chapter4 />
      <Chapter5 />
      <Chapter6 />
      <FinalChapter />
      <Ending />
      <footer className="py-10 text-center text-white/40 text-xs uppercase tracking-[0.4em] bg-finale">
        written in light, for drashti
      </footer>
    </main>
  );
}
