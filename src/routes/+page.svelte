<script lang="ts">
	import { onMount } from 'svelte';


    	import type { Customer } from '$lib/server/db';
	let storageReady = false;
	let customers: Customer[] = [];

	onMount(async () => {
    const {runQuery, runStorageQuery} = await import("$lib/sqlite/dataApi")
	const { waitTillStroageReady } = await import("$lib/sqlite/initStorages");

		await waitTillStroageReady('customers_v1');
		storageReady = true;
		customers = (await runStorageQuery('customers_v1', {
			orderByCol: 'contact',
			orderByDir: 'desc',
			searchTerm: 'Paul'
		})) as Customer[];
		console.log(customers);
	});
</script>

<h1 class="text-5xl text-teal-500">SvelteKit Offline SQLite</h1>

<div>
	Storage Ready: {storageReady ? 'true' : 'false'}
</div>

<div>
	{#each customers as customer}
		<div>
			{customer.company}: Contact: {customer.contact} - {customer.phone}
		</div>
	{/each}
</div>
