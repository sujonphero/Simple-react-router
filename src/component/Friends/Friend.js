import React, { useEffect, useState } from 'react';
import Bondu from '../Bondu/Bondu';
import './Friend.css';

const Friend = () => {
    const [Friends, setFriends] = useState ([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div>
            <h1>I have: {Friends.length} Friends</h1>
           <div className="total-user">
           {
                Friends.map(Friend => <Bondu 
                    Bondu={Friend}
                    key={Friend.id}
                    ></Bondu>)
            }
           </div>
        </div>
    );
};

export default Friend;