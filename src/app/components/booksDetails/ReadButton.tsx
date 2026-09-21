'use client'

import { useContext } from "react";
import type Ibooks from "../../type/bookType";
import { BooksContext } from "../../contex/BooksContex";




const ReadButton = ({ book }:{book:Ibooks}) => {


    const {readBooks, setReadBooks} = useContext(BooksContext)

    const isSelected = readBooks.some((readBook:Ibooks) => readBook.bookId === book.bookId);

    const handleReadBook = () => {
        if (isSelected) {
            alert("This book is already in the read list.");
            return;
        }else{
            alert("Succesfuly added to the read list.")
            setReadBooks([...readBooks, book])
        }
    }


    return (
        <button className="btn btn-info"
        onClick={()=>{handleReadBook()}}>
                    Read
        </button>
    );
};

export default ReadButton;