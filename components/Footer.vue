<script setup lang="ts">
</script>
<template>
  <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <!-- Address -->
          <div class="text-xs lg:text-lg">
            <div class="font-semibold mb-2">{{ $t('address') }}</div>
            <p>123 Sample Street, Bangkok 10110</p>
          </div>

          <!-- Phone -->
          <div class="text-xs lg:text-lg">
            <div class="font-semibold mb-2">{{ $t('phone') }}</div>
            <a 
              href="tel:+66123456789" 
              class="hover:text-gray-300 transition-colors"
            >
              +66 12 345 6789
            </a>
          </div>

          <!-- Email -->
          <div class="text-xs lg:text-lg">
            <div class="font-semibold mb-2">{{ $t('email') }}</div>
            <a 
              href="mailto:napipusana@gmail.com" 
              class="hover:text-gray-300 transition-colors"
            >
              napipusana@gmail.com
            </a>
          </div>

          <!-- Line -->
          <div class="text-xs lg:text-lg">
            <div class="font-semibold mb-2">Line</div>
            <a 
              href="https://line.me/ti/p/~example"
              target="_blank"
              class="hover:text-gray-300 transition-colors"
            >
              @example
            </a>
          </div>
        </div>
      </div>
    </footer>
</template>
