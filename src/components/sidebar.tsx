import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Title, ToogleTheme } from './';

type NavLinkProps = {
  children: ReactNode;
  url: string;
};

function NavLink({ children, url }: NavLinkProps) {
  const isActive = useLocation().pathname === url;

  return (
    <Link
      to={url}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
      className="px-3 lg:-mx-3 text-center lg:text-left py-1 rounded font-medium relative z-20"
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 -z-10 bg-neutral-50 dark:bg-neutral-950 mix-blend-difference rounded"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}

const tabs = [
  { id: 'workout', name: 'Workout' },
  { id: 'progress', name: 'Progress' },
];

export default function Sidebar() {
  return (
    <nav className="w-full grid grid-cols-2 lg:flex lg:flex-col gap-10 mb-6 sm:mb-0">
      <Title>
        <Link to="/">Fit Dash</Link>
      </Title>

      <div className="grid grid-cols-2 col-span-2 lg:grid-cols-1 gap-1">
        {tabs.map((tab) => (
          <NavLink key={tab.id} url={`/${tab.id}`}>
            {tab.name}
          </NavLink>
        ))}
      </div>

      <div className="flex lg:mt-10 col-start-2 row-start-1 lg:col-start-1 lg:row-start-3 justify-end lg:justify-start">
        <ToogleTheme />
      </div>
    </nav>
  );
}
