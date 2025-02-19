
import {AuthenticationResultType, AuthFlowType, CognitoIdentityProviderClient, 
        CognitoIdentityProviderClientConfig, 
        InitiateAuthCommand, 
        InitiateAuthCommandInput, 
        InitiateAuthCommandOutput,
        RespondToAuthChallengeCommand,
        RespondToAuthChallengeCommandInput}
        from "@aws-sdk/client-cognito-identity-provider"
import { SERVER_REGION, AUTH_FLOW, CLIENT_ID, APP_CLIENT_SECRET} from "../Constants/CognitoConsts";



const clientConfigOpts:CognitoIdentityProviderClientConfig = {
    region: SERVER_REGION, 
};

const client = new CognitoIdentityProviderClient(clientConfigOpts);

export async function loginUser(userName:string, password:string){
    const SECRET_HASH = generateSecretHash(userName);
    let authCommandInput:InitiateAuthCommandInput = {
        AuthFlow: AUTH_FLOW,
        ClientId: CLIENT_ID, 
        AuthParameters: {
            USERNAME: userName, 
            PASSWORD: password, 
            SECRET_HASH: SECRET_HASH
        }
    };

    let response,authResult
    try{
        response = client.send(new InitiateAuthCommand(authCommandInput));
        authResult = (await response).AuthenticationResult;
    }catch(exception){
        console.log("The user could not be authenticated!")
        return {loginError: "Username and/or password was incorrect."};
    }

    //If the authResult exits, return the JWT's to the TRPC caller
    if(authResult){
        console.log("User has been validated");
        return {userTokens: authResult};
    }

    //Else the user is valid and needs to update their information to do a successful validation 
    const challengeParameters =  (await response).ChallengeParameters;
    const challengeName = (await response).ChallengeName;
    const authSession = (await response).Session;
    console.log(challengeParameters);
    if(challengeParameters && challengeName){

        let authChallenge:RespondToAuthChallengeCommandInput = {
            ChallengeName: challengeName, 
            ClientId: CLIENT_ID, 
            Session: authSession, 
            ChallengeResponses: {
                NEW_PASSWORD: password, 
                USERNAME: userName, 
                SECRET_HASH: SECRET_HASH,
                "userAttributes.family_name": "[LAST_NAME]", 
                "userAttributes.given_name": "[GIVEN_NAME]",
            }
        }
       const s =  client.send(new RespondToAuthChallengeCommand(authChallenge))
       console.log((await s).AuthenticationResult)
    }
}


//TODO: 
function newUserSignUp(session:string,newPassword:string,firstName:string, familyName:string){

}


function generateSecretHash(userName:string){
    let crypto = require('crypto');
    const concatString = userName + CLIENT_ID;
    const hmac256 = crypto.createHmac('sha256', APP_CLIENT_SECRET);
    hmac256.update(concatString);
    //Convert hash value to binary then a base64 string for HMAC256
    return hmac256.digest().toString("base64");
}