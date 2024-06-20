// Store references to each of the radio buttons in seperate variables
let q1Textbox = document.querySelector("#q1");
let q2Textbox = document.querySelector("#q2");

// Store a reference to the submit button
let submitButton = document.querySelector("#submitButton");

//Store a reference to the error and results div
let resultsDiv = document.querySelector(".result");

// Add an event listener to the submit button
submitButton.addEventListener("click", function() {
    // Hide the results divs
    resultsDiv.style.display = "none";

    // Initialize two variables to store the users responses to the questions
    let q1Answer = q1Textbox.value;
    let q2Answer = q2Textbox.value;


    // Initialize a variable to store the results
    let superHero = "";

    // Compare the answers to Q1 and Q2 (using compound conditionals)
    // to determine which super hero the user is
    if (q1Answer === "YES" && q2Answer === "YES") {
        superHero = "Faster than a speeding bullet, stronger than a locomotive, you are SUPERMAN!";
        superHero += "<img src='/images/superman.jpeg' />";
    } else if (q1Answer === "YES" && q2Answer === "NO") {
        superHero = "You are the Flash! The fastest man alive.";
        superHero += "<img src='/images/flash.jpeg' />";
    } else if (q1Answer === "NO" && q2Answer === "YES") {
        superHero = "Warrior of the amazons. You are Wonder Woman!";
        superHero += "<img src='/images/wonderwoman.jpeg' />";
    } else if (q1Answer === "NO" && q2Answer === "NO") {
        superHero = "oh... you're just Batman...";
        superHero += "<img src='/images/batman.jpeg' />";
    }

    resultsDiv.innerHTML = superHero;
    resultsDiv.style.display = "block";

});
