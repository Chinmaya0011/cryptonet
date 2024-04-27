// src/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css'
const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://randomuser.me/api/?page=2&results=1&seed=abc');
      setUser(result.data.results[0]);
    };

    fetchData();
  }, []);

  return (
    <div className="card max-w-2xl rounded overflow-hidden shadow-lg bg-white mx-auto mt-10 border-4 border-grey">
      {user && (
        <>
        <div className='user flex m-10'>
          <div className="imgdiv w-1/2">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="photo w-full h-auto border-4 border-grey" />
          </div>
          <div className="details w-1/2 px-6 py-4 ml-4">
          <div className="name font-bold text-xl mb-4 text-justify">{`${user.name.first} ${user.name.last}`}</div>
<p className="gender text-gray-700 text-xl font-bold mb-4 text-justify">{user.gender}</p>
<p className="mobile text-gray-700 text-xl font-bold mb-4 text-justify">{user.phone}</p>

          </div></div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
