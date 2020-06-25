// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show
// the result.

function Sort(a, b, c) {
    var sort = [];
    if (a >= b && a >= c) {
        sort.push(a);
        if (b >= c) {
            sort.push(b);
            sort.push(c);
        } else {
            sort.push(c);
            sort.push(b);
        }
    }
    if (b >= a && b >= c) {
        sort.push(b);
        if (a >= c) {
            sort.push(a);
            sort.push(c);
        } else {
            sort.push(c);
            sort.push(a);
        }
    }
    if (c >= a && c >= b) {
        sort.push(c);
        if (a >= b) {
            sort.push(a);
            sort.push(b);
        } else {
            sort.push(b);
            sort.push(a);
        }
    }
    alert(sort[0] + ", " + sort[1] + ", " + sort[2]);
}
