<script>
	import '../style.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-[#060606] text-white font-sans selection:bg-[#00D1FF] selection:text-black">
	{@render children()}
</div>

<style>
	:global(body) {
		margin: 0;
		background: #333;
	}
</style>