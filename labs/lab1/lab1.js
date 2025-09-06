// COMP3123 - Lab 1
// Student name: Daniil Orlov
// Student number: 101500729

//Exercise 2

function max(num1, num2, num3){
    maxNumber = num1;

    if(maxNumber < num2){
        maxNumber = num2;
    }  
    if (maxNumber < num3){
        maxNumber = num3;
    }
       

    return maxNumber;
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

// Exercise 3

function right(string){
    if(string.length < 3){
        return string;
    }
    let newString = "";
    for(let i = string.length-3; i < string.length; i++){
        newString+=string.charAt(i);
    }
    for(let i = 0; i < string.length-3; i++){
        newString+=string.charAt(i);
    }
    return newString;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

// Exercise 4
function angle_type(angle){
    if(angle == 180)
        return "Straight angle";
    else if (angle > 90)
        return "Obtuse angle";
    else if (angle == 90)
        return "Right angle";
    else (angle > 90)
        return "Acute angle";
}

console.log(angle_type(47))
console.log(angle_type(90))
console.log(angle_type(145))
console.log(angle_type(180))

// Exercise 5

function array_max_sum(array, count){
    let max_sum =0;

    for(let i = 0; i <= array.length-count; i++){
        let sum = 0;

        for(let j = i, k = 0; j < array.length && k < count; j++, k++){
            sum += array[j];
        }

        if(max_sum < sum)
            max_sum = sum;
    }
    return max_sum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))