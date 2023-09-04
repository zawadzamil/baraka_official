const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const work = urlParams.get('work')
let workNumber = parseInt(work);


const workArray = ['Prayer Time Display', 'Smart Prayer Alarm','Joystick Mouse','Wifi Data Logger'];

const firstImageArray = ['project1.png','project2.png','project3.png','project4.png'];

const secondImageArray = ['prd2nd.png','spa2nd.png','jm2nd.png','wdl2nd.png'];

const thirdImageArray = ['prd3rd.png','spa3rd.png','jm3rd.png','wdl3rd.png'];
const workIDs = [1,2,3,4];
const overview = ['Prayer Time Display is a website that shows the prayer schedules for every city in the world. It is a single-page application mainly designed for large-screen devices. The main purpose of this application is, that it will act as a live prayer schedule display on an android tv or etc and it will play adhan during the prayer time.',

'Prayer time alarm is an electronic device made with ESP32, OLED, Mp3 module etc. This is an Internet of Things (IOT) and Embedded System product that can be used worldwide. The main function of this device is, it will automatically generate daily prayer schedule (according to user’s local time zone and location) and play Adhan as alarm. ',

'As an alternative to tracking computer`s cursor using a mouse or a trackpad, We have made this same application with the help of a joystick. ',
'WiFi data loggers feature native WiFi connectivity that allows them to interface with standard WiFi routers. Once connected, WiFi data loggers may communicate with other devices on the same network, or in some cases with cloud-based servers if the network provides Internet access. '];

const overview2 = ['In this application, the user can register as an admin and can create his own schedule. For example, an admin from a mosque can create a schedule for his own mosque. Also, users can choose different methods for schedule time calculation. Also, it will point in the qibla direction.',
'The schedule is dynamic – i.e it will change by itself according to current season (ex: Summer, Winter). Complete azan for all prayers. Prayer times for most cities around the world. The device required WiFi connectivity. User can communicate with it via a Bluetooth Application from their smart phones.',
'The joystick can move the cursor in any direction (x and Y axis) and also performs click function with the built-in joystick`s switch. There are some advantages of this mouse are mentioned bellow',
'As example, let there is a device that measures temperature and humidity of the environment. Now, with the concept of WiFi Data Logger, we can actually visualize the data. We can have a chart, statistics, comparison, and other operations over the data for a certain period of time. '];

const features = [
    {
        1:['Prayer Schedule Generate',
        'Auto Location Catch',
        'Different Method Select Option',
        'Secured Login and Registration System',
        'Schedule by Locatio or pre added Mosque',
        'Adhan as Prayer alarm',
        'Qibla direction' ]
    },
    {
        2:['Prayer Schedule Generate',
        'Controlled by Smartphones',
        'Adhan as Prayer alarm',
        'Less Power Consuming',
        'Can be connected to home wifi or mobile hotspot',
     ]
    },
    {
        3:['Can be used using one figure only.',
        'Can be control without placing anywhere like normal mouse.',
        'Can be controlled using Leg.',
        'Can be used as an extra free look operator during gaming.',
        'And many more….',
     ]
    },

    {
        4:['Can measure tempereture in locations that have limited physical access',
        'Can measure tempereture in moving or rotating equipment',
        'Can measure tempereture in trucks and other commercial vehicles that come and go',
        'User can view data at web server',
        'Also generate excel sheet from data records for future investigations',
     ]
    },
    
]



$('#title').text(workArray[workNumber-1]);
$('#subtitle').text(workArray[workNumber-1]);
$('#mainTitle').text(workArray[workNumber-1]);
$('#firstImage').attr("src", "images/"+firstImageArray[workNumber-1]);
$('#secondImage').attr("src", "images/"+secondImageArray[workNumber-1]);
$('#thirdImage').attr("src", "images/"+thirdImageArray[workNumber-1]);

workIDs.forEach(element => {
    if(element!=workNumber){
        $('.othersRow').append('<a href="work_details.html?work='+element+'"> <div class="col-md-4 col-lg-4 col-xl-4"><div class="image"><img src="images/'+firstImageArray[element-1]+'" alt=""></div> <span>'+workArray[element-1]+'</span></div></a>'
        )};
    
});


$('#overview').text(overview[workNumber-1]);
$('#overview2').text(overview2[workNumber-1]);
console.log(features[workNumber-1][workNumber]);

const featuredList  = features[workNumber-1][workNumber];
$("#featuredList").empty();
featuredList.forEach(element => {
    $("#featuredList").append('<li>'+ element+'</li>');
    
});