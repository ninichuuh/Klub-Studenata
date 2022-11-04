import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const eventsAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1,
});

const initialState = eventsAdapter.getInitialState();

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "/events",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedEvents = responseData.map((event) => {
          event.id = event._id;
          return event;
        });
        return eventsAdapter.setAll(initialState, loadedEvents);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Event", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Event", id })),
          ];
        } else return [{ type: "Events", id: "LIST" }];
      },
    }),
    addNewEvent: builder.mutation({
      query: (initialEvent) => ({
        url: "/events",
        method: "POST",
        body: {
          ...initialEvent,
        },
      }),
      invalidatesTags: [{ type: "Event", id: "LIST" }],
    }),
    updateEvent: builder.mutation({
      query: (initialEvent) => ({
        url: "/events",
        method: "PATCH",
        body: {
          ...initialEvent,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Event", id: arg.id }],
    }),
    deleteEvent: builder.mutation({
      query: ({ id }) => ({
        url: `/events`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Event", id: arg.id }],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useAddNewEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApiSlice;

export const selectEventsResult = eventsApiSlice.endpoints.getEvents.select();

const selectEventsData = createSelector(
  selectEventsResult,
  (eventsResult) => eventsResult.data
);

export const {
  selectAll: selectEvents,
  selectById: selectEventById,
  selectIds: selectEventIds,
} = eventsAdapter.getSelectors(
  (state) => selectEventsData(state) ?? initialState
);
