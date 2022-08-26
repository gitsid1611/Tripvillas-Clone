import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

let sliderData = [
    {place:"Goa" , type:"Vacation Rentals", image:"https://media.istockphoto.com/photos/india-goa-palolem-beach-picture-id535168027?k=20&m=535168027&s=612x612&w=0&h=L4IxMIBa6jpWytr_L9eKFwCz5Iqehlgvpmnxz1JMuC0="},
    {place: "Galle",type:"Vacation Rentals", image:"https://media.istockphoto.com/photos/sri-lanka-galle-fort-meeran-jumma-masjid-picture-id820812048?k=20&m=820812048&s=612x612&w=0&h=nVk88HQYT0X7S89L1jqpu7t7NWwdMoYbXiPyqlI4v1o="},
    {place:"Phuket",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/phiphi-island-krabi-province-thailand-picture-id526355851?k=20&m=526355851&s=612x612&w=0&h=zJeT7EvresWeYlI8vYKQkwETVDjFP3rlI3Qd1Slem1I="},
    {place:"Kandy",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/sri-dalada-maligawa-or-the-temple-of-the-sacred-tooth-relic-kandy-sri-picture-id1155021690?k=20&m=1155021690&s=612x612&w=0&h=gPjcx4wkiQ0_X1DW2Z_MPLbz4YEO6eWbmMQQaKRe-eA="},
    {place:"Koh Samui",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/angthong-national-marine-park-koh-samui-suratthani-thailand-picture-id940824162?k=20&m=940824162&s=612x612&w=0&h=Ujo0jInic2e6HXO1TImqzUvwSX-1yq0DfLKwQ7vuBUY="},
    {place:"Lonavala",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/pune-mumbai-expressway-picture-id1257999507?k=20&m=1257999507&s=612x612&w=0&h=JfLCxoX7Yx1qwIs7mdagfqctf-LI94LVBbfNw3a9zwE="},
    {place:"Kerala",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-town-picture-id1246366598?k=20&m=1246366598&s=612x612&w=0&h=XvOvw2Sg4fj-JLQwS18yMofUP9eMeWkQH1V6RcXqnKw="},
    {place:"Pattaya",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/pattaya-picture-id689879464?k=20&m=689879464&s=612x612&w=0&h=uJke_wgpEfPTITtueTVvn14W6m8qZYP8iFfYbHO3CuQ="},
    {place:"Himachal Pradesh",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/mountain-landscape-with-green-grass-meadows-scenic-camping-himalayas-picture-id1284679139?k=20&m=1284679139&s=612x612&w=0&h=NK7gt1o91oOyaSFR8G_A48B38mHz9_OaqCwrdDRMwx8="},
    {place:"Alibag",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/beautiful-sand-pattern-created-by-receding-sea-waves-at-virgin-beach-picture-id1295509800?k=20&m=1295509800&s=612x612&w=0&h=YROMcbHlXwnz-PPfSSjVdHayuqzrpiAaXYDCFItZZqA="}
]


let data=0

for(let i=0;i<5;i++)
{
    document.getElementById(`img${i}`).src =sliderData[i].image
    document.getElementById(`place${i}`).innerText=sliderData[i].place
  
}

document.getElementById("forward").addEventListener("click",forward)
function forward(){
    data++

    let newnumber=data
    

    for(let i=0;i<5;i++)
    {
        console.log(data)
        if(data>sliderData.length-1)
        {
            data = 0
        } 
        document.getElementById(`img${i}`).src =sliderData[i+data].image
        document.getElementById(`place${i}`).innerText=sliderData[i+data].place
        data++
    }
   data=newnumber
}
