import Link from "next/link";

export default function ResultsSummaryLayout({ children }) {
  return (
    <html lang="en">
      <body className="results-summary-body">
        <header>
          <Link href="/" className="back">
            ← Back
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
