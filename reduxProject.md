# Using Redux

For the HW, I would like you to add Redux to your current Fruit project. There should only be one slice, and this slice should store the list of fruits. Since you are using typescript, I have provided the template store and slice files below, but they still need editing accordingly.

Additioanlly, since I will not be there on Tuesdays/Thursdays from now on, I want you to continue working on this tomorrow as well. I am expecting you to finish most of this current writeup for homework, and then I will release part 2 of this around 9:00 am tomorrow for you to do then. Please let me know if you reach any troubling points while you are going through this, as I want you to continue with this tomorrow. Thus it is important that you can finish this part.

## Getting the project from GitHub

We uploaded the project to GitHub at the end of class, and here are the instructions to get it on your computer.

First, navigate to the parent directory of where you want to store it with `cd` (so probably VSCProjects). Then, type

```
git clone YOUR_URL
```

Where YOUR_URL is the url of your git repository (you can just copy-paste it from Chrome). You may need to login/install git on the new computer.

Once this is done, you now have the git project, but you need to `cd` into it, so change directory into it. Now, we have the project, but we need to actually tell it to use Redux, so we need to add the following:

```
yarn add @reduxjs/toolkit react-redux
```

But the dependencies haven't been installed yet, so we need to do

```
yarn install
```

Now you should be all set up, and can start coding! (And use `yarn start` to run the project.)

## Example Code

`store.ts`

```typescript
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    one: oneSlice.reducer,
    two: twoSlice.reducer,
    ...,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store
```

`oneSlice.ts`

```typescript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exampleProperty: "test",
  ...
};

const oneSlice = createSlice({
  name: "EXAMPLE_NAME",
  initialState,
  reducers: {
    exampleReducerOne(state, action) {
      state.exampleProperty = action.payload;
    },
  },
});

export const { exampleReducerOne } = oneSlice.actions;

export default oneSlice.reducer;
```

Additionally, to actually use these in a component, I have provided the following sample file with an example (I haven't included the import statements, but you can add them pretty easily):

```typescript
function Component() {
  const dispatch = useAppDispatch();
  const exampleProperty = useAppSelector(
    (state: RootState) => state.one.exampleProperty
  );

  const onButtonClick = () => {
    dispatch(exampleReducerOne("NEW VALUE!"));
  };

  return (
    <div>
      <h3>Hello!</h3>
      <p>{exampleProperty}</p>
      <button onClick={onButtonClick}>Click me!</button>
    </div>
  );
}
```

If you are struggling to implement these, you can find plenty of resources online, but you may also send me a message. I'll try to respond as quickly as I can, so **please** let me know if you come accross any problems.

You should be adding just the list of fruits to the Redux store, and then accessing it accordingly when you need the list (so at the top of each component probably). You should also make a reducer to edit the list (push a fruit to the end), and maybe one to delete a fruit if you wish and have extra time.

### Extra

Furthermore, if you have extra time, I would love it if you could push your changes to GitHub (and get used to committing frequently), and add me to see the repo (my GitHub is JHawk0224, and instructions to do this can be found online). In order to commit your changes (which should probably be done once you finish a major milestone or get to a breaking point), you need to do the following:

```
git add .
```

Which stages all of your changes for the commit (or just `git add FILENAME` to do them one at a time). Then do

```
git commit -m "YOUR_MESSAGE"
```

To commit your changes locally. Finally, to push your changes remotely, so they're visible on the web, do:

```
git push
```

These should be done whenever you make changes to your files! Also, one last side note, let's say someone else made changes to your git project, and you want to get their changes locally. Then you would use `git pull` to get the changes from the remote branch to your local branch.
