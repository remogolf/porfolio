<script>
  import { ExternalLink } from 'lucide-svelte';
    export let projectName = '';
    export let projectLink = '';
    export let projectDescription = '';
    export let projectImage = '';
    export let tags = [];
  </script>
  
  <style>
    .card {
      border-radius: 8px;
      padding: 16px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  
    .image {
      width: 100px;
      height: 100px;
      margin-right: 16px;
      border-radius: 8px;
      background-image: url({projectImage});
      background-size: cover;
      background-position: center;
    }
  
    .content {
      flex: 1;
    }
  
    .header {
      font-size: var(--font-size-3);
      font-weight: bold;
      color: var(--link);
      margin-bottom: 8px;
      display:flex;
    }
  
    .description {
      font-size: var(--font-size-1);
      color: var(--text-2);
      margin-bottom: 8px;
    }
  
    .tags {
      display: flex;
      flex-wrap: wrap;
    }
  
    .tag {
      background-color: var(--surface-4);
      color: var(--text-3);
      font-size: var(--font-size-0);
      padding: 4px 8px;
      border-radius: 16px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    .header:hover{
      color:var(--brand)
    }
    .card:hover{
      background-color: var(--surface-2);
    }
  </style>
  
  <div class="card">
    <div class="image" style="background-image: url({projectImage})"></div>
    <div class="content">
      <a href={projectLink} target='Blank_'>
        <div class="header">
          {projectName}<ExternalLink />
        </div>
      </a>
      <div class="description">{projectDescription}</div>
      <div class="tags">
        {#each tags as tag}
          <div class="tag">{tag}</div>
        {/each}
      </div>
    </div>
  </div>