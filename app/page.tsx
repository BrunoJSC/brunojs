import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Headline } from "@/sections/Headline";
import { Project } from "@/sections/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 py-2 bg-surface-background">
      <Headline />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
