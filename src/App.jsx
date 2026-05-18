import { useEffect, useMemo, useState } from 'react'
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
import './App.css'

const projects = [
  {
    title: 'CAMxtools',
    tag: 'Scientific computing',
    href: 'https://github.com/jaegunjung/CAMxtools',
    body:
      'Open-source tools for CAMx and CMAQ model performance evaluation, including EPA W126 metrics and workflows for comparing model output with ground observations.',
  },
  {
    title: 'aircraft_MPE',
    tag: 'Atmospheric data',
    href: 'https://github.com/jaegunjung/aircraft_MPE',
    body:
      'Aircraft-based model performance evaluation for three-dimensional ozone measurements, extending analysis beyond surface monitoring data.',
  },
  {
    title: 'Crypto Data Analysis',
    tag: 'Analytics',
    href: 'https://github.com/jaegunjung/cda',
    body:
      'Python-based crypto and stock analytics project focused on repeatable data ingestion, transformation, and quantitative exploration.',
  },
  {
    title: 'Django Personal Website',
    tag: 'Web application',
    href: 'https://github.com/jaegunjung/jjung_django',
    body:
      'Early Django personal site with blog, work samples, publications, contact pages, and Azure deployment files.',
  },
  {
    title: 'pyan',
    tag: 'Python tooling',
    href: 'https://github.com/jaegunjung/pyan',
    body:
      'Static analysis utility for Python code, adapted from pyan with an option to hide file nodes in graph output.',
  },
  {
    title: 'leetcode',
    tag: 'Practice',
    href: 'https://github.com/jaegunjung/leetcode',
    body:
      'Algorithm and data-structure practice repository for interview preparation and problem-solving fluency.',
  },
]

const stories = {
  'cmu-ramboll': {
    eyebrow: 'CMU to Ramboll',
    title: 'From Atmospheric Modeling to Reusable Scientific Computing',
    summary:
      'My engineering path started in atmospheric simulation, where modeling only mattered when it could be compared clearly with measurements.',
    sections: [
      {
        heading: 'Problem',
        body:
          'During my Ph.D. work at CMU and later at Ramboll, I worked with CAMx and measurement data to evaluate whether atmospheric models represented observed ozone and related air-quality patterns. The work required repeatable model performance evaluation, not one-off analysis.',
      },
      {
        heading: 'System Built',
        body:
          'I released CAMxtools to automate ground-observation MPE for CAMx and CMAQ, including calculations such as W126 that are tedious and error-prone by hand. The tool helped internal workflows and external researchers, earning 18 GitHub stars and a Starstruck badge.',
        links: [{ label: 'CAMxtools', href: 'https://github.com/jaegunjung/CAMxtools' }],
      },
      {
        heading: 'Extension',
        body:
          'aircraft_MPE extended the same idea into aircraft-based ozone measurements, enabling performance evaluation with three-dimensional measurement data instead of only surface monitors.',
        links: [{ label: 'aircraft_MPE', href: 'https://github.com/jaegunjung/aircraft_MPE' }],
      },
    ],
  },
  cisco: {
    eyebrow: 'Cisco',
    title: 'Learning Production Software Discipline Through Disaster Recovery Tooling',
    summary:
      'At Cisco, I moved from scientific computing into enterprise web application development and learned how software quality systems protect production operations.',
    sections: [
      {
        heading: 'Problem',
        body:
          'Disaster recovery workflows needed to promote DR servers, allocate resources, and reduce manual steps during incidents. The work had to be fast, testable, and reliable under operational pressure.',
      },
      {
        heading: 'System Built',
        body:
          'I contributed to a web application using Python Django on the backend and JavaScript and jQuery on the frontend. The tool reduced recovery operations to controlled application workflows instead of manual server-by-server actions.',
        links: [{ label: 'Django Personal Website', href: 'https://github.com/jaegunjung/jjung_django' }],
      },
      {
        heading: 'What Changed',
        body:
          'The Cisco environment exposed me to Docker-based cloud transition, automated code quality checks, security testing, unit tests, coverage gates, and release discipline through CI configuration.',
      },
    ],
  },
  enovix: {
    eyebrow: 'Enovix',
    title: 'Replacing Fragile Battery Data Pipelines With Reliable Data Infrastructure',
    summary:
      'At a battery startup, I brought software engineering practices into a high-pressure manufacturing data environment.',
    sections: [
      {
        heading: 'Problem',
        body:
          'Roughly 500 battery test channels generated data every second. Corrupt files, physically impossible values, and mixed input formats could jam the pipeline, forcing manual weekend investigation while engineers waited for results.',
      },
      {
        heading: 'System Built',
        body:
          'I replaced legacy task-scheduler workflows with a more observable process, separated raw ingestion from summarization, preserved binary, CSV, and Excel inputs in SQL Server, and moved cycle-level and lot-level summaries into SQL-based aggregation.',
      },
      {
        heading: 'Operating Model',
        body:
          'I also introduced practices learned at Cisco, including version control, Jira-based project management, and web application workflows. The Web Uploader, built with Django, Vue, MySQL, and SQL Server integration, replaced Excel macro-driven uploads.',
      },
    ],
  },
  meta: {
    eyebrow: 'Meta',
    title: 'Reducing Operational Friction Through Scalable Data Tooling',
    summary:
      'My current focus is turning recurring operational pain into reliable validation, automation, and collaboration systems.',
    sections: [
      {
        heading: 'Pattern',
        body:
          'Across operations work, the same failure mode appears repeatedly: teams depend on flexible spreadsheets or manual review, then downstream systems inherit inconsistent inputs and hidden coordination cost.',
      },
      {
        heading: 'Approach',
        body:
          'I frame tools around upstream validation, clear ownership, asynchronous review, and lower maintenance burden. The goal is not only to automate tasks, but to make the correct workflow easier than the ad hoc one.',
      },
      {
        heading: 'Positioning',
        body:
          'The through-line is operational complexity. I solve it with scalable systems, practical data infrastructure, and AI-enabled workflows that make teams faster without making systems harder to maintain.',
      },
    ],
  },
  'ops-tooling': {
    eyebrow: 'Current Focus',
    title: 'Ops Tooling Platform',
    summary:
      'Operational tools should reduce ambiguity before data reaches the pipeline, not merely report failures afterward.',
    sections: [
      {
        heading: 'Story',
        body:
          'The best tooling work starts with the pain points operators already feel: repeated data checks, late corrections, spreadsheet drift, unclear ownership, and time lost explaining context across teams.',
      },
      {
        heading: 'Design Direction',
        body:
          'I focus on validation-first workflows, structured inputs, reviewable state changes, auditability, and interfaces that match how operations teams actually coordinate work.',
      },
    ],
  },
  'ml-learning': {
    eyebrow: 'Current Focus',
    title: 'AWS and ML Learning',
    summary:
      'My ML work is tied to data infrastructure: reliable inputs, understandable outputs, and production workflows.',
    sections: [
      {
        heading: 'Direction',
        body:
          'I am building from cloud fundamentals into machine learning systems where data quality, repeatable pipelines, and observability matter as much as model selection.',
      },
      {
        heading: 'Certifications',
        body:
          'AWS Certified Data Engineer - Associate issued Oct 2024, AWS Certified Solutions Architect - Associate issued Mar 2025, Snowflake SnowPro Core issued Mar 2024, and Coursera Machine Learning issued Oct 2019.',
      },
    ],
  },
}

const journey = [
  ['cmu-ramboll', 'CMU / Ramboll', 'Scientific modeling, CAMx, CMAQ, MPE, W126, open-source tooling.'],
  ['cisco', 'Cisco', 'Django web apps, DR tooling, Docker, CI, tests, coverage, release quality.'],
  ['enovix', 'Enovix', 'Battery data infrastructure, raw ingestion, SQL summaries, Web Uploader.'],
  ['meta', 'Meta', 'Operational data tooling, validation workflows, AI-enabled systems.'],
]

const skills = [
  ['Python', SiPython],
  ['AWS', FaAws],
  ['Snowflake', SiSnowflake],
  ['Spark', DiSpark],
  ['SQL Server', FaDatabase],
  ['MySQL', SiMysql],
  ['Power BI', BiSolidBarChartAlt2],
  ['GitHub', SiGithub],
  ['React', SiReact],
  ['Django', SiDjango],
]

const certificates = [
  {
    name: 'AWS Certified Data Engineer - Associate',
    issued: 'Oct 2024',
    expires: 'Oct 2027',
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issued: 'Mar 2025',
    expires: 'Mar 2028',
  },
  {
    name: 'Snowflake SnowPro Core',
    issued: 'Mar 2024',
    expires: 'Feb 2028',
  },
  {
    name: 'Coursera Machine Learning',
    issued: 'Oct 2019',
    expires: 'No expiration',
  },
]

const resume = {
  headline: 'Staff Data Engineer | AI-Enabled Data Infrastructure',
  contact: ['Castro Valley, CA', 'jjg0412@gmail.com', 'linkedin.com/in/jgjung', 'github.com/jaegunjung'],
  summary:
    'Staff-level Data Engineer with 15+ years of experience designing scalable data platforms, operational analytics systems, and production-grade ETL pipelines across cloud and enterprise environments.',
  skills: [
    'Python',
    'SQL',
    'Spark',
    'Snowflake',
    'AWS',
    'ETL orchestration',
    'Data modeling',
    'Distributed analytics systems',
    'Operational analytics',
    'Power BI',
  ],
  work: [
    {
      role: 'Senior Data Engineer',
      org: 'EOS IT Solutions',
      dates: 'Apr 2024 - Current',
      location: 'Burlingame, CA',
      bullets: [
        'Designed and maintained scalable operational analytics pipelines and dashboards using Meta internal data systems including Presto, Hive, and Scuba.',
        'Automated ingestion and validation workflows integrating Google Sheets, scheduled jobs, and internal tooling, reducing manual intervention and pipeline failures by 50% or more.',
        'Accelerated delivery in unfamiliar Hack and React environments through AI-assisted engineering workflows and rapid prototyping.',
      ],
    },
    {
      role: 'Senior Principal Data Engineer',
      org: 'Enovix Corporation',
      dates: 'Dec 2018 - Jan 2024',
      location: 'Fremont, CA',
      bullets: [
        'Led architecture and development of a Data Aggregation Engine using Python and SQL Server for battery test data analysis.',
        'Redesigned legacy data workflows and automated validation processes to improve downstream analytics reliability.',
        'Built production ETL processes supporting KPI reporting, manufacturing analytics, and business intelligence initiatives.',
      ],
    },
    {
      role: 'Technical Lead',
      org: 'Cisco from Infosys',
      dates: 'Mar 2018 - Nov 2018',
      location: 'San Jose, CA',
      bullets: [
        'Developed internal tooling and web interfaces in Python Django to improve analytics visibility, workflow efficiency, and operational management.',
      ],
    },
    {
      role: 'Senior Consultant',
      org: 'Ramboll',
      dates: 'Oct 2008 - Mar 2018',
      location: 'Novato, CA',
      bullets: [
        'Engineered Python scripts and reusable analytical tooling for large-scale environmental model result analysis.',
        'Released CAMxtools on GitHub to improve reproducibility and post-processing efficiency for environmental modeling researchers.',
        'Implemented data population strategies in MySQL using efficient scripting for storage and retrieval workflows.',
      ],
    },
  ],
  education: [
    'Ph.D., Chemical Engineering, Carnegie Mellon University, Aug 2003 - May 2008',
    'B.S., Chemical Engineering, Hanyang University, Seoul, Korea, Mar 1996 - Feb 2003',
  ],
  certificates,
}

function getHashRoute() {
  return window.location.hash.replace(/^#\/?/, '')
}

function App() {
  const [route, setRoute] = useState(getHashRoute)
  const [expandedJourney, setExpandedJourney] = useState(null)

  useEffect(() => {
    const updateRoute = () => setRoute(getHashRoute())
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  const story = useMemo(() => {
    if (!route.startsWith('stories/')) return null
    return stories[route.replace('stories/', '')]
  }, [route])

  if (route === 'resume') {
    return <ResumePage />
  }

  if (story) {
    return <StoryPage story={story} />
  }

  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#projects">Projects</a>
        <a href="#/resume">Resume</a>
        <a href="https://github.com/jaegunjung">GitHub</a>
      </nav>

      <header className="hero-panel">
        <div className="hero-intro">
          <p className="eyebrow">AI-enabled data infrastructure engineer</p>
          <h1 className="hero-title">Jaegun Jung</h1>
          <p className="hero-copy">
            I solve operational complexity with scalable data systems, scientific
            computing discipline, and practical automation.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#journey">Career story</a>
            <a className="button" href="#projects">Selected projects</a>
            <a className="button" href="/jaegun-jung-resume-may-2026.docx" download>
              Download resume
            </a>
          </div>
        </div>
        <aside className="hero-media" aria-label="Photos and certifications">
          <div className="hero-photos">
            <img className="portrait" src="/jaegun-portrait.jpg" alt="Jaegun Jung" />
          </div>
          <div className="cert-panel" aria-label="Certifications">
            {certificates.map((certificate) => (
              <div className="cert-item" key={certificate.name}>
                <span>{certificate.name}</span>
                <strong>
                  Issued {certificate.issued} | Expires {certificate.expires}
                </strong>
              </div>
            ))}
          </div>
        </aside>
      </header>

      <section id="about" className="section-block">
        <p className="eyebrow">About</p>
        <h2>From atmospheric simulation to production data platforms</h2>
        <p>
          My career connects chemical engineering, scientific modeling, web
          applications, cloud transition, manufacturing data systems, and
          operational data tooling. The common thread is building systems that
          make complex work repeatable, observable, and easier for teams to run.
        </p>
      </section>

      <section id="journey" className="section-block">
        <p className="eyebrow">Career Journey</p>
        <h2>Problem, system, impact</h2>
        <div className="timeline">
          {journey.map(([slug, title, body]) => (
            <article className="timeline-entry" key={slug}>
              <button
                className="timeline-item"
                type="button"
                aria-expanded={expandedJourney === slug}
                onClick={() => setExpandedJourney(expandedJourney === slug ? null : slug)}
              >
                <span>{title}</span>
                <p>{body}</p>
              </button>
              {expandedJourney === slug && (
                <div className="inline-story">
                  <p>{stories[slug].summary}</p>
                  {stories[slug].sections.map((section) => (
                    <section key={section.heading}>
                      <h3>{section.heading}</h3>
                      <p>{section.body}</p>
                      {section.links && (
                        <div className="inline-links">
                          {section.links.map((link) => (
                            <a href={link.href} key={link.href}>
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <p className="eyebrow">Current Focus</p>
        <h2>Scalable tooling for operational workflows</h2>
        <div className="focus-grid">
          <a href="#/stories/ops-tooling">
            <strong>Ops Tooling Platform</strong>
            <p>Validation-first workflows for reducing maintenance and manual coordination.</p>
          </a>
          <a href="#/stories/ml-learning">
            <strong>AWS / ML Learning</strong>
            <p>Cloud and ML systems grounded in reliable data infrastructure.</p>
          </a>
        </div>
      </section>

      <section id="projects" className="section-block">
        <p className="eyebrow">Selected Projects</p>
        <h2>Open-source and applied systems</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.href} key={project.title}>
              <span>{project.tag}</span>
              <strong>{project.title}</strong>
              <p>{project.body}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block">
        <p className="eyebrow">Skills</p>
        <h2>Tools I use to connect data, software, and operations</h2>
        <div className="skill-grid">
          {skills.map(([label, Icon]) => (
            <span className="skill-pill" key={label}>
              <Icon aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </section>

      <section id="resume" className="section-block resume-block">
        <p className="eyebrow">Resume</p>
        <h2>Resume page</h2>
        <p>
          A dedicated web resume is available with the May 2026 summary, work
          history, education, certifications, and AI workflow focus.
        </p>
        <a className="button primary" href="#/resume">Open resume</a>
      </section>
    </main>
  )
}

function StoryPage({ story }) {
  return (
    <main className="site-shell story-shell">
      <a className="back-link" href="#">Back to portfolio</a>
      <article className="story-article">
        <p className="eyebrow">{story.eyebrow}</p>
        <h1>{story.title}</h1>
        <p className="story-summary">{story.summary}</p>
        {story.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>
    </main>
  )
}

function ResumePage() {
  return (
    <main className="site-shell story-shell">
      <a className="back-link" href="#">Back to portfolio</a>
      <article className="resume-page">
        <header className="resume-header">
          <img className="resume-photo" src="/jaegun-profile.jpg" alt="Jaegun Jung profile" />
          <div>
            <p className="eyebrow">Resume</p>
            <h1>Jaegun Jung</h1>
            <p className="story-summary">{resume.headline}</p>
          </div>
        </header>
        <div className="contact-row">
          {resume.contact.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <section>
          <h2>Summary</h2>
          <p>{resume.summary}</p>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="compact-list">
            {resume.skills.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section>
          <h2>Work History</h2>
          {resume.work.map((job) => (
            <div className="resume-job" key={`${job.org}-${job.dates}`}>
              <div>
                <strong>{job.role}</strong>
                <span>{job.org} | {job.location} | {job.dates}</span>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          <ul>
            {resume.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Certifications</h2>
          <ul>
            {resume.certificates.map((certificate) => (
              <li key={certificate.name}>
                {certificate.name}, issued {certificate.issued}, expires {certificate.expires}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  )
}

export default App
