// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function checkIfDate(dateString) {
    return !isNaN(Date.parse(dateString));
}
function checkIfNumber(numberString){
    return !isNaN(parseInt(numberString));
}

function checkData(course, ag, submissions) {
    //first lets check if AssignmentGroup belong to the CourseInfo
    if (course.id != ag.course_id) {
        throw new Error("AssignmentGroup courde id doesn't match CourseInfo id");
    }
    //second lets check if all asigments in assimentsGroup are correct
    for (as of ag.assignments) {
        if (as.points_possible <= 0 || !checkIfNumber(as.points_possible)) {
            throw new Error(`Possible points in assigment ID=${as.id} \`${as.name}\` is not correct or NaN. Current value \`${as.points_possible}\``);
        }
        if (!checkIfDate(as.due_at)) {
            throw new Error(`Due date in assigment ID=${as.id} \`${as.name}\` is not correct. Current value \`${as.due_at}\``);
        }
    }
    //thirdly lets check if student submitted assigments NOT from the course
    for (let i=0;i<submissions.length;i++){
        if (!ag.assignments.find(it => it.id == submissions[i].assignment_id)){
            throw new Error(`Student ID=${submissions[i].learner_id} submitted an assigment with the wrong ID=${submissions[i].assignment_id}`);
        }
    }

}

function getLearnerData(course, ag, submissions) {
   
    try {
        checkData(course, ag,submissions);
    } catch (error) {
        console.error(error.message)
        return null;
    }  
    //checks done, move on to organising data
    let result = [];
    const learnersArray = [...new Set(submissions.map(it => it.learner_id))];
    console.log(learnersArray);



    return result;
    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];


}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
