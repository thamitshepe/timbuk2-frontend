import React, { useState, ReactNode } from 'react';
import Sidebar from '../components/Sidebar/index';
import Header from '../components/Header/index';

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="no-scrollbar dark:bg-boxdark-2 dark:text-bodydark"  style = {{ height: '100%'}}>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex flex-col h-screen bg-gray overflow-hidden" style = {{ height: '100%'}}>
        {/* Adjust here: Make the main layout a flex row to include both sidebars and the content area including the header */}
        <div className="flex flex-1 min-h-0">
          {/* <!-- ===== Sidebar Start ===== --> */}
          {/* Render the Sidebar component and pass handleSportSelection and selectedSport as props */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* Wrap Header and Main Content in a flex column */}
          <div className="flex flex-col flex-1 bg-gray" style={{ height: '100%' }}>
            {/* Adjust here: Make the main content a flex container */}
            <div className="flex flex-1" style={{ height: '100%' }}>
              {/* <!-- Main Content Start --> */}
              <main className="flex-1 relative" style={{ padding: '14px', paddingLeft: '0px', Height: '100%' }}>
                <div className="mx-auto p-8 bg-white  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray scrollbar-track-transparent scrollbar-thumb-rounded-full" style={{ borderRadius: '18px', height: '100%', border: '#EFF0F1 solid 2px', paddingLeft: '20px', paddingRight: '20px' }}>
                 <Header />
                  {children}
                </div>
              </main>
              {/* <!-- Main Content End --> */}
            </div>
          </div>
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
