export async function load({ fetch, params }) {
	// console.log(params);
	const res = await fetch(
		`
            https://api.themoviedb.org/3/search/movie?api_key=${
							import.meta.env.VITE_API
						}&language=en-US&query=${params.query}&page=1&include_adult=false`
	);
	const data = await res.json();
	// console.log(data);

	if (res.ok) {
		return {
			props: {
				search: data.results
			}
		};
	}
}
