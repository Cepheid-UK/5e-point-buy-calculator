<template>
  <navbar position="fixed" type="primary" menu-classes="ml-auto">
    <template>
      <v-text>
        5e Point Buy Calculator
      </v-text>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
