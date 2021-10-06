import React from 'react';
import { Link } from 'react-router-dom';
import './Bondu.css'

const Bondu = (props) => {
    const {id,name, address, email, phone, website} = props.Bondu; 

    const url = `/friend/${id}`;
    return (
       
        <div className="user">
            <h2>My Name:  {name} {id}</h2>
            <h4>Country: {address.city}</h4>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
            <h6>Website: <a href="#">{website}</a></h6>
            <Link to={url}>Visit me</Link>
        </div>
    );
};

export default Bondu;