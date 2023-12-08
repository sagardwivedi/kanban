import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-primary-background_light p-5 dark:bg-primary-background_dark md:h-[749px] md:px-13 md:py-26 ">
      <div className="relative z-50 mx-auto flex h-full w-full max-w-5xl flex-col flex-nowrap items-center justify-start gap-26">
        <div className="z-50 flex h-auto w-full flex-row items-center justify-between">
          <h2 className="h-auto w-full leading-[1.2em] text-black dark:text-white">
            Innovate. Elevate. Organize.
          </h2>
          <Link href={'/login'} className="block w-28 hover:underline md:w-24">
            Get Started
          </Link>
        </div>
        <h1 className="animate-hero h-auto w-full max-w-5xl text-center text-9xl font-bold uppercase leading-[1.1em] md:absolute md:inset-y-[150px] md:text-[11.5rem]">
          Task vista
        </h1>
      </div>
      <div className="animate-hero absolute -bottom-[400px] left-0 top-[100px] z-10 h-[64rem] w-[64rem] rounded-full bg-secondary-background_light dark:bg-secondary-background_dark md:left-[250px]"></div>
    </div>
  );
}
