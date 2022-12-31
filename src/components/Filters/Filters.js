import './filters.scss';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';

const Filters = ({ setDaysFilter }) => {
	const allFilters = [
		{ name: '3 days', active: true, id: uuid(), daysFilter: 3 },
		{ name: '7 days', active: false, id: uuid(), daysFilter: 7 },
		{ name: '30 days', active: false, id: uuid(), daysFilter: 30 },
	];
	const [filters, setFilters] = useState(allFilters);

	let filterClasses;
	const result = filters.map(filter => {
		if (filter.active) {
			filterClasses = "filters__filter filters__filter_active";
		} else {
			filterClasses = "filters__filter";
		};

		return (
			<button
				className={filterClasses}
				key={filter.id}
				onClick={() => { onChangeProp(filter.id); setDaysFilter(filter.daysFilter) }}>
				{filter.name}
			</button>
		);
	});

	function onChangeProp(id) {
		const newFilters = filters.map(filter => {
			if (filter.id === id) {
				return { ...filter, ['active']: true };
			};

			return { ...filter, ['active']: false };
		});
		setFilters(newFilters);
	};

	return (
		<div className="filters">
			{result}
		</div>
	);
};

export default Filters;


