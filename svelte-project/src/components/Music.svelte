<script>
</script>

<style>
   .music {
      padding: 23px;
      display: flex;
      margin-bottom: 30px;
      align-items: center;
      box-sizing: border-box;
      background-color: #ffffff;
      justify-content: space-between;
      box-shadow: 0 0 2px 2px #0000001a;
   }

   .music__title {
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 1px;
   }

   .music__by {
      margin-top: 14px;
      font-weight: 500;
      margin-bottom: 14px;
      letter-spacing: 0.8px;
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

   .music__btn:hover {
      transform: scale(1.2);
   }
</style>

<div class="music">
   <div class="music__data">
      <h1 class="music__title">Title</h1>
      <p class="music__by">by : <span>Somebody</span></p>
      <span class="music__duration">2:46</span>
   </div>

   <div class="music__btn">▶</div>
</div>
