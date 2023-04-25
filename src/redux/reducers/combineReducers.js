import { combineReducers } from "redux";
import handleCart from "./cartReducer";
import handleWishList from "./wishListReducer";

const rootReducers = combineReducers({
    cart: handleCart,
    wishlist: handleWishList,
});

export default rootReducers
