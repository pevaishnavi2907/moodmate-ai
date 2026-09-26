import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import "./Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register-page">
      <div className="register-orb register-orb-one"></div>
      <div className="register-orb register-orb-two"></div>

      <div className="register-card glass-card">
        <div className="register-brand">
          <div className="brand-icon">M</div>

          <div>
            <strong>MoodMate AI</strong>
            <span>Your mood companion</span>
          </div>
        </div>

        <div className="register-heading">
          <div className="register-badge">
            <Sparkles size={14} />
            Start your journey
          </div>

          <h1>Create your account.</h1>

          <p>
            Build a better relationship with your mood, one day at a time.
          </p>
        </div>

        <form className="register-form">
          <label>
            Full name

            <div className="register-input">
              <UserRound size={18} />

              <input
                type="text"
                placeholder="Your name"
              />
            </div>
          </label>

          <label>
            Email address

            <div className="register-input">
              <Mail size={18} />

              <input
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </label>

          <label>
            Password

            <div className="register-input">
              <LockKeyhole size={18} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </label>

          <label className="terms-option">
            <input type="checkbox" />

            <span>
              I agree to the Terms and Privacy Policy.
            </span>
          </label>

          <button type="submit" className="register-submit">
            Create account
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="register-switch">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;