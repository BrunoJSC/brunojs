import { Button } from "@/components/ui/button";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full min-h-screen mt-5">
      <div className="md:w-full w-full max-w-[1360px] md:h-[540px] h-full bg-secondary/75 rounded-md flex flex-col md:flex-row items-center justify-between p-3">
        <div className="mb-5 md:mb-0 md:mr-5">
          <Image
            src="/innovation.svg"
            alt="profile"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-4">
            <Image
              src="/icons/JavaScript.svg"
              alt="JavaScript"
              width={40}
              height={40}
            />

            <Image src="/icons/React.svg" alt="React" width={40} height={40} />

            <Image
              src="/icons/Tailwind.svg"
              alt="Next"
              width={40}
              height={40}
            />

            <Image src="/icons/Node.js.svg" alt="Next" width={40} height={40} />
          </div>

          <div className="mt-5 md:w-[592px]">
            <p className="text-[16px] lg:text-[18px] font-kalam text-primary">
              About me
            </p>
            <p className="text-[24px] lg:text-[32px] font-bold mt-4">
              I’m a passionate software developer looking for my first
              international opportunity
            </p>

            <p className="text-[16px] lg:text-[18px] mt-4">
              Beyond coding, I&apos;m a coffee enthusiast, a cat lover, and a
              self-taught artist who enjoys spending my free time doodling. I am
              currently seeking opportunities to bring my skills and enthusiasm
              to a tech company in the United States or Europe and am excited
              about the prospect of relocating to pursue new challenges.
            </p>

            <Button className="mt-4 w-full md:w-auto">My resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
