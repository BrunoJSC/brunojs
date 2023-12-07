import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS } from "@/constants/links";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function MenuToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden">
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {NAV_LINKS.map((link) => (
          <DropdownMenuItem key={link.name}>
            <a href={link.href}>{link.name}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
