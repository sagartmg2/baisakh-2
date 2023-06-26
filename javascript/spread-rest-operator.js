function calculateSum(num1, num2, num3 = 0, num4 = 0, ...rest) {
    console.log({ rest })
    let sum = 0;
    sum = num1 + num2 + num3 + num4

    rest.forEach(value => sum += value)

    console.log(sum)
}

calculateSum(1, 1)
calculateSum(1, 2, 3, 4, 5, 6, 7, 8)