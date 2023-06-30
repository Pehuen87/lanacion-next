"use client"
import Link from "next/link";
import { useState } from "react";

export default function SearchForm() {
    const [searchName, setSearchName] = useState('');
    const [searchDesc, setSearchDesc] = useState('');

    const handleSearch = () => {

    };

    return <div className="flex mb-4">
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
        <Link
            className="px-4 rounded-r-lg bg-blue-500 text-white font-bold p-2 border-blue-700 border-t border-b border-r"
            href={'/products/?itemsPerPage=1000&pageNumber=1' + (searchName ? '&product_name=' + searchName : '') + (searchDesc ? '&description=' + searchDesc : '')}
        >
            Search
        </Link>
    </div>
}