<script>
	let { activePage = 'home' } = $props();

	const navItems = [
		{ name: 'Home', href: '#' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'About', href: '#about' },
		{ name: 'Contact', href: '#contact' }
	];
</script>

<header class="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
	<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
		
		<div class="flex items-center gap-2">
			<div class="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse"></div>
			<span class="text-white font-black tracking-tighter text-xl uppercase">
				Daniel<span class="text-[#00D1FF]">.</span>Amund
			</span>
		</div>

		<nav class="hidden md:flex items-center gap-8">
			{#each navItems as item}
				<a 
					href={item.href} 
					class="text-xs uppercase tracking-widest font-bold transition-colors hover:text-[#00D1FF] 
					{activePage === item.name.toLowerCase() ? 'text-[#00D1FF]' : 'text-gray-400'}"
				>
					{item.name}
				</a>
			{/each}
		</nav>

		<div>
			<button class="border border-[#00D1FF] text-[#00D1FF] text-[10px] font-bold px-4 py-2 uppercase tracking-[0.2em] hover:bg-[#00D1FF] hover:text-black transition-all duration-300">
				Resume
			</button>
		</div>

	</div>
</header>