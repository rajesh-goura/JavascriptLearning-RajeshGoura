const students = [
    { name: "Alice", scores: { math: 95, english: 88, science: 92 } },
    { name: "Bob", scores: { math: 78, english: 82, science: 85 } },
    { name: "Charlie", scores: { math: 85, english: 90, science: 87 } },
    { name: "Daisy", scores: { math: 65, english: 70, science: 72 } },
    { name: "Eve", scores: { math: 98, english: 94, science: 96 } },
  ];

  //Here i have made an function to calculate the totalmarks of a student which iterates through scores object and reduce it to a single sum
  function studentTotal(students){
    return Object.values(students.scores).reduce(function(total,values){return total+values});
  }
 

  //here i have made a function which calculates the percentage of a student by taking its studentTotalMarks then used toFixed method to roundup the value upto 2 digits after decimal
  function percentage(students){
    const subjectTotal=100;
    const NumberOfSubjects=Object.keys(students.scores).length;
    const TotalMarks=subjectTotal*NumberOfSubjects;
    return ((students.studentTotalMarks/TotalMarks)*100.).toFixed(2);
    
  }


  //here i have made a function to assign grades to each student based on its percentage
  function assignGrades(students){
    if(students.percentage>=90){
        return 'A';
    }else if(students.percentage>=80){
        return 'B';
    }else if(students.percentage>=70){
        return 'C';
    }else if(students.percentage>=60){
        return 'D';
    }else{
        return 'E';
    }
  }

//here i have itirated over each student and assigned its percentage and grades
  students.forEach(function(students){
    students.studentTotalMarks=studentTotal(students);
    students.percentage=percentage(students);
    students.grade=assignGrades(students);
});

    //here i have sorted the array based on their percentage (it is in descending order)
  students.sort(function(a,b){return b.percentage-a.percentage});

  //here i have made a function to display the students data
  function display(students){
    return "Name: "+students.name+" , "+"percentage: "+students.percentage+"% ,"+"Grade: "+students.grade;
  }

  console.log("Student Grades:");
  students.forEach(function (students){
    console.log(display(students));
  })

