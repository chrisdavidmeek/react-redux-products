/*
[Loading]
They're just animations. 

See "Card.js"


*/

/*
[Redux Hooks]

still need index file in reducers
    //dont touch anything in index
    //dont touch anything in setActions

Where you implement the redux in components is what counts.

check in about.js you will see imoprt {useSelector, useDispatch}
        //useSelector grabs a certain part of the state, creating a constant associated with toggle
        //useDispatch specifies which functions you're going to be using from 'index.js'

        syntax used:
        import {useSelector, useDispatch} from "react/redux"

        in code...

         const user = useSelector(state => state.user);        --------|
        const toggle = useSelector(state => state.toggle);     -------- These are setting variables as specified values in state, taken from index.js

        const dispatch = useDispatch(setToggle, changeCountry) -------- these  are the functions taken from index .js

        
         <button onClick={() => dispatch(setToggle())}>Toggle Powerrr</button>
      <button onClick={() => dispatch(changeCountry("USA"))}>USA</button>


*/

/*
[Filtering]





 */
