import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const clientRouter = createTRPCRouter({
    //A procedure for receiving the clients cargivers from AWS
    getCaregivers: publicProcedure
        .input(z.object(
            { email: z.string(), 
             password: z.string()
            }
        ))
        .query(async ({ input }) => {
            return input.email
        }), 

    //A procedure to change a patients password from AWS
    changePassword: publicProcedure
        .input(z.object(
            { oldPassword:z.string(),
              newPassword:z.string()
            }
        ))
        .mutation(async ({ input }) => {
            return "New Password" + input.newPassword
        }), 

    //A procedure to change a patients email from AWS
    changeEmail: publicProcedure
        .input(z.object(
            { oldEmail:z.string(),
              newEmail:z.string()
            }
        ))
        .mutation(async ({ input }) => {
            return input.newEmail
        }), 
})