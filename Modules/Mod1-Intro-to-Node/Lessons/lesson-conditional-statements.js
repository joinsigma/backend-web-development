/**
 * If statements
 */
const bestLOTRChar = "Aragorn";
if (bestLOTRChar === "Aragorn") {
    console.log("You are correct!");
} else  {
    console.log("No, that's not right. Aragorn is the best!");
}

if (bestLOTRChar !== "Aragorn") {
    console.log("No, that's not right. Aragorn is the best!");
} else  {
    console.log("You are correct!");
}



/**
 * Switch statements
 */
const boolSwitch = true;
switch (boolSwitch) {
    case true:
        console.log("Case is true");
        break;
    case false:
        console.log("Case is false");
        break;
    default:
        console.log("Case is true");
        break;
}

// Combining cases
const number = 3;
switch (number % 3) {
    case 0:
        console.log("Divisible by 3");
        break;
    case 1:
    case 2:
    default:
        console.log("Not divisible by 3");
        break;
}

/**
 * Ternary operator, single line if statement
 */
const bestWizard = "Gandalf";
(bestWizard === "Gandalf") ? console.log("Yeah, Gandalf is the best wizard") : console.log("Nope, Gandalf is the best wizard!");



/**
 * Using objects literals as conditional operators
 */
function getTranslations(text) {
    const translations = {
        "Good Morning": "Selamat Pagi",
        "How are you?": "Apa khabar?"
    }
    
    return translations[text];
}

function getTranslations(text) {
    if (text === "Good Morning") {
        return "Selamat Pagi";
    } else if (text === "How are you?") {
        return "Apa khabar?";
    }
}

console.log(getTranslations["Good Morning"]);

