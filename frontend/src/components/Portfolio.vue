<script setup>
import { ref, computed } from 'vue';
import { Eye, ExternalLink } from 'lucide-vue-next'; // Added ExternalLink for better clarity
import { projects } from '../data/projects';

const selectedCategory = ref('All');
const categories = ['All', 'AI', 'Machine Learning', 'Full-Stack'];

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects;
  return projects.filter(project => project.category === selectedCategory.value);
});
</script>

<template>
  <section class="pb-12">
    <div class="overflow-x-auto no-scrollbar mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
      <ul class="flex flex-nowrap sm:flex-wrap gap-4 md:gap-8 text-[#d6d6d6b3] min-w-max">
        <li v-for="cat in categories" :key="cat">
          <button 
            @click="selectedCategory = cat"
            :class="selectedCategory === cat ? 'text-[#ffdb70] font-semibold' : 'hover:text-[#d6d6d6]'"
            class="text-sm md:text-base transition-all relative pb-2 group"
          >
            {{ cat }}
            <span v-if="selectedCategory === cat" class="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffdb70] rounded-full"></span>
          </button>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      <TransitionGroup name="list">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="group relative"
        >
          <div class="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-[#2b2b2c] border border-[#383838] active:scale-[0.98] transition-transform">
            <img 
              :src="project.image" 
              :alt="project.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110 opacity-90 md:group-hover:opacity-100"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="flex gap-3">
                <a :href="project.link" target="_blank" class="bg-[#383838] p-3 rounded-xl text-[#ffdb70] shadow-2xl border border-[#ffffff10] hover:bg-[#444] transition-colors">
                  <Eye class="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a :href="project.link" target="_blank" class="bg-[#383838] p-3 rounded-xl text-[#ffdb70] shadow-2xl border border-[#ffffff10] hidden md:block hover:bg-[#444] transition-colors">
                  <ExternalLink class="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>

          <div class="px-1">
            <h4 class="text-white text-lg font-semibold mb-1 group-hover:text-[#ffdb70] transition-colors">
              {{ project.title }}
            </h4>
            <p class="text-[#d6d6d6b3] text-sm font-light flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#ffdb70]"></span>
              {{ project.category }}
            </p>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>