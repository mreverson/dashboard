import React from 'react'
import Select from "./Select";

import {
	ClockIcon,
	PuzzleIcon,
} from '@heroicons/react/outline'
import {
	CogIcon,
} from '@heroicons/react/solid'

function HeaderBar() {
	
	return (
		<div className="flex justify-between w-full">

			<div className="flex items-center">
				<h2 className="mx-2 text-lg font-medium border-r-2 border-gray-600 pr-5">Inbox</h2>
				<Select />
			</div>

			<div className="flex items-center">
				<button
					type="button"
					className="inline-flex items-center mx-2 px-3 py-2 border border-transparent text-sm leading-4 font-normal rounded-md shadow-md text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
				>
					<span className="flex relative items-center">
						<ClockIcon className="h-5 w-5 text-gray-900 mr-1"/> Available
						<span className="absolute bottom-0 left-3 block h-2 w-2 rounded-full  bg-green-400" />
					</span>
				</button>
				<button
					type="button"
					className="inline-flex items-center mx-2 px-3 py-2 border border-transparent text-sm leading-4 font-normal rounded-md shadow-md text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-400"
				>
					<PuzzleIcon className="h-5 w-5 text-gray-900 mr-1"/> Automated Responses
				</button>
				<button
					type="button"
					className="inline-flex items-center mx-2 px-3 py-2 border border-transparent text-sm leading-4 font-normal rounded-md shadow-md text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-400"
				>
					<CogIcon className="h-5 w-5 text-gray-900"/>
				</button>
			</div>
				
		</div>
	)
}

export default HeaderBar
