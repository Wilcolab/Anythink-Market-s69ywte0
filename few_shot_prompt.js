function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber


function addNumbers(a, b) {
    if (a === null || a === undefined || b === null || b === undefined) {
        throw new Error('Inputs cannot be null or undefined');
    }
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    
    return a + b;
}

// Test cases
console.log(addNumbers(5, 3));           // 8
console.log(addNumbers(10, -5));         // 5
console.log(addNumbers(2.5, 1.5));       // 4
try {
    addNumbers('5', 3);                  // throws error
} catch (e) {
    console.log(e.message);
}
try {
    addNumbers(5, null);                 // throws error
} catch (e) {
    console.log(e.message);
}


// Converts a string to dot.case (lowercase words separated by '.')
function toDotCase(str) {
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    if (typeof str !== 'string') {
        str = String(str);
    }

    let s = str.trim();
    if (!s) return '';

    // Normalize common separators to spaces
    s = s.replace(/[_\-\s]+/g, ' ');

    // Split camelCase / PascalCase and acronym boundaries:
    // a) lower-to-upper: "firstName" -> "first Name"
    s = s.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    // b) acronym-to-word: "JSONResponse" -> "JSON Response"
    s = s.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');

    // Split on any non-alphanumeric chars (including the spaces we've inserted)
    const parts = s.split(/[^A-Za-z0-9]+/).filter(Boolean);

    return parts.map(p => p.toLowerCase()).join('.');
}

// Test cases for toDotCase
console.log('\n-- toDotCase tests --');
console.log(toDotCase('first name'));        // first.name
console.log(toDotCase('user_id'));           // user.id
console.log(toDotCase('SCREEN_NAME'));       // screen.name
console.log(toDotCase('mobile-number'));     // mobile.number
console.log(toDotCase('firstName'));         // first.name
console.log(toDotCase('JSONResponse'));      // json.response
console.log(toDotCase('--FooBar--Baz'));     // foo.bar.baz
console.log(toDotCase('Version2Number'));    // version2.number