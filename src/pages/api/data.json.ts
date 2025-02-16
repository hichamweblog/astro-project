import type { APIRoute } from "astro";
export interface Book {
	title: string;
	author: string;
	genre: string;
	date: string;
}
export const prerender = false;

export const GET: APIRoute = async () => {
	const data: Book[] = [
		{
			title: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
			genre: "Fiction",
			date: "1925",
		}, {
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
			genre: "Fiction",
			date: "1960",
		}, {
			title: "1984",
			author: "George Orwell",
			genre: "Science Fiction",
			date: "1949"
		}, {
			title: "Pride and Prejudice",
			author: "Jane Austen",
			genre: "Romance",
			date: "1813"
		}, {
			title: "The Catcher in the Rye",
			author: "J.D. Salinger",
			genre: "Fiction",
			date: "1951"
		}
	];

	return new Response(JSON.stringify(data), {
		headers: { "Content-Type": "application/json" }
	});
};