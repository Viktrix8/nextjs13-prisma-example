# Next.js 13 & Prisma Starter

![Next.js](https://img.shields.io/badge/Next.js-13.0.0-blue?logo=next.js)
![Prisma](https://img.shields.io/badge/Prisma-2.30.3-blue?logo=prisma)

This is a starter template for building web applications using Next.js 13 and Prisma 2. It provides a solid foundation for developing modern, server-rendered React applications with an efficient database management system. The combination of Next.js and Prisma allows you to quickly create performant, scalable, and maintainable web applications.

## Features

- **Next.js 13**: Latest version of the popular React framework for server-rendered applications.
- **Prisma 2**: An ORM (Object-Relational Mapping) that simplifies database access and management.
- **PostgreSQL**: This starter uses PostgreSQL as the database system, but it can be easily replaced with other databases supported by Prisma.
- **Authentication**: Basic user authentication is set up using Next Auth authentication middleware, with support for user registration, login, and protected routes.
- **Environment Variables**: Configurable environment variables using `.env` files for easy development and deployment setup.
- **Eslint & Prettier**: Code linting and formatting configured to ensure consistent and clean code.
- **Docker Compose**: Docker Compose file is included to run the PostgreSQL database and the app containerized.
- **UI Libary**: This starter uses tailwindcss and shadcn/ui.

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```
   git clone https://github.com/Viktrix8/nextjs13-prisma-starter
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Set up the database**:

   Make sure you have PostgreSQL installed and running. Update the database connection settings in the `.env` file to match your PostgreSQL credentials.

4. **Run database migrations**:

   ```
   npx prisma migrate dev
   ```

5. **Start the development server**:

   ```
   npm run dev
   ```

6. **Open your browser**:

   The application will be running at `http://localhost:3000`.

## Folder Structure

The folder structure of this starter is organized as follows:

- `/components`: Contains React components used throughout the application.
- `/app`: Includes Next.js page components representing different routes of the application.
- `/prisma`: Holds the Prisma schema and migration files.

## Environment Variables

This starter uses environment variables to manage sensitive data and configuration. Rename the `.env.example` file to `.env` and replace the placeholder values with your actual settings.

## Deploying to Production

To deploy the application to production, build the Next.js application and run it with a process manager such as PM2 or deploy it on a platform like Vercel or Netlify. Don't forget to set the environment variables in your production environment as well.

## Contributing

Contributions to this starter are welcome. Feel free to open issues for bug reports or feature requests, and submit pull requests with improvements.

## License

This starter is open-source and available under the [MIT License](LICENSE).

---

Thank you for using the Next.js 13 & Prisma Starter! We hope this template accelerates your web development journey and provides a robust foundation for your projects. If you have any questions or feedback, please don't hesitate to reach out. Happy coding!
