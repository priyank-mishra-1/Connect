import { useEffect, useState } from "react";

const AuthProtector = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("userToken")
  );

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("userToken");
      setIsAuthenticated(!!token);
      if (!token) {
        window.location.href = "/landing";
      }
    };

    // Check authentication initially
    checkAuth();

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);

    // Check periodically in case localStorage changes within the same tab
    const intervalId = setInterval(checkAuth, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(intervalId); // Cleanup interval
    };
  }, []);

  return isAuthenticated ? children : null;
};

export default AuthProtector;
