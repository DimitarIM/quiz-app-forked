import OptionList from "@/components/OptionList";
import Question from "@/components/Question";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex relative flex-col min-h-[calc(100vh-80px)] justify-center items-center">      
            <Question/>
      </main>
  );
}
