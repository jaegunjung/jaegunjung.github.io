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
  'Python',
  'SQL',
  'AWS',
  'React',
  'Django',
  'Data Engineering',
  'Analytics',
  'ETL Pipelines',
  'Machine Learning',
  'CI/CD',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Senior Data Engineer</p>
          <h1>Jaegun Jung</h1>
          <p className="lede">
            I build scalable analytics systems, operational tooling, and data
            pipelines focused on reliability, automation, and practical AI
            workflows.
          </p>
          <div className="link-row" aria-label="Primary links">
            <a href="https://github.com/jaegunjung">GitHub</a>
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
            Data engineer with experience in analytics platforms, operations
            tooling, AWS pipelines, manufacturing systems, and scalable data
            infrastructure.
          </p>
          <p>
            Earlier work includes a Django-based personal site with blog,
            publications, work samples, and contact pages, reflecting a broader
            background across Python web applications, data analysis, Linux,
            CI/CD, and scientific computing.
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
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
