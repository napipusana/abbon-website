export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        home: 'Home',
        contacts: 'Contacts',
        list: 'Contacts List',
        create: 'Created Contacts',
        current_location: 'Current Location',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        clear: 'Clear',
        search: 'Search',
        name: {
            label: 'First name - Last name',
            placeholder: 'Enter First name - Last name',
            error: 'The name must be at least 3 characters long'
        },
        age: { 
            label: 'Age',
            placeholder: 'Enter age',
            error: 'The age must be a number and greater than 0'
        },
        pipusana_kumvongdee: 'Pipusana Kumvongdee',
        save: 'Save',
        saved_successfully: 'Saved Successfully',
        go_to_contact_list: 'Go to Contact List page'
      },
      th: {
        welcome: 'ยินดีต้อนรับ',
        home: 'หน้าแรก',
        contacts: 'ติดต่อ',
        list: 'รายการผู้ติดต่อ',
        create: 'สร้างผู้ติดต่อ',
        current_location: 'ตำแหน่งปัจจุบัน',
        address: 'ที่อยู่',
        phone: 'เบอร์โทรศัพท์',
        email: 'อีเมล',
        clear: 'ล้าง',
        search: 'ค้นหา',
        name: {
            label: 'ชื่อ - นามสกุล',
            placeholder: 'กรอกชื่อ - นามสกุล',
            error: 'ชื่อต้องมีอย่างน้อย 3 ตัวอักษร'
        },
        age: { 
            label: 'อายุ',
            placeholder: 'กรอกอายุ',
            error: 'อายุต้องเป็นตัวเลขและมากกว่า 0'
        },
        pipusana_kumvongdee: 'พิภูษณะ คุ้มวงษ์ดี',
        save: 'บันทึก',
        saved_successfully: 'บันทึกสำเร็จ',
        go_to_contact_list: 'ไปหน้ารายการผู้ติดต่อ'
      }
    }
  }))