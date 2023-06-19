<script>
    import { onMount } from 'svelte';
  
    let mouseX = 0;
    let mouseY = 0;
  
    // Update cursor position on mousemove
    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
  
    // Attach mousemove event listener using svelte:window directive
    onMount(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    });
  </script>
  
  <style>
    .cursor {
      position: absolute;
      width: 1000px;
      height: 1000px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        hsl(var(--gray-0-hsl)/5%) 1%,
        hsl(var(--gray-0-hsl)/0%) 50%
      );
      pointer-events: none;
      mix-blend-mode: screen;
      transform: translate(-50%, -50%);
      transition: transform 0.2s ease-out;
      z-index: 99;
      overflow:hidden;
    }
  </style>
  
  <div class="cursor" style="top: {mouseY}px; left: {mouseX}px;"></div>
  