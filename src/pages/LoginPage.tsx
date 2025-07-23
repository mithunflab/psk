import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col justify-between w-full h-full max-w-xl p-16 space-y-8 overflow-auto">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">Onlook</div>
        </div>
        <div className="space-y-8">
          <div className="space-y-2 uppercase rounded-full p-1 px-2 w-auto inline-block text-xs border text-blue-400 border-blue-400">
            <p>Beta</p>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight">
              Welcome to Onlook
            </h1>
            <p className="text-muted-foreground">
              Onlook is an open-source visual editor for React apps. Design directly in your live product.
            </p>
          </div>
          <LoginForm />
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our{' '}
            <a
              href="https://onlook.com/privacy-policy"
              target="_blank"
              className="text-gray-300 hover:text-gray-50 underline transition-colors duration-200"
            >
              Privacy Policy
            </a>
            {' '}
            and{' '}
            <a
              href="https://onlook.com/terms-of-service"
              target="_blank"
              className="text-gray-300 hover:text-gray-50 underline transition-colors duration-200"
            >
              Terms of Service
            </a>
          </p>
        </div>
        <div className="flex flex-row space-x-1 text-sm text-gray-600">
          <p>Version 1.0.0</p>
        </div>
      </div>
      <div className="hidden w-full lg:block md:block m-6">
        <div
          className="w-full h-full object-cover rounded-xl bg-gradient-to-br from-gray-800 to-gray-900"
          style={{ minHeight: '400px' }}
        />
      </div>
    </div>
  );
};

export default LoginPage;