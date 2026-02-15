/**
 * Converts a string to dot case format.
 * 
 * This function transforms various string formats (camelCase, snake_case, kebab-case, etc.)
 * into dot-separated lowercase format. It handles multiple naming conventions and normalizes
 * them to a consistent dot notation.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert to dot case format.
 *                       Can be in camelCase, PascalCase, snake_case, kebab-case,
 *                       or space-separated format.
 * @returns {string} The converted string in dot case format (lowercase with dots as separators).
 * 
 * @example
 * // Convert camelCase to dot case
 * toDotCase('myVariableName');  // Returns: 'my.variable.name'
 * 
 * @example
 * // Convert snake_case to dot case
 * toDotCase('my_variable_name');  // Returns: 'my.variable.name'
 * 
 * @example
 * // Convert kebab-case to dot case
 * toDotCase('my-variable-name');  // Returns: 'my.variable.name'
 * 
 * @example
 * // Convert space-separated to dot case
 * toDotCase('my variable name');  // Returns: 'my.variable.name'
 * 
 * @example
 * // Convert PascalCase to dot case
 * toDotCase('MyVariableName');  // Returns: 'my.variable.name'
 */
function toDotCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1.$2')
        .replace(/[\s_-]+/g, '.')
        .toLowerCase();
}

module.exports = toDotCase;
