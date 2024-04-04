"use client"

import React, { useState } from 'react';

const Announcement = () => {
    // State hooks for each field
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [detail, setDetail] = useState('');
    const [announcements, setAnnouncements] = useState([]); // Array to store multiple announcements

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit action

        // Add the new announcement to the announcements array
        setAnnouncements([...announcements, { title, date, detail }]);

        // Optionally, reset the form fields after submission
        setTitle('');
        setDate('');
        setDetail('');
    };

    const handleDelete = (indexToDelete) => {
        setAnnouncements(announcements.filter((_, index) => index !== indexToDelete));
    };

    // Simple styles
    const styles = {
        container: {
            maxWidth: '500px',
            margin: '20px auto',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            backgroundColor: '#fff',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '8px',
            margin: '0 0 20px 0',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        textArea: {
            width: '100%',
            height: '100px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        button: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: '#ffffff',
            cursor: 'pointer',
            width: '100%'
        },
        deleteButton: {
            backgroundColor: '#dc3545',
          },
        submittedDetails: {
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
        },
        announcementList: {
            marginTop: '20px',
        },
        announcementItem: {
            marginBottom: '15px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px' }}>Announcement Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        style={styles.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        style={styles.input}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="detail">Detail:</label>
                    <textarea
                        id="detail"
                        style={styles.textArea}
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    />
                </div>
                <button style={styles.button} type="submit">Submit Announcement</button>
            </form>
            <div style={styles.announcementList}>
                {announcements.map((announcement, index) => (
                    <div key={index} style={styles.announcementItem} className='flex flex-col'>
                        <h3>{announcement.title}</h3>
                        <p>Date: {announcement.date}</p>
                        <p>Detail: {announcement.detail}</p>
                        <button
                            style={{ ...styles.button, ...styles.deleteButton }}
                            onClick={() => handleDelete(index)}
                            className='mt-5'
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcement;
