function breaks(row, coloumn) {
    if ((row < 2 && coloumn < 2) || row < 1 || coloumn < 1)
        return 0;
    else
        return (row - 1) + (row * (coloumn - 1));
}