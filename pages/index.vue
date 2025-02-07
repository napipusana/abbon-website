<script setup lang="ts">
    // const profileImage = ref(null)
    const profileInput = ref(null)
    const profileImage = useState('image')

    const openProfileUpload = () => {
        profileInput.value?.click()
    }

    const handleProfileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
        profileImage.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
    }
</script>

<template>

  <div class="w-full mx-auto">
    <div class="text-3xl font-bold mb-6">
        {{ $t('home') }}
    </div>
    <div class="text-center">
      <div class="relative inline-block">
        <img 
            v-if="profileImage"
            :src="profileImage" 
            class="h-52 w-52 rounded-full mx-auto cursor-pointer"
            @click="openProfileUpload"
        />
        <img 
            v-else
            src="@/public/images/default-avatar.png" 
            class="h-52 w-52 rounded-full mx-auto cursor-pointer"
            @click="openProfileUpload"
        />
        <input 
          type="file" 
          ref="profileInput"
          class="hidden"
          @change="handleProfileUpload"
          accept="image/*"
        />
      </div>
      <h1 class="text-3xl font-bold mt-4">{{ $t('pipusana_kumvongdee') }}</h1>
    </div>
  </div>
</template>