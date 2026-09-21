'use client'
import { useContext } from "react";
import type Ibooks from "../../type/bookType";
import { BooksContext } from "../../contex/BooksContex";

const WishListButton = ({ book }:{book:Ibooks}) => {

    const {wishList, setWishList} = useContext(BooksContext)


    const isSelected = wishList.some((wishList:Ibooks) => wishList.bookId === book.bookId);

    const handleWishLis = () => {
        if(isSelected) {
            alert("This book is already in the whitelist.");
            return;
        }else{
            setWishList([...wishList, book])
            alert("Succesfuly added to the whitelist.")
        }
    }
    return (
        <button className="btn btn-warning" onClick={()=>handleWishLis()}>
                    Wishlist
        </button>
    );
};

export default WishListButton;