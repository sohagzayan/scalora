import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  user?: null | User
}

const Navigation = ({ user }: Props) => {

  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image
          src={'/logo1.png'}
          width={40}
          height={40}
          alt="scalora logo"
        />
        <span className="text-xl font-bold"> Scalora.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'/pricing'}>Pricing</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/meeting'}>Meeting</Link>
          <Link href={'/doc'}>Docs</Link>
          <Link href={'/support'}>Support</Link>
          <Link href={'/contact'}>Contact</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <button data-size="medium" type="button" className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-[hsl(154.9,100%,19.2%)]
 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 text-sm px-4 py-2 h-[38px]"><span className="truncate">Register</span></button>

        <Link
          href={"/agency"}
          data-size="medium" type="button" className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-[hsl(154.9,100%,19.2%)]
 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 text-sm px-4 py-2 h-[38px]"><span className="truncate">Login</span></Link>
        <UserButton />
      </aside>
    </div>
  )
}

export default Navigation
