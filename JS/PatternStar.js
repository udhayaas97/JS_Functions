function star(n = 5) {
    alert("Working");
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            console.log("*");
        }
        console.log("\n");
    }
}