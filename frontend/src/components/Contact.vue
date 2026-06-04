<!-- <script setup>
import { ref, reactive } from 'vue';
import { Send, CheckCircle2, AlertCircle } from 'lucide-vue-next';

// Form State
const form = reactive({
  fullname: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);
const error = ref('');

// Email Validation
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleSubmit = async () => {
  error.value = '';
  
  if (!form.fullname || !form.email || !form.message) {
    error.value = "Please fill in all fields.";
    return;
  }
  
  if (!isValidEmail(form.email)) {
    error.value = "Please enter a valid email address.";
    return;
  }

  isSubmitting.value = true;

  // Google Form IDs from your provided link
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScKeeKjQEo5ew3DejaKhjWjJuo6Lp1DU0kbYKj9CtvbNOouXw/formResponse";
  
  const formData = new FormData();
  formData.append("entry.55011172", form.fullname); 
  formData.append("entry.1808101886", form.email);
  formData.append("entry.1295738363", form.message);

  try {
    // We use 'no-cors' mode for Google Forms
    await fetch(FORM_URL, {
      method: "POST",
      mode: "no-cors", 
      body: formData
    });

    // Success logic
    showSuccess.value = true;
    form.fullname = '';
    form.email = '';
    form.message = '';
    
    // Hide success message after 5 seconds
    setTimeout(() => { showSuccess.value = false; }, 5000);
  } catch (err) {
    error.value = "Something went wrong. Please try again later.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="pb-10">
    <div class="rounded-2xl overflow-hidden border border-[#383838] mb-8 grayscale opacity-60 hover:opacity-100 transition-all duration-700 shadow-2xl">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.43126830588!2d77.08051685!3d28.67145785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d040f7d52671b%3A0x7d2871783084325a!2sPaschim%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
        width="100%" height="320" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>

    <h3 class="text-white text-2xl font-bold mb-8">Contact Form</h3>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="relative group">
          <input 
            v-model="form.fullname"
            type="text" 
            placeholder="Full name"
            required
            class="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl py-3 px-4 text-white outline-none focus:border-[#ffdb70] focus:ring-1 focus:ring-[#ffdb70] transition-all"
          />
        </div>

        <div class="relative">
          <input 
            v-model="form.email"
            type="email" 
            placeholder="Email address"
            required
            class="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl py-3 px-4 text-white outline-none focus:border-[#ffdb70] focus:ring-1 focus:ring-[#ffdb70] transition-all"
          />
        </div>
      </div>

      <div class="relative">
        <textarea 
          v-model="form.message"
          rows="5" 
          placeholder="Your Message"
          required
          class="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl py-3 px-4 text-white outline-none focus:border-[#ffdb70] focus:ring-1 focus:ring-[#ffdb70] transition-all resize-none"
        ></textarea>
      </div>

      <div class="min-h-[24px]">
        <Transition name="fade">
          <div v-if="error" class="flex items-center gap-2 text-red-400 text-sm font-medium">
            <AlertCircle class="w-4 h-4" />
            {{ error }}
          </div>
          <div v-else-if="showSuccess" class="flex items-center gap-2 text-[#ffdb70] text-sm font-semibold">
            <CheckCircle2 class="w-4 h-4" />
            Message sent! I'll get back to you soon.
          </div>
        </Transition>
      </div>

      <div class="flex justify-end">
        <button 
          type="submit"
          :disabled="isSubmitting"
          class="flex items-center gap-2 bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] py-3.5 px-10 rounded-xl font-bold shadow-lg hover:bg-[#383838] hover:shadow-[#ffdb70]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed group active:scale-95"
        >
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else>Sending...</span>
          <Send v-if="!isSubmitting" class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          <div v-else class="w-4 h-4 border-2 border-[#ffdb70] border-t-transparent rounded-full animate-spin"></div>
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> -->










<script setup>
import { ref, reactive, computed } from 'vue';
import { Send, CheckCircle2, AlertCircle } from 'lucide-vue-next';

// Form State
const form = reactive({
  fullname: '',
  email: '',
  message: '',
  // 1. Honeypot field (hidden from humans)
  _honeypot: '' 
});

const isSubmitting = ref(false);
const showSuccess = ref(false);
const error = ref('');

// 2. Validation Logics
const isValidEmail = (email) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const wordCount = computed(() => {
  return form.message.trim().split(/\s+/).filter(word => word.length > 0).length;
});

const handleSubmit = async () => {
  error.value = '';
  
  // 3. Bot Check: If honeypot is filled, act like it worked but don't send
  if (form._honeypot) {
    console.warn("Bot detected.");
    showSuccess.value = true;
    return;
  }

  // 4. Stricter Validations
  if (!form.fullname.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = "All fields are mandatory.";
    return;
  }
  
  if (!isValidEmail(form.email)) {
    error.value = "Please provide a valid business or personal email.";
    return;
  }

  if (wordCount.value < 5) {
    error.value = `Message too short. Please add at least ${5 - wordCount.value} more word(s).`;
    return;
  }

  isSubmitting.value = true;

  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScKeeKjQEo5ew3DejaKhjWjJuo6Lp1DU0kbYKj9CtvbNOouXw/formResponse";
  
  // Using URLSearchParams for better Google Forms compatibility
  const params = new URLSearchParams();
  params.append("entry.55011172", form.fullname); 
  params.append("entry.1808101886", form.email);
  params.append("entry.1295738363", form.message);

  try {
    await fetch(FORM_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    });

    showSuccess.value = true;
    // Reset Form
    Object.assign(form, { fullname: '', email: '', message: '', _honeypot: '' });
    
    setTimeout(() => { showSuccess.value = false; }, 6000);
  } catch (err) {
    error.value = "Server busy. Please try again in a moment.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="pb-10">
    <div class="rounded-2xl overflow-hidden border border-[#383838] mb-8 grayscale opacity-60 hover:opacity-100 transition-all duration-700 shadow-2xl">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13999.695340910606!2d77.0847475!3d28.6919035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03994d5006df%3A0xe54492976d8e8784!2sPaschim%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000" 
        width="100%" height="320" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>

    <h3 class="text-white text-2xl font-bold mb-8">Get In Touch</h3>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <input type="text" v-model="form._honeypot" class="hidden" tabindex="-1" autocomplete="off" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="relative group">
          <input 
            v-model="form.fullname"
            type="text" 
            placeholder="Full name"
            class="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl py-3 px-4 text-white outline-none focus:border-[#ffdb70] transition-all"
          />
        </div>

        <div class="relative">
          <input 
            v-model="form.email"
            type="email" 
            placeholder="Email address"
            class="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl py-3 px-4 text-white outline-none focus:border-[#ffdb70] transition-all"
          />
        </div>
      </div>

      <div class="relative">
        <textarea 
          v-model="form.message"
          rows="5" 
          placeholder="How can I help you?"
          class="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl py-3 px-4 text-white outline-none focus:border-[#ffdb70] transition-all resize-none"
        ></textarea>
        <span class="absolute bottom-3 right-4 text-[10px]" :class="wordCount < 5 ? 'text-gray-500' : 'text-[#ffdb70]'">
          {{ wordCount }}/5 words
        </span>
      </div>

      <div class="min-h-[24px]">
        <Transition name="fade">
          <div v-if="error" class="flex items-center gap-2 text-red-400 text-sm font-medium">
            <AlertCircle class="w-4 h-4" />
            {{ error }}
          </div>
          <div v-else-if="showSuccess" class="flex items-center gap-2 text-[#ffdb70] text-sm font-semibold">
            <CheckCircle2 class="w-4 h-4" />
            Success! Your message has been routed to Gaurav.
          </div>
        </Transition>
      </div>

      <div class="flex justify-end">
        <button 
          type="submit"
          :disabled="isSubmitting"
          class="flex items-center gap-2 bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] py-3.5 px-10 rounded-xl font-bold shadow-lg hover:bg-[#383838] transition-all disabled:opacity-50 group active:scale-95"
        >
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else>Processing...</span>
          <Send v-if="!isSubmitting" class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          <div v-else class="w-4 h-4 border-2 border-[#ffdb70] border-t-transparent rounded-full animate-spin"></div>
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.hidden { display: none !important; }
</style>