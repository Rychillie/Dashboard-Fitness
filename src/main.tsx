import { ThemeProvider } from 'next-themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components';
import { Home, Progress, Workout } from './screens';
import './styles/tailwind.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <BrowserRouter>
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_768px_1fr] gap-2 sm:gap-4 w-full mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <Sidebar />
          <main className="w-full lg:col-span-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workout" element={<Workout />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
