// Task 1: Create a Function to Calculate Average Sales
function calculateAverageSales(salesAmount) { 
    if (salesAmount.length === 0) return 0;
    var totalSales = salesAmount.reduce((acc, curr) => acc + curr, 0);
    return totalSales / salesAmount.length;
}

// Task 2: Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales) { 
    if (averageSales > 10000) return "Excellent"; // Sales amounts above 10,000
    else if (averageSales >= 7000) return "Good"; // Sales amounts between 7,000 and 10,000
    else if (averageSales >= 4000) return "Satisfactory"; // Sales amounts between 4,000 and 7,000
    else return "Needs Improvement";  // Sales amounts under 4,000
}

// Task 3: Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers(salesreps) {
    if (salesreps.length ===0) return {topPerformer: null, bottomPerformer: null };

    // Utilize reduce to find top and bottom performers
    return salesreps.reduce((result, individual) => {
       
       // Used to see if an individual is the top performer
        if (result.topPerformer === null || individual.totalSales > result.topPerformer.totalSales) {
            result.topPerformer = individual;
        } 

        // Used to see if an individual is the bottom performer
        if (result.bottomPerformer === null || individual.totalSales < result.bottomPerformer.totalSales) {
            result.bottomPerformer = individual;
        }
return result;
    },{ topPerformer: null, bottomPerformer: null });
}

// Task 4: Combine Functions to Generate a Performance Report

function generatePerformanceReport(salesRecords) {

    // Individual reports
    var salesReports = salesRecords.map(record => {
        var averageSales = calculateAverageSales(record.salesFigures)
        var performanceRating = determinePerformanceRating(averageSales);
return {
    name: record.name,
    averageSales: averageSales,
    performanceRating: performanceRating
 };
});
    // Find top and bottom performers
    var topBottomPerformers = findTopAndBottomPerformers(
        salesRecords.map(record => ({
            name: record.name,
            totalSales: record.salesFigures.reduce((acc, curr) => acc + curr, 0),
        }))
    );

    // Format the report
    return {
        individualReports: salesReports,
        topPerformer: topBottomPerformers.topPerformer ? topBottomPerformers.topPerformer.name : 'N/A',
        bottomPerformer: topBottomPerformers.bottomPerformer ? topBottomPerformers.bottomPerformer.name : 'N/A'
    };
}

// Task 5: Test Your Functions with Sample Data
const salesData = [
    { name: 'Alice', salesFigures: [12000, 15000, 13000] }, // Excellent
    { name: 'Bob', salesFigures: [7000, 6000, 7500] }, // Satisfactory
    { name: 'Charlie', salesFigures: [3000, 4000, 3500] }, // Needs Improvement
    { name: 'Diana', salesFigures: [9000, 8500, 9200] }, // Good
];

// Testing the generatePerformanceReport function with sample data
console.log(generatePerformanceReport(salesData)); 

//Results: Bottom Performer - Charlie, Top Performer - Alice



