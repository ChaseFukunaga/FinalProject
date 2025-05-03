const agents = [
    { name: "Jett", color: "#e74c3c", img: "images/jett.png" },
    { name: "Sova", color: "#f1c40f", img: "images/sova.png" },
    { name: "Phoenix", color: "#2ecc71", img: "images/phoenix.png" },
    { name: "Sage", color: "#3498db", img: "images/sage.png" },
    { name: "Reyna", color: "#9b59b6", img: "images/reyna.png" },
    { name: "Killjoy", color: "#e67e22", img: "images/killjoy.png" },
    { name: "Brimstone", color: "#1abc9c", img: "images/brimstone.png" },
    { name: "Omen", color: "#34495e", img: "images/omen.png" },
    { name: "Raze", color: "#f39c12", img: "images/raze.png" },
    { name: "Breach", color: "#9b59b6", img: "images/breach.png" },
    { name: "Viper", color: "#16a085", img: "images/viper.png" },
    { name: "Cypher", color: "#d35400", img: "images/cypher.png" },
    { name: "Astra", color: "#8e44ad", img: "images/astra.png" },
    { name: "Yoru", color: "#1abc9c", img: "images/yoru.png" },
    { name: "KAY/O", color: "#2ecc71", img: "images/kayo.png" },
    { name: "Skye", color: "#f39c12", img: "images/skye.png" },
    { name: "Astra", color: "#8e44ad", img: "images/astra.png" },
    { name: "Breach", color: "#9b59b6", img: "images/breach.png" },
    { name: "Viper", color: "#16a085", img: "images/viper.png" },
    { name: "Cypher", color: "#d35400", img: "images/cypher.png" },
    { name: "Sova", color: "#f1c40f", img: "images/sova.png" },
    { name: "Phoenix", color: "#e74c3c", img: "images/phoenix.png" },
    { name: "Sage", color: "#3498db", img: "images/sage.png" },
    { name: "Reyna", color: "#9b59b6", img: "images/reyna.png" },
    { name: "Killjoy", color: "#e67e22", img: "images/killjoy.png" },
    { name: "Brimstone", color: "#1abc9c", img: "images/brimstone.png" },
    { name: "Omen", color: "#34495e", img: "images/omen.png" }
  ];
  
  const wheel = document.getElementById("wheel");
  const agentNameEl = document.getElementById("agent-name");
  const agentImageEl = document.getElementById("agent-image");
  
  let deg = 0;
  
  // Build the wheel segments
  agents.forEach((agent, i) => {
    const slice = 360 / agents.length;
    const segment = document.createElement("div");
    segment.className = "segment";
    segment.style.backgroundColor = agent.color;
    segment.style.transform = `rotate(${i * slice}deg) skewY(${90 - slice}deg)`;
  
    // Add the agent's name inside the segment
    const textDiv = document.createElement("div");
    textDiv.textContent = agent.name;
    segment.appendChild(textDiv);
  
    wheel.appendChild(segment);
  });
  
  // Spin function
  function spin() {
    const extraSpins = 3600; // Number of extra spins
    const randomAngle = Math.floor(Math.random() * 360); // Random angle within one rotation
    deg += extraSpins + randomAngle;
  
    // Apply the rotation to the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
  
    setTimeout(() => {
      const normalizedDeg = deg % 360;
      const slice = 360 / agents.length;
      const pickedIndex = Math.floor(((360 - normalizedDeg + slice / 2) % 360) / slice);
      const pickedAgent = agents[pickedIndex];
  
      agentNameEl.textContent = `You got: ${pickedAgent.name}!`;
      agentImageEl.src = pickedAgent.img;
      agentImageEl.alt = pickedAgent.name;
      agentImageEl.style.display = "block";
    }, 5000); // Wait for the wheel to stop spinning
  }