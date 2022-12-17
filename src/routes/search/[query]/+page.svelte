<script>
	export let data;
	export const { search } = data.props;
	console.log(search);
	function truncateString(str, num) {
		if (str.length <= num) {
			return str;
		}
		return str.slice(0, num) + '...';
	}
</script>

<div class="container mx-auto mt-6">
	<h1 class="mt-5 mb-16 text-6xl">Result Movie</h1>
	<div class="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
		{#each search as movie}
			<div class="card stretched-link card-compact w-84 bg-base-100 shadow-neutral shadow-md">
				<!-- svelte-ignore a11y-missing-content -->
				<a class="after:absolute after:inset-0" href="/movie/{movie.id}" />
				<figure>
					<img
						class="object-cover h-fit w-full"
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt="Shoes"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">{movie.title}</h2>
					<p>{truncateString(movie.overview, 100)}</p>
					<div class="rating  rating-sm mt-3 mb-3 gap-3">
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 " checked />
						<span>{movie.vote_average}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
