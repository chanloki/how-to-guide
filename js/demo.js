function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    testAPI();
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log into this app.';
  } else {
    document.getElementById('status').innerHTML = 'Please log into Facebook.';
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1853988021486932',
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.AppEvents.logPageView();

  // login
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function testAPI() {
  // show my information
  FB.api('/me', function(response) {
    console.log(response);
    document.getElementById('status').innerHTML = 'Hello, ' + response.name + '!';
  });
}

function publishPost() {
  // post to my news feed
  FB.api('/me/feed', 'POST', {message: 'Hello world 3!!'}, function (response) {
    console.log('publishPost');
    console.log(response);
  });
}
