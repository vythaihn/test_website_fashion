
var li = ['1166', '493', '1117', '1340', '1534', '825', '483', '1745', '127', '1071', '1501', '1690', '842', '1440', '1423', '1623', '1432', '1647', '1300', '120', '1329', '808', '1586', '246', '330', '397', '1490', '855', '497', '153', '1514', '454', '234', '1348', '1021', '1356', '1151', '396', '462', '1355', '1694', '678', '706', '1051', '1422', '1443', '1485', '292', '23', '91', '347', '1064', '125', '245', '1033', '980', '1730', '1399', '1379', '1548', '916', '643', '669', '411', '310', '104', '472', '1248', '294', '951', '1237', '978', '840', '625', '3', '129', '593', '1396', '316', '873', '228', '156', '321', '430', '1707', '511', '1400', '1027', '478', '1276', '894', '949', '1026', '1538', '860', '94', '1461', '1165', '1022', '482', '151', '1093', '629', '323', '891', '284', '132', '1370', '895', '378', '628', '997', '880', '82', '668', '367', '42', '1529', '564', '1655', '189', '248', '520', '683', '1020', '1452', '188', '179', '1108', '831', '1365', '293', '295', '660', '782', '71', '536', '1201', '350', '789', '147', '463', '1554', '322', '226', '1757', '305', '1521', '707', '1595', '823', '1002', '1153', '41', '1200', '1683', '1411', '596', '719', '1014', '139', '881', '1582', '496', '14', '30', '764', '1591', '1726', '1723', '508', '983', '979', '821', '345', '1228', '1326', '204', '342', '1742', '661', '1384', '1155', '1409', '708', '1012', '1544', '320', '632', '1204', '77', '1054', '914', '134', '833', '1720', '552', '207', '1088', '664', '588', '1517', '982', '1537', '1549', '1506', '822', '1601', '1486', '1640', '1405', '1532', '581', '247', '528', '942', '1383', '1075', '546', '605', '222', '1562', '1185', '1128', '27', '66', '1615', '494', '1732', '1352', '539', '1664', '1434', '1343', '1579', '1010', '641', '557', '1415', '1034', '998', '358', '780', '795', '1212', '971', '18', '995', '1325', '221', '1408', '1133', '60', '716', '1679', '148', '75', '58', '626', '1274', '1314', '824', '250', '702', '369'];
var count = 0;
let r, g, b;
let authPromise;
let database;
let rgbDiv;

let bodyElement;
let buttons = [];
let ready = false;
let dataSave;

var model5;
var model6;

var pic_name;

const model5_dir = "model5/"
const model6_dir = "model6/"




function pickColor() {
  r = floor(random(256));
  g = floor(random(256));
  b = floor(random(256));
  background(100, 100, 100);
  updateBodyBG();
}

function pickImage(picture) {
  //var pic = picture
  pic_name = picture//pic.toString();
  var file_name = pic_name.concat(".png")

  model5 = model5_dir.concat(file_name)
  model6 = model6_dir.concat(file_name)



  //new code
  var storage = firebase.storage();

  var storageRef = storage.ref();
  var tangRef_1 = storageRef.child(model5);
  var tangRef_2 = storageRef.child(model6);


  database = firebase.database();
  authPromise = firebase.auth().signInAnonymously();

  //createCanvas(256, 256).parent('#root');
  bodyElement = document.body;
  pickColor();

  let img;
  // First we sign in the user anonymously
  //firebase.auth().signInAnonymously().then(function() {
    // Once the sign in completed, we get the download URL of the image
  tangRef_1.getDownloadURL().then(function(url) {
    var img5 = document.getElementById("img5")
    img5.src = url;
    var img5 = select('#img5')
    //img5.mouseClicked(sendData)
    console.log("retrive!!!", url)
  }).catch(function(error) {
              // If anything goes wrong while getting the download URL, log the error
    console.error(error);
  });

  tangRef_2.getDownloadURL().then(function(url) {
    var img6 = document.getElementById("img6")
    img6.src = url;
    var img6 = select('#img6')
    //img6.mouseClicked(sendData)
    console.log("retrive!!!", url)
  }).catch(function(error) {
              // If anything goes wrong while getting the download URL, log the error
    console.error(error);
  });
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function doEverything() {
  //startButton.hide()
  select('#time').hide();
  select('#intro').hide();


  bodyElement = document.body;
  //ready = true;


  //showLoading();
  pickImage(li[count]);
  //setTimeout(hideLoading, 2500);

}

function doHide(){
  startButton.show();

  select('#all').hide();
  select('#time').show();
 //startButton.removeClass("disabled");
  //for (button of buttons) button.removeClass("disabled");
}
function next() {
  count = count + 1;
  console.log(count)
  pickImage(li[count]);
}
function setup() {
  select('#time').hide();

  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCPH_TvIxzyp3Yr8YJhjQ3FtdQQovCOREE",
    authDomain: "sketch2fashion.firebaseapp.com",
    databaseURL: "https://sketch2fashion.firebaseio.com",
    projectId: "sketch2fashion",
    storageBucket: "sketch2fashion.appspot.com",
    messagingSenderId: "688917954916",
    appId: "1:688917954916:web:dbfe30ce56da792066fa71",
    measurementId: "G-4F26EDTH1K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  select('#time').hide();
  select('#intro').hide();

  //firebase.analytics();
  
  select('#intro').show();
  startButton = createButton('start').parent('#root').class('green-ish');
  startButton.mouseClicked(next);


  //createCanvas(256, 256).parent('#vy');

  //randomly choose an image point to show the user
  //pickImage();
  //rgbDiv = createDiv().parent('#root');
  //bodyElement = document.body;

  //ready = true;
  //rgbDiv.html(`R:${r} G:${g} B:${b}`);

  //buttons.push(createButton('red-ish').parent('#root').class('red-ish'));
  //buttons.push(createButton('green-ish').parent('#root').class('green-ish'));
  //buttons.push(createButton('blue-ish').parent('#root').class('blue-ish'));
  //buttons.push(createButton('orange-ish').parent('#root').class('orange-ish'));
  //buttons.push(createButton('yellow-ish').parent('#root').class('yellow-ish'));
  //buttons.push(createButton('pink-ish').parent('#root').class('pink-ish'));
  //buttons.push(createButton('purple-ish').parent('#root').class('purple-ish'));
  //buttons.push(createButton('brown-ish').parent('#root').class('brown-ish'));
  //buttons.push(createButton('grey-ish').parent('#root').class('grey-ish'));



  // Commenting out the loading of data for the webpage running
  // console.log("Retreiving data... (this can take a minute or two)");
  // loadData().then(data => {
  //   dataSave = data;
  //   console.log("Recieved data. To analyze", data.length, "entries, run: ");
  //   console.log("showSample(dataSave, 'red-ish')");
  //   console.log("or analyzeData(dataSave, ['red-ish', 'blue-ish'])");
  //   console.log("To clean the data by label and hue use: ");
  //   console.log("let green_data = cleanData(dataSave, 'green-ish', 60, 180)");
  //   console.log("For any help, please see the documentation above each function in the code!");
  // });
}

console.log(firebase)

async function sendData() {
  if(!ready) return;
  clearTimeout(timeoutHandle);
  showLoading();
  // send this data to something?
  // send the data to firebase!
  let { user } = await authPromise;
  let colorDatabase = database.ref("new_cycle");

  // Make an object with data in it
  var data = {
    uid: user.uid,
    image: pic_name,
    model: this.elt.id,
    email: document.getElementById("textboxinput").value
  };
  console.log(document.getElementById("textboxinput").value)
  console.log(this);
  console.log("B")
  console.log(data);

  let color = colorDatabase.push(data, finished);
  console.log("Firebase generated key: " + color.key);

  //Pick new color
  /*
  var cards = $(".image");
  for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
  }
  */

  pickImage();

  // Reload the data for the page
  function finished(err) {
    if (err) {
      console.error("ooops, something went wrong.");
      console.error(err);
    } else {
      console.log('Data saved successfully');
      setTimeout(hideLoading, 2000);
    }
  }
  

}

function showLoading() {
  select('.loading').show();
  select('#all').hide();
  for (button of buttons) button.addClass("disabled");
  ready = false;
}

function hideLoading() {
  select('.loading').hide();
  select('#all').show();
  timeoutHandle = setTimeout("doHide()", 3000)
  //rgbDiv.html(`R:${r} G:${g} B:${b}`);
  //for (button of buttons) button.removeClass("disabled");
  setTimeout(function(){ ready = true;} , 600);
}

function updateBodyBG(){
  bodyElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1.0)`;
}
/*
function showLoading() {
  select('.loading').show();
  select('#all').hide();
  for (button of buttons) button.addClass("disabled");
  ready = false;
}

function hideLoading() {
  select('.loading').hide();
  select('#all').show();
  //rgbDiv.html(`R:${r} G:${g} B:${b}`);
  for (button of buttons) button.removeClass("disabled");
  setTimeout(function(){ ready = true;}, 300);
}

function updateBodyBG(){
  bodyElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1.0)`;
}
*/
