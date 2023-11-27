export function Logo() {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex flex-row gap-1 items-center">
        <div className="bg-primary-color w-[5px] rounded-[2px] h-6"></div>
        <div className="bg-[#52519e] w-[5px] rounded-[2px] h-6"></div>
        <div className="bg-[#464379] w-[5px] rounded-[2px] h-6"></div>
      </div>
      <h1 className="text-3xl font-bold text-white">kanban</h1>
    </div>
  );
}
