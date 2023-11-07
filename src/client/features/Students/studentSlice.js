import api from "../../store/api";

const studentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Should query to get the list off all the students and display at the /students endpoint
    getStudents: builder.query({
      query: () => "/students",
      providesTags: ["Students"],
    }),
    // Should query to get a specific student by their id
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
      providesTags: ["Students"],
    }),
    // Should create a student mutate the data and update the list of students
    createStudent: builder.mutation({
      query: (student) => ({
        url: "/students",
        method: "POST",
        body: student,
      }),
      invalidatesTags: ["Students"],
    }),
    // Should update a students information by using their student id
    editStudent: builder.mutation({
      query: (student) => ({
        url: `/students/${student.id}`,
        method: "PUT",
        body: student,
      }),
      invalidatesTags: ["Students"],
    }),
    // Should delete a students information from the database by their student id
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

// exported functions should be updated for students and not tasks
export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useCreateStudentMutation,
  useEditStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
