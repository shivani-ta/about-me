function getQuote(){
    var quotes = ['Change the world by being yourself. - Amy Poehler',
                     'Never regret anything that made you smile. - Mark Twain', 
                     'Everything you can imagine is real. - Pablo Picasso.',
                     'So many books, so little time. - Frank Zappa'
                    ];
    var  quote = Math.floor(Math.random() * quotes.length);
    document.querySelector('#quote').innerHTML = quotes[quote];
                }
