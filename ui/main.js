console.log('Loaded!');
var counter=0;
var button=document.getElementById("counter");
button.onclick=function(){
    
    var request=new XMLHttpRequest();
    request.onreadyStateChange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200){
                var counter=request.responseText
                 var span=document.getElementById('count');
    span.innerHTML=counter.toString();
            }
        }
    };
    //make the request
    
    request.open("GET","http://shikharsingh267.imad.hasura-app.io/counter",true);
    request.send(null);
};