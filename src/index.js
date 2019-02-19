/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.unshift(0);
  for (let i = 1; i < preferences.length; i++) {
  //  let k = i;

    const first = preferences[i];
    const second = preferences[first];
    const third = preferences[second]

    //console.log(first, second, third);
   
   if(i === third) {count +=1;}
  
 }
  
  return Math.floor(count/3);
};

