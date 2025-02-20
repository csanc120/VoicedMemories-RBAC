import { AuthenticationResultType, AuthFlowType, ChallengeNameType } from "@aws-sdk/client-cognito-identity-provider";
//NOTE: Constants now moved into .env file.

export interface LoginResponse {
    type:string, 
    message?:string, 
    tokens?: AuthenticationResultType, 
    validationKeys?: {
        challengeName: ChallengeNameType | undefined, 
        challengeParameters: Record<string,string> | undefined, 
        authSession: string | undefined
    }
}

//Used by trpc (if needed)
export interface trpcLoginResponse {
    type:string, 
    validationKeys?: {
        challengeName: ChallengeNameType | undefined, 
        challengeParameters: Record<string,string> | undefined, 
        authSession: string | undefined
    }, 
    tokens?: AuthenticationResultType
}