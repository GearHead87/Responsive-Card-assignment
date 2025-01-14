'use client';
import Image, { ImageProps } from 'next/image';
import React, { useState, useEffect } from 'react';

interface ImageWithBlurProps extends Omit<ImageProps, 'src' | 'alt'> {
	name: string;
	image: string;
}

export const ImageWithBlur: React.FC<ImageWithBlurProps> = ({
	name,
	image,
	className,
	...props
}) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
	}, [image]);

	return (
		<div className="relative w-full h-full overflow-hidden">
			<Image
				src={image}
				alt={`${name} exterior view`}
				className={`
                            duration-500 ease-in-out
                            ${
								isLoading
									? 'scale-110 blur-2xl grayscale-50'
									: 'scale-100 blur-0 grayscale-0'
							}
                            ${className || ''}
        `}
				onLoadingComplete={() => setIsLoading(false)}
				placeholder="blur"
				blurDataURL="data:image/jpeg;base64,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"
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				{...props}
			/>
		</div>
	);
};

export default ImageWithBlur;
