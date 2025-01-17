const sales = [
    { id: 1000, date: "2025-01-10", amount: 250.75, category: "Electronics" },
    { id: 1001, date: "2025-02-15", amount: 125.00, category: "Clothing" },
    { id: 1002, date: "2024-12-05", amount: 89.99, category: "Groceries" },
    { id: 1003, date: "2023-11-20", amount: 310.50, category: "Furniture" },
    { id: 1004, date: "2025-03-08", amount: 45.60, category: "Accessories" },
    { id: 1005, date: "2023-10-12", amount: 75.20, category: "Books" },
    { id: 1006, date: "2024-09-25", amount: 560.00, category: "Electronics" },
    { id: 1007, date: "2024-08-30", amount: 99.99, category: "Sports" },
    { id: 1008, date: "2023-07-18", amount: 120.00, category: "Clothing" },
    { id: 1009, date: "2024-06-22", amount: 300.75, category: "Furniture" },
    { id: 1010, date: "2025-05-14", amount: 89.99, category: "Groceries" },
    { id: 1011, date: "2024-04-10", amount: 220.50, category: "Books" },
    { id: 1012, date: "2023-03-02", amount: 45.60, category: "Accessories" },
    { id: 1013, date: "2024-02-19", amount: 150.75, category: "Electronics" },
    { id: 1014, date: "2023-01-25", amount: 99.90, category: "Sports" },
    { id: 1015, date: "2025-06-05", amount: 400.00, category: "Furniture" },
    { id: 1016, date: "2024-11-23", amount: 59.99, category: "Clothing" },
    { id: 1017, date: "2023-12-12", amount: 500.75, category: "Electronics" },
    { id: 1018, date: "2025-07-28", amount: 65.20, category: "Books" },
    { id: 1019, date: "2024-08-16", amount: 49.99, category: "Groceries" }
  ];


  //here i have made the function to display all the sales data
function displayAll(){
    console.log("TOTAL SALES RECORD");
    sales.forEach(function (sales){
        console.log(`id: ${sales.id},  date: ${sales.date},  amount:${sales.amount},  category:${sales.category}`);
    })
}

//here i have made the function to filter sales of a particular category
function filterCategory(arr,c){
    return arr.filter(function (cat){
        return cat.category===c;
    });
}


//here i have made a function to find the total sales of a particular category
function categorySales(arr,c){
    return arr.filter(function (data){
        return data.category===c;
    }).reduce(function(total,data){
        return total+data.amount;
    },0)
}


//here i have made a function to find the monthly sales
function monthSales(arr,m){
    return arr.filter(function(data){
        const date=new Date(data.date);
        return date.getMonth()+1===m;
    }).reduce(function(total,data){
        return total+data.amount;
    },0);
}


//here i have made a function to find the total sales of a year
function yearSales(arr,y){
    return arr.filter(function(data){
        const date=new Date(data.date);
        return date.getFullYear()===y;
    }).reduce(function(total,data){
        return total+data.amount;
    },0);
}


//here i have made the function to find the aamount of lowest sales
function lowestSales(arr){
    let min=Infinity;
    arr.forEach(function(data){
        min=Math.max(min,data.amount);
    })
    return min;
}


//here i have made the function to find the amount of highest sales 
function highestSales(arr){
    let max=-Infinity;
    arr.forEach(function(data){
        max=Math.max(max,data.amount);
    })
    return max;
}


//here i have made the function to display sales data sorted by dates;
function sortByDates(arr){
    const sortedArray= arr.sort(function(a,b){
        return new Date(b.date)-new Date(a.date);
    });
    displayAll(sortByDates);
}





displayAll();
console.log(filterCategory(sales,"Clothing"));
console.log("The sales of the category is: "+categorySales(sales,"Clothing"));
console.log("The monthly sales is: "+ monthSales(sales,12));
console.log("The yearly sales is: "+yearSales(sales,2024));
console.log("The lowest sales is: "+lowestSales(sales));
console.log("The highest sales is: "+highestSales(sales));
console.log(sortByDates(sales));