import React from "react";
import WithLog from "./hoc/withLog";
import withFetch from "./hoc/withFetch";
import withLog from "./hoc/withLog";
import { compose } from "recompose";

const MyComponent = (props) => {
  return <h2>{JSON.stringify(props, null, 2)}</h2>;
};

// export default withLog(MyComponent)
// каррированая функция
// export default withFetch('abc')(MyComponent)

//несколько оберток хуков для компонента
// export default withLog(withFetch(MyComponent))

// вызов нескольких хуков с помощью композиции
export default compose(withLog, withFetch)(MyComponent);
