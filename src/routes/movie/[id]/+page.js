export async function load({ fetch, params }) {
	// console.log(params.id);
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
			import.meta.env.VITE_API
		}&language=en-US`
	);
	const data = await res.json();
	// console.log(data);

	if (res.ok) {
		return {
			props: {
				movie: data
			}
		};
	}
}
