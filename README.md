# String Calculator - TDD Assignment (Incubyte)

This repository contains an implementation of the **String Calculator Kata** built using **Test-Driven Development (TDD)**. The solution was developed by gradually writing failing tests first, then implementing the features to pass those tests, and finally refactoring as needed.

---

## Tech Stack

- **Language**: JavaScript (Node.js)
- **Testing Framework**: Jest

---

## Getting Started

###  Installation

```bash
# Clone this repository
git clone https://github.com/Meet-Thakkar21/Incubyte-TDD-Assesment.git

# Move into the project directory
cd Incubyte-TDD-Assesment

# Install all dependencies
npm install

# Run tests
npm test
```

---

## 📁 Folder Structure

```
Incubyte-TDD-Assesment/
├── src/
│   └── stringCalculator.js       # Core logic implementation
├── test/
│   └── stringCalculator.test.js  # Jest test cases for all features
├── package.json                  # Project configuration and dependencies
└── README.md                     # Project documentation
```

---

## Function Overview

### `add(numbers: string): number`

- Accepts a string of numbers separated by delimiters and returns their sum.
- Handles:
  - Empty strings (returns 0)
  - Comma `,` and newline `\n` as default delimiters
  - Custom delimiters: single-character and multi-character
  - Multiple delimiters
  - Negative numbers (throws exception)
  - Numbers > 1000 are ignored

### `getCalledCount(): number`

- Returns the number of times the `add()` function has been called.

### `resetCalledCount(): void`

- Resets the internal counter tracking how many times `add()` has been called.

---

## TDD Process

The implementation strictly follows the **TDD methodology**:

1. Write a failing test case for a specific requirement.
2. Implement code to make the test pass.
3. Refactor the implementation if needed.
4. Commit at each step with descriptive messages.

---

## All Test Cases

### Addition Logic

| Input             | Output | Notes                                 |
|------------------|--------|----------------------------------------|
| `""`              | `0`    | Empty string                          |
| `"1"`             | `1`    | Single number                         |
| `"1,2"`           | `3`    | Two comma-separated numbers           |
| `"1,2,3"`         | `6`    | Multiple comma-separated values       |
| `"1\n2,3"`        | `6`    | Comma and newline as delimiters       |
| `"1001,2"`        | `2`    | Ignores numbers > 1000                |
| `"1000,1"`        | `1001` | Includes 1000, ignores 1001           |

---

### Negative Number Exception

| Input             | Error Message                                |
|------------------|-----------------------------------------------|
| `"1,-2"`          | `Negatives not allowed: -2`                  |
| `"-1,-2,3"`       | `Negatives not allowed: -1,-2`               |
| `"1,-2,-3,4"`     | `Negatives not allowed: -2,-3`               |

---

### Custom Delimiters

| Input                                 | Output | Notes                                      |
|--------------------------------------|--------|--------------------------------------------|
| `"//;\n1;2"`                         | `3`    | Single-character custom delimiter          |
| `"//[***]\n1***2***3"`               | `6`    | Multi-character delimiter                  |
| `"//[*][%]\n1*2%3"`                  | `6`    | Multiple single-character delimiters       |
| `"//[**][%%]\n1**2%%3"`              | `6`    | Multiple multi-character delimiters        |
| `"//[!!]\n1!!-2!!3"`                 | Error  | Negative number with custom delimiter      |
| `"//[###][@]\n1###2@3"`              | `6`    | Custom mixed-character delimiters          |

---

### Call Count Tracking

```js
resetCalledCount();
add("1,2");      // callCount = 1
add("4,5");      // callCount = 2
getCalledCount(); // returns 2
```

---

## Test Results Screenshot

> All test cases are passing successfully.

![Tests Passed Screenshot](https://github.com/user-attachments/assets/363552d6-12c5-4ef6-9af5-2a183f6a42ce)

---

## Kata Reference

This project is based on the official [String Calculator Kata by Roy Osherove](https://osherove.com/tdd-kata-1). It serves as an exercise to practice TDD with incremental features and clean commit history.

---
