
const sortTypes = ["mr", "sd", "ra", "pa"]
let apiUrl = "https://devpost.com/api/hackathons"

// Get proper api url based on sort type
const getApiUrl = (sortType) => {
    const baseUrl = "https://devpost.com/api/hackathons";
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
        console.log(json)

        return json
    } catch (error) {
        console.error(error.message)
    }
}

// Command Line User Interface
console.log("Hello! Welcome to the DevPost Hackathons API command line interface!")
const sortTypePrompt = prompt("How would you like to sort your hackathons? (Most Relevant - mr, Submission date - sd, Recently added - ra, Prize amount - pa): ")
if (!sortTypes.includes(sortTypePrompt)) {
    console.log("Please try again! Type the characters after the dash after the way in which wyou would like to sort your hackathons!")
}