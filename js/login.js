//global variables 
var url_api = "https://q19as99vr7.execute-api.us-east-1.amazonaws.com/test/login";

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
        UserPoolId : userPoolId, // Your user pool id here
        ClientId : clientId // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
        Username : username_dom,
        Pool : userPool
    };
    
	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
 
 
 
	var xhttp = new XMLHttpRequest();
		
 
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
        alert("inicio de sesion exitosa");
	    location.href= "./index.html";

        },
 
        onFailure: function(err) {
			alert("Login Fail");
			alert(err);
			return false;
        },
        
        
    });
	
}
