<script>
    import { fade, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { page } from '$app/stores';

    const projects = [
        { title: 'SVG Icon Generator', desc: 'Dynamic SVG icon generator with live preview.', tech: ['SvelteKit', 'TypeScript'], link: '#' },
        { title: 'Todo App', desc: 'Full-stack Todo app with SQLite integration.', tech: ['Hono', 'SQLite', 'Drizzle'], link: '#' },
        { title: 'Cloud Dashboard', desc: 'Real-time infrastructure monitoring tool.', tech: ['TypeScript', 'Vercel'], link: '#' }
    ];

    let activeFilter = $state('All');
    const allTech = ['All', ...new Set(projects.flatMap(p => p.tech))];

    const filteredProjects = $derived(
        activeFilter === 'All' ? projects : projects.filter(p => p.tech.includes(activeFilter))
    );
</script>

<header class="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
    <nav class="flex items-center justify-between h-20 px-[10%] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <div class="text-white font-extrabold tracking-widest text-xl uppercase">DANIEL.COM</div>
        
        <ul class="hidden md:flex items-center space-x-10">
            <li><a href="/" class="relative text-sm font-medium transition-colors group {$page.url.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}">Home<span class="absolute -bottom-2 left-0 h-[2px] bg-[#00f2ff] transition-all duration-300 {$page.url.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}"></span></a></li>
            <li><a href="/projects" class="relative text-sm font-medium transition-colors group {$page.url.pathname === '/projects' ? 'text-white' : 'text-gray-400 hover:text-white'}">Projects<span class="absolute -bottom-2 left-0 h-[2px] bg-[#00f2ff] transition-all duration-300 {$page.url.pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'}"></span></a></li>
            <li><a href="/about" class="relative text-sm font-medium transition-colors group {$page.url.pathname === '/about' ? 'text-white' : 'text-gray-400 hover:text-white'}">About<span class="absolute -bottom-2 left-0 h-[2px] bg-[#00f2ff] transition-all duration-300 {$page.url.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}"></span></a></li>
            <li><a href="/contact" class="relative text-sm font-medium transition-colors group {$page.url.pathname === '/contact' ? 'text-white' : 'text-gray-400 hover:text-white'}">Contact<span class="absolute -bottom-2 left-0 h-[2px] bg-[#00f2ff] transition-all duration-300 {$page.url.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}"></span></a></li>
        </ul>

        <button class="bg-[#00D1FF] text-black px-6 py-2 rounded-sm font-bold text-sm hover:shadow-[0_0_20px_rgba(0,242,255,0.6)]">Resume</button>
    </nav>
</header>

<main class="max-w-6xl mx-auto px-6 pt-40 pb-20">
    <section id="projects" class="mt-20">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
                <h2 class="text-3xl font-black tracking-tighter uppercase italic">Project Gallery</h2>
                <p class="text-gray-500 font-mono text-xs mt-1">Filtered by: <span class="text-[#00D1FF]">{activeFilter}</span></p>
            </div>
            <div class="flex flex-wrap gap-2">
                {#each allTech as tech}
                    <button onclick={() => activeFilter = tech} class="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase border transition-all {activeFilter === tech ? 'bg-[#00D1FF] border-[#00D1FF] text-black' : 'border-white/10 text-gray-500 hover:text-white'}">{tech}</button>
                {/each}
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each filteredProjects as project (project.title)}
                <div in:scale={{ duration: 400, start: 0.95, easing: quintOut }} out:fade={{ duration: 200 }} class="group relative bg-[#0C0C0C] border border-white/5 p-8 transition-all hover:border-[#00D1FF]/40">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-[#00D1FF]">{project.title}</h3>
                    <p class="text-gray-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
                    <div class="flex flex-wrap gap-2 mb-8">
                        {#each project.tech as t}
                            <span class="text-[9px] font-mono text-[#00D1FF] bg-[#00D1FF]/5 border border-[#00D1FF]/20 px-2 py-1 rounded-sm">{t}</span>
                        {/each}
                    </div>
                    <a href={project.link} class="text-xs font-bold tracking-widest uppercase text-white hover:text-[#00D1FF]">View Case Study →</a>
                </div>
            {/each}
        </div>
    </section>
</main>