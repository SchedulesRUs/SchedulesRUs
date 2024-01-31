import React from "react";

const Page = () => {
    const styles = {
        contactBox: {
            marginTop: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
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
        }
    };

    return (
        <div>
            <h1>Help</h1>
            <div style={styles.contactBox}>
                <h2>Emergency Contact</h2>
                <div style={styles.contactItem}>
                    <h3 style={styles.contactHeader}>Paradon Meeanan</h3>
                    <p style={styles.contactText}>Email: ------------@gmail.com</p>
                    <p style={styles.contactText}>Number: -----------</p>
                </div>
                <div style={styles.contactItem}>
                    <h3 style={styles.contactHeader}>Felix Zhang</h3>
                    <p style={styles.contactText}>Email: ------------@gmail.com</p>
                    <p style={styles.contactText}>Number: -----------</p>
                </div>
            </div>
        </div>
    )
}

export default Page;
