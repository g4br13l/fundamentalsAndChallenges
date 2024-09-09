/*
  Primitive:
   1- string
   2- number
   3- bigInt
   4- boolean
   5- undefined
   6- symbol

   Structural:
   - Object (use New): Object, Array, Map, Set, WeakSet
   - Function

*/

/*
  What the diference between Primitive and Structural Types?
    Primitive variables receives values and are immutable,
    Structural variables receives references and are mutable.
*/


namespace PrimitivesStructutal {

  // Primitive string - Gets the value
  let x = 2;
  let y = x;

  y += 1;
  console.log('y:', y, 'x:', x);


// Structural Array - Gets the reference to a value
  let xArray = [1, 2, 3];
  let yArray = xArray;

  yArray.push(4);
  console.log('xArray:', xArray, 'yArray:', yArray);



  let myName = 'Gabriel';
//myName[0] = 'R';         // Error: Index signature in type String only permits reading.

  myName = 'Rafael';   // Resigning the value. It is different of modify the value.

  yArray[0] = 9;
  console.log('xArray:', xArray, 'yArray:', yArray);

}







