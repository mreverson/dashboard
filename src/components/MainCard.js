import React from "react";
import Tabs from "./Tabs";
import {
	SearchIcon 
} from "@heroicons/react/outline";
import MessageList from "./MessageList";

function MainCard() {
	return (
		<div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 mt-4 ">
			<div className="px-4 py-5 sm:px-6">
				{/* Content goes here */}
				<Tabs />
				{/* We use less vertical padding on card headers on desktop than on body sections */}
			</div>
			<div className="flex">
				<section
					aria-labelledby="primary-heading"
					className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
				>
					{/* Your content */}
					
				</section>

				{/* Secondary column (hidden on smaller screens) */}
				<aside className="lg:block lg:order-first ">
					<div className="relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-scroll">
						{/* Your content */}
						<div className="mx-3 my-2 relative rounded-md shadow-sm">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<SearchIcon
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</div>
							<input
								type="text"
								name="email"
								id="email"
								className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
								placeholder="you@example.com"
							/>
							
						</div>
						<div className="mx-3 my-2 relative">
							<MessageList />
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
}

export default MainCard;
