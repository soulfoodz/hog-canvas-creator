import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

type View = "login" | "signup" | "forgot";

const Login = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<View>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setResetSent(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col items-center"
      >
        {/* Logo */}
        <img src={logo} alt="LotGraphics" className="w-24 h-24 mb-2 rounded-2xl" />
        <h1 className="font-display text-2xl font-bold mb-1">LotGraphics</h1>
        <p className="text-sm text-muted-foreground mb-8 text-center">
          Auction-ready graphics in seconds
        </p>

        {/* Login */}
        {view === "login" && (
          <motion.form
            key="login"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleLogin}
            className="w-full space-y-4"
          >
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full h-12 text-base font-semibold">
              Log In
            </Button>
            <div className="flex items-center justify-between text-sm">
              <button
                type="button"
                className="text-primary font-medium hover:underline"
                onClick={() => { setView("forgot"); setResetSent(false); }}
              >
                Forgot password?
              </button>
              <button
                type="button"
                className="text-primary font-medium hover:underline"
                onClick={() => setView("signup")}
              >
                Create account
              </button>
            </div>
          </motion.form>
        )}

        {/* Signup */}
        {view === "signup" && (
          <motion.form
            key="signup"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSignup}
            className="w-full space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full h-12 text-base font-semibold">
              Create Account
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary font-medium hover:underline"
                onClick={() => setView("login")}
              >
                Log in
              </button>
            </p>
          </motion.form>
        )}

        {/* Forgot password */}
        {view === "forgot" && (
          <motion.form
            key="forgot"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleForgot}
            className="w-full space-y-4"
          >
            {resetSent ? (
              <div className="text-center space-y-3 py-4">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                  <span className="text-success text-2xl">✓</span>
                </div>
                <p className="font-semibold">Check your email</p>
                <p className="text-sm text-muted-foreground">
                  We've sent a password reset link to your email.
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground text-center">
                  Enter your email and we'll send you a reset link.
                </p>
                <div className="space-y-1.5">
                  <Label htmlFor="forgot-email">Email</Label>
                  <Input
                    id="forgot-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-base font-semibold">
                  Send Reset Link
                </Button>
              </>
            )}
            <p className="text-sm text-center text-muted-foreground">
              <button
                type="button"
                className="text-primary font-medium hover:underline"
                onClick={() => setView("login")}
              >
                Back to login
              </button>
            </p>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
