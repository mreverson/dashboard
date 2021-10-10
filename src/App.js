import React from "react";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="app">
				{/* SIGNUP/SIGNIN */}
			{/* IF USER */}

			<div className="h-screen overflow-hidden bg-gray-200 flex flex-col">
				<div className="min-h-0 flex-1 flex overflow-hidden">
					<Sidebar />
					<MainContainer />
				</div>
			
			</div>
			{/* SIDEBAR - 1 */}
		</div>
	);
}

export default App;
