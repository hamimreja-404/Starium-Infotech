IT Services Page
This is a modern, responsive React component that showcases a company's core IT services. Built with React and Vite, it features a clean design, smooth animations, and includes a toggle for light and dark modes to enhance user experience.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Features
Responsive Design: The layout adapts seamlessly to different screen sizes, from mobile devices to desktops.

Dark/Light Mode: Users can switch between a dark and a light theme for comfortable viewing in any lighting condition.

Scroll Animations: Service cards gracefully fade and slide into view as the user scrolls down the page.

Component-Based: The project is built with reusable React components, making it easy to manage and extend.

Iconography: Uses lucide-react for clean and modern icons that enhance visual communication.

Tailwind CSS: Styled with Tailwind CSS for a utility-first and highly customizable design.

File Structure
The project is organized into several key components for clarity and maintainability:

App.jsx: The main entry point of the application. It simply renders the ServicePage component.

Services_page.jsx: This is the core component for the services page. It manages the theme state (light/dark) and dynamically renders the list of ServiceCard components based on the data provided.

ServiceCard.jsx: A reusable component responsible for displaying a single service. It includes:

An icon representing the service.

The title and a brief introduction.

A list of key benefits and common use cases.

A "Contact Us" call-to-action button.

It also contains the useInView custom hook to trigger animations when the card becomes visible.

ServicesData.jsx: This file contains the data for all the services. It exports an array of objects, where each object represents a service with its title, description, icon, and other details. This separation of data from the UI makes it easy to update service information without touching the component logic.

Getting Started
To run this project locally, you'll need to have Node.js and npm (or yarn) installed.

Clone the repository:

git clone [<repository-url>](https://github.com/hamimreja-404/Starium-Infotech)


Install dependencies:

npm install

Start the development server:

npm run dev

Technologies Used
React: A JavaScript library for building user interfaces.

Vite: A next-generation frontend tooling that provides a faster and leaner development experience.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Lucide React: A beautiful and consistent icon library.

Vite Official Plugins
Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh

@vitejs/plugin-react-swc uses SWC for Fast Refresh

Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.