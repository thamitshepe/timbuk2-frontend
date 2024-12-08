import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import user from '../../images/icons/AG.png';
import home from '../../images/icons/home.png';
import settings from '../../images/icons/settings.png';
import storefront from '../../images/icons/storefront.png';
import support_agent from '../../images/icons/support_agent.png';
import vibration from '../../images/icons/vibration.png';
import type from '../../images/icons/type.png';
import auto_graph from '../../images/icons/auto_graph.png';

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(true);  
  const [selectedMenu, setSelectedMenu] = useState('Home');

  // Function to handle menu item click and set the selected item
  const handleMenuItemClick = (menu) => {
    setSelectedMenu(menu);
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  useEffect(() => {
    if (sidebarExpanded) {
      document.body.classList.add("sidebar-expanded");
    } else {
      document.body.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  useEffect(() => {
    // Simulate a 3-second loading skeleton on page load
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <aside
      className={`relative left-0 top-0 z-9999 flex flex-col overflow-hidden bg-gray`}
      style={{ height: '90%' }}
    >
      <div
        className={`relative bg-white duration-150 ease-linear ${sidebarExpanded ? 'w-80' : 'w-30 sidebar-collapsed'}`}
        style={{ borderRadius: '18px', margin: '14px', minHeight: '-webkit-fill-available', border: '#EFF0F1 solid 2px', alignSelf: 'center' }}
      >
        <button
          className={`menu-arrow duration-200 hover:scale-125 active:scale-100 ${sidebarExpanded ? "rotate-0" : "rotate-180"}`}
          onClick={toggleSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="35px" viewBox="0 0 24 24" className="stroke-black">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
          </svg>
        </button>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent scrollbar-thumb-rounded-full" style={{ maxHeight: '100%' }}>
          <nav className="flex-grow mt-5 mb-4 py-4 px-6">
            <div>
              <ul className="mb-2 flex flex-col gap-3.5">
                <li className="relative">
                  <NavLink to="#" className={`group relative flex items-center rounded-sm p-0 mb-3 duration-300 ease-in-out`}>
                    <div className="flex items-center gap-2 mb-8">
                      {/* User Avatar with Skeleton */}
                      <div className="icon-container">
                        {isLoading ? (
                          <Skeleton circle width={70} height={70} />
                        ) : (
                          <img
                            src={user} // Use the imported PNG icon
                            alt="user avatar"
                            className="user-icon"
                          />
                        )}
                      </div>
                      <span className={`user-title ${sidebarExpanded ? "block" : "hidden"} text-lg text-bodydark1 duration-300 ease-in-out`}>
                        {isLoading ? <Skeleton width={180} /> : 'AGoodCompany'}
                      </span>
                    </div>
                  </NavLink>
                </li>

                {/* Search Input with Skeleton */}
                  {isLoading ? (
                        <Skeleton height={60} width="100%" borderRadius={5} />
                      ) : (
                        <>
                <li className="relative mt-4">
                  <div className="group search">
                      <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 3.75C6.77208 3.75 3.75 6.77208 3.75 10.5C3.75 14.2279 6.77208 17.25 10.5 17.25C12.3642 17.25 14.0506 16.4953 15.273 15.273C16.4953 14.0506 17.25 12.3642 17.25 10.5C17.25 6.77208 14.2279 3.75 10.5 3.75ZM2.25 10.5C2.25 5.94365 5.94365 2.25 10.5 2.25C15.0563 2.25 18.75 5.94365 18.75 10.5C18.75 12.5078 18.032 14.3491 16.8399 15.7793L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.7793 16.8399C14.3491 18.032 12.5078 18.75 10.5 18.75C5.94365 18.75 2.25 15.0563 2.25 10.5Z" fill="#656D76" />
                      </svg>
                      <input
                        id="query"
                        className="input"
                        type="search"
                        placeholder={sidebarExpanded ? "Search" : ""}
                        name="searchbar"
                      />
                  </div>
                </li>
                </>
                )}

                {/* Map over menu items */}
                {['Home', 'Menu 1', 'Menu 2', 'Menu 3'].map((item, index) => (
                  <li
                    key={index}
                    className={`menu-group relative ${selectedMenu === item ? 'selected' : ''}`}
                    onClick={() => handleMenuItemClick(item)} // Set the clicked item as selected
                  >
                    <NavLink to="#" className={`group relative flex items-center rounded-sm p-0 duration-300 ease-in-out`}>
                      <div className="flex items-end">
                        {isLoading ? (
                          <Skeleton circle width={22} height={22} />
                        ) : (
                          <img
                            src={index === 0 ? home : (index === 1 ? vibration : (index === 2 ? storefront : auto_graph))}
                            alt="menu icon"
                            width={22}
                            height={22}
                            className="menu-icon"
                          />
                        )}
                        <span className={`menu-title ${sidebarExpanded ? 'block' : 'hidden'} text-lg text-bodydark1 duration-300 ease-in-out`}>
                          {isLoading ? <Skeleton width={200} /> : item}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                ))}

                {/* Gap before the feature card */}
                <div className="menu-gap" style={{ marginTop: '20px' }} />

                {/* Settings and Support menu items */}
                {['Settings', 'Support'].map((item, index) => (
                  <li
                    key={index}
                    className={`menu-group relative ${selectedMenu === item ? 'selected' : ''}`}
                    onClick={() => handleMenuItemClick(item)} // Set the clicked item as selected
                  >
                    <NavLink to="#" className={`group relative flex items-center rounded-sm p-0 duration-300 ease-in-out`}>
                      <div className="flex items-end">
                        {isLoading ? (
                          <Skeleton circle width={22} height={22} />
                        ) : (
                          <img
                            src={item === 'Settings' ? settings : support_agent}
                            alt="menu icon"
                            width={22}
                            height={22}
                            className="menu-icon"
                          />
                        )}
                        <span className={`menu-title ${sidebarExpanded ? 'block' : 'hidden'} text-lg text-bodydark1 duration-300 ease-in-out`}>
                          {isLoading ? <Skeleton width={200} /> : item}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                ))}

                {/* Card Image with Skeleton */}
                <div className={`${sidebarExpanded ? 'flex' : 'hidden'} feature`}>
                  <div className={`relative card`}>
                    <div className="content">
                      <span className="card-title">
                        {isLoading ? <Skeleton width={150} /> : 'Feature available now!'}
                      </span>
                      <div className="desc">
                        {isLoading ? <Skeleton width={230} /> : 'Check out the new dashboard view. Pages now load faster'}
                      </div>
                      <div className="card-image">
                        {isLoading ? (
                          <Skeleton width="100%" height={100} borderRadius={8} />
                        ) : (
                          <img
                            src={type}
                            className="new-feature-image"
                            style={{ transform: 'scale(1)' }}
                          />
                        )}
                      </div>
                    </div>
                    <button type="button" className="close">
                      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
