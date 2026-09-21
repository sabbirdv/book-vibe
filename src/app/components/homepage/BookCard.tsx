import Image from "next/image";
import { FaStar } from "react-icons/fa";
import type Ibooks from "../../type/bookType";
import Link from "next/link";



const BookCard = ({ book }: { book: Ibooks }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative m-3 overflow-hidden rounded-xl bg-base-200">
        <Image
          src={book.image}
          alt={book.bookName}
          width={400}
          height={500}
          className="h-64 w-full object-cover transition-transform duration-500 "
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur">
          <FaStar className="text-yellow-400" />
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 p-4">

        <div>
          <h2 className="line-clamp-1 text-lg font-bold">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-base-content/60">
            by {book.author}
          </p>
        </div>

        {/* Review */}
        <p className="line-clamp-2 text-sm leading-6 text-base-content/70">
          {book.review}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-base-200 px-2.5 py-1 text-xs text-base-content/70"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book info */}
        <div className="grid grid-cols-2 gap-2 border-y border-base-200 py-3 text-xs">
          <div>
            <p className="text-base-content/50">Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-base-content/50">Published</p>
            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-base-content/50">Publisher</p>
            <p className="truncate font-semibold">{book.publisher}</p>
          </div>

          <div>
            <p className="text-base-content/50">Category</p>
            <p className="font-semibold">{book.category}</p>
          </div>
        </div>

        {/* Button */}
        <Link href={`books/${book.bookId}`} className="btn btn-primary w-full rounded-xl">
          View Details
        </Link>

      </div>
    </div>
  );
};

export default BookCard;