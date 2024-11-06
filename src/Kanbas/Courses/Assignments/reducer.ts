import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

// Define the structure of an assignment
interface Assignment {
  _id: string;
  title: string;
  description?: string;
  course: string;
  dueDate?: string;
  availableFrom?: string;
  until?: string;
  points?: number;
}

const initialState: {
  assignments: Assignment[];
  assignmentToEdit: Assignment | null;
} = {
  assignments: assignments,
  assignmentToEdit: null, // Initially no assignment is being edited
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        until: assignment.until,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== assignmentId
        );
      },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === updatedAssignment._id ? updatedAssignment : a
      );
      state.assignmentToEdit = null; // Clear the edit state after updating
    },
    setAssignmentForEdit: (state, { payload: assignmentId }) => {
      state.assignmentToEdit =
        state.assignments.find((a) => a._id === assignmentId) || null;
    },
    clearAssignmentEdit: (state) => {
      state.assignmentToEdit = null; // Clears the edit state when canceled or saved
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignmentForEdit,
  clearAssignmentEdit,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
