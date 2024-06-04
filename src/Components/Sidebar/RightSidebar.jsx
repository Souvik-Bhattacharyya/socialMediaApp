import React, { useState } from 'react';
import Photographers from "./PhotoGraphers";
import Arists from "./Arists";

const RightSidebar = () => {

    const [isActive, setActive] = useState(true);

    return (
        <div className='rightSidebar'>
            <div className="vertical-links">
                <div className={`verticalMenu ${isActive ? "active" : ""}`} onClick={() => setActive(true)}>Artists</div>
                <div to="/photographers" onClick={() => setActive(false)} className={`verticalMenu ${isActive ? "" : "active"}`}>Photographers</div>
            </div>
            <div className='rightSidebar-list'>
                {
                    isActive ? <Arists /> : <Photographers />
                }
            </div>
        </div>
    )
}

export default RightSidebar;