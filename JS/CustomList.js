// Given a list lst and a number N, create a new list that contains each number of lst at most N
// times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take
// [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and
// then take 3, which leads to [1,2,3,1,2,3].
// Example
//  deleteNth ([1,1,1,1],2) // return [1,1]
//  deleteNth ([20,37,20,21],1) // return [20,37,21]

function CustomList(arr, n) {
    var result = [];
    var remainig = [];
    arr.forEach(element => {
        var nos = NoOfElemnt(result, element);
        if (nos < n) {
            var rnos = NoOfElemnt(remainig, element);
            if (nos == 0 || (nos + rnos) % n == 0)
                result.push(element);
            else
                remainig.push(element);
        }
    });
    return result;
}

function NoOfElemnt(arra, number) {
    var nos = 0;
    arra.forEach(element => {
        if (element == number)
            nos += 1;
    });
    return nos;
}