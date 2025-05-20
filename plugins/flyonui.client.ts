import 'flyonui/flyonui';

import { type IStaticMethods } from 'flyonui/flyonui';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default defineNuxtPlugin(() => {
  const router = useRouter();
  router.afterEach(async () => {
    setTimeout(() => window.HSStaticMethods.autoInit());
  });
});
