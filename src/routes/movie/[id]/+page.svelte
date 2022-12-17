<script>
	import { fly } from 'svelte/transition';
	export let data;
	export const { movie } = data.props;
	
  
</script>

<div
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
	class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8"
>
	<!-- Movie image -->
	<div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-span-2 lg:self-center">
		<div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt=""
				class="w-full h-full object-center object-cover"
			/>
		</div>
	</div>

	<!-- Movie details -->
	<div class="lg:max-w-lg lg:self-end ">
		<div class="mt-4">
			<h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{movie.title}</h1>
		</div>

		<div class="flex mt-6 mb-3 gap-2">
			{#each movie.genres as genre}
				<button class="btn btn-xs lowercase">{genre.name}</button>
			{/each}
		</div>
		<section aria-labelledby="information-heading" class="mt-4">
			<div class="flex items-center">
				<div class="rating items-center rating-sm mt-3 mb-3 gap-3">
					<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400 " checked />
					<p class="text-lg  sm:text-xl">{movie.vote_average}</p>
				</div>
				<div class="ml-4 pl-4 border-l border-gray-300">
					<div class="flex items-center">
						<p class="ml-2 text-sm text-gray-500">{movie.vote_count} reviews</p>
					</div>
				</div>
			</div>

			<div class="mt-4 space-y-6">
				<p class="text-base text-gray-500">
					{movie.overview}
				</p>
			</div>

			<div class="mt-6 flex items-center">
				<!-- Heroicon name: solid/check -->
				<svg
					class="flex-shrink-0 w-5 h-5 text-green-500"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<p class="ml-2 text-sm ">{movie.status}</p>
				<p class="ml-2 text-sm ">{movie.release_date}</p>
			</div>
		</section>
	</div>
	<!-- Product form -->
	<div class="mt-10 lg:max-w-lg lg:col-start-2 lg:row-start-2 lg:self-start">
		<section aria-labelledby="options-heading">
			<form>
				<div class="mt-10">
					<button
						type="submit"
						class="w-full btn btn-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-secondary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
						>Book Ticket</button
					>
				</div>
				<div class="mt-4">
					<a
						href="/"
						type="submit"
						class="w-full  btn py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
						>Back Home</a
					>
				</div>
			</form>
		</section>
	</div>
</div>
