# diFund
Disaster Fund Calculator.  How long you can live given a fixed amount of money given your regular expenses.

Input a fixed amount of money, recurring expenses, and calculate how long you can live. Designed as a lightweight js web app first, eventually use js display frameworks.
May keep it extra simple, roadmap: might build in ways to enable/disable expenses and configure current static vars.  Time/scheduling aspect and addition of other than monthly expenses.

Functions

Calculate Months
Divide the diFund with the expenses and let you know hw many months it will last
goals: make expenses function send data via param
make the result a float
generalize function so someone can choose other time frame like weeks

Expenses Monthly
This function calculates the monthly expenses
goals: convert static items, generalize function to be able to choose recurrence

List Expenses
Takes the expense list and displays it in a ul

DATA STRUCTURE

The data is being held in a static object array that has 2 attributes per row.

For example:

    expenses[4] = { prop1: "groceries", prop2: 80 };

goals: make more configurable and dynamic.
