<template>
  <metainfo></metainfo>
  <div class="sheet" style="display: flex; flex-direction: column">
    <section class="row">
      <aside><h1>Robert Farrow</h1></aside>
      <links />
    </section>
    <section>
      <div class="row">
        <aside><h2>Employment</h2></aside>
      </div>
      <div class="row">
        <aside>2022 Nov - Present</aside>
        <main>
          <header>
            <b><a href="https://profusion.com/">Profusion</a></b> - Head of Engineering
          </header>
          <ul style="margin: 0 15px">
            <li style="margin-bottom: 10px">
                Line management of the engineering team at Profusion, helping people grow & learn, building culture & interfacing the engineering into the entire company.
            </li>
            <li style="margin-bottom: 10px">
                Responsible for successful delivery of data projects across a number of clients, from datalakes, to bespoke machine learning products, to web applications.
            </li>
            <li style="margin-bottom: 10px">
                Engineering Process adoption and building, software development plans, pull requests, branching strategy, unit testing & poker planning.
            </li>
            <li style="margin-bottom: 10px">
              Architecture across AWS, GCP & Azure based on customer requirements. Phased delivery plan building, jira epic and ticket design.
            </li>
            <li style="margin-bottom: 10px">
              Articles & blogging for communicating technical issues, internal sessions and talks to upskill the entire company in the latest and greatest. Hosting of our data for leaders program. Pitching technical solutions for new sales.
            </li>
            <li style="margin-bottom: 15px">
              Ensuring documentation is in place for all internal & external projects, networking across multiple cloud estates, budgetary alignment and management of projects and departmentally, maximising utilisation and resource management.
            </li>
          </ul>
          <ul class="tech-list squares">
            <li style="--color: #80ea6e">AWS</li>
            <li style="--color: #f1e05a">Terraform</li>
            <li style="--color: #e535ab">Python</li>
            <li style="--color: #b07219">Serverless</li>
            <li style="--color: #ff6804">Git</li>
            <li style="--color: #13aa52">Typescript</li>
            <li style="--color: #13aa52">golang</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>2019 Aug - 2022 Nov</aside>
        <main>
          <header>
            <b><a href="https://www.htk.co.uk/">HTK</a></b> - Full Stack Data Engineer</header>
        </main>
      </div>
      <div class="row">
        <aside>2018 Sep - 2019 Aug</aside>
        <main>
          <header>
            <b><a href="https://www.marsh.com/uk/home.html">Marsh</a></b> - Data Developer</header>
        </main>
      </div>
      <div class="row">
        <aside>2016 Oct - 2018 Sep</aside>
        <main>
          <header>
            <b><a href="https://www.nsft.nhs.uk/">NHS Norfolk & Suffolk Foundation Trust</a></b> - Business Intelligence Programmer</header>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Projects</h2></aside>
      </div>
      <div class="row">
        <aside>Terraform Looker Provider</aside>
        <main>
          <p>
            Developed a custom terraform provider for Looker by teaching myself Golang in order to automate
            consistent deployment of various Looker resources.
          </p>
        </main>
      </div>
      <div class="row">
        <aside>Patient Journey</aside>
        <main>
          <p>
            A data exploration tool built in Excel using VBA and integration with SQL Server. Built to address the needs
            of practitioners at NHS trusts, and to grant immediate access to the most up to date data in an easy to consume
            format.
            Built in visualisations for an at a glance 'health check' at any level to and to inform on immediate concerns.
          </p>
          <ul class="tech-list">
            <li style="--color: #af6304">VB</li>
            <li style="--color: #d24939">T-SQL</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>Interest in Javascript and Web Technologies</aside>
        <main>
          <p>
            I have a keen interest in learning and expanding my understanding of web technologies. This CV is created with the 
            node and vue frameworks with CI/CD integration as an example. I have been working on expanding this knowledge in my spare time
            through courses and projects.

            Big fan of the bun runtime, and Typescript > Javascript (don't shoot me).
          </p>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Education</h2></aside>
      </div>
      <div class="row">
        <aside>2012 - 2015</aside>
        <main>
          <header>
            <b><a href="https://www.ucl.ac.uk/">University College London</a></b> - BSc Chemistry
          </header>
        </main>
      </div>
      <div class="row">
        <aside>2010 - 2012</aside>
        <main>
          <header>
            <b><a href="https://www.hsdc.ac.uk/study-with-us/alton-campus/">Alton College</a></b>
             - A Levels: Maths (A), Chemistry (A), Biology (A*)
          </header>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Other</h2></aside>
      </div>
      <div class="row">
        <aside></aside>
        <main>
          <header>
            Recently finished building an eco house at Graven Hill. Aimed to build a house as fully self sufficient
            as possible, very glad to be done! I now know far too much about building control processes.
          </header>
        </main>
      </div>
      <div class="row">
        <aside></aside>
        <main>
          <header>
            Amateur cyclist, <b>hoping</b> to complete the 'North Coast 500' next year.
          </header>
        </main>
      </div>

    </section>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import Links from "./components/Links.vue";

export default {
  components: { Links },
  setup() {
    useMeta({
      title: "Robert Farrow - Curriculum Vitae",
      bodyAttrs: {
        class: "A4",
      },
    });
  },
  mounted() {
    this.$nextTick(() => document.body.dispatchEvent(new Event("view-ready")));
  },
};
</script>

<style lang="scss">
$primary: #d63af2;

@import 'normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import 'paper-css/paper.css';

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@page {
  size: A4;
}

body.A4 .sheet {
  height: 297mm !important;
}

body {
  @media print {
    zoom: 122.5%;
    background: white;
  }
  @media screen {
    background: #484349 !important;
  }
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}

a,
a:hover {
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  font-style: normal;
}

.sheet,
section {
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

aside,
main {
  padding: 0.7em 1em 0 15px;

  > * {
    padding-bottom: 0.6em;
  }
}

aside {
  background: #530080;
  color: #ffffff;
  text-align: right;
  padding-right: 1em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
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

.tech-list {
  display: grid;
  list-style: none;
  grid-gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-flow: dense;

  li {
    flex-shrink: 0;
  }

  &.squares {
    padding-bottom: 10px;

    li::before {
      border-radius: 20%;
    }
  }

  li::before {
    display: block;
    content: " ";
    background-color: var(--color);
    height: 0.9em;
    width: 0.9em;
    border-radius: 100%;
    margin: 0.1em 0.5em 0.1em 0.1em;
    float: left;
  }
}
</style>
