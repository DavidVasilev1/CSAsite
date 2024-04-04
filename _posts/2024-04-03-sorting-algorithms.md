---
title: Algorythmic Sorts
author: david
categories: ['Lab Notebook']
tags: ['Java']
type: tangibles
week: 29
description: The sorts documented from algorythmic
toc: True
comments: True
date: 2024-04-03 12:00:00 +0000
---

## Bubble Sort

Here is my implementation of bubble sort:


```java
import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        // moving through all elements of the array
        for (int i = 0; i < n - 1; i++) {
            // the last element is in place sop we start at the next one
            for (int j = 0; j < n - i - 1; j++) {
                // check and swap if the values are not sorted
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        // test array
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Bubble Sort:");
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}

BubbleSort.main(null);
```

    Bubble Sort:
    [11, 12, 22, 25, 34, 64, 90]


With this sort, we essentially iterate through the list and compare the values that are next to each other and this goes on until the list is sorted.

## Selection Sort

This is my implementation of selection sort:


```java
import java.util.Arrays;

public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        // shifting boundary of unsorted array
        for (int i = 0; i < n - 1; i++) {
            // find minimum of the subarray
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // swapping the minimum with the first value of the array
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Selection Sort:");
        selectionSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}

SelectionSort.main(null);
```

    Selection Sort:
    [11, 12, 22, 25, 34, 64, 90]


This sort breaks the sort into a subarray and then based on that finds the minimum of that subarray and moves it to the front of the subarray, shifting the boundary and going on and on until the boundary reaches the end of the array.

## Insertion Sort

This is insertion sort:


```java
import java.util.Arrays;

public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        // iterating through the array
        for (int i = 1; i < n; ++i) {
            // finding the key of the array
            int key = arr[i];
            // finding compare value
            int j = i - 1;
            // moving values that are before the key and greater than the key after the key
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Insertion Sort:");
        insertionSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}

InsertionSort.main(null);
```

    Insertion Sort:
    [11, 12, 22, 25, 34, 64, 90]


How this one works is that the values that are before the key and greater than the key are moved to after the key and the rest of the values stay before the key and as the key moves through the array, the array sorts.


```java
import java.util.Arrays;

public class MergeSort {
    public static void mergeSort(int[] arr) {
        if (arr.length > 1) {
            int mid = arr.length / 2;
            int[] left = Arrays.copyOfRange(arr, 0, mid); // split array in halves
            int[] right = Arrays.copyOfRange(arr, mid, arr.length);

            mergeSort(left); // sort the left with recursion
            mergeSort(right); // sort the right with recursion

            merge(arr, left, right); // merge the sorted halves
        }
    }

    private static void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        // merging the left and right arrays
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        // moving any remaining elements in the left array
        while (i < left.length) {
            arr[k++] = left[i++];
        }
        // moving any remaining elements in the right arrray
        while (j < right.length) {
            arr[k++] = right[j++];
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Merge Sort:");
        mergeSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}

MergeSort.main(null);
```

    Merge Sort:
    [11, 12, 22, 25, 34, 64, 90]


This algorithm takes the array and splits it into halves an infinite number of times until there are only pairs. From there the values are broken down and compared to the other value around them to see if they are greater than or less than and then they are moved respectively. If the values are the same, they are not moved.

## Quick Sort

This is quick sort:


```java
import java.util.Arrays;

public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // this is where the array is partitioned
            int pi = partition(arr, low, high);
            // sorts the elements before and after the partition
            quickSort(arr, low, pi - 1); // recursive calls
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // pivot defined
        int i = low - 1; // index of the smaller element
        for (int j = low; j < high; j++) {
            // if the element is smaller than the pivot, it is moved to the left
            if (arr[j] < pivot) {
                i++;
                // swapping the array
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // swapping the higher value with the pivot
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Quick Sort:");
        quickSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}

QuickSort.main(null);
```

    Quick Sort:
    [11, 12, 22, 25, 34, 64, 90]


In this sort, there is a pivot which is used to sort so that the two values that are next to each other are compared and then sorted out and this occurs until the entire array is sorted.

## Merge Sort with Linked Lists


```java
import java.util.Comparator;

public class LinkedList<T extends Comparable<T>> {

    private Node<T> head;
    private int size;

    // this is the node class
    private static class Node<T> {
        T data;
        Node<T> next;

        public Node(T data) {
            this.data = data;
            this.next = null;
        }
    }

    // this is the constructor
    public LinkedList() {
        head = null;
        size = 0;
    }

    // this allows for data to be inserted into the end of the linked list as a node
    public void insert(T data) {
        Node<T> newNode = new Node<>(data);
        if (head == null) {
            head = newNode;
        } else {
            Node<T> current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }

    // this performs the merge sort on the head
    public void mergeSort() {
        head = mergeSort(head);
    }

    // this is the method called to perform merge
    private Node<T> mergeSort(Node<T> head) {
        // for an empty list
        if (head == null || head.next == null) {
            return head;
        }

        // finds the center of the list
        Node<T> middle = getMiddle(head);
        Node<T> nextOfMiddle = middle.next;

        // splits the list in two
        middle.next = null;

        // does merge on left
        Node<T> left = mergeSort(head);

        // does merge on right
        Node<T> right = mergeSort(nextOfMiddle);

        // puts the two halves together
        Node<T> sortedList = merge(left, right);

        return sortedList;
    }

    // this is how the middle is found
    private Node<T> getMiddle(Node<T> head) {
        if (head == null) {
            return head;
        }
        Node<T> slow = head, fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // this is how the halves are merged
    private Node<T> merge(Node<T> left, Node<T> right) {
        Node<T> result = null;
        if (left == null) {
            return right;
        }
        if (right == null) {
            return left;
        }
        // this is how the values are compared in order to merge correctly
        if (left.data.compareTo(right.data) <= 0) {
            result = left;
            result.next = merge(left.next, right);
        } else {
            result = right;
            result.next = merge(left, right.next);
        }
        return result;
    }

    // print
    public void printList() {
        Node<T> current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.insert(12);
        list.insert(11);
        list.insert(13);
        list.insert(5);
        list.insert(6);

        System.out.println("Original:");
        list.printList();

        list.mergeSort();

        System.out.println("\nSorted:");
        list.printList();
    }
}

LinkedList.main(null);
```

    Original:
    12 11 13 5 6 
    
    Sorted:
    5 6 11 12 13 

