'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string>('');

  const handleClick = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Next.js
        </h1>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Say Hello
        </button>
        {message && (
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            {message}
          </p>
        )}
      </main>
    </div>
  );
}
