import React from "react";
import "../style/profile.css";

const Profile = () => {
  const userDetails = JSON.parse(localStorage.getItem("userId"));
  return (
    <div>
      <div className="containerProfile">
        <h2>Signup Successful!</h2>
        <div className="details">
          <h3>Profile</h3>
          <img src={userDetails.image} alt="profileimage" />
          <div>
            <p>
              Full Name: {userDetails.firstName} {userDetails.lastName}
            </p>
            <p>Email :{userDetails.email}</p>
            <p>Gender:{userDetails.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
