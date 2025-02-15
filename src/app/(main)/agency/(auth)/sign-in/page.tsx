import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return <div className='flex flex-1 h-full '>
    <main className='flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-studio border-default'>
      <div className="mb-10">
        <h1 className="mt-8 mb-2 text-2xl lg:text-3xl">Welcome back</h1><h2 className="text-sm text-foreground-light">Sign in to your account</h2>
      </div>
      <div className='flex flex-col gap-5'>
        <div className="flex items-center relative" data-sentry-component="LastSignInWrapper" data-sentry-source-file="LastSignInWrapper.tsx"><div className="absolute -right-8 p-2 flex" data-state="closed"><span className="w-2.5 h-2.5 bg-brand rounded-full animate-pulse"></span></div><div className="w-full outline outline-1 outline-offset-4 outline-foreground-lighter/50 rounded-md"><button data-size="large" type="button" data-sentry-element="Button" data-sentry-source-file="SignInWithGitHub.tsx" className="relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover w-full flex items-center justify-center text-base px-4 py-2 h-[42px]"><div className="[&amp;_svg]:h-[20px] [&amp;_svg]:w-[20px] text-foreground-lighter"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></div> <span className="truncate">Continue with GitHub</span> </button></div>
        </div>

        <div className="flex items-center relative" data-sentry-component="LastSignInWrapper" data-sentry-source-file="LastSignInWrapper.tsx"><div className="w-full"><a data-sentry-element="Link" data-sentry-source-file="sign-in.tsx" data-size="large" type="button" className="relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-transparent border-strong hover:border-foreground-muted focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong w-full flex items-center justify-center text-base px-4 py-2 h-[42px]" href="/dashboard/sign-in-sso?returnTo=%2Fprojects"><div className="[&amp;_svg]:h-[20px] [&amp;_svg]:w-[20px] text-foreground-lighter"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div><span className="truncate">Continue with SSO</span></a></div>
        </div>
        <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-strong"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 text-sm bg-studio text-foreground">or</span></div>
        </div>
        <form id="signIn-form" method="POST" data-sentry-component="Form" data-sentry-source-file="Form.tsx"><div className="flex flex-col gap-4"><div className="text-sm grid gap-2 md:grid md:grid-cols-12" data-sentry-component="FormLayout" data-sentry-source-file="FormLayout.tsx"><div className="flex flex-row space-x-2 justify-between col-span-12"><label className="block text-foreground-light text-sm break-all" htmlFor="email">Email</label></div><div className="col-span-12"><div className=""><div className="relative">
          <input data-size="medium" autoComplete="email" id="email" name="email" placeholder="you@example.com" type="email" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2" value="" />
        </div>
        </div>
          <p data-state="hide" className="
    text-red-900
    transition-all
    data-show:mt-2
    data-show:animate-slide-down-normal
    data-hide:animate-slide-up-normal
   text-sm"></p></div></div><div className="relative"><div className="text-sm grid gap-2 md:grid md:grid-cols-12" data-sentry-component="FormLayout" data-sentry-source-file="FormLayout.tsx"><div className="flex flex-row space-x-2 justify-between col-span-12"><label className="block text-foreground-light text-sm break-all" htmlFor="password">Password</label></div><div className="col-span-12"><div className=""><div className="relative">
            <input data-size="medium" autoComplete="current-password" id="password" name="password" placeholder="••••••••" type="password" className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-foreground/[.026] border border-control text-sm px-4 py-2" value="" />
          </div>
          </div>
            <p data-state="hide" className="
    text-red-900
    transition-all
    data-show:mt-2
    data-show:animate-slide-down-normal
    data-hide:animate-slide-up-normal
   text-sm"></p></div></div><a className="absolute top-0 right-0 text-sm text-foreground-lighter" href="/dashboard/forgot-password">Forgot Password?</a></div><div className="self-center"><div><iframe aria-hidden="true" data-hcaptcha-widget-id="1usc0m41jv9" data-hcaptcha-response="" src="https://newassets.hcaptcha.com/captcha/v1/ac7a98a4cee9ba09bb781c34470a8f04a16e89c5/static/hcaptcha.html#frame=checkbox-invisible" style={{ display: "none" }}></iframe><textarea id="g-recaptcha-response-1usc0m41jv9" name="g-recaptcha-response" style={{ display: "none" }}></textarea><textarea id="h-captcha-response-1usc0m41jv9" name="h-captcha-response" style={{ display: "none" }}></textarea></div></div><div className="flex items-center relative" data-sentry-component="LastSignInWrapper" data-sentry-source-file="LastSignInWrapper.tsx"><div className="w-full"><button data-size="large" type="submit" form="signIn-form" className="relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 w-full flex items-center justify-center text-base px-4 py-2 h-[42px]"> <span className="truncate">Sign In</span> </button></div></div></div></form>
      </div>

    </main>
    <aside className='flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex'>

      <div className="relative flex flex-col gap-6"><div className="absolute select-none -top-12 -left-11">
        <span className="text-[160px] leading-none text-foreground-muted/30">“</span>
      </div>
        <blockquote className="z-10 max-w-lg text-3xl">Jeez, and @supabase have native support for magic link login?! I was going to use http://magic.link for this But if I can get my whole DB + auth + magic link support in one... Awesome</blockquote>
        <a href="https://twitter.com/louisbarclay/status/1362016666868154371" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
          <img src="https://supabase.com/images/twitter-profiles/6f1O8ZOW_400x400.jpg" alt="louisbarclay" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col" >
            <cite className="not-italic font-medium text-foreground-light whitespace-nowrap">@louisbarclay</cite></div></a></div>
    </aside>
  </div>

}

export default Page
