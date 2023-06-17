<script>
    export let timePeriod = '';
    export let heading = '';
    export let paragraph = '';
    export let tags = [];
  </script>
  
  <style>
    .card {
      background-color: var(--surface-2);
      border-radius: var(--radius-conditional-3);
      padding: 16px;
    }
  
    .time-period {
      font-size: 14px;
      font-weight: bold;
      color: var(--text-2);
      margin-bottom: 8px;
    }
  
    .heading {
      font-size: 18px;
      font-weight: bold;
      color: var(--text-1);
      margin-bottom: 8px;
    }
  
    .paragraph {
      font-size: 14px;
      color: var(--text-2);
      margin-bottom: 16px;
    }
  
    .tags {
      display: flex;
      flex-wrap: wrap;
    }
  
    .tag {
      background-color: var(--surface-4);
      color: var(--text-1);
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 16px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  </style>
  
  <div class="card">
    <div class="time-period">{timePeriod}</div>
    <div class="heading">{heading}</div>
    <div class="paragraph">{paragraph}</div>
    <div class="tags">
      {#each tags as tag}
        <div class="tag">{tag}</div>
      {/each}
    </div>
  </div>