var start = function() {
  console.log("start");
  var user = head("https://databox.me");
};

var head = function(url) {
  var request = new XMLHttpRequest();
  request.open('HEAD', url, true);
  request.withCredentials = true
  
  request.onload = function() {
    if (this.readyState == this.DONE) {
      if (this.status >= 200 && this.status < 400) {
        console.log(this.getAllResponseHeaders());
        return this.getResponseHeader('User');
      }else{
        console.log("server error");
      }
    }
  };
  
  request.onerror = function(){
    console.log("connection error");
  };
  
  request.send();
};