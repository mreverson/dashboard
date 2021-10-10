import React from "react";

const tabs = [
	{ name: "All Messages", href: "#", current: true, notification: true },
	{ name: "Messenger", href: "#", current: false, notification: false },
	{ name: "IG Direct", href: "#", current: false, notification: true },
	{ name: "FB Comments", href: "#", current: false, notification: false },
	{ name: "IG Comments", href: "#", current: false, notification: false },
	{ name: "Chat Plugin", href: "#", current: false, notification: false },
];

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

function Tabs() {
	return (
		<div>
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				{/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
				<select
					id="tabs"
					name="tabs"
					className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
					defaultValue={tabs.find((tab) => tab.current).name}
				>
					{tabs.map((tab) => (
						<option key={tab.name}>{tab.name}</option>
					))}
				</select>
			</div>
			<div className="hidden sm:block">
				<nav className="flex space-x-4" aria-label="Tabs">
					{tabs.map((tab) => (
						<a
							key={tab.name}
							href={tab.href}
							className={classNames(
								tab.current
									? "bg-indigo-100 text-indigo-700"
									: "text-gray-500 hover:text-gray-700",
								"px-3 py-2 font-medium text-sm rounded-md"
							)}
							aria-current={tab.current ? "page" : undefined}
						>
							{tab.name} 
							{tab.notification ? <span className="rounded-full bg-red-500 text-white text-xs px-2 py-1 ml-3">1</span> : <span />}
							
						</a>
					))}
				</nav>
			</div>
		</div>
	);
}

export default Tabs;
