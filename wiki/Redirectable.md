## Overview
Redirectables are specific components that can redirect the browser using the `ReactRouter`.

To create a redirectable component, it must have a default state of `redirect` as `null`. When the state changes to a non-null value, it must render a `<Redirect/>` component. Redirect components are imported from the package `react-router-dom` and when they render they will redirect the `ReactRouter` to the path that is specified by the prop `to`.

```jsx
import React from "react";
import { Redirect } from "react-router-dom";

class Redirectable extends React.Component {
    constructor() {
        super();
        this.state = { redirect: null };
    }

    render() {
        if(this.state.redirect === null) return null;
        return <Redirect to={this.state.redirect}/>
    }
}
```

Above is a sample redirectable component.
If `app.launch(game, this)` is called from inside a redirectable, it will redirect to the game view page.

If you do not launch a game from inside a rendered component, then instead of React rendering a `<Redirect/>` it will call `location.pathname = "/game/my-game"`
