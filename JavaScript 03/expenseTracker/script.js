class Expense{
    constructor(name, date, cost){
        this.name = name;
        this.date = date;
        this.cost = cost;
    }

    isValid(){
        if(this.name && this.date && this.cost){
            return true;
        }else{
            return false;
        }
    }
}

const expense = new Expense()
const allExpenses = []
let filterExpenses = []

const showExpenses = () => {
    const expenseDiv = document.querySelector(".expenses .list-group");
    expenseDiv.innerHTML = null;
    const expenseTotal = document.querySelector(".total");
    
    const filter1 = document.querySelector('.year').value;
    const filter2 = document.querySelector('.month').value;
    

    filterExpenses = []
    allExpenses.forEach((exp) => {
        if(exp.date.getFullYear() === Number.parseInt(filter1) || filter1 === 'Any'){
            if(exp.date.getMonth() === Number.parseInt(filter2) || filter2 === 'Any'){
                filterExpenses.push(exp);
            }
        }
    })

    filterExpenses.forEach((ele) => {
        const expenseItem = document.createElement('li');
        expenseItem.setAttribute('class', 'list-group-item');

        const expenseListItem = document.createElement('div');
        expenseListItem.setAttribute('class', 'expense-item');
        expenseItem.appendChild(expenseListItem);

        const expenseName = document.createElement('span');
        expenseName.setAttribute('class', 'expense-name');
        expenseName.innerText = ele.name;
        expenseListItem.appendChild(expenseName);
                    
        const expenseCost = document.createElement('span');
        expenseCost.setAttribute('class', 'expense-cost');
        expenseCost.innerText = `${ele.cost.toString()} Rs`;
        expenseListItem.appendChild(expenseCost);

        const expenseDate = document.createElement('span');
        expenseDate.setAttribute('class', 'expense-date');
        expenseDate.innerText = ele.date.toLocaleDateString();
        expenseListItem.appendChild(expenseDate);
        
        expenseDiv.appendChild(expenseItem);
    })

    let totalCost = 0;
    filterExpenses.forEach((exp) => {
        totalCost += exp.cost; 
    })

    expenseTotal.innerText = `Total: ${totalCost}`;
}

const addExpense = (event) => {
    const newExpense = new Expense(expense.name, expense.date, expense.cost)

    if(newExpense.isValid()){
        allExpenses.push(newExpense);
        showExpenses()
        clear()
    }
}

const clear = () =>{
    expense.name = undefined;
    expense.cost = undefined;
    expense.date = undefined;
    document.querySelector("#expense-name").value = ''
    document.querySelector("#expense-cost").value = ''
    document.querySelector("#expense-date").value = ''
}

const updateExpenseName = (event) => {
    expense.name = event.target.value;
}

const updateExpenseCost = (event) => {
    expense.cost = Number.parseInt(event.target.value);
}

const updateExpenseDate = (event) => {
    const dateList = event.target.value.split("-").map((ele) => {
        return Number.parseInt(ele) 
    });
    dateList[1] -= 1
    expense.date = new Date(...dateList);
}

document.querySelector("#expense-name").addEventListener('selectionchange', updateExpenseName);
document.querySelector("#expense-cost").addEventListener('selectionchange', updateExpenseCost);
document.querySelector("#expense-date").addEventListener('change', updateExpenseDate);
document.querySelector("#add-expense").addEventListener('click', addExpense);
document.querySelector(".year").addEventListener('change', showExpenses);
document.querySelector(".month").addEventListener('change', showExpenses);