<script>
    import { fly, fade, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { page } from '$app/stores';

    // 1. Project Data - Matching your "Neural Arch" screenshot categories
    const projects = [
        { 
            title: 'NEURAL.ARCH', 
            category: 'Real-world Apps',
            desc: 'A high-performance neural network visualizer designed for real-time inference monitoring.', 
            tech: ['Svelte 5', 'Three.js', 'WebWorker'],
            link: '/projects/neural-arch' 
        },
        { 
            title: 'OS_CORE_LIB', 
            category: 'Open Source',
            desc: 'A headless UI component library built for rapid prototyping of complex industrial dashboards.', 
            tech: ['TypeScript', 'Tailwind', 'Runes'],
            link: '/projects/os-core' 
        }
    ];

    // 2. Runes for State Management
    let activeTab = $state('All Projects');
    let ready = $state(false);

    const tabs = ['All Projects', 'Client Work', 'Real-world Apps', 'Open Source', 'Labs & R&D'];

    // Filter logic using Runes
    const filteredProjects = $derived(
        activeTab === 'All Projects' 
            ? projects 
            : projects.filter(p => p.category === activeTab)
    );

    $effect(() => {
        ready = true;
    });
</script>

<header class="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
    <nav class="flex items-center justify-between h-20 px-[10%] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div class="text-white font-extrabold tracking-widest text-xl uppercase">DANIEL.COM</div>
        
        <ul class="hidden md:flex items-center space-x-10">
            <li>
                <a href="/" class="relative text-sm font-medium transition-colors group {$page.url.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}">
                    Home
                    <span class="absolute -bottom-2 left-0 h-[2px] bg-[#00f2ff] shadow-[0_0_10px_#00f2ff] transition-all duration-300 {$page.url.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}"></span>
                </a>
            </li>
            <li>
                 <a href="/projects" class="relative text-sm font-medium transition-colors group {$page.url.pathname === '/projects' ? 'text-white' : 'text-gray-400 hover:text-white'}">
                    Projects
                    <span class="absolute -bottom-2 left-0 h-[2px] bg-[#00f2ff] shadow-[0_0_10px_#00f2ff] transition-all duration-300 {$page.url.pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'}"></span>
                </a>
            </li>
            <li>
                <a href="/about" class="relative text-sm font-medium transition-colors group {$page.url.pathname === '/projects' ? 'text-white' : 'text-gray-400 hover:text-white'}">
                    About 
                </a>
            </li>
            <li>
                 <a href="/contacts" class="relative text-sm font-medium transition-colors group {$page.url.pathname === '/projects' ? 'text-white' : 'text-gray-400 hover:text-white'}">
                    Contact
                </a>
            </li>
            </ul>

        <button class="bg-[#00D1FF] text-black px-6 py-2 rounded-sm font-bold text-sm hover:shadow-[0_0_20px_#00D1FF] transition-all">
            Resume
        </button>
    </nav>
</header>

<main class="max-w-7xl mx-auto px-6 pt-40 pb-20">
    <header class="mb-16">
        <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-[1px] bg-gray-700"></div>
            <span class="text-gray-500 font-mono text-[10px] tracking-[0.3em] uppercase">Engineered Solutions</span>
        </div>
        <h1 class="text-5xl font-black tracking-tighter uppercase italic mb-4">Project Gallery</h1>
        <p class="text-gray-400 max-w-2xl text-sm leading-relaxed">
            A curated collection of technical explorations, high-performance systems, and refined digital interfaces built with a focus on code integrity and architectural precision.
        </p>
    </header>

    <div class="flex flex-wrap gap-8 border-b border-white/5 mb-12 pb-4">
        {#each tabs as tab}
            <button 
                onclick={() => activeTab = tab}
                class="text-[11px] font-bold tracking-widest uppercase transition-all relative pb-4
                {activeTab === tab ? 'text-[#00D1FF]' : 'text-gray-500 hover:text-white'}"
            >
                {tab}
                {#if activeTab === tab}
                    <div in:scale={{duration: 300}} class="absolute bottom-0 left-0 w-full h-[2px] bg-[#00D1FF] shadow-[0_0_10px_#00D1FF]"></div>
                {/if}
            </button>
        {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        {#if ready}
            {#each filteredProjects as project (project.title)}
                <div 
                    in:fly={{ y: 20, duration: 800, easing: quintOut }}
                    class="group relative bg-black border border-white/10 rounded-xl overflow-hidden hover:border-[#00D1FF]/30 transition-all duration-500"
                >
                    <div class="h-64 bg-[#0c0c0c] flex items-center justify-center overflow-hidden border-b border-white/5">
                        <div class="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div class="w-40 h-40 border border-[#00D1FF]/20 rounded-full flex items-center justify-center animate-pulse">
                            <div class="w-20 h-20 border border-[#00D1FF]/40 rounded-full flex items-center justify-center">
                                <div class="w-4 h-4 bg-[#00D1FF] rounded-full shadow-[0_0_15px_#00D1FF]"></div>
                            </div>
                        </div>
                    </div>

                    <div class="p-8">
                        <span class="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-3 block">{project.category}</span>
                        <h3 class="text-2xl font-bold mb-3 group-hover:text-[#00D1FF] transition-colors">{project.title}</h3>
                        <p class="text-sm text-gray-400 leading-relaxed mb-6 h-12 overflow-hidden">{project.desc}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-8">
                            {#each project.tech as t}
                                <span class="text-[10px] bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/5 font-mono">{t}</span>
                            {/each}
                        </div>

                        <div class="flex justify-between items-center">
                            <a href={project.link} class="text-xs font-bold tracking-widest uppercase border border-white/10 px-4 py-2 hover:bg-white hover:text-black transition-all">Case Study</a>
                            <a href="/" class="text-xs font-bold tracking-widest uppercase text-[#00D1FF] hover:underline">Code</a>
                        </div>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</main>

<style>
    :global(body) {
        background-color: #0a0a0a;
        color: white;
        font-family: 'Inter', sans-serif;
    }
</style>