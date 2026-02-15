function toKebabCase(str) {
    // Trim leading and trailing spaces
    str = str.trim();
    
    // Replace spaces and uppercase letters with hyphen + lowercase letter
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (char === ' ') {
            // Add hyphen for spaces (avoid consecutive hyphens)
            if (result && result[result.length - 1] !== '-') {
                result += '-';
            }
        } else if (char === char.toUpperCase() && /[A-Z]/.test(char)) {
            // Add hyphen before uppercase and convert to lowercase
            if (result && result[result.length - 1] !== '-') {
                result += '-';
            }
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    
    // Remove any leading or trailing hyphens
    return result.replace(/^-+|-+$/g, '');
}