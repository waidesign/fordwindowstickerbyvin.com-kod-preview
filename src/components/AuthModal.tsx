import React, { useState, useEffect } from 'react';
import { X, Eye, EyeOff, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setSubmitted(false);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#DCE2E9] overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#52606D] hover:text-[#111827] hover:bg-[#F1F4F8] rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF4FB] text-[#003478] flex items-center justify-center mx-auto mb-3 border border-[#DCE2E9]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-heading text-[#111827]">
            {mode === 'login' ? 'Welcome Back to FordSticker' : 'Create Your Account'}
          </h3>
          <p className="text-xs sm:text-sm text-[#52606D] mt-1">
            {mode === 'login'
              ? 'Access your saved window stickers and research history.'
              : 'Sign up to instantly generate and save official Monroney stickers.'}
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#EEF4FB] border border-[#003478]/30 rounded-xl p-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#16834B] text-white flex items-center justify-center mx-auto font-bold">
              ✓
            </div>
            <h4 className="font-bold text-[#111827] text-base">
              {mode === 'login' ? 'Successfully Logged In!' : 'Account Created Successfully!'}
            </h4>
            <p className="text-xs text-[#52606D]">Redirecting to your dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 pr-10 py-2.5 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#7B8794] hover:text-[#111827]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {mode === 'signup' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      className="w-full px-4 pr-10 py-2.5 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#7B8794] hover:text-[#111827]"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCE2E9] focus:outline-none focus:border-[#003478] text-sm text-[#111827]"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#003478] hover:bg-[#00285E] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>{mode === 'login' ? 'Log In to Account' : 'Create Account'}</span>
            </button>

            <div className="text-center pt-2">
              <span className="text-xs text-[#52606D]">
                {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              </span>
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-xs text-[#003478] hover:underline font-bold cursor-pointer"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
