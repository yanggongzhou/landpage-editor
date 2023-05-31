<template>
<div class="baseTitle">
  {{ title }}
</div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>
<style lang="scss" scoped>
.baseTitle {
  padding: 10px 0 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>
