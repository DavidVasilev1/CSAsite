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

![](/assets/img/post_images/IMG_0838.png)
![](/assets/img/post_images/IMG_0839.png)
![](/assets/img/post_images/IMG_0840.png)
![](/assets/img/post_images/IMG_0841.png)
![](/assets/img/post_images/IMG_0842.png)

On our instagram we documented the progress of our practices and this gained traction as people saw it. We also practiced web safety by disallowing comments in order to protect our privacy. Overall we practiced a total of five times, two times Heritage park and two times during school, and once before the performance.

Other groups also had interesting performances, such as Rachelina's performance in which she got carried away at the end of the performance. The sorts were interesting to see being performed and made them somewhat easier to understand.

## Flower Class


```java
public class Flower implements Comparable<Flower> {
    private String breed;
    private int nPetals;
    private String color;

    public Flower(String breed, int nPetals, String color) {
        this.breed = breed;
        this.nPetals = nPetals;
        this.color = color;
    }

    public String getBreed() {
        return breed;
    }

    public int getPetalNumber() {
        return nPetals;
    }

    public String getColor() {
        return color;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public void setPetalNumber(int nPetals) {
        this.nPetals = nPetals;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return this.breed;
    }

    @Override
    public int compareTo(Flower nextFlower) {
        return this.toString().compareTo(nextFlower.toString());
    }
}

public class Garden {
    public static ArrayList<Comparable> generate() {
        ArrayList<Comparable> flowerGarden = new ArrayList<>();

        flowerGarden.add(new Flower("Lotus", 5, "White"));
        flowerGarden.add(new Flower("Camellia", 3, "Yellow"));
        flowerGarden.add(new Flower("Ghost Orchid", 7, "Grey"));
        flowerGarden.add(new Flower("Chocolate Cosmos", 2, "Brown"));
        flowerGarden.add(new Flower("Corpse Flower", 4, "Orange"));
        flowerGarden.add(new Flower("Jade Vine", 9, "Green"));
        flowerGarden.add(new Flower("Juliet Rose", 6, "Red"));
        flowerGarden.add(new Flower("Pasqueflower", 8, "Blue"));
        flowerGarden.add(new Flower("Campion", 1, "Pink"));
        flowerGarden.add(new Flower("Franklin Tree", 9, "Purple"));
        return flowerGarden;
    }
}

ArrayList<Comparable> flowerGarden = Garden.generate();
```

## Bubble Sort

Here is my implementation of bubble sort:


```java
import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(ArrayList<Comparable> list) {
        int n = list.size();
        // moving through all elements of the array
        for (int i = 0; i < n - 1; i++) {
            // the last element is in place sop we start at the next one
            for (int j = 0; j < n - i - 1; j++) {
                // check and swap if the values are not sorted
                if (list.get(j).compareTo(list.get(j + 1)) > 0) {
                    Comparable temp = list.get(j);
                    list.set(j, list.get(j + 1));
                    list.set(j + 1, temp);
                }
            }
        }
    }
}

ArrayList<Comparable> FlowerGarden = Garden.generate(); 
System.out.println("Garden before: " + flowerGarden);
BubbleSort.bubbleSort(flowerGarden);
System.out.println("Garden after: " + flowerGarden);
```

    Garden before: [Lotus, Camellia, Ghost Orchid, Chocolate Cosmos, Corpse Flower, Jade Vine, Juliet Rose, Pasqueflower, Campion, Franklin Tree]
    Garden after: [Camellia, Campion, Chocolate Cosmos, Corpse Flower, Franklin Tree, Ghost Orchid, Jade Vine, Juliet Rose, Lotus, Pasqueflower]


With this sort, we essentially iterate through the list and compare the breeds that are next to each other and this goes on until the list is sorted.

## Selection Sort

This is my implementation of selection sort:


```java
import java.util.Arrays;

public class SelectionSort {
    public static void selectionSort(ArrayList<Comparable> list) {
        int n = list.size();
        // shifting boundary of unsorted array
        for (int i = 0; i < n - 1; i++) {
            // find minimum of the subarray
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (list.get(j).compareTo(list.get(minIndex)) < 0) {
                    minIndex = j;
                }
            }
            // swapping the minimum with the first value of the array
            Comparable temp = list.get(minIndex);
            list.set(minIndex, list.get(i));
            list.set(i, temp);
        }
    }
}

ArrayList<Comparable> FlowerGarden = Garden.generate(); 
System.out.println("Garden before: " + flowerGarden);
BubbleSort.bubbleSort(flowerGarden);
System.out.println("Garden after: " + flowerGarden);
```

    Garden before: [Lotus, Camellia, Ghost Orchid, Chocolate Cosmos, Corpse Flower, Jade Vine, Juliet Rose, Pasqueflower, Campion, Franklin Tree]
    Garden after: [Camellia, Campion, Chocolate Cosmos, Corpse Flower, Franklin Tree, Ghost Orchid, Jade Vine, Juliet Rose, Lotus, Pasqueflower]


This sort breaks the sort into a subarray and then based on that finds the minimum of that subarray and moves it to the front of the subarray, shifting the boundary and going on and on until the boundary reaches the end of the array.

## Insertion Sort

This is insertion sort:


```java
import java.util.Arrays;

public class InsertionSort {
    public static void insertionSort(ArrayList<Comparable> list) {
        int n = list.size();
        // iterating through the array
        for (int i = 1; i < n; ++i) {
            // finding the key of the array
            Comparable key = list.get(i);
            // finding compare value
            int j = i - 1;
            // moving values that are before the key and greater than the key after the key
            while (j >= 0 && list.get(j).compareTo(key) > 0) {
                list.set(j + 1, list.get(j));
                j--;
            }
            list.set(j + 1, key);
        }
    }
}

ArrayList<Comparable> FlowerGarden = Garden.generate(); 
System.out.println("Garden before: " + flowerGarden);
BubbleSort.bubbleSort(flowerGarden);
System.out.println("Garden after: " + flowerGarden);
```

    Garden before: [Lotus, Camellia, Ghost Orchid, Chocolate Cosmos, Corpse Flower, Jade Vine, Juliet Rose, Pasqueflower, Campion, Franklin Tree]
    Garden after: [Camellia, Campion, Chocolate Cosmos, Corpse Flower, Franklin Tree, Ghost Orchid, Jade Vine, Juliet Rose, Lotus, Pasqueflower]


How this one works is that the values that are before the key and greater than the key are moved to after the key and the rest of the values stay before the key and as the key moves through the array, the array sorts.

## Merge Sort

This is merge:


```java
import java.util.Arrays;

public class MergeSort {
    public static void mergeSort(ArrayList<Comparable> list) {
        if (list.size() > 1) {
            int mid = list.size() / 2;
            ArrayList<Comparable> left = new ArrayList<>(list.subList(0, mid)); // split array in halves
            ArrayList<Comparable> right = new ArrayList<>(list.subList(mid, list.size()));

            mergeSort(left); // sort the left with recursion
            mergeSort(right); // sort the right with recursion

            merge(arr, left, right); // merge the sorted halves
        }
    }

    private static void merge(ArrayList<Comparable> list, ArrayList<Comparable> left, ArrayList<Comparable> right) {
        int i = 0, j = 0, k = 0;
        // merging the left and right arrays
        while (i < left.size() && j < right.size()) {
            if (left.get(i).compareTo(right.get(j)) <= 0) {
                list.set(k++, left.get(i++));
            } else {
                list.set(k++, right.get(j++));
            }
        }
        // moving any remaining elements in the left array
        while (i < left.size()) {
            list.set(k++, left.get(i++));
        }
        // moving any remaining elements in the right arrray
        while (j < right.size()) {
            list.set(k++, right.get(j++));
        }
    }
}

ArrayList<Comparable> FlowerGarden = Garden.generate(); 
System.out.println("Garden before: " + flowerGarden);
BubbleSort.bubbleSort(flowerGarden);
System.out.println("Garden after: " + flowerGarden);
```

    Garden before: [Lotus, Camellia, Ghost Orchid, Chocolate Cosmos, Corpse Flower, Jade Vine, Juliet Rose, Pasqueflower, Campion, Franklin Tree]
    Garden after: [Camellia, Campion, Chocolate Cosmos, Corpse Flower, Franklin Tree, Ghost Orchid, Jade Vine, Juliet Rose, Lotus, Pasqueflower]


This algorithm takes the array and splits it into halves an infinite number of times until there are only pairs. From there the values are broken down and compared to the other value around them to see if they are greater than or less than and then they are moved respectively. If the values are the same, they are not moved.

## Quick Sort

This is quick sort:


```java
import java.util.Arrays;

public class QuickSort {
    public static void quickSort(ArrayList<Comparable> list, int low, int high) {        
        if (low < high) {
            // this is where the array is partitioned
            int pi = partition(list, low, high);
            // sorts the elements before and after the partition
            quickSort(list, low, pi - 1);
            quickSort(list, pi + 1, high);
        }
    }

    private static int partition(ArrayList<Comparable> list, int low, int high) {
        Comparable pivot = list.get(high); // pivot defined
        int i = low - 1; // index of the smaller element
        for (int j = low; j < high; j++) {
            // if the element is smaller than the pivot, it is moved to the left
            if (list.get(j).compareTo(pivot) < 0) {
                i++;
                // swapping the array
                Comparable temp = list.get(i);
                list.set(i, list.get(j));
                list.set(j, temp);
            }
        }
        // swapping the higher value with the pivot
        Comparable temp = list.get(i + 1);
        list.set(i + 1, list.get(high));
        list.set(high, temp);
        return i + 1;
    }
}

ArrayList<Comparable> FlowerGarden = Garden.generate(); 
System.out.println("Garden before: " + flowerGarden);
BubbleSort.bubbleSort(flowerGarden);
System.out.println("Garden after: " + flowerGarden);
```

    Garden before: [Lotus, Camellia, Ghost Orchid, Chocolate Cosmos, Corpse Flower, Jade Vine, Juliet Rose, Pasqueflower, Campion, Franklin Tree]
    Garden after: [Camellia, Campion, Chocolate Cosmos, Corpse Flower, Franklin Tree, Ghost Orchid, Jade Vine, Juliet Rose, Lotus, Pasqueflower]


In this sort, there is a pivot which is used to sort so that the two values that are next to each other are compared and then sorted out and this occurs until the entire array is sorted.

## Merge Sort with Linked Lists


```java
public class LinkedList {
    private Object object;
    private LinkedList nextNode;
    private LinkedList prevNode;

    public LinkedList(Object object, LinkedList prevNode) {
        this.object = object;
        this.nextNode = null;
        this.prevNode = prevNode;
    }

    public Object getObject() {
        return object;
    }

    public LinkedList getNext() {
        return nextNode;
    }

    public void setNextNode(LinkedList nextNode) {
        this.nextNode = nextNode;
    }

    public LinkedList getPrevious() {
        return prevNode;
    }

    public void setPrevNode(LinkedList prevNode) {
        this.prevNode = prevNode;
    }
}

public class CircleQueue {
    private LinkedList headNode;
    private LinkedList tailNode;
    private LinkedList currentNode;

    public CircleQueue() {
        headNode = null;
        tailNode = null;
        currentNode = null;
    }

    // getters
    public Object getFirstObject() {
        currentNode = headNode;
        if (headNode == null)
            return null;
        else
            return headNode.getObject();
    }

    public Object getLastObject() {
        currentNode = tailNode;
        if (tailNode == null)
            return null;
        else
            return tailNode.getObject();
    }

    public Object getObject() {
        if (currentNode == null)
            return null;
        else
            return currentNode.getObject();
    }

    // setters
    public Object setNext() {
        currentNode = currentNode.getNext();
        if (currentNode == null)
            currentNode = headNode;
        return currentNode.getObject();
    }

    public void setPrevious() {
        currentNode = currentNode.getPrevious();
        if (currentNode == null)
            currentNode = tailNode;
    }

    public void add(Object opaqueObject) {
        tailNode = new LinkedList(opaqueObject, currentNode);
        if (currentNode != null)
            currentNode.setNextNode(tailNode);
        currentNode = tailNode;
        if (headNode == null) {
            headNode = tailNode;
        }
    }

    public Object delete() {
        Object opaqueObject = null;
        if (headNode != null) {
            opaqueObject = headNode.getObject();
            headNode = headNode.getNext();
            if (headNode == null)
                tailNode = headNode;
            else
                headNode.setPrevNode(null);
        }
        return opaqueObject;
    }

    public String toString() {
        StringBuilder queueToString = new StringBuilder("[");
        LinkedList node = headNode;
        while (node != null) {
            queueToString.append("(").append(node.getObject()).append(")");
            node = node.getNext();
            if (node != null)
                queueToString.append(", ");
        }
        queueToString.append("]");
        return queueToString.toString();
    }
}

public class FlowerGarden {
    private FlowerNode head;
    private int size;

    public FlowerGarden() {
        head = null;
        size = 0;
    }

    // creating LinkedList
    public void add(Flower flower) {
        FlowerNode newNode = new FlowerNode(flower);
        if (head == null) {
            head = newNode;
        } else {
            FlowerNode current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }

    @Override
    public String toString() {
        FlowerNode current = head;
        StringBuilder res = new StringBuilder();
        while (current != null) {
            res.append("(Breed: ").append(current.flower.getBreed()).append(", Petals: ").append(current.flower.getPetalNumber()).append(", Color: ").append(current.flower.getColor()).append("), ");
            current = current.next;
        }
        res.append("null");
        return res.toString();
    }

    public int size() {
        return size;
    }

    public FlowerNode getHead() {
        return head;
    }

    public void setHead(FlowerNode head) {
        this.head = head;
    }
}

public class LinkedGarden {
    public static FlowerGarden generate() {
        FlowerGarden flowerGarden = new FlowerGarden();
        flowerGarden.add(new Flower("Lotus", 5, "White"));
        flowerGarden.add(new Flower("Camellia", 3, "Yellow"));
        flowerGarden.add(new Flower("Ghost Orchid", 7, "Grey"));
        flowerGarden.add(new Flower("Chocolate Cosmos", 2, "Brown"));
        flowerGarden.add(new Flower("Corpse Flower", 4, "Orange"));
        flowerGarden.add(new Flower("Jade Vine", 9, "Green"));
        flowerGarden.add(new Flower("Juliet Rose", 6, "Red"));
        flowerGarden.add(new Flower("Pasqueflower", 8, "Blue"));
        flowerGarden.add(new Flower("Campion", 1, "Pink"));
        flowerGarden.add(new Flower("Franklin Tree", 9, "Purple"));
        return flowerGarden;
    }
}

LinkedGarden.generate();
```




    (Breed: Lotus, Petals: 5, Color: White), (Breed: Camellia, Petals: 3, Color: Yellow), (Breed: Ghost Orchid, Petals: 7, Color: Grey), (Breed: Chocolate Cosmos, Petals: 2, Color: Brown), (Breed: Corpse Flower, Petals: 4, Color: Orange), (Breed: Jade Vine, Petals: 9, Color: Green), (Breed: Juliet Rose, Petals: 6, Color: Red), (Breed: Pasqueflower, Petals: 8, Color: Blue), (Breed: Campion, Petals: 1, Color: Pink), (Breed: Franklin Tree, Petals: 9, Color: Purple), null




```java
public class MergeSortFlowerGarden {
    // method for merge
    public static void mergeSort(FlowerGarden garden) {
        garden.setHead(mergeSort(garden.getHead()));
    }

    // using LinkedList for merge
    private static FlowerNode mergeSort(FlowerNode head) {
        // if no or one element, list is sorted
        if (head == null || head.next == null) {
            return head;
        }

        // finding middle node
        FlowerNode middle = getMiddle(head);
        FlowerNode nextOfMiddle = middle.next;
        middle.next = null;

        // sort to left and right
        FlowerNode left = mergeSort(head);
        FlowerNode right = mergeSort(nextOfMiddle);

        // merge
        return merge(left, right);
    }

    // how to merge
    private static FlowerNode merge(FlowerNode left, FlowerNode right) {
        FlowerNode dummy = new FlowerNode(null);
        FlowerNode tail = dummy;

        // compare values of nodes and merge together
        while (left != null && right != null) {
            if (left.flower.compareTo(right.flower) <= 0) {
                tail.next = left;
                left = left.next;
            } else {
                tail.next = right;
                right = right.next;
            }
            tail = tail.next;
        }

        // remaining elements to left and right
        if (left != null) {
            tail.next = left;
        } else {
            tail.next = right;
        }

        // return head of merged list
        return dummy.next;
    }

    //find the middle node of the linked list
    private static FlowerNode getMiddle(FlowerNode head) {
        if (head == null) {
            return head;
        }
        FlowerNode slow = head;
        FlowerNode fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public static void main(String[] args) {
        FlowerGarden garden = LinkedGarden.generate();
        System.out.println("Flower Garden before sort: " + garden);
        mergeSort(garden);
        System.out.println("Flower Garden after sort: " + garden);
    }
}

MergeSortFlowerGarden.main(null);
```

    Flower Garden before sort: (Breed: Lotus, Petals: 5, Color: White), (Breed: Camellia, Petals: 3, Color: Yellow), (Breed: Ghost Orchid, Petals: 7, Color: Grey), (Breed: Chocolate Cosmos, Petals: 2, Color: Brown), (Breed: Corpse Flower, Petals: 4, Color: Orange), (Breed: Jade Vine, Petals: 9, Color: Green), (Breed: Juliet Rose, Petals: 6, Color: Red), (Breed: Pasqueflower, Petals: 8, Color: Blue), (Breed: Campion, Petals: 1, Color: Pink), (Breed: Franklin Tree, Petals: 9, Color: Purple), null
    Flower Garden after sort: (Breed: Camellia, Petals: 3, Color: Yellow), (Breed: Campion, Petals: 1, Color: Pink), (Breed: Chocolate Cosmos, Petals: 2, Color: Brown), (Breed: Corpse Flower, Petals: 4, Color: Orange), (Breed: Franklin Tree, Petals: 9, Color: Purple), (Breed: Ghost Orchid, Petals: 7, Color: Grey), (Breed: Jade Vine, Petals: 9, Color: Green), (Breed: Juliet Rose, Petals: 6, Color: Red), (Breed: Lotus, Petals: 5, Color: White), (Breed: Pasqueflower, Petals: 8, Color: Blue), null

