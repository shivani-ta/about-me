function square()
{
        var x = document.getElementById("x1").value;
        document.getElementById("result").innerHTML = x*x;
        event.preventDefault()
}


  function getQuote(){
    var quotes = ['Change the world by being yourself. - Amy Poehler',
                     'Never regret anything that made you smile. - Mark Twain', 
                     'Everything you can imagine is real. - Pablo Picasso.',
                     'So many books, so little time. - Frank Zappa'
                    ];
    var  quote = Math.floor(Math.random() * quotes.length);
    document.querySelector('#quote').innerHTML = quotes[quote];
}

function storeContact(){
  name = document.getElementById("nameInput").value
  email= document.getElementById("emailInput").value
  name.length&&email.length>0?alert(name+" Thankyou for submitting"):alert("invalid entry");
}


function ajax(){
 
}
