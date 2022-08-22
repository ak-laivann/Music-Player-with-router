# React-Music-Player with Router and Hooks

used the useState, useRef and useEffect hooks along with router configuration...

ofcourse copied a little from youtube... still whats learning without copying??

## Router

the Router had to be installed using the npm command

the Index.js or Main.js should have whats called the BrowserRouter component imported from 'react-router-dom'

the App.js should have the Routes and Route component imported from 'react-router-dom'

The BrowserRouter tag should enclose the App element in Index.js or Main.js file

The Routes tag should enclose the main elements inside the app

The Route tag will have the path and an element....the path should be set as an variablename or as will... and the element attribute will have the component to be diaplayed inside the app...

the Route tag is an self closing tag

'/' - path indicates the home page
'/x' - path indicates the next element including the transistion or effect of will...

the element.js should have the link component imported from the 'react-router-dom'

inside the element.js file's return statement there must be a link tag replacing the button tag....

the to attribute inside Link tag should enclose the variable path mentioned in the Route tag

The final element to b displayed need not have the link component imported from 'react-router-dom'.

## Hooks used in the project

useState is used to enclose the song list and the state of its playing and the index of it...

the songs with the title description and artist with image src and src of music is enclosed as an object or array

now useEffect is used to update the index of the song...

now useRef is used  to state the state of the playing...
used along with useEffect to change the state of its playing....

