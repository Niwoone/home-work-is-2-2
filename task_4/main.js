let person = [[153, 4],[3553],[4643252],[43242],[321321]]
console.log('Двумерный массив' )
for(let i of person){
    for(let n of i){
        console.log(n)
    }
}
    let sum = 0
    for(let j of person){
        for(let k of j){
            sum += k 

        }      
    }
        console.log('Сумма всех элемментов',sum)
        console.log('Кол-во элемнтов в каждом массиве')
        for(let g of person){
            console.log(g.length)
        }
        