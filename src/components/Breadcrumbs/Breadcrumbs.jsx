import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the pathname to get the breadcrumb paths
  const paths = location.pathname.split('/').filter(path => path);

  return (
    <nav className="text-sm text-gray-600">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        {paths.map((path, index) => {
          // Create the route for each breadcrumb item
          const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
          
          return (
            <li key={index} className="flex items-center space-x-2">
              <span>&gt;&gt;</span>
              <Link to={routeTo} className="hover:underline capitalize">
                {path.replace("-", " ")}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
