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

## Performance Experience

Before the performance we advertised our performance a lot on Instagram. Here are the results from that:

![](/assets/img/post_images/IMG_0838.jpg)
![](/assets/img/post_images/IMG_0839.jpg)
![](/assets/img/post_images/IMG_0840.jpg)
![](/assets/img/post_images/IMG_0841.jpg)
![](/assets/img/post_images/IMG_0842.jpg)

On our instagram we documented the progress of our practices and this gained traction as people saw it. We also practiced web safety by disallowing comments in order to protect our privacy. Overall we practiced a total of five times, two times Heritage park and two times during school, and once before the performance.

Other groups also had interesting performances, such as Rachelina's performance in which she got carried away at the end of the performance. The sorts were interesting to see being performed and made them somewhat easier to understand.

## Flower Class


```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public abstract class Collectable implements Comparable<Collectable> {
    public final String masterType = "Collectable";
    private String type; // extender should define their data type

    // enumerated interface
    public interface KeyTypes {
        String name();
    }

    protected abstract KeyTypes getKey(); // this method helps force usage of KeyTypes

    // getter
    public String getMasterType() {
        return masterType;
    }

    // getter
    public String getType() {
        return type;
    }

    // setter
    public void setType(String type) {
        this.type = type;
    }

    // this method is used to establish key order
    public abstract String toString();

    // this method is used to compare toString of objects
    public int compareTo(Collectable obj) {
        return this.toString().compareTo(obj.toString());
    }

    public static void print(Collectable[] objs) {
        System.out.println(objs.getClass() + " " + objs.length);

        if (objs.length > 0) {
            Collectable obj = objs[0];
            System.out.println(obj.getMasterType() + ": " + obj.getType() + " listed by " + obj.getKey());
        }

        for (Object o : objs)
            System.out.println(o);

        System.out.println();
    }
}

public class Flower extends Collectable {
    // Class data
    public static KeyTypes key = KeyType.breed; // static initializer
    public static void setOrder(KeyTypes key) { Flower.key = key; }
    public enum KeyType implements KeyTypes { breed, petals, color }

    private final String breed;
    private final int petals;
    private final String color;

    // constructor
    Flower(String breed, int petals, String color) {
        this.setType("Flower");
        this.breed = breed;
        this.petals = petals;
        this.color = color;
    }

    @Override
    protected KeyTypes getKey() {
        return Flower.key;
    }

    @Override
    public String toString() {
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("{");

        if (KeyType.breed.equals(this.getKey())) {
            jsonBuilder.append("\"breed\": \"").append(this.breed).append("\", ");
        } else if (KeyType.petals.equals(this.getKey())) {
            jsonBuilder.append("\"petals\": ").append(this.petals).append(", ");
        } else if (KeyType.color.equals(this.getKey())) {
            jsonBuilder.append("\"color\": \"").append(this.color).append("\", ");
        }

        jsonBuilder.append("\"type\": \"").append(this.getType()).append("\", ")
                .append("\"masterType\": \"").append(this.masterType).append("\"");

        jsonBuilder.append("}");
        return jsonBuilder.toString();
    }

    // test data
    public static Flower[] flowers() {
        return new Flower[]{
                new Flower("Lotus", 5, "White"),
                new Flower("Camellia", 3, "Yellow"),
                new Flower("Ghost Orchid", 7, "Grey"),
                new Flower("Chocolate Cosmos", 2, "Brown"),
                new Flower("Corpse Flower", 4, "Orange"),
                new Flower("Jade Vine", 9, "Green"),
                new Flower("Juliet Rose", 6, "Red"),
                new Flower("Pasqueflower", 8, "Blue"),
                new Flower("Campion", 1, "Pink"),
                new Flower("Franklin Tree", 9, "Purple"),
        };
    }
}

```

## Bubble Sort

Here is my implementation of bubble sort:


```java
public class BubbleSort {
    public static void bubbleSort(Collectable[] array) {
        int n = array.length;
        // moving through all elements of the array
        for (int i = 0; i < n - 1; i++) {
            // the last element is in place so we start at the next one
            for (int j = 0; j < n - i - 1; j++) {
                // check and swap if the values are not sorted
                if (array[j].compareTo(array[j + 1]) > 0) {
                    Collectable temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
}

Flower[] flowerArray = Flower.flowers();
Flower.setOrder(Flower.KeyType.breed);
System.out.println("Original: " + Arrays.toString(flowerArray));

// breed
Flower.setOrder(Flower.KeyType.breed);
BubbleSort.bubbleSort(flowerArray);
System.out.println("Sorted by Breed: " + Arrays.toString(flowerArray));

// petals
Flower.setOrder(Flower.KeyType.petals);
BubbleSort.bubbleSort(flowerArray);
System.out.println("Sorted by Petals: " + Arrays.toString(flowerArray));

// color
Flower.setOrder(Flower.KeyType.color);
BubbleSort.bubbleSort(flowerArray);
System.out.println("Sorted by Color: " + Arrays.toString(flowerArray));
```

    Original: [{"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Breed: [{"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Petals: [{"petals": 1, "type": "Flower", "masterType": "Collectable"}, {"petals": 2, "type": "Flower", "masterType": "Collectable"}, {"petals": 3, "type": "Flower", "masterType": "Collectable"}, {"petals": 4, "type": "Flower", "masterType": "Collectable"}, {"petals": 5, "type": "Flower", "masterType": "Collectable"}, {"petals": 6, "type": "Flower", "masterType": "Collectable"}, {"petals": 7, "type": "Flower", "masterType": "Collectable"}, {"petals": 8, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}]
    Sorted by Color: [{"color": "Blue", "type": "Flower", "masterType": "Collectable"}, {"color": "Brown", "type": "Flower", "masterType": "Collectable"}, {"color": "Green", "type": "Flower", "masterType": "Collectable"}, {"color": "Grey", "type": "Flower", "masterType": "Collectable"}, {"color": "Orange", "type": "Flower", "masterType": "Collectable"}, {"color": "Pink", "type": "Flower", "masterType": "Collectable"}, {"color": "Purple", "type": "Flower", "masterType": "Collectable"}, {"color": "Red", "type": "Flower", "masterType": "Collectable"}, {"color": "White", "type": "Flower", "masterType": "Collectable"}, {"color": "Yellow", "type": "Flower", "masterType": "Collectable"}]


With this sort, we essentially iterate through the list and compare the breeds that are next to each other and this goes on until the list is sorted.

## Selection Sort

This is my implementation of selection sort:


```java
public class SelectionSort {
    public static void selectionSort(Collectable[] array) {
        int n = array.length;
        // shifting boundary of unsorted array
        for (int i = 0; i < n - 1; i++) {
            // find minimum of the subarray
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (array[j].compareTo(array[minIndex]) < 0) {
                    minIndex = j;
                }
            }
            // swapping the minimum with the value at index i
            Collectable temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
    }
}

Flower[] flowerArray = Flower.flowers();
Flower.setOrder(Flower.KeyType.breed);
System.out.println("Original: " + Arrays.toString(flowerArray));

// breed
Flower.setOrder(Flower.KeyType.breed);
SelectionSort.selectionSort(flowerArray);
System.out.println("Sorted by Breed: " + Arrays.toString(flowerArray));

// petals
Flower.setOrder(Flower.KeyType.petals);
SelectionSort.selectionSort(flowerArray);
System.out.println("Sorted by Petals: " + Arrays.toString(flowerArray));

// color
Flower.setOrder(Flower.KeyType.color);
SelectionSort.selectionSort(flowerArray);
System.out.println("Sorted by Color: " + Arrays.toString(flowerArray));
```

    Original: [{"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Breed: [{"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Petals: [{"petals": 1, "type": "Flower", "masterType": "Collectable"}, {"petals": 2, "type": "Flower", "masterType": "Collectable"}, {"petals": 3, "type": "Flower", "masterType": "Collectable"}, {"petals": 4, "type": "Flower", "masterType": "Collectable"}, {"petals": 5, "type": "Flower", "masterType": "Collectable"}, {"petals": 6, "type": "Flower", "masterType": "Collectable"}, {"petals": 7, "type": "Flower", "masterType": "Collectable"}, {"petals": 8, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}]
    Sorted by Color: [{"color": "Blue", "type": "Flower", "masterType": "Collectable"}, {"color": "Brown", "type": "Flower", "masterType": "Collectable"}, {"color": "Green", "type": "Flower", "masterType": "Collectable"}, {"color": "Grey", "type": "Flower", "masterType": "Collectable"}, {"color": "Orange", "type": "Flower", "masterType": "Collectable"}, {"color": "Pink", "type": "Flower", "masterType": "Collectable"}, {"color": "Purple", "type": "Flower", "masterType": "Collectable"}, {"color": "Red", "type": "Flower", "masterType": "Collectable"}, {"color": "White", "type": "Flower", "masterType": "Collectable"}, {"color": "Yellow", "type": "Flower", "masterType": "Collectable"}]


This sort breaks the sort into a subarray and then based on that finds the minimum of that subarray and moves it to the front of the subarray, shifting the boundary and going on and on until the boundary reaches the end of the array.

## Insertion Sort

This is insertion sort:


```java
public class InsertionSort {
    public static void insertionSort(Collectable[] array) {
        int n = array.length;
        // iterating through the array
        for (int i = 1; i < n; ++i) {
            // finding the key of the array
            Collectable key = array[i];
            // finding compare value
            int j = i - 1;
            // moving values that are before the key and greater than the key after the key
            while (j >= 0 && array[j].compareTo(key) > 0) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }
}

Flower[] flowerArray = Flower.flowers();
Flower.setOrder(Flower.KeyType.breed);
System.out.println("Original: " + Arrays.toString(flowerArray));

// breed
Flower.setOrder(Flower.KeyType.breed);
InsertionSort.insertionSort(flowerArray);
System.out.println("Sorted by Breed: " + Arrays.toString(flowerArray));

// petals
Flower.setOrder(Flower.KeyType.petals);
InsertionSort.insertionSort(flowerArray);
System.out.println("Sorted by Petals: " + Arrays.toString(flowerArray));

// color
Flower.setOrder(Flower.KeyType.color);
InsertionSort.insertionSort(flowerArray);
System.out.println("Sorted by Color: " + Arrays.toString(flowerArray));
```

    Original: [{"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Breed: [{"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Petals: [{"petals": 1, "type": "Flower", "masterType": "Collectable"}, {"petals": 2, "type": "Flower", "masterType": "Collectable"}, {"petals": 3, "type": "Flower", "masterType": "Collectable"}, {"petals": 4, "type": "Flower", "masterType": "Collectable"}, {"petals": 5, "type": "Flower", "masterType": "Collectable"}, {"petals": 6, "type": "Flower", "masterType": "Collectable"}, {"petals": 7, "type": "Flower", "masterType": "Collectable"}, {"petals": 8, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}]
    Sorted by Color: [{"color": "Blue", "type": "Flower", "masterType": "Collectable"}, {"color": "Brown", "type": "Flower", "masterType": "Collectable"}, {"color": "Green", "type": "Flower", "masterType": "Collectable"}, {"color": "Grey", "type": "Flower", "masterType": "Collectable"}, {"color": "Orange", "type": "Flower", "masterType": "Collectable"}, {"color": "Pink", "type": "Flower", "masterType": "Collectable"}, {"color": "Purple", "type": "Flower", "masterType": "Collectable"}, {"color": "Red", "type": "Flower", "masterType": "Collectable"}, {"color": "White", "type": "Flower", "masterType": "Collectable"}, {"color": "Yellow", "type": "Flower", "masterType": "Collectable"}]


How this one works is that the values that are before the key and greater than the key are moved to after the key and the rest of the values stay before the key and as the key moves through the array, the array sorts.

## Merge Sort

This is merge:


```java
public class MergeSort {
    public static void mergeSort(Collectable[] array) {
        if (array.length > 1) {
            int mid = array.length / 2;
            Collectable[] left = Arrays.copyOfRange(array, 0, mid); // split array in halves
            Collectable[] right = Arrays.copyOfRange(array, mid, array.length);
    
            mergeSort(left); // sort the left with recursion
            mergeSort(right); // sort the right with recursion
    
            merge(array, left, right); // merge the sorted halves
        }
    }
    private static void merge(Collectable[] array, Collectable[] left, Collectable[] right) {
        int i = 0, j = 0, k = 0;
        // merging the left and right arrays
        while (i < left.length && j < right.length) {
            if (left[i].compareTo(right[j]) <= 0) {
                array[k++] = left[i++];
            } else {
                array[k++] = right[j++];
            }
        }
        // moving any remaining elements in the left array
        while (i < left.length) {
            array[k++] = left[i++];
        }
        // moving any remaining elements in the right array
        while (j < right.length) {
            array[k++] = right[j++];
        }
    }
}

Flower[] flowerArray = Flower.flowers();
Flower.setOrder(Flower.KeyType.breed);
System.out.println("Original: " + Arrays.toString(flowerArray));

// breed
Flower.setOrder(Flower.KeyType.breed);
MergeSort.mergeSort(flowerArray);
System.out.println("Sorted by Breed: " + Arrays.toString(flowerArray));

// petals
Flower.setOrder(Flower.KeyType.petals);
MergeSort.mergeSort(flowerArray);
System.out.println("Sorted by Petals: " + Arrays.toString(flowerArray));

// color
Flower.setOrder(Flower.KeyType.color);
MergeSort.mergeSort(flowerArray);
System.out.println("Sorted by Color: " + Arrays.toString(flowerArray));
```

    Original: [{"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Breed: [{"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Petals: [{"petals": 1, "type": "Flower", "masterType": "Collectable"}, {"petals": 2, "type": "Flower", "masterType": "Collectable"}, {"petals": 3, "type": "Flower", "masterType": "Collectable"}, {"petals": 4, "type": "Flower", "masterType": "Collectable"}, {"petals": 5, "type": "Flower", "masterType": "Collectable"}, {"petals": 6, "type": "Flower", "masterType": "Collectable"}, {"petals": 7, "type": "Flower", "masterType": "Collectable"}, {"petals": 8, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}]
    Sorted by Color: [{"color": "Blue", "type": "Flower", "masterType": "Collectable"}, {"color": "Brown", "type": "Flower", "masterType": "Collectable"}, {"color": "Green", "type": "Flower", "masterType": "Collectable"}, {"color": "Grey", "type": "Flower", "masterType": "Collectable"}, {"color": "Orange", "type": "Flower", "masterType": "Collectable"}, {"color": "Pink", "type": "Flower", "masterType": "Collectable"}, {"color": "Purple", "type": "Flower", "masterType": "Collectable"}, {"color": "Red", "type": "Flower", "masterType": "Collectable"}, {"color": "White", "type": "Flower", "masterType": "Collectable"}, {"color": "Yellow", "type": "Flower", "masterType": "Collectable"}]


This algorithm takes the array and splits it into halves an infinite number of times until there are only pairs. From there the values are broken down and compared to the other value around them to see if they are greater than or less than and then they are moved respectively. If the values are the same, they are not moved.

## Quick Sort

This is quick sort:


```java
public class QuickSort {
    public static void quickSort(Collectable[] array, int low, int high) {
        if (low < high) {
            // this is where the array is partitioned
            int pi = partition(array, low, high);
            // sorts the elements before and after the partition
            quickSort(array, low, pi - 1);
            quickSort(array, pi + 1, high);
        }
    }
    
    private static int partition(Collectable[] array, int low, int high) {
        Collectable pivot = array[high]; // pivot defined
        int i = low - 1; // index of the smaller element
        for (int j = low; j < high; j++) {
            // if the element is smaller than the pivot, it is moved to the left
            if (array[j].compareTo(pivot) < 0) {
                i++;
                // swapping the array
                Collectable temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        // swapping the higher value with the pivot
        Collectable temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;
        return i + 1;
    }
}

Flower[] flowerArray = Flower.flowers();
Flower.setOrder(Flower.KeyType.breed);
System.out.println("Original: " + Arrays.toString(flowerArray));

// breed
Flower.setOrder(Flower.KeyType.breed);
QuickSort.quickSort((Collectable[])flowerArray, 0, flowerArray.length - 1);
System.out.println("Sorted by Breed: " + Arrays.toString(flowerArray));

// petals
Flower.setOrder(Flower.KeyType.petals);
QuickSort.quickSort((Collectable[])flowerArray, 0, flowerArray.length - 1);
System.out.println("Sorted by Petals: " + Arrays.toString(flowerArray));

// color
Flower.setOrder(Flower.KeyType.color);
QuickSort.quickSort((Collectable[])flowerArray, 0, flowerArray.length - 1);
System.out.println("Sorted by Color: " + Arrays.toString(flowerArray));
```

    Original: [{"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Breed: [{"breed": "Camellia", "type": "Flower", "masterType": "Collectable"}, {"breed": "Campion", "type": "Flower", "masterType": "Collectable"}, {"breed": "Chocolate Cosmos", "type": "Flower", "masterType": "Collectable"}, {"breed": "Corpse Flower", "type": "Flower", "masterType": "Collectable"}, {"breed": "Franklin Tree", "type": "Flower", "masterType": "Collectable"}, {"breed": "Ghost Orchid", "type": "Flower", "masterType": "Collectable"}, {"breed": "Jade Vine", "type": "Flower", "masterType": "Collectable"}, {"breed": "Juliet Rose", "type": "Flower", "masterType": "Collectable"}, {"breed": "Lotus", "type": "Flower", "masterType": "Collectable"}, {"breed": "Pasqueflower", "type": "Flower", "masterType": "Collectable"}]
    Sorted by Petals: [{"petals": 1, "type": "Flower", "masterType": "Collectable"}, {"petals": 2, "type": "Flower", "masterType": "Collectable"}, {"petals": 3, "type": "Flower", "masterType": "Collectable"}, {"petals": 4, "type": "Flower", "masterType": "Collectable"}, {"petals": 5, "type": "Flower", "masterType": "Collectable"}, {"petals": 6, "type": "Flower", "masterType": "Collectable"}, {"petals": 7, "type": "Flower", "masterType": "Collectable"}, {"petals": 8, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}, {"petals": 9, "type": "Flower", "masterType": "Collectable"}]
    Sorted by Color: [{"color": "Blue", "type": "Flower", "masterType": "Collectable"}, {"color": "Brown", "type": "Flower", "masterType": "Collectable"}, {"color": "Green", "type": "Flower", "masterType": "Collectable"}, {"color": "Grey", "type": "Flower", "masterType": "Collectable"}, {"color": "Orange", "type": "Flower", "masterType": "Collectable"}, {"color": "Pink", "type": "Flower", "masterType": "Collectable"}, {"color": "Purple", "type": "Flower", "masterType": "Collectable"}, {"color": "Red", "type": "Flower", "masterType": "Collectable"}, {"color": "White", "type": "Flower", "masterType": "Collectable"}, {"color": "Yellow", "type": "Flower", "masterType": "Collectable"}]


In this sort, there is a pivot which is used to sort so that the two values that are next to each other are compared and then sorted out and this occurs until the entire array is sorted.
