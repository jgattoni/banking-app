# Full-Stack Development Instructions for Gemini

## Project Overview

Build a modern full-stack web application using this exact technology stack. Follow these specifications precisely for optimal Gemini code generation.

## Technology Stack

### Backend (API Layer)

**Core Technologies:**
- **Python 3.9+** - Core backend language
- **FastAPI** - Modern, fast web API framework
- **SQLModel** - Type-safe ORM (by FastAPI creator)

- **Alembic** - Database migrations
- **PostgreSQL** - Production database (local + Render)
- **psycopg2-binary** - PostgreSQL driver
- **Uvicorn** - ASGI server for FastAPI
- **python-dotenv** - Environment variable management
- **python-jose** - JWT token verification for Auth0
- **requests** - HTTP client for Auth0 Management API calls
- **boto3** - AWS SDK for S3 file storage
- **python-multipart** - File upload handling

### Frontend (Web App/UI)

**Core Technologies:**
- **TypeScript** - Typed JavaScript for better DX
- **React** - UI framework
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component library built on Radix UI
- **Vite** - React project scaffolding/build tool
- **React Router DOM** - Client-side routing
- **React Query** - State/data fetching with caching
- **Axios** or **fetch** - HTTP client for API calls
- **Auth0 React SDK** - Authentication and authorization

### Development Tools

- **uv** - Ultra-fast Python package and environment manager
- **pytest** - Backend testing framework
- **Jest + React Testing Library** - Frontend testing
- **black + isort + flake8** - Python code quality
- **ESLint + Prettier** - TypeScript code quality

### Deployment

- **Render** - Backend and database hosting
- **Vercel** - Frontend deployment

## Architecture Guidelines

### Backend Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI app entry point
│   ├── core/
│   │   ├── config.py        # Settings with python-dotenv
│   │   ├── database.py      # SQLModel database setup
│   │   ├── auth.py          # Auth0 JWT verification
│   │   └── storage.py       # AWS S3 storage configuration
│   ├── models/
│   │   └── __init__.py      # SQLModel models
│   ├── routers/
│   │   └── __init__.py      # FastAPI routers
│   ├── services/
│   │   └── file_storage.py  # S3 file operations
│   ├── middleware/
│   │   └── auth.py          # Auth0 authentication middleware
│   └── tests/
│       └── test_*.py        # pytest tests
├── alembic/                 # Database migrations
├── requirements.txt         # Dependencies (or use uv)
└── .env                     # Environment variables
```

### Frontend Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   ├── auth/           # Auth0 authentication components
│   │   └── custom/         # Custom React components
│   ├── pages/              # Route components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API calls with React Query
│   ├── types/              # TypeScript type definitions
│   ├── lib/                # Utility functions and configurations
│   ├── utils/              # Helper functions
│   └── contexts/           # React contexts (Auth0Provider)
├── public/
├── components.json         # shadcn/ui configuration
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── .env                    # Environment variables
```

## Code Generation Requirements

### When Generating Backend Code:

1. **Always use FastAPI with proper type hints**
2. **Use SQLModel for all database models**
3. **Include Pydantic models for request/response validation**
4. **Implement Auth0 JWT verification for protected routes**
5. **Use boto3 for AWS S3 file operations**
6. **Use dependency injection for database sessions, auth, and S3**
7. **Add comprehensive error handling with HTTP status codes**
8. **Use async/await patterns throughout**
9. **Implement proper file upload validation and security**

### When Generating Frontend Code:

1. **Always use TypeScript with proper typing**
2. **Use React functional components with hooks**
3. **Implement Auth0Provider for authentication context**
4. **Use Auth0 hooks for authentication state**
5. **Implement React Query for all API calls**
6. **Use shadcn/ui components for UI elements**
7. **Use Tailwind CSS for custom styling**
8. **Include file upload components with progress indicators**
9. **Include proper error boundaries and loading states**
10. **Follow React Router DOM patterns for navigation**
11. **Implement protected routes with Auth0**

## Setup Commands

### Backend Setup

```bash
# Initialize Python project with uvuv init backend
cd backend
# Add core dependencies
uv add fastapi sqlmodel alembic psycopg2-binary uvicorn python-dotenv python-jose requests boto3 python-multipart
# Add development dependencies
uv add --dev pytest httpx black isort flake8
```

### Frontend Setup

```bash
# Create Vite + React + TypeScript project
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install

# Initialize Tailwind CSS
npm install tailwindcss @tailwindcss/vite

# Configure the Vite plugin
# Add the @tailwindcss/vite plugin to your Vite configuration.

# Import Tailwind to your CSS
# @import "tailwindcss";

# Add core dependencies
npm install @tanstack/react-query react-router-dom @auth0/auth0-react

# Add development dependencies
npm install -D tailwindcss postcss autoprefixer @types/node eslint prettier prettier-plugin-tailwindcss @typescript-eslint/eslint-plugin

# Configure prettier plugin
# Insert this block at the top level (not inside "scripts" or "dependencies"), like this:

# {
#   "name": "your-project-name",
#   "version": "1.0.0",
#   // ... other fields ...
#   "prettier": {
#     "plugins": ["prettier-plugin-tailwindcss"],
#     "semi": true,
#     "singleQuote": true,
#     "tabWidth": 2,
#     "trailingComma": "all",
#     "printWidth": 100
#   }
# }


# Edit tsconfig.json file
# The current version of Vite splits TypeScript configuration into three files, two of which need # to be edited. Add the baseUrl and paths properties to the compilerOptions section of the
# tsconfig.json and tsconfig.app.json files:

# tsconfig.json
# 
# {
#   "files": [],
#   "references": [
#     {
#       "path": "./tsconfig.app.json"
#     },
#     {
#       "path": "./tsconfig.node.json"
#     }
#   ],
#   "compilerOptions": {
#     "baseUrl": ".",
#     "paths": {
#       "@/*": ["./src/*"]
#     }
#   }
# }


# Edit tsconfig.app.json file
# Add the following code to the tsconfig.app.json file to resolve paths, for your IDE:

# tsconfig.app.json
# 
# {
#   "compilerOptions": {
#     // ...
#     "baseUrl": ".",
#     "paths": {
#       "@/*": [
#         "./src/*"
#       ]
#     }
#     // ...
#   }
# }


# Update vite.config.ts
# Add the following code to the vite.config.ts so your app can resolve paths without error:

npm install -D @types/node

# vite.config.ts
# import path from "path"
# import tailwindcss from "@tailwindcss/vite"
# import react from "@vitejs/plugin-react"
# import { defineConfig } from "vite"
 
# // https://vite.dev/config/
# export default defineConfig({
#   plugins: [react(), tailwindcss()],
#   resolve: {
#     alias: {
#       "@": path.resolve(__dirname, "./src"),
#     },
#   },
# })



# Initialize shadcn/ui (use 'shadcn' not 'shadcn-ui')
npx shadcn@latest init --css-variables --base-color neutral

# Add commonly used shadcn/ui components (use 'sonner' instead of 'toast')
npx shadcn@latest add button input card dialog form table sonner


```

## Code Quality Standards

### Python (Backend)

- Use **black** for formatting (line length: 88) on generated code.
- Use **isort** for import sorting on generated code.
- Use **flake8** for linting on generated code.
- Follow FastAPI best practices.
- Use SQLModel for type-safe database operations.
- Write comprehensive pytest tests.

### TypeScript (Frontend)

- Use **Prettier** for formatting on generated code.
- Use **ESLint** with TypeScript rules on generated code.
- Follow React functional component patterns.
- Use **shadcn/ui components** for UI elements.
- Use React Query for all API calls.
- Implement proper TypeScript typing.
- Write Jest + React Testing Library tests.

## API Design Principles

1. **RESTful endpoints** with proper HTTP methods
2. **Auth0 JWT authentication** for protected routes
3. **File upload endpoints** with multipart/form-data support
4. **S3 integration** for secure file storage
5. **Pydantic models** for request/response validation
6. **SQLModel** for database models with relationships
7. **FastAPI dependency injection** for database sessions, auth, and S3
8. **Proper error handling** with HTTP status codes
9. **Auto-generated documentation** by FastAPI

## Frontend Development Principles

1. **Component-based architecture** with React
2. **TypeScript** for all components and utilities
3. **Auth0 integration** for authentication and authorization
4. **File upload capabilities** with progress tracking
5. **shadcn/ui** for consistent, accessible UI components
6. **Tailwind CSS** for custom styling and layouts
7. **React Query** for server state management
8. **React Router DOM** for client-side navigation
9. **Protected routes** with Auth0 authentication guards
10. **Responsive design** principles

## Security & Performance

### Security Considerations

- Environment variables for sensitive data
- CORS configuration in FastAPI
- Input validation with Pydantic
- SQL injection prevention with SQLModel
- HTTPS in production deployments

### Performance Optimizations

- React Query caching for API responses
- **S3 optimization** with presigned URLs and CDN integration
- SQLModel query optimization
- FastAPI async/await patterns
- Vite for fast frontend builds
- Code splitting with React Router
- **File upload optimization** with chunked uploads for large files

## Testing Strategy

### Backend Testing

- Unit tests for business logic with pytest
- Integration tests for API endpoints
- Database tests with test database
- pytest fixtures for test data

### Frontend Testing

- Component tests with React Testing Library
- Hook tests for custom React hooks
- Integration tests for user flows
- Mock API responses for testing

## Deployment Configuration

### Backend (Render)

- Deploy FastAPI app to Render
- Use PostgreSQL database on Render
- Configure environment variables
- Set up Alembic migrations in deployment

### Frontend (Vercel)

- Deploy React app to Vercel
- Configure Vercel Env Vars for API endpoints
- Set up automatic deployments from GitHub

## Claude Code Generation Guidelines

### When Generating Code:

1. **Follow this stack exactly** - no substitutions
2. **Use TypeScript throughout** frontend code
3. **Implement proper error handling** in all components
4. **Write comprehensive tests** alongside main code
5. **Follow the specified project structure**
6. **Include necessary imports** and dependencies
7. **Add proper type annotations** for all functions
8. **Include environment variable configurations**
9. **Generate production-ready code** with best practices
10. **Provide setup instructions** for generated code

### Code Generation Priorities:

1. **Type Safety** - Full TypeScript/Python typing
2. **Error Handling** - Comprehensive error boundaries
3. **Testing** - Include test files with main code
4. **Performance** - Optimized queries and components
5. **Security** - Proper validation and sanitization
6. **Maintainability** - Clean, well-documented code

---

**Remember:** This stack is designed for modern, scalable applications with Auth0 authentication and AWS S3 file storage. Always prioritize type safety, proper error handling, Auth0 integration, secure file handling, and comprehensive testing when generating code.

## Environment Variables

### Frontend (.env)

```
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=your-api-identifier
VITE_API_BASE_URL=http://localhost:8000
```

### Backend (.env)

```
# Auth0 Configuration
AUTH0_DOMAIN=your-domain.auth0.com
AUTH0_API_AUDIENCE=your-api-identifier
AUTH0_ISSUER=https://your-domain.auth0.com/
AUTH0_ALGORITHMS=["RS256"]

# Database Configuration
DATABASE_URL=postgresql://user:password@localhost/dbname

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-bucket-name
S3_ENDPOINT_URL=https://s3.amazonaws.com  # Optional for custom endpoints
```

## AWS S3 Setup Requirements

### S3 Bucket Configuration

1. **Create S3 bucket** with appropriate region
2. **Configure CORS** to allow frontend uploads
3. **Set up IAM policies** for programmatic access
4. **Enable versioning** for file management (optional)
5. **Configure lifecycle policies** for cost optimization (optional)

### IAM Policy Example

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject",
                "s3:GetObjectUrl"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": "arn:aws:s3:::your-bucket-name"
        }
    ]
}
```