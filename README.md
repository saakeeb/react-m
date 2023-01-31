# React Docs

* If any component all value depends on the props value from its parents then it is a 
* controlled component of parent components.

Stateless functional component
object destructure
React life cycle: is only used in class component
1- App constructor(When instance of class created, it is perfect opportunity to initialize the property)
2- App render(React element represent in virtual dom, render it to the actual dom, all his childer is also render recursively)
3- App Mounted(Mounted means virtual dom is in the actual dom, here we can also call ajax);

like counter apps first render did render APP.js> Navbar>counters> counter>counter>counter>counter
Then it will mount to the original dom.

When the state of the component got changed: 
When an event updates the state of a component then it schedules a call to render method, as well as all his children are going to render in this process.
Entire component is rendering that does not mean the entire dom is rendering/updating.
When a component is rendered a new virtual dom is created and it starts comparing with the previous virtual dom that is situated in the memory.
That is why we don't modify the state directly as it creates two references in the memory.
After comparing the two virtual doms it only mounts/updates the real dom with the comparing option.

Unmounting phase: in this process, it cleans up the component (like the listener, set timeout) before we want to remove some element

``` bash
Create typescript file with the command
npm i typescript
npx tsc --init --sourceMap --rootDir src --outDir dist 
tsc
```