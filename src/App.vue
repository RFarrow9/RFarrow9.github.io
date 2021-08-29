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
        <aside>2019 - Present</aside>
        <main>
          <header>
            <b><a href="https://www.htk.co.uk/">HTK</a></b> - Full Stack Data Engineer
          </header>
          <ul style="margin: 0 15px">
            <li style="margin-bottom: 10px">
              Technical owner, architect, lead developer and product owner of a distributed
              cloud native delta lake platform for analytics, visualisations and machine
              learning called Autopilot.
            </li>
            <li style="margin-bottom: 10px">
              Development of Dev-Ops processes for supporting the development lifecycle, implementation
              of IAC tooling, and integration of code with CI/CD/CT pipelines. Distribution of these lessons
              and technologies to the wider team for adoption across the company.
            </li>
            <li style="margin-bottom: 10px">
              Initial design and implementation of testing library for Autopilot using Pytests. A focus
              on automated testing, fully documented to reduce bus factors, and pre-planning sprints to
              support upskilling QA and full automation of the code delivery pipeline.
            </li>
            <li style="margin-bottom: 10px">
              Management of developers & testers, sprint planning, proof of concept development and analyses of
              technologies in order to achieve best fit for the companies needs.
            </li>
            <li style="margin-bottom: 10px">
              Evangelist for best practices and adoption of new technologies to shorten development cycles, increase
              reliability and minimise technical debt.
            </li>
            <li style="margin-bottom: 15px">
              Consideration of the 'edges around the code', making sure to use & deploy best practices for deployment,
              monitoring, security, networking & budgetary awareness, alongside consistent and up to date documentation.
            </li>
          </ul>
          <ul class="tech-list squares">
            <li style="--color: #80ea6e">AWS</li>
            <li style="--color: #f1e05a">Terraform</li>
            <li style="--color: #e535ab">Python</li>
            <li style="--color: #b07219">Spark</li>
            <li style="--color: #844fba">ML</li>
            <li style="--color: #34495e">Docker</li>
            <li style="--color: #ff9900">Golang</li>
            <li style="--color: #d24939">T-SQL</li>
            <li style="--color: #f98200">Pandas</li>
            <li style="--color: #25a162">Hadoop</li>
            <li style="--color: #363d3f">Athena</li>
            <li style="--color: #ff6804">Git</li>
            <li style="--color: #13aa52">SVN</li>
            <li style="--color: #328fbf">Glue</li>
            <li style="--color: #93b0da">Jenkins</li>
            <li style="--color: #0067b8">CICDCT</li>
            <li style="--color: #cea328">EMR</li>
            <li style="--color: #328fbf">ECS</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>2018 - 2019</aside>
        <main>
          <header>
            <b><a href="https://www.marsh.com/uk/home.html">Marsh</a></b> - Data Developer</header>
        </main>
      </div>
      <div class="row">
        <aside>2016 - 2018</aside>
        <main>
          <header>
            <b><a href="https://www.nsft.nhs.uk/">NHS Norfolk & Suffolk Foundation Trust</a></b> - Business Intelligence Programmer</header>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Other Projects</h2></aside>
      </div>
      <div class="row">
        <aside>Terraform Looker Provider</aside>
        <main>
          <p>
            Developed a custom terraform provider for Looker by teaching myself Golang in order to automate
            consistent deployment of various Looker resources.
          </p>
          <ul class="tech-list">
            <li style="--color: #ff9900">Golang</li>
            <li style="--color: #f1e05a">Terraform</li>
            <li style="--color: #ff6804">Git</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>
          Solar Prophet
        </aside>
        <main>
          <p>
            Personal home-lab started hosting docker based services. Built to serve media, store backups on network storage
            and to host services for wifi mesh and dynamic ad removal.
          </p>
          <ul class="tech-list" style="grid-template-columns: 89px 1fr ;margin: 0 0px">
            <li style="--color: #34495e">Docker</li>
            <li style="--color: #d24939">Networking</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>Patient Journey</aside>
        <main>
          <p>
            A data exploration tool built in Excel using VBA and integration with SQL Server. Built to address the needs
            of practitioners at the trust, and to grant immediate access to the most up to date data in an easy to consume
            format.
            Built in visualisations for an at a glance 'health check' at any level to and to inform on immediate concerns.
          </p>
          <ul class="tech-list">
            <li style="--color: #af6304">VB</li>
            <li style="--color: #d24939">T-SQL</li>
          </ul>
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
import Links from "./components/Links";

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

@import "~normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import "~paper-css/paper.css";

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
