"use client"
import React, { useState } from "react";

const Page = () => {
    const [isHovering, setIsHovering] = useState({
        email1: false,
        email2: false,
        phone1: false,
        phone2: false,
    });

    const handleHover = (contact, isHovering) => {
        setIsHovering(prevState => ({ ...prevState, [contact]: isHovering }));
    };

    const styles = {
        contactBox: {
            marginTop: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#f9f9f9',
        },
        contactItem: {
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            borderRadius: '5px',
        },
        contactHeader: {
            marginTop: '0',
        },
        contactText: {
            marginBottom: '5px',
        },
        separator: {
            border: '0',
            height: '1px',
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
            margin: '20px 0',
        },
        boldText: {
            fontWeight: 'bold',
        },
        link: (isHovered) => ({
            color: isHovered ? '#0056b3' : '#0077cc', 
            textDecoration: 'none',
            cursor: 'pointer',
        }),
    };

    return (
        <div>
            <div style={styles.contactBox}>
                <h2 style={styles.boldText}>If you have any question on this website, please contact: </h2>
                <div style={styles.contactItem}>
                    <h3 style={styles.contactHeader}>Paradon Meeanan</h3>
                    <p style={styles.contactText}>
                        Email: <a style={styles.link(isHovering.email1)}
                                  onMouseEnter={() => handleHover('email1', true)}
                                  onMouseLeave={() => handleHover('email1', false)}
                                  href={`mailto:paradon.meeanan@edu.sait.ca`}>paradon.meeanan@edu.sait.ca</a>
                    </p>
                    <p style={styles.contactText}>
                        Number: <a style={styles.link(isHovering.phone1)}
                                   onMouseEnter={() => handleHover('phone1', true)}
                                   onMouseLeave={() => handleHover('phone1', false)}
                                   href="tel:+1403-1111-1111">403-1111-1111</a>
                    </p>
                </div>
                
                <hr style={styles.separator} />

                <div style={styles.contactItem}>
                    <h3 style={styles.contactHeader}>Felix Zhang</h3>
                    <p style={styles.contactText}>
                        Email: <a style={styles.link(isHovering.email2)}
                                  onMouseEnter={() => handleHover('email2', true)}
                                  onMouseLeave={() => handleHover('email2', false)}
                                  href={`mailto:yuhao.zhang@edu.sait.ca`}>yuhao.zhang@edu.sait.ca</a>
                    </p>
                    <p style={styles.contactText}>
                        Number: <a style={styles.link(isHovering.phone2)}
                                   onMouseEnter={() => handleHover('phone2', true)}
                                   onMouseLeave={() => handleHover('phone2', false)}
                                   href="tel:+1403-2222-2222">403-2222-2222</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
