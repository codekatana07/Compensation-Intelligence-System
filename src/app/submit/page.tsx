"use client";

import Link from "next/link";
import { useState } from "react";

export default function SubmitPage() {
  const [loading, setLoading] = useState(false);

  const [response, setResponse] =
    useState<any>(null);

  const [form, setForm] = useState({
    company: "",
    role: "",
    level: "",
    country: "US",
    currency: "USD",
    workMode: "ONSITE",
    baseSalary: "",
    bonus: "",
    stockAnnual: "",
  });

  async function handleSubmit() {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/compensations",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            company: form.company,
            role: form.role,
            level: form.level,
            country: form.country,
            currency: form.currency,
            workMode: form.workMode,
            baseSalary:
              Number(form.baseSalary),
            bonus:
              Number(form.bonus),
            stockAnnual:
              Number(
                form.stockAnnual
              ),
          }),
        }
      );

      const data =
        await res.json();

      setResponse(data);

      if (res.ok) {
        alert(
          "Compensation submitted successfully!"
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
          Submit Compensation
        </h1>

        {[
          "company",
          "role",
          "level",
          "country",
          "currency",
          "workMode",
          "baseSalary",
          "bonus",
          "stockAnnual",
        ].map((field) => (
          <input
            key={field}
            className="input"
            placeholder={field}
            value={
              form[
                field as keyof typeof form
              ]
            }
            onChange={(e) =>
              setForm({
                ...form,
                [field]:
                  e.target.value,
              })
            }
          />
        ))}

        <button
          className="button"
          onClick={handleSubmit}
        >
          {loading
            ? "Submitting..."
            : "Submit"}
        </button>

        {response && (
          <pre
            style={{
              marginTop: 20,
            }}
          >
            {JSON.stringify(
              response,
              null,
              2
            )}
          </pre>
        )}
      </div>
    </div>
  );
}