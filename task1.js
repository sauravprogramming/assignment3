//Problem-01: New Price for Eid Sale
//New Price for Eid Sale

function newPrice(currentPrice, discount) {
        // Your code here
    // Check if inputs are numbers
    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }
    
    // Check discount range
    if (discount < 0 || discount > 100) {
        return "Invalid";
    }
    
    // Calculate discount amount
    const discountAmount = (currentPrice * discount) / 100;
    
    // Calculate new price
    const finalPrice = currentPrice - discountAmount;
    
    // Return with 3 decimal places
    return finalPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {

    // Check if input is string
    if (typeof otp !== "string") {
        return "Invalid";
    }

    // Check length must be exactly 8
    if (otp.length !== 8) {
        return false;
    }

    // Check must start with "ph-"
    if (!otp.startsWith("ph-")) {
        return false;
    }

    // If all conditions pass
    return true;
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {

    // Check if input is an object and not null or array
    if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }

    const { right, wrong, skip } = omr;

    // Check if properties exist and are numbers
    if (typeof right !== "number" || 
        typeof wrong !== "number" || 
        typeof skip !== "number") {
        return "Invalid";
    }

    // Check total must be 100
    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    // Calculate score
    const score = (right * 1) + (wrong * -0.5);

    // Return rounded result
    return Math.round(score);
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {

    // Check if input is an array
    if (!Array.isArray(array)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    // Count votes
    for (let vote of array) {
        if (vote === "ha") {
            haCount++;
        } 
        else if (vote === "na") {
            naCount++;
        }
    }

    // Compare counts
    if (haCount > naCount) {
        return true;
    } 
    else if (haCount === naCount) {
        return "equal";
    } 
    else {
        return false;
    }
}

//Problem-05: Text Analyzer for an AI Company
 function analyzeText(str) {

    // Check if input is string
    if (typeof str !== "string") {
        return "Invalid";
    }

    // Remove leading and trailing spaces
    const trimmed = str.trim();

    // If empty or only spaces
    if (trimmed.length === 0) {
        return "Invalid";
    }

    // Split into words
    const words = trimmed.split(" ");

    // Find longest word
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Count total characters without spaces
    const totalCharacters = trimmed.split(" ").join("").length;

    return {
        longwords: longestWord,
        token: totalCharacters
    };
}

