<template>
  <div class="flex flex-col">
    <div class="text-5xl text-center">Haex Base Ui</div>
    <UiDialogTest />
    <!-- 
    <UiDialog class="btn btn-primary">
      <template #trigger>
        <Icon name="mdi:plus" />
        open
      </template>

      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </UiDialog> -->

    <UiDropdown :items="[1, 2, 3]" class="btn">
      <template #activator> <Icon name="mdi:menu" /> </template>
    </UiDropdown>

    <!-- <UiDialog ref="dialog" v-model:open="open"> lalalalla </UiDialog> -->

    <UiButton @click="open = !open">Open Button</UiButton>

    <UiDialog
      class="btn btn-primary btn-outline shadow-md md:btn-lg shrink-0 flex-1"
      v-model:open="open"
    >
      <!-- @close="initDatabase" -->
      <template #trigger>
        <!-- <button
        class="btn btn-primary btn-outline shadow-md md:btn-lg shrink-0 flex-1"
        @click="onLoadDatabase"
      > -->

        <Icon name="mdi:folder-open-outline" />
        open
        <!-- </button> -->
      </template>

      <UiInput v-model="input" />

      <UiInput v-model="input" />

      <template #buttons>
        <UiButton class="btn-error" @click="open = false"> abort </UiButton>

        <UiButton type="submit" class="btn-primary"> open </UiButton>
      </template>
    </UiDialog>

    <UiInput v-model="input" />
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
const input = ref();
</script>
