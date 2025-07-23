import React, { useState } from 'react';

export const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubLogin = () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-x-2 flex flex-row gap-2">
      <button
        onClick={handleGithubLogin}
        disabled={isLoading}
        className="flex-1 items-center justify-center text-sm border border-border bg-background hover:bg-accent hover:text-accent-foreground p-3 rounded flex gap-2 disabled:opacity-50"
      >
        {isLoading ? (
          <span className="w-4 h-4 animate-spin">⟳</span>
        ) : (
          <span className="w-4 h-4">⚡</span>
        )}
        Continue with GitHub
      </button>
      <button
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className="flex-1 items-center justify-center text-sm border border-border bg-background hover:bg-accent hover:text-accent-foreground p-3 rounded flex gap-2 disabled:opacity-50"
      >
        {isLoading ? (
          <span className="w-4 h-4 animate-spin">⟳</span>
        ) : (
          <span className="w-4 h-4">G</span>
        )}
        Continue with Google
      </button>
    </div>
  );
};