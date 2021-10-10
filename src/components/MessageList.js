import React from "react";
import {
	UserCircleIcon,
} from '@heroicons/react/solid'
const people = [
	{
		name: "Lindsay Walton",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
		socialIcon: "/instagram.svg"
	},
	{
		name: "John Doe",
		socialIcon: "/instagram.svg"
	},
	
	// More people...
];
const activityItems = [
	{
		id: 1,
		person: people[0],
		time: "1h",
	},
	{
		id: 2,
		person: people[1],
		time: "1h",
	},
	{
		id: 3,
		person: people[0],
		time: "1h",
	},
	{
		id: 4,
		person: people[1],
		time: "1h",
	},
	{
		id: 5,
		person: people[1],
		time: "1h",
	},
	{
		id: 6,
		person: people[0],
		time: "1h",
	},
	{
		id: 7,
		person: people[1],
		time: "1h",
	},
	{
		id: 8,
		person: people[0],
		time: "1h",
	},
	{
		id: 9,
		person: people[0],
		time: "1h",
	},
	{
		id: 10,
		person: people[0],
		time: "1h",
	},
	// More items...
];

function MessageList() {
	return (
		<div>
			<ul className="divide-y divide-gray-200">
				{activityItems.map((activityItem) => (
					<li key={activityItem.id} className="py-4">
						<div className="flex space-x-3 items-center">
							<div className="relative">
								{activityItem.person.imageUrl ? (
								<img
									className="h-10 w-10 rounded-full"
									src={activityItem.person.imageUrl}
									alt=""
								/>) :
									<UserCircleIcon className="h-11 w-11 rounded-full text-gray-400" />
								}
								<span className="z-20 absolute bottom-0 left-5 block bg-white rounded-lg">
									<img
										className="h-5 w-5"
										src={activityItem.person.socialIcon}
										alt=""
									/>
								</span>
							</div>
							<div className="flex-1 space-y-1">
								<div className="flex items-center justify-between">
									<h3 className="text-sm font-medium">
										{activityItem.person.name}
									</h3>
									<p className="text-sm text-gray-500">
										{activityItem.time}
									</p>
								</div>
								<p className="text-sm text-gray-500">
								Lorem ipsum dolor sit amet, consectetur 
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MessageList;
