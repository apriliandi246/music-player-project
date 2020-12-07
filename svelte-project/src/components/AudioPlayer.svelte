<script>
   import { scale } from "svelte/transition";
   import { songId } from "../store/store.js";

   export let songs;

   let audio;
   let isLoop = false;

   $: currentSong = songs.filter((song) => song.id === $songId);

   function handleEndMusic() {
      if (isLoop === true) return audio.play();
      $songId === 5 ? ($songId = 1) : ($songId += 1);
   }

   function onPreviousSong() {
      $songId === 1 ? ($songId = 5) : ($songId -= 1);
   }

   function onNextSong() {
      $songId === 5 ? ($songId = 1) : ($songId += 1);
   }
</script>

<style>
   audio {
      width: 100%;
      outline: none;
      background-color: #f8f7f7;
      box-shadow: 0 0 0.8px 0.8px #0000001a;
   }

   audio::-webkit-media-controls-play-button {
      margin-right: 12px;
   }

   audio::-webkit-media-controls-panel {
      background-color: #f8f7f7;
   }

   audio::-webkit-media-controls-current-time-display,
   audio::-webkit-media-controls-time-remaining-display {
      font-weight: bold;
      font-size: 1.1rem;
      letter-spacing: 1px;
      font-family: monospace;
   }

   audio::-webkit-media-controls-current-time-display {
      margin-right: 2px;
   }

   audio::-webkit-media-controls-time-remaining-display {
      margin-left: 10px;
   }

   .audio-area {
      border-radius: 4px;
      margin-bottom: 35px;
      background-color: #f8f7f7;
      box-shadow: 0 0 2px 2px #0000001a;
   }

   .audio-menu {
      padding: 5px;
      width: 260px;
      height: 80px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .prev,
   .next {
      cursor: pointer;
      font-size: 3rem;
      margin-right: 20px;
      transition: color 0.2s;
   }

   .input-loop label {
      cursor: pointer;
      margin-left: 4px;
      font-weight: bold;
      font-size: 1.2rem;
      letter-spacing: 1px;
      transition: color 0.2s;
      font-family: monospace;
   }

   .input-loop input {
      width: 15px;
      height: 15px;
      cursor: pointer;
   }

   .title {
      margin-top: 5px;
      font-weight: bold;
      font-size: 1.4rem;
      text-align: center;
      margin-bottom: 34px;
      letter-spacing: 1.2px;
      word-wrap: break-word;
      font-family: system-ui;
   }

   .prev:hover,
   .next:hover,
   .input-loop label:hover {
      color: #008080;
   }
</style>

<!-- svelte-ignore a11y-media-has-caption -->
<div class="audio-area">
   {#if $songId !== null}
      <div class="audio-menu" in:scale>
         <div class="menu">
            <span class="prev" on:click={onPreviousSong}>⇦</span>
            <span class="next" on:click={onNextSong}>⇨</span>
         </div>

         <div class="input-loop">
            <input
               id="loop"
               type="checkbox"
               on:change={() => (isLoop = !isLoop)} />
            <label for="loop">loop</label>
         </div>
      </div>

      <h1 class="title" in:scale>{currentSong[0].title}</h1>
   {/if}

   <audio
      controls
      bind:this={audio}
      preload="metadata"
      on:ended={handleEndMusic}
      controlsList="nodownload"
      src={$songId !== null ? currentSong[0].source : null} />
</div>
