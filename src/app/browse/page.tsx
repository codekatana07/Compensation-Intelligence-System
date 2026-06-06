"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BrowsePage() {
  const [rows, setRows] =
    useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(
        "/api/compensations"
      );

      const data =
        await res.json();

      setRows(data.data || []);
    }

    load();
  }, []);

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
          Browse Compensation
        </h1>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Level</th>
              <th>Total Comp</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  {
                    row.company
                      ?.name
                  }
                </td>
                <td>
                  {row.role}
                </td>
                <td>
                  {
                    row.normalizedLevel
                  }
                </td>
                <td>
                  $
                  {Number(
                    row.totalComp
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p
          style={{
            marginTop: 20,
          }}
        >
          Total Entries:
          {rows.length}
        </p>
      </div>
    </div>
  );
}