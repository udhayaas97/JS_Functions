// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square
// is of size 1x1 and unbreakable. Implement a function that will return the minimum number of
// breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can
// split it into single squares in just one break, but for size 3 x 1
// you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are
// needed if we do not have any chocolate to split). Input will always
// be a non-negative integer.

function breaks(row, coloumn) {
    if (row < 1 || coloumn < 1)
        return 0;
    else
        return (row - 1) + (row * (coloumn - 1));
}