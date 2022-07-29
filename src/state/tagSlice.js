import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name: "tags",
    initialState: [],
    reducers: {
        // state is current data, action has new data
        addTag: (state, action) => {
            const tagId = action.payload.id
            const index = state.findIndex(x => { return x.id === tagId })
            if (index === -1) {
                const newTag = {
                    id: action.payload.id,
                    tags: [action.payload.tags]
                };
                state.push(newTag)
            } else {
                state[index].tags.push(action.payload.tags)
            }
        },
    }
})

export const { addTag } = tagSlice.actions;

export default tagSlice.reducer