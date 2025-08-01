import React, { useState, useEffect } from 'react';

const Mentor = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/mentors');
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        }
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error('Failed to fetch mentors', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);

  if (loading) return <p>Loading Mentors...</p>;

  return (
    <div>
      {/* This is just an example structure. Replace it with your actual JSX for mentors. */}
      <h2>Meet Your Mentors</h2>
      {mentors.map(mentor => (
        <div key={mentor._id}>
          <h3>{mentor.name}</h3>
          <p>{mentor.title} at {mentor.company}</p>
        </div>
      ))}
    </div>
  );
};

export default Mentor;