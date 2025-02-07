<script setup lang="ts">
useSeoMeta({
  title: 'Abbon',
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Abbon` : 'Abbon';
  }
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
