import React, { useRef, useState } from 'react';
import '../Components.css';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const searchRef = useRef();
  const filterRef = useRef();
  const filterImgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== filterRef.current && e.target !== filterImgRef.current) {
      setToggle(false);
    }
  })

  const SearchFocus = (e) => {
    if (e.target !== filterRef.current) {
      searchRef.current.focus();
    }
  }

  return (
    <>
      <nav>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="searchBox" onClick={SearchFocus}>
          <div className="btn-grp">
            <img src="./Assets/search.svg" alt="searchIcon" />
            <input
              type="text"
              placeholder='Search here...'
              ref={searchRef}
            />
          </div>
          <button className="filterBtn" ref={filterRef} onClick={() => setToggle(!toggle)}>
            <img src="./Assets/filter.svg" alt="filterIcon" ref={filterImgRef} />
            Filters
            <DropDowns toggle={toggle} />
          </button>
        </div>
        <button className="sellerBtn">
          Become a Seller
        </button>
      </nav>

    </>
  )
}


export const DropDowns = ({ toggle }) => {
  return (
    <ul className={`dropdown ${toggle ? "d-block" : "d-none"}`}>
      <li>Add Your Items</li>
      <li>Add Your Items</li>
      <li>Add Your Items</li>
      <li>Add Your Items</li>
    </ul>
  )
}