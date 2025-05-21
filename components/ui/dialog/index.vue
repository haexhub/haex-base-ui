<template>
  <button
    :data-overlay="`#${id}`"
    v-bind="$attrs"
    type="button"
    aria-haspopup="dialog"
    aria-expanded="false"
    :aria-label="label"
    @click="open = true"
    class="--prevent-on-load-init"
  >
    <slot name="trigger">open</slot>
  </button>

  <div
    :id
    class="overlay modal overlay-open:opacity-100 hidden modal-middle overflow-scroll p-0 sm:p-4"
    role="dialog"
    ref="modalRef"
    tabindex="-1"
  >
    <div
      class="overlay-animation-target overlay-open:mt-4 overlay-open:duration-500 mt-12 transition-all ease-out modal-dialog overlay-open:opacity-100"
    >
      <div class="modal-content">
        <div class="modal-header">
          <slot name="title">
            <h3 v-if="title" class="modal-title text-base sm:text-lg">
              {{ title }}
            </h3>
          </slot>

          <button
            type="button"
            class="btn btn-text btn-circle btn-sm absolute end-3 top-3"
            :aria-label="t('close')"
            tabindex="1"
            @click="open = false"
          >
            <Icon name="mdi:close" size="18" />
          </button>
        </div>
        <div class="modal-body text-sm sm:text-base py-1">
          <slot />
        </div>
        <div class="modal-footer flex-wrap">
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HSOverlay } from "flyonui/flyonui";

defineOptions({
  inheritAttrs: false,
});

defineProps<{ title?: string; label?: string }>();

defineEmits(["click", "close"]);

const id = useId();

const open = defineModel<boolean>("open", { default: false });

const { t } = useI18n();

const modalRef = useTemplateRef("modalRef");

defineExpose({ modalRef });

const modal = ref<HSOverlay>();

watch(open, async () => {
  //console.log("open modal", open.value);
  if (open.value) {
    modal.value?.open();
  } else {
    modal.value?.close(true);
    //HSOverlay.close(`#${id}`);
    //console.log("close dialog");
  }
});

onMounted(async () => {
  if (!modalRef.value) return;
  // flyonui has a problem importing HSOverlay at component level due to ssr
  // that's the workaround I found
  const flyonui = await import("flyonui/flyonui");
  modal.value = new flyonui.HSOverlay(modalRef.value);
  modal.value.on("close", () => {
    open.value = false;
  });
});
</script>

<i18n lang="json">
{
  "de": {
    "close": "Schließen"
  },
  "en": {
    "close": "Close"
  }
}
</i18n>
