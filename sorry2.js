
alert("ab bhi maafi nahi milegi ?😕")
alert("this is just for you !!")
// existing onload function
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);

    // Start the typing message after flowers appear
    typeMessage("Just a virtual flower for real flower,\nI am really sorry Tanistha...", 50);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    { id: "typing1", text: "Just a virtual flower for real flower!" },
    { id: "typing2", text: "I'm really sorry Tanistha ji 💛" }
  ];

  messages.forEach(msg => {
    const element = document.getElementById(msg.id);
    let index = 0;

    function typeLetter() {
      if (index < msg.text.length) {
        element.textContent += msg.text[index];
        index++;
        setTimeout(typeLetter, 100); // typing speed
      } else {
        element.style.borderRight = "none"; // remove cursor when done
      }
    }

    typeLetter(); // start typing each message simultaneously
  });
});


