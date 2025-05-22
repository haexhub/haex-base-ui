<template>
  <div class="flex flex-col">
    <div class="text-5xl text-center">Haex Base Ui</div>
    <Button @click="onClick">Test</Button>
    <ThemeSwitcher />
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline" @click="onClick">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right">
              Name
            </Label>
            <Input id="name" default-value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right">
              Username
            </Label>
            <Input id="username" default-value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
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
