$('#firstButton').click(function(){
    $('#firstButton').css("background-color", "rgb(21, 21, 85)");
    $('#secondButton').css("background-color", "#0ca59d");
    $('#overview').show();
    $('#curriculum').hide();
});

$('#secondButton').click(function(){
    $('#firstButton').css("background-color", "#0ca59d");
    $('#secondButton').css("background-color", "rgb(21, 21, 85)");
    $('#overview').hide();
    $('#curriculum').show();
});


//Getting Course Number From URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const course = urlParams.get('course')
let courseNumber = parseInt(course);
console.log(courseNumber);




const courses = [
    {
        "title": "Embedded System Design (Biggner)",
        "id":1,
        "image":"emdCourse1.png",
        "duration": 36,
        "lectures": 15,
        "skill_level": "Beginner",
        "price":"15,000",
        "about": "Embedded systems design is the process where hardware and firmware designers come together to build embedded systems from scratch. This involves PCB design, where the necessary components are connected to build functional circuits. To bring the electronics to life, the firmware is coded and then programmed into the microcontroller. ",

        "description" : "This course is focused on giving you real world coding experience and hands on project work with ARM based Microcontrollers. You will learn how to implement software configuration management and develop embedded software applications.The course concludes with a project where you will create your own build system and firmware that can manipulate memory.",

        "certification": "After completing the course students will earn a certificate and will become proficient in C, Embedded C, Microcontrollers, Arduino, ESP32 etc ",

        "outcomes": [
            'Learn how to implement software configuration management',
            'Develop embedded software applications',
            'Build system and firmware that can manipulate memory',
            'Build automation devices',
            'Innovate new designs and products at home',
            'How to make design trade-offs between hardware and software',
            'How to communicate with your created device to the Internet',
            ' UX and UI design considerations and methods for embedded devices and systems',
            'Rapid prototyping for embedded devices to explore interface and system designs'
        ],
        "highlight": [
            'Embedded Software and Hardware Architecture',
            'Understanding embedded architectures ',
            'Embedded System Design',
            'Arduino UNO, Arduino NANO',
            'ESP 32, Micro Python',
            ' Develop  exciting firmware'

        ],
        "prerequisites":[
            'Basic knowledge of PCs, MS Windows, internet and online proficiency',
            'Basic knowledge of English (reading/writing/speaking)',
            'Familiarity with coding (C/C++)',
            'Willingness to buy necessary components (like sensors, actuators etc)'
        ],
        "software":
        [
            'Arduino IDE',
            'Platform IO',
            'Thonny Python',
            'VS Code'
        ],
        "module":[
            "Introduction C-Programs with ARM Core Microcontrollers",
            "Introduction to Microcontrollers",
            "Basic Functionalities & Interfacing of Arduino",
            "Arduino Programs",
            "Debugging embedded software on an Arduino.",
            "Introduction to IoT",
            "ESP 32",
            "Blyink with ESP32",
            "Bluetooth Communication with ESP 32",
            "Final Project"

        ]


    },
    {
        "title": "Advanced Embedded System Design (Advanced)",
        "id":2,
        "image":"adEmdCource2.png",
        "duration": 40,
        "lectures": 25,
        "skill_level": "Advanced",
        "price":"25,000",
        "about": "The Real-Time Embedded Systems specialization. It is an advanced course that will be taking you from a beginning practitioner, to a more advanced real-time system analyst and designer.  Knowledge and experience gained on hard to master topics such as predictable response services, when to allocate requirements to hardware or software, as well as mission critical design will enhance your engineering talent.",

        "description": "By doing  this course, you can consider yourself an intermediate to more advanced real-time system practitioner.  This knowledge is invaluable for medical, aerospace, transportation, energy, digital entertainment, telecommunications, and other exciting embedded career options.",

        "certification": "After completing the course students will earn a certificate and will become master in , Microcontrollers ,Embedded Systems Specialization, Raspberry PI, Python ",

        "outcomes": [
            'Learn The Real-Time Embedded Systems specialization ',
           'Advanced real-time system analyst and designer',
           'Predictable response services',
           'Experience building a simple, but real, system project with real-time challenges',
           'You will consider yourself an intermediate to more advanced real-time system practitioner',
           'Hands-on practice and assessment of your learning progress',
           'Put theory into practice and how to evaluate design options and make optimal choices',
           'See real-time challenges with your eyes, to debug interactively, and build a simple at-home detection, tracking and synchronization system.'


        ],
        "highlight": [
            'Embedded Software and Hardware Architecture',
            'Understanding embedded architectures ',
            'Embedded System Design',
            'Raspberry PI',
            'Linux Command',
            'ARM M-Series microprocessors',
            'Python'

        ],
        "prerequisites":[
            'Good knowledge of Microcontrollers',
            'Basic knowledge of English (reading/writing/speaking)',
            'Good Understanding in  coding (C/C++)',
            'Basic Understanding in Python',
            'Basic understanding Embedded Software and Hardware Architecture'

        ],
        "software":
        [
            'Arduino IDE',
            'Platform IO',
            'Thonny Python',
            'VS Code',
          
        ],
        "module":[
            "Exploration of RT Challenges and Concepts",
            "Real-time systems and scheduling",
            "Utility curves used for analysis of real-time systems ",
            "Rate Monotonic Scheduling Policy and its Least Upper Bound Condition",
            "IoT Project using Raspberry PI",
            "Full Home Automation",
            "Overview of Real-time Hardware Architectures and Software Stacks"
            

        ]
   
    },
    {
        "title": "Responsive Web Design (Biggner)",
        "id":3,
        "image":"webCoursce3.png",
        "duration": 40,
        "lectures": 25,
        "skill_level": "Beginner",
        "price":"15,000",
        "about": "In this course, you will learn how to apply concepts from interaction design and human-computer interaction in order to design and build an interactive, professional-looking website. You will learn how to make your web page designs adapt to different screen sizes using responsive grid layouts. You will learn how to add navigation and other design elements, and you will learn how to separate data and display using JavaScript objects and templates. You’ll also learn about jQuery plugins and basic Word Press Theme Customization.",

        "description": "In this course, you will learn how to apply concepts from interaction design and human-computer interaction in order to design and build an interactive, professional-looking website. You will learn how to make your web page designs adapt to different screen sizes using responsive grid layouts. You will learn how to add navigation and other design elements, and you will learn how to separate data and display using JavaScript objects and templates. You’ll also learn about jQuery plugins and basic Word Press Theme Customization.",

        "certification": "After completing the course students will become a certified web designers and can earn through freelancing. They will become proficient in HTML 5, CSS 3, JQuery, JavaScript, Bootstrap, and WordPress. ",

        "outcomes": [
            'Create HTML layout',
           'Create a sign in and sign up a page with a navigation bar',
           'Make Multipage website',
           'Make PSD to Responsive Design',
           'Understand and be able to apply media queries and breakpoints',
           'Add responsive jQuery plugins such as sliding carousels and social share buttons',
           'Create Landing Page',
           'Create E-commerce website',
           'Full Theme customization',
           'Build a responsive website from scratch or by using Bootstrap',
           'Create HTML layout',
           'Make Multipage website',
           'Create an E-commerce website with a premium Wp theme',
           'Javascript Programming',
           'Responsive Design with CSS'


        ],
        "highlight": [
            'HTML 5, CSS 3, JQuery, JavaScript, Bootstrap, WordPress',
            'Students will receive language training appropriate for Freelance markets places and international client communication',
            'Responsive (mobile friendly) Design',
            'Landing pages Design',
            'Students will be able to create HTML email templates',
            'The student will have working experience in all major freelance marketplaces',
            'Effective branding as a freelancer',
            'Creating an effective 100% complete profile on Freelance marketplaces',
            'How to communicate with the client',
            'How to bid and win jobs',
            'How to manage projects and receive high ratings',
            

        ],
        "prerequisites":[
            'Basic knowledge of PCs, MS Windows, internet and online proficiency',
            'Basic knowledge of English (reading/writing/speaking)',
            'Familiarity with coding (for HTML/ CSS etc.)',
            

        ],
        "software":
        [
            'Notepad',
            'Sublime Text',
            'VS Code',
            'Photoshop',
          
        ],
        "module":[
            "Introduction of Website",
          'Introduction with HTML',
          'Creating web layout using HTML & CSS',
          'Single page website concept',
          'Sign in & Sign up page with navbar',
          'Responsive Page using media query',
          'CSS3 effects & implementation',
          'Multipage website creation',
          'Introduction with Bootstrap & responsive web design',
          'Responsive single page website creation',
          'One page responsive design with navbar & carousel',
          'Adding Bootstrap JavaScript components',
          'PSD to Responsive Website Creation (Using Html, CSS & Bootstrap)',
          'Introduction with JavaScript (Syntax, Variable, Expression & Condition)',
          'Implementing JavaScript on Website',
          'jQuery Effects & Uses',
          'jQuery Plugins Integration in Website',
          'Introduction with WordPress & Installation',
          'Creating Landing Page using Paid Theme',
          'Full Theme Customization',
          'Form Creation & Integration Using Mail Chimp',
          'Post Sharing Method',
          'How To Create A eCommerce Website',
          'eCommerce Website With Premium Theme',
          
            

        ]
   
    },
    {
        "title": "Advanced Web Development (Comming Soon)",
        "id":4,
        "image":"awdCourse4.png",
        "duration": 40,
        "lectures": 25,
        "skill_level": "Advanced",
        "price":"(TBD)",
        "about": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident velit quasi porro consequatur eaque ipsa fuga sed reprehenderit beatae quidem quisquam, aliquid molestias et doloremque ipsam vitae sit, sint laboriosam maiores. Iure ut expedita tenetur suscipit eveniet? Unde esse iusto eaque, amet nesciunt vel cupiditate soluta quidem. Numquam, sit"
    }
]

$('#firstImage').attr("src", "images/"+courses[courseNumber-1].image);
$('#secondImage').attr("src", "images/"+courses[courseNumber-1].image);
$('#title').text(courses[courseNumber-1].title);
$('#subtitle').text(courses[courseNumber-1].title);
$('#mainTitle').text(courses[courseNumber-1].title);
$('#about').text(courses[courseNumber-1].about);
$('#duration').text(courses[courseNumber-1].duration +' Hours');
$('#lectures').text(courses[courseNumber-1].lectures);
$('#skill_level').text(courses[courseNumber-1].skill_level);
$('#price').text(courses[courseNumber-1].price);
$('#price2nd').text(courses[courseNumber-1].price);
$('#course_description').text(courses[courseNumber-1].description);
$('#certification').text(courses[courseNumber-1].certification);

const outcomes  = courses[courseNumber-1].outcomes;
$("#learning_outcome").empty();
outcomes.forEach(element => {
    $("#learning_outcome").append('<li>'+ element+'</li>');
    
});
const highlight  = courses[courseNumber-1].highlight;
$("#highlight").empty();
highlight.forEach(element => {
    $("#highlight").append('<li>'+ element+'</li>');
    
});


const prerequisites  = courses[courseNumber-1].prerequisites;
$("#prerequisites").empty();
prerequisites.forEach(element => {
    $("#prerequisites").append('<li>'+ element+'</li>');
    
});

const software  = courses[courseNumber-1].software;
$("#software").empty();
software.forEach(element => {
    $("#software").append('<li>'+ element+'</li>');
    
});

const module  = courses[courseNumber-1].module;
$("#module").empty();
module.forEach(element => {
    $("#module").append('<li>'+ element+'</li>');
    
});

