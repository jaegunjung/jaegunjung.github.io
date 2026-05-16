function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        lineHeight: "1.6",
      }}
    >
      <header style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Jaegun Jung
        </h1>

        <p style={{ fontSize: "22px", color: "#555" }}>
          Senior Data Engineer
        </p>

        <p>
          I build scalable analytics systems, operational tooling,
          and data pipelines focused on reliability and automation.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="https://github.com/jaegunjung">
            GitHub
          </a>
          {" | "}
          <a href="mailto:jjg0412@gmail.com">
            Email
          </a>
        </div>
      </header>

      <section style={{ marginBottom: "50px" }}>
        <h2>About</h2>

        <p>
          Data engineer with experience in analytics platforms,
          operations tooling, AWS pipelines, manufacturing systems,
          and scalable data infrastructure.
        </p>

        <p>
          Currently focused on AI-enabled workflows,
          machine learning systems, and modern data applications.
        </p>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2>Projects</h2>

        <ul>
          <li>
            <strong>Ops Tooling Platform</strong> —
            Built operational tools and validation workflows
            to reduce pipeline failures and improve reliability.
          </li>

          <li>
            <strong>Crypto Data Analysis</strong> —
            Python-based crypto and stock analytics project.
          </li>

          <li>
            <strong>Django Personal Website</strong> —
            Early personal website project built with Django.
          </li>

          <li>
            <strong>AWS / ML Learning</strong> —
            Exploring scalable ML systems and cloud architectures.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2>Skills</h2>

        <p>
          Python, SQL, AWS, React, Django, Data Engineering,
          Analytics, ETL Pipelines, Machine Learning
        </p>
      </section>

      <section>
        <h2>Links</h2>

        <ul>
          <li>
            <a href="https://github.com/jaegunjung/cda">
              Crypto Data Analysis
            </a>
          </li>

          <li>
            <a href="https://github.com/jaegunjung/jjung_django">
              Old Django Website
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App