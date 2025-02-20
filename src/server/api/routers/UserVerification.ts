import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { loginUser } from "../utils/CognitoServices";
import { TRPCError } from "@trpc/server";


export const userVerifierRouter = createTRPCRouter({
    checkLogin: publicProcedure
        .input(z.object(
            { userName: z.string(), 
              password: z.string()
            }
        ))
        .mutation(async ({input, ctx}) => {
            const {userName, password} = input;
            const authResponse = await loginUser(userName, password);
            const type = authResponse.type;

            if(type == "error"){
                 throw new TRPCError(
                    {code:"UNAUTHORIZED", 
                     message:"The username and/or password was incorrect!"
                    });
            }else if(type == "validation"){
                return {type: "validation", userChallenge:authResponse.validationKeys};
            }
            //TODO: Tokens should be sent in HTTPOnly Cookie
            return {type: "success", tokens:authResponse.tokens};
        }
        )
})
