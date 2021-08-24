---
title: "Python tutorial"
date: "2020-08-15T22:40:32.169Z"
categories: python
---

## 1. What is python ?

Python is an `interpreted`, `high-level`, `general-purpose`, `object-oriented` programming language.

### Benefits of python

1. Easy to learn
2. Portability
3. Extensive support libraries

## 2. Explain mutable and immutable built in types of Python with example ?

### Immutable data types

`int`
`float`
`decimal`
`bool`
`string`
`tuple`
`range`

```python
str_value = "hi"
str_value[0] = 'y'

```

> TypeError: 'str' object does not support item assignment

```python

tuple_sample = (0, 1, 2, 3)
tuple_sample[2] = 4
```

### Mutable

`list`
`dictionary`
`set`
`user-defined classes`

```python
color_list = ["saffron", "white", "green"]
color_list[1] = "blue"
```

## 3. What is Numpy?

NumPy is a python library used for working with arrays.
It also has functions for working in domain of linear algebra, fourier transform, and matrices.

## 3.1 Why numpy is faster than lists?

NumPy arrays are stored at one continuous place in memory unlike lists, so processes can access and manipulate them very efficiently.

This behavior is called locality of reference in computer science.

## What is scipy ?

SciPy is a collection of mathematical algorithms and convenience functions built on the NumPy extension of Python.

SciPy is organized into subpackages covering different scientific computing domains. These are summarized in the following table:

| Subpackage  | Description                                            |
| ----------- | :----------------------------------------------------- |
| cluster     | Clustering algorithms                                  |
| constants   | Physical and mathematical constants                    |
| fftpack     | Fast Fourier Transform routines                        |
| integrate   | Integration and ordinary differential equation solvers |
| interpolate | Interpolation and smoothing splines                    |
| io          | Input and Output                                       |
| linalg      | Linear algebra                                         |
| ndimage     | N-dimensional image processing                         |
| odr         | Orthogonal distance regression                         |
| optimize    | Optimization and root-finding routines                 |
| signal      | Signal processing                                      |
| sparse      | Sparse matrices and associated routines                |
| spatial     | Spatial data structures and algorithms                 |
| special     | Special functions                                      |
| stats       | Statistical distributions and functions                |

## 4. Difference between `numpy` and `scipy`

Ideally speaking, NumPy is basically for basic operations such as sorting, indexing, and elementary functioning on the array data type. On the other hand, SciPy contains all the algebraic functions some of which are there in NumPy to some extent and not in full-fledged form.

| Numpy                                            | Scipy                                    |
| ------------------------------------------------ | ---------------------------------------- |
| Numpy is written in c                            | Scipy is built on top of numpy           |
| Basic operations like sorting, shaping, indexing | Fully featured version of linear algebra |

Read more at: [link](https://www.freelancinggig.com/blog/2018/12/09/what-is-the-difference-between-numpy-and-scipy/)

## 5. What is pandas ?

pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool,
built on top of the Python programming language.

#### Object creation

Creating a Series by passing a list of values, letting pandas create a default integer index

```python
s = pd.Series([1, 3, 5, np.nan, 6, 8])
```

Creating a DataFrame by passing a NumPy array, with a datetime index and labeled columns

```python
dates = pd.date_range('20130101', periods=6)
```

#### Viewing data

View the top and bottom rows of the frame:

```python
df.head()
df.tail(3)
```

Display the index, columns

```python
df.index
df.columns
```

#### Selection

Selecting a single column, which yields a Series, equivalent to df.A:

```python
df['A']
```

Selecting via [], which slices the rows.

```python
# specific eleemnt [row, column]
df[0:3]]

# specific row
df[0,:]

# specific column
df[:,0]
```

### Operations of Python pandas

#### Stats

Operations in general exclude missing data.

df.mean()

#### Apply

Applying functions to the data

df.apply(np.cumsum)

#### Concat

Concatenating pandas objects together with concat()

#### Join

SQL style merges

## 6. What is pandas series ?

One-dimensional `ndarray` with axis labels (including time series).

[Reference](https://pandas.pydata.org/docs/reference/api/pandas.Series.html?highlight=series#pandas.Series)

## 7. What is pandas Dataframe ?

Two-dimensional (rows and columns), size-mutable, potentially heterogeneous tabular data.

[Reference](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html?highlight=data%20frames)

## 8. What is Machine learning ?

Machine learning (ML) is the study of computer algorithms or programs that improve through experience.

Computer algorithms are finite sequence of well-defined , computer implementable instructions to perform a computation.

Machine Learning is defined as the study of computer programs that leverage algorithms and statistical models to learn through inference and patterns without being explicitly programed.

![Machine learning](/machine_learning.png)

Copied from [here](https://towardsdatascience.com/types-of-machine-learning-algorithms-you-should-know-953a08248861)

### Types of Machine learning

#### 1. Supervised Learning

In this type, the machine learning algorithm is trained on labeled data.

Supervised learning problems can be further grouped into regression and classification problems.

**1. Classification**: A classification problem is when the output variable is a category, such as “red” or “blue” or “disease” and “no disease”.

**2. Regression**: A regression problem is when the output variable is a real value, such as “dollars” or “weight”.

Some popular examples of supervised machine learning algorithms are:

- Linear regression for regression problems.
- Random forest for classification and regression problems.
- Support vector machines for classification problems.

#### 2. Unsupervised Learning

Unsupervised machine learning holds the advantage of being able to work with unlabeled data.

Unsupervised learning problems can be further grouped into clustering and association problems.

**1. Clustering**: A clustering problem is where you want to discover the inherent groupings in the data, such as grouping customers by purchasing behavior.

**2. Association**: An association rule learning problem is where you want to discover rules that describe large portions of your data, such as people that buy X also tend to buy Y.

Some popular examples of unsupervised learning algorithms are:

- k-means for clustering problems.
- Apriori algorithm for association rule learning problems.

#### 3. Semi-supervised Learning

Semi-supervised learning falls in between supervised and unsupervised learning

#### 4. Reinforcement Learning

Reinforcement learning directly takes inspiration from how human beings learn from data in their lives. It features an algorithm that improves upon itself and learns from new situations using a trial-and-error method. Favorable outputs are encouraged or `reinforced`, and non-favorable outputs are discouraged or `punished`.

## Program to multiply of 2 matrix with nested list and loops

```python
# 3x3 matrix
x = [[12,7,3],
    [4 ,5,6],
    [7 ,8,9]]

# 3x4 matrix
y = [[5,8,1,2],
    [6,7,3,0],
    [4,5,9,1]]

# result is 3x4
result = [[0,0,0,0],
         [0,0,0,0],
         [0,0,0,0]]

# iterate through the rows of x

for i in range(len(x)):
  for j in range(len(y[0])):
    for k in range(len(y)):
        result[i][j] += x[i][k] * y[k][j]

for r in result:
   print(r)
```

## Program to multiply of 5*3 matrix by 3*2 matrix and create a real matrix product

```python
import numpy as np

x = np.random.random((5,3))

print("first array")
print(x)

y = np.random.random((3, 2))

print("second array")
print(y)

print("dot product of 2 matrix")

z= np.dot(x, y)
print(z)
```

## Single integration using scipy

```python
import numpy as np
from scipy import integrate

f = lambda x: np.exp(-x**2)
i = integrate.quad(f, 0,1)
print(i)

```

## Double integration using scipy

```python
import numpy as np
from scipy import integrate

# Compute the double integral of x * y**2 over the box x ranging from 0 to 2 and y ranging from 0 to 1.

double_eqn = lambda y,x: x * y ** 2
d = integrate.dblquad(double_eqn, 0, 2, lambda x: 0, lambda x:1)
print(d)
```

# Basics

## 1. What is an expression?

Expressions are representations of value. They are different from statements in the fact that statements do something while expressions are a representation of value. Python has some advanced constructs through which you can represent values and hence these constructs are also called expressions.

## 2. What is a syntax error?

Syntax errors are the most basic type of error. They arise when the Python parser is unable to understand a line of code.

## 3. What is PEP8?

PEP8 is a document that provides guidelines and best practices on how to write Python code

## 4. What does a linter do?

Linting highlights syntactical and stylistic problems in your Python source code, which oftentimes helps you identify and correct subtle programming errors or unconventional coding practices that can lead to errors.

# Primitive Types

## 1. What is a variable?

Variables are nothing but reserved memory locations to store values. This means that when you create a variable you reserve some space in memory.

## 2. What are the primitive built-in types in Python?

Primitive Types are the most basic data structures. They are the building block for data manipulation, and such contains pure, simple values of data.
Python has four primitive types: integers, floats, booleans and strings.

## Built-in Functions

The Python interpreter has a number of functions and types built into it that are always available. They are listed here in alphabetical order.

![built-in functions](/built-in-functions.png)

## 3. When should we use `"""` (tripe quotes) to define strings?

`"""` This string is on multiple lines within three double quotes on either side. """ With triple quotes, you can print strings on multiple lines to make text, especially lengthy text, easier to read.

## 4. when should we use `"""` (triple quotes) to define strings in python ?

`"""` This string is on multiple lines within three double quotes on either side. `"""` With triple quotes, you can print strings on multiple lines to make text, especially lengthy text, easier to read.

## 5. What about name[-2] ?

```python
    name="python"
```

`name[-2]` will be ‘o’

## 6. What about `name[1:-1]`?

    ‘ytho'

## 7. How to get the length of name?

Using `len()` function `len(name)`

## 8. What are the escape sequences in Python?

    `\newline`
    Backslash and newline ignored
    `\\`
    Backslash (\)
    `\`
    Single quote (')
    \"
    Double quote (")
    \a
    ASCII Bell (BEL)
    \b
    ASCII Backspace (BS)
    \f
    ASCII Formfeed (FF)
    \n
    ASCII Linefeed (LF)
    \r
    ASCII Carriage Return (CR)
    \t
    ASCII Horizontal Tab (TAB)
    \v
    ASCII Vertical Tab (VT)
    \ooo
    Character with octal value ooo
    \xhh
    Character with hex value hh

## 9. What is the result of `f“{2+2}+{10%3}”`?

    ‘4+1'

## 10. Given (name = “john smith”), what will name.title() return?

    'John Smith’

## 11. What does `name.strip()` do?

It removes all the extra spaces in the beginning and the end of the string

## 12. What will `name.find(“Smith”)` return?

    -1

## 13. What will be the value of name after we call `name.replace(“j”, “k”)` ?

    'kohn smith’

## 14. How can we check to see if name contains “John”?

`name.find(‘John’)` if output is 0 then it is present if -1 then its not present 15.

## 15. What are the 3 types of numbers in Python?

integers, floating point numbers, and complex numbers

# Control Flow

## 1. What is the difference between 10 / 3 and 10 // 3?

10/3 gives the 3.3333333333333335(result of the division) and 10//3 gives 3 (quotient)

## 2. What is the result of 10 \*\* 3?

1000

## 3. Given (x = 1), what will be the value of after we run (x += 2)?

3

## 4. How can we round a number?

Using round function round(2.654,2) output will be 2.65

## 5. What is the result of float(1)?

1.0

## 6. What is the result of bool(“False”)?

True

## 7. What are the falsy values in Python?

Values that evaluate to False are considered Falsy.

## 8. What is the result of 10 == “10”?

False

## 9. What is the result of “bag” > “apple”?

True

## 10. What is the result of not(True or False)?

    False

## 11. Under what circumstances does the expression 18 <= age < 65 evaluate to True?

If age is greater or equal to 18 and less than 65 then it will be true like example age=19 will give output as True

## 12. What does range(1, 10, 2) return?

    `1 3 5 7 9`

## 13. Name 3 iterable objects in Python.

```python
    __next__()
    __iter__()
    __init__()
```

# Functions

## 1. What is the difference between a parameter and an argument?

A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.

## 2. All functions in Python by default return …?

If we do not not specify a return value for a Python function, it returns None

## 3. What are keyword arguments and when should we use them?

When we call a function with some values, these values get assigned to the arguments according to their position. Python allows functions to be called using keyword arguments.
We use them :
We can often leave out arguments that have default values
We can rearrange arguments in a way that makes them most readable
We call arguments by their names to make it more clear what they represent

## 4. How can we make a parameter of a function optional?

functionName( '1', name, '3', g="foo", h="bar" ){…}. After the required positional arguments, you can specify specific optional arguments by name.

## 5. What happens when we prefix a parameter with an asterisk (\*)?

Single asterisk as used in function declaration allows variable number of arguments passed from calling environment. Inside the function it behaves as a tuple.

## 6. What about two asterisks (\*\*)?

If we want to pass a keyworded variable length of arguments to a function, we use \*\*

## 7. What is scope?

Variables can only reach the area in which they are defined, which is called scope.

## 8. What is the difference between local and global variables?

A global variable is a variable that is accessible globally. A local variable is one that is only accessible to the current scope, such as temporary variables used in a single function definition

## 9. Why is using the global statement a bad practice?

That means it makes it difficult in any reasonably complex program to keep track of what values are in that global at any time. It means that any function you write is now dependent on
Coding Exercises

## 10. Write a function that returns the maximum of two numbers.

```python
def max_two_no(a,b):
    if a>b:
        return(a)
    else:
        return(b)
```

## 11. Write a function called `fizz_buzz` that takes a number.

    If the number is divisible by 3, it should return “Fizz”.
    If it is divisible by 5, it should return “Buzz”.
    If it is divisible by both 3 and 5, it should return “FizzBuzz”.
    Otherwise, it should return the same number.

```python
def fizz_buzz(number):
    num3= number%3==0
    num5=number%5==0
    if(num3 or num5):
        return(num3*"Fizz" + num5*"Buzz")
    return(number)
```

## 3. Write a function for checking the speed of drivers. This function should have one parameter: speed.

If speed is less than 70, it should print “Ok”.
Otherwise, for every 5km above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points. For example, if the speed is 80, it should print: “Points: 2”.
If the driver gets more than 12 points, the function should print: “License suspended”

```python
def speed_check(speed):
    if speed <= 70:
        return "OK"

    else:
        speed1 = (speed-70)/5

        if speed1 <= 12:
            return (f"Point: {speed1}")

        else:
            return ("License suspended")

enter = speed_check(int(input("Enter speed: ")))
print(enter)
```

4. Write a function called showNumbers that takes a parameter called limit. It should print all the numbers between 0 and limit with a label to identify the even and odd numbers. For example, if the limit is 3, it should print:
   0 EVEN
   1 ODD
   2 EVEN
   3 ODD

```python
def even_odd_recognize(limit):
    for i in range(0,limit+1):
        if(i%2==0):
            print(i,' EVEN')
        else:
            print(i,' ODD’)
```

5. Write a function that returns the sum of multiples of 3 and 5 between 0 and limit (parameter). For example, if limit is 20, it should return the sum of 3, 5, 6, 9, 10, 12, 15, 18, 20.

```python
def sum_3_5(limit):
   total_sum = 0
   for i in range(limit):
        if (i%3 == 0 or i%5 == 0):
            total_sum = total_sum+i
            print ("Sum is :",total_sum)
```

6. Write a function called show_stars(rows). If rows is 5, it should print the following:

\*
\*\*

```python
def star_pattern(limit):
    for i in range(1,limit+1):
        print("*" *i)
```

7. Write a function that prints all the prime numbers between 0 and limit where limit is a parameter

```python
def primeNo(upper):
   for num in range(0, upper + 1): # all prime numbers are greater than 1
        if num > 1:
            for i in range(2, num):
                if (num % i) == 0:
                    break
                else:
                    print(num)
```

8. What is the output of the following code?

```python
   age = 38
   if (age >= 11):
        print ("You are eligible to see the Football match.")
   if (age <= 20 or age >= 60):
        print("Ticket price is $12")
   else:
      print("Tic kit price is $20")
   else:
        print ("You're not eligible to buy a ticket.")

```

Output: You are eligible to see the Football match.
Tickit price is \$20

9. What is the output of the following piece of code?

```python
   n = 150
   print(n)
   #if n is greater than 500, n is multiplied by 7, otherwise n is divided by 7
   result = n \* 7 if n > 500 else n / 7
   print(result)
```

Output: 150
21.428571428571427

10. Write program to read 2X 2 matrix and find its covariance matrix. Eigen values and Eigen vectors of covariance matrix. Discuss what do you mean by eigen values and covariance matrix

```python
import numpy as np
from numpy import linalg as LA
matrix = []
for i in range(2): # A for loop for row entries
    a =[]
    for j in range(2): # A for loop for column entries
        a.append(int(input()))
        matrix.append(a)
        covMatrix = np.cov(matrix,bias=True)
        print ("covariance matrix:",covMatrix)
        w, v = LA.eig(matrix)
        print("Eigenvalues",w)
        print("Eigenvectors",v)
```

    Covariance matrix: a covariance matrix (also known as auto-covariance matrix, dispersion matrix, variance matrix, or variance–covariance matrix) is a square matrix giving the covariance between each pair of elements of a given random vector.
    Eigen values are just number associated with matrices.
    An eigenvalue of a linear operator L is a scalar λ for which there exists a non-zero vector x such that

Lx=λx .

11. Design a simple calculator to perform addition, subtraction, multiplication and division.

```python

def add(x, y):
    return x + y

# This function subtracts two numbers

def subtract(x, y):
    return x - y

# This function multiplies two numbers

def multiply(x, y):
    return x \* y

# This function divides two numbers

def divide(x, y):
    return x / y
print("Select operation.")
print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.Divide")

while True: # Take input from the user
    choice = input("Enter choice(1/2/3/4): ")

    # Check if choice is one of the four options
    if choice in ('1', '2', '3', '4'):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(num1, "+", num2, "=", add(num1, num2))

        elif choice == '2':
            print(num1, "-", num2, "=", subtract(num1, num2))

        elif choice == '3':
            print(num1, "*", num2, "=", multiply(num1, num2))

        elif choice == '4':
            print(num1, "/", num2, "=", divide(num1, num2))
        break
    else:
        print("Invalid Input")
```

12. Perform following matrix operations:
    Writing a data into given size matrix
    Reading a matrix to either row vector or column vector
    Addition, subtraction, multiplication of matrices
    Find the rank of a given matrix

```python
import numpy as np

matrix1 = []
print("Enter the entries of first matrix rowwise:")

for i in range(2):          # A for loop for row entries
    a =[]
    for j in range(2):      # A for loop for column entries
         a.append(int(input()))
    matrix1.append(a)
arr1 = np.array(matrix1)

matrix2 = []

print("Enter the entries of second matrix rowwise:")

for i in range(2):          # A for loop for row entries
    a =[]
    for j in range(2):      # A for loop for column entries
         a.append(int(input()))
    matrix2.append(a)

arr2 = np.array(matrix2)
print('----------First Matrix---------------')

# For printing the matrix
for i in range(2):
    for j in range(2):
        print(matrix1[i][j], end = " ")
    print()
print('----------Second Matrix---------------')
for i in range(2):
    for j in range(2):
        print(matrix2[i][j], end = " ")
    print()

print("Addition of two matrix is ", arr1+arr2)
print("Substraction of two matrix is ", arr1-arr2)
print("Dot product of two matrix is ", arr1.dot(arr2))
print("Multiplication of two matrix is ", arr1*arr2)

# Python 3 program to find rank of a matrix
class rankMatrix(object):
    def __init__(self, Matrix):
        self.R = len(Matrix)
        self.C = len(Matrix[0])

    # Function for exchanging two rows of a matrix
    def swap(self, Matrix, row1, row2, col):
        for i in range(col):
            temp = Matrix[row1][i]
            Matrix[row1][i] = Matrix[row2][i]
            Matrix[row2][i] = temp

    # Function to Display a matrix
    def Display(self, Matrix, row, col):
        for i in range(row):
            for j in range(col):
                print (" " + str(Matrix[i][j]))
            print ('\n')

    # Find rank of a matrix
    def rankOfMatrix(self, Matrix):
        rank = self.C
        for row in range(0, rank, 1):

            # Before we visit current row
            # 'row', we make sure that
            # mat[row][0],....mat[row][row-1]
            # are 0.

            # Diagonal element is not zero
            if Matrix[row][row] != 0:
                for col in range(0, self.R, 1):
                    if col != row:

                        # This makes all entries of current
                        # column as 0 except entry 'mat[row][row]'
                        multiplier = (Matrix[col][row] /
                                      Matrix[row][row])
                        for i in range(rank):
                            Matrix[col][i] -= (multiplier *
                                               Matrix[row][i])


            else:
                reduce = True

                # Find the non-zero element
                # in current column
                for i in range(row + 1, self.R, 1):

                    # Swap the row with non-zero
                    # element with this row.
                    if Matrix[i][row] != 0:
                        self.swap(Matrix, row, i, rank)
                        reduce = False
                        break


                if reduce:

                    # Reduce number of columns
                    rank -= 1

                    # copy the last column here
                    for i in range(0, self.R, 1):
                        Matrix[i][row] = Matrix[i][rank]

                # process this row again
                row -= 1

        # self.Display(Matrix, self.R,self.C)
        return (rank)

# Driver Code

Matrix = matrix1
RankMatrix = rankMatrix(Matrix)
print ("Rank of the Matrix is:",
       (RankMatrix.rankOfMatrix(Matrix)))
Matrix = matrix2
RankMatrix = rankMatrix(Matrix)
print ("Rank of the Matrix is:",
       (RankMatrix.rankOfMatrix(Matrix)))


```

13. Perform data Analysis which includes:
    Read a data from a .xls file
    Write a date into a .xls file
    Plot a data from the file using different styles
    Compute Mean, median, standard deviation of a row and column separately

```python
import xlrd
from xlutils.copy import copy
import pandas
import matplotlib.pyplot as plt
#Read the data from xls
workbook = xlrd.open_workbook('D:/BSc/BSC 4th Sem/Python/read_xls.xls')
worksheet = workbook.sheet_by_index(0)
for j in range(0,worksheet.nrows):
    for i in range(0,worksheet.ncols):
        print(worksheet.cell(j, i).value)

#write the data to xls
w = copy(workbook)
w.get_sheet(0).write(0,0,"foo")
w.save('D:/BSc/BSC 4th Sem/Python/changed_xls.xls')

#read the data to get the statistical information
excel_data_df = pandas.read_excel('D:/BSc/BSC 4th Sem/Python/book2.xls')
# print whole sheet data
print(excel_data_df)
#plots
#scatter
excel_data_df.plot(kind='scatter',x='Class',y='Marks',color='red')
# a simple line plot
excel_data_df.plot(kind='bar',x='Class',y='Marks')
# gca stands for 'get current axis'
ax = plt.gca()

excel_data_df.plot(kind='line',x='Class',y='Marks',ax=ax)


#get the statistic information of that dataframe
print("Statistical information\n ",excel_data_df.describe())

```

14. Use Bisection Method to find roots of a given function f(x) # The function is x^3 - x^2 + 2

```python
# The function is x^3 - x^2  + 2
def func(x):
    return x*x*x - x*x + 2

# Prints root of func(x)
# with error of EPSILON
def bisection(a,b):

    if (func(a) * func(b) >= 0):
        print("You have not assumed right a and b\n")
        return

    c = a
    while ((b-a) >= 0.01):

        # Find middle point
        c = (a+b)/2

        # Check if middle point is root
        if (func(c) == 0.0):
            break

        # Decide the side to repeat the steps
        if (func(c)*func(a) < 0):
            b = c
        else:
            a = c

    print("The value of root is : ","%.4f"%c)

# Driver code
# Initial values assumed

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
bisection(num1, num2)

```

16 Use Cramer’s rule to solve minimum 3 linear equations

```python
from numpy import linalg

A=[[2,-1,5,1],[3,2,2,-6],[1,3,3,-1],[5,-2,-3,3]]
B=[-3,-32,-47,49]
C=[[2,-1,5,1],[3,2,2,-6],[1,3,3,-1],[5,-2,-3,3]]
X=[]
for i in range(0,len(B)):
    for j in range(0,len(B)):
        C[j][i]=B[j]
        if i>0:
            C[j][i-1]=A[j][i-1]
    X.append(round(linalg.det(C)/linalg.det(A),1))

print('w=%s'%X[0],'x=%s'%X[1],'y=%s'%X[2],'z=%s'%X[3])
```

## 18 Use Newton-Raphson method to solve given equation

```python

def func( x ):
    return x * x * x - x * x + 2

# Derivative of the above function
# which is 3*x^x - 2*x
def deriv_func( x ):
    return 3 * x * x - 2 * x

# Function to find the root
def newton_raphson( x ):
    h = func(x) / deriv_func(x)
    while abs(h) >= 0.0001:
        h = func(x)/deriv_func(x)

        # x(i+1) = x(i) - f(x) / f'(x)
        x = x - h

    print("The value of the root is : ",
                             "%.4f"% x)

# Driver program to test above
x0 = -20 # Initial values assumed
newton_raphson(x0)
```

20. Write a code to check whether a given number is prime or not,

If not prime, whether it is divisible by 3,7,9,11?

```python
# To take input from the user
num = int(input("Enter a number: "))

# prime numbers are greater than 1
if num > 1:
   # check for factors
   for i in range(2,num):
       if (num % i) == 0:
           print(num,"is not a prime number")
           if( (num%3)==0 ):
               print("Divisible by 3")
           elif( (num%7)==0 ):
               print("Divisible by 7")
           elif( (num%9)==0 ):
               print("Divisible by 9")
           elif( (num%11)==0 ):
               print("Divisible by 11")
           break
   else:
       print(num,"is a prime number")

# if input number is less than
# or equal to 1, it is not prime
else:
   print(num,"is not a prime number")
   if( (num%3)==0 ):
       print("Divisible by 3")
   elif( (num%7)==0 ):
       print("Divisible by 7")
   elif( (num%9)==0 ):
       print("Divisible by 9")
   elif( (num%11)==0 ):
       print("Divisible by 11")
```

## 21. Write a Python program to check if a number is positive or negative

```python
num = float(input("Enter a number: "))
if num > 0:
   print("Positive number")
elif num == 0:
   print("Zero")
else:
print("Negative number")
```

## 22. Write a python program to check leap year

```python
year = int(input("Enter a year: "))
if (year % 4) == 0:
   if (year % 100) == 0:
       if (year % 400) == 0:
           print("{0} is a leap year".format(year))
       else:
           print("{0} is not a leap year".format(year))
   else:
       print("{0} is a leap year".format(year))
else:
   print("{0} is not a leap year".format(year))
```

## 23. Write a Python Program to Read a Number n And Print the Series "1+2+…..+n= "

```python
n = int(input("Enter a Number : "))
series_sum = []
for i in range(1,n+1):
     series_sum.append(i)
     if i==n:
         print(i)
     else:
         print(i,end=' + ')
print(' = ', sum(series_sum), sep='')
```

## 24. Write a Program to Compute a Polynomial Equation given that the Coefficients of the Polynomial are stored in a List

```python
import math
print("Enter the coefficients of the form ax^3 + bx^2 + cx + d")
lst=[]
for i in range(0,4):
    a=int(input("Enter coefficient:"))
    lst.append(a)
x=int(input("Enter the value of x:"))
sum1=0
j=3
for i in range(0,3):
    while(j>0):
        sum1=sum1+(lst[i]*math.pow(x,j))
        break
    j=j-1
sum1=sum1+lst[3]
print("The value of the polynomial is:",sum1)
```

## 25 Write a Python Program to Compute the Value of Euler's Number e. Use the Formula: e = 1 + 1/1! + 1/2! + …… 1/n!

```python
# Function to find factorail of a number
def factorial(n):
    res = 1
    for i in range(2, n + 1):
            res *= i
    return res

# A Simple Function to return value
# of 1/1! + 1/2! + .. + 1/n!
def sum(n):
    s = 0.0

    for i in range(1, n + 1):
        s += 1.0 / factorial(i)
    print(s)

# Driver program to test above functions
n=int(input("Enter the number:"))
sum(n)
```

## 26. Write a Python Program to Convert Binary to Gray Code

```python
def binary_to_gray(n):
    """Convert Binary to Gray codeword and return it."""
    n = int(n, 2) # convert to int
    n ^= (n >> 1)

    # bin(n) returns n's binary representation with a '0b' prefixed
    # the slice operation is to remove the prefix
    return bin(n)[2:]


g = input('Enter binary number: ')
b = binary_to_gray(g)
print('Gray codeword:', b)
```

## 27. Write a Python Program to Read a List of Words and Return the Length of the Longest One

```python
a=[]
n= int(input("Enter the number of elements in list:"))
for x in range(0,n):
    element=input("Enter element" + str(x+1) + ":")
    a.append(element)
max1=len(a[0])
temp=a[0]
for i in a:
    if(len(i)>max1):
       max1=len(i)
       temp=i
print("The word with the longest length is:")
print(temp)
```

## 28. Write a Python Program to detect if Two Strings are Anagrams

```python
s1= str(input("Enter first string:"))
s2= str(input("Enter second string:"))
if(sorted(s1)==sorted(s2)):
      print("The strings are anagrams.")
else:
      print("The strings aren't anagrams.")
```

## 29. Write a Python Program to Generate a Dictionary that Contains Numbers (between 1 and n) in the Form (x,x\*x).

```python
n=int(input("Input a number "))
d = dict()

for x in range(1,n+1):
    d[x]=x*x

print(d)
```

## 30. Write a Python Program to Count the Frequency of Words Appearing in a String Using a Dictionary

```python
test_string= str(input("Enter first string:"))
l=[]
l=test_string.split()
word_freq=[l.count(p) for p in l]
print(dict(zip(l,word_freq)))
```

## 31. Write a Python Program to Count the Number of Words in a Text File

```python

fname = input("Enter file name: ")

num_words = 0

with open(fname, 'r') as f:
    for line in f:
        words = line.split()
        num_words += len(words)
print("Number of words:")
print(num_words)
Write a Python Program that Reads a Text File and Counts the Number of Times a Certain Letter Appears in the Text File

fname = input("Enter file name: ")
l=input("Enter letter to be searched:")
k = 0

with open(fname, 'r') as f:
    for line in f:
        words = line.split()
        for i in words:
            for letter in i:
                if(letter==l):
                    k=k+1
print("Occurrences of the letter:")
print(k)
```

## 32. Write a Python Program to Implement Stack using One Queue

```python
class Stack:
    def __init__(self):
        self.q = Queue()

    def is_empty(self):
        return self.q.is_empty()

    def push(self, data):
        self.q.enqueue(data)

    def pop(self):
        for _ in range(self.q.get_size() - 1):
            dequeued = self.q.dequeue()
            self.q.enqueue(dequeued)
        return self.q.dequeue()


class Queue:
    def __init__(self):
        self.items = []
        self.size = 0

    def is_empty(self):
        return self.items == []

    def enqueue(self, data):
        self.size += 1
        self.items.append(data)

    def dequeue(self):
        self.size -= 1
        return self.items.pop(0)

    def get_size(self):
        return self.size


s = Stack()

print('Menu')
print('push <value>')
print('pop')
print('quit')

while True:
    do = input('What would you like to do? ').split()

    operation = do[0].strip().lower()
    if operation == 'push':
        s.push(int(do[1]))
    elif operation == 'pop':
        if s.is_empty():
            print('Stack is empty.')
        else:
            print('Popped value: ', s.pop())
    elif operation == 'quit':
        Break
```

## 33. Write a Python Program to Check String is Palindrome using Stack

```python
class Stack:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return self.items == []

    def push(self, data):
        self.items.append(data)

    def pop(self):
        return self.items.pop()


s = Stack()
text = input('Please enter the string: ')

for character in text:
    s.push(character)

reversed_text = ''
while not s.is_empty():
    reversed_text = reversed_text + s.pop()

if text == reversed_text:
    print('The string is a palindrome.')
else:
    print('The string is not a palindrome.')
```

## 35. Write Notes on the following points

### 1). What Is a Python NumPy Array?

A numpy array is a grid of values, all of the same type, and is indexed by a tuple of nonnegative integers. The number of dimensions is the rank of the array; the shape of an array is a tuple of integers giving the size of the array along each dimension.

### NumPy Arrays v/s List

A numpy array is a grid of values, all of the same type, and is indexed by a tuple of nonnegative integers
A list is the Python equivalent of an array, but is resizeable and can contain elements of different types.

### NumPy Operations

##### Mathematical and logical operation

Fourier tranforms and routines for the shape manipulation
Operations related to linear algebra. Numpy has in-build functions for linear algebra and random number getion

##### NumPy Special Functions

`numpy.cbrt(arr, out = None, ufunc ‘cbrt’)` This function helps the user to conjugate any complex number.
`numpy.clip()` This mathematical function helps user to calculate cube root of x for all x being the array elements.

`convolve()` Returns the discrete, linear convolution of two one-dimensional sequences.
`sqrt()` Return the non-negative square-root of an array, element-wise.
square() Return the element-wise square of the input.
absolute() Calculate the absolute value element-wise.
fabs() Compute the absolute values element-wise.
sign() Returns an element-wise indication of the sign of a number.
interp() One-dimensional linear interpolation.
maximum() Element-wise maximum of array elements.
minimum() Element-wise minimum of array elements.
real_if_close() If complex input returns a real array if complex parts are close to zero.
nan_to_num() Replace NaN with zero and infinity with large finite numbers.
heaviside() Compute the Heaviside step function.

## 36. Write a python program for Matrix Multiplication Using Nested List Comprehension and using Using Nested Loop

```python
# Program to multiply two matrices using nested loops

# 3x3 matrix
X = [[12,7,3],
    [4 ,5,6],
    [7 ,8,9]]
# 3x4 matrix
Y = [[5,8,1,2],
    [6,7,3,0],
    [4,5,9,1]]
# result is 3x4
result = [[0,0,0,0],
         [0,0,0,0],
         [0,0,0,0]]

# iterate through rows of X
for i in range(len(X)):
   # iterate through columns of Y
   for j in range(len(Y[0])):
       # iterate through rows of Y
       for k in range(len(Y)):
           result[i][j] += X[i][k] * Y[k][j]

for r in result:
   print(r)
```

## 37. Write a python program to find the H.C.F of two input number using loops

```python
# Python program to find H.C.F of two numbers

# define a function
def compute_hcf(x, y):

# choose the smaller number
    if x > y:
        smaller = y
    else:
        smaller = x
    for i in range(1, smaller+1):
        if((x % i == 0) and (y % i == 0)):
            hcf = i
    return hcf

num1 = int(input('Please enter First number'))

num2 =  int(input('Please enter Second number'))

print("The H.C.F. is", compute_hcf(num1, num2))
```

## 38. Answer the following

### 1). What is SCipy?

SciPy, a scientific library for Python is an open source, BSD-licensed library for mathematics, science and engineering. The SciPy library depends on NumPy, which provides convenient and fast N-dimensional array manipulation. The main reason for building the SciPy library is that, it should work with NumPy arrays. It provides many user-friendly and efficient numerical practices such as routines for numerical integration and optimization.

### Difference between Scipy and Numpy?

NumPy is basically for basic operations such as sorting, indexing, and elementary functioning on the array data type. On the other hand, SciPy contains all the algebraic functions some of which are there in NumPy to some extent and not in full-fledged form.

### 2). Why use SciPy

SciPy is a library that uses NumPy for more mathematical functions. SciPy uses NumPy arrays as the basic data structure, and comes with modules for various commonly used tasks in scientific programming, including linear algebra, integration (calculus), ordinary differential equation solving, and signal processing.

## 39. Write a python program to read a image and flip it using scipy library

```python
import cv2
from scipy import ndimage
import numpy as np
import imageio
import matplotlib.pyplot as plt
#read the image
face1=imageio.imread('/Pictures/52-526122_nec-logo-png-clipart.png') # uses the Image module (PIL)
plt.imshow(face1)
plt.show()
#convert to greyscale
face=cv2.cvtColor(face1,cv2.COLOR_BGR2GRAY)
lx, ly = face.shape
# Cropping
crop_face = face[lx // 4: - lx // 4, ly // 4: - ly // 4]
# up <-> down flip
flip_ud_face = np.flipud(face)
# rotation
rotate_face = ndimage.rotate(face, 45)
rotate_face_noreshape = ndimage.rotate(face, 45, reshape=False)
plt.imshow(rotate_face_noreshape)
```

## 40. Perform single integration using Scipy library

```python
import scipy.integrate
from numpy import exp
f= lambda x:exp(-x**2)
i = scipy.integrate.quad(f, 0, 1)
print (i)
```
