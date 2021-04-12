var images=["WhatsApp Image 2021-03-01 at 10.46.59 AM.jpeg","WhatsApp Image 2021-03-01 at 10.59.41 AM.jpeg","WhatsApp Image 2021-03-01 at 11.01.11 AM.jpeg","WhatsApp image 2021-03-01 at 11.02.28 AM.jpeg"];




  

var familynane=["Nafeesa(my-sister)","Adil(me)","shaik-nazeer-ahemed(my-dad)","Safiya(my-mom)"];

  







i=0;
function next()
  {
    document.getElementById("image").src=images[i];
    document.getElementById("numberts").innerHTML=familynane[i];
    i++;
  if(i == 4)
    {
      i=0;
    }
  }
