// Write a JavaScript program to construct the following pattern, using a nested for loop.

//   *
//   * *
//   * * *
//   * * * *
//   * * * * *

function star(n = 5) {
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            console.log("*");
        }
        console.log("\n");
    }
}