// validating sesion available for userAgent
var data = {
        UserPoolId : userPoolId, 
        ClientId : clientId 
		};
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
    var cognitoUser = userPool.getCurrentUser();
	
    if (cognitoUser != null) {
		UserName = cognitoUser.username;
		EmailUser = 
		cognitoUser.getSession(function(err, session) {
			  if (err) {
               alert(err);
           //     return;
		   
            }
			else 
			{
				alert("Ya has iniciado sesion como " + CognitoLocal_Username);
				document.getElementById("mensaje19").innerHTML = "PRRRROBA";
				location.href= "./index.html";
			}
			});
        
	}

	

