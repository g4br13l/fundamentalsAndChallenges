

name = '';

function getName(callbackFunc) {
  setTimeout(() => {
    this.name = 'Gabriel';
    callbackFunc(name);
  }, 2000);
}


getName( (NameRes) => {
  console.log('NameRes: ', NameRes);
});

console.log('Name: ', name);
