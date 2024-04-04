<template>
  <metainfo></metainfo>
  <div class="sheet" style="display: flex; flex-direction: column">
    <section class="row">
      <aside><h1>Robert Farrow</h1></aside>
      <links />
    </section>
    <section>
      <div class="row">
        <aside><h2>Professional Experience</h2></aside>
      </div>
      <div class="row">
        <aside>2022 Nov - Present</aside>
        <main>
          <header><b> <a href="https://profusion.com/">Profusion</a> </b> - Head of Engineering</header>
          <ul style="margin: 0 15px">
            <li style="margin-bottom: 10px"> Lead and manage an engineering team, overseeing day-to-day operations and
              responsibilities. Successfully scaled the team from 3 to 12 members, adapting to business changes to
              maintain an optimal team size of 8.
            </li>
            <li style="margin-bottom: 10px"> Oversee budgets for the engineering department, driving the transition from
              a loss-making unit to the leading revenue generator for the business.
            </li>
            <li style="margin-bottom: 10px"> Developed and implemented a <a href="#utilisation-model">utilization
              model</a> to identify and optimize inefficiencies in the project pipeline, enhancing overall productivity.
            </li>
            <li style="margin-bottom: 10px"> Develop strategic plans for the team, aligning technologies, skill
              redundancies, AWS partnership, and goals to drive personal and business growth.
            </li>
            <li style="margin-bottom: 10px"> Foster a culture of continuous learning and improvement, providing
              knowledge frameworks, challenging projects, and leading by example to encourage engineers to reach their
              full potential.
            </li>
            <li style="margin-bottom: 10px"> Communicate effectively across the organization to educate the wider
              company about data engineering and software development, and their future direction.
            </li>
            <li style="margin-bottom: 10px"> Provide expert insights to inform business strategy and roadmap, leveraging
              a deep understanding of the data and software industry.
            </li>
            <li style="margin-bottom: 10px"> Contribute to sales efforts, successfully securing the company's largest
              government project worth over £2 million.
            </li>
            <li style="margin-bottom: 10px"> Lead the migration of legacy projects from a local data center to a modern,
              cloud-native AWS environment.
            </li>
            <li style="margin-bottom: 15px"> Implement Infrastructure as Code (IaC) using Terraform, establishing a
              standardized framework for managing accounts and shared utilities (VPN, VPCs, budgets, etc.).
            </li>
          </ul>
          <ul class="tech-list squares">
            <li style="--color: #80ea6e">AWS</li>
            <li style="--color: #f1e05a">Terraform</li>
            <li style="--color: #e535ab">Python</li>
            <li style="--color: #b07219">Serverless</li>
            <li style="--color: #ff6804">Git</li>
            <li style="--color: #13aa52">TypeScript</li>
            <li style="--color: #13aa52">Go</li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>2019 Aug - 2022 Nov</aside>
        <main>
          <header><b> <a href="https://www.htk.co.uk/">HTK</a> </b> - Full Stack Data Engineer</header>
          <ul style="margin: 0 15px">
            <li style="margin-bottom: 10px"> Developed <a href="#autopilot">Autopilot</a>, a machine learning product
              that ingests horizon data and automatically generates insights, such as churn and anomaly detection.
            </li>
            <li style="margin-bottom: 10px"> Designed and implemented a fully decoupled, well-documented, and
              maintainable architecture.
            </li>
            <li style="margin-bottom: 10px"> Implemented real-time data ingestion at scale using EMR (Elastic Map
              Reduce) and the Spark streaming framework.
            </li>
            <li style="margin-bottom: 10px"> Employed MLOps practices for machine learning model deployment, including
              API integration, automated training workflows, artifact generation, and detection of outdated models.
            </li>
            <li style="margin-bottom: 15px"> Established a CI/CD architecture for immediate failure detection in the
              core codebase, utilizing Jenkins, BlueOcean, and Slack for notification handling.
            </li>
          </ul>
        </main>
      </div>
      <div class="row">
        <aside>2018 Sep - 2019 Aug</aside>
        <main>
          <header><b> <a href="https://www.marsh.com/uk/home.html">Marsh</a> </b> - Data Developer</header>
        </main>
      </div>
      <div class="row">
        <aside>2016 Oct - 2018 Sep</aside>
        <main>
          <header><b> <a href="https://www.nsft.nhs.uk/"> NHS Norfolk & Suffolk Foundation Trust </a> </b> - Business
            Intelligence Programmer
          </header>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Projects</h2></aside>
      </div>
      <div class="row">
        <aside>Project X</aside>
        <main><p> Developed an AI-powered system to perform live queries on a financial database, providing insights
          into not only the data (e.g., profit & loss) but also the underlying reasons behind the figures. </p></main>
      </div>
      <div class="row">
        <aside>AWS Data Platform</aside>
        <main><p> Designed and implemented a scalable AWS data platform that ingests data from 20+ sources and
          constructs a unified semantic layer for use across an entire government department. </p></main>
      </div>
      <div class="row">
        <aside>Perfume Recommender API</aside>
        <main><p> Created an API layer for a series of machine learning models that predict favorite perfumes for a
          large perfume client. </p></main>
      </div>
      <div class="row">
        <aside>Options Trading Bot</aside>
        <main><p> Developed a Go-based trading bot that interacts with the options market and executes trades based on a
          set of predefined indicators. </p></main>
      </div>
      <div class="row">
        <aside>Automotive CRM Data Platform</aside>
        <main><p> Built a secure AWS data platform for a large automotive client to process and analyze data from
          Salesforce and other CRM systems. </p></main>
      </div>
      <div class="row">
        <aside>Project Migration</aside>
        <main><p> Successfully migrated existing projects (PHP, JavaScript, and Python) from a local data center to AWS,
          leveraging native AWS technologies instead of a lift-and-shift approach to EC2. </p></main>
      </div>
      <div class="row">
        <aside>Patient Journey Tool</aside>
        <main><p id="patient-journey-tool"> Developed a cost-effective Patient Journey tool using VBA for Excel, which
          exposed data from a data warehouse to clinicians in an NHS trust. This tool played a crucial role in helping a
          failing trust address critiques regarding data visibility. </p></main>
      </div>
      <div class="row">
        <aside>Autopilot Platform</aside>
        <main><p id="autopilot"> Created the <a href="https://www.htk.co.uk/solutions/real-time-customer-insights/">Autopilot
          platform</a>, a real-time Spark on EMR solution for fully automated machine learning on a bespoke schema
          (horizon system). </p></main>
      </div>
      <div class="row">
        <aside>Custom Terraform Provider</aside>
        <main><p> Developed a custom Terraform provider in Go to support one-click Looker deployments by mapping the
          Looker APIs to Terraform. </p></main>
      </div>
      <div class="row">
        <aside>Home Network</aside>
        <main><p> Designed and implemented a custom home network with features such as dynamic ad removal, Wi-Fi
          meshing, and custom alerting for a battery/solar panel/ASHP setup to reduce costs. </p></main>
      </div>
      <div class="row">
        <aside>Utilization Optimization Model</aside>
        <main><p id="utilisation-model"> Developed a custom model for utilization optimization at Profusion, providing
          full transparency of work pipelines and staff placement, resulting in significant improvements in company-wide
          profits. </p></main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Education</h2></aside>
      </div>
      <div class="row">
        <aside>2012 - 2015</aside>
        <main>
          <header><b><a href="https://www.ucl.ac.uk/">University College London</a></b> - BSc Chemistry</header>
        </main>
      </div>
      <div class="row">
        <aside>2010 - 2012</aside>
        <main>
          <header><b><a href="https://www.hsdc.ac.uk/study-with-us/alton-campus/">Alton College</a></b> - A Levels:
            Mathematics (A), Chemistry (A), Biology (A*)
          </header>
        </main>
      </div>
    </section>
    <section>
      <div class="row">
        <aside><h2>Personal Interests</h2></aside>
      </div>
      <div class="row">
        <aside></aside>
        <main>
          <header> Recently completed the construction of an eco-friendly house at Graven Hill, aiming to build a fully
            self-sufficient home. Gained extensive knowledge of building control processes throughout the project.
          </header>
        </main>
      </div>
      <div class="row">
        <aside></aside>
        <main>
          <header> Avid amateur cyclist with plans to complete the 'North Coast 500' in the upcoming year.</header>
        </main>
      </div>
    </section>
  </div>
</template>
<script> import { useMeta } from 'vue-meta'
import Links from './components/Links.vue'

export default {
  components: { Links }, setup() {
    useMeta({ title: 'Robert Farrow - Curriculum Vitae', bodyAttrs: { class: 'A4' } })
  }, mounted() {
    this.$nextTick(() => document.body.dispatchEvent(new Event('view-ready')))
  }
} </script>
<style lang="scss"> $primary: #d63af2;
@import 'normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import 'paper-css/paper.css';
*, *::after, *::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@page {
  size: A4;
}

body.A4 .sheet {
  height: 2970mm !important;
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

a, a:hover {
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  font-style: normal;
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

aside {
  background: #530080;
  color: #ffffff;
  text-align: right;
  padding-right: 1em;
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
} </style>