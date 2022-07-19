const courses = [
    {
        "title": "Embedded System Design (Beginner)",
        "dept_id":1,
        "image":"emdCourse1.png",
        "duration": 36,
        "lectures": 15,
        "skill_level": "Beginner",
        "price":"15,000",
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident velit quasi porro consequatur eaque ipsa fuga sed reprehenderit beatae quidem quisquam, aliquid molestias et doloremque ipsam vitae sit, sint laboriosam maiores. Iure ut expedita tenetur suscipit eveniet? Unde esse iusto eaque, amet nesciunt vel cupiditate soluta quidem. Numquam, sit"

    },
    {
        "title": "Advanced Embedded System Design (Advanced)",
        "dept_id":1,
        "image":"adEmdCource2.png",
        "duration": 40,
        "lectures": 25,
        "skill_level": "Advanced",
        "price":"25,000",
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident velit quasi porro consequatur eaque ipsa fuga sed reprehenderit beatae quidem quisquam, aliquid molestias et doloremque ipsam vitae sit, sint laboriosam maiores. Iure ut expedita tenetur suscipit eveniet? Unde esse iusto eaque, amet nesciunt vel cupiditate soluta quidem. Numquam, sit"
   
    },
    {
        "title": "Responsive Web Design (Beginner)",
        "dept_id":2,
        "image":"webCoursce3.png",
        "duration": 40,
        "lectures": 25,
        "skill_level": "Beginner",
        "price":"15,000",
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident velit quasi porro consequatur eaque ipsa fuga sed reprehenderit beatae quidem quisquam, aliquid molestias et doloremque ipsam vitae sit, sint laboriosam maiores. Iure ut expedita tenetur suscipit eveniet? Unde esse iusto eaque, amet nesciunt vel cupiditate soluta quidem. Numquam, sit"
   
    },
    {
        "title": "Advanced Web Development (Comming Soon)",
        "dept_id":2,
        "image":"awdCourse4.png",
        "duration": 40,
        "lectures": 25,
        "skill_level": "Advanced",
        "price":"(TBD)",
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident velit quasi porro consequatur eaque ipsa fuga sed reprehenderit beatae quidem quisquam, aliquid molestias et doloremque ipsam vitae sit, sint laboriosam maiores. Iure ut expedita tenetur suscipit eveniet? Unde esse iusto eaque, amet nesciunt vel cupiditate soluta quidem. Numquam, sit"
   
    }
];



//Getting Department Number From URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const department = urlParams.get('dept')
let deptNumber = parseInt(department);


const departmentNAmes = ['Embedded System Design','Web Development'];
$('.mainTitle').text(departmentNAmes[deptNumber-1]);
const webCourses = courses.filter(item =>item.dept_id>1);
const embeddedCourses = courses.filter(item =>item.dept_id<2);
if(deptNumber==1){
   
    $('#firstImage').attr("src", "images/"+embeddedCourses[0].image);
    $('#secondImage').attr("src", "images/"+embeddedCourses[1].image);

    $('.firstTitle').text(embeddedCourses[0].title);
    $('.secondTitle').text(embeddedCourses[1].title);
 

    $('.firstPrice').text(embeddedCourses[0].price);
    $('.secondPrice').text(embeddedCourses[1].price);

    $('#duration').text(embeddedCourses[0].duration +' Hours');
    $('#secondDuration').text(embeddedCourses[1].duration +' Hours');

    $('#lectures').text(embeddedCourses[0].lectures);
    $('#secondLectures').text(embeddedCourses[1].lectures);

    $('#firstLink').attr("href", "cource_details.html?course=1");
    $('#secondLink').attr("href", "cource_details.html?course=2");

}
else{
    $('#firstImage').attr("src", "images/"+webCourses[0].image);
    $('#secondImage').attr("src", "images/"+webCourses[1].image);

    $('.firstTitle').text(webCourses[0].title);
    $('.secondTitle').text(webCourses[1].title);
 

    $('.firstPrice').text(webCourses[0].price);
    $('.secondPrice').text(webCourses[1].price);

    $('#duration').text(webCourses[0].duration +' Hours');
    $('#secondDuration').text(webCourses[1].duration +' Hours');

    $('#lectures').text(webCourses[0].lectures);
    $('#secondLectures').text(webCourses[1].lectures);

    $('#firstLink').attr("href", "cource_details.html?course=3");
    $('#secondLink').attr("href", "cource_details.html?course=4");

}



