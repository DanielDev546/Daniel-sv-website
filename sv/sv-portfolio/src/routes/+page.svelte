<script>
	import Hero from '$lib/components/Hero.svelte';

	// Tools & languages, grouped so the section reads as a real toolbox, not a tag cloud
	const toolGroups = [
		{
			label: 'LANGUAGES',
			tools: ['JavaScript', 'TypeScript', 'Rust', 'Go', 'SQL']
		},
		{
			label: 'FRAMEWORKS & RUNTIME',
			tools: ['Svelte 5', 'SvelteKit', 'Bun', 'Hono']
		},
		{
			label: 'DATA & INFRA',
			tools: ['Drizzle ORM', 'SQLite / Turso', 'Cloudflare R2', 'Stripe']
		},
		{
			label: 'AI & PLATFORM',
			tools: ['Anthropic Claude API', 'JWT / OAuth', 'CodeMirror 6', 'Resend']
		}
	];

	// The "versatility" cards — real roles pulled from real projects, not generic titles
	const roles = [
		{
			role: 'Database Analyst',
			project: 'FrameCode',
			body: 'He is a database analyst when he\u2019s designing the schema. FrameCode\u2019s data layer runs on Drizzle ORM over SQLite/Turso — modeling projects, activity logs, and billing state so the platform stays consistent as it scales from idea to revenue.',
			tags: ['Drizzle ORM', 'Turso', 'Schema Design']
		},
		{
			role: 'Backend Engineer',
			project: 'DevJournal',
			body: 'He is a backend engineer when the API is the product. DevJournal is built on Hono for routing and Drizzle for persistence, running on Bun — a deliberately lean stack for learning what a full-stack app needs under the hood.',
			tags: ['Hono', 'Bun', 'REST API']
		},
		{
			role: 'Product Engineer',
			project: 'SVG Icon Generator',
			body: 'He is a product engineer when the interface has to feel right. The SVG Icon Generator ships canvas controls, layer management, and export tooling as a real, versioned product — not a demo — currently at v2.1.0.',
			tags: ['Svelte 5', 'Canvas', 'UX']
		},
		{
			role: 'AI Integration Engineer',
			project: 'StudyForge',
			body: 'He is an AI integration engineer when the feature is the intelligence. StudyForge wires the Claude API into CBT-style practice, flashcards, and exam simulation — turning a model into a study partner, not just a chatbot.',
			tags: ['Claude API', 'Prompt Design']
		}
	];

	const projects = [
		{
			name: 'FrameCode',
			status: 'In development',
			tagline: 'The platform where developers go from idea to revenue.',
			description:
				'A full-stack SaaS platform with a browser-based IDE, GitHub integration, and an AI Conversion Meter powered by Claude. Auth runs on custom JWT plus GitHub/Google OAuth; billing runs on Stripe.',
			stack: ['SvelteKit 5', 'Bun', 'Drizzle', 'Claude API', 'Stripe'],
			link: null
		},
		{
			name: 'SVG Icon Generator',
			status: 'Live · v2.1.0',
			tagline: 'A real, versioned tool for building SVG icons in the browser.',
			description:
				'Canvas controls, layer management, AI prompt integration, shape presets, and multi-size export. Migrated from Svelte 4 to Svelte 5 runes, with image import and text tools added in later versions.',
			stack: ['Svelte 5', 'Canvas API', 'AI Prompting'],
			link: 'https://svg-gen-v210.vercel.app'
		},
		{
			name: 'DevJournal',
			status: 'Learning project',
			tagline: 'A full-stack blog platform, built to understand the whole stack.',
			description:
				'Scaffolded from the ground up on Hono and Drizzle ORM to get hands-on with API design and data modeling outside of a framework\u2019s defaults.',
			stack: ['SvelteKit', 'Hono', 'Drizzle', 'SQLite'],
			link: null
		},
		{
			name: 'StudyForge',
			status: 'Prototype',
			tagline: 'An AI-powered study platform with CBT, flashcards, and exams.',
			description:
				'Built around the Claude API to power theory exams, flashcard generation, CBT-style practice questions, and content summarization for learners.',
			stack: ['Claude API', 'HTML', 'JavaScript'],
			link: null
		}
	];
</script>

<svelte:head>
	<title>Daniel — Full Stack Developer</title>
	<meta
		name="description"
		content="Daniel (DevLion) — full-stack developer specializing in high-concurrency backends and reactive interfaces, built on Svelte and Bun."
	/>
</svelte:head>

<div>
<section id="home">
	<Hero status="OPEN TO WORK" />
</section>

<section id="tools" class="section">
	<p class="eyebrow">// TOOLBOX</p>
	<h2 class="section-title">Tools & languages he reaches for</h2>

	<div class="tool-grid">
		{#each toolGroups as group}
			<div class="tool-group">
				<p class="tool-label">{group.label}</p>
				<div class="tool-tags">
					{#each group.tools as tool}
						<span>{tool}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<section id="architecture" class="section">
	<p class="eyebrow">// VERSATILITY</p>
	<h2 class="section-title">One developer, whatever role the project needs</h2>

	<div class="role-grid">
		{#each roles as r}
			<article class="role-card">
				<p class="role-name">{r.role}</p>
				<p class="role-project">on {r.project}</p>
				<p class="role-body">{r.body}</p>
				<div class="role-tags">
					{#each r.tags as tag}
						<span>{tag}</span>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>

<section id="projects" class="section">
	<p class="eyebrow">// SELECTED WORK</p>
	<h2 class="section-title">Projects</h2>

	<div class="project-grid">
		{#each projects as p}
			<article class="project-card">
				<div class="project-head">
					<h3>{p.name}</h3>
					<span class="status">{p.status}</span>
				</div>
				<p class="project-tagline">{p.tagline}</p>
				<p class="project-desc">{p.description}</p>
				<div class="project-stack">
					{#each p.stack as tech}
						<span>{tech}</span>
					{/each}
				</div>
				{#if p.link}
					<a href={p.link} class="project-link" target="_blank" rel="noopener noreferrer">
						visit_live &rarr;
					</a>
				{/if}
			</article>
		{/each}
	</div>
</section>

<section id="contact" class="section contact">
	<p class="eyebrow">// GET IN TOUCH</p>
	<h2 class="section-title">Let's build something</h2>
	<p class="contact-copy">
		Open to freelance work, collaborations, and full-stack roles. If it involves Svelte, Bun, or
		turning an idea into something people can actually use — reach out.
	</p>
	<div class="contact-links">
		<a href="mailto:hello@devlion.tech" class="btn-primary">Email Daniel</a>
		<a href="https://github.com/DanielDev546" target="_blank" rel="noopener noreferrer" class="btn-ghost">
			&gt; github
		</a>
		<a href="https://www.tiktok.com/@dotuns026" target="_blank" rel="noopener noreferrer" class="btn-ghost">
			&gt; tiktok
		</a>
	</div>
</section>

</div>
<style>
div{
	background: black;
}
	/* Tools */
	.tool-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 32px;
	}
	.tool-group {
		border-left: 2px solid var(--line);
		padding-left: 18px;
	}
	.tool-label {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 1.5px;
		color: var(--muted);
		margin-bottom: 14px;
	}
	.tool-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.tool-tags span {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--text);
		border: 1px solid var(--line);
		background: var(--bg-raise);
		padding: 6px 12px;
		border-radius: 3px;
	}

	/* Versatility / roles */
	.role-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 24px;
	}
	.role-card {
		background: var(--bg-raise);
		border: 1px solid var(--line);
		border-radius: 8px;
		padding: 32px;
		transition: border-color 0.2s;
	}
	.role-card:hover {
		border-color: var(--cyan);
	}
	.role-name {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.5rem;
		text-transform: uppercase;
		background: linear-gradient(90deg, var(--green), var(--cyan));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.role-project {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 1px;
		color: var(--muted);
		margin-top: 4px;
		margin-bottom: 18px;
	}
	.role-body {
		font-size: 0.92rem;
		line-height: 1.65;
		color: #c3cad6;
		margin-bottom: 20px;
	}
	.role-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.role-tags span {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		color: var(--cyan);
		border: 1px solid rgba(0, 212, 255, 0.3);
		background: rgba(0, 212, 255, 0.05);
		padding: 4px 10px;
		border-radius: 3px;
	}

	/* Projects */
	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 24px;
	}
	.project-card {
		border: 1px solid var(--line);
		border-radius: 8px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		transition: transform 0.2s, border-color 0.2s;
	}
	.project-card:hover {
		transform: translateY(-4px);
		border-color: var(--green);
	}
	.project-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-bottom: 10px;
	}
	.project-head h3 {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.3rem;
		text-transform: uppercase;
	}
	.status {
		font-family: var(--font-mono);
		font-size: 0.64rem;
		letter-spacing: 1px;
		color: var(--green);
		border: 1px solid rgba(0, 255, 136, 0.3);
		padding: 4px 9px;
		border-radius: 3px;
		white-space: nowrap;
	}
	.project-tagline {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--cyan);
		margin-bottom: 14px;
	}
	.project-desc {
		font-size: 0.88rem;
		line-height: 1.6;
		color: #c3cad6;
		margin-bottom: 20px;
		flex: 1;
	}
	.project-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 16px;
	}
	.project-stack span {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		color: var(--muted);
		border: 1px solid var(--line);
		padding: 4px 10px;
		border-radius: 3px;
	}
	.project-link {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--green);
		width: fit-content;
	}
	.project-link:hover {
		text-decoration: underline;
	}

	/* Contact */
	.contact {
		text-align: left;
	}
	.contact-copy {
		font-size: 1rem;
		color: #c3cad6;
		max-width: 560px;
		line-height: 1.7;
		margin-bottom: 36px;
	}
	.contact-links {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}
	.btn-primary {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		letter-spacing: 1px;
		background: var(--text);
		color: var(--bg);
		padding: 15px 26px;
		border-radius: 3px;
		display: inline-flex;
		align-items: center;
		transition: transform 0.2s;
	}
	.btn-primary:hover {
		transform: translateY(-2px);
	}
	.btn-ghost {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		letter-spacing: 1px;
		color: var(--muted);
		padding: 15px 22px;
		border: 1px solid var(--line);
		border-radius: 3px;
		transition: all 0.2s;
	}
	.btn-ghost:hover {
		color: var(--text);
		border-color: var(--muted);
	}
</style>