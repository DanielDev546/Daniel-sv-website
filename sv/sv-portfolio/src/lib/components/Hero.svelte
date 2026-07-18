<script>
	// Svelte 5 runes, plain JS
	let { status = 'OPEN TO WORK' } = $props();
</script>

<section class="hero">
	<div class="badge"><span class="pulse"></span>STATUS: {status}</div>

	<div class="headline">
		<h1 class="name">DANIEL</h1>
		<div class="divider" aria-hidden="true"></div>
		<div class="role-col">
			<p class="role">
				FULL STACK<br />
				<span class="accent">DEVELOPER</span><span class="role-caret"></span>
			</p>
			<p class="tagline">
				Building <b>high-concurrency backends</b> and <b>reactive interfaces</b> —
				Svelte, Bun, and whatever it takes to ship.
			</p>
		</div>
	</div>

	<div class="below">
		<div class="cta-group">
			<button class="btn-primary">Explore Archive</button>
			<button class="btn-ghost">&gt; view_source</button>
		</div>
		<div class="stack">
			<span>Svelte</span><span>Bun</span><span>Go</span><span>Rust</span><span>TS</span>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		z-index: 2;
		padding: 70px 64px 60px;
		max-width: 1400px;
		margin: 0 auto;
		min-height: calc(100vh - 90px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: var(--text, #eef2f7);
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-family: 'Space Mono', monospace;
		font-size: 0.72rem;
		letter-spacing: 1.5px;
		color: var(--muted, #6b7688);
		border: 1px solid var(--line, #1a2130);
		padding: 7px 14px;
		border-radius: 20px;
		margin-bottom: 48px;
	}
	.badge .pulse {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--green, #00ff88);
		box-shadow: 0 0 8px var(--green, #00ff88);
		animation: blink 1.8s infinite;
	}
	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.3; }
	}

	.headline {
		display: flex;
		align-items: stretch;
		gap: 40px;
		flex-wrap: wrap;
	}
	.name {
		font-family: 'Syne', sans-serif;
		font-weight: 800;
		font-size: clamp(4.5rem, 11vw, 9.5rem);
		line-height: 0.86;
		letter-spacing: -2px;
		text-transform: uppercase;
		margin: 0;
		background: linear-gradient(180deg, #ffffff 0%, #b9c2d0 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.divider {
		width: 3px;
		background: linear-gradient(180deg, var(--green, #00ff88), var(--cyan, #00d4ff));
		border-radius: 2px;
		align-self: stretch;
		min-height: 140px;
		animation: glow 3s ease-in-out infinite;
	}
	@keyframes glow {
		0%, 100% { box-shadow: 0 0 14px rgba(0, 212, 255, 0.35); }
		50% { box-shadow: 0 0 28px rgba(0, 255, 136, 0.55); }
	}
	.role-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-width: 300px;
	}
	.role {
		font-family: 'Syne', sans-serif;
		font-weight: 700;
		font-size: clamp(2.6rem, 5.2vw, 4.6rem);
		line-height: 1.02;
		letter-spacing: -1px;
		text-transform: uppercase;
		text-align: center;
		color: var(--text, #eef2f7);
		margin: 0;
	}
	.role .accent {
		background: linear-gradient(90deg, var(--green, #00ff88), var(--cyan, #00d4ff));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.role-caret {
		display: inline-block;
		width: 0.5em;
		height: 1em;
		background: var(--cyan, #00d4ff);
		margin-left: 4px;
		animation: blink 1s steps(2) infinite;
		vertical-align: -0.15em;
	}
	.tagline {
		font-family: 'Space Mono', monospace;
		font-size: 0.85rem;
		color: var(--muted, #6b7688);
		margin-top: 18px;
		line-height: 1.6;
		max-width: 320px;
		text-align: center;
	}
	.tagline b {
		color: var(--text, #eef2f7);
		font-weight: 400;
		border-bottom: 1px dashed var(--cyan, #00d4ff);
	}

	.below {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 30px;
		margin-top: 70px;
		padding-top: 32px;
		border-top: 1px solid var(--line, #1a2130);
	}
	.cta-group {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.btn-primary {
		font-family: 'Space Mono', monospace;
		font-size: 0.8rem;
		letter-spacing: 1px;
		background: var(--text, #eef2f7);
		color: var(--bg, #070b12);
		padding: 15px 26px;
		border: none;
		border-radius: 3px;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 10px;
		transition: transform 0.2s;
	}
	.btn-primary:hover {
		transform: translateY(-2px);
	}
	.btn-primary::after {
		content: '→';
	}
	.btn-ghost {
		font-family: 'Space Mono', monospace;
		font-size: 0.8rem;
		letter-spacing: 1px;
		background: transparent;
		color: var(--muted, #6b7688);
		padding: 15px 22px;
		border: 1px solid var(--line, #1a2130);
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.2s;
	}
	.btn-ghost:hover {
		color: var(--text, #eef2f7);
		border-color: var(--muted, #6b7688);
	}

	.stack {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
	.stack span {
		font-family: 'Space Mono', monospace;
		font-size: 0.72rem;
		letter-spacing: 0.5px;
		color: var(--cyan, #00d4ff);
		border: 1px solid rgba(0, 212, 255, 0.3);
		background: rgba(0, 212, 255, 0.05);
		padding: 6px 12px;
		border-radius: 3px;
	}

	@media (max-width: 720px) {
		.hero {
			padding: 40px 24px 40px;
		}
		.headline {
			flex-direction: column;
			gap: 24px;
		}
		.divider {
			width: 60px;
			height: 3px;
			min-height: 0;
		}
		.below {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>