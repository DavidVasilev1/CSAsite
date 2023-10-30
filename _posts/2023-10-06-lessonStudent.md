---
title: Lesson 9 Student
author: david
categories: ['Lesson']
tags: ['Collegeboard', 'Java', 'Unit 10', 'Unit 9']
type: hacks
week: 7
description: Lesson on Java classes.
toc: True
comments: True
date: 2023-10-06 12:00:00 +0000
---

## 9.1 Superclasses and Subclasses
> A hierarchy of classes is created, extending attributes into subclasses of information (ie. Automobile --> Trucks and Sedans --> Ford, BMW, Nissan, Toyota). 

### Pre-Requisites

Before we start you need to remember what classes and methods are. Scopes of variables are also important to this section because you need to know which classes can access which variables before extending a variable across classes.

#### Scope of Variables:

Variables can be declared as private or public.

> **Popcorn Hack:** What are scope do private and public variables allow?

| Private | Public |
|-|-|
| only directly accessible within the class they are declared | accessible anywhere inside and outside their class |

These are different types of variables. Only `INSTANCE` and `STATIC` variables can be declared as ____ or ____.

| Variable Type | Definition | Scope within Class | Scope to Subclasses |
|-|-|-|-|
|  | variables within methods | cannot be accessed outside method | cannot be accessed outside class |
|  | variables within a class but not inside a method | can be accessed in entire class | can be accessed in subclasses |
|  | variables that belong to a class, not instance | can be accessed in entire class | can be accessed in subclasses |
|  | variables specific in passing values to the method | cannot be accessed outside method | do not affect inheritance |

Now we can go into class hierarchies.

### Class Hierarchy

**Definitions**
- Superclasses - a class that contains all the common ____ and ____ that could be shared among other classes (a blueprint for subclasses)
- Subclasses - extends the ____ to is specified by a superclass; can also have additional specific attributes
- "Is-A" Relationship - the relationship when a subclass ____ a superclass (ie. Automobile --> Sedan; a Sedan "is-a" automobile)

#### `extends` Keyword
> extends the ____ from the ____


```java
class Automobile {
  public String brand; // public instance var
  private String model; // private instance var

  public Automobile(String brand, String model) {
    this.brand = brand;
    this.model = model;
  }

  public void start() {
    System.out.println("Car is starting");
  }
}

class Truck extends Automobile {
  public int cargoCapacity; // subclass specific var

  // instance that is specific to the Truck subclass, with vars from Automobile class
  public Truck(String brand, String model, int cargoCapacity) {
    super(brand, model); // inherited vars
    this.cargoCapacity = cargoCapacity;
  }

  // specific method to Truck
  public void loadCargo() {
    System.out.println("Loading cargo into the truck");
  }
}

class Sedan extends Automobile {
  public boolean isLuxury; // subclass specific var

  // instance that is specific to the Sedan subclass, with vars from Automobile class
  public Sedan(String brand, String model, boolean isLuxury) {
    super(brand, model); // inherited vars
    this.isLuxury = isLuxury;
  }

  // specific method to Sedan
  public void accelerate() {
    System.out.println("Sedan is accelerating");
  }
}

public class Main {
    public static void main(String[] args) {
        Automobile car = new Automobile("Toyota", "Camry");
        Truck truck = new Truck("Ford", "F-150", 1000);
        Sedan sedan = new Sedan("BMW", "328i", true);

        // automobile methods and variables
        System.out.println(car.brand); // Accessing public variable
        // System.out.println(car.model); // compilation error because of the private var
        car.start();


        // truck methods and variables
        System.out.println(truck.brand); // inherited public var
        System.out.println(truck.cargoCapacity); // public var specific to truck
        truck.loadCargo();


        // sedan methods and variables
        System.out.println(sedan.brand); // inherited public var
        System.out.println(sedan.isLuxury); // public var specific to sedan
        sedan.accelerate();
    }
}

Main.main(null);
```

    Toyota
    Car is starting
    Ford
    1000
    Loading cargo into the truck
    BMW
    true
    Sedan is accelerating


This example shows how the `Automobile` class is extended twice, with the `Truck` and `Sedan` subclasses.

> **Popcorn Hack:** If I were to declare a variable `color` that is `private` in the class Automobile, would I be able to extend and directly access that variable to the subclass `Truck` or `Sedan`?

A: No, you would need to encapsulate the private variable as shown above, through a method in the superclass and then inherit that var with `super()`, which will be explained later.

## 9.2 Writing Constructors for Subclasses

### Learning Objectives

- Constructors are not inherited
- When a subclass's constructor doesn't explicitly call a superclass's constructor using `super`, Java inserts a call to the superclass's no-argument constructor.
- The actual parameters passed in the call to the superclass constructor provide values that the constructor can use to initialize the object's instance variables.
- Regardless of whether the superclass constructor is called implicitly or explicitly, the process of calling superclass constructors continues until the Object constructor is called. At this point, all of the constructors within the hierarchy execute beginning with the Object constructor.

**Important note:** Constructors are NOT inherited by the subclass. See this in action below.


```java
// TO BE INCLUDED EARLIER IN THE LESSON. IT IS NECESSARY FOR THE FUNCTIONALITY OF THIS SECTION.

class Vehicle {
    public int year;
    public String manufacturer;

    public Vehicle(int year, String manufacturer) { // constructor for parent class
        this.year = year;
        this.manufacturer = manufacturer;
    }

    public Vehicle() {
        this.year = 2000;
        this.manufacturer = "Unknown";
    }

    // method to be used later
    public void drive() {
        System.out.println("The driver is driving the car.");
    }
}
```


```java
class Car extends Vehicle {
    public String model;

    public Car(String model) {
        this.model = model;
    }
}

public class VehicleDemonstration {
    public static void main(String[] args) {
        Car myCar = new Car("Altima");
        System.out.println("Year: " + myCar.year);
        System.out.println("Manufacturer: " + myCar.manufacturer);
        System.out.println("Model: " + myCar.model);
    }
}

VehicleDemonstration.main(null);
```

    Year: 2000
    Manufacturer: Unknown
    Model: Altima


As you can see, the output uses the no-argument construction info from the base `Vehicle` constructor.

The `super` keyword can be used to change parent constructor values.


```java
class NewCar extends Vehicle {
    public String model;

    public NewCar(int year, String manufacturer, String model) {
        super(year, manufacturer); // see the use of super here
        // what happens if you use no arguments with super()? see reminders below
        this.model = model;
    }
}

public class VehicleDemonstration2 {
    public static void main(String[] args) {
        NewCar myCar = new NewCar(2016, "Nissan", "Altima");
        System.out.println("Year: " + myCar.year);
        System.out.println("Manufacturer: " + myCar.manufacturer);
        System.out.println("Model: " + myCar.model);
    }
}

VehicleDemonstration2.main(null);
```

    Year: 2016
    Manufacturer: Nissan
    Model: Altima


#### Key Reminders:

1. If you do call `super()` in your constructor, it <mark>has to be the first line of the constructor</mark>.
2. You <mark>cannot</mark> assign values to parent attributes/variables without using `super()`.
3. If you call `super()` with no arguments, <mark>it will use the no-argument parent constructor</mark>. This also happens automatically if you don't include any `super()` call.

## 9.3 Overriding Methods

### Learning Objectives

- Method overriding occurs when a public method in a subclass has the same method signature as a public method in the superclass.
- Any method that is called must be defined within its own class or its superclass.
- A subclass is usually designed to have modified (overwritten) or additional methods or instance variables.
- A subclass will inherit all public methods from the superclass; these methods remain public in the subclass.

There are three options for methods to be used by subclasses:

1. Methods inherited from the parent class
2. Unique methods written for the subclass
3. Override parent methods to modify its implementation

The first two should make sense. Let's see an example of overriding parent methods below.


```java
public class NuroCar extends Vehicle {
    private String deliveryItem;

    // unique constructor
    public NuroCar(int year, String manufacturer, String deliveryItem) {
        super(year, manufacturer); // another use of super
        this.deliveryItem = deliveryItem;
    }

    // HERE is the overridden function
    public void drive() {
        System.out.println("This car is driving itself!");
    }
}

public class VehicleDemonstration3 {
    public static void main(String[] args) {
        NuroCar pizzaCar = new NuroCar(2023, "Nuro", "Pizza");
        // here's the call to the overridden function
        pizzaCar.drive();
    }
}

VehicleDemonstration3.main(null);
```

    This car is driving itself!


This can be very helpful if you want a certain parent method to function slightly differently for a certain subclass.

#### Popcorn Hack

A parent class `Animal` is often used to show how subclasses can differ from their parent classes. An `Animal` parent class is provided in the cell below. Create a subclass of a certain species that <mark>overrides a parent method</mark> and <mark>uses `super` to call to the parent's constructor while adding its own unique attributes</mark>.

Hint: <button id="but1" onclick="hint(1)">See Hint</button>
<div id="hint1" style="display:none;">Not all animals "run" like the `move()` function says...</div>
<script>
    function hint(number) {
        document.getElementById("but" + String(number)).style.display = "none";
        document.getElementById("hint" + String(number)).style.display = "block";
    }
</script>


```java
// parent class
public class Animal {
    private String species;
    private int milesPerHour;

    // no argument constructor
    public Animal() {
        this.species = "Unknown";
        this.milesPerHour = 10;
    }

    // constructor with arguments
    public Animal(String species, int milesPerHour) {
        this.species = species;
        this.milesPerHour = milesPerHour;
    }

    // parent method
    public void move() {
        System.out.println("The " + this.species.toLowerCase() + " runs at " + this.milesPerHour + " miles per hour.");
    }
}

// your subclass goes here
```

## 9.4 Super Keyword

### Using the super keyword to call a superclass's method.


```java
public class Performer { //superclass
    public void practice(){
        System.out.println("Honing my craft!");
    }
    public void perform(){
        System.out.println("Performing for an audience!");
    }
}

public class Dancer extends Performer { //subclass
    public void perform(){
        System.out.println("Dancing on the stage!");
    }
}

public class BalletDancer extends Dancer { //subclass
    public void jete(){
        System.out.println("Leaping...");
    }
    public void pirouette(){
        System.out.println("Spinning...");
    }
    public void perform(){
        jete();
        pirouette();
    }
        public static void main(String[] args){
            BalletDancer derrick = new BalletDancer();
            derrick.practice();
            derrick.perform();
        }
}

System.out.println("BalletDancer class: ");
BalletDancer.main(null);
```

    BalletDancer class: 
    Honing my craft!
    Leaping...
    Spinning...



```java
public class Performer { //superclass of Dancer class
    public void practice(){
        System.out.println("Honing my craft!");
    }
    public void perform(){
        System.out.println("Performing for an audience!");
    }
}

public class Dancer extends Performer { //superclass of BalletDancer class
    public void perform(){
        System.out.println("Dancing on the stage!");
    }
}

public class BalletDancer extends Dancer {
    public void jete(){
        System.out.println("Leaping...");
    }
    public void pirouette(){
        System.out.println("Spinning...");
    }
    public void perform(){ 
        perform();//Why is this wrong?
        jete();
        pirouette();
    }
        public static void main(String[] args){
            BalletDancer derrick = new BalletDancer();
            derrick.practice();
            derrick.perform();
        }
}

System.out.println("BalletDancer class: ");
BalletDancer.main(null);
```

### Note:
Super keyword can be placed in any order as it prints out chronologically. 


```java
public void perform(){ 
    super.perform();
    jete();
    pirouette();
}
```


```java
"Honing my craft!
Dancing on the stage!
Leaping...
Spinning..."
```

#### However, if we were to write:


```java
public void perform(){ 
    jete();
    pirouette();
    super.perform();
}
```


```java
"Honing my craft!
Leaping...
Spinning...
Dancing on the stage!"
```

### What if we use 2 super keywords?


```java
public class Performer { //superclass
    public void practice(){
        System.out.println("Honing my craft!");
    }
    public void perform(){
        System.out.println("Performing for an audience!");
    }
}

public class Dancer extends Performer { //subclass
    public void perform(){
        super.perform();
        System.out.println("Dancing on the stage!");
    }
}

public class BalletDancer extends Dancer { //subclass
    public void jete(){
        System.out.println("Leaping...");
    }
    public void pirouette(){
        System.out.println("Spinning...");
    }
    public void perform(){
        super.perform();
        jete();
        pirouette();
    }
        public static void main(String[] args){
            BalletDancer derrick = new BalletDancer();
            derrick.practice();
            derrick.perform();
        }
}

System.out.println("BalletDancer class: ");
BalletDancer.main(null);
```

    BalletDancer class: 
    Honing my craft!
    Performing for an audience!
    Dancing on the stage!
    Leaping...
    Spinning...


### Popcorn Hack
Create a subclass and a superclass by calling the methods from the superclass from the subclass using the keyword super.


## Hacks

Create a superclass with at least 2 subclasses based on your own topic.

- Create a DrawIO diagram for your structure
- Create a superclass on your own topic
- Create at least two subclasses
- Each class must create at least two methods, one private and public variable, and examples of local, static, instance, and parameter variables
- Override at least one method
- Use the `super` keyword at least once
