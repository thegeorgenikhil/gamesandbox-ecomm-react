import React from 'react'
import "./ListingCard.css"
import ForzaImg from "../../assets/listing-images/forza-horizon.png"
import {BsHeart} from "react-icons/bs"
const ListingCard = () => {
  return (
    <div className='listing-card'>
        <div className="listing-img-container">
            <img src={ForzaImg} className="listing-img" alt="" />
            <BsHeart className='card-wishlist-icon' />
            <div className="card-dark-overlay"></div>
        </div>
        <div className="listing-card-content">
            <div className="listing-card-details">
                <p className="listing-card-name">Forza Horizon 5</p>
                <p className="listing-card-price">₹2,399.00</p>
            </div>
            <div className="listing-card-actions">
                <button className="btn card-action-btn">ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default ListingCard