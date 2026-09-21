'use client'
import { useContext } from "react";
import { BooksContext } from "../contex/BooksContex";


const ListedBooks = () => {

    const {readBooks , wishList} = useContext(BooksContext)
    console.log(readBooks, wishList);

    return (
        <div>
            <h1>listed books </h1>
            <p>Total Read books {readBooks.length}</p>
            <p>Total Wishlist books {wishList.length}</p>
        </div>
    );
};

export default ListedBooks;