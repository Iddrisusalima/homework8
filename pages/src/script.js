// Function to check the gender of the user
function checkGender() {
    // Prompt the user for their gender
    let gender = prompt("Please enter your gender (Male or Female):");

    // Check the gender and alert the appropriate message
    if (gender.toLowerCase() === "female") {
        alert("You are a girl! 👧🏽");
    } else if (gender.toLowerCase() === "male") {
        alert("You are a boy! 👦🏽");
    } else {
        alert("Invalid input. Please enter 'Male' or 'Female'.");
    }
}

// Call the function to execute
checkGender();
