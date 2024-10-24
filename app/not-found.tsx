import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          페이지가 존재하지 않습니다.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
