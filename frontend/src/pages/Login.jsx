import { Link } from "react-router-dom";
import { ArrowRight, LockKeyhole, Mail, Sparkles } from "lucide-react";
import "./Login.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-orb auth-orb-one"></div>
      <div className="auth-orb auth-orb-two"></div>

      <div className="auth-card glass-card">
        <div className="auth-brand">
          <div className="brand-icon">M</div>
          <div>
            <strong>MoodMate AI</strong>
            <span>Your mood companion</span>
          </div>
        </div>

        <div className="auth-heading">
          <div className="auth-badge">
            <Sparkles size={14} />
            Welcome back
          </div>

          <h1>Good to see you again.</h1>

          <p>
            Sign in to continue your personal mood journey.
          </p>
        </div>

        <form className="auth-form">
          <label>
            Email address
            <div className="auth-input">
              <Mail size={18} />
              <input
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </label>

          <label>
            Password
            <div className="auth-input">
              <LockKeyhole size={18} />
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </label>

          <div className="auth-options">
            <label className="remember-option">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="button" className="forgot-button">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="auth-submit">
            Sign in
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;