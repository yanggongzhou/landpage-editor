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
  min-width: 60px;
  display: inline-block;
  margin-right: 5px;
  font-size: 12px;
  font-weight: bold;
}
</style>
