import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">
          Compensation Intelligence System
        </h1>

        <p className="subtitle">
          Internship Assignment Dashboard
        </p>

        <div className="grid">
          <Link
            href="/submit"
            className="home-btn"
          >
            Submit Compensation
          </Link>

          <Link
            href="/browse"
            className="home-btn"
          >
            Browse Compensation
          </Link>

          <Link
            href="/compare"
            className="home-btn"
          >
            Compare Companies
          </Link>
        </div>
      </div>
    </div>
  );
}