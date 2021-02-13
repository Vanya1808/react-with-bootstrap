import React, { component } from "react";

const asyncComponent = (loader) => {
    return class AsyncComponent extends component {
        state = {
            // component: 
        };
        componentDidMount() {
            loader().then((module)=> {
              this.setState({ component: module.default});
            });
        };

        render() {
            const { component: LoadedComponent } = this.state
            return
        };
};
};

export default asyncComponent;
