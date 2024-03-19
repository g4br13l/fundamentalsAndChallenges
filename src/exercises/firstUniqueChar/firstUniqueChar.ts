/* URL: https://leetcode.com/problems/first-unique-character-in-a-string/description/

387. First Unique Character in a String (Easy)
  Given a string s, find the first non-repeating character in it and return its index.
  If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
*/


function findFirstUniqChar(s: string): number {

  const chars: string[] = s.split('');
  const months = ["Jan", "Feb", "Mar", "Apr"];
  const sortedChars = chars.sort();
  let runs = 0;

  const indexOfFirstUniqChar: number =
    chars.findIndex((currValue: string, currIndex: number, amount: string[]) => {

      runs++;

      if (currIndex < chars.length) {
        return (amount.indexOf(currValue, currIndex+1) === -1);
      }
  });

  console.log(`it runs ${runs} times`);
  return Number(indexOfFirstUniqChar);
}

console.log( 'result => '+ findFirstUniqChar('aass') );













