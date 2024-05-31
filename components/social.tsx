import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarItem,
  } from "@nextui-org/navbar";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    LinkedinIcon,
    HeartFilledIcon,
    SearchIcon,
  } from "@/components/icons";
  import Link from "next/link";
import { siteConfig } from "@/config/site";


export const Social = () => {
    return (
        <div className="fixed flex bg-default-900 right-0 top-1/3 p-2 rounded-lg">
            <ul className="flex gap-2 flex-col">
                <Link className="py-1" target="_blank" aria-label="Twitter" href={siteConfig.links.x}>
                    <TwitterIcon className="text-default-100" />
                </Link>
                <Link className="py-1" target="_blank" aria-label="Github" href={siteConfig.links.github}>
                    <GithubIcon className="text-default-100" />
                </Link>
                <Link className="py-1" target="_blank" aria-label="Github" href={siteConfig.links.discord}>
                    <DiscordIcon className="text-default-100" />
                </Link>
                <Link className="py-1" target="_blank" aria-label="Github" href={siteConfig.links.linkedin}>
                    <LinkedinIcon className="text-default-100" />
                </Link>
            </ul>
        </div>
    )
}