//disaster fund calculator
//input a fixed amount of money, recurring expenses, and calculate how long you can live.
//Designed as a lightweight js web app first, eventually use js display frameworks.
//may keep it extra simple, roadmap might build in ways to enable/disable expenses
//and configure current static vars.  Time/scheduling aspect and addition of other 
//than monthly expeses 
var debugV = "";

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
    //"mortgage",
    expenses[0] = 200;
    //"escrow",
    expenses[1] = 20;
    //"car",
    expenses[2] = 60;
    //"carIns",
    expenses[3] = 20;
    //"groceries",
    expenses[4] = 80;
    //"entertainment",
    expenses[5] = 40;
    //"utilities",
    expenses[6] = 50;
    //"yearlyFees",
    expenses[7] = 10;
    //"clothing",
    expenses[8] = 10;
    //"loans",
    expenses[9] = 10;

    for (var i = 0; i < expenses.length; i++)
        sum += expenses[i];

    return sum;

}

window.onload = function () {
    init();
}