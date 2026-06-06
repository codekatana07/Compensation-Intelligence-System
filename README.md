# Compensation Intelligence System

A backend-driven platform for collecting, normalizing, aggregating, and comparing compensation data across companies.

---

## Overview

The Compensation Intelligence System allows users to submit compensation information and analyze salary trends across companies through normalized, validated, and aggregated data.

The system automatically:

- Validates incoming submissions
- Normalizes company and role names
- Detects duplicate entries
- Aggregates compensation statistics
- Compares compensation across companies
- Provides filtering and analytics APIs

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod

---

## Features

### Compensation Submission

Submit compensation records including:

- Company
- Role
- Level
- Base Salary
- Bonus
- Annual Stock Compensation

### Validation

All incoming data is validated using Zod schemas.

### Duplicate Detection

Prevents identical compensation records from being inserted multiple times.

### Company Normalization

Examples:

- Google Inc → Google
- GOOGLE → Google
- Alphabet Google → Google

### Aggregation

Automatically calculates:

- Average compensation
- Median compensation
- Compensation ranges
- Company-level statistics

### Company Comparison

Compare compensation data across multiple companies.

### Filtering APIs

Filter by:

- Company
- Role
- Level

---

## API Endpoints

### POST /api/compensations

Create a compensation submission.

Example:

```json
{
  "company": "Google",
  "role": "Software Engineer",
  "level": "L4",
  "baseSalary": 180000,
  "bonus": 20000,
  "stockAnnual": 50000
}
```

---

### GET /api/compensations

Retrieve compensation records.

Supports filtering by:

- company
- role
- level

Example:

```bash
/api/compensations?company=Google
```

---

### GET /api/companies/[id]

Retrieve aggregated statistics for a company.

Example:

```bash
/api/companies/1
```

---

### GET /api/compare

Compare compensation statistics between companies.

Example:

```bash
/api/compare?companies=Google,Amazon
```

---

## Database Schema

### Company

Stores normalized company information.

### CompensationEntry

Stores compensation submissions and compensation metadata.

---

## Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd compensation-intelligence
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create:

```bash
.env
```

Add:

```env
DATABASE_URL="your_postgresql_connection_string"
```

### Run Database Migrations

```bash
npx prisma migrate dev
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Start Development Server

```bash
npm run dev
```

Application:

```bash
http://localhost:3000
```

---

## Deployment

### Database

Hosted on Neon PostgreSQL.

### Application

Deployed using Vercel.

Deployment Steps:

1. Push repository to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Connect Neon PostgreSQL
5. Deploy

---

## Architecture Decisions

### Prisma ORM

Chosen for:

- Type safety
- Migration support
- Excellent TypeScript integration

### Zod

Chosen for:

- Runtime validation
- Type inference
- API safety

### Next.js App Router

Chosen for:

- API route support
- Modern routing architecture
- Server-side capabilities

---

## Future Improvements

- Authentication
- User accounts
- Compensation trend visualizations
- Advanced analytics dashboard
- Data export support
- Rate limiting
- Caching layer

---

## Author

Aryaveer Soni

Backend Engineer Internship Assignment