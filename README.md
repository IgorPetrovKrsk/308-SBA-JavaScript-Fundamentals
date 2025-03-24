A simple JavaScript application is used to process data about student assignments.

Application work is divided into several steps
1) Checking if input data is correct. The ID of AssignmentGroup and CourseInfo are the same. Then check if all the data inside the object are correct. That includes checking for correct date formats, integer formats  and logical errors such as the score cannot be higher than maximum points.
2) Deleting irrelevant data, such as assignments that are not due yet.
3) Processing the data to match the desired output format.
4) Calculating the average result of the student.
5) Deleting unnecessary dates.
6) Output.

What could you have done differently during the planning stages of your project to make the execution easier?   

I would draw the existing sets of data, the required format of data, and visualize the connections between the data.


Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
-----

What would you add to, or change about your application if given more time?

I would check for more errors in input data. 
Would get rid of some data manipulation, for example,e deleting the submissions that are not due is unnecessary, the processes of the submissions can start from the first assignment that is due today (since the array is sorted by submission date descending the process can start not from the first element of the array, but from the first element that is due and ignore all the previous that are not due yet.)
Would create new variables for code readability e.g. const currentAssisgnmentID = localSubmissions[i].assignment_id
