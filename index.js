// code your solution here
// function superbowlWin(anArray){
//     for(let item of anArray){
//         if(item.result === 'W'){
//         return(item.year)
//         }
//     }
// }

function superbowlWin(anArray){
    let outcome = anArray.find(obj => {
        return(obj.result === 'W')
    })
    if(outcome !== undefined) {
        return(outcome.year)
    }else {
        return(undefined)
    }
    console.log(outcome)
}



let newArray = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

console.log(superbowlWin(newArray))

