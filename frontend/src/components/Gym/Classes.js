import React, { useState, useEffect } from 'react';
import { getClasses } from '../../services/api'; // Assume getClasses is a function that fetches classes

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes when the component mounts
    const fetchClasses = async () => {
      try {
        const classList = await getClasses();
        setClasses(classList);
      } catch (err) {
        console.error('Error fetching classes:', err);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h1>Our Gym Classes</h1>
      {classes.length > 0 ? (
        <ul>
          {classes.map((classItem, index) => (
            <li key={index}>
              <h3>{classItem.title}</h3>
              <p>{classItem.description}</p>
              <p>Time: {classItem.time}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No classes available at the moment.</p>
      )}
    </div>
  );
};

export default Classes;
