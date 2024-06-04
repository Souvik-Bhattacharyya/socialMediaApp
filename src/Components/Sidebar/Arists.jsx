import React from 'react';
import ArtistData from "../../Data/artistData";

const Arists = () => {
  return (
    <div className='ArtistPage'>
      {ArtistData.map((e, index) =>
        <div className="card" key={index}>
          <img src={e.backgroundPic} className='cardBG' alt={e.name} />
          <div className="card-body">
            <div className="profile-pic-img">
              <img src={e.profilePic} className='profilePic' alt={e.name} />
            </div>
            <div className="socialHandles">
              <h4>{e.name}</h4>
              <h6>{e.handel}</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Arists