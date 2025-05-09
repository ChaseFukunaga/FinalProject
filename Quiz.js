function calculateResult() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const scores = { duelist: 0, initiator: 0, controller: 0, sentinel: 0 };
    
    //makes sure all 7 questions are answered
    if (answers.length < 7) {
      alert("Please answer all questions!");
      return;
    }
    //tracks points for each role
    answers.forEach(answer => {
      scores[answer.value]++;
    });
  
    // Finds which role has the highest score
    const role = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  
    //description for role result
    const roleDescriptions = {
      duelist: "You're a Duelist – Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",
      initiator: "You're an Initiator – Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
      controller: "You're a Controller – Controllers are experts in slicing up dangerous territory to set their team up for success.",
      sentinel: "You're a Sentinel – Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds."
    };
  
    //shows result of what user got
    document.getElementById('result').textContent = roleDescriptions[role];
  }