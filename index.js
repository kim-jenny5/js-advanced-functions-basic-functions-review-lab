function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = "*") {
    return function (adj = "special") {
        return `You are ${str}${adj}${str}!`
    }
}

// console.log(wrapAdjective()())

const Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
}

function actionApplyer(start, arr) {
    if (arr.length === 0) {
        return start
    } else {
        for (const func of arr) {
            start = func(start)
        }
        return start
    }
}
