<script>
	let inputValue = '';
	let active = false;
	import { goto } from '$app/navigation';

	// function onSearch(e) {
	// 	e.preventDefault();
	// 	if (inputValue.length > 0) {
	// 		goto(`/search/${inputValue}`)
	// 	}
	// }

	function onSearch(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (inputValue.length > 0) {
				goto(`/search/${inputValue}`);
			}
		}

		return false;
	}
</script>

<div class="container mx-auto">
	<div class="navbar border-b-2 border-opacity-10 border-cyan-100 bg-base-100">
		<div class="flex-1">
			<a href="/#" class="btn btn-ghost normal-case text-xl">MovieDb</a>
		</div>
		<div class="flex-none gap-2">
			<div class="form-control">
				<input
					on:keypress={onSearch}
					on:focus={() => (active = true)}
					bind:value={inputValue}
					type="text"
					placeholder="Search"
					class="input input-bordered focus:placeholder:sr-only"
				/>
			</div>
		</div>
	</div>
</div>
