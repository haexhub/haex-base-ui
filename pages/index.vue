<template>
  <div class="flex flex-col">
    <div class="text-5xl text-center">Haex Base Ui</div>
    <Button @click="onClick">Test</Button>
    <ThemeSwitcher />
    <!-- <h1>Color mode: {{ colorMode.value }}</h1>
    <h1>Preference {{ colorMode.preference }}</h1> -->
  </div>
</template>

<script setup lang="ts">
import { ThemeSwitcher } from '#components';

const open = ref(false);
const input = ref();
const colorMode = useColorMode()

const onClick = () => {
  console.log("click", colorMode)
  colorMode.value = 'dark'; colorMode.preference = 'dark'
  console.log("after", colorMode)
}
</script>
