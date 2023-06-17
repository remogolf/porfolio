<script>
    export let links = [];
  
    let hoveredItem = null;
  
    function handleHover(item) {
      hoveredItem = item;
    }
  
    function handleClick(item) {
      const element = document.getElementById(item.id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  </script>
  
  <style>
    ul, li {
      padding: 0;
    }
  
    .nav-item {
      display: flex;
      align-items: center;
      padding-block: 1rem;
      transition: all 0.2s var(--ease-squish-1);
    }
  
    .nav-item:hover {
      color: var(--brand);
    }
  
    .dash-line {
      width: 2rem;
      height: 2px;
      background-color: var(--brand);
      transition: all 0.2s var(--ease-squish-1);
    }
  
    .nav-item:hover .dash-line {
      width: 5rem;
    }
  </style>
  
  <ul>
    {#each links as item}
      <li
        class="nav-item"
        on:mouseover={() => handleHover(item)}
        on:mouseleave={() => handleHover(null)}
        on:click={() => handleClick(item)}
      >
        <span class="dash-line" class:extended={hoveredItem === item}></span>
        <span>{item.title}</span>
      </li>
    {/each}
  </ul>
  