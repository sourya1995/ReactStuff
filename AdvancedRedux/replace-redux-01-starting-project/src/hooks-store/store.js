let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
   const setState = useState(globalState)[1];
   const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState)
    globalState = {...globalState, ...newState };

    for(const listener of listeners) {
        listener(globalState); //react re-renders the component
    }
   }
   useEffect(() => {
    listeners.push(setState);

    return () =>  {
        listeners = listeners.filter(li => li !== setState);
    }
   }, [setState]);

   return [globalState, dispatch];
   

};

export const initStore = (userActions, initialState) => {
    if(initialState){
        globalState = {...globalState, initialState};
    }
    actions = {...actions, ...userActions};
}