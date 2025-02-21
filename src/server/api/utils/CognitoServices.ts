
'use server'
import { env } from "~/env";
import {AuthenticationResultType, AuthFlowType, ChallengeName, ChallengeNameType, CognitoIdentityProviderClient, 
        CognitoIdentityProviderClientConfig, 
        GetUserCommand, 
        GetUserCommandInput, 
        InitiateAuthCommand, 
        InitiateAuthCommandInput, 
        RespondToAuthChallengeCommand,
        RespondToAuthChallengeCommandInput}
        from "@aws-sdk/client-cognito-identity-provider"

import { AuthResponse } from "../Constants/CognitoConsts";
const clientConfigOpts:CognitoIdentityProviderClientConfig = {
    region: env.SERVER_REGION, 
};

const client = new CognitoIdentityProviderClient(clientConfigOpts);

export async function loginUser(userName:string, password:string):Promise<AuthResponse>{
    const SECRET_HASH = generateSecretHash(userName);
    let authCommandInput:InitiateAuthCommandInput = {
        AuthFlow: env.AUTH_FLOW as AuthFlowType,
        ClientId: env.CLIENT_ID, 
        AuthParameters: {
            USERNAME: userName, 
            PASSWORD: password, 
            SECRET_HASH: SECRET_HASH
        }
    };
    
    let response,authResult
    try{
        response = await client.send(new InitiateAuthCommand(authCommandInput));
        authResult = response.AuthenticationResult;
    }catch(exception){
        console.log("The user could not be authenticated!");
        return {type: "error", message: "Username and/or password was incorrect."};
    }

    //If the authResult exits, return the JWT's to the TRPC router
    if(authResult){
        console.log("User has been validated");
        return {type:"success", tokens:authResult};
    }

    const challengeParameters = response.ChallengeParameters;
    
    const challengeName = response.ChallengeName;
    const authSession = response.Session;

    return {type:"validation", validationKeys:
        {challengeName:challengeName, 
         challengeParameters:challengeParameters, 
         authSession:authSession
    }};
    
}


//TODO: Implement password update for a user that had a temporary password
function newUserSignUp(session:string,newPassword:string,firstName:string, familyName:string, challengeParameters:ChallengeName
    ,challengeName:ChallengeNameType
){
    const SECRET_HASH = generateSecretHash(firstName);
    if(challengeParameters && challengeName){
        let authChallenge:RespondToAuthChallengeCommandInput = {
            ChallengeName: challengeName, 
            ClientId: env.CLIENT_ID, 
            Session: session, 
            ChallengeResponses: {
                NEW_PASSWORD: newPassword, 
                USERNAME: firstName, 
                SECRET_HASH: SECRET_HASH,
                "userAttributes.family_name": familyName, 
                "userAttributes.given_name": firstName,
            }
        }
       const s =  client.send(new RespondToAuthChallengeCommand(authChallenge))
    }

}

export async function getUserDetails(accessToken: string){
    const userCommandInput:GetUserCommandInput = {
        AccessToken: accessToken
    }
    let response, userAttributes;
    try{
        response = await client.send(new GetUserCommand(userCommandInput));
        userAttributes = response.UserAttributes;
    }catch(error){
        return {type:"error", message:"An error occurred when retrieving user information"};
    }
    
    //If firstName is incorrect, provide a filter for checking if a duplicate given_name exists
    const firstName = userAttributes?.find((attr) => attr.Name == "given_name")?.Value;
    const lastName = userAttributes?.find((attr) => attr.Name == "family_name")?.Value;
    
    console.log(userAttributes);
    return {firstName: firstName, lastName:lastName};

}

function generateSecretHash(userName:string){
    let crypto = require('crypto');
    const concatString = userName + env.CLIENT_ID;
    const hmac256 = crypto.createHmac('sha256', env.APP_CLIENT_SECRET);
    hmac256.update(concatString);
    //Convert hash value to binary then a base64 string for HMAC256
    return hmac256.digest().toString("base64");
}