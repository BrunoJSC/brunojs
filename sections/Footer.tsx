import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full flex  mt-5">
      <div className="w-full flex items-center justify-between h-full">
        <p>Bruno de Jesus</p>

        <div className="flex gap-4 mt-4 items-center">
          <Link href="https://github.com/BrunoJSC" target="_blank">
            GitHub
          </Link>

          <Link href="https://www.linkedin.com/in/bruno-jsc/" target="_blank">
            LinkedIn
          </Link>

          <Link href="https://www.instagram.com/brunojsc/" target="_blank">
            Instagram
          </Link>

          <Button asChild>
            <Link href="#">
              <ArrowUp className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
