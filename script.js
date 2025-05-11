const agents = [
    { name: "Astra", color: "#e74c3c", img: "Agentimages/Astra.png" },
    { name: "Breach", color: "#f1c40f", img: "Agentimages/Breach.png" },
    { name: "Brimstone", color: "#2ecc71", img: "Agentimages/Brimstone.png" },
    { name: "Chamber", color: "#3498db", img: "Agentimages/Chamber.png" },
    { name: "Clove", color: "#9b59b6", img: "Agentimages/Clove.png" },
    { name: "Cypher", color: "#e67e22", img: "Agentimages/Cypher.png" },
    { name: "Deadlock", color: "#1abc9c", img: "Agentimages/Deadlock.png" },
    { name: "Fade", color: "#34495e", img: "Agentimages/Fade.png" },
    { name: "Gekko", color: "#f39c12", img: "Agentimages/Gekko.png" },
    { name: "Harbor", color: "#9b59b6", img: "Agentimages/Harbor.png" },
    { name: "Iso", color: "#16a085", img: "Agentimages/Iso.png" },
    { name: "Jett", color: "#d35400", img: "Agentimages/Jett.png" },
    { name: "KAYO", color: "#8e44ad", img: "Agentimages/KAYO.png" },
    { name: "Killjoy", color: "#1abc9c", img: "Agentimages/Killjoy.png" },
    { name: "Neon", color: "#2ecc71", img: "Agentimages/Neon.png" },
    { name: "Omen", color: "#f39c12", img: "Agentimages/Omen.png" },
    { name: "Phoenix", color: "#8e44ad", img: "Agentimages/Phoenix.png" },
    { name: "Raze", color: "#9b59b6", img: "Agentimages/Raze.png" },
    { name: "Reyna", color: "#16a085", img: "Agentimages/Reyna.png" },
    { name: "Sage", color: "#d35400", img: "Agentimages/Sage.png" },
    { name: "Skye", color: "#f1c40f", img: "Agentimages/Skye.png" },
    { name: "Sova", color: "#e74c3c", img: "Agentimages/Sova.png" },
    { name: "Tejo", color: "#3498db", img: "Agentimages/Tejo.png" },
    { name: "Viper", color: "#9b59b6", img: "Agentimages/Viper.png" },
    { name: "Vyse", color: "#e67e22", img: "Agentimages/Vyse.png" },
    { name: "Waylay", color: "#1abc9c", img: "Agentimages/Waylay.png" },
    { name: "Yoru", color: "#34495e", img: "Agentimages/Yoru.png" }
  ];
  
  const wheel = document.getElementById("wheel");
  const agentNameEl = document.getElementById("agent-name");
  const agentImageEl = document.getElementById("agent-image");
  
  let deg = 0;
  
  // Build the wheel segments
  agents.forEach((agent, i) => {
    const slice = 360 / agents.length; //each segemnt's angle 
    const segment = document.createElement("div");
    segment.className = "segment";
    segment.style.backgroundColor = agent.color;
    segment.style.transform = `rotate(${i * slice}deg) skewY(${90 - slice}deg)`; //make each segement into a pie shape slice
  
    wheel.appendChild(segment);
  });
  
  // Spin function
  function spin() {
    const extraSpins = 3600; // Number of extra spins
    const randomAngle = Math.floor(Math.random() * 360); // random angle where the wheel lands
    deg += extraSpins + randomAngle; //total rotation
  
    // Apply the rotation to the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
  
    setTimeout(() => {
      const normalizedDeg = deg % 360;
      const slice = 360 / agents.length;
      const pickedIndex = Math.floor(((360 - normalizedDeg + slice / 2) % 360) / slice);//calculates what agent was landed on under pointer
      const pickedAgent = agents[pickedIndex];
      
      //shows results of wheel spin
      agentNameEl.textContent = `You got: ${pickedAgent.name}!`;
      agentImageEl.src = pickedAgent.img;
      agentImageEl.alt = pickedAgent.name;
      agentImageEl.style.display = "block";
    }, 5000); // delays results until wheel stops spinning
  }