import {navbar, svg, getSign_upDiv,getLogin_Div, log_cancel ,sign_up_cancel ,log_inst ,signup_inst ,login_email ,login_num,sign} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar(),svg()

svg()   /////////////////// for sub_div od login & sign up
getSign_upDiv()  /////////////  for div of Sign-Up 
getLogin_Div()  //////////////  for div of Login
log_cancel()    //////////////  for cancel on login div

sign_up_cancel()   ///////////////  for cancel on signup div

log_inst()        //////////////// login instead from signup div

signup_inst()     /////////////////// for signup from login

login_email()    ////////////////////  login with email from login email

login_num()      /////////////////// login with number from login number  

sign()          ////////////////////  getting sign-up data