
// Import prompt function since I created this project off of the web (I git-ignored the node_modules folder)
import promptSync from 'prompt-sync'; 
const prompt = promptSync();

// Important global program variables
let solution_running = true;
const sortTypes = ["mr", "sd", "ra", "pa"];
let apiUrl = "https://devpost.com/api/hackathons";

// Get proper api url based on sort type
const getApiUrl = (sortType) => {
    let baseUrl = "https://devpost.com/api/hackathons";
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
const getHackathons = async () => {
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
    let sortTypePrompt = prompt("How would you like to sort your hackathons? (Most Relevant - mr, Submission date - sd, Recently added - ra, Prize amount - pa): ");
    if (!sortTypes.includes(sortTypePrompt)) {
        console.log("Please try again! Type the characters after the dash after the way in which wyou would like to sort your hackathons!");
        continue
    } else {
        apiUrl = getApiUrl(sortTypePrompt);
        const hackathonsData = getHackathons()
        console.log("Here is your data: \n" + hackathonsData);
        console.log("Thank you for using the DevPost Hackathons API CLI!");
        solution_running = false
    }
}