<script>
   import Music from "./components/Music.svelte";
   import AudioPlayer from "./components/AudioPlayer.svelte";

   let musics = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<style>
   .container {
      width: 90%;
      margin: 50px auto;
   }

   @media screen and (min-width: 650px) {
      .container {
         width: 80%;
      }
   }

   @media screen and (min-width: 800px) {
      .container {
         width: 70%;
      }
   }

   @media screen and (min-width: 950px) {
      .container {
         width: 60%;
      }
   }

   @media screen and (min-width: 1010px) {
      .container {
         width: 55%;
      }
   }

   @media screen and (min-width: 1250px) {
      .container {
         width: 50%;
      }
   }

   @media screen and (min-width: 1440px) {
      .container {
         width: 40%;
      }
   }

   @media screen and (min-width: 1650px) {
      .container {
         width: 35%;
      }
   }

   @media screen and (min-width: 1850px) {
      .container {
         width: 30%;
      }
   }
</style>

<div class="container">
   <AudioPlayer />

   {#each musics as music}
      <Music />
   {/each}
</div>
