import Link from 'next/link';

export function Hero() {
  return (
    <div className="dark:bg-primary-background_dark bg-primary-background_light relative h-[749px] w-full overflow-hidden px-13 py-26 ">
      <div className="relative z-50 mx-auto flex h-full w-full max-w-5xl flex-col flex-nowrap items-center justify-start gap-26">
        <div className="z-50 flex h-auto w-full flex-row items-center justify-between">
          <h2 className="h-auto w-full leading-[1.2em] text-black">
            Innovate. Elevate. Organize.
          </h2>

          <Link href={'/login'} className="block w-24 hover:underline">
            Get Started
          </Link>
        </div>
        <h1 className="absolute inset-y-[150px] h-auto w-full max-w-5xl text-center text-[11.5rem] font-bold uppercase leading-[1.1em]">
          Task vista
        </h1>
      </div>
      <div className="dark:bg-secondary-background_dark bg-secondary-background_light absolute -bottom-[400px] left-[250px] top-[100px] z-10 h-[64rem] w-[64rem] rounded-full"></div>
    </div>
  );
}
