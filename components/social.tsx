/* eslint-disable */
import Link from 'next/link';
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  LinkedinIcon,
} from '@/components/icons';

import { siteConfig } from '@/config/site';

export const Social = () => {
  return (
    <div className="fixed flex bg-default-900 right-0 top-1/3 p-2 rounded-lg">
      <ul className="flex gap-2 flex-col">
        <Link
          aria-label="Twitter"
          className="py-1"
          href={siteConfig.links.x}
          target="_blank"
        >
          <TwitterIcon className="text-default-100" />
        </Link>
        <Link
          aria-label="Github"
          className="py-1"
          href={siteConfig.links.github}
          target="_blank"
        >
          <GithubIcon className="text-default-100" />
        </Link>
        <Link
          aria-label="Github"
          className="py-1"
          href={siteConfig.links.discord}
          target="_blank"
        >
          <DiscordIcon className="text-default-100" />
        </Link>
        <Link
          aria-label="Github"
          className="py-1"
          href={siteConfig.links.linkedin}
          target="_blank"
        >
          <LinkedinIcon className="text-default-100" />
        </Link>
      </ul>
    </div>
  );
};
