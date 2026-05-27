import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="page page--centered">
      <h1 className="page-title">MyTypist</h1>
      <p className="page-subtitle">Document Operating System</p>
      <Link to="/studio" className="btn btn--primary" style={{ marginTop: 24 }}>
        Enter Studio
      </Link>
    </div>
  )
}
