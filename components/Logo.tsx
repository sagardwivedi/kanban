export function Logo() {
  return (
    <div className="flex select-none flex-row items-center gap-2">
      <Stripe />
      <h1 className="text-secondary-color text-3xl font-bold dark:text-white">
        Task Vista
      </h1>
    </div>
  );
}

export function Stripe() {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="h-6 w-[5px] rounded-[2px] bg-purple-700"></div>
      <div className="h-6 w-[5px] rounded-[2px] bg-[#52519e]"></div>
      <div className="h-6 w-[5px] rounded-[2px] bg-[#464379]"></div>
    </div>
  );
}
