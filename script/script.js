

// firstname validation coding start here------------------------------>>>>

//validation for empty element//////////////start////////////////
var fname_input_elem = document.getElementById('firstname');
function fname_empty_val()
{
     var fname_tick = document.getElementById('fname-tick');
     var fname_data = document.getElementById('firstname').value;
     var fname_elem = document.getElementById('firstname');
     fname_data == "" ? fname_elem.style.borderColor = 'red' : fname_elem.style.borderColor = '#ccc';
     fname_data == "" ? fname_elem.setAttribute('class','animate__animated animate__headShake animate__infinite input') : fname_elem.setAttribute('class','input');
     fname_data == "" ? fname_elem.setAttribute('placeholder','empty field') : fname_elem.setAttribute('placeholder','');
     fname_data == "" ? fname_tick.setAttribute('class','tick-green') : fname_tick.setAttribute('class','fa fa-check tick-green');
}


fname_input_elem.onclick =
function fname_stop_val()
{
     var fname_elem = document.getElementById('firstname');
     fname_elem.setAttribute('class','input');
     fname_elem.setAttribute('placeholder','');
}

fname_input_elem.oninput =
function fname_fl_cap()
{
     var fname_tick = document.getElementById('tick-green');
     var fname_data = document.getElementById('firstname').value;
     var fname_elem = document.getElementById('firstname');
     var fname_val_msg = document.getElementById('fname-msg');
     var fname_tick = document.getElementById('fname-tick');
     var upper_case = /[A-Z]/g;
     var fname_flatter = fname_data.charAt(0);
     fname_flatter.match(upper_case) ? fname_val_msg.innerHTML = "" : fname_val_msg.innerHTML = "* please start with capital latter *";
     fname_flatter.match(upper_case) ? fname_val_msg.innerHTML = "" : fname_elem.value = "";
     fname_data=="" ? fname_tick.setAttribute('class','tick-green') : fname_data;

}


//validation for empty element//////////////end////////////////

//firstname validation coding end here------------------------------<<<<






















// lastname validation coding start here------------------------------>>>>

//validation for empty element//////////////start////////////////


function lname_empty_val()
{
     var lname_tick = document.getElementById('lname-tick');
     var lname_data = document.getElementById('lastname').value;
     var lname_elem = document.getElementById('lastname');
     lname_data=="" ? lname_elem.style.borderColor = "red" : lname_elem.style.borderColor = "#ccc";
     lname_data=="" ? lname_elem.setAttribute('class','animate__animated animate__headShake animate__infinite input') : lname_elem.setAttribute('class','input');
     lname_data=="" ? lname_elem.setAttribute('placeholder','empty') : lname_elem.setAttribute('placeholder','');
     lname_data=="" ? lname_tick.setAttribute('class','tick-green') : lname_tick.setAttribute('class','fa fa-check tick-green');

}

function lname_stop_val()
{
     var lname_elem = document.getElementById('lastname');
     lname_elem.setAttribute('placeholder','');
     lname_elem.style.borderColor = "#ccc";
     lname_elem.setAttribute('class','input');
}


function lname_ll_cap()
{
     var lname_tick = document.getElementById('lname-tick');
     var lname_data = document.getElementById('lastname').value;
     var lname_elem = document.getElementById('lastname');
     var lname_msg = document.getElementById('lname-msg');
     var lname_flatter = lname_data.charAt(0);
     var upper_case = /[A-Z]/g;
     lname_flatter.match(upper_case) ? lname_elem : lname_elem.value = "";
     lname_flatter.match(upper_case) ? lname_msg.innerHTML= "" : lname_msg.innerHTML = "* please start width capital latter *";
     lname_data== "" ? lname_tick.setAttribute('class','tick-green') : lname_data;
}
//validation for empty element//////////////end////////////////

//lastname validation coding end here------------------------------<<<<





















// mobile number validation coding start here----------->>>>>>>>>start>>>>>>>>>>

function mobile_empty_val()
{
     var mobile_data = document.getElementById('mobile').value;
     var mobile_elem = document.getElementById('mobile');
     var mobile_msg = document.getElementById('mobile-msg');
     var check_dg = mobile_data=="" ? mobile_elem.style.borderColor = "red" : mobile_data;
     mobile_data=="" ? mobile_elem.setAttribute('placeholder','empty') : mobile_data;
     mobile_data=="" ? mobile_elem.setAttribute('class','animate__animated animate__headShake animate__infinite input') : mobile_data;
      var check_ind = check_dg.length==10 ? check_dg : mobile_elem.style.borderColor = "red";
      check_dg.length<10 ? mobile_msg.innerHTML = "* enter your 10 digit number *" : check_dg;
      var check_fdg = check_ind.charAt(0);
      var check_num = /[9||8||9]/g;
      var mobile_tick = document.getElementById('mobile-tick');
      check_fdg.match(check_num) ? mobile_tick.setAttribute('class','fa fa-check tick-green') : mobile_tick.setAttribute('class','tick-green');
}


function mobile_stop_val()
{
     var mobile_elem = document.getElementById('mobile');
     mobile_elem.style.borderColor = '#ccc';
     mobile_elem.setAttribute('placeholder','');
     mobile_elem.setAttribute('class','input');
}


function mobile_val()
{
     var mobile_data = document.getElementById('mobile').value;
     var mobile_elem = document.getElementById('mobile');
     var mobile_msg = document.getElementById('mobile-msg');
     var mobile_data_first = mobile_data.charAt(0);
     var india_num = /[9||8||7]/g;
     var mobile_number = /[0-9]/g;
     mobile_data_first.match(india_num) ? mobile_msg.innerHTML = "" : mobile_msg.innerHTML = "* indian number start 9.8,7 *";
     mobile_data.match(mobile_number) ? mobile_data : mobile_elem.value = "";
     mobile_data.length >10 ? mobile_msg.innerHTML = "only 10 digit": mobile_data;


}
// mobiel number validation coding end here................<<<<<<<<<end<<<<<<<<<<<
























// re mobile number validation coding start here .............../////////
function re_mobile_empty_val()
{
     var mobile_data = document.getElementById('mobile').value;
     var re_mobile_data = document.getElementById('re-mobile').value;
     var re_mobile_elem = document.getElementById('re-mobile');
     var re_mobile_tick = document.getElementById('re-mobile-tick');
     var re_mobile_msg = document.getElementById('re-mobile-msg');
     re_mobile_data=="" ? re_mobile_elem.style.borderColor = "red" : re_mobile_elem.style.borderColor = "#ccc";
     re_mobile_data=="" ? re_mobile_elem.setAttribute('placeholder','empty') : re_mobile_data;
     re_mobile_data=="" ? re_mobile_elem.setAttribute('class','animate__animated animate__headShake animate__infinite input') : re_mobile_elem.setAttribute('class','input');

     re_mobile_data==mobile_data&&re_mobile_data!="" ? re_mobile_tick.setAttribute('class','fa fa-check tick-green') :  re_mobile_tick.setAttribute('class','');
     re_mobile_data==mobile_data ? re_mobile_msg.innerHTML ="" : re_mobile_msg.innerHTML = "* not match *";
     re_mobile_data==mobile_data ? re_mobile_data : re_mobile_elem.setAttribute('class','animate__animated animate__headShake input');
     re_mobile_data==mobile_data&&re_mobile_data!="" ? re_mobile_elem.style.borderColor = "#ccc" : re_mobile_elem.style.borderColor = "red";


}

function re_mobile_stop_val()
{
     var re_mobile_elem = document.getElementById('re-mobile');
     re_mobile_elem.setAttribute('placeholder','');
     re_mobile_elem.style.borderColor = "#ccc";
     re_mobile_elem.setAttribute('class','input');
}


function re_mobile_val()
{
     var re_mobile_data = document.getElementById('re-mobile').value;
     var re_mobile_elem = document.getElementById('re-mobile');
     var re_mobile_msg = document.getElementById('re-mobile-msg');
     var mobile_number = /[0-9]/g;
     re_mobile_data.match(mobile_number) ? re_mobile_data : re_mobile_elem.value = "";
     re_mobile_data.match(mobile_number) ? re_mobile_data : re_mobile_msg.innerHTML = "* re enter you mobile number *";
}
//re mobile number validation coding end here...............///////////















// gmail valication coding start////////////////////////////////start////////////////////////////


function gmail_empty_val()
{
     var gmail_data = document.getElementById('gmail').value;
     var gmail_elem = document.getElementById('gmail');
     var gmail_tick = document.getElementById('gmail-tick');
     gmail_data=="" ? gmail_elem.style.borderColor = "red" : gmail_elem.style.borderColor = "#ccc";
     gmail_data=="" ? gmail_elem.setAttribute('placeholder','empty') : gmail_elem.setAttribute('placeholder','');
     gmail_data=="" ? gmail_elem.setAttribute('class','animate__animated animate__headShake animate__infinite input') : gmail_elem.setAttribute('class','input');
     gmail_data.match("@gmail.com") || gmail_data.match("@yahoomail.com") ? gmail_tick.setAttribute('class','fa fa-check tick-green') : gmail_tick.setAttribute('class','tick-green');
     gmail_data.match("@gmail.com") || gmail_data.match("@yahoomail.com") ? gmail_elem.style.borderColor = "#ccc" : gmail_elem.style.borderColor = "red";
}


function gmail_stop_val()
{
     var gmail_elem = document.getElementById('gmail');
     gmail_elem.style.borderColor = "#ccc";
     gmail_elem.setAttribute('placeholder','');
     gmail_elem.setAttribute('class','input');
}


function gmail_val()
{
     var gmail_data = document.getElementById('gmail').value;
     var gmail_elem = document.getElementById('gmail');
     var gmail_msg = document.getElementById('gmail-msg');
     var gmail_choose = document.getElementById('gmail_choose');
     var yahoo_choose = document.getElementById('yahoo_choose');
     gmail_data.match('@') ? gmail_choose.innerHTML = "gmail.com" : gmail_choose.innerHTML = "";
     gmail_data.match('@') ? yahoo_choose.innerHTML = "yahoomail.com" : yahoo_choose.innerHTML = "";
     gmail_data.match('gmail.com') || gmail_data.match('yahoomail.com') ? gmail_choose.innerHTML = "" : gmail_data;
     gmail_data.match('gmail.com') || gmail_data.match('yahoomail.com') ? yahoo_choose.innerHTML = "" : gmail_data;
     
}


function autoFill_gmail()
{
     var gmail_choose = document.getElementById('gmail_choose');
     var yahoo_choose = document.getElementById('yahoo_choose');
     var gmail_data = document.getElementById('gmail').value;
     var gmail_elem = document.getElementById('gmail');
     gmail_elem.value = gmail_data+"gmail.com";
     gmail_choose.innerHTML = "";
     yahoo_choose.innerHTML = "";

}


function autoFill_yahoo()
{
     var gmail_choose = document.getElementById('gmail_choose');
     var yahoo_choose = document.getElementById('yahoo_choose');
     var gmail_data = document.getElementById('gmail').value;
     var gmail_elem = document.getElementById('gmail');
     gmail_elem.value = gmail_data+"yahoomail.com";
     gmail_choose.innerHTML = "";
     yahoo_choose.innerHTML = ""
}

// gmail validation coding end ////////////////////////////end//////////////////////////////////






// username coding start here//////////////////////////start////////////////////

function username_auto_fill()
{
     var username_tick = document.getElementById('username-tick');
     var username_data = document.getElementById('username').value;
     var username_elem = document.getElementById('username');
     var fname_data = document.getElementById('firstname').value;
     var lname_data = document.getElementById('lastname').value;
     var username_data = fname_data+lname_data;
     username_elem.value = username_data;
     username_data==fname_data+lname_data ? username_tick.setAttribute('class','fa fa-check tick-green') : username_tick.setAttribute('class','tick-green');
     username_data=="" ? username_tick.setAttribute('class','tick-green') : username_tick.setAttribute('class','fa fa-check tick-green');

     

}

// username coding end here//////////////////////////end//////////////////////
















// create password coding start here ////////////////////////////start///////////////////

function password_empty_val()
{
     var pass_data = document.getElementById('password').value;
     var pass_elem = document.getElementById('password');
     pass_data=="" ? pass_elem.style.borderColor = "red" : pass_elem.style.borderColor = "#ccc";
     pass_data=="" ? pass_elem.setAttribute('placeholder','empty') : pass_elem.setAttribute('placeholder','');
     pass_data=="" ? pass_elem.setAttribute('class','animate__animated animate__headShake animate__infinite input') : pass_elem.setAttribute('class','input');

}

function password_stop_val()
{
     var pass_data = document.getElementById('password').value;
     var pass_elem = document.getElementById('password');
     pass_elem.style.borderColor = "#ccc";
     pass_elem.setAttribute('placeholder','');
     pass_elem.setAttribute('class','input');

     document.querySelector('.capital-msg').style.display = 'inline';
     document.querySelector('.small-msg').style.display = 'inline';
     document.querySelector('.number-msg').style.display = 'inline';
     document.querySelector('.digit-msg').style.display = 'inline';
     document.querySelector('.spa-msg').style.display = 'inline';
}




function password_val()
{
     var pass_data = document.getElementById('password').value;
     var pass_elem = document.getElementById('password');
     var pass_msg = document.getElementById('password-msg');
     var pass_tick = document.getElementById('password-tick');
     var pass_val_num = /[0-9]/g;
     var pass_val_cap = /[A-Z]/g;
     var pass_val_small = /[a-z]/g;
     var pass_val_spa = /[`||~||!||@||#||$||%||^||&||*||(||)||_||-||=||+||?]/g;
     var capital_msg = document.querySelector('.capital-msg');
     var small_msg = document.querySelector('.small-msg');
     var number_msg = document.querySelector('.number-msg');
     var digit_msg = document.querySelector('.digit-msg');
     var spa_msg = document.querySelector('.spa-msg');


     pass_data.match(pass_val_cap) ? capital_msg.style.display = "none" : capital_msg.style.display = "inline";
     pass_data.match(pass_val_small) ? small_msg.style.display = "none" : small_msg.style.display = "inline";
     pass_data.match(pass_val_num) ? number_msg.style.display = "none" : number_msg.style.display = "inline";
     pass_data.match(pass_val_spa) ? spa_msg.style.display = "none" : spa_msg.style.display = "inline";
     pass_data.length>8 ? digit_msg.style.display = "none" : digit_msg.style.display = "inline";


     var check_for_cap =  pass_data.match(pass_val_num) ? pass_data : pass_tick.setAttribute('class','tick-green');
     var check_for_small = check_for_cap.match(pass_val_cap) ? check_for_cap : pass_tick.setAttribute('class','tick-green');
     var check_for_number = check_for_small.match(pass_val_small) ? check_for_small : pass_tick.setAttribute('class','tick-green');
     var check_for_spa = check_for_number.match(pass_val_num) ? check_for_number : pass_tick.setAttribute('class','tick-green');
     var check_length = check_for_spa.match(pass_val_spa) ? check_for_spa : pass_tick.setAttribute('class','tick-green');
     check_length.length>8 ? pass_tick.setAttribute('class','fa fa-check tick-green') : pass_tick.setAttribute('class','tick-green');

}




// password show and close validation coding start hare//////////////
function eye_btn_val()
{
     var pass_data = document.getElementById('password').value;
     var eye_btn = document.getElementById('eye-btn');
     pass_data=="" ? eye_btn.style.display = "none" : eye_btn.style.display = "inline";
}





function pass_show_hide()
{
     var pass_data = document.getElementById('password');
     var eye_btn = document.getElementById('eye-btn');
     var pass_type = document.getElementById('password').getAttribute('type');
     pass_type=="password" ? pass_data.setAttribute('type','text') : pass_data.setAttribute('type','password');
     pass_type=="password" ? eye_btn.setAttribute('class','fa fa-eye') : eye_btn.setAttribute('class','fa fa-eye-slash');

}
// password show and close calidationn coding end here/////////////







// create password coding start here //////////////////////////end//////////////////////



















// opening signup button coding start//////////////////////////////start//////////////


function signup_btn_open()
{
     var signup_btn = document.getElementById('signup-btn');
     var fname = document.getElementById('firstname').value;
     var lname = document.getElementById('lastname').value;
     var mobile = document.getElementById('mobile').value;
     var rmobile = document.getElementById('re-mobile').value;
     var gmail = document.getElementById('gmail').value;
     var pass = document.getElementById('password').value;

     fname=="" || lname=="" || mobile=="" || rmobile=="" || pass=="" || gmail==""  ? signup_btn.style.backgroundColor = '#ccc' : signup_btn.style.backgroundColor = 'green';
     fname=="" || lname=="" || mobile=="" || rmobile=="" || pass=="" || gmail==""  ? signup_btn.style.cursor = 'not-allowed' : signup_btn.style.cursor = 'pointer';
     fname=="" || lname=="" || mobile=="" || rmobile=="" || pass=="" || gmail==""  ? signup_btn.disabled = true : signup_btn.disabled = false;

}

// opening signup button coding end/////////////////////////////end/////////////////










// final validation for form submit start coding ///////////////////////start/////////////


function final_val()
{
     var sub = document.getElementById('signup-btn');
     var mobile = document.getElementById('mobile').value;
     var re_mobile = document.getElementById('re-mobile').value;
     var gmail = document.getElementById('gmail').value;
     var pass = document.getElementById('password').value;

     
     var mob_f_match = /[9||8||7]/g;
     var pass_cap = /[A-Z]/g;
     var pass_sma = /[a-z]/g;
     var pass_num = /[0-9]/g;
     var pass_spa = /[`||~||!||@||#||$||%||^||&||*||(||)||_||-||=||+||?]/g;
     var mobile_f = mobile.charAt(0);


     var check_for_f_latter = mobile.length==10 ? mobile : sub.setAttribute('type','button');
     var first_digi = check_for_f_latter.charAt(0);
     var re_mobile_val = first_digi.match(mob_f_match) ? re_mobile : sub.setAttribute('type','button');
     var check_for_gmail = re_mobile_val.match(mobile) ? gmail : sub.setAttribute('type','button');
     var check_for_pass = check_for_gmail.match('@gmail.com'||'@yahoomail.com') ? pass : sub.setAttribute('type','button');
     var check_pass_length = check_for_pass.match(pass_cap&&pass_sma&&pass_num&&pass_spa) ? check_for_pass : sub.setAttribute('type','button');
     check_pass_length.length<8 ? sub.setAttribute('type','button') : sub.setAttribute('type','submit');






     




}


// final validation for form sumbit end coding ////////////////////////end//////////////


















