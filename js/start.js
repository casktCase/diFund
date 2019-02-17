//disaster fund calculator
//input a fixed amount of money, recurring expenses, and calculate how long you can live.

//master function
function init() {

    var diFund = 9000;

    var sum = expensesMonthly();
    var mos = calculateMonths(sum, diFund);
    document.getElementById("total").innerHTML = " Monthly expenses: $" + sum + ", your fund of $" + diFund + " lasts " + mos + " months.";

}

//This function will divide the diFund with the expenses and let you
//know hw many months it will last
//todo: make expenses function send data via param
//make the result a float
//generalize function so someone can choose other time frame like weeks
function calculateMonths(exps, diFund) {

    var total = 0;
    total = diFund / exps;
    return total;
}

//This function calculates the monthly expenses
//todo: convert static items, generalize function to be able to choose recurrence
function expensesMonthly() {

    var sum = 0;

    var expenses = new Array();
    expenses[0] = { prop1: "mortgage", prop2: 200 };
    expenses[1] = { prop1: "escrow", prop2: 20 };
    expenses[2] = { prop1: "car", prop2: 60 };
    expenses[3] = { prop1: "carIns", prop2: 20 };
    expenses[4] = { prop1: "groceries", prop2: 80 };
    expenses[5] = { prop1: "entertainment", prop2: 40 };
    expenses[6] = { prop1: "utilities", prop2: 50 };
    expenses[7] = { prop1: "yearlyFees", prop2: 10 };
    expenses[8] = { prop1: "clothing", prop2: 10 };
    expenses[9] = { prop1: "loans", prop2: 10 };

    expenses.forEach(function (value, index, arry) {

        sum += value.prop2;
    });

    listExpenses(expenses);
    return sum;

}

//takes the expense list and displays it in a ul
function listExpenses(expenses) {

    var list = "";
    expenses.forEach(function (value, index, arry) {

        list += "<li>" + value.prop1 + " = $" + value.prop2 + "</li>";
    });
    document.getElementById("expenses").innerHTML = list;

}

//wait until the page contents are loaded before firing init.
window.onload = function () {
    init();
}