//global variables 
var url_api = "https://en5ivdozsj.execute-api.us-east-1.amazonaws.com/test2/login";

function validate_credentials()
{   
	var username_dom= document.getElementById("username").value;
	var pass_dom = document.getElementById("pass").value;
	
	var authenticationData = {
        Username : username_dom,
        Password : pass_dom,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    var poolData = {
        UserPoolId : 'us-east-1_BZ3m73NOR', // Your user pool id here
        ClientId : '47k578kd4rk80o8esfj0dtelp8' // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
        Username : 'admin',
        Pool : userPool
    };
    
	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
 
 
 
	var xhttp = new XMLHttpRequest();
		
 
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accessToken = result.getAccessToken().getJwtToken();
			var idToken = result.idToken.jwtToken;
			xhttp.open("POST", url_api, true);
			xhttp.setRequestHeader("Authorization",idToken);
			xhttp.send();
        },
 
        onFailure: function(err) {
			alert(err);
			return false;
        },
        
        
    });
	
}
