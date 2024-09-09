
/*
  Qual a diferença entre let, var e const?
  - var
    - É uma variável com escopo global (global-scoped), pode ser lida, alterada e redefinida
      de qualquer parte do código e geralmente seu uso é evitado.
  - let
    - É uma variável com escopo local (block-scoped), só pode ser lida e alterada dentro do seu escopo,
      e não pode ser redefinida. Seu uso é recomendado.
  - const
    - Não é uma variável e sim uma constante, seu valor é imutável.
      Tem escopo local e não pode ser redefinida. Seu uso é o mais recomendado.
 */




var x = 'varX-defined'     // global-scoped or function-scoped
var x = 'varX-re-defined'  // can be redefined
x = 'varX-modified'        // can be modified

let y = 'letY-defined'      // block-scoped - in this case it corresponds to all this file.
//let y = 'letY-redefined'  // can not be redefined
y = 'letY-modified'         // can be modified

console.log('global-before-all =>', { 'x': x, 'y': y } )



// block escope can access the global scope
{
  console.log('block-scope =>', { 'x': x, 'y': y } )
}

// block scope
function myFunc() {

  const z = 'constZ-defined-inFunction'
  let y = 'letY-defined-inFunction'
  console.log('function-before =>', { 'x': x, 'y': y, 'z': z } )

  if(true) { // block scope
    //console.log('[myFunc() [block-scope] before-all] y:', y)  // Error: y used before its declaration.
    let y = 'letY-defined-inFuncBlock'                          // can not be accessed outside
    console.log('funcBlock =>', { 'x': x, 'y': y, 'z': z } )
  }

  y = 'Ymodified-inFunction'
  x = 'Xmodified-inFunction'
  console.log('function-after =>', { 'x': x, 'y': y, 'z': z } )
}


myFunc()
console.log('global-after-all =>', { 'x': x, 'y': y, 'z': 'not defined' } )








