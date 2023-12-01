export function Logo() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Stripe />
      <h1 className="text-3xl font-bold text-secondary-color dark:text-white">
        Task Vista
      </h1>
    </div>
  );
}

export function Stripe() {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="h-6 w-[5px] rounded-[2px] bg-primary-color"></div>
      <div className="h-6 w-[5px] rounded-[2px] bg-[#52519e]"></div>
      <div className="h-6 w-[5px] rounded-[2px] bg-[#464379]"></div>
    </div>
  );
}
