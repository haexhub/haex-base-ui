<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-white text-slate-950 flex flex-col gap-6 rounded-xl border border-slate-200 py-6 shadow-sm dark:bg-slate-950 dark:text-slate-50 dark:border-slate-800',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
