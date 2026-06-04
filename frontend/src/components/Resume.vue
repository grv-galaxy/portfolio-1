<!-- <script setup>
import { BookOpen, Briefcase, Download } from 'lucide-vue-next';

// Data specialized for Gaurav
const education = [
  {
    title: "Indian Institute of Technology Madras (IITM)",
    date: "2024 — 2028",
    desc: "Pursuing BS Degree. Focusing on advanced computational logic and systems architecture."
  }
];

const experience = [
  {
    title: "Full-Stack & AI Developer",
    date: "2022 — Present",
    desc: "Building end-to-end web applications and integrating Generative AI models. Specialized in creating Agentic AI workflows and LLM-powered tools while balancing academic excellence."
  },
  {
    title: "AI/ML Researcher (Self-Directed)",
    date: "2023 — Present",
    desc: "Experimenting with Agentic Frameworks and fine-tuning Machine Learning models for real-world impact products."
  }
];

const skills = [
  { name: "Full-Stack Development", value: 95 },
  { name: "Gen AI & Agentic AI", value: 90 },
  { name: "Machine Learning", value: 85 },
  { name: "Python / Data Science", value: 88 }
];
</script>

<template>
  <section class="pb-12">
    <div class="flex justify-between items-center mb-8">
      <div class="h-1 w-10 bg-[#ffdb70] rounded-full hidden md:block"></div>
      <a 
        href="/path-to-your-cv.pdf" 
        download
        class="flex items-center gap-2 bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] py-2 px-5 rounded-xl text-sm hover:bg-[#333] transition-all shadow-lg"
      >
        <Download class="w-4 h-4" />
        Download CV
      </a>
    </div>

    <div class="mb-14">
      <div class="flex items-center gap-4 mb-8">
        <div class="bg-[#2b2b2c] p-3 rounded-xl border border-[#383838] text-[#ffdb70] shadow-xl">
          <BookOpen class="w-6 h-6" />
        </div>
        <h3 class="text-white text-2xl font-semibold">Education</h3>
      </div>

      <ol class="relative border-l border-[#383838] ml-6 space-y-12">
        <li v-for="item in education" :key="item.title" class="ml-8 relative">
          <span class="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[38.5px] top-1.5 shadow-[0_0_0_4px_rgba(56,56,56,1)]"></span>
          <h4 class="text-white font-semibold text-lg leading-tight">{{ item.title }}</h4>
          <p class="text-[#ffdb70] text-sm mt-1 font-medium">{{ item.date }}</p>
          <p class="text-[#d6d6d6b3] mt-3 text-sm leading-relaxed max-w-2xl">
            {{ item.desc }}
          </p>
        </li>
      </ol>
    </div>

    <div class="mb-14">
      <div class="flex items-center gap-4 mb-8">
        <div class="bg-[#2b2b2c] p-3 rounded-xl border border-[#383838] text-[#ffdb70] shadow-xl">
          <Briefcase class="w-6 h-6" />
        </div>
        <h3 class="text-white text-2xl font-semibold">Experience</h3>
      </div>

      <ol class="relative border-l border-[#383838] ml-6 space-y-12">
        <li v-for="item in experience" :key="item.title" class="ml-8 relative">
          <span class="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[38.5px] top-1.5 shadow-[0_0_0_4px_rgba(56,56,56,1)]"></span>
          <h4 class="text-white font-semibold text-lg leading-tight">{{ item.title }}</h4>
          <p class="text-[#ffdb70] text-sm mt-1 font-medium">{{ item.date }}</p>
          <p class="text-[#d6d6d6b3] mt-3 text-sm leading-relaxed max-w-2xl">
            {{ item.desc }}
          </p>
        </li>
      </ol>
    </div>

    <div>
      <h3 class="text-white text-2xl font-semibold mb-8">My Skills</h3>
      <div class="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] p-6 md:p-10 rounded-3xl shadow-2xl">
        <div class="grid grid-cols-1 gap-8">
          <div v-for="skill in skills" :key="skill.name">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-white font-medium">{{ skill.name }}</span>
              <span class="text-[#d6d6d6b3] text-sm">{{ skill.value }}%</span>
            </div>
            <div class="w-full bg-[#383838] h-2 rounded-full overflow-hidden">
              <div 
                class="bg-gradient-to-r from-[#ffdb70] to-[#ffb633] h-full rounded-full transition-all duration-1000 ease-out"
                :style="{ width: skill.value + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> -->






















<script setup>
import { BookOpen, Briefcase, Download, Terminal, Database, Layers, ExternalLink } from 'lucide-vue-next';
import { generateResumePDF } from '../utils/resumeGenerator';
import { projects } from '../data/projects';

const featuredProjects = projects.filter(p => p.category === 'Full-Stack' || p.id === 3);

const education = [
  {
    title: "Indian Institute of Technology Madras (IITM)",
    date: "2024 — 2028",
    desc: "Bachelor of Science (BS) in Data Science and Applications. Focus on advanced statistical modeling, computational logic, and large-scale data architecture."
  },
  {
    title: "JL DAV Public School, Paschim Vihar, New Delhi",
    date: "2022 — 2024",
    desc: "Completed 10+2 (Senior Secondary) with a core focus on Science and Computer Science. Built a strong foundation in programming logic and mathematical analysis."
  }
];

const experience = [
  {
    title: "AI & Full-Stack Developer",
    date: "2022 — Present",
    desc: "Architecting end-to-end intelligent applications. Bridging the gap between robust Web UI and backend AI services. Expert in creating Agentic workflows and integrating LLMs."
  },
  {
    title: "Data Science & ML Research",
    date: "2023 — Present",
    desc: "Applying statistical rigor to real-world datasets. Focused on implementing predictive models, data cleaning pipelines, and fine-tuning open-source models (Llama/Mistral)."
  }
];

const mainSkills = [
  { name: "Full-Stack Development", value: 95 },
  { name: "Gen AI & Agentic AI", value: 92 },
  { name: "Machine Learning / DL", value: 85 },
  { name: "Data Science (Python/SQL)", value: 88 }
];

const techStack = [
  { category: "Frameworks", items: ["Vue.js", "FastAPI", "Express", "Tailwind"] },
  { category: "Data/AI", items: ["PyTorch", "Pandas", "Scikit-Learn", "LangChain"] },
  { category: "Tools", items: ["Docker", "Git", "PostgreSQL", "Firebase"] }
];

const handleDownload = () => {
  generateResumePDF({
    education: education,
    experience: experience,
    skills: mainSkills,
    projects: featuredProjects,
  })
}
</script>

<template>
  <section class="pb-12 scroll-mt-20">
    <div class="flex justify-end mb-10">
      <button  
        @click="handleDownload"
        class="flex items-center gap-2 bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] py-2.5 px-6 rounded-xl text-sm font-medium hover:bg-[#383838] transition-all shadow-lg active:scale-95"
      >
        <Download class="w-4 h-4" />
        Download CV
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <div>
        <div class="flex items-center gap-4 mb-10">
          <div class="bg-[#2b2b2c] p-3 rounded-xl border border-[#383838] text-[#ffdb70] shadow-xl">
            <BookOpen class="w-6 h-6" />
          </div>
          <h3 class="text-white text-2xl font-bold">Education</h3>
        </div>

        <ol class="relative border-l border-[#383838] ml-6 space-y-12">
          <li v-for="item in education" :key="item.title" class="ml-8 relative">
            <span class="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[38.5px] top-1.5 shadow-[0_0_0_4px_rgba(56,56,56,1)]"></span>
            <h4 class="text-white font-bold text-lg leading-tight">{{ item.title }}</h4>
            <p class="text-[#ffdb70] text-sm mt-1.5 font-semibold">{{ item.date }}</p>
            <p class="text-[#d6d6d6b3] mt-3 text-[14px] leading-relaxed">
              {{ item.desc }}
            </p>
          </li>
        </ol>
      </div>

      <div>
        <div class="flex items-center gap-4 mb-10">
          <div class="bg-[#2b2b2c] p-3 rounded-xl border border-[#383838] text-[#ffdb70] shadow-xl">
            <Briefcase class="w-6 h-6" />
          </div>
          <h3 class="text-white text-2xl font-bold">Experience</h3>
        </div>

        <ol class="relative border-l border-[#383838] ml-6 space-y-12">
          <li v-for="item in experience" :key="item.title" class="ml-8 relative">
            <span class="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[38.5px] top-1.5 shadow-[0_0_0_4px_rgba(56,56,56,1)]"></span>
            <h4 class="text-white font-bold text-lg leading-tight">{{ item.title }}</h4>
            <p class="text-[#ffdb70] text-sm mt-1.5 font-semibold">{{ item.date }}</p>
            <p class="text-[#d6d6d6b3] mt-3 text-[14px] leading-relaxed">
              {{ item.desc }}
            </p>
          </li>
        </ol>
      </div>
    </div>

    <div class="mb-16">
      <h3 class="text-white text-2xl font-bold mb-8">Technical Proficiency</h3>
      <div class="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] p-8 rounded-3xl shadow-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div v-for="skill in mainSkills" :key="skill.name">
            <div class="flex items-center justify-between mb-3">
              <span class="text-white font-semibold text-sm">{{ skill.name }}</span>
              <span class="text-[#d6d6d6b3] text-xs">{{ skill.value }}%</span>
            </div>
            <div class="w-full bg-[#383838] h-1.5 rounded-full overflow-hidden">
              <div 
                class="bg-[#ffdb70] h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,219,112,0.3)]"
                :style="{ width: skill.value + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-16">
      <div class="flex items-center gap-4 mb-10">
        <div class="bg-[#2b2b2c] p-3 rounded-xl border border-[#383838] text-[#ffdb70] shadow-xl">
          <Layers class="w-6 h-6" />
        </div>
        <h3 class="text-white text-2xl font-bold">Featured Projects</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="project in featuredProjects" :key="project.id" class="bg-[#2b2b2c] border border-[#383838] p-6 rounded-2xl hover:border-[#ffdb70]/50 transition-all group">
          <div class="flex justify-between items-start mb-4">
            <h4 class="text-white font-bold text-lg">{{ project.title }}</h4>
            <a :href="project.link" target="_blank" class="text-[#ffdb70] hover:text-white transition-colors">
              <ExternalLink class="w-5 h-5" />
            </a>
          </div>
          <p class="text-[#d6d6d6b3] text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 bg-[#1e1e1f] border border-[#383838] text-[#ffdb70] text-xs rounded-lg font-medium">
              {{ project.category }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-white text-2xl font-bold mb-8">Tools & Ecosystem</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="stack in techStack" :key="stack.category" class="bg-[#2b2b2c] border border-[#383838] p-6 rounded-2xl hover:border-[#ffdb70]/50 transition-colors group">
          <h4 class="text-[#ffdb70] font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <Terminal v-if="stack.category === 'Frameworks'" class="w-4 h-4" />
            <Layers v-else-if="stack.category === 'Data/AI'" class="w-4 h-4" />
            <Database v-else class="w-4 h-4" />
            {{ stack.category }}
          </h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in stack.items" :key="tag" class="px-3 py-1 bg-[#1e1e1f] border border-[#383838] text-[#d6d6d6] text-xs rounded-lg group-hover:border-[#ffdb70]/30">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>