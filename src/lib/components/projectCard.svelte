<script>
    export let projectName = '';
    export let projectLink = '';
    export let projectDescription = '';
    export let projectImage = '';
    export let tags = [];
  </script>
  
  <style>
    .card {
      background-color: var(--surface-2);
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
      font-size: 18px;
      font-weight: bold;
      color: var(--text-1);
      margin-bottom: 8px;
    }
  
    .description {
      font-size: 14px;
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
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 16px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  </style>
  
  <div class="card">
    <div class="image" style="background-image: url({projectImage})"></div>
    <div class="content">
      <a href={projectLink} target='Blank_'><div class="header">{projectName}</div></a>
      <div class="description">{projectDescription}</div>
      <div class="tags">
        {#each tags as tag}
          <div class="tag">{tag}</div>
        {/each}
      </div>
    </div>
  </div>