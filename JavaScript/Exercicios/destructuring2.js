const [a] = [10]
console.log(a)

const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 9], [9, 6, 8]]
console.log(nota)

const lista = [1, 23, 55, 37, 43, 41]

const [primeiro, segundo, ...resto] = lista
console.log(primeiro, segundo, resto)
