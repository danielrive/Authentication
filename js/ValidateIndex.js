// validating sesion available for userAgent
var data = {
        UserPoolId : userPoolId, 
        ClientId : clientId 
		};
		
var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
var cognitoUser = userPool.getCurrentUser();
var msg_user;
	
    if (cognitoUser != null) {
			cognitoUser.getSession(function(err, session) {
			if (err) {
               alert(err);
           //     return;
		   
            }
			else 
			{
				
				UserName = cognitoUser.username;
				EmailUser = cognitoUser.signInUserSession.idToken.payload.email;
				msg_user = "Username: " + UserName;
				msg_email = "Email: " + EmailUser;
				document.getElementById("mensaje19").innerHTML = msg_user;
				document.getElementById("mensaje20").innerHTML = msg_email;
			}
			});
        
	}
	else
	{
		alert("Debe iniciar Sesion para poder ver esta página");
		location.href= "./login.html";
	}

	

