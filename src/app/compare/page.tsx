"use client";

import Link from "next/link";
import { useState } from "react";

export default function ComparePage() {
  const [companyA, setCompanyA] =
    useState("");

  const [levelA, setLevelA] =
    useState("");

  const [companyB, setCompanyB] =
    useState("");

  const [levelB, setLevelB] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

  async function compare() {
    const res = await fetch(
      `/api/compare?companyA=${companyA}&companyB=${companyB}&levelA=${levelA}&levelB=${levelB}`
    );

    const data =
      await res.json();

    setResult(data);
  }

  return (
    <div className="container">
      <div className="card">
        <Link
          href="/"
          className="back"
        >
          ← Back Home
        </Link>

        <h1 className="title">
          Compare Companies
        </h1>

        <input
          className="input"
          placeholder="Company A"
          value={companyA}
          onChange={(e) =>
            setCompanyA(
              e.target.value
            )
          }
        />

        <input
          className="input"
          placeholder="Level A (ENTRY, MID, SENIOR)"
          value={levelA}
          onChange={(e) =>
            setLevelA(
              e.target.value
            )
          }
        />

        <input
          className="input"
          placeholder="Company B"
          value={companyB}
          onChange={(e) =>
            setCompanyB(
              e.target.value
            )
          }
        />

        <input
          className="input"
          placeholder="Level B"
          value={levelB}
          onChange={(e) =>
            setLevelB(
              e.target.value
            )
          }
        />

        <button
          className="button"
          onClick={compare}
        >
          Compare
        </button>

        {result && (
          <pre
            style={{
              marginTop: 20,
            }}
          >
            {JSON.stringify(
              result,
              null,
              2
            )}
          </pre>
        )}
      </div>
    </div>
  );
}