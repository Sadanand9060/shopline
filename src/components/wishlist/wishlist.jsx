import React from 'react'
import { useSelector } from 'react-redux'
import WishlistItem from './wishlistItem/wishlistItem';
const Wishlist = () => {
    const wishlistState = useSelector((state) => state.wishlist);
  return (
    <div>
        {wishlistState.map((item) => {
            return <WishlistItem product = {item} key={item.id}/>;
        })}
    </div>
  )
}

export default Wishlist