import { useState } from 'react'
import HeaderBar from './HeaderBar'
import InfoSidebar from './InfoSidebar'
import MainCard from './MainCard'


function MainContainer() {
	return (
		<main className="min-w-0 flex-1 border-t border-gray-200 lg:flex mx-5 my-5">
          {/* Primary column */}
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 flex-1 h-full flex"
          >
           <div className="flex flex-col max-w-7xl w-full">
				<HeaderBar />
				<MainCard />
				{/* MAIN CARD */}
					
			</div>
			<div className="flex flex-7 max-w-xs w-full mx-3">
				<InfoSidebar />	
			</div>
          </section>

        </main>
	)
}

export default MainContainer
