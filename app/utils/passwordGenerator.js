// utils/passwordGenerator.js

export function generatePassword(minLength) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?=-";
    const allChars = lowercase + uppercase + numbers + specialChars;
    
    let password = "";
    const charCount = allChars.length;
    
    while (password.length < minLength) {
        const randomIndex = Math.floor(Math.random() * charCount);
        password += allChars[randomIndex];
    }
    
    return password;
}
