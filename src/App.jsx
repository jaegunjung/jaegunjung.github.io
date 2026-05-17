import {
  SiDjango,
  SiGithub,
  SiMysql,
  SiPython,
  SiReact,
  SiSnowflake,
} from 'react-icons/si'
import { BiSolidBarChartAlt2 } from 'react-icons/bi'
import { DiSpark } from 'react-icons/di'
import { FaAws, FaDatabase } from 'react-icons/fa'

const projects = [
  {
    name: 'Crypto Data Analysis',
    href: 'https://github.com/jaegunjung/cda',
    description:
      'Python application for crypto and stock analysis backed by SQL Server workflows and local development tooling.',
  },
  {
    name: 'Django Personal Website',
    href: 'https://github.com/jaegunjung/jjung_django',
    description:
      'Early Django 1.9 personal site with blog, work samples, publications, contact pages, and Azure deployment files.',
  },
  {
    name: 'pyan',
    href: 'https://github.com/jaegunjung/pyan',
    description:
      'Static analysis utility for Python code, adapted from pyan with an option to hide file nodes in graph output.',
  },
  {
    name: 'CAMxtools',
    href: 'https://github.com/jaegunjung/CAMxtools',
    description:
      'Air-quality modeling tools for CAMx and CMAQ data, including combining, metrics, regridding, visibility, and W126 calculations.',
  },
  {
    name: 'leetcode',
    href: 'https://github.com/jaegunjung/leetcode',
    description:
      'Algorithm and data-structure practice repository for interview preparation and problem-solving fluency.',
  },
]

const focusAreas = [
  {
    name: 'Ops Tooling Platform',
    description:
      'Operational tools and validation workflows for reducing pipeline failures and improving reliability.',
  },
  {
    name: 'AWS / ML Learning',
    description:
      'Hands-on exploration of cloud architecture, AI-enabled workflows, and scalable machine-learning systems.',
  },
]

const skills = [
  { name: 'Python', Icon: SiPython },
  { name: 'AWS', Icon: FaAws },
  { name: 'Snowflake', Icon: SiSnowflake },
  { name: 'Spark', Icon: DiSpark },
  { name: 'SQL Server', Icon: FaDatabase },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'Power BI', Icon: BiSolidBarChartAlt2 },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'React', Icon: SiReact },
  { name: 'Django', Icon: SiDjango },
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Staff Data Engineer</p>
          <h1>Jaegun Jung</h1>
          <p className="lede">
            AI-enabled data infrastructure engineer with 15+ years of
            experience building scalable data platforms, operational analytics,
            and production-grade ETL pipelines.
          </p>
          <div className="link-row" aria-label="Primary links">
            <a href="https://github.com/jaegunjung">GitHub</a>
            <a href="/resume.html">View Resume</a>
            <a href="/jaegun-jung-resume-may-2026.docx" download>
              Download Resume
            </a>
            <a href="mailto:jjg0412@gmail.com">Email</a>
            <a href="https://jjg0412.wixsite.com/website">Archive Site</a>
          </div>
        </div>

        <div className="hero-photos" aria-label="Photos of Jaegun Jung">
          <img
            className="portrait"
            src="/jaegun-portrait.jpg"
            alt="Jaegun Jung"
          />
          <img
            className="profile-photo"
            src="/jaegun-profile.jpg"
            alt="Jaegun Jung profile"
          />
        </div>
      </section>

      <section className="section-grid">
        <div>
          <h2>About</h2>
        </div>
        <div className="copy-stack">
          <p>
            Staff-level data engineer with experience across cloud and
            enterprise environments, including Python, SQL, Spark, Snowflake,
            AWS, SQL Server, MySQL, distributed analytics systems, and
            operational dashboards.
          </p>
          <p>
            Recent work includes operational analytics pipelines and dashboards
            using Meta's internal data ecosystem, large-scale manufacturing data
            aggregation at Enovix, Python/Django tooling, and scientific
            post-processing tools used by environmental modeling researchers.
          </p>
        </div>
      </section>

      <section className="section-grid">
        <div>
          <h2>Projects</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className="project-item" href={project.href} key={project.name}>
              <span>{project.name}</span>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div>
          <h2>Current Focus</h2>
        </div>
        <div className="focus-list">
          {focusAreas.map((area) => (
            <article className="focus-item" key={area.name}>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div>
          <h2>Skills</h2>
        </div>
        <div className="skill-list">
          {skills.map(({ name, Icon }) => (
            <span className="skill-pill" key={name}>
              <Icon aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
