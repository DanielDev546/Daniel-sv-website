<script>
    import { fly, fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    // Project Data
    const projects = [
        { 
            title: 'SVG Icon Generator', 
            desc: 'Dynamic SVG icon generator with live preview.', 
            tech: ['SvelteKit', 'TypeScript'],
            link: '#' 
        },
        { 
            title: 'Todo App', 
            desc: 'Full-stack Todo app with SQLite integration.', 
            tech: ['Hono', 'SQLite', 'Drizzle'],
            link: '#' 
        }
    ];

// 1. Move the navigation data here
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];


    // State for initial mount animation
    let mounted = $state(false);
    $effect(() => {
        mounted = true;
    });
</script>

<header class="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
    <nav class="flex items-center justify-between h-20 px-[10%] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
        <div class="text-white font-extrabold tracking-widest text-xl">
            DANIEL.COM
        </div>
        
        <ul class="hidden md:flex items-center space-x-10">
           {#each navItems as item}
                <li>
                    <a 
                        href={item.path} 
                        class="relative text-gray-400 text-sm font-medium hover:text-white transition-colors group"
                    >
                        {item.name}
                        <span class="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00f2ff] shadow-[0_0_10px_#00f2ff] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
            {/each}
        </ul>

        <div>
            <button class="bg-[#00D1FF] text-black px-6 py-2 rounded-sm font-bold text-sm hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] transition-all transform hover:-translate-y-1 active:scale-95">
                Resume
            </button>
        </div>
    </nav>
</header>

<main class="max-w-6xl mx-auto px-6 pt-40 pb-20 overflow-hidden">
    <div class="flex flex-col lg:flex-row gap-12 items-start">
        <section class="mb-32 flex-1">
            {#if mounted}
                <div in:fly={{ y: 20, duration: 800, delay: 200, easing: quintOut }}>
                    <div class="flex gap-2 items-center mb-4">
                        <div class="w-12 h-[1px] bg-[#00D1FF]"></div>
                        <span class="text-[#00D1FF] text-xs font-mono tracking-[0.3em] uppercase">Full-Stack Engineer</span>
                    </div> 
                    
                    <h1 class="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
                        ENGINEERING <br />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-blue-500">
                            SCALABLE
                        </span> <br />
                        ECOSYSTEMS
                    </h1>
                </div>

                <div in:fly={{ y: 20, duration: 800, delay: 400, easing: quintOut }}>
                    <p class="text-gray-400 max-w-md text-lg leading-relaxed mb-8">
                        Building high-performance digital infrastructure with a focus on 
                        clean architecture and premium user interfaces.
                    </p>
                    
                    <div class="flex gap-4">
                        <button class="bg-[#00D1FF] text-black font-bold text-xs px-8 py-4 tracking-widest hover:brightness-110 transition-all hover:scale-105">
                            VIEW PROJECTS
                        </button>
                        <button class="border border-white/10 text-white font-bold text-xs px-8 py-4 tracking-widest hover:bg-white/5 transition-all">
                            CONTACT ME
                        </button>
                    </div>
                </div>

                <div in:fade={{ duration: 1000, delay: 600 }} class="flex flex-wrap gap-12 mt-16 border-t border-white/5 pt-8">
                    {#each [
                        { label: 'TECH STACK', val: 'TypeScript' },
                        { label: 'DATABASES', val: 'SQLite' },
                        { label: 'DEPLOYMENT', val: 'VERCEL' },
                        { label: 'AUTH', val: 'JWT/OAUTH' }
                    ] as stat}
                        <div>
                            <p class="text-gray-500 text-[10px] tracking-widest mb-2">{stat.label}</p>
                            <p class="text-white font-bold text-xl">{stat.val}</p>
                        </div>
                    {/each}
                </div>
            {/if}
        </section>

        {#if mounted}
            <section in:fly={{ x: 50, duration: 1000, delay: 400 }} class="relative hidden lg:block">
                <div class="absolute -inset-4 bg-[#00D1FF]/10 blur-3xl rounded-full"></div>
                <img src="side-pic.png" alt="Profile" class="relative w-full h-90 object-cover rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
            </section>
        {/if}
    </div>

    <section id="projects" class="mt-20">
        <div class="flex items-center gap-4 mb-12">
            <h2 class="text-2xl font-black tracking-tighter uppercase">Project Gallery</h2>
            <div class="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each projects as project, i}
                <div 
                    class="group relative bg-[#0C0C0C] border border-white/5 p-8 transition-all duration-500 hover:border-[#00D1FF]/50"
                >
                    <div class="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <h3 class="text-xl font-bold mb-2 group-hover:text-[#00D1FF] transition-colors">{project.title}</h3>
                    <p class="text-gray-400 text-sm mb-6">{project.desc}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-8">
                        {#each project.tech as t}
                            <span class="text-[10px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 px-2 py-1 rounded">
                                {t}
                            </span>
                        {/each}
                    </div>

                    <a href={project.link} class="text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                        Live Demo <span class="text-[#00D1FF]">→</span>
                    </a>
                </div>
            {/each}
        </div>
    </section>
</main>

<section class="w-full px-6 py-24 bg-[#0a0a0a] border-t border-white/5">
    <div class="max-w-6xl mx-auto mb-16 flex items-end justify-between">
        <div>   <h2 class="text-2xl font-semibold tracking-wide">CORE PROJECTS</h2>
      <p class="text-gray-400 text-sm mt-2">
        Precision-engineered solutions for complex computational challenges.
      </p>

        </div>
        <a href="/projects" class="text-sm text-[#00D1FF] hover:underline decoration-2 underline-offset-8 transition-all">
            Explore All
        </a>
    </div>

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div class="group relative rounded-2xl overflow-hidden bg-black border border-white/10">
            <div class="overflow-hidden">
                <img src="cyber.png" alt="Hyperion" class="w-full h-80 object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div class="flex gap-2 mb-3">
                    <span class="text-[9px] tracking-tighter uppercase px-2 py-1 bg-white/10 backdrop-blur-md rounded text-cyan-400">Kubernetes</span>
                </div>
                <h3 class="text-2xl font-bold">Hyperion Data Grid</h3>
                <p class="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    A distributed low-latency database layer serving 50k+ requests per second.
                </p>
            </div>
        </div>

        <div class="group relative rounded-2xl overflow-hidden bg-black border border-white/10">
            <div class="overflow-hidden">
                <img src="server.jpg" alt="Nova" class="w-full h-80 object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div class="flex gap-2 mb-3">
                    <span class="text-[9px] tracking-tighter uppercase px-2 py-1 bg-white/10 backdrop-blur-md rounded text-cyan-400">React</span>
                </div>
                <h3 class="text-2xl font-bold">Nova UI Engine</h3>
                <p class="text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    A design system engine that automates multi-platform visual consistency.
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    :global(body) {
        background-color: #0a0a0a;
        color: white;
        font-family: 'Inter', sans-serif;
    }
</style>