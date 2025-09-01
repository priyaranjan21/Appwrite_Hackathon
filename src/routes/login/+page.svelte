<script>
    let { data , form }  = $props();
    
</script>

<div id="container">
    <form id="form" method="POST" action="?/login" >
        <h2>Welcome to AIVIS</h2>
       <label for="email">Enter email : </label>
       <input type="text" id="email" placeholder="email" name="email" />
       <label for="password">Enter password : </label>
       <input type="text" id="password" placeholder="Password" name="password" />
       <button id="submit" type="submit" >Login</button>
       {#if form?.missing}<p class="error">The email field is required</p>{/if}
       {#if form?.success}<p style="color: green;" class="success">Login successful!</p>{/if}
       <span id="quickLink">New user <a href="/signup"> signup </a> here</span>
   </form>
</div>

<style>
   #container {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content:center ;
       height: 100vh;
   }
   #form {
       display: flex;
       flex-direction: column;
       width: 25%;
   }
   h2 {
       margin-bottom: 20px;
       font-size: 40px;
       color: rgb(255, 104, 104);
   }
   label {
       margin: 10px 0 5px 0;
       text-align: start;
   }
   input {
       padding: 10px;
       margin-bottom: 20px;
       border: 1px solid #ccc;
       border-radius: 4px;
       width: 100%;
       max-width: 300px;
   }
   #submit {
       background-color: rgb(255, 104, 104);
       color: white;
       border: none;
       border-radius: 5px;
       padding: 12px 16px;
       cursor: pointer;
       margin-top: 10px;
       width: 50%;
   }
   #quickLink {
       margin-top: 10px;
       font-size: 12px;
       color: rgb(150, 150, 150);
   }
   p {
    padding: 1% 0px;
    color: red;
    font-size: 10px;
   }
</style>

