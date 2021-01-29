function* func() {
  console.log('one')
  yield '1'
  console.log('two')
  yield '2'
  console.log('three')
  yield '3'
}

// const f = func()
// console.log('next1:', f.next())
// console.log('next2:', f.next())
// console.log('next3:', f.next())
// console.log('next4:', f.next())
for(const [key, value] of func()) {
  console.log('key: ', key)
  console.log('value: ', value)
}
