
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
