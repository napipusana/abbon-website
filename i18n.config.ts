import en from './locales/en'
import th from './locales/th'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'th', // เปลี่ยนเป็นภาษาเริ่มต้นที่ต้องการ
    fallbackLocale: 'en', // ภาษาสำรองถ้าไม่พบคำแปล
    strategy: 'prefix_except_default',
    messages: {
      en,
      th
    }
  }))