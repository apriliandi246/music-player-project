<script>
   import { scale } from "svelte/transition";
   import { songId } from "../store/store.js";

   export let song;

   function handleChoose(id) {
      $songId = id;
   }
</script>

<style>
   .music {
      padding: 18px;
      display: flex;
      border-radius: 3px;
      margin-bottom: 30px;
      align-items: center;
      box-sizing: border-box;
      transition: transform 0.1s;
      background-color: #f8f7f7;
      justify-content: space-between;
      box-shadow: 0 0 2px 2px #0000001a;
   }

   .music__title {
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 1px;
      font-family: system-ui;
   }

   .music__by {
      margin-top: 14px;
      font-weight: 500;
      margin-bottom: 14px;
      letter-spacing: 0.8px;
      font-family: system-ui;
   }

   .music__duration {
      font-weight: 500;
      letter-spacing: 1px;
      font-family: monospace;
   }

   .music__btn {
      cursor: pointer;
      font-size: 1.2rem;
      transition: transform 0.1s;
   }

   .music:hover {
      transform: scale(1.02);
   }
</style>

<div class="music" in:scale>
   <div class="music__data">
      <h1 class="music__title">{song.title}</h1>
      <p class="music__by">by : <span>{song.name}</span></p>
      <span class="music__duration">{song.duration}</span>
   </div>

   <div class="music__btn" on:click={() => handleChoose(song.id)}>
      {$songId !== null && song.id === $songId ? '⏸' : '⏩'}
   </div>
</div>
