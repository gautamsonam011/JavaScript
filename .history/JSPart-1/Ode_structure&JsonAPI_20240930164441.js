// Object de-structure and JSON API introduction 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sonam"
}

// course.courseInstructor

const {courseInstructor} = course;

console.log(courseInstructor);