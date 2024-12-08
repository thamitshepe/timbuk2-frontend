import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton loader

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state with a timeout
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className={`relative top-0 z-999 bg-06264D dark:bg-06264D transition-opacity`} style={{ width: '100%' }}>
      <div className="flex items-center justify-between">
        <ul className="header-link flex items-center">
          <li>
            {isLoading ? (
              <Skeleton width={120} height={10} /> // Skeleton for "Your Items"
            ) : (
              'Your Items'
            )}
          </li>
        </ul>
        <div className="ml-auto flex items-center">
          {isLoading ? (
            // Two circles side by side for "Show All"
            <>
              <Skeleton circle width={20} height={20} className="mr-2" />
              <Skeleton circle width={20} height={20} />
            </>
          ) : (
            <span className="header-right">Show All</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
