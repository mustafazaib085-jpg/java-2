
var a = 2, b = 1;

// Step 1: --a
var A = --a;  // pre-decrement a: 2 → 1


// Step 2: --a - --b
var A1 = A - --b;  // pre-decrement b: 1 → 0


// Step 3: --a - --b + ++b
var B = A1 + ++b;  // pre-increment b: 0 → 1


// Step 4: --a - --b + ++b + b--
var B1 = B + b--;  // post-decrement b: value used = 1, b becomes 0


// Final values
document.writeln(`Final Values:<br> a = ${a} <br> b = ${b} <br> result = ${B1} <br>`);




