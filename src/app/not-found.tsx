"use client";

import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // This code will only run on the client-side
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    // Cleanup the style when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []); // Empty dependency array ensures this runs only once, on mount

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.subheading}>
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <p style={styles.description}>
        It might have been moved or deleted. Try going back to the homepage or
        check the URL.
      </p>
      <button
        style={styles.button}
        onClick={() => (window.location.href = "/")} // Redirect to homepage
      >
        Go to Homepage
      </button>
      <div style={styles.animation}>
        <img
          src="https://i.ibb.co.com/dJdm6nv/page-found-error-404-landing-page-95505-102.jpg" // Replace with a fun or cool image
          alt="Not Found Animation"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center" as const,
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    padding: "20px",
  },
  heading: {
    fontSize: "8rem",
    margin: "0",
    animation: "bounce 1s infinite",
  },
  subheading: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  description: {
    fontSize: "1rem",
    margin: "10px 0 20px",
    maxWidth: "500px",
  },
  button: {
    backgroundColor: "#ff6347",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
  animation: {
    marginTop: "30px",
  },
  image: {
    maxWidth: "200px",
    animation: "float 3s infinite",
  },
};
