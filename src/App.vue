<template>
  <metainfo></metainfo>
  <div class="sheet" style="display: flex; flex-direction: column">
    <section class="row">
      <aside><h1>Benjamin Pilgrim</h1></aside>
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
            <b><a href="https://www.htk.co.uk/">HTK</a></b> - Software Engineer
          </header>
          <ul style="margin: 0 15px">
            <li style="margin-bottom: 5px">
              Technical owner, designer and lead developer of a distributed
              event-driven customer journey automation platform.
            </li>
            <li style="margin-bottom: 5px">
              Development of services, user interfaces and APIs following a
              3-tier application model for a complex multi-tenant customer data
              platform.
            </li>
            <li style="margin-bottom: 5px">
              Involved in mentoring and skill development for junior developers
              with a focus on code quality through pair programming and code
              reviews.
            </li>
            <li style="margin-bottom: 5px">
              Assisted the operations and quality assurance teams with
              investigating, mitigating and fixing production incidents and bugs
              reported by customers.
            </li>
            <li style="margin-bottom: 5px">
              Designing and developing frontend user interface pages and
              components, including a complex promotion builder with a
              'drag-n-drop' nested rule/segment editor for use by customers.
            </li>
          </ul>
          <ul class="tech-list squares">
            <li style="--color: #e535ab">GraphQL</li>
            <li style="--color: #b07219">Java</li>
            <li style="--color: #f1e05a">JavaScript</li>
            <li style="--color: #80ea6e">Spring</li>
            <li style="--color: #34495e">Vue.js</li>
          </ul>
          <ul class="tech-list">
            <li style="--color: #ff9900">AWS</li>
            <li style="--color: #d24939">Jenkins</li>
            <li style="--color: #f98200">JSF</li>
            <li style="--color: #25a162">JUnit</li>
            <li style="--color: #363d3f">Kafka</li>
            <li style="--color: #ff6804">Maven</li>
            <li style="--color: #13aa52">MongoDB</li>
            <li style="--color: #328fbf">Storm</li>
            <li style="--color: #93b0da">SVN</li>
            <li style="--color: #0067b8">T-SQL</li>
            <li style="--color: #844fba">Terraform</li>
            <li style="--color: #cea328">Tomcat</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>2018 - 2019</aside>
        <main>
          <header>
            <b><a href="https://www.htk.co.uk/">HTK</a></b> - Full Stack Data Engineer</header>
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
        <aside><h2>Projects</h2></aside>
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
    </section>
    <section>
      <div class="row">
        <aside><h2>Education</h2></aside>
      </div>
      <div class="row">
        <aside>2016 - 2019</aside>
        <main>
          <header>
            <b
              ><a href="https://www.liverpool.ac.uk/"
                >University of Liverpool</a
              ></b
            >
            - BSc (Hons) Computer Science (First Class)
          </header>
        </main>
      </div>
      <div class="row">
        <aside>2014 - 2016</aside>
        <main>
          <header>
            <b><a href="https://www.suffolkone.ac.uk/">One Sixth Form</a></b> -
            A Levels: Computing (B), Electronics (A), Mathematics (D)
          </header>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Volunteering</h2></aside>
      </div>
      <div class="row">
        <aside>2018 - 2019</aside>
        <main>
          <header>
            <b>Society Co-President</b> at Liverpool Guild of Students
            (University of Liverpool)
          </header>
        </main>
      </div>
      <div class="row">
        <aside>2017 - 2018</aside>
        <main>
          <header>
            <b>Society Social Secretary</b> at Liverpool Guild of Students
            (University of Liverpool)
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
      title: "Benjamin Pilgrim - Curriculum Vitae",
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
$primary: #3a446e;

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
  background: #3a446e;
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
