import { useState } from 'react'

const features = [
  {
    icon: '⚡',
    color: 'purple',
    title: 'Lightning Fast',
    body: 'Built on modern infrastructure to deliver blazing-fast performance from day one.',
  },
  {
    icon: '🔒',
    color: 'blue',
    title: 'Secure by Default',
    body: 'Enterprise-grade security baked in. Your data stays protected at all times.',
  },
  {
    icon: '📱',
    color: 'emerald',
    title: 'Mobile First',
    body: 'Beautiful, responsive design that works flawlessly across every device.',
  },
  {
    icon: '🎯',
    color: 'amber',
    title: 'Precision Tools',
    body: 'Powerful yet intuitive tools designed to help you move faster and ship better.',
  },
  {
    icon: '🤝',
    color: 'rose',
    title: 'Team Ready',
    body: 'Real-time collaboration features that keep your team in sync.',
  },
  {
    icon: '📊',
    color: 'cyan',
    title: 'Analytics',
    body: 'Deep insights into your data with beautiful dashboards and reports.',
  },
]

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <>
      <div className="bg-glow" />

      <nav className="nav">
        <span className="nav-logo">ekta</span>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#waitlist">Waitlist</a></li>
          <li>
            <a href="#waitlist" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>
              Get Started
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Now in development
        </div>

        <h1>
          Build the future<br />with <span>ekta</span>
        </h1>

        <p>
          The all-in-one platform to create, collaborate, and launch your next big idea.
          Join the waitlist to get early access.
        </p>

        <form className="hero-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Join Waitlist →
          </button>
        </form>

        {submitted && (
          <p className="form-success">
            ✓ You're on the list! We'll be in touch soon.
          </p>
        )}

        <div className="hero-stats">
          <div className="hero-stat">
            <h3>1,200+</h3>
            <p>Waitlist signups</p>
          </div>
          <div className="hero-stat">
            <h3>99.9%</h3>
            <p>Uptime guarantee</p>
          </div>
          <div className="hero-stat">
            <h3>15+</h3>
            <p>Integrations</p>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Everything you need</h2>
            <p>Powerful features to help you build and scale your product faster than ever.</p>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className={`feature-icon ${f.color}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="cta">
        <div className="cta-card">
          <h2>Ready to get started?</h2>
          <p>
            We're launching soon. Join thousands of others and be the first to experience ekta.
          </p>
          <form className="hero-form" style={{ margin: '0 auto' }} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Join Waitlist →
            </button>
          </form>
          {submitted && (
            <p className="form-success">
              ✓ You're on the list! We'll be in touch soon.
            </p>
          )}
        </div>
      </section>

      <footer>
        <div className="container">
          &copy; {new Date().getFullYear()} ekta. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
