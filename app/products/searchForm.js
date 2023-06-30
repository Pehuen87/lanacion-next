'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const itemsPerPage = 10;
  const router = useRouter();
  const [searchName, setSearchName] = useState("");
  const [searchDesc, setSearchDesc] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = () => {
    resetPage();
    router.push(searchURL());
  };

  const handleNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    router.push(searchURL());
  };

  const handlePreviousPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
    router.push(searchURL());
  };

  const resetPage = () => {
    setPageNumber(1);
  };

  const searchURL = () => {
    const queryParams = new URLSearchParams({
      itemsPerPage: itemsPerPage.toString(),
      pageNumber: pageNumber.toString(),
      product_name: searchName,
      description: searchDesc,
    }).toString();

    return `/products/?${queryParams}`;
  };

  return (
    <div className="flex mb-4">
      <input
        className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        type="text"
        placeholder="By Description"
        value={searchDesc}
        onChange={(e) => setSearchDesc(e.target.value)}
      />
      <input
        className="p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        type="text"
        placeholder="By Name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button
        className="px-4 rounded-r-lg bg-blue-500 text-white font-bold p-2 border-blue-700 border-t border-b border-r"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="flex ml-auto">
        <button
          className="px-4 rounded-l-lg bg-blue-400 text-white font-bold p-2 border-blue-700 border-t border-b border-r"
          onClick={handlePreviousPage}
        >
          Previous Page
        </button>
        <button
          className="px-4 rounded-r-lg bg-blue-400 text-white font-bold p-2 border-blue-700 border-t border-b border-r"
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}