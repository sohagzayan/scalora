"use client"
import { ModeToggle } from '@/components/global/mode-toggle';
import { UserButton } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  const pathname = usePathname();

  return (
    <div className="fixed z-50 top-0 right-0 left-0 p-4 flex items-center justify-between">
      <aside className="flex items-center gap-2">
        <Image src={'/logo1.png'} width={40} height={40} alt="scalora logo" />
        <span className="text-xl font-bold"> Scalora.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          {['/pricing', '/about', '/meeting', '/doc', '/support'].map((route) => (
            <li key={route} className="relative group">
              <Link
                href={route}
                className={`relative transition-colors duration-300 ${pathname === route ? 'text-green-500' : 'text-gray-700 dark:text-gray-300'
                  } hover:text-green-500`}
              >
                {route.replace('/', '').charAt(0).toUpperCase() + route.slice(2)}
                <span
                  className={`absolute left-1/2 bottom-0 h-0.5 bg-green-500 transition-all duration-300 ease-out translate-x-[-50%] ${pathname === route ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <button
          data-size="medium"
          type="button"
          className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all border bg-[hsl(154.9,100%,19.2%)] dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 text-sm px-4 py-2 h-[38px]"
        >
          <span className="truncate">Register</span>
        </button>
        <Link
          href={'/agency'}
          data-size="medium"
          type="button"
          className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all border bg-[hsl(154.9,100%,19.2%)] dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 text-sm px-4 py-2 h-[38px]"
        >
          <span className="truncate">Login</span>
        </Link>
        <UserButton />
      </aside>
    </div>
  );
};

export default Navigation;
