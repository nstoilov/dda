import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <h1>
            <span>This is a</span>
            <span>Donald Duck</span>
          </h1>
          <h2>appreciation site</h2>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Disney Corp O</p>
      </footer>
    </div>
  );
}
