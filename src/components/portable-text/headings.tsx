import type React from "react";

interface Props {
	children: React.ReactNode;
}

export const HeadingOne = ({ children }: Props) => {
	return <h1 className="mb-8 text-5xl font-bold font-display">{children}</h1>;
};

export const HeadingTwo = ({ children }: Props) => {
	return (
		<h2 className="mb-10 text-4xl font-medium font-display">{children}</h2>
	);
};

export const HeadingThree = ({ children }: Props) => {
	return <h3 className="mb-8 text-3xl font-medium font-display">{children}</h3>;
};

export const HeadingFour = ({ children }: Props) => {
	return <h4 className="mb-6 text-2xl font-medium font-display">{children}</h4>;
};

export const HeadingFive = ({ children }: Props) => {
	return <h5 className="mb-4 text-xl font-medium font-display">{children}</h5>;
};

export const HeadingSix = ({ children }: Props) => {
	return <h6 className="mb-4 text-lg font-medium font-display">{children}</h6>;
};
