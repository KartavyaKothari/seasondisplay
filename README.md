1. Set up project
2. Create seasondisplay component
3. Geo location api (above return from app component)
5. We have to show the laititude in jsx but now we need the
power of class based components because of mutuple delays and
such
6. Create constructor and initialise state in it
7. Change location of geolocation call to constrcutor
8. Add error handling properly add callback and add error in jsx
9. Then Add in if conditions to handle all error cases so it
looks better (called conditionally handleing error)
-----------------
11.Implement the two most important life cycel events
12.Add the geolocation stuff in componenet did mount
13.Show that state can be initialized alternatively without
using this key word outside the conctructpr
14.Passing state as a prop so pass it to season display, do it
where you were displaying latitude but now call season display
which will have the latitude and now will dipaly it
15. Add in a new function which will calculate which season
accodrig to the chart and have it disoayed in the consove from
season depaly
16. Render the text to the page in jsx according to what season
it is
17. Coonect to semantic UI for icons
18. Fins icons on the website
19. Add in the ternary if to determine which icon class we want
20. Create a seasonconfig objectarrya to simplyfy your job
21. Add in classes icon-left and icon-right and create a new css
document to use styles with the `${} la la la` for the trick
22. Position absolute and margins of top bottom right left where
appropritte
23. Add class to seasondiaply div by using the same trick ``
24. .icon-left{
Page 1
seasons flow
 position: absolute;
 top: 10px;
 left: 10px;
}
.icon-right{
 position: absolute;
 bottom: 10px;
 right: 10px;
}
.season-display{
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
}
.winter{
 background-color: aquamarine;
}
.summer{
 background-color: khaki;
}
.season-display.winter i {
 color: blue;
}
.season-display.summer i {
 color: chocolate;
}
25. Add loading spinner from sematic ui
26. Add in props so loading is rendered dynamic
27. Spinner.defaultProps={};
