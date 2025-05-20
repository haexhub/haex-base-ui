<template>
  <div>
    <UiDialogTest />
    <UiDialog class="btn btn-primary">
      <template #trigger>
        <Icon name="mdi:plus" />
        open
      </template>

      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </UiDialog>

    <UiDropdown label="test" :items="[1, 2, 3]"> </UiDropdown>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
</script>
