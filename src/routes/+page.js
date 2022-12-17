// @ts-nocheck
/** @type {import('./$types').PageLoad} */

export async function load({ data }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${
			import.meta.env.VITE_API
		}&language=en-US&page=1`
	);
	const popular = await res.json();
	return popular;
}
