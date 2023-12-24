interface IndividualHeaderProps {
  id: string;
}

export function IndividualHeader({ id }: IndividualHeaderProps) {
  return (
    <div className="flex h-20 flex-row items-center justify-between whitespace-pre bg-primary-background px-8">
      <h2>{id}</h2>
      <button>Delete</button>
    </div>
  );
}
