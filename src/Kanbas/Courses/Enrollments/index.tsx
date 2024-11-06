import { createAsyncThunk } from "@reduxjs/toolkit";
import * as db from "./Editor";

// Fetches enrollments specific to a user by their ID
export const retrieveEnrollments = createAsyncThunk(
    "enrollment/retrieveEnrollments",
    async (userId: string) => {
        const enrollmentsForUser = await db.getUserEnrollments(userId);
        return enrollmentsForUser;
    }
);

export const modifyEnrollment = createAsyncThunk(
    "enrollment/modifyEnrollment",
    async ({ userId, courseId, isEnrolled }: { userId: string; courseId: string; isEnrolled: boolean }) => {
        if (isEnrolled) {
            await db.removeEnrollment(userId, courseId);
        } else {
            await db.addEnrollment(userId, courseId);
        }
        // Return updated enrollment state for the user-course pair
        return { userId, courseId, isEnrolled: !isEnrolled };
    }
);
