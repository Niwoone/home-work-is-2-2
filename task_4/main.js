let users = [{ name: "Harry", height: 180 }, { name: "Ron", height: 175 }, { name: "Germiona", height: 169 }]
for (let user of users){
    console.log(user.name)
}
for( let user of users){
    user.height += 6
    
}
for (let user of users){
    console.log(`${user.height}`)
}