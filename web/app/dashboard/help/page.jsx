"use client";
import React, { useState } from "react";
import { user3 } from "@/app/asset";
import { user4 } from "@/app/asset";
import { user5 } from "@/app/asset";
import Image from "next/image";

const Page = () => {
  const [isHovering, setIsHovering] = useState({
    email1: false,
    email2: false,
    email3: false,
    phone1: false,
    phone2: false,
    phone3: false,
  });

  const handleHover = (contact, isHovering) => {
    setIsHovering((prevState) => ({ ...prevState, [contact]: isHovering }));
  };

  const styles = {
    contactBox: {
      marginTop: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#f9f9f9",
    },
    contactItem: {
      marginBottom: "20px",
      padding: "10px",
      backgroundColor: "#f9f9f9",
      borderRadius: "5px",
    },
    contactHeader: {
      marginTop: "0",
    },
    contactText: {
      marginBottom: "5px",
    },
    separator: {
      border: "0",
      height: "1px",
      backgroundImage:
        "linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))",
      margin: "20px 0",
    },
    boldText: {
      fontWeight: "bold",
    },
    link: (isHovered) => ({
      color: isHovered ? "#0056b3" : "#0077cc",
      textDecoration: "none",
      cursor: "pointer",
    }),
    imageContainer: {
      float: "right",
      marginLeft: "15px",
    },
    image: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "50%",
    },
    contactItem: {
      marginBottom: "20px",
      padding: "10px",
      backgroundColor: "#f9f9f9",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };

  return (
    <div>
      <h1>Help</h1>
      <div style={styles.contactBox}>
        <h2 style={styles.boldText}>Emergency Contact</h2>
        <div style={styles.contactItem}>
          <div>
            <h3 style={{ ...styles.contactHeader, ...styles.boldText }}>
              Paradon Meeanan
            </h3>
            <p style={styles.contactText}>
              Email:{" "}
              <a
                style={styles.link(isHovering.email1)}
                onMouseEnter={() => handleHover("email1", true)}
                onMouseLeave={() => handleHover("email1", false)}
                href={`mailto:paradon.meeanan@edu.sait.ca`}
              >
                paradon.meeanan@edu.sait.ca
              </a>
            </p>
            <p style={styles.contactText}>
              Number:{" "}
              <a
                style={styles.link(isHovering.phone1)}
                onMouseEnter={() => handleHover("phone1", true)}
                onMouseLeave={() => handleHover("phone1", false)}
                href="tel:+1403-1111-1111"
              >
                403-1111-1111
              </a>
            </p>
          </div>
          <div style={styles.imageContainer}>
            <Image src={user3} alt="Paradon Meeanan" style={styles.image} />
          </div>
        </div>

        <hr style={styles.separator} />

        <div style={styles.contactItem}>
          <div>
            <h3 style={{ ...styles.contactHeader, ...styles.boldText }}>
              Felix Zhang
            </h3>
            <p style={styles.contactText}>
              Email:{" "}
              <a
                style={styles.link(isHovering.email2)}
                onMouseEnter={() => handleHover("email2", true)}
                onMouseLeave={() => handleHover("email2", false)}
                href={`mailto:yuhao.zhang@edu.sait.ca`}
              >
                yuhao.zhang@edu.sait.ca
              </a>
            </p>
            <p style={styles.contactText}>
              Number:{" "}
              <a
                style={styles.link(isHovering.phone2)}
                onMouseEnter={() => handleHover("phone2", true)}
                onMouseLeave={() => handleHover("phone2", false)}
                href="tel:+1403-2222-2222"
              >
                403-2222-2222
              </a>
            </p>
          </div>
          <div style={styles.imageContainer}>
            <Image src={user4} alt="Felix Zhang" style={styles.image} />
          </div>
        </div>

        <hr style={styles.separator} />

        <div style={styles.contactItem}>
          <div>
            <h3 style={{ ...styles.contactHeader, ...styles.boldText }}>
              Khit Klinsang
            </h3>
            <p style={styles.contactText}>
              Email:{" "}
              <a
                style={styles.link(isHovering.email3)}
                onMouseEnter={() =>
                  setIsHovering({ ...isHovering, email3: true })
                }
                onMouseLeave={() =>
                  setIsHovering({ ...isHovering, email3: false })
                }
                href={`mailto:khitdhikhun.klinsang@edu.sait.ca`}
              >
                khitdhikhun.klinsang@edu.sait.ca
              </a>
            </p>
            <p style={styles.contactText}>
              Number:{" "}
              <a
                style={styles.link(isHovering.phone3)}
                onMouseEnter={() =>
                  setIsHovering({ ...isHovering, phone3: true })
                }
                onMouseLeave={() =>
                  setIsHovering({ ...isHovering, phone3: false })
                }
                href="tel:+1403-3333-3333"
              >
                403-3333-3333
              </a>
            </p>
          </div>
          <div style={styles.imageContainer}>
            <Image src={user5} alt="Khit Klinsang" style={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
