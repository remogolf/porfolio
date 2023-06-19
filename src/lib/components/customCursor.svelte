<script>
	import { spring } from 'svelte/motion';
  
	let coords1 = spring(
	  { x: 0, y: 0 },
	  {
		stiffness: 0.05,
		damping: 0.25
	  }
	);
  
	let coords2 = spring(
	  { x: 0, y: 0 },
	  {
		stiffness: 0.1,
		damping: 0.35
	  }
	);
  
	let size = spring(10);
  </script>
  
  <svelte:window
	on:mousemove={(e) => {
	  coords1.set({ x: e.clientX, y: e.clientY });
	  coords2.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={(e) => {
	  size.set(30);
	}}
	on:mouseup={(e) => {
	  size.set(10);
	}}
	on:mouseover={(e) => {
	  size.set(10);
	}}
  />
  
  <div class="cursor">
	<svg class="cursor-svg">
	  <circle
		cx={$coords1.x}
		cy={$coords1.y}
		r={$size}
		stroke="var(--text-1)"
		stroke-width="1"
		fill-opacity="0"
	  />
	  <circle cx={$coords2.x} cy={$coords2.y} r={$size / 4} fill="var(--text-1)" />
	</svg>
  </div>
  
  <style>
	.cursor {
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 9999;
	  pointer-events: none;
	}
  
	.cursor-svg {
	  width: 100vw;
	  height: 100vh;
	}
  </style>
  