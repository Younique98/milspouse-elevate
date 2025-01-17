# MilSpouse Elevate

MilSpouse Elevate is a modern web platform designed to connect military spouses with career opportunities, training, and resources. Built with Next.js 14 and modern web technologies, this platform aims to empower military families through professional development.

## Tech Stack

- Frontend Framework: Next.js 14 (with App Router)
- Language: TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Database: PostgreSQL
- ORM: Prisma
- Authentication: NextAuth.js
- Development Server: Turbopack

## Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn
- Git

### Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/milspouse-elevate.git
cd milspouse-elevate
```

2. Install dependencies

```bash 
npm install or yarn
```

3. Set up environment variables
Create a .env file in the root directory and add the following:

``` env
### Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# Next Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
``` 
Set up the database

```bash 
# Start PostgreSQL service
# For Mac:
brew services start postgresql

# For Windows:
# Start PostgreSQL service from Services app

# For Linux:
sudo systemctl start postgresql

# Initialize Prisma and create database tables
npx prisma generate
npx prisma migrate dev
```

5. Run the development server
```bash
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

### Project Structure
```bash 
milspouse-elevate/
├── src/
│   ├── app/
│   │   ├── (auth)/            # Authentication related pages
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/       # Protected dashboard routes
│   │   │   └── opportunities/
│   │   ├── api/               # API routes
│   │   │   ├── auth/
│   │   │   ├── opportunities/
│   │   │   └── applications/
│   │   └── layout.tsx
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── shared/           # Shared components
│   │   └── features/         # Feature-specific components
│   ├── lib/                  # Utility functions and configurations
│   │   ├── prisma/          # Database client
│   │   ├── utils/           # Helper functions
│   │   └── types/           # TypeScript types
│   └── styles/              # Global styles
├── prisma/                  # Prisma schema and migrations
│   └── schema.prisma
├── public/                  # Static files
└── package.json
```

## Database Schema
Our PostgreSQL database includes the following main models:

User
Opportunity
Application
```prisma
model User {
  id                String         @id @default(cuid())
  email             String         @unique
  name              String?
  militaryAffiliation String?
  currentLocation    String?
  willingToRelocate  Boolean       @default(false)
  applications      Application[]
  createdAt         DateTime       @default(now())
  updatedAt         DateTime       @updatedAt
}

model Opportunity {
  id            String         @id @default(cuid())
  title         String
  company       String
  location      String?
  type          String
  description   String
  requirements  String[]
  isRemote      Boolean        @default(false)
  applications  Application[]
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
}

model Application {
  id             String       @id @default(cuid())
  user           User         @relation(fields: [userId], references: [id])
  userId         String
  opportunity    Opportunity  @relation(fields: [opportunityId], references: [id])
  opportunityId  String
  status         String
  createdAt      DateTime     @default(now())
  updatedAt      DateTime     @updatedAt

  @@index([userId])
  @@index([opportunityId])
}
```

## Features

- User Authentication: Secure login and registration via NextAuth.js

- Opportunity Management: Post, view, and apply for job opportunities

- Responsive Design: Mobile-first layout using Tailwind CSS

## Development
- I used Turbopack for faster development builds
- shadcn/ui components are used for consistent UI elements
- Tailwind CSS for styling
- TypeScript for type safety

## Working with the Database

To create a new migration after modifying the schema:
```bash
npx prisma migrate dev --name your_migration_name
```

To reset the database:
```bash
npx prisma migrate reset
```

To view your database with Prisma Studio:
```bash
npx prisma studio
```

### Deployment
The application can be deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

### Testing

## Running Tests

If tests are implemented, use:

```npm test```

### Planned Testing

Unit tests and integration tests will be added in the next phase of development.

### Visuals 
![v1_landing_page](/public/snapshot_landing_page_v1.jpeg)
## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

### Acknowledgments
Built with shadcn/ui components
Powered by Next.js