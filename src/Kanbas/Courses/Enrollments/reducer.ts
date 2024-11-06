import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modifyEnrollment, retrieveEnrollments } from "./index";

const initialState = (
    //name: "modules",
    currentEnrollments: Enrollment[],
    userId: string,
    courseId: string,
    enrolled: boolean
): Enrollment[] => {
    // Remove enrollment if already enrolled, otherwise add new enrollment
    return enrolled
        ? currentEnrollments.filter(
            (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
          )
        : [...currentEnrollments, { user: userId, course: courseId }];
};

const initialEnrollmentState: EnrollmentState = {
    enrollments: [],
};

const enrollmentSlice = createSlice({
    name: "enrollmentData",
    initialState: initialEnrollmentState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(retrieveEnrollments.fulfilled, (state, action: PayloadAction<Enrollment[]>) => {
                state.enrollments = action.payload;
            })
            // Handling modifyEnrollment action state
            .addCase(modifyEnrollment.fulfilled, (state, action) => {
                const { userId, courseId, isEnrolled } = action.payload;
                state.enrollments = initialState(state.enrollments, userId, courseId, isEnrolled);
            });
    },
});

// Interface definitions
interface Enrollment {
    course: string;
    user: string;
}

interface EnrollmentState {
    enrollments: Enrollment[];
}

export default enrollmentSlice.reducer;
