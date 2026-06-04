<script setup>
import { ref } from 'vue';
import { Mail, Phone, Calendar, MapPin, ChevronDown, Github, Twitter, Instagram, Linkedin } from 'lucide-vue-next';
import myAvatar from '../assets/images/mee.png';

const isExpanded = ref(false);

const contactInfo = [
  { id: 1, label: 'EMAIL', value: 'thakurgauravkr@gmail.com', icon: Mail },
  { id: 2, label: 'PHONE', value: '+91 8595109337', icon: Phone },
  { id: 3, label: 'BIRTHDAY', value: 'April 23, 2005', icon: Calendar },
  { id: 4, label: 'LOCATION', value: 'West, New Delhi, INDIA', icon: MapPin },
];
</script>

<template>
  <aside 
    class="bg-[#1e1e1f] border border-[#383838] rounded-3xl p-5 lg:p-8 w-full lg:w-[280px] xl:w-[300px] transition-all duration-500 z-20 
         self-start lg:sticky lg:top-14 lg:h-fit"
  >
    <div class="flex flex-row lg:flex-col items-center gap-4 lg:gap-6 relative">
      <div class="bg-gradient-to-br from-[#3b3b3c] to-[#2b2b2c] rounded-3xl p-1 flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 shrink-0 shadow-2xl">
        <img 
          :src="myAvatar" 
          alt="Gaurav Thakur" 
          class="rounded-2xl w-full h-full object-cover"
        />
      </div>

      <div class="flex-1 lg:text-center min-w-0">
        <h1 class="text-white text-lg lg:text-2xl font-semibold tracking-wide truncate mb-1">
          Gaurav Thakur
        </h1>
        <p class="bg-[#2b2b2c] text-[#ffdb70] text-[10px] lg:text-xs py-1 px-3 rounded-md inline-block font-medium">
          Web developer
        </p>
      </div>

      <button 
        @click="isExpanded = !isExpanded"
        aria-label="Toggle Contacts"
        class="lg:hidden absolute top-0 right-0 bg-transparent border border-[#383838] p-2 rounded-xl text-[#ffdb70] shadow-sm active:scale-95 transition-all"
      >
        <ChevronDown 
          class="w-5 h-5 transition-transform duration-300" 
          :class="isExpanded ? 'rotate-180' : ''" 
        />
      </button>
    </div>

    <div class="h-[1px] bg-[#383838] w-full mt-5 lg:hidden" v-if="isExpanded"></div>

    <div 
      class="grid transition-all duration-500 ease-in-out lg:block"
      :class="[
        isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 lg:opacity-100 overflow-hidden'
      ]"
    >
      <div class="overflow-hidden lg:overflow-visible">
        <div class="h-[1px] bg-[#383838] w-full mb-8 hidden lg:block"></div>

        <div class="grid grid-cols-1 gap-5 lg:gap-6">
          <div v-for="item in contactInfo" :key="item.id" class="flex items-center gap-4 group">
            <div class="w-10 h-10 bg-[#2b2b2c] rounded-xl flex items-center justify-center shadow-lg border border-[#383838] group-hover:border-[#ffdb70] transition-colors shrink-0">
              <component :is="item.icon" class="w-4 h-4 text-[#ffdb70]" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-[#d6d6d6b3] text-[10px] uppercase font-light tracking-wider">{{ item.label }}</p>
              <p class="text-white text-sm truncate hover:text-[#ffdb70] transition-colors cursor-default" :title="item.value">
                {{ item.value }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center lg:justify-start gap-5 mt-8 pb-2">
          <a href="https://www.linkedin.com/in/gaurav-kumar-thakur-2292193a5/" class="text-[#d6d6d6b3] hover:text-[#ffdb70] transition-all hover:-translate-y-1"><Linkedin class="w-5 h-5" /></a>
          <a href="https://github.com/grv-galaxy" class="text-[#d6d6d6b3] hover:text-[#ffdb70] transition-all hover:-translate-y-1"><Github class="w-5 h-5" /></a>
          <a href="https://www.instagram.com/_gaurav_.k.u.ma.r" class="text-[#d6d6d6b3] hover:text-[#ffdb70] transition-all hover:-translate-y-1"><Instagram class="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.grid-rows-\[0fr\] { grid-template-rows: 0fr; }
.grid-rows-\[1fr\] { grid-template-rows: 1fr; }
</style>
