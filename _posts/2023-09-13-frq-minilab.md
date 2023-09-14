---
title: FRQ Mini-Lab 1
author: david
categories: ['Lab Notebook']
tags: ['Java', 'Collegeboard']
type: tangibles
week: 0
description: First CSA FRQ.
toc: True
comments: True
date: 2023-09-13 12:00:00 +0000
---

## FRQ 2018 Number 4

This question involves reasoning about arrays of integers. You will write two static methods, both of which are
a class named `ArrayTester`.


```java
public class ArrayTester {

    // Returns an array containing the elements of column c of arr2D in the same order as they appearin arr2D.
    // Precondition: c isa valid column index in arr2D.
    // Postcondition: arr2D is unchanged.

  public static int[] getColumn(int [] [] arr2D, int c) {
    // to be implemented in part (a)
  }

  // Returns true if and only if every value in arrl appears in arr2.
  // Precondition: arr1 and arr2 have the same length.
  // Postcondition: arrl and arr2 are unchanged.

  public static boolean hasAllVa1ues(int[] arrl, int[] arr2) { 
    // implementation not shown
  }

  // Returns true if arr contains any duplicate values;
  //         false otherwise.

  public static boolean containsDup1icates(int [] arr) {
    // implementation not shown
  }

  // Returns true if square is a Latin square as described in part (b);
  //         false otherwise.
  // Precondition: square has an equal number of rows and columns.
  //               square has at least one row.

  public static boolean isLatin(int [] [] square){
    // to be implemented in part (b)
  }
}
```

### Part A

Write a static method `getColumn`, which returns a one-dimensional array containing the elements of a
single column in a two-dimensional array. The elements in the returned array should be in the same order as
they appear in the given column. The notation `arr2D [r] [c]` represents the array element at row `r` and
column `c`.

The following code segment initializes an array and calls the `getColumn` method.


```java
int [] [] arr2D = { { 0, 1, 2 },
                    { 3, 4, 5 },
                    { 6, 7, 8 },
                    { 9, 5, 3 } };

int [] result = ArrayTester.getColumn(arr2D, 1);
```

When the code segment has completed execution, the variable `result` will have the following contents.

`result: { 1, 4, 7, 5 }`

### Answer for Part A


```java
public class ArrayTester {
  static int[][] arr2D = { { 0, 1, 2 },
                          { 3, 4, 5 },
                          { 6, 7, 8 },
                          { 9, 5, 3 } };

  public static int[] getColumn(int[][] arr2D, int c) {
    // creates var that stores result, and is the length of overall array (length = number of rows)
    int[] result = new int[arr2D.length];

    // sets index to 0
    // when i < number of rows
    // adds 1 to i after each iteration
    for (int i = 0; i < arr2D.length; i++) {
      // gathers data from the row number it is on, from the addressed column
      // stores in the var result
      result[i] = arr2D[i][c];
    }
    // returns values of results
    return result;
  }


  public static void main(String[] args) {
    // same as:
    // int [] result = ArrayTester.getColumn(arr2D, 1);
    int[] column = getColumn(arr2D, 1);

    // go through result and print
    for (int value : column) {
      // print result
      System.out.println(value);
    }
  }
}

ArrayTester.main(null);
```

    1
    4
    7
    5


### Part B

Write the static method `isLatin`, which returns true if a given two-dimensional square array is a
*Latin square*, and otherwise, returns `false`.

A two-dimensional square array of integers is a Latin square if the following conditions are true.

- The first row has no duplicate values.
- All values in the first row of the square appear in each row of the square.
- All values in the first row of the square appear in each column of the square.

The `ArrayTester` class provides two helper methods: `containsDuplicates` and
`hasA11Values`. The method `containsDuplicates` returns true if the given one-dimensional
array `arr` contains any duplicate values and false otherwise. The method `hasA1lVa1ues` returns
`true` if and only if every value in `arrl` appears in `arr2`. You do not need to write the code for these
methods.

### Answer for Part B


```java
public class ArrayTester {
  static int[][] arr2D = { { 0, 1, 2 },
                          { 3, 4, 5 },
                          { 6, 7, 8 },
                          { 9, 5, 3 } };

  public static int[] getColumn(int[][] arr2D, int c) {
    int[] result = new int[arr2D.length];

    for (int i = 0; i < arr2D.length; i++) {
      result[i] = arr2D[i][c];
    }
    return result;
  }

// CHATGPT

  // Returns true if and only if every value in arrl appears in arr2.
  // Precondition: arr1 and arr2 have the same length.
  // Postcondition: arrl and arr2 are unchanged.

  public static boolean hasAllValues(int[] arr1, int[] arr2) {
      for (int i = 0; i < arr1.length; i++) {
        boolean found = false;
        for (int j = 0; j < arr2.length; j++) {
          if (arr1[i] == arr2[j]) {
            found = true;
            break; // Value found in arr2, move to the next value in arr1
          }
        }
        if (!found) {
          return false; // Value in arr1 not found in arr2
        }
      }
      return true; // All values in arr1 found in arr2
    }


  // Returns true if arr contains any duplicate values;
  //         false otherwise.

  public static boolean containsDuplicates(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          return true; // Found a duplicate
        }
      }
    }
    return false; // No duplicates found
  }

// END CHATGPT

  public static boolean isLatin(int[][] square){
    // checks for duplicate numbers
    if (!containsDuplicates(square[0])) {
      return false;
    }

    // checks for if all rows have all values
    for (int i = 1; i < square.length; i++) {
      if (!hasAllValues(square[0], square[i])) {
        return false;
      }
    }

    // checks for if all columns have all values
    for (int c = 0; c < square[0].length; c++) {
      if (!hasAllValues(square[0], getColumn(square, c))) {
        return false;
      }
    }

    // returns true if all tests are complete and don't return false
    return true;
  }

  // prints boolean
  public static void main(String[] args) {
    boolean result = isLatin(arr2D);
    System.out.println(result);
  }
}

ArrayTester.main(null);
```

    false

