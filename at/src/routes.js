// This file is deprecated. All route definitions and navigation logic
// have been moved to src/components/Navigation.jsx for better organization.
// Please use the Navigation component for all navigation-related functionality.

export const DEPRECATED_ROUTES = [
  { path: "/", name: "Home" },
  { path: "/upload", name: "Upload" },
  { path: "/result", name: "Result" },
  { path: "/about", name: "About" },
];

// For backward compatibility - redirect to Navigation component
export { routes } from "./components/Navigation";
