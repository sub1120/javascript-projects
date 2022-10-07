const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {}

function createFaq(faqData) {
  const faqDiv = document.createElement("div");
  faqDiv.setAttribute("class", "faq");
  faqDiv.setAttribute("id", `element-id-${faqData.id}`);
  accordianBody.appendChild(faqDiv);

  const faqHeaderDiv = document.createElement("div");
  faqHeaderDiv.setAttribute("class", "faq_header");
  faqDiv.appendChild(faqHeaderDiv);

  const faqHeading = document.createElement("h3");
  faqHeading.innerText = faqData.question;
  faqHeaderDiv.appendChild(faqHeading);

  const faqBtn = document.createElement("button");
  faqBtn.setAttribute("class", `show_btn`);
  faqBtn.setAttribute("id", `element-id-${faqData.id}`);
  faqBtn.innerText = "+";
  faqBtn.addEventListener("click", btnStatusUpdate);
  faqHeaderDiv.appendChild(faqBtn);

  const faqAns = document.createElement("p");
  faqAns.setAttribute("class", "hidden");
  faqAns.innerText = faqData.answer;
  faqDiv.appendChild(faqAns);
}

function btnStatusUpdate(event) {
  const elementId = event.target.id;
  const faqAns = document.querySelector(`.faq#${elementId} p`);
  if (faqAns.className == "") {
    event.target.innerText  = "+"
    faqAns.setAttribute("class", "hidden");
  } else {
    event.target.innerText  = "-"
    faqAns.setAttribute("class", "");
  }
}

for (const faq of faqData) {
  createFaq(faq);
}
