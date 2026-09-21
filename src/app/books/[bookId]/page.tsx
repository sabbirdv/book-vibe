import Image from "next/image";
import type Ibooks from "../../type/bookType";
import { FaStar } from "react-icons/fa6";
import { Suspense } from "react";
import ReadButton from "../../components/booksDetails/ReadButton";
import WishListButton from "../../components/booksDetails/WishListButton";

interface IbooksDetailsProps{
    params : Promise<{
        bookId: string;
    }>
}


const getBooks = async()=>{
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
}

const BookDetailsPage =async ({params}:IbooksDetailsProps) => {
    const {bookId} = await params
    const booksData = await getBooks()

    const book = booksData.find((book:Ibooks)=>{
                    return String(book.bookId) === String(bookId)
                })
            
    return (
        <div className=" constiner mx-auto px-17 py-20">

        <Suspense fallback={<h1 className="text-center my-10 text-gray-700 font-bold text-3xl">Loading...</h1>}>
            <div className="card lg:card-side w-full bg-base-100 border border-base-200 shadow-sm overflow-hidden">

                    <figure className="lg:w-1/2 w-full h-100 p-4">
                        <Image
                        src={book.image}
                        alt={book.bookName}
                        width={500}
                        height={600}
                        className=" object-cover  rounded-xl"
                        />
                    </figure>

            <div className="card-body lg:w-1/2">

                <div className="flex justify-between items-center">
                <span className="badge badge-primary badge-outline">
                    {book.category}
                </span>

                <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{book.rating}</span>
                </div>
                </div>

                <h2 className="card-title text-2xl">
                {book.bookName}
                </h2>

                <p className="text-sm text-base-content/60">
                By {book.author}
                </p>

                <p className="text-sm text-base-content/70 line-clamp-3">
                {book.review}
                </p>

                <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                    <span key={tag} className="badge badge-ghost">
                    #{tag}
                    </span>
                ))}
                </div>

                <div className="grid grid-cols-3 gap-3 border-y border-base-200 py-3">
                <div>
                    <p className="text-xs text-base-content/50">Pages</p>
                    <p className="font-semibold">{book.totalPages}</p>
                </div>

                <div>
                    <p className="text-xs text-base-content/50">Published</p>
                    <p className="font-semibold">{book.yearOfPublishing}</p>
                </div>

                <div>
                    <p className="text-xs text-base-content/50">Publisher</p>
                    <p className="font-semibold truncate">{book.publisher}</p>
                </div>
                </div>

                <div className="card-actions flex gap-4 items-center justify-end mt-auto">
                    <ReadButton book={book} />
                    <WishListButton book={book} />
                </div>

            </div>
            </div>
        </Suspense>

  
        </div>
    );
};

export default BookDetailsPage;