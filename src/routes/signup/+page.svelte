<script >
    let { data , form }  = $props();

</script>
<div id="container">
   <h2>Welcome to AIVIS</h2>
   <form id="form" method="POST" action="?/register">   
       <label for="email">Enter email : </label>
       <input type="text" id="email" placeholder="email"  name="email"/>
       <label for="password">Enter password : </label>
       <input type="text" id="password" placeholder="Password" name="password"/>
       <label for="confirm-password">Confirm password : </label>
       <input type="text" id="confirm-password" placeholder="Confirm Password" name="confirm-password"/>
       <button id="submit" type="submit">Sign Up</button>
       {#if form?.missing}<p class="error">The email field is required</p>{/if}
       {#if form?.mismatch}<p class="error">Passwords do not match!</p>{/if} 
       {#if form?.success}<p style="color: green;" class="success">Registration successful!</p>{/if} 
       {#if form?.tooShort}<p class="error">Password is too short!</p>{/if}
       {#if form?.noUppercase}<p class="error">Password must contain at least one uppercase letter!</p>{/if}
       {#if form?.noLowercase}<p class="error">Password must contain at least one lowercase letter!</p>{/if}
       {#if form?.noNumber}<p class="error">Password must contain at least one number!</p>{/if}
       <span>Existing user <a href="/login">login</a> here.</span>
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
       width: 300px;
   }
   h2 {
       margin-bottom: 20px;
       font-size: 32px;
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
   #submit{
       background-color: rgb(255, 104, 104);
       color: white;
       border: none;
       border-radius: 5px;
       padding: 12px 16px;
       cursor: pointer;
       margin-top: 10px;
       width: 50%;
   }
   span {
       margin-top: 10px;
       font-size: 12px;
       color: rgb(150, 150, 150);
   }
   p {
    padding: 1% 0px;
    color: red;
    font-size: 11px;
   }
</style>

