# Todo App - Odin Project

Created a todo app for the Odin Project. Allow creating projects with Todo items in them. App contents are stored in localStorage so will persist between refreshes on the same device.

## Try it [here](https://jvilders.github.io/odin-todo-app/)

## Notes
### Model-View-Controller (MVC)

I decided to try and implement the app using the MVC pattern. Parts of it felt very intuitive such as allowing multiple parts of the app to show information coming from only one underlying model. For example: The sidebar shows the number of todo's for each project and this number will update when you interact with the main view to add/delete todo's. It also seemed good to have the model and the view be ultimately unaware of each other, though the passing back and forth of callbacks got a bit complex. I had (and have) trouble conceptualizing how multiple 'areas' of an app should be organized, which can be seen in the code. 

I ultimately opted for a singular Controller and two Views, but it sounds equally reasonable to have two separate controllers. I considered this at one point, but got stuck figuring out the coordination/delegation of render callbacks and model methods between separate controllers (Should controllers talk to each other, should views delegate to each other if one 'area' is conceptually within another?). Having a third view for the Todo item itself also sounds reasonable. I can't be sure I made the best choice at each of these branches, but I did learn a lot.

Using an pub-sub style event aggregator might have made communication between objects easier, maybe I'll play with that on a future project.

### Interface first

When I started on the code I tried to postpone writing implementations for as long as possible, instead only creating interfaces. I got a bit stuck in this later when requirements necessitated going back and changing these, but overall it was a good experience. The simple mindset of 'what should it do?' goes a long way and makes sure that your interface isn't needlessly specific, which helps when changing things later on.

## Improvements I won't make
- Intelligently attaching and detaching nodes from the DOM instead of wiping and remaking everything on render.
    - Could add parameters to the render function so that functions like reading a todo item can pass information such that the sidebar isn't rerendered for example.
- Avoid creating a new set of methods for each 'instance' of a project or todo item. Could do this by either defining such functions in an enclosing lexical scope around the factory functions, or using more classical prototypal inheritance where the functions are added on the prototype (or ES6 class syntax which, for this simple use-case, is mostly just sugar over this option). 
- Various styling touches
    - Custom font
    - some movement/animation on hover
    - transition the color change on hover
    - etc
