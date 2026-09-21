'use client'
import { useState, type ReactNode } from "react";
import { createContext } from "react";
import type Ibooks from "../type/bookType";

interface BooksContextType {
    readBooks: Ibooks[];
    setReadBooks: React.Dispatch<React.SetStateAction<Ibooks[]>>;
    wishList: Ibooks[];
    setWishList: React.Dispatch<React.SetStateAction<Ibooks[]>>;
}

export const BooksContext = createContext<BooksContextType>({
    readBooks: [],
    setReadBooks: () => {},
    wishList: [],
    setWishList: () => {},
})

const BooksProvider =({ children } : {children : ReactNode}) => {

    const [readBooks, setReadBooks] = useState<Ibooks[]>([]);
    const [wishList, setWishList] = useState<Ibooks[]>([]);

    const sheardBoooks = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    }

    return <BooksContext.Provider value={sheardBoooks}>{ children }</BooksContext.Provider>
};

export default BooksProvider;