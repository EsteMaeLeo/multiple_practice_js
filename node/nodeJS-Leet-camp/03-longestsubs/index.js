// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"
let s = 'abcabcbb'
console.log(s.length)
console.log(lengthOfLongestSubstring(s) )

function lengthOfLongestSubstring(s) {
    let windowCharMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for(let i = 0; i < s.length ; i++){
        const endChar = s[i]; 
        console.log(windowCharMap[endChar])
        console.log(windowStart)
        if(windowCharMap[endChar] >= windowStart){

            windowStart = windowCharMap[endChar] + 1;
            console.log(windowCharMap[endChar])
        }
        windowCharMap[endChar] = i
        maxLength = Math.max(maxLength, i - windowStart + 1);
        console.log(windowStart)
                  console.log(i)
        console.log(maxLength)
    }
    return maxLength;
}


module.exports = lengthOfLongestSubstring;