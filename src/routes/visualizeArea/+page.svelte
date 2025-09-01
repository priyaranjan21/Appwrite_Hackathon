<script>
    //  const audio = new Audio('/assets/typing.wav');
    // //  audio.loop = true;
    //  audio.play();
    //  audio.volume = 0.1;
</script>

<div id="computerScreen" >
    <h2>
        Hello What do you want to learn About Machine learning? Please Enter You
        can add docs also
    </h2>
</div>

<style>
    #computerScreen {
        height: 100vh;
        border: 1px solid #000000;
        background-image: url("../../lib/assets/computer.png");
       
        /* background-color: #000000; Used if the image is unavailable */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        border-radius: 4px;
        background-size: 30%;
        background-color: #000000;
        padding: 20px;
        color: rgb(0, 255, 0);
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    h2 {
        width: max-content;
        overflow: hidden;
        border-right: 0.15em solid orange;
        white-space: nowrap;
        letter-spacing: 0.15em;
        animation:
            typing 3.2s steps(30, end),
            blink-caret 0.75s step-end infinite;
    }
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: orange;
        }
    }
</style>
