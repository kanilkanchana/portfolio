// Skill animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress div").forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
});

// Project modal
function openProject(id) {
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");

  if (id === 1) {
    title.textContent = "Unit Converter Web Application";
    desc.textContent = "Unit Converter is a simple and user-friendly web application designed to quickly convert values between different measurement units. The application focuses on clarity, speed, and ease of use, making it suitable for students, developers, and everyday users.";
  }

  if (id === 2) {
    title.textContent = "Data Visualization Dashboard";
    desc.textContent = "Dashboard displaying data using interactive charts and JavaScript logic.";
  }

  if (id === 3) {
    title.textContent = "JavaScript Utility Tools";
    desc.textContent = "A collection of JavaScript utilities focusing on DOM manipulation.";
  }

  document.getElementById("modal").style.display = "block";
}

function closeProject() {
  document.getElementById("modal").style.display = "none";
}

// Contact validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");

  if (!email.includes("@")) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "#00ffa6";
  this.reset();
});

