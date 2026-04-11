<script>
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
</script>

<header class="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
	<nav class="flex items-center justify-between h-20 px-[10%] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
  <div class="text-white font-extrabold tracking-widest text-xl">
    AMUND.OS
  </div>
  
  <ul class="hidden md:flex items-center space-x-10">
    <li>
      <a href="#" class="relative text-white text-sm font-medium after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#00f2ff] after:shadow-[0_0_10px_#00f2ff]">
        Home
      </a>
    </li>
    <li>
      <a href="#" class="text-gray-400 text-sm font-medium hover:text-white transition-colors">
        Projects
      </a>
    </li>
    <li>
      <a href="#" class="text-gray-400 text-sm font-medium hover:text-white transition-colors">
        About
      </a>
    </li>
    <li>
      <a href="#" class="text-gray-400 text-sm font-medium hover:text-white transition-colors">
        Contact
      </a>
    </li>
  </ul>

  <div>
    <button class="bg-[#c2f3f1] text-black px-6 py-2 rounded-sm font-bold text-sm hover:bg-[#00f2ff] hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all transform hover:-translate-y-0.5">
      Resume
    </button>
  </div>
</nav>
</header><br><br>

<main class="   max-w-6xl mx-auto px-6 pt-32 pb-20">
  <div class="flex gap-4">
	<section class="mb-32">
    <div class="flex gap-0.5">
    <div class="w-30 h-0.5 mt-1 bg-[#00D1FF]"></div>
		<span class="text-[#00D1FF] text-xs font-mono mb-4 tracking-[0.3em] uppercase">Full-Stack Engineer</span></div> 
		<h1 class="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
			ENGINEERING <br />
			<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-blue-500">
				SCALABLE
			</span> <br />
			ECOSYSTEMS
		</h1>
		<p class="text-gray-400 max-w-md text-xl-sm leading-relaxed mb-8">
        I build and deploy mission-critical infrastructure.
			Building high-performance digital infrastructure with a focus on 
			clean architecture and premium user interfaces.
            
		</p>
		<div class="flex gap-4">
			<button class="bg-[#00D1FF] text-black font-bold text-xs px-8 py-4 tracking-widest hover:brightness-110">
				VIEW PROJECTS
			</button>
			<button class="border border-white/10 text-white font-bold ml-5 text-xs px-8 py-4 tracking-widest hover:bg-white/5">
				CONTACT ME
			</button>
		</div>
        	<div class="h-[1px] mt-13 flex-1 bg-white/10"></div>
           <div class="flex gap-20 mt-8">
		   <div class="flex-col gap-0.3">
			<p class=" text-gray-400 max-w-md text-xl-sm leading-relaxed mt-8">
		    TECH  STACK
			</p>
			<p class=" text-white font-bold max-w-md text-2xl-sm leading-relaxed text-2xl mt-4">
				TypeScript
			</p>
			</div>

			  <div class="flex-col gap-0.3">
			<p class=" text-gray-400 max-w-md text-xl-sm leading-relaxed mt-8">
		    DATABASES
			</p>
			<p class=" text-white font-bold max-w-md text-2xl-sm leading-relaxed text-2xl mt-4">
				SQLite
			</p>
			</div>

			  <div class="flex-col gap-0.3">
			<p class=" text-gray-400 max-w-md text-xl-sm leading-relaxed mt-8">
		    DEPLOYMENT
			</p>
			<p class=" text-white font-bold max-w-md text-2xl-sm leading-relaxed text-2xl mt-4">
				VERCEL
			</p>
			</div>

			  <div class="flex-col gap-0.3">
			<p class=" text-gray-400 max-w-md text-xl-sm leading-relaxed mt-8">
		    AUTH
			</p>
			<p class=" text-white font-bold max-w-md text-2xl-sm leading-relaxed text-2xl mt-4">
				JWT/OAUTH
			</p>
			</div>

		   </div>

	</section>

     <section class="flex  gap-2 mt-5 ml-30 ">
                <img src="side-pic.png" class="w-100 h-80 ml-8 rounded-2xl">

        </section>

        </div>

	<section id="projects">
		<div class="flex items-center gap-4 mb-12">
			<h2 class="text-2xl font-black tracking-tighter uppercase">Project Gallery</h2>
			<div class="h-[1px] flex-1 bg-white/10"></div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each projects as project}
				<div class="group relative bg-[#0C0C0C] border border-white/5 p-8 hover:border-[#00D1FF]/50 transition-all duration-500">
					<div class="absolute inset-0 bg-[#00D1FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
					
					<h3 class="text-xl font-bold mb-2">{project.title}</h3>
					<p class="text-gray-400 text-sm mb-6">{project.desc}</p>
					
					<div class="flex flex-wrap gap-2 mb-8">
						{#each project.tech as t}
							<span class="text-[10px] font-mono text-[#00D1FF] bg-[#00D1FF]/10 px-2 py-1">
								{t}
							</span>
						{/each}
					</div>

					<a href={project.link} class="text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#00D1FF] transition-colors">
						Live Demo <span class="group-hover:translate-x-1 transition-transform">→</span>
					</a>
				</div>
			{/each}
 
		</div>
	</section>
</main>

