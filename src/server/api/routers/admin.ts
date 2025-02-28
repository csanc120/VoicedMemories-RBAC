import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const adminRouter = createTRPCRouter({
    getDistributorList: publicProcedure
        .input(z.object({
            email: z.string(),
            password: z.string()
        }))
        .query(async ({ input }) => {
            return "Distributor List:"
        }),

    createDistributorAccount: publicProcedure
        .input(z.object({
            email: z.string(),
            password: z.string()
        }))
        .query(async ({ input }) => {
            return "Distributor Account Created for: " + input.email
        }),

    setLicenseExpire: publicProcedure
        .input(z.object({
            date: z.string(),
        }))
        .query(async ({ input }) => {
            return "Expire date set to: " + input.date
        }),

    sendEmailReminder: publicProcedure
        .input(z.object({
            email: z.string(),
        }))
        .query(async ({ input }) => {
            return "Email reminder sent to: " + input.email
        }),

    //Credit to Carlos for code below
    //Admin should be able to update credentials
    //A procedure to change a admin's password from AWS
    changePassword: publicProcedure
        .input(z.object(
            {
                oldPassword: z.string(),
                newPassword: z.string()
            }
        ))
        .mutation(async ({ input }) => {
            return "New Password" + input.newPassword
        }),

    //A procedure to change a admin's email from AWS
    changeEmail: publicProcedure
        .input(z.object(
            {
                oldEmail: z.string(),
                newEmail: z.string()
            }
        ))
        .mutation(async ({ input }) => {
            return input.newEmail
        }),
})
