// Contact Page

import type { RichText } from './contentful';

export interface ContactProps {
	title: string;
	body: RichText;
}

export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}
