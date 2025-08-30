<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Home from './home/home.svelte';

	let { children } = $props();
</script>


{@render children?.()}


<footer id="footer">
	<p>© 2025 AI/ML/DL/LLM/AGENTS Visualizer. All rights reserved.</p>
</footer>
<style>
	#footer {
		background-color: rgb(0, 0, 0);
		padding: 20px;
		text-align: center;
		color: #ffffff;
	}
</style>