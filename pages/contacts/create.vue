<script setup lang="ts">
    const router = useRouter()
    const {t} = useI18n()

    const name = ref('')
    const age = ref('')
    const errors = ref({})
    const successMessage = ref('')
    const errorMessage = ref('')
    const isOpen = ref(false)

    useHead({
      title: computed(() => t('contacts'))
    })

    const validateForm = () => {
        errors.value = {}

        if (!name.value.trim()) {
            errors.value.name = t('name.placeholder')
        } else if (name.value.length < 3) {
            errors.value.name = t('name.error')
        }

        if (!age.value) {
            errors.value.age = t('age.placeholder')
        } else if (isNaN(age.value) || age.value < 1) {
            errors.value.age = t('age.error')
        }

        return Object.keys(errors.value).length === 0
    }

    const submitForm = () => {
        if (!validateForm()) return

        isOpen.value = true
        successMessage.value = t('saved_successfully')
    }

    const goToContactList = () => {
        router.push('/contacts')
    }
</script>

<template>
  <div class="w-full mx-auto">
    <div class="text-3xl font-bold mb-6">
        {{ $t('create') }}
    </div>

    <UCard class="max-w-lg mx-auto lg:mt-12">
        <form @submit.prevent="submitForm" class="space-y-4">
            <!-- ชื่อ - นามสกุล -->
            <div class="flex flex-col gap-2">
                <label class="block font-semibold">{{ $t('name.label') }}:</label>
                <input
                    v-model="name"
                    type="text"
                    class="w-full p-2 border rounded-lg"
                    :placeholder="$t('name.placeholder')"
                />
                <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
            </div>

            <!-- อายุ -->
            <div class="flex flex-col gap-2">
                <label class="block font-semibold">{{ $t('age.label') }}:</label>
                <input
                    v-model="age"
                    type="number"
                    class="w-full p-2 border rounded-lg"
                    :placeholder="$t('age.placeholder')"
                />
                <p v-if="errors.age" class="text-red-500 text-sm">{{ errors.age }}</p>
            </div>

            <!-- ปุ่มบันทึก -->

            <UButton
                type="submit"
                :label="t('save')" 
                class="w-full flex justify-center"
                size="lg"
            />
        </form>
    </UCard>

    <UModal v-model="isOpen">
      <div class="p-8 flex flex-col gap-4 items-center">
        <UIcon name="i-heroicons-check-circle" class="w-24 h-24 text-green-500" />
        <p class="text-green-600 font-bold">{{ successMessage }}</p>
        <button @click="goToContactList" class="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg">
          {{ t('go_to_contact_list') }}
        </button>
      </div>
    </UModal>
  </div>
</template>