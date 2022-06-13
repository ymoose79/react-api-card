import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name: "tags",
    initialState: [],
    reducers: {
        // state is current data, action has new data
        addTag: (state, action) => {
            const newTag = {
                id: action.payload.id,
                tags: action.payload.tags
            };
            state.push(newTag)

        },
        replaceTagArr: (state, action) => {
            const tagId = action.payload.id
            const index = state.findIndex(x => { return x.id === tagId })
            state[index].tags = action.payload.tags
        },
    }
})

export const { addTag, replaceTagArr } = tagSlice.actions;

export default tagSlice.reducer