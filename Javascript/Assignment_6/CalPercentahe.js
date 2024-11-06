function Check(Total, Marks) {
    let totalMarks = parseFloat(Total);
    let obtainedMarks = parseFloat(Marks);
    let percentage = (obtainedMarks / totalMarks) * 100;
    console.log(`Percentage: ${percentage.toFixed(1)}%`);
}
Check(1000, 745)