import React, { useState, useRef } from 'react';

const Posts = ({ index, profilePic, name, handel, mainImage, cmnt, share, des, like }) => {

    const menuRef = useRef();
    const [menu, setMenu] = useState(false);
    const [isReadMore, setIsReadMore] = useState(true);
    const [likeCnt, setLike] = useState(false);

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current) {
            setMenu(false);
        }
    })


    return (
        <div className="post-card" key={index}>
            <div className="postcard-head">
                <div className="left">
                    <img src={profilePic} alt={name} />
                    <div className="handles">
                        <h4>{name}</h4>
                        <h6>{handel}</h6>
                    </div>
                </div>
                <div className="right">
                    <img src="./Assets/menu.svg" ref={menuRef} alt="Menu" onClick={() => setMenu(!menu)} />
                    <ListItems menu={menu} />
                </div>
            </div>
            <div className="postcard-body">
                <p className="para">{isReadMore ? des.substring(0, 124) : des}
                    <span className='read-more' onClick={() => setIsReadMore(!isReadMore)}> {isReadMore ? "Read More" : "Read Less"}</span>
                </p>
                <div className="card-img">
                    <img src={mainImage} alt={mainImage} className='bg-img' />
                </div>
            </div>
            <div className="postcard-foot">
                <div className="social-icons">
                    <img src={likeCnt ? "./Assets/like-fill.svg" : "./Assets/like.svg"} onClick={() => setLike(!likeCnt)} alt="Like" />
                    <h5>{like}</h5>
                </div>
                <div className="social-icons">
                    <img src="./Assets/comment.svg" alt="comment" />
                    <h5>{cmnt}</h5>
                </div>
                <div className="social-icons">
                    <img src="./Assets/share.svg" alt="share" />
                    <h5>{share}</h5>
                </div>
            </div>
        </div>
    )
}

export default Posts;

export const ListItems = ({ menu }) => {
    return (
        <ul className={`list-items ${menu ? "d-block" : "d-none"}`}>
            <li>Add Some List</li>
            <li>Add Some List</li>
            <li>Add Some List</li>
        </ul>
    )
}