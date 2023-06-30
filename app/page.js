import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Product Database</h1>
      <p className="text-lg text-gray-600 mb-8">Explore our wide range of products.</p>

      <div className="flex justify-center">
        <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            View Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
