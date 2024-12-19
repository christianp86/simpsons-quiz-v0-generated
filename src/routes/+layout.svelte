<script>
  import '../app.css';
</script>

<div class="min-h-screen bg-blue-400 flex flex-col items-center justify-center p-4">
  <slot />
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');

  :global(body) {
    font-family: 'Comic Neue', cursive;
  }
</style>

