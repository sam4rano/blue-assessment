# Project Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Technologies Used

- **React 18**: Used for compatibility with Next.js 14 due to dependency constraints.
- **Tailwind CSS**: For styling and responsive design.
- **Recharts**: For creating interactive and visually appealing graphs.
- **shadcn**: For pre-built UI components.
- **Axios**: For data fetching.
- **React Query (useQuery and useMutation)**: To manage API requests effectively.

## Route Definitions

- **auth**: Handles all authentication-related routes.
- **routes**: Contains application routes not related to authentication.
- **config**: Includes API configuration and management of API request hooks.
- **hooks**: Manages custom hooks.

## API Management

- **useQuery**: Manages all GET requests efficiently.
- **useMutation**: Handles all mutation requests.

## Known Issues

- Login API returns `404 Not Found` errors.
- HTTP issues when HTTPS is required.
- Time constraints impacting development.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Optimized Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

