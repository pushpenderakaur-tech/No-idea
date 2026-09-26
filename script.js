const messages = [
  `Hiii Himanshi 👋`,

  `Yaar ye attraction to nhi h.`,

  `Tum to yhi bol rhi ho — ho jata h, common hai.<br>
   But mujhy nhi lag rha ye normal attraction h.`,

  `Or ha, jab tum jane ki bolti ho yha se, interview wagera ki baat karti ho, to bura lagta hai…<br>
   or phir mann kharab ho jata hai mera & i know kaam jaruri hai.`,

  `But jab sahi se baat nhi krt main tum bolti ho — rude ho rhe ho 
  main samjh nhi pa rha kuch yaar..`,

  `Yaar last baat…`,

  `Ye sirf <strong>Attraction nhi h…</strong><br><br>
   <span class="really">Really🤞🏻.</span>`
];

let currentStep = 0;

const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

function showMessage() {

  message.classList.remove("show");
  nextBtn.classList.remove("show");

  setTimeout(() => {

    message.innerHTML = messages[currentStep];

    message.classList.add("show");

    setTimeout(() => {
      nextBtn.classList.add("show");
    }, 350);

  }, 350);
}

nextBtn.addEventListener("click", () => {

  if (currentStep < messages.length - 1) {

    currentStep++;
    showMessage();

  } else {

    // Last screen
    nextBtn.classList.remove("show");

  }
});

// First message
showMessage();
