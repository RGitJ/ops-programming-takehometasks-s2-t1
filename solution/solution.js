
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

console.log(getHackathons())