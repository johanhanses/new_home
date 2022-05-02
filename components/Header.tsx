import Link from 'next/link';
import { useTheme } from 'next-themes';
import Moon from './svg/Moon';
import Sun from './svg/Sun';

interface IHeaderProps {
  siteTitle: string;
}

export const Header = ({ siteTitle }: IHeaderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-transparent flex items-center justify-center font-nunito">
      <div className="max-w-4xl p-4 text-xl">
        <nav className="space-x-4">
          <Link href="/">
            <a className="megahover">{siteTitle}</a>
          </Link>
          {/* <Link href="/blog">
            <a className="megahover">Blog</a>
          </Link> */}
          <Link href="/about">
            <a className="megahover">About</a>
          </Link>
          <a
            href="https://github.com/johanhanses"
            target="_blank"
            rel="noreferrer"
            className="megahover"
          >
            GitHub
          </a>
          <button
            name="Change Theme"
            aria-label="Change Theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:text-yellow-500"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </div>
  );
};
