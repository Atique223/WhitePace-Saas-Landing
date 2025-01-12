import React from "react";
import Image from "next/image";


const NavBar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#043873", // Navy blue background
      color: "white",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    navLinks: {
      display: "flex",
      gap: "4rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
    },
    navButtons: {
      display: "flex",
      gap: "2rem",
    },
    loginBtn: {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      backgroundColor: "#FFE492",
      color: "#043873",
      border: "1px solid white",
      cursor: "pointer",
    },
    signupBtn: {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      backgroundColor: "#4F9CF9",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
    image: {
      height: "30px",
      marginRight: "10px",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/Logo Icon.png" // Replace with the actual logo image path
          alt="Whitespace Logo"
          width={30}
          height={30}
          style={styles.image}
        />
        <div style={styles.logo}>Whitespace</div>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li>
          <a href="#products" style={styles.navLink}>
            Products
          </a>
        </li>
        <li>
          <a href="#solutions" style={styles.navLink}>
            Solutions
          </a>
        </li>
        <li>
          <a href="#resources" style={styles.navLink}>
            Resources
          </a>
        </li>
        <li>
          <a href="#pricing" style={styles.navLink}>
            Pricing
          </a>
        </li>
      </ul>

      {/* Buttons */}
      <div style={styles.navButtons}>
        <button style={styles.loginBtn}>Login</button>
        <button style={styles.signupBtn}>Try Whitespace free <Image src="/images/Icon.png" alt="Icone" width={14} height={14} style={{ marginLeft: "5px" }}/>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;