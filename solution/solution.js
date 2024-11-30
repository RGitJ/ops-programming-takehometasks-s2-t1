
// Import prompt function since I created this project off of the web (I git-ignored the node_modules folder)
import promptSync from 'prompt-sync'; 
const prompt = promptSync();

// Important global program variables
let solution_running = true;
const sortTypes = ["mr", "sd", "ra", "pa"];
let apiUrl = "https://devpost.com/api/hackathons";

// Get proper api url based on sort type
const initApiUrl = (sortType) => {
    let baseUrl = "https://devpost.com/api/hackathons";
    // Check for the different sort types from the prompt and change url accordingly
    switch (sortType) {
        case "mr":
            return baseUrl;
        case "sd":
            baseUrl += "?order_by=deadline"
            return baseUrl;
        case "ra":
            baseUrl += "?order_by=recently-added"
            return baseUrl;
        case "pa":
            baseUrl += "?order_by=prize-amount"
            return baseUrl;
    }
        
}

// Get hackathons
const fetchHackathons = async () => {
    const apiUrl = "https://devpost.com/api/hackathons";
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        return json
    } catch (error) {
        console.error(error.message);
    }
}

// Command Line User Interface
console.log("Hello! Welcome to the DevPost Hackathons API CLI!");
while (solution_running) {
    let sortTypePrompt = prompt("How would you like to sort your hackathons? (most relevant - mr, submission date - sd, recently added - ra, prize amount - pa): ");
    // Validate prompt input
    if (!sortTypes.includes(sortTypePrompt)) {
        // Tell user to try again
        console.log("Please try again! Type the characters after the dash after the way in which you would like to sort your hackathons!");
        continue
    } else {
        // Fetch and print out data
        apiUrl = initApiUrl(sortTypePrompt);
        console.log("Here is your data:")
        const hackathonsData = await fetchHackathons()
        console.log(hackathonsData);
        console.log("Thank you for using the DevPost Hackathons API CLI!");
        solution_running = false
    }
}