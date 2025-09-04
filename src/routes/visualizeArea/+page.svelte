<script>
    import { mount, onMount } from "svelte";
    import computerpng from "../../lib/assets/computer.png";
    import typingsound from "../../lib/assets/typing.wav";
    import terminalSvg from "../../lib/assets/terminal-svgrepo-com.svg";
    import burgerSvg from "../../lib/assets/burger-menu-svgrepo-com.svg";
    import paperClip from "../../lib/assets/paperClip.png";

    onMount(() => {
        const audio = new Audio(typingsound);
        //    audio.loop = true;
        audio.play();
        audio.volume = 0.1;
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 3000);
    });
   const terminalToggle = () => {
        const terminal = document.getElementById("chatTerminal");
        if(terminal === null) return;
        if (terminal.style.display === "none") {
            terminal.style.display = "block";
         
        } else {
            terminal.style.display = "none";
        }
    };
</script>

<div id="computerScreen">
    <button onclick={()=>{terminalToggle()}} id="terminalButton" style="background: none; border: none; padding: 0; margin: 0;">
        <img
        src={terminalSvg}
        id="terminalIcon"
        alt="Terminal Icon"
        style="width: 40px; position: absolute; top: 65%; right: 120px;"
        />
    </button>
    <img
    src={burgerSvg}
    id="burgerIcon"
    alt="Burger Icon"
        style="width: 40px; position: absolute; top: 65%; right: 80px;"
    />
    <img
        src={paperClip}
        id="paperClipIcon" 
        alt="Paper Clip Icon"
        style="width: 40px; position: absolute; top: 75%; right: 40px;"
    /> 
    <textarea id="chatTerminal"> </textarea>
    <div id="history">
        
    </div>
    <h2>
        Hello What do you want to learn About Machine learning? Please Enter You
        can add docs also
    </h2>
    <img src={computerpng} id="computerImage" alt="" />
</div>

<style>
    #computerScreen {
        height: 100vh;
        border: 1px solid #000000;
        background-color: #000000;
        border-radius: 4px;
        padding: 20px;
        color: rgb(0, 255, 0);
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    #computerImage {
        width: 300px;
        position: absolute;
        bottom: 0%;
        right: 0%;
        /* animation: talking 3s infinite alternate; */

        filter: drop-shadow(0 0 2px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 4px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 6px rgba(0, 255, 0, 0.7));
    }
    @keyframes talking {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
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
        text-shadow:
            0 0 2px rgba(0, 255, 0, 0.7),
            0 0 4px rgba(0, 255, 0, 0.7),
            0 0 6px rgba(0, 255, 0, 0.7);
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
    #terminalIcon {
        filter: drop-shadow(0 0 2px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 4px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 6px rgba(0, 255, 0, 0.7));
        opacity: 0.5;
    }
    #terminalIcon:hover {
        opacity: 1;
        cursor: pointer;
    }
    #burgerIcon {
        filter: drop-shadow(0 0 2px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 4px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 6px rgba(0, 255, 0, 0.7));
        opacity: 0.5;
    }
    #burgerIcon:hover {
        opacity: 1;
        cursor: pointer;
    }
    #chatTerminal {        
        display: none;
        background-color: rgba(0, 0, 0, 0.5);
        border: 2px solid #00ff00;
        box-shadow: 0 0 2px rgba(0, 255, 0, 0.7)
            drop-shadow(0 0 4px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 6px rgba(0, 255, 0, 0.7));
        border-radius: 4px;
        padding: 10px;
        margin-top: 20px;
        height: 300px;
        overflow-y: auto;
        color: #00ff00;
        text-shadow:
            0 0 2px rgba(0, 255, 0, 0.7),
            0 0 4px rgba(0, 255, 0, 0.7),
            0 0 6px rgba(0, 255, 0, 0.7);
        resize: none;
        transition: width 0.5s ease-in-out;
        transition: height 0.5s ease-in-out;
    }
    #paperClipIcon {
        filter: drop-shadow(0 0 2px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 4px rgba(0, 255, 0, 0.7))
            drop-shadow(0 0 6px rgba(0, 255, 0, 0.7));
        opacity: 0.5;
        transform: rotate(-45deg);
        z-index: 10;
    }
    #paperClipIcon:hover {
        opacity: 1;
        cursor: pointer;
    }
</style>
