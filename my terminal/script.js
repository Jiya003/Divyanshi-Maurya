const output = document.getElementById("output");
const input = document.getElementById("command-input");

const commands = {
  help: "Available commands: about, projects, skills, contact, clear",
  about: "Hi, I'm Divyanshi, a passionate developer specializing in full-stack development.",
  projects: "1. Portfolio Terminal\n2. Environmental Monitoring Dashboard\n3. Carbon Footprint Tracker",
  skills: "Python, JavaScript, React, Node.js, Data Analysis",
  contact: "Email: divyanshi@example.com | GitHub: github.com/Divyanshi",
  clear: () => (output.innerHTML = ""),
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = input.value.trim();
    const prompt = `<div>divyanshi@Jinx:~$ ${command}</div>`;
    let response;

    if (commands[command]) {
      response =
        typeof commands[command] === "function"
          ? commands[command]()
          : `<div>${commands[command]}</div>`;
    } else {
      response = `<div>Command not found: ${command}</div>`;
    }

    output.innerHTML += `${prompt}${response || ""}`;
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
