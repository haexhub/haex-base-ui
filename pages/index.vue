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

    <UiDropdown label="test" :items="[1, 2, 3]" class="btn">
      <template #label> aaa </template>
    </UiDropdown>

    <div class="dropdown relative inline-flex">
      <button
        id="dropdown-default"
        type="button"
        class="dropdown-toggle btn btn-primary"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        Dropdown
        <span
          class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"
        ></span>
      </button>
      <ul
        class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-default"
      >
        <li><a class="dropdown-item" href="#">My Profile</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Billing</a></li>
        <li><a class="dropdown-item" href="#">FAQs</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
</script>
