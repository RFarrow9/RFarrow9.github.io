<template>
  <metainfo></metainfo>
  <!-- Subtle interactive constellation; sits behind the sheet, hidden in print -->
  <backdrop />
  <!-- Screen-only controls; hidden in print / PDF render -->
  <div class="toolbar">
    <button class="tool-btn" type="button" @click="toggleTheme">
      <icon :name="theme === 'dark' ? 'sun' : 'moon'" />
      {{ theme === 'dark' ? 'Light' : 'Dark' }}
    </button>
    <a class="tool-btn" href="./cv.pdf" download="Robert-Farrow-CV.pdf">
      <icon name="file-pdf" /> PDF
    </a>
  </div>
  <div class="sheet" :class="'theme-' + theme" style="display: flex; flex-direction: column">
    <div class="page">
    <section class="row">
      <aside><h1>Robert Farrow</h1></aside>
      <links />
    </section>
    <section>
      <div class="row">
        <aside><h2>Professional Experience</h2></aside>
      </div>
      <div class="row" v-for="role in page1Roles" :key="role.company">
        <aside>
          <div class="aside-content">
          {{ role.period }}
          <div class="tech-list-container">
            <ul class="tech-list squares">
              <li v-for="t in role.tech" :key="t" style="--color: #f7b600" class="tech">{{ t }}</li>
            </ul>
          </div>
         </div>
        </aside>
        <main>
          <header><b> <a :href="role.url">{{ role.company }}</a> </b> - {{ role.title }}</header>
          <ul style="margin: 0 15px">
            <li v-for="(bullet, i) in role.bullets" :key="i"
                :style="{ marginBottom: i === role.bullets.length - 1 ? '15px' : '10px' }"
                v-html="bullet"></li>
          </ul>
        </main>
      </div>
    </section>
    </div>
    <div class="page">
    <section>
      <div class="row" style="min-height: 25px">
        <aside></aside>
      </div>
      <div class="row" v-for="role in page2Roles" :key="role.company">
        <aside>{{ role.period }}</aside>
        <main>
          <header><b> <a :href="role.url">{{ role.company }}</a> </b> - {{ role.title }}</header>
          <ul style="margin: 0 15px">
            <li v-for="(bullet, i) in role.bullets" :key="i"
                style="margin-bottom: 10px" v-html="bullet"></li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside><h2> </h2></aside>
      </div>
      <div class="row">
        <aside><h2>Projects</h2></aside>
      </div>
      <div class="row" v-for="project in projects" :key="project.name">
        <aside>{{ project.name }}</aside>
        <main><p v-html="project.description"></p></main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Education</h2></aside>
      </div>
      <div class="row" v-for="course in education" :key="course.institution">
        <aside>{{ course.period }}</aside>
        <main>
          <header><b><a :href="course.url">{{ course.institution }}</a></b> - {{ course.detail }}</header>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Personal Interests</h2></aside>
      </div>
      <div class="row" v-for="(interest, i) in interests" :key="i">
        <aside></aside>
        <main>
          <header v-html="interest.text"></header>
          <a v-if="interest.image && interest.link" :href="interest.link" target="_blank">
            <img class="interest-media" :src="interest.image" alt="Pension Overboard — the diegetic main menu" />
          </a>
          <img v-else-if="interest.image" class="interest-media" :src="interest.image" alt="Pension Overboard screenshot" />
          <p v-if="interest.caption" class="interest-caption" v-html="interest.caption"></p>
        </main>
      </div>
    </section>
      <section class="expandable">
        <div class="row filler">
          <aside></aside>
          <main></main>
        </div>
      </section>
    </div></div>
</template>
<script>
import { useMeta } from 'vue-meta'
import Links from './components/Links.vue'
import Icon from './components/Icon.vue'
import Backdrop from './components/Backdrop.vue'
import { experience, projects, education, interests } from './data/cv.js'

export default {
  components: { Links, Icon, Backdrop },
  setup() {
    useMeta({ title: 'Robert Farrow - Curriculum Vitae' })
  },
  data() {
    return { experience, projects, education, interests, theme: 'dark' }
  },
  computed: {
    page1Roles() {
      return this.experience.filter((role) => role.page === 1)
    },
    page2Roles() {
      return this.experience.filter((role) => role.page === 2)
    }
  },
  watch: {
    theme(value) {
      document.body.classList.toggle('dark-bg', value === 'dark')
      try {
        localStorage.setItem('cv-theme', value)
      } catch (e) {
        /* localStorage unavailable (e.g. headless PDF render) — ignore */
      }
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
    }
  },
  mounted() {
    try {
      const saved = localStorage.getItem('cv-theme')
      if (saved) this.theme = saved
    } catch (e) {
      /* ignore */
    }
    document.body.classList.toggle('dark-bg', this.theme === 'dark')
    this.$nextTick(() => document.body.dispatchEvent(new Event('view-ready')))
  }
}
</script>
<style lang="scss"> $primary: #d63af2;
@import 'normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import 'paper-css/paper.css';

*, *::after, *::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }

  body {
    margin: 0;
    background: white;
    //zoom: 122.5%;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .sheet {
    width: 210mm; /* A4 width */
    margin: 0 auto; /* Center the sheet horizontally */
    box-sizing: border-box; /* Include padding in the element's total width */

    min-height: 594mm; /* A4 height */
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add a shadow effect */
  }

  .page {
    page-break-inside: avoid;
    height: 297mm;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }
  section {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .expandable {
    //flex-grow: 1;
  }
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}

@page {
  size: A4;
}

@media screen {
  body {
    background: #484349 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }

  .sheet {
    width: 210mm; /* A4 width */
    min-height: 297mm; /* A4 height */
    box-sizing: border-box; /* Include padding in the element's total width */
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add a shadow effect */
    margin: 20px;
  }
}

a, a:hover {
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  font-style: normal;
}

.expandable {
  height: 100%;
  flex-direction: column;
  flex-grow: 1;
}

.filler {
  //flex-grow: 1;
}

aside {
  background: #1a1f71;
  color: #ffffff;
  text-align: right;
  padding-right: 1em;
  position: relative;
  display: flex;
  flex-direction: column;
}

.sheet, section {
  display: flex;
  flex-direction: column;

  > *:last-child {
    flex-grow: 1;
  }
}

.row {
  display: grid;
  grid-template-columns: 27% auto;
}

aside, main {
  padding: 0.7em 1em 0 15px;

  > * {
    padding-bottom: 0.6em;
  }
}

.aside-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1; /* Add this */
}

.tech-list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1em;
  width: 100%; /* Add this to make the tech list fill the available width */

}

.tech-list {
  list-style: none;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center-align the tech list items */
  width: 100%; /* Add this to make the tech list fill the available width */
  flex: 1;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    justify-content: flex-start;
    font-size: 1.1em;
    white-space: nowrap;
    width: 100%;
    position: relative;
    padding-left: 1.8em;
    text-align: left;
  }

  &.squares {
    li::before {
      border-radius: 20%;
    }
  }

  li::before {
    content: " ";
    background-color: var(--color);
    height: 1em;
    width: 1em;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}


h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0.2em 0 0;
}

h1 {
  padding-top: 0.4em;
  padding-bottom: 0.2em;
  line-height: 2.4rem;
  font-size: 2rem;
}
h2 {
   padding-bottom: 10px;
 }

/* ===== Interactive enhancements (screen only; print/PDF stays static) ===== */

.toolbar {
  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  z-index: 20;
}

.tool-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: #1a1f71;
  color: #fff;
  font-family: inherit;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.15s ease, background 0.15s ease;
}

.tool-btn:hover {
  transform: translateY(-1px);
  background: #2b3190;
}

/* Tech chips — hover flourish only */
.tech-list li.tech {
  transition: transform 0.12s ease;
}

.tech-list li.tech:hover {
  transform: translateX(3px);
}

.tech-list li.tech:hover::before {
  box-shadow: 0 0 6px var(--color);
}

/* Screenshot / clip in personal interests */
.interest-caption {
  max-width: 320px;
  margin-top: 6px;
  font-size: 0.9em;
  font-style: italic;
  opacity: 0.75;
}

.interest-media {
  display: block;
  width: 100%;
  max-width: 320px;
  border-radius: 6px;
  margin-top: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

@keyframes sheetIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media screen {
  body.dark-bg {
    background: #0c0c10 !important;
  }

  .sheet {
    animation: sheetIn 1.2s ease both;
  }

  .sheet.theme-dark {
    background: #15151b;
    color: #e8e8ea;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.6);
  }

  .sheet.theme-dark main {
    color: #e8e8ea;
  }

  .sheet.theme-dark main a {
    color: #8fa6ff !important;
  }

  .sheet.theme-dark .tech-list li {
    color: #e8e8ea;
  }
}

@media print {
  .toolbar {
    display: none !important;
  }

  * {
    animation: none !important;
  }
}
</style>
