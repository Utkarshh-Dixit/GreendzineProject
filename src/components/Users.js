import React, {useState, useEffect} from 'react';
import userData from '../data.json';
import topright from '../topright.png';
import toplogo from '../toplogo.png';
import homepage from '../home-page.png';
import usericon from '../user-icon.png';
import './Profile.css';
import './Users.css'
import { Link } from 'react-router-dom';

export const Users = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const filteredData = userData.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredData);
  }, [searchTerm]);
  return (
    <div className="container">
      <img className="topRightImage" src={topright} alt="Top Right" />
      <img className="mainImage" src={toplogo} alt="Main" />

      <input className='inputSearch'
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className='dataS'>
        {filteredUsers.map((user) => (
          <li className="peruser" key={user.empId}>
             EMP ID: {user.empId}
            <br />
            Name : {user.name} <br/>
            DOB: {user.dob} <br/>
            Role: {user.role}
          </li>
        ))}
      </ul>
      
      <div className="buttonWrapper">
        <Link to="/profile">
        <button className="button"><img className="homeI" src={homepage} alt="Home"/></button>
        </Link>
        <Link to="/users">
        <button className="button"><img className="userI" src={usericon} alt="User"/></button>
        </Link>
      </div>
    </div>
  )
}
