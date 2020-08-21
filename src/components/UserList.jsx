import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

function UserList(props) {
    const { users } = props;
    
    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
            <div className="UserList">
                
            { users.map((user, index) => {
                
                return (
                  
                   <div class="item"> 
                       
                
                <UserItem 
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    salary={user.salary}
                    isGoldClient={ user.isGoldClient }
                    key={ index }
                />
                       
              <button className="btn btn-danger align-text-bottom" onClick={ () => props.deleteUser(user.id)}>Sterge utilizator</button>
                       
            </div>
              )  
            })}
            </div>
        </div>
    );
}

export default UserList;