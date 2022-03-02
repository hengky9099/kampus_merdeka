const callMyName = (param1, param2, param3) => {
    return param1 + param2 + param3
}

console.log(callMyName())

// benefit of arrow function
// if only 1 parameter, no need ()
// if only return something, no need scope


const multiple = (step, stop) => {
    let result = []
    for(let i = step; i <= stop; i += step){
        result.push(i)
    }
    return result
}

// array CRUD

// object CRUD

// destruction in array and object
let students = ['henkgy', 'tortj']
let [name1, name2] = students

/// spread operator
// object
const data = {...biodata}

// instalasi git