<!-- <template>
  <div class="min-h-screen bg-[#121212] py-8 px-4 sm:px-6 lg:py-14">
    <div class="flex flex-col lg:flex-row gap-6 p-4 lg:p-10 max-w-7xl mx-auto items-start">
      <Sidebar />
      <main class="flex-1 w-full">
        <MainContent />
      </main>
    </div>
  </div>
</template> -->

<!-- <template>
  <div class="min-h-screen bg-[#121212] py-8 px-4 sm:px-6 lg:py-14">
    
    <div class="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto items-start justify-center">
      
      <Sidebar />

      <main class="flex-1 w-full min-w-0">
        <MainContent />
      </main>

    </div>
  </div>
</template>

<script setup>  
import Sidebar from './components/Sidebar.vue';
import MainContent from './components/MainContent.vue';
</script> -->


<!-- <template>
  <div class="h-screen bg-[#121212]">

    <div class="flex h-full max-w-7xl mx-auto flex-col lg:flex-row">

      
      <aside
        class="
          w-full
          lg:w-72
          flex-shrink-0
          lg:sticky lg:top-0
        "
      >
        <Sidebar />
      </aside>

      
      <main
        class="
          flex-1
          w-full
          lg:overflow-y-auto
          no-scrollbar
          px-4 sm:px-6 lg:px-8
          py-6
        "
      >
        <MainContent />
      </main>

    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
</script> -->













<template>
  <div class="h-screen bg-[#121212]">

    <div class="flex h-full max-w-7xl mx-auto flex-col lg:flex-row">

      <!-- SIDEBAR -->
      <aside
        class="
          w-full
          lg:w-72
          flex-shrink-0
          lg:sticky lg:top-0
        "
      >
        <Sidebar />
      </aside>

      <!-- MAIN CONTENT -->
      <main
        class="
          flex-1
          w-full
          lg:overflow-y-auto
          no-scrollbar
          px-4 sm:px-6 lg:px-8 
          py-12 lg:py-12
        "
      >
        <MainContent />
      </main>

    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
</script>

