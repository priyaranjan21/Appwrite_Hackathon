<script>

</script>

<div>
  <main>
      <h1 id="heading">AI/ML/DL/LLM/AGENTS Visualizer with Audio</h1>
     <p id="desc">This is an Open Source Project For AI Learners to Learn and Visualize ai</p>
      <iframe 
        width="916" 
        height="515" 
        src="https://www.youtube.com/embed/RQWpF2Gb-gU" 
        title="AI/ML Visualizer Intro Video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
      <br />
      <button id="start">Get Started</button>

    <section id="features" style="padding: 40px;">
    <div id="features-list">
        <h2>Key Features</h2>
        <p>
            This project is built with Svelte, Appwrite, Three.js, and Generative AI to provide an end-to-end platform 
            for AI visualization. Below are the core features that make this visualizer unique:
        </p>
        <ul style="list-style-type: none; padding: 0;">
            <li><b>3D Visualization of AI Concepts:</b> View complex workflows such as neural networks, training pipelines, and agent interactions in an interactive three-dimensional space powered by Three.js.</li>
            <li><b>Multi-Agent Workflows:</b> Define and visualize how multiple agents communicate, collaborate, or compete within a given task, giving deeper insights into agent-based systems.</li>
            <li><b>Dataset and Model Integration:</b> Upload your own datasets, prompts, and models to see how they connect and flow through various AI/ML/DL processes.</li>
            <li><b>Appwrite Authentication and Storage:</b> Secure login and signup, along with safe storage of your models, datasets, and visualization states using Appwrite.</li>
            <li><b>Audio Explanation:</b> Every visualization can be paired with AI-generated audio narration that explains the underlying concepts and workflow step by step.</li>
            <li><b>Interactive Learning:</b> Instead of passively consuming text or videos, users can experiment by providing prompts or uploading their own resources, making the learning process more engaging and practical.</li>
        </ul>
    </div>
    </section>

    <!-- How It Works -->
    <section id="workflow" style="padding: 40px; background:#f7f7f7;">
        <div id="workflow-container">

      <h2>How It Works</h2>
      <p>
        The platform has been designed to provide a seamless journey from authentication to visualization. 
        Once you log in, you are guided through steps that help you explore and understand AI in a structured manner.
      </p>
      <ol style="list-style-type: none; padding: 0;" >
        <li><b>Step 1: Authentication</b> – Users begin by signing up or logging in through Appwrite authentication. This ensures secure and personalized access to the platform.</li>
        <li><b>Step 2: Upload or Select Models, Datasets, or Prompts</b> – Users can upload their own models and datasets, or choose from pre-existing templates to start visualizing.</li>
        <li><b>Step 3: Define Your Workflow</b> – Specify whether you are working with Retrieval-Augmented Generation (RAG), multi-agent systems, or deep learning pipelines.</li>
        <li><b>Step 4: Visualization in 3D</b> – The defined workflow is transformed into a three-dimensional visual environment where each component of the AI system is represented clearly, allowing you to explore connections, dependencies, and interactions.</li>
        <li><b>Step 5: Audio Narration</b> – As the visualization unfolds, an AI-generated audio narration explains the workflow, making it easier for learners to understand complex concepts.</li>
        <li><b>Step 6: Experiment and Learn</b> – Users can modify prompts, change datasets, or adjust parameters to see how the visualization adapts, promoting interactive learning.</li>
      </ol>
    </div>

    </section>

    <!-- About Me and This Project -->
    <section id="about" style="padding: 40px;">
      <h2>About Me and This Project</h2>
      <p>
        This project is a culmination of my passion for AI and education. As a developer and AI enthusiast, I wanted to create a tool that not only visualizes complex AI concepts but also makes them accessible and engaging for learners at all levels. By leveraging the power of Svelte, Appwrite, Three.js, and Generative AI, I aimed to build an interactive platform that fosters exploration and understanding of AI technologies.
      </p>
      <p>
        With Appwrite hackthon in place i thought of creating something unique and useful for the AI community. This visualizer is open-source, and I welcome contributions and feedback from fellow developers and AI enthusiasts to help improve and expand its capabilities.
      </p>
    </section>
  </main>
</div>
<style>

    main {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         padding-bottom: 6%;
    }
    #heading {
        padding-top: 4%;
        font-size: 56px;
        width: 50%;
        color: rgb(255, 104, 104);
        text-align: center;
    }
    #desc {
        padding: 12px 0px 56px 0px;
    }
    #start {
        background-color: rgb(255, 104, 104);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 16px 24px;
        cursor: pointer;
        margin: 2%;
    }
    iframe {
        border: 2px solid black;
        width: 70%;
    }
    #features {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
    #features-list {
        width: 72%;
        margin: 3% 0% 3% 3%;
        text-align: justify;

    }
    #features ul li {
        padding: 1% 0px ;
    }
    #workflow {
    display: flex;
        flex-direction: column;
        align-items: self-end;
    }
    #workflow-container {
        width: 72%;
        margin: 3% 0% 3% 3%;
        text-align: justify;
    }
    #workflow-container ol li{
        padding: 1% 0px;
    }
    b , h2 {
        color: rgb(255, 104, 104);
  
    }
    #about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center ;
        padding-top: 5%;
    }
    #about p {
        width: 72%;
        margin: 1% 0% 1% 1%;
        text-align: justify;
    }
  
</style>