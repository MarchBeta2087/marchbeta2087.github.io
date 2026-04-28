<template>
  <!-- 
    整体容器
    通过 :style 动态绑定背景色和文字颜色
  -->
  <div class="min-h-screen w-full transition-all duration-500 ease-in-out" :style="containerStyle">
    <!-- 导航栏 -->
    <nav
      class="fixed w-full backdrop-blur-md border-b z-50 transition-all duration-500 ease-in-out"
      :style="navStyle"
    >
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- 左上角 Logo 渐变 -->
        <h1 class="text-2xl font-bold transition-all duration-500" :style="gradientTextStyle">
          @MarchBeta2087
        </h1>

        <div class="flex gap-6 items-center">
          <button
            @click="toggleDark"
            class="px-5 py-2 rounded-full font-bold shadow-sm active:scale-95 border transition-all duration-500"
            :style="buttonStyle"
          >
            <span v-if="isDark">☀️ 关闭夜间模式</span>
            <span v-else>🌙 打开夜间模式</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero 区域 -->
    <section class="pt-32 pb-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium border backdrop-blur-sm transition-all duration-500"
          :style="badgeStyle"
        >
          👋 欢迎来到我的主页
        </div>
        <h2 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight transition-all duration-500">
          <div style="display:flex;justify-content:center;align-items:center;height:300px;">
            <img src="https://avatars.githubusercontent.com/u/98508270?v=4&size=64" height="256" width="256" alt="Centered Image">
          </div>
          构建优雅的、先进的<br />
          <!-- 大标题渐变 -->
          <span :style="gradientTextStyle" class="transition-all duration-500"> Web 体验</span>
        </h2>
        <p
          class="text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-medium opacity-80 transition-all duration-500"
        >
          前端开发者 / 开源爱好者 / AI爱好者
        </p>
      </div>
    </section>

    <!-- 链接区域 -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto space-y-4">
        <h3 class="text-3xl font-bold text-center mb-12 transition-all duration-500">
          想要了解我？
        </h3>

        <!-- 卡片 1: GitHub -->
        <a
          href="https://github.com/MarchBeta2087"
          target="_blank"
          class="group flex items-center p-6 rounded-2xl shadow-lg hover:-translate-y-1 border transition-all duration-500"
          :style="cardStyle"
        >
          <div
            class="w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4 transition-transform duration-500 group-hover:scale-110"
            :style="iconBoxStyle"
          >
            💻
          </div>
          <div class="flex-1">
            <h4 class="text-lg font-bold transition-all duration-500" :style="cardTitleStyle">
              GitHub 主页
            </h4>
            <p class="text-sm opacity-70 transition-all duration-500">查看我在GitHub上的活动</p>
          </div>
          <span class="opacity-50 group-hover:translate-x-1 transition-transform duration-300"
            >→</span
          >
        </a>

        <!-- 卡片 2: 个人网站 -->
        <a
          href="https://marchbeta2087.github.io/"
          target="_blank"
          class="group flex items-center p-6 rounded-2xl shadow-lg hover:-translate-y-1 border transition-all duration-500"
          :style="cardStyle"
        >
          <div
            class="w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4 transition-transform duration-500 group-hover:scale-110"
            :style="iconBoxStyle"
          >
            🌐
          </div>
          <div class="flex-1">
            <!-- 
              👇 修改重点：这里绑定了 cardTitleStyle 
            -->
            <h4 class="text-lg font-bold transition-all duration-500" :style="cardTitleStyle">
              个人网站
            </h4>
            <p class="text-sm opacity-70 transition-all duration-500">我的作品与项目展示</p>
          </div>
          <span class="opacity-50 group-hover:translate-x-1 transition-transform duration-300"
            >→</span
          >
        </a>
        <!-- 卡片 3: GSCU 设定集 -->
<!--
        <a
          href="https://marchbeta2087.github.io/GSCU/"
          target="_blank"
          class="group flex items-center p-6 rounded-2xl shadow-lg hover:-translate-y-1 border transition-all duration-500"
          :style="cardStyle"
        >
          <div
            class="w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4 transition-transform duration-500 group-hover:scale-110"
            :style="iconBoxStyle"
          >
            ⭐
          </div>
          <div class="flex-1">
            <h4 class="text-lg font-bold transition-all duration-500" :style="cardTitleStyle">
              GSCU 设定集
            </h4>
            <p class="text-sm opacity-70 transition-all duration-500">
              全球亚文化俱乐部联盟 — 2040-2060 近未来科幻世界观
            </p>
          </div>
          <span class="opacity-50 group-hover:translate-x-1 transition-transform duration-300"
            >→</span
          >
        </a>
-->
        <!-- 卡片 4: 博客 -->
        <a
          href="https://marchbeta2087.github.io/blogs/"
          target="_blank"
          class="group flex items-center p-6 rounded-2xl shadow-lg hover:-translate-y-1 border transition-all duration-500"
          :style="cardStyle"
        >
          <div
            class="w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4 transition-transform duration-500 group-hover:scale-110"
            :style="iconBoxStyle"
          >
            🍪
          </div>
          <div class="flex-1">
            <h4 class="text-lg font-bold transition-all duration-500" :style="cardTitleStyle">
              MarchBeta2087的星空
            </h4>
            <p class="text-sm opacity-70 transition-all duration-500">
              我的个人博客
            </p>
          </div>
          <span class="opacity-50 group-hover:translate-x-1 transition-transform duration-300"
            >→</span
          >
        </a>
      </div>
    </section>

    <!-- 友链 -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto space-y-4">
        <h3 class="text-3xl font-bold text-center mb-12 transition-all duration-500">
          友链
        </h3>
        <!-- 卡片 1: Pinpe的云端 -->
        <a
          href="https://pinpe.top"
          target="_blank"
          class="group flex items-center p-6 rounded-2xl shadow-lg hover:-translate-y-1 border transition-all duration-500"
          :style="cardStyle"
        >
          <div class="flex-1">
            <h4 class="text-lg font-bold transition-all duration-500" :style="cardTitleStyle">
              Pinpe的云端
            </h4>
            <img src="https://pinpe.top/head.jpg">
          </div>
          <span class="opacity-50 group-hover:translate-x-1 transition-transform duration-300"
            >→</span
          >
        </a>
      </div>
    </section>

    <!-- 页脚 -->
    <footer
      class="py-8 text-center border-t opacity-60 transition-all duration-500"
      :style="{ borderColor: isDark ? '#1e40af' : '#fbcfe8' }"
    >
      <p>&copy; 2026 MarchBeta2087. Built with Vue 3.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const isDark = ref(false)

// ==========================================
// 核心样式逻辑
// ==========================================

// 1. 全局容器
const containerStyle = computed(() => ({
  backgroundColor: isDark.value ? '#0b1120' : '#fce7f3', // 深蓝 vs 粉色
  color: isDark.value ? '#ffffff' : '#000000',
}))

// 2. 导航栏
const navStyle = computed(() => ({
  backgroundColor: isDark.value ? 'rgba(11, 17, 32, 0.85)' : 'rgba(255, 255, 255, 0.7)',
  borderColor: isDark.value ? '#1e3a8a' : '#fbcfe8',
}))

// 3. 按钮
const buttonStyle = computed(() => ({
  backgroundColor: isDark.value ? '#1e3a8a' : '#ffffff',
  color: isDark.value ? '#ffffff' : '#000000',
  borderColor: isDark.value ? '#1e40af' : '#fbcfe8',
}))

// 4. 大标题 & Logo 的渐变样式
const gradientTextStyle = computed(() => ({
  backgroundImage: isDark.value
    ? 'linear-gradient(to right, #60a5fa, #22d3ee)' // 夜间：蓝->青
    : 'linear-gradient(to right, #db2777, #9333ea)', // 日间：粉->紫
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block', // 防止裁切问题
}))

// 5. 【新增】卡片标题的渐变样式
// 稍微调整了颜色，让它比大标题稍微深一点点，更适合阅读，但风格一致
const cardTitleStyle = computed(() => ({
  backgroundImage: isDark.value
    ? 'linear-gradient(to right, #93c5fd, #67e8f9)' // 夜间：浅蓝->浅青
    : 'linear-gradient(to right, #be185d, #7e22ce)', // 日间：深粉->深紫 (保证白底上的可读性)
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
}))

// 6. 标签 (Badge)
const badgeStyle = computed(() => ({
  backgroundColor: isDark.value ? 'rgba(30, 58, 138, 0.5)' : 'rgba(255, 255, 255, 0.6)',
  color: isDark.value ? '#bfdbfe' : '#be185d',
  borderColor: isDark.value ? '#1e3a8a' : '#fbcfe8',
}))

// 7. 卡片背景
const cardStyle = computed(() => ({
  backgroundColor: isDark.value ? 'rgba(30, 58, 138, 0.3)' : 'rgba(255, 255, 255, 0.8)',
  borderColor: isDark.value ? '#1e40af' : '#fbcfe8',
}))

// 8. 图标盒子
const iconBoxStyle = computed(() => ({
  backgroundColor: isDark.value ? '#ffffff' : '#1f2937',
  color: isDark.value ? '#0b1120' : '#ffffff',
}))

// ==========================================
// 功能逻辑
// ==========================================

const toggleDark = () => {
  isDark.value = !isDark.value
}

// 监听变化，同步 body 背景色
watch(isDark, (newVal) => {
  document.body.style.backgroundColor = newVal ? '#0b1120' : '#fce7f3'
  localStorage.setItem('theme', newVal ? 'dark' : 'light')
})

onMounted(() => {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (saved === 'dark' || (!saved && prefersDark)) {
    isDark.value = true
  }

  // 初始化
  document.body.style.backgroundColor = isDark.value ? '#0b1120' : '#fce7f3'
  document.body.style.transition = 'background-color 0.5s ease-in-out'
})
</script>

<style>
/* 全局重置 */
body {
  margin: 0;
  padding: 0;
  font-family: ui-sans-serif, system-ui, sans-serif;
}
</style>
