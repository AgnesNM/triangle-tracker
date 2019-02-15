# Triangle Tracker
This program helps you determine triangle types (equilateral, scalene and isosceles). It also helps you determine whether a combination of certain length values can produce a triangle. The user should enter one length value of a triangle side per text field, then click "submit". The program should let the user know the triangle type (equilateral, scalene or isosceles), or whether the values can produce a triangle.

#### 15th February 2019
#### By Agnes Mwaniki (agnesndutamwaniki@gmail.com)

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

Behavior                                      |  Input Example   | Output Example
----------------------------------------------|------------------|--------------------------------------------
Prompt for user input (first triangle length) | 3                |"Input the first triangle length"
Prompt for user input (second triangle length)| 5                |"Input the second triangle length"  
Prompt for user input (third triangle length) | 7                |"Input the third triangle length"
Accept user input                             | 3                | 3
Add user input into an array                  | 3                | [3,]
Detect whether user input is a number         | 3                | 3 or "3"
Convert the user input into a number          | "3"              | 3
Process the user input                        | 3,5,7            | [3,5,7]
Return triangle type or "NOT a triangle"      | 3,5,7            | "Scalene Triangle"

## License
Copyright (c) 2019 ** Agnes Mwaniki **
