// src/Components/UserProfile.js
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { getUserData } from '../firestore';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const data = await getUserData(user.uid);
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      {userData ? (
        <div>
          <p>Email: {userData.email}</p>
          <p>Account Created: {userData.createdAt.toDate().toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
