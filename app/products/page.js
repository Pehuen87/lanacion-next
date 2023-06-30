import SearchForm from "./searchForm";

const fetchProducts = ({ pageNumber, itemsPerPage, description, product_name }) => {
    return fetch(`http://localhost:3030/products/?pageNumber=${pageNumber}&itemsPerPage=${itemsPerPage}` + (product_name ? '&product_name=' + product_name : '') + (description ? '&description=' + description : ''), { cache: "no-store" })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error retrieving products");
            }
            return res.json();
        })
        .catch((error) => {
            return false;
        })
};

export default async function Product({ searchParams }) {

    const products = await fetchProducts({ pageNumber: 1, itemsPerPage: 1000, description: searchParams.description, product_name: searchParams.product_name });


    return (
        <main className="container mx-auto px-4 font-sans">
            <div className="mt-8">
                <SearchForm />
                {(!products || products.length === 0) ? (
                    <p className="font-bold text-2xl mb-2 text-orange-950">No products Found</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <li key={product.id} className="bg-white p-4 rounded-lg shadow">
                                <p className="font-bold text-2xl mb-2 text-orange-950">{product.product_name}</p>
                                <p className="text-amber-900 mb-2 ml-1">{product.description}</p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Price:</span> {product.price}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Category:</span> {product.category.category_name}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-bold">Category Description:</span> {product.category.description}
                                </p>
                                <label className="flex items-center mt-2">
                                    <span className="font-bold text-gray-600">Status:</span>
                                    <input
                                        type="checkbox"
                                        className="ml-2 form-checkbox h-5 w-5 text-blue-500"
                                        checked={product.status.status}
                                        disabled
                                    />
                                    <span className="text-gray-600">
                                    </span>
                                </label>
                                <p className="text-gray-600">
                                    <span className="font-bold">Status Description:</span> {product.status.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}