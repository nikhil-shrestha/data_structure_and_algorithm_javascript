// problem solved using Frequency Counter
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] + 1 : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    // can't find letter or letter is 0 then it's not anagram
    if (!lookup[letter]) {
      console.log(false);
      return false;
    }

    lookup[letter] -= 1;
  }

  console.log(true);
  return true;
}

validAnagram('anagram', 'nagram');
