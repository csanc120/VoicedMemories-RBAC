import { CognitoIdentityProviderClient, InitiateAuthCommand, InitiateAuthCommandInput } from "@aws-sdk/client-cognito-identity-provider";
import { initTRPC, TRPCBuilder, TRPCError } from "@trpc/server";
import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const distributorRouter = createTRPCRouter({
    createPatient: publicProcedure
        .input(z.object(
            {
                email: z.string(),
                firstName: z.string(), 
                lastName: z.string(), 
                tempPassword: z.string()
            }
        ))
        .mutation( ({input,ctx}) => { 
            const {email, firstName, lastName, tempPassword} = input;
            console.log("Patient email has been received");
            return {message:"Patient has been created", email:email};
        }), 
    assignCaregiver: publicProcedure
        .input(z.object(
            {
                patientEmail: z.string(), 
                careGiverEmail: z.string()
            }
        ))
        .mutation( ({input, ctx}) =>{
            const {patientEmail, careGiverEmail} = input
            return {assigned: patientEmail + "to" + careGiverEmail};
        }), 
    createCaregiver: publicProcedure
        .input(z.object(
            {
                email: z.string(), 
                tempPassword: z.string(), 
                firstName: z.string(), 
                lastName: z.string()
            }
        ))
        .mutation( ({input, ctx}) => {
            const {email, tempPassword, firstName, lastName} = input
            if(email.indexOf('@')){
                return {success: "Caregiver created successfully"}
            }
            throw new TRPCError({
                message: "Failed to create the caregiver due to an internal error",
                code: "SERVICE_UNAVAILABLE"
            })
        }), 
    deletePatient: publicProcedure
        .input(z.object(
            {
                email: z.string()
            }
        ))
        .mutation( ({input, ctx}) => {
            const {email} = input
            return ({deleted: true, email: email});
        }),
    getPatientLicenses: publicProcedure
        .input(z.object(
            {
                distributorEmail: z.string(),
            }
        ))
        .query( async ({input, ctx}) => {
            const {distributorEmail} = input;
            const client = new CognitoIdentityProviderClient();
            const initInput:InitiateAuthCommandInput = {
                ClientId: distributorEmail,
                AuthFlow: "USER_PASSWORD_AUTH", 
            }
            const response = await client.send(new InitiateAuthCommand(initInput));
            return {success: true, message: response.ChallengeName, numLicenses: 10};
        }), 
    modifyLicenseAmount: publicProcedure
        .input(z.object(
            {
                distributorEmail: z.string(),
                modificationType: z.string(), 
                numLicenses: z.number()
            }
        ))
        .mutation( ({input, ctx}) => {
            const {distributorEmail, modificationType, numLicenses} = input;
            //ModificationType = "Add" or "Subtract from license amount"
            const newLicenses = numLicenses;
            const response = {success:true, numLicenses:newLicenses};
            if(modificationType == "Add"){
                response.numLicenses += 1;
            }else{
                response.numLicenses -= 1;
            }
            return {message:"You liceneses were modified successfully!", data: response};   
        }) 
})