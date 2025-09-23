// Array to store job applications
const applications = [];

// Select elements
const form = document.querySelector("#jobForm");
const errorDiv = document.querySelector("#error");
const applicationsList = document.querySelector("#applicationsList");

// Form submit event
form.addEventListener("submit", function(e){
  e.preventDefault(); // prevent page reload

  // Get input values
  const company = document.querySelector("#company").value.trim();
  const role = document.querySelector("#role").value.trim();
  const dateApplied = document.querySelector("#dateApplied").value;
  const status = document.querySelector("#status").value;

  // Validation
  if(company.length < 2){
    errorDiv.textContent = "Company name must be at least 2 characters.";
    return;
  }
  if(role.length < 2){
    errorDiv.textContent = "Role must be at least 2 characters.";
    return;
  }
  if(!dateApplied){
    errorDiv.textContent = "Please select a date applied.";
    return;
  }
  if(!status){
    errorDiv.textContent = "Please select a status.";
    return;
  }

  // Clear error
  errorDiv.textContent = "";

  // Create application object
  const app = {
    company,
    role,
    dateApplied,
    status
  };

  // Add to array
  applications.push(app);

  // Add to DOM
  const li = document.createElement("li");
  li.textContent = `${company} - ${role} | Applied on: ${dateApplied} | Status: ${status}`;
  applicationsList.appendChild(li);

  // Reset form
  form.reset();
});
