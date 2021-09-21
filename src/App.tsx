import React from 'react';
import {TextField} from "./TextField";
import {Counter} from "./Counter";

// props
// hooks
// render props

// React.FC is a react functional component
const App: React.FC = () => {
  return (
      <div>
        {/*Types you define in TextField will show up now with auto complete here*/}
        <TextField text='hello' person={{firstName: '', lastName: ''}} />
        <Counter>
          {({count, setCount}) => (
              <div>
                {count}
                <button onClick={() => setCount(count + 1)}> + </button>
              </div>
          )}
        </Counter>
      </div>
  );
}

export default App;
