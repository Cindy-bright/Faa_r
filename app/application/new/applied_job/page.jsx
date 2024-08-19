"use client";  

import React, { useState } from 'react';

const AppliedJobs = () => {
  const [filter, setFilter] = useState('');

  const initialJobs = [
    { id: 1, title: 'Web Developer', category: 'Web Development', company: 'Spotify', date: 'May 16th, 2024' },
    { id: 2, title: 'Graphic Designer', category: 'Software Development', company: 'Netflix', date: 'May 17th, 2024' },
    { id: 3, title: 'UI/UX Developer', category: 'Software Development', company: 'Zoho Corporation', date: 'May 9th, 2024' },
    { id: 4, title: 'Software Engineer', category: 'Software Development', company: 'Zoho Corporation', date: 'May 9th, 2024' },
    { id: 5, title: 'Front End Developer', category: 'Software Development', company: 'Zoho Corporation', date: 'May 24th, 2024' }
  ];

  const [jobs, setJobs] = useState(initialJobs);

  const filteredJobs = jobs.filter(job => job.company.toLowerCase().includes(filter.toLowerCase()));

  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Applied Jobs</h2>
      <input 
        type="text" 
        placeholder="Filter by company..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)} 
        style={inputStyle}
      />
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Category</th>
            <th style={tableHeaderStyle}>Company</th>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <tr key={job.id}>
                <td style={tableCellStyle}>{job.title}</td>
                <td style={tableCellStyle}>{job.category}</td>
                <td style={tableCellStyle}>{job.company}</td>
                <td style={tableCellStyle}>{job.date}</td>
                <td style={tableCellStyle}>
                  <button onClick={() => handleDelete(job.id)} style={deleteButtonStyle}>
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={noJobsStyle}>No jobs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  maxWidth: '800px',
  margin: '0 auto'
};

const headingStyle = {
  marginBottom: '20px',
  textAlign: 'center',
  fontSize: '24px'
};

const inputStyle = {
  marginBottom: '20px',
  padding: '10px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
};

const tableHeaderStyle = {
  padding: '12px',
  backgroundColor: '#f4f4f4',
  borderBottom: '2px solid #ddd',
  textAlign: 'left',
  fontSize: '16px'
};

const tableCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
  fontSize: '14px'
};

const deleteButtonStyle = {
  backgroundColor: '#ff4d4d',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '6px 12px',
  cursor: 'pointer',
  fontSize: '14px'
};

const noJobsStyle = {
  textAlign: 'center',
  padding: '20px',
  fontSize: '16px',
  color: '#888'
};

export default AppliedJobs;
