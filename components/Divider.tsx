import React from 'react';

export const Divider: React.FC = ({ }) => {
	return (
		<div
			className={`my-4 md:mx-4 border-t md:border-l border-dashed border-zinc-600 hidden md:visible`}
		/>
	);
};

export default Divider;
