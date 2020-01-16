module.exports = function parseStringArray(stringArray) {
    return stringArray.split(',').map(item => item.trim());
}