var clicked = false;
$('#ser01').click(function(){
    if(!clicked){
        $('#serde01').show();
        clicked = true;
    }
    else{
        $('#serde01').hide();
        clicked = false;
    }
})

var clickedSecond = false;
$('#ser02').click(function(){
    if(!clickedSecond){
        $('#serde02').show();
        clickedSecond = true;
    }
    else{
        $('#serde02').hide();
        clickedSecond = false;
    }
});


//Getting Service Number From URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const service = urlParams.get('service')
let serviceNumber = parseInt(service);
if(serviceNumber==4){
    $('.plan').show();
    $('.others').hide();
}

const serviceNameArray = ['Web Development' ,'Iot Support','Embedded System Support','Project Planning'];
const imageNameArray = ['webdevelopment.png','iot.png','embedded.png','planning.png'];
const imageSecondArray = ['webdevelopment2.png','iot2.png','embedded2.png','planning2.png'];
const serviceDetails = ['Baraka Techsol offers best website design service towards it’s clients.We are client oriented. We focus on our client requirements to fulfill the optimal level of satisfaction. ',

'The Internet of Things (IoT) refers to the networks of devices and objects that communicate with other devices in the same network via connections to data centers.While there is plenty of overlap among general technology, cloud computing, and the IoT, pure-play IoT companies are relatively rare',


'Our embedded engineers can help you test, validate, and debug your hardware prototype as well as prepare your embedded product for the transition to software engineering and manufacturing.',

'We help organization and students to make better planning about embedded system or other academic projects. If you need any help to make a plan about your project, we are here to help.'
];

const retrievalDetails = ['Baraka Techsol is the Ultimate Web Design and Development Company Bangladesh to ensure creative technology worldwide with top-notch customer satisfaction.',

'The IoT device contains a wireless communication module based on Zigbee/LoRa/4G/NB-IoT technology.We can provide customized services.',

'We design embedded software that enables sensors to track motion activities, monitor bodily and physical processes, as well as collect all this information and store it in the cloud.',

'We provide necessary information, tools and resourses to execute ant project plan. We suggest corresponding parts, sensors, tools to prepare a qualitiful project.']

const infrastructureList = {0:['Quick Support','Excellent UI-UX','Focus On Results','Satisfiction Guarantee'],
1:['Embedded Security Solutions','Data visualization','Web UI HTML5, WebGL','Mobile UI: Android','Native desktop GUI'],
2:['Embedded Security Solutions','Data visualization','Web UI HTML5, WebGL','Mobile UI: Android','Native desktop GUI'],
3:['Unlimited Guideline','Step by Step Clarification','Provide Necessary Tools']
};
const serviceID = [1,2,3,4];

const question1 =['What technologies do we use for web development?',

];
const ans1 = ['Laravel,HTML, CSS, Bootstrap, Tailwind, React, Vue, jQuery, MySql, Ajax etc']

$('#serviceTitle').text(serviceNameArray[serviceNumber-1]);
$('#secondaryServicetitle').text(serviceNameArray[serviceNumber-1]);
$('#secondaryServicetitle').attr("href", "service1.html?service="+serviceNumber);

$('#firstImage').attr("src", "images/"+imageNameArray[serviceNumber-1]);
$('#secondImage').attr("src", "images/"+imageSecondArray[serviceNumber-1]);
$('#infrastructure').text(serviceDetails[serviceNumber-1])

let listItems = infrastructureList[serviceNumber-1];
$("#infrastructureList").empty();
listItems.forEach(element => {
    $("#infrastructureList").append('<li>'+ element+ '</li>');
    
});

$('#retrievalDetails').text(retrievalDetails[serviceNumber-1])
serviceID.forEach(element => {
    if(element!=serviceNumber){
        $('.third').append('<a href="service1.html?service='+element+'"><div class="col-md-4 col-lg-4 col-xl-4 "><div class="service"><img src="images/'+imageNameArray[element-1]+'" alt=""><h4>'+serviceNameArray[element-1]+'</h4></div></div></a>')
    }
    
});
