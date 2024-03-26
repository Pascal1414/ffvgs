<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>

let themeCheckbox = ref(true)

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === 'light') {
    updateTheme(false)
  } else {
    updateTheme(true)
  }
})

function updateTheme(isDarkMode: boolean) {
  if (isDarkMode) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    themeCheckbox.value = false
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    themeCheckbox.value = true
  }
}
</script>
