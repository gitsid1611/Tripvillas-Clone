
import {navbar, svg, getSign_upDiv,getLogin_Div, log_cancel ,sign_up_cancel ,log_inst ,signup_inst ,login_email ,login_num,sign} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

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


let sliderData = [
    {place:"Goa" , type:"Vacation Rentals", image:"https://media.istockphoto.com/photos/india-goa-palolem-beach-picture-id535168027?k=20&m=535168027&s=612x612&w=0&h=L4IxMIBa6jpWytr_L9eKFwCz5Iqehlgvpmnxz1JMuC0="},
    {place: "Galle",type:"Vacation Rentals", image:"https://media.istockphoto.com/photos/sri-lanka-galle-fort-meeran-jumma-masjid-picture-id820812048?k=20&m=820812048&s=612x612&w=0&h=nVk88HQYT0X7S89L1jqpu7t7NWwdMoYbXiPyqlI4v1o="},
    {place:"Phuket",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/phiphi-island-krabi-province-thailand-picture-id526355851?k=20&m=526355851&s=612x612&w=0&h=zJeT7EvresWeYlI8vYKQkwETVDjFP3rlI3Qd1Slem1I="},
    {place:"Kandy",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/sri-dalada-maligawa-or-the-temple-of-the-sacred-tooth-relic-kandy-sri-picture-id1155021690?k=20&m=1155021690&s=612x612&w=0&h=gPjcx4wkiQ0_X1DW2Z_MPLbz4YEO6eWbmMQQaKRe-eA="},
    {place:"Koh Samui",type:"Vacation Rentals",image}
]