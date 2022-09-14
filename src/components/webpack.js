function fn(source) {
  return source.replace(/var/g, 'const') // var a = 1; 将被转换为 const a = 1;
}
let source = `
  var a = 1;
  let b = 2;
  const c = 3;
`
console.log(fn(source));