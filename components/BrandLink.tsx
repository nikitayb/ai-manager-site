import Image from 'next/image';
import { siteConfig } from '@/content/site';

export default function BrandLink() {
  return (
    <a
      href="#top"
      className="focus-ring group inline-flex w-fit shrink-0 items-center gap-2.5 rounded-lg"
    >
      <Image
        src="/favicon.ico"
        alt=""
        width={36}
        height={36}
        unoptimized
        className="rounded-lg shadow-[0_0_16px_rgba(255,255,255,0.13)] transition-shadow group-hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
      />
      <span className="whitespace-nowrap text-base leading-none font-semibold tracking-tight text-neutral-100">
        {siteConfig.name}
      </span>
    </a>
  );
}
