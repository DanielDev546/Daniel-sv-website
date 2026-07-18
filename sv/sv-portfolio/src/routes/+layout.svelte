<script>
	import '../style.css';

	let { children } = $props();

	let navOpen = $state(false);

	const navLinks = [
		{ label: 'HOME', href: '#home' },
		{ label: 'TOOLS', href: '#tools' },
		{ label: 'ARCHITECTURE', href: '#architecture' },
		{ label: 'PROJECTS', href: '#projects' },
		{ label: 'CONTACT', href: '#contact' }
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page-grid" aria-hidden="true"></div>

<nav class="nav">
	<a href="#home" class="logo">
		<span class="logo-mark">D</span>
		DEVLION<span class="dim">.sys</span>
	</a>

	<div class="navlinks">
		{#each navLinks as link}
			<a href={link.href}>{link.label}</a>
		{/each}
	</div>

	<a href="#contact" class="connect"><span class="dot"></span>CONNECT</a>

	<button class="burger" onclick={() => (navOpen = !navOpen)} aria-label="Toggle menu">
		<span></span><span></span>
	</button>
</nav>

{#if navOpen}
	<div class="mobile-menu">
		{#each navLinks as link}
			<a href={link.href} onclick={() => (navOpen = false)}>{link.label}</a>
		{/each}
		<a href="#contact" class="connect" onclick={() => (navOpen = false)}>CONNECT</a>
	</div>
{/if}

<main>
	{@render children()}
</main>

<footer class="footer">
	<span>© {new Date().getFullYear()} DANIEL — BUILT WITH SVELTE 5 + BUN</span>
	<span class="dim">DEVLION.SYS</span>
</footer>

<style>
	.page-grid {
		position: fixed;
		inset: 0;
		background-color: black;
		background-size: 64px 64px;
		opacity: 0.25;
		pointer-events: none;
		mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%);
		z-index: 0;
	}

	.nav {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 22px 64px;
		background: rgba(7, 11, 18, 0.85);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--line);
	}
	.logo {
		display: flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-display);
		font-weight: 700;
		letter-spacing: 0.5px;
		font-size: 1.05rem;
	}
	.logo .dim {
		color: var(--muted);
	}
	.logo-mark {
		width: 34px;
		height: 34px;
		border-radius: 8px;
		background: linear-gradient(135deg, var(--green), var(--cyan));
		display: flex;
		align-items: center;
		justify-content: center;
		color: #04070c;
		font-weight: 800;
		font-family: var(--font-display);
	}
	.navlinks {
		display: flex;
		gap: 36px;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 1.5px;
		color: var(--muted);
	}
	.navlinks a {
		transition: color 0.2s;
	}
	.navlinks a:hover {
		color: var(--text);
	}
	.connect {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 1px;
		color: var(--green);
		background: transparent;
		border: 1px solid var(--green);
		padding: 11px 22px;
		border-radius: 3px;
		display: flex;
		align-items: center;
		gap: 8px;
		width: fit-content;
		transition: all 0.2s;
	}
	.connect:hover {
		background: var(--green);
		color: #04070c;
		box-shadow: 0 0 24px rgba(0, 255, 136, 0.4);
	}
	.connect .dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: currentColor;
	}

	.burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
	}
	.burger span {
		width: 22px;
		height: 2px;
		background: var(--text);
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 28px 24px 36px;
		background: var(--bg-raise);
		border-bottom: 1px solid var(--line);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		letter-spacing: 1px;
		position: relative;
		z-index: 10;
	}

	main {
		position: relative;
		z-index: 1;
	}

	.footer {
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 10px;
		padding: 32px 64px 48px;
		border-top: 1px solid var(--line);
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 1px;
		color: var(--muted);
		max-width: 1400px;
		margin: 0 auto;
	}
	.footer .dim {
		color: var(--muted);
	}

	@media (max-width: 900px) {
		.navlinks,
		.connect {
			display: none;
		}
		.burger {
			display: flex;
		}
	}
	@media (max-width: 720px) {
		.nav {
			padding: 18px 24px;
		}
		.footer {
			padding: 28px 24px 40px;
		}
	}
</style>