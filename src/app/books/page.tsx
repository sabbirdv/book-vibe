import { Suspense } from "react";
import BookCard from "../components/homepage/BookCard";
import type Ibooks from "../type/bookType";


const getBooks = async()=>{
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
}


const page = async() => {
    const booksData = await getBooks()
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-8'>Explore All Books</h1>
            <Suspense fallback={<h1 className="text-center my-10 text-gray-300 font-bold text-3xl">Loading...</h1>}>
                <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4">
                                {booksData.map((book:Ibooks,ind:string) => {
                                return <BookCard key={ind} book={book} />  } )}
                </div>
            </Suspense>
        </div>
    );
};

export default page;