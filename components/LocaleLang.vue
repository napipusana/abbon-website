<script setup lang="ts">
    const { locale, setLocale } = useI18n()
    const localeCookie = useCookie('i18n_lang')

    if (localeCookie.value) {
        setLocale(localeCookie.value)
    }

    const changeLanguage = (lang: string) => {
        setLocale(lang)
        localeCookie.value = lang // อัปเดตคุกกี้
    }

</script>
<template>
    <ClientOnly>
        <div class="flex items-center gap-2 font-semibold text-sm">
            <div 
                class="cursor-pointer"
                :class="locale === 'th' ? 'text-blue-800' : 'text-gray-400'"
                @click="changeLanguage('th')"
            >
                TH
            </div>
            <div>|</div>
            <div 
                class="cursor-pointer"
                :class="locale === 'en' ? 'text-blue-800' : 'text-gray-400'"
                @click="changeLanguage('en')"
            >
                EN
            </div>
        </div>
    </ClientOnly>
</template>
