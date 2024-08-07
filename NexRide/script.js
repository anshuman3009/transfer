const pickup=document.getElementById('from');
const drop=document.getElementById('to');

// Seaden form
const form1=document.getElementById('form1');
const username1=document.getElementById('fullname1');
const email1=document.getElementById('email1');
const phonenumber1=document.getElementById('number1');
const finalVal1 = document.getElementById("final-price-sedan");

const scriptURL = 'https://script.google.com/macros/s/AKfycbzb65LD3zFQFeKSST9Jk4_5o4fiRhiI4rp-owwiBNu8ymQFa0Z2SKtcUFF_Q5tkyHeV8w/exec'
            const formseaden = document.forms['submit-to-google-sheet1']
            
             const msgseaden=document.getElementById("msg")

             formseaden.addEventListener('submit', e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                  .then(response => {
                      msg.innerHTML='Message Sent Successfully.'
                      setTimeout(function(){
                          msg.innerHTML=''
                      },5000)
                      form.reset()
                  })
                  .catch(error => console.error('Error!', error.message))
                }) 

form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    const body_message = `Hi ${username1.value}, <br> This is from NexRide <br> Your cab booking is confirmed. <br> Your Pickup Point:${pickup.value} <br> Your Destination: ${drop.value}<br> Selected car: Seaden<br> Total Amount:₹${finalVal1.textContent}/-  <br> Happy Journey!!!!`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "himanshumittal227@gmail.com",
        Password : "AAFC1B654F09BA69A7FD514782A4B9315142",
        To : email1.value,
        From : "himanshumittal227@gmail.com",
        Subject : "Cab booking - regards",
        Body : body_message
    }).then(
    message => {alert('Booking Complete!✅\nThank you for choosing NexRide');
    window.location.replace('index.html');}
    );      

});

//SUV form
const form2=document.getElementById('form2');
const username2=document.getElementById('fullname2');
const email2=document.getElementById('email2');
const phonenumber2=document.getElementById('number2');
const finalVal2 = document.getElementById("final-price-suv");

const formsuv = document.forms['submit-to-google-sheet2']
            
const msgsuv=document.getElementById("msg")

formsuv.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
         msg.innerHTML='Message Sent Successfully.'
         setTimeout(function(){
             msg.innerHTML=''
         },5000)
         form.reset()
     })
     .catch(error => console.error('Error!', error.message))
   }) 


form2.addEventListener('submit',(e)=>{

    e.preventDefault();
    const body_message = `Hi ${username2.value}, <br> This is from NexRide <br> Your cab booking is confirmed. <br> Your Pickup Point:${pickup.value} <br> Your Destination: ${drop.value}<br> Selected car: SUV<br> Total Amount:₹${finalVal2.textContent}/-  <br> Happy Journey!!!!`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "himanshumittal227@gmail.com",
        Password : "AAFC1B654F09BA69A7FD514782A4B9315142",
        To : email2.value,
        From : "himanshumittal227@gmail.com",
        Subject : "Cab booking - regards",
        Body : body_message
    }).then(
    message => {alert('Booking Complete!✅\nThank you for choosing NexRide');
    window.location.replace('index.html');}
    );      

});
// 7 seater
const form3=document.getElementById('form3');
const username3=document.getElementById('fullname3');
const email3=document.getElementById('email3');
const phonenumber3=document.getElementById('number3');
const finalVal3 = document.getElementById("final-price-7seater");

const form7seater = document.forms['submit-to-google-sheet3']
            
const msg7seater=document.getElementById("msg")

form7seater.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
         msg.innerHTML='Message Sent Successfully.'
         setTimeout(function(){
             msg.innerHTML=''
         },5000)
         form.reset()
     })
     .catch(error => console.error('Error!', error.message))
   }) 


form3.addEventListener('submit',(e)=>{

    e.preventDefault();
    const body_message = `Hi ${username3.value}, <br> This is from NexRide <br> Your cab booking is confirmed. <br> Your Pickup Point:${pickup.value} <br> Your Destination: ${drop.value}<br> Selected car: 7 Seater<br> Total Amount:₹${finalVal3.textContent}/-  <br> Happy Journey!!!!`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "himanshumittal227@gmail.com",
        Password : "AAFC1B654F09BA69A7FD514782A4B9315142",
        To : email3.value,
        From : "himanshumittal227@gmail.com",
        Subject : "Cab booking - regards",
        Body : body_message
    }).then(
    message => {alert('Booking Complete!✅\nThank you for choosing NexRide');
    window.location.replace('index.html');}
    );      

});
// Micro
const form4=document.getElementById('form4');
const username4=document.getElementById('fullname4');
const email4=document.getElementById('email4');
const phonenumber4=document.getElementById('number4');
const finalVal4 = document.getElementById("final-price-mini");

const formmicro = document.forms['submit-to-google-sheet4']
            
const msgmicro=document.getElementById("msg")

formmicro.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
         msg.innerHTML='Message Sent Successfully.'
         setTimeout(function(){
             msg.innerHTML=''
         },5000)
         form.reset()
     })
     .catch(error => console.error('Error!', error.message))
   }) 


form4.addEventListener('submit',(e)=>{

    e.preventDefault();
    const body_message = `Hi ${username4.value}, <br> This is from NexRide <br> Your cab booking is confirmed. <br> Your Pickup Point:${pickup.value} <br> Your Destination: ${drop.value}<br> Selected car: Micro<br> Total Amount:₹${finalVal4.textContent}/-  <br> Happy Journey!!!!`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "himanshumittal227@gmail.com",
        Password : "AAFC1B654F09BA69A7FD514782A4B9315142",
        To : email4.value,
        From : "himanshumittal227@gmail.com",
        Subject : "Cab booking - regards",
        Body : body_message
    }).then(
    message => {alert('Booking Complete!✅\nThank you for choosing NexRide');
    window.location.replace('index.html');}
    );      

});
// Hatchback form
const form5=document.getElementById('form5');
const username5=document.getElementById('fullname5');
const email5=document.getElementById('email5');
const phonenumber5=document.getElementById('number5');
const finalVal5 = document.getElementById("final-price-hatchback");

const formhatchback = document.forms['submit-to-google-sheet5']
            
const msghatchback=document.getElementById("msg")

formhatchback.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
         msg.innerHTML='Message Sent Successfully.'
         setTimeout(function(){
             msg.innerHTML=''
         },5000)
         form.reset()
     })
     .catch(error => console.error('Error!', error.message))
   }) 


form5.addEventListener('submit',(e)=>{

    e.preventDefault();
    const body_message = `Hi ${username5.value}, <br> This is from NexRide <br> Your cab booking is confirmed. <br> Your Pickup Point:${pickup.value} <br> Your Destination: ${drop.value}<br> Selected car: Hatchback<br> Total Amount:₹${finalVal5.textContent}/-  <br> Happy Journey!!!!`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "himanshumittal227@gmail.com",
        Password : "AAFC1B654F09BA69A7FD514782A4B9315142",
        To : email5.value,
        From : "himanshumittal227@gmail.com",
        Subject : "Cab booking - regards",
        Body : body_message
    }).then(
    message => {alert('Booking Complete!✅\nThank you for choosing NexRide');
    window.location.replace('index.html');}
    );      

});

// Dijkstra algorithm
var getprice=1;
        const INF = 2147483647;
        class Graph {
            
            constructor(V){
                
                this.V = V;
                
                this.adj = new Array(V);
                for(let i = 0; i < V; i++){
                    this.adj[i] = new Array();
                }
            }

            addEdge(u, v, w)
            {
                this.adj[u].push([v, w]);
                this.adj[v].push([u, w]);
            }

            shortestPath(src,dest)
            {
                let pq = [];

                let dist = new Array(V).fill(INF);

                pq.push([0, src]);
                dist[src] = 0;

                while (pq.length > 0) {
                    
                    let u = pq[0][1];
                    pq.shift();

                    for(let i = 0; i < this.adj[u].length; i++){
                        
                        let v = this.adj[u][i][0];
                        let weight = this.adj[u][i][1];

                        if (dist[v] > dist[u] + weight) {
                
                            dist[v] = dist[u] + weight;
                            pq.push([dist[v], v]);
                            pq.sort((a, b) =>{
                                if(a[0] == b[0]) return a[1] - b[1];
                                return a[0] - b[0];
                            });
                        }
                    }
                }

                console.log("Vertex Distance from Source");
                let min;
                for (let i = 0; i < V; ++i){
                    if(i===dest){
                        min=dist[i];
                        break;
                    }
                }
                    
                // Price if you want to change the price here you'll change
                let sedan_price=7;
                let suv_price=8;
                let sevenseater_price=15;
                let miniseater_price=7;
                let hatchback_price=10;

                getprice = min;
                // console.log(getprice);
                // Minimum distance this is come from the djiskstra algorithm 
                // let minimum_distance=20;

                const sedan = sedan_price * getprice;
                const suv = suv_price * getprice;
                const sevenseater = sevenseater_price * getprice;
                const mini = miniseater_price * getprice;
                const hatchback = hatchback_price * getprice;

                const min_minute = document.querySelectorAll(".minimum-time");
                document.getElementById("final-price-sedan").innerHTML=sedan;
                document.getElementById("final-price-suv").innerHTML=suv;
                document.getElementById("final-price-7seater").innerHTML=sevenseater;
                document.getElementById("final-price-mini").innerHTML=mini;
                document.getElementById("final-price-hatchback").innerHTML=hatchback;
                
                //  result.textContent=min;
                // return min;
                min_minute.forEach((element,i) => {
                    element.innerHTML=min;
                    console.log(i);
                });
                console.log(min_minute.length);
            }
        }

        let V = 6;
        let g = new Graph(V);

        g.addEdge(0, 1, 5);//A to B-5
        g.addEdge(0, 2, 7);
        g.addEdge(1, 0, 5);
        g.addEdge(1, 3, 15);
        g.addEdge(1, 4, 20);
        g.addEdge(2, 3, 35);
        g.addEdge(2, 0, 7);
        g.addEdge(2, 3, 5);
        g.addEdge(3, 1, 15);
        g.addEdge(3, 2, 5);
        g.addEdge(3, 5, 20);
        g.addEdge(4, 2, 35);
        g.addEdge(4, 1, 20);
        g.addEdge(4, 5, 10);
        g.addEdge(5, 3, 20);
        g.addEdge(5, 4, 10);
        
        
       

        const pickval = document.getElementById("from");
        const dropval = document.getElementById("to");
        const pform = document.getElementById("form");

        pform.addEventListener('submit', (event) => {
            event.preventDefault(); 
            console.log("Pickup Location:", pickval.value);
            console.log("Drop Location:", dropval.value);
            
            getprice=g.shortestPath((pickval.value.charCodeAt(0))-65,(dropval.value.charCodeAt(0))-65);
            
            
        });