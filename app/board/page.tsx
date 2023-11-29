import { TopBar } from '../ui/TopBar/top-bar';

export default function Page() {
  return (
    <main className="h-full">
      <TopBar />
      <div className="flex h-[89%] items-center justify-center dark:bg-secondary-background_dark">
        Hello
      </div>
    </main>
  );
}
