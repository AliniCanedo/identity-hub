import { KycDetailsPage } from '@/features/kyc';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({
  params,
}: Props) {
  const { id } = await params;

  return <KycDetailsPage id={id} />;
}