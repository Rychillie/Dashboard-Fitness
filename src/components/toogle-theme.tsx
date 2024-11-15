import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ToogleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
        )
      }
      className="rounded flex place-items-center gap-2"
    >
      {theme === 'light' ? (
        <>
          <Moon size={24} />
          <span>Dark</span>
        </>
      ) : theme === 'dark' ? (
        <>
          <Sun size={24} />
          <span>Light</span>
        </>
      ) : (
        <>
          <Laptop size={24} />
          <span>System</span>
        </>
      )}
    </button>
  );
}
