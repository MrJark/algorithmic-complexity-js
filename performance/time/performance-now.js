//Temporal performance
function count(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);        
    }
}

let initial_time = performance.now();
count(57);
let final_time = performance.now();
let duration = final_time - initial_time;

console.log(`El tiempo que ha durado el algoritmo ha sido ${duration}`);