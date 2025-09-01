<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Home from "./home/home.svelte";

	let { children } = $props();
</script>
    <p id="appwrite">Powered by <span class="highlight">Appwrite</span></p>
<header>
	<a href="/">AIVIS</a>

	<div>
		<a href="/login">Login</a>
		<a href="/signup">Signup</a>
	</div>
</header>
<a href="/visualizeArea">Visualize Area</a>
{@render children?.()}

<!-- <footer id="footer">
	<p>© 2025 AI/ML/DL/LLM/AGENTS Visualizer. All rights reserved.</p>
</footer> -->

<style>
	#footer {
		background-color: rgb(0, 0, 0);
		padding: 20px;
		text-align: center;
		color: #ffffff;
	}
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: black;
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
		padding: 16px;
		color: white;
		font-family: Roboto;
	}
	header a {
		color: white;
		text-decoration: none;
		font-size: 24px;
		font-weight: bold;
	}
	header div  a {
		margin-left: 20px;
		font-size: 16px;
	}
	header div  a:hover {
		text-decoration: underline;
		opacity: 0.8;
	}
	  #appwrite {
        position: fixed;
        bottom: 10px;
        right: 10px;
        font-size: 12px;
        color: rgb(150, 150, 150);
    }
</style>
