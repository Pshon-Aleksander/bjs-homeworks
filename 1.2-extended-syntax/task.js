'use strict';
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    const result = [];
    if (a === 0 || b === 0 || c === 0) {
        return false;
    }
    if (discriminant === 0) {
        result.push(-b / (2 * a));
    }
    else if (discriminant > 0) {
        result.push(((-b + Math.sqrt(discriminant)) / (2 * a)));
        result.push(((-b - Math.sqrt(discriminant)) / (2 * a)));
    }
    return result
    // return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь

    if(marks.length == 0){
        return 0
    } else {
        let total = marks.splice(0,5)
        let result = (total.reduce((a, b) => (a + b))) / total.length;
        return result
    }
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let old = dateOfBirthday.getFullYear()
    let today = new Date()
    let today_year = today.getFullYear()
    let drinkOrNot = today_year - old
    let result = drinkOrNot >= 21 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    return result;
}
