<script>
    import Home from "./home/home.svelte";

</script>
<header>
     <span>AIVIS</span>

     <div>
        <a href="/login">Home</a>
        <a href="/signup">Signup</a>
     </div>
</header>
<Home />
<style>
      header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        padding: 2%;
        color: white;
      }
</style>