<script setup lang="ts">

import Footer from '@/components/Footer.vue'
import LocaleLang from '@/components/LocaleLang.vue'

const isSidebarOpen = ref(false)
const contactMenuOpen = ref(false)
// const profileImage = ref(null)
const profileInput = ref(null)
const route = useRoute()

// const langOptions = ref([
//     {id: 'en', name: 'English'},
//     {id: 'th', name: 'ไทย'},
// ])

const profileImage = useState('image', () => '')

// Toggle sidebar for mobile
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Toggle contacts submenu
const toggleContactMenu = () => {
  contactMenuOpen.value = !contactMenuOpen.value
}

// Profile image upload
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

// Current location handler
const showCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank')
    })
  }
}

// Close sidebar when route changes on mobile
watch(() => route.path, () => {
  if (isSidebarOpen.value) {
    isSidebarOpen.value = false
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <!-- Mobile menu button -->
            <button 
              @click="toggleSidebar"
              class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              <UIcon name="i-heroicons-bars-3" class="w-5 h-5" />
            </button>
            
            <!-- Logo -->
            <NuxtLink to="/" class="flex-shrink-0 flex items-center ml-4 lg:ml-0 p-2 text-white font-bold bg-blue-400 rounded-full">
              Logo
            </NuxtLink>
          </div>

          <!-- Right side navigation items -->
          <div class="flex items-center space-x-4">
            <!-- Profile Image -->
            <div class="relative">
                <img 
                    v-if="profileImage"
                    :src="profileImage || '@/public/images/default-avatar.png'" 
                    class="h-8 w-8 rounded-full cursor-pointer"
                    @click="openProfileUpload"
                />
                <img 
                    v-else
                    src="@/public/images/default-avatar.png" 
                    class="h-8 w-8 rounded-full cursor-pointer"
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

            <!-- Full Name -->
            <span class="text-gray-700 hidden lg:block">{{ $t('pipusana_kumvongdee') }}</span>
<!-- 
            <USelectMenu
                v-model="$i18n.locale"
                :options="langOptions"
                value-attribute="id"
                option-attribute="name"
            /> -->

            <LocaleLang />
          </div>
        </div>
      </div>
    </nav>

    <!-- Sidebar & Main Content -->
    <div class="flex-1 flex">
      <!-- Sidebar -->
      <aside 
        :class="[
          'fixed lg:static inset-y-0 left-0 transform lg:translate-x-0 w-64 bg-white shadow-lg z-20 transition-transform duration-300 ease-in-out',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        ]"
      >
        <nav class="p-4 space-y-2">
          <!-- Home -->
          <NuxtLink 
            to="/"
            class="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
            :class="{ 'bg-gray-100': $route.path === '/' }"
          >
            <UIcon name="i-heroicons-home" class="w-5 h-5" />{{ $t('home') }}
          </NuxtLink>

          <!-- Contacts Section -->
          <div>
            <div 
              @click="toggleContactMenu"
              class="flex items-center gap-2 justify-between px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <div class="flex items-center gap-2">
                <UIcon name="i-heroicons-book-open" class="w-5 h-5" />{{ $t('contacts') }}
              </div>
              <UIcon :name="contactMenuOpen ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" />
            </div>

            <!-- Contact Submenu -->
            <div v-show="contactMenuOpen" class="ml-4 mt-2 space-y-1">
              <NuxtLink 
                to="/contacts"
                class="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                :class="{ 'bg-gray-100': $route.path === '/contacts' }"
              >
                {{ $t('list') }}
              </NuxtLink>
              <NuxtLink 
                to="/contacts/create"
                class="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                :class="{ 'bg-gray-100': $route.path === '/contacts/create' }"
              >
                {{ $t('create') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Current Location -->
          <button 
            @click="showCurrentLocation"
            class="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <UIcon name="i-heroicons-map-pin" class="w-5 h-5" /> {{ $t('current_location') }}
          </button>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 bg-gray-50 p-6">
        <slot />
      </main>
    </div>

    <Footer />
  </div>
</template>