<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let visible: boolean = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 500);
  });
</script>

<div class="fixed inset-0 flex items-center justify-center bg-blue-400 overflow-hidden">
  <div class="relative w-full h-full">
    <!-- Cloud SVGs -->
    <svg class="absolute top-1/4 left-1/4 w-32 h-20 text-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M25,60 a20,20 0 0,1 0,-40 h50 a20,20 0 0,1 0,40 z" fill="currentColor"/>
    </svg>
    <svg class="absolute top-1/2 right-1/4 w-40 h-24 text-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M25,60 a20,20 0 0,1 0,-40 h50 a20,20 0 0,1 0,40 z" fill="currentColor"/>
    </svg>
    <svg class="absolute bottom-1/4 left-1/3 w-36 h-22 text-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M25,60 a20,20 0 0,1 0,-40 h50 a20,20 0 0,1 0,40 z" fill="currentColor"/>
    </svg>
  </div>
  
  {#if visible}
    <div 
      class="absolute inset-0 flex flex-col items-center justify-center text-center"
      transition:fade={{ duration: 2000 }}
    >
      <h1 class="text-4xl font-bold text-yellow-400 mb-4">The Simpsons</h1>
      <h2 class="text-2xl font-semibold text-white">Unofficial Quiz</h2>
    </div>
  {/if}
</div>

