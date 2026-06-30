import { APP_NAME } from '@/utils/constants';
import { ENDPOINTS } from '@/services';

export default function Home() {
  console.log(ENDPOINTS);

  return (
    <main>
      <h1>{APP_NAME}</h1>
    </main>
  );
}