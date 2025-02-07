<script setup lang="ts">
    const searchQuery = ref('')
    const currentPage = ref(1)
    const pageSize = 10
    const contacts = ref([])
    const {t} = useI18n()

    useHead({
      title: computed(() => t('contacts'))
    })

    onMounted(() => {
        contacts.value = Array.from({ length: 100 }, (_, i) => ({
            id: i + 1,
            fullName: `Contact ${i + 1}`,
            age: Math.floor(Math.random() * 50) + 20
        }))
    })

    const filteredContacts = computed(() => {
        if (!searchQuery.value || searchQuery.value.length < 3) {
            return contacts.value
        }
        return contacts.value.filter(contact => 
            contact.fullName.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    })

    const displayedContacts = computed(() => {
        const start = (currentPage.value - 1) * pageSize
        return filteredContacts.value.slice(start, start + pageSize)
    })

    const totalPages = computed(() => 
        Math.ceil(filteredContacts.value.length / pageSize)
    )

    const handleSearch = () => {
        currentPage.value = 1
    }

    const clearSearch = () => {
        searchQuery.value = ''
        currentPage.value = 1
    }

    const deleteContact = (id) => {
        contacts.value = contacts.value.filter(contact => contact.id !== id)
    }
</script>

<template>
  <div class="w-full mx-auto">
    <div class="text-3xl font-bold mb-6">
        {{ $t('list') }}
    </div>
    <div class="mb-6">
      <div class="flex gap-4">
        <UInput
          v-model="searchQuery"
          type="text"
          :placeholder="$t('search')"
          class="flex-1"
          size="lg"
          @input="handleSearch"
        />
        <UButton 
            color="white" 
            variant="solid"
            @click="clearSearch"
            size="lg"
            :label="$t('clear')"
        />
      </div>
    </div>

    <!-- Contact List -->
    <div class="bg-white shadow rounded-lg">
      <ul class="divide-y divide-gray-200">
        <li v-for="contact in displayedContacts" :key="contact.id" class="p-4 flex justify-between items-center">
          <div>
            <h3 class="text-base font-medium">{{ contact.fullName }}</h3>
            <p class="text-sm text-gray-600">{{ $t('age.label') }}: {{ contact.age }}</p>
          </div>
          <button 
            @click="deleteContact(contact.id)"
            class="text-red-600 hover:text-red-800"
          >
            <UIcon name="i-heroicons-trash" class="w-5 h-5" />
          </button>
        </li>
      </ul>
    </div>

    <!-- Pagination -->
    <div class="mt-6 flex justify-center">
      <nav class="relative z-0  rounded-md shadow-sm -space-x-px">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'relative items-center px-4 py-2 border',
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          ]"
        >
          {{ page }}
        </button>
      </nav>
    </div>
  </div>
</template>