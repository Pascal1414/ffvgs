<template>
<div class="hero bg-base-200 py-20">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Vielen Dank</h1>
      <p class="py-6">
        Vielen Dank für ihre Anmeldung. Wir werden ihnen ihre Rechnung in Kürze zusenden. Sobald Sie diese beglichen haben, ist Ihre Anmeldung bestätigt. 
      </p>
        <router-link to="/" class="btn btn-primary">Zur Landing Page</router-link>
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const requiredKey = '2039457820394' 

onMounted(() => {
  const accessKey = route.query.accessKey
  route.query.accessKey = ''  
  if (accessKey !== requiredKey) {
    router.replace('/')
  } else {
    router.replace({ path: route.path, query: {} })
  }
})
</script>