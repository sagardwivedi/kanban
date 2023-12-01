export default function IndividualBoard({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  return <main>{id}</main>;
}
