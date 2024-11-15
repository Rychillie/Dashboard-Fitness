import type { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-bold text-2xl text-black dark:text-white">
      {children}
    </h1>
  );
}
