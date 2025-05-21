import "flyonui/dist/overlay";
import 'flyonui/flyonui';

import type { HSOverlay, IStaticMethods } from 'flyonui/flyonui';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
    HSOverlay: typeof HSOverlay
  }
}

export default defineNuxtPlugin(() => {
  const router = useRouter();
  router.afterEach(async () => {
    nextTick(() => window.HSStaticMethods.autoInit());
  });
});
