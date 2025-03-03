import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getUserDetails, loginUser, resetPassword } from "../utils/CognitoServices";
import { TRPCError } from "@trpc/server";

export const userVerifierRouter = createTRPCRouter({
    checkLogin: publicProcedure
        .input(z.object(
            {
                userName: z.string(),
                password: z.string()
            }
        ))
        .mutation(async ({ input, ctx }) => {
            const { userName, password } = input;
            const authResponse = await loginUser(userName, password);
            const type = authResponse.type;
            //User authentication failed
            if (type == "error") {
                throw new TRPCError(
                    {
                        code: "UNAUTHORIZED",
                        message: "The username and/or password was incorrect!"
                    });
                //User must reset their password before continuing 
            } else if (type == "validation") {
                return { type: "validation", validationKeys: authResponse.validationKeys };
            }
            //User has been authorized to log into the application
            return { type: "success", tokens: authResponse.tokens };
        }
        ),
    getUserInformation: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const authResponse = await getUserDetails(input);
            if (authResponse.type == "error") {
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: authResponse.message
                })
            }
            return authResponse;
        }
        ),
    resetPassword: publicProcedure
        .input(z.object(
            {
                newPassword: z.string(),
                previousPassword: z.string(),
                accessToken: z.string()
            }
        ))
        .mutation(async ({ input, ctx }) => {
            const { previousPassword, newPassword, accessToken } = input;
            const response = await resetPassword(newPassword, previousPassword, accessToken);
            if (response.type == "error") {
                throw new TRPCError({
                    code: "UNAUTHORIZED",
                    message: response.message
                })
            }
            return response;
        })
})
