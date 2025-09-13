#### 1) What is the difference between var, let, and const?

Answer:
i) Var has function-scoped but let and const has block-scoped.
ii) Var can be re-declared in the same scope but let and const cannot be re-declared in the same scope.
iii) Var value can be changed , let value can be changed but const value cannot be changed.

#### 2) What is the difference between map(), forEach(), and filter()?

Answer:
map()
i) Creates a new array by transforming each element.
ii) Always returns an array of the same length.
iii) Useful when you want to modify each item.
forEach()
i) Executes a function on each element, but does not return a new array.
ii) Mostly used for side effects (like logging, updating DOM, pushing into another array).
iii) Does not break early.
filter()
i) Creates a new array with elements that pass a condition (true/false).
ii) Useful for searching or removing unwanted items.
iii) Length of the new array may be smaller.

#### 3) What are arrow functions in ES6?

Answer:
An arrow functions in ES6 are a shorter way to write functions in JavaScript that is using the => syntax.

#### 4) How does destructuring assignment work in ES6?

Answer:
Destructuring assingment works in ES6 unpacking data cleaner and easier.

#### 5) Explain template literals in ES6. How are they different from string concatenation?

Answer:
Template literals are a new way to work with strings using backticks (`) instead of quotes.
Features:
i) String Interpolation – Embed variables/expressions with ${}.
ii) Multi-line Strings – Preserve line breaks without \n.
iii) Expression Evaluation – Run JS expressions inside strings.
