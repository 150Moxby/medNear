const stats = [
  { label: 'Active projects', value: '12', accent: 'blue' },
  { label: 'Agents online', value: '8', accent: 'green' },
  { label: 'Build health', value: '94%', accent: 'violet' },
  { label: 'Security alerts', value: '3', accent: 'amber' }
];

const projects = [
  { name: 'Moxora Core', status: 'Healthy', type: 'Workspace' },
  { name: 'Language Forge', status: 'Review', type: 'Compiler' },
  { name: 'AI Team', status: 'Running', type: 'Agent group' },
  { name: 'Cloud Deploy', status: 'Queued', type: 'Infrastructure' }
];

const activity = [
  'Authentication shell prepared for MFA and RBAC upgrades.',
  'Project creation flow documented for Phase 1 implementation.',
  'Execution sandbox boundary requirement added to security model.',
  'Monorepo foundation and workspace structure initialized.'
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">M</div>
          <div>
            <div className="brand-name">MOXORA</div>
            <div className="brand-tag">Build Beyond Limits</div>
          </div>
        </div>

        <nav className="nav-section">
          <div className="nav-title">Workspace</div>
          {['Home', 'Projects', 'Explorer', 'Code Editor', 'DesignSpace', 'AI Brain', 'Compiler Center', 'Security Center', 'Cloud', 'Settings'].map((item) => (
            <button key={item} className={`nav-item ${item === 'Home' ? 'active' : ''}`}>
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow">MOXORA Core V0.1</div>
            <h1>Engineering dashboard</h1>
          </div>
          <button className="primary-action">New project</button>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className={`stat-card ${stat.accent}`}>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Projects</h2>
              <span>4 active</span>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <div key={project.name} className="project-item">
                  <div>
                    <div className="project-name">{project.name}</div>
                    <div className="project-type">{project.type}</div>
                  </div>
                  <span className={`status-pill ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Recent activity</h2>
              <span>Live</span>
            </div>
            <ul className="activity-list">
              {activity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
