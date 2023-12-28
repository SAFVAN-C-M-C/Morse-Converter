const convertToMorse = (text) => {
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '!': '-.-.--', '@': '.--.-.', '#': '#', '$': '...-..-', '%': '----.', '^': '-..-', '&': '.-...', '*': '-.--.', '(': '-.--.', ')': '-.--.-',
        '_': '..--.-', '+': '.-.-.', '-': '-....-', '=': '-...-', '\\': '.----.', '|': '-.-..', '{': '-.--.', '}': '-.--.-', '[': '-.--.', ']': '-.--.-',
        ';': '-.-.-.', ':': '---...', '\'': '.----.', '"': '.-..-.', ',': '--..--', '.': '.-.-.-', '>': '---.', '<': '----.', '/': '-..-.', '?': '..--..',
        ' ': ' '
        // Add more characters as needed
    };

    // Convert text to uppercase for simplicity
    const upperText = text.toUpperCase();

    // Split the text into words
    const words = upperText.split(' ');

    // Convert each word to Morse code
    const morseWords = words.map(word => {
        // Split the word into characters
        const characters = word.split('');

        // Convert each character to Morse code
        const morseCharacters = characters.map(character => {
            if (morseCodeMap.hasOwnProperty(character)) {
                return morseCodeMap[character];
            } else {
                // If the character is not in the map, return an empty string
                return '';
            }
        });

        // Join the Morse code characters with a space
        return morseCharacters.join(' ');
    });

    // Join the Morse code words with three spaces to indicate word separation
    return morseWords.join('   ');
}
const convertToText = (morseCode) => {
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '!': '-.-.--', '@': '.--.-.', '#': '#', '$': '...-..-', '%': '----.', '^': '-..-', '&': '.-...', '*': '-.--.', '(': '-.--.', ')': '-.--.-',
        '_': '..--.-', '+': '.-.-.', '-': '-....-', '=': '-...-', '\\': '.----.', '|': '-.-..', '{': '-.--.', '}': '-.--.-', '[': '-.--.', ']': '-.--.-',
        ';': '-.-.-.', ':': '---...', '\'': '.----.', '"': '.-..-.', ',': '--..--', '.': '.-.-.-', '>': '---.', '<': '----.', '/': '-..-.', '?': '..--..',
        ' ': ' '
        // Add more characters as needed
    };

    // Create a reverse map to convert Morse code back to text
    const reverseMorseCodeMap = {};
    for (const [key, value] of Object.entries(morseCodeMap)) {
        reverseMorseCodeMap[value] = key;
    }

    // Split the Morse code into words
    const morseWords = morseCode.split('   ');

    // Convert each Morse code word to text
    const textWords = morseWords.map(morseWord => {
        // Split the Morse code word into characters
        const morseCharacters = morseWord.split(' ');

        // Convert each Morse code character to text
        const textCharacters = morseCharacters.map(morseCharacter => {
            if (reverseMorseCodeMap.hasOwnProperty(morseCharacter)) {
                return reverseMorseCodeMap[morseCharacter];
            } else {
                // If the Morse code character is not in the map, return an empty string
                return '';
            }
        });

        // Join the text characters to form a word
        return textCharacters.join('');
    });

    // Join the text words to form the final text
    return textWords.join(' ');
}

module.exports = {
    convertToMorse,
    convertToText
}