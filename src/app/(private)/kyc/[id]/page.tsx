type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function KycDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <>
      <h1>Validação</h1>

      <p>ID: {id}</p>
    </>
  );
}