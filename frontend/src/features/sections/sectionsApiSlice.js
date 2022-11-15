import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const sectionsAdaper = createEntityAdapter({});

const initialState = sectionsAdaper.getInitialState();

export const sectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSections: builder.query({
      query: () => ({
        url: "/sections",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        }
      }),
      transformResponse: (responseData) => {
        const loadedSections = responseData.map((section) => {
          section.id = section._id;
          return section;
        });
        return sectionsAdaper.setAll(initialState, loadedSections);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Secton", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Section", id }))
          ];
        } else return [{ type: "Sections", id: "LIST" }];
      }
    }),
    addNewEvent: builder.mutation({
      query: (initialSectionData) => ({
        url: "/sections",
        method: "POST",
        body: {
          ...initialSectionData
        }
      }),
      invalidatesTags: [{ type: "Section", id: "LIST" }]
    }),
    updateSection: builder.mutation({
      query: (initialSectionData) => ({
        url: "/sections",
        method: "PATCH",
        body: {
          ...initialSectionData
        }
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }]
    }),
    deleteSection: builder.mutation({
      query: ({ id }) => ({
        url: `/sections`,
        method: "DELETE",
        body: { id }
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Section", id: arg.id }]
    })
  })
});

export const {
  useGetSectionsQuery,
  useAddNewSectionMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation
} = sectionsApiSlice;

export const selectSectionsResult =
  sectionsApiSlice.endpoints.getSections.select();

const selectSectionsData = createSelector(
  (selectSectionsResult) => (sectionsResult) => sectionsResult.data
);

export const {
  selectAll: selectAllSections,
  selectById: selectSectionById,
  selectIds: selectSectionIds
} = sectionsAdaper.getSelectors(
  (state) => selectSectionsData(state) ?? initialState
);
