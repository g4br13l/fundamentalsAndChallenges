



function canPlaceFlowers(flowerbed: number[], n: number): boolean {

  let places: number = 0

  for(let i = 0; i < flowerbed.length; i++) {
    if(flowerbed[i-1] !== 1 && flowerbed[i] === 0 && flowerbed[i+1] !== 1) {
      places++
      i++
    }
  }
  console.log('places:', places, ' flowers:', n)
  return n <= places
}




console.log('result:', canPlaceFlowers([0,0,1,0,1], 1))
console.log('result:', canPlaceFlowers([1,0,1,0,1,0,1], 1))
console.log('result:', canPlaceFlowers([1,0,0,1], 1))
console.log('result:', canPlaceFlowers([1,0,0,0,1], 1))
console.log('result:', canPlaceFlowers([1,0,0,0,0,0,1], 2))
console.log('result:', canPlaceFlowers([1,0,0,0,0,0,1], 3))
console.log('result:', canPlaceFlowers([1,0,0,0,0,0,0,0,0,1], 4))
console.log('result:', canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,1], 4))

