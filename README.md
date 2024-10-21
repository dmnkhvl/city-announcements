# Simpli

This project is a monorepo containing both frontend and backend applications.

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Fastify, tRPC, Prisma, PostgreSQL
- **Monorepo Management**: Bun

## Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or later)
- [PostgreSQL](https://www.postgresql.org/) (v12 or later)

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/simpli-mono.git
   cd simpli-mono
   ```

2. Install dependencies:

   ```
   bun install
   ```

3. Set up the database:

   - Create a PostgreSQL database
   - Copy `.env.example` to `.env` in the `backend` directory and update the `DATABASE_URL`

4. Run database migrations:

   ```
   cd backend
   bun run prisma migrate dev
   ```

5. Start the development servers:

   ```
   cd ..
   bun run dev
   ```

   This will start both frontend and backend servers concurrently.

## Scripts

- `bun run dev`: Start both frontend and backend in development mode
- `bun run build`: Build both frontend and backend
- `bun run start`: Start the production server (after building)

## License

This project is licensed under the MIT License.
