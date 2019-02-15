# Triangle Tracker
This program helps you determine triangle types (equilateral, scalene and isosceles). It also helps you determine whether a combination of certain length values can produce a triangle. The user should enter one length value of a triangle side per text field, then click "submit". The program should let the user know the triangle type (equilateral, scalene or isosceles), or whether the values can produce a triangle.

#### 15th February 2019
#### By **Agnes Mwaniki**

## Description
This program helps you determine triangle types (equilateral, scalene and isosceles). It also helps you determine whether a combination of certain length values can produce a triangle. The user should enter one length value of a triangle side per text field, then click "submit". The program should let the user know the triangle type (equilateral, scalene or isosceles), or whether the values can produce a triangle.

* Equilateral triangle - all sides are equal
* Scalene triangle - none of the sides are equal.The sum of any two sides of the triangle must be greater than the third side
* isosceles - two sides are exactly equal

## Setup/Installation Requirements
* Linux OS

## Built With
HTML, CSS and Javascript

## Contribution - BDD
If you would like to contribute to this project, the following BDD specs should help you:smile:

Behavior                                      | Input Example    | Output Example
----------------------------------------------|------------------|-------------------------------------------------
Accept user input                             | 23               | 23
Detect whether user input is a number         | 23               | 23
Detect when user input is NOT a number        | "23"             |"Please input a number, for example 1, 2, or 50"               
Accept only 1 value per text field            | 23               | 23
Not accept more than one value in a text field| 3,5,7            | "Please input only one number, for example 1,or 50"               
Process the 3 entered values                  | 3,5,7            | "Please input only one number, for example 1,or 50"
Return triangle type or "NOT a triangle"      | 3,5,7            | "Scalene Triangle"

## License
Copyright (c) 2019 ** Agnes Mwaniki **
