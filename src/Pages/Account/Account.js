import "./Account.css";

export default function Account() {
  return (
    // <div className="account-container">
    //   <NavLink to="/profile">Profile</NavLink>
    //   <NavLink to="/address">Address</NavLink>
    // </div>
    <div className="profile-container">
      <p className="profile-details">
        <b>Name: </b>Shoaib
      </p>
      <p className="profile-details">
        <b>Email: </b>shoaib@gmail.com
      </p>
      <p className="profile-details">
        <b>Address: </b>Hiranandani Gardens Powai
      </p>
      <p className="profile-details">
        <b>City: </b>Mumbai
      </p>
      <p className="profile-details">
        <b>Pincode: </b>400076
      </p>
      <p className="profile-details">
        <b>State: </b>Maharashtra
      </p>
    </div>
  );
}
