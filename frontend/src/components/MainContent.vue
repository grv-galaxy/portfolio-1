<!-- <script setup>
import { ref } from 'vue';
import { BrainCircuit, Code2, Rocket, Cpu } from 'lucide-vue-next';
// Import the new Portfolio component
import PortfolioGrid from './Portfolio.vue'; 
import Contact from './Contact.vue';
import Resume from './Resume.vue';

const activeTab = ref('About');
const tabs = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Developing intelligent systems and predictive models that solve complex data problems.',
    icon: BrainCircuit
  },
  {
    title: 'Full-Stack Development',
    description: 'Building scalable web applications using modern stacks with a focus on performance.',
    icon: Code2
  },
  {
    title: 'Product Strategy',
    description: 'Turning ideas into real, working products with a creative problem-solving approach.',
    icon: Rocket
  },
  {
    title: 'Creative Computing',
    description: 'Pushing technology boundaries to create unique and impactful digital experiences.',
    icon: Cpu
  }
];
</script>

<template>
  <div class="bg-[#1e1e1f] border border-[#383838] rounded-3xl p-6 lg:p-10 relative min-h-[600px] shadow-2xl">
    
    <nav class="fixed bottom-0 left-0 w-full bg-[#2b2b2c]/95 backdrop-blur-md border-t border-[#383838] z-[100] lg:absolute lg:top-0 lg:bottom-auto lg:right-0 lg:left-auto lg:w-auto lg:rounded-bl-3xl lg:rounded-tr-3xl lg:border-l lg:border-b lg:border-t-0 shadow-lg">
      <ul class="flex justify-evenly lg:justify-end items-center px-4 py-4 lg:py-5 lg:px-10 gap-2 lg:gap-10">
        <li v-for="tab in tabs" :key="tab">
          <button 
            @click="activeTab = tab"
            :class="activeTab === tab ? 'text-[#ffdb70]' : 'text-[#d6d6d6b3]'"
            class="text-[12px] md:text-sm font-medium transition-all hover:text-[#d6d6d6] relative group"
          >
            {{ tab }}
            <span v-if="activeTab === tab" class="absolute -bottom-1 left-0 w-full h-[1px] bg-[#ffdb70] lg:hidden"></span>
          </button>
        </li>
      </ul>
    </nav>

    <header class="mb-8">
      <h2 class="text-white text-2xl lg:text-3xl font-semibold mb-4 relative inline-block capitalize">
        {{ activeTab === 'About' ? 'About Me' : activeTab }}
        <span class="absolute -bottom-2 left-0 w-10 h-1 bg-[#ffdb70] rounded-full"></span>
      </h2>
    </header>

    <Transition name="fade" mode="out-in">
      <div :key="activeTab">
        
        <section v-if="activeTab === 'About'" class="text-[#d6d6d6] leading-relaxed space-y-6">
          <div class="space-y-4 text-sm md:text-base">
            <p>
              Hey, I'm <span class="text-white font-medium text-lg">Gaurav</span>, a Developer from India with a passion for building things that actually make an impact. I work across <span class="text-[#ffdb70]">AI, Machine Learning, and Full-Stack Development</span> — and I love turning ideas into real, working products.
            </p>
            <p>
              With <span class="text-white font-medium">5 years of experience</span>, I approach everything as a creative problem-solver who enjoys pushing technology to do more.
            </p>
            <p class="italic opacity-90">
              But I'd rather let my work speak for itself. That's why I built this space — so you can explore what I create and, hopefully, we can build something amazing together 🚀
            </p>
          </div>

          <h3 class="text-white text-xl font-semibold mt-12 mb-8">What I'm Doing</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
            <div 
              v-for="service in services" 
              :key="service.title"
              class="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] p-6 rounded-2xl flex items-start gap-4 shadow-sm hover:translate-y-[-5px] transition-all duration-300"
            >
              <div class="text-[#ffdb70] shrink-0">
                <component :is="service.icon" class="w-8 h-8 lg:w-10 lg:h-10" stroke-width="1.5" />
              </div>
              <div>
                <h4 class="text-white font-semibold mb-2">{{ service.title }}</h4>
                <p class="text-xs lg:text-sm text-[#d6d6d6b3] leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section v-else-if="activeTab === 'Portfolio'">
          <PortfolioGrid />
        </section>

        <section v-else-if="activeTab === 'Contact'">
          <Contact />
        </section>

        <section v-else-if="activeTab === 'Resume'">
          <Resume />
        </section>

        <section v-else class="flex flex-col items-center justify-center py-24 text-[#d6d6d6b3]">
           <Rocket class="w-12 h-12 mb-4 animate-bounce text-[#ffdb70]" />
           <p class="text-lg">Working on the {{ activeTab }} section...</p>
           <p class="text-sm opacity-50">It will be production ready soon!</p>
        </section>
        
      </div>
    </Transition>

    <div class="h-24 lg:hidden"></div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> -->

















<script setup>
import { ref } from 'vue';
import { BrainCircuit, Code2, Rocket, Database, BarChart3, Binary } from 'lucide-vue-next';
import PortfolioGrid from './Portfolio.vue'; 
import Contact from './Contact.vue';
import Resume from './Resume.vue';

const activeTab = ref('About');
const tabs = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Engineering custom neural networks and ML pipelines to automate complex decision-making processes.',
    icon: BrainCircuit
  },
  {
    title: 'Data Science & Analytics',
    description: 'Transforming raw data into actionable intelligence through statistical modeling and deep exploratory analysis.',
    icon: Database
  },
  {
    title: 'Full-Stack Development',
    description: 'Building robust, scalable web architectures that integrate seamlessly with intelligent backends.',
    icon: Code2
  },
  {
    title: 'Predictive Modeling',
    description: 'Implementing advanced algorithms to forecast trends and optimize business outcomes via data-driven logic.',
    icon: BarChart3
  }
];
</script>

<template>
  <div class="bg-[#1e1e1f] border border-[#383838] rounded-3xl p-6 lg:p-10 relative min-h-[600px] shadow-2xl">
    
    <nav class="fixed bottom-0 left-0 w-full bg-[#2b2b2c]/95 backdrop-blur-md border-t border-[#383838] z-[100] lg:absolute lg:top-0 lg:bottom-auto lg:right-0 lg:left-auto lg:w-auto lg:rounded-bl-3xl lg:rounded-tr-3xl lg:border-l lg:border-b lg:border-t-0 shadow-lg">
      <ul class="flex justify-evenly lg:justify-end items-center px-4 py-4 lg:py-5 lg:px-10 gap-2 lg:gap-10">
        <li v-for="tab in tabs" :key="tab">
          <button 
            @click="activeTab = tab"
            :class="activeTab === tab ? 'text-[#ffdb70]' : 'text-[#d6d6d6b3]'"
            class="text-[12px] md:text-sm font-medium transition-all hover:text-[#d6d6d6] relative group"
          >
            {{ tab }}
            <span v-if="activeTab === tab" class="absolute -bottom-1 left-0 w-full h-[1px] bg-[#ffdb70] lg:hidden"></span>
          </button>
        </li>
      </ul>
    </nav>

    <header class="mb-8">
      <h2 class="text-white text-2xl lg:text-3xl font-semibold mb-4 relative inline-block capitalize">
        {{ activeTab === 'About' ? 'About Me' : activeTab }}
        <span class="absolute -bottom-2 left-0 w-10 h-1 bg-[#ffdb70] rounded-full"></span>
      </h2>
    </header>

    <Transition name="fade" mode="out-in">
      <div :key="activeTab">
        
        <section v-if="activeTab === 'About'" class="text-[#d6d6d6] leading-relaxed space-y-6">
          <div class="space-y-4 text-sm md:text-base">
            <p>
              Hey, I'm <span class="text-white font-medium text-lg">Gaurav</span>, a Developer and Data Scientist from India. My expertise lies at the intersection of <span class="text-[#ffdb70]">Data Science, AI, and Full-Stack Development</span>, where I build intelligent systems that are as technically sound as they are user-centric.
            </p>
            <p>
              With <span class="text-white font-medium">5 years of experience</span>, I specialize in implementing Data Science through advanced <span class="text-white font-medium">Machine Learning and Deep Learning frameworks</span>. I don't just build models; I bridge the gap between complex data insights and real-world software applications.
            </p>
            <p class="italic opacity-90">
              My goal is to turn raw, unstructured data into high-impact products. This space is a collection of my work where data-driven logic meets creative engineering. 🚀
            </p>
          </div>

          <h3 class="text-white text-xl font-semibold mt-12 mb-8">What I'm Doing</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
            <div 
              v-for="service in services" 
              :key="service.title"
              class="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] p-6 rounded-2xl flex items-start gap-4 shadow-sm hover:translate-y-[-5px] transition-all duration-300"
            >
              <div class="text-[#ffdb70] shrink-0">
                <component :is="service.icon" class="w-8 h-8 lg:w-10 lg:h-10" stroke-width="1.5" />
              </div>
              <div>
                <h4 class="text-white font-semibold mb-2">{{ service.title }}</h4>
                <p class="text-xs lg:text-sm text-[#d6d6d6b3] leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section v-else-if="activeTab === 'Portfolio'">
          <PortfolioGrid />
        </section>

        <section v-else-if="activeTab === 'Contact'">
          <Contact />
        </section>

        <section v-else-if="activeTab === 'Resume'">
          <Resume />
        </section>

        <section v-else class="flex flex-col items-center justify-center py-24 text-[#d6d6d6b3]">
           <Rocket class="w-12 h-12 mb-4 animate-bounce text-[#ffdb70]" />
           <p class="text-lg">Working on the {{ activeTab }} section...</p>
           <p class="text-sm opacity-50">It will be production ready soon!</p>
        </section>
        
      </div>
    </Transition>

    <div class="h-24 lg:hidden"></div>
  </div>
</template>