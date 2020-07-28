function CheckNumberIsPositive(divider) {
    return divider >= 0;
}

function CheckIfArrayHasData(numbers) {
    return numbers.length > 0;
}

function CheckForRemainder(numbers, divider) {
    return numbers.length % divider == 0;
}

function HowManyNumbersPerArray(numbers, divider) {
    return numbers.length / divider;
}

function RemainingAmount(numbers, divider) {
    return numbers.length % divider;
}

module.exports = {
    BuildArrays: function (numbers, divider) {
        if (!CheckNumberIsPositive(divider))  throw 'Divider is not positive, shutting down';
        if (!CheckIfArrayHasData(numbers))  throw 'Array has not data, shutting down';
        var splitAmount = HowManyNumbersPerArray(numbers, divider);
        var isRemainder = CheckForRemainder(numbers, divider);
        var maxArraySize = isRemainder ? splitAmount + 1 : splitAmount;

        var position = 0;
        var arraySetUp = [];

        for (var i = 0; i < divider; i++) {
            var tempArray = [];
            maxArraySize = (!isRemainder && (i == divider-1)) ? RemainingAmount(numbers, maxArraySize) : maxArraySize;
            for (var j = 0; j < maxArraySize; j++) {
                if (position < numbers.length) {
                    tempArray.push(numbers[position]);
                    position++;
                }
            }
            arraySetUp.push(tempArray);
        }

        return arraySetUp;
    },

    PrintToScreen: function (array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}