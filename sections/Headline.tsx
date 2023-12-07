import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Headline() {
  return (
    <section className="w-full md:h-[609px] h-full flex flex-col lg:flex-row items-center justify-between relative">
      <div className="w-full lg:w-[592px] md:h-[286px] h-full lg:mr-8">
        <h1 className="text-[40px] lg:text-[48px] font-kalam bg-gradient-to-r from-primary to-violet-900 bg-clip-text text-transparent">
          Hi, I&apos;m Bruno.
        </h1>

        <h2 className="text-[24px] lg:text-[32px] font-bold mt-4">
          Full-stack developer and innovation enthusiast
        </h2>

        <p className="text-[16px] lg:text-[18px] mt-4">
          Over 4 years of experience in the tech industry. I specialize in
          building innovative web and mobile applications using technologies
          such as React, React Native, and Node.js.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <Button variant="outline" className="lg:mr-4" asChild>
            <Link href="/resume" download>
              My resume
            </Link>
          </Button>

          <Button>
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-[488px] md:h-[417px] h-full mt-4 lg:mt-0 order-first lg:order-last">
        <Image
          src="${basePath}/typing.svg"
          alt="Headline"
          width={592}
          height={286}
        />
      </div>

      <Image
        src="${basePath}/arrow-bottom.svg"
        alt="Headline"
        width={52}
        height={26}
        className="absolute bottom-0 right-2/4 left-2/4 translate-x-1/2 animate-bounce hidden lg:block"
      />
    </section>
  );
}
