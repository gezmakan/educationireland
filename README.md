# Next.js Starter Template

A production-ready Next.js starter template with authentication, database, and dark mode - ready to clone and build your next webapp.

## What's Included

- ✅ **Next.js 16** - Latest version with App Router
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS v4** - Modern styling
- ✅ **Prisma ORM** - Type-safe database queries
- ✅ **Neon PostgreSQL** - Serverless database
- ✅ **NextAuth v5** - Google OAuth authentication
- ✅ **Dark Mode** - CSS variables-based theme switching
- ✅ **ESLint** - Code quality
- ✅ **Ready to deploy** - Vercel-optimized

## Quick Start

### 1. Clone this template

```bash
# Clone from GitHub
git clone https://github.com/YOUR_USERNAME/nextjs-starter-template.git my-new-project
cd my-new-project

# OR copy the folder locally
cp -r nextjs-starter-template my-new-project
cd my-new-project
```

### 2. Clean up and initialize

```bash
rm -rf .git node_modules .next
git init
git branch -m main
npm install
```

### 3. Set up environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then update `.env.local` with your credentials:

```bash
# Database - Get from https://neon.tech
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# NextAuth - Generate with: openssl rand -base64 32
NEXTAUTH_SECRET="your_generated_secret"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth - Get from https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

### 4. Set up database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - you're ready to build!

## Customization Checklist

After cloning, update these files:

- [ ] `package.json` - Change `name` field
- [ ] `README.md` - Update project description
- [ ] `app/layout.tsx` - Update metadata (title, description)
- [ ] `app/page.tsx` - Replace with your home page content
- [ ] `.env.local` - Add your credentials
- [ ] `prisma/schema.prisma` - Add your data models

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/
│   │   └── auth/          # NextAuth API routes
│   ├── auth/
│   │   └── signin/        # Sign-in page
│   ├── globals.css        # Global styles + dark mode
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/
│   └── prisma.ts          # Prisma client singleton
├── prisma/
│   └── schema.prisma      # Database schema
├── auth.ts                # NextAuth configuration
└── next.config.ts         # Next.js config
```

## Database Setup

### Using Neon (Recommended)

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy connection string to `DATABASE_URL` in `.env.local`
4. Run `npx prisma db push`

### Prisma Commands

```bash
npx prisma generate       # Generate Prisma Client
npx prisma db push        # Push schema to database
npx prisma migrate dev    # Create migration
npx prisma studio         # Open database GUI
```

## Authentication Setup

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create OAuth 2.0 credentials
3. Add authorized redirect URIs:
   - Local: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://yourdomain.com/api/auth/callback/google`
4. Copy Client ID and Secret to `.env.local`

## Dark Mode

Theme is managed with CSS variables in `app/globals.css`:
- Stored in localStorage
- Persists across sessions
- Toggle button included on home page
- Extend to save to user profile in database

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (set to your production URL)
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
4. Deploy!

Don't forget to add your production callback URL to Google OAuth settings.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Prisma](https://www.prisma.io) - ORM
- [Neon](https://neon.tech) - PostgreSQL database
- [NextAuth.js](https://next-auth.js.org) - Authentication

## License

MIT - Use this template however you want!

---

**Save 1-2 hours on every new project** ⚡
