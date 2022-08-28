import {useState} from 'react';

let Profile = ({ person }) => {
  let [showMore, setShowMore] = useState("false");

  return (
      <div className='profile-container'>
        <h3>Firstname: {person.firstName}</h3>
          {showMore && (
            <>
              <h3>Lasttname: {person.lastName}</h3>
              <h3>Age: {person.age}</h3>
              <h3>Hobby: {person.hobby}</h3>
            </> 
          )}
          <button 
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            Show more
          </button>
        </div>
      );
    };




export default Profile;