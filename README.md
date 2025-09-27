# Qeet Auth Service

A Node.js/Express TypeScript authentication service for the Qeet Group platform.

## Overview

The Qeet Auth Service provides authentication functionality for the Qeet Group ecosystem. Built with Express.js and TypeScript, it offers a clean, scalable architecture for handling user authentication operations.

## Features

- 🔐 User registration and login endpoints
- 🏥 Health check endpoint for service monitoring
- 📦 TypeScript with strict type checking
- 🚀 Hot reload development with tsx
- 🛠️ Path aliases for clean imports
- 📊 Request/response logging with chalk

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Development**: tsx (hot reload)
- **Build**: TypeScript Compiler + tsc-alias

## Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/qeetgroup/qeet-auth-service.git
cd qeet-auth-service
```

2. Install dependencies:

```bash
pnpm install
```

## Development

Start the development server with hot reload:

```bash
pnpm dev
```

The service will start on `http://localhost:3001` by default.

## Building

Build the project for production:

```bash
pnpm build
```

## Production

Start the production server:

```bash
pnpm start
```

## Environment Variables

Configure the service using environment variables:

| Variable | Description | Default     |
| -------- | ----------- | ----------- |
| `HOST`   | Server host | `localhost` |
| `PORT`   | Server port | `3001`      |

Create a `.env` file in the root directory:

```env
HOST=localhost
PORT=3001
```

## API Endpoints

### Health Check

- **GET** `/health` - Service health status

### Authentication

- **POST** `/auth/register` - User registration
- **POST** `/auth/login` - User login

## Project Structure

```
src/
├── app.ts              # Express app configuration
├── index.ts            # Application entry point
├── controllers/        # Request handlers
│   └── auth.controller.ts
├── routes/             # Route definitions
│   └── auth.routes.ts
├── services/           # Business logic
│   └── auth.service.ts
├── middlewares/        # Custom middleware (empty)
└── validations/        # Input validation (empty)
```

## Development Status

🚧 **Under Development**

Current implementation includes:

- ✅ Basic Express server setup
- ✅ Health check endpoint
- ✅ Authentication route structure
- ✅ TypeScript configuration
- ⏳ User registration logic (placeholder)
- ⏳ User login logic (placeholder)
- ⏳ Input validation
- ⏳ Error handling middleware
- ⏳ Database integration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please open an issue on [GitHub](https://github.com/qeetgroup/qeet-auth-service/issues).

---

**Qeet Group** - Building the future of authentication
