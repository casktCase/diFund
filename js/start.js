//disaster fund calculator
//input a fixed amount of money, recurring expenses, and calculate how long you can live.
//Designed as a lightweight js web app first, eventually use js display frameworks.
//may keep it extra simple, roadmap might build in ways to enable/disable expenses
//and configure current static vars.  Time/scheduling aspect and addition of other 
//than monthly expeses 

//master function
function init() {

    var sum = expensesMonthly();
    var mos = calculateMonths(sum);
    document.getElementById("xpns").innerHTML = " Monthly expenses: " + sum + " your fund lasts " + mos + " months.";

}

//This function will divide the diFund with the expenses and let you
//know hw many months it will last
//todo: make expenses function send data via param
//make the result a float
function calculateMonths(exps) {

    //disaster fund total static at first, will be input
    var diFund = 12000;
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

    return sum;

}

window.onload = function () {
    init();
}