<style>
   audio {
      width: 100%;
      outline: none;
      background-color: #f9f9f9;
      box-shadow: 0 0 0.8px 0.8px #0000001a;
   }

   audio::-webkit-media-controls-play-button {
      margin-right: 12px;
   }

   audio::-webkit-media-controls-panel {
      background-color: #f9f9f9;
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
      margin-bottom: 35px;
      background-color: #ffffff;
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
   }

   .prev:hover,
   .next:hover,
   .input-loop label:hover {
      color: #008080;
   }
</style>

<!-- svelte-ignore a11y-media-has-caption -->
<div class="audio-area">
   <div class="audio-menu">
      <div class="menu">
         <span class="prev">⇦</span>
         <span class="next">⇨</span>
      </div>

      <div class="input-loop">
         <input type="checkbox" id="loop" />
         <label for="loop">loop</label>
      </div>
   </div>

   <h1 class="title">fur elise (Ludwig van Beethoven)</h1>

   <audio
      controls
      preload="metadata"
      controlsList="nodownload"
      src="https://raw.githubusercontent.com/sveltejs/assets/master/music/mozart.mp3" />
</div>
