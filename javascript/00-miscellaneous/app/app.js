let s = 'abcabcbb'

console.log(lengthOfLongestSubstring(s) )

function lengthOfLongestSubstring(s) {
    let windowCharMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for(let i = 0; i < s.length ; i++){
        const endChar = s[i]; 
        console.log(endChar)

        if(windowCharMap[endChar] >= windowStart){

            windowStart = windowCharMap[endChar] + 1;
            console.log(windowCharMap[endChar])
        }
        windowCharMap[endChar] = i
        maxLength = Math.max(maxLength, i - windowStart + 1);
        console.log(windowStart)
        console.log(windowCharMap)
        console.log(maxLength)
    }
    return maxLength;
}
