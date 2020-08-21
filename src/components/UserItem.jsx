import React from 'react';
import './UserItem.css';

function UserItem(props) {
    const {name, email, isGoldClient,salary} = props;
    
    return (
        
        <div className="col-3 d-flex flex-column align-items-center">
            <h5 className="mb-1 text-center">{ name }</h5>
            <label htmlFor="email">Email:</label>
            <p name="email">{ email }</p>
            <p>{ salary }</p>
            <img className="profile-pic" src='/images/profil.gif' alt="imagine indisponibila " />
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            
        </div>
        
    );
}

export default UserItem;