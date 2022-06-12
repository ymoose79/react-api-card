import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name: "tags",
    initialState: [
        {
            id: 1,
            tags: ['apple', 'bob', 'hobo']
        },
        {
            id: 2,
            tags: ['tom', 'sue', 'h']
        },
        {
            id: 3,
            tags: ['pop', 'fizz', 'sweet']
        }
    ],
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
            console.log(index)
            state[index].tags = action.payload.tags

        }
    }
})

export const { addTag, replaceTagArr } = tagSlice.actions;

export default tagSlice.reducer