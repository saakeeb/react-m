# React Docs

* If any component all vcalue dependes on props value from its parents than it is a 
* controlled component of parent components.

Stateless functionalk component
object destructure
React life cycle: is only use in class component
1- App cponstructor(When instance of class created, it is perfect opportunity to initialize the property)
2- App render(React element represant in virtual dom, render it to the actual dom, all his childer is also render recurssively)
3- App Mounted(Mounted means virtual dom is in the actual dom, here we can also call ajax);

like counter apps first render did render APP.js> Navbar>counters> counter>counter>counter>counter
Than it will mount to the original dom.

When state of component got change: 
When an event update the state of a componet then it schedule a call to render method, as well as all his children is going to render in this process.
Entire component is rendering that does not mean entire dom is rendering/updating.
When a component is rendered then a new virtual dom is created and it start comparing with the previous virtual dom that situated in the memory.
That is why we dont modfify directly the state as it create two reference in the memory.
After comparing the two virtual dom it only mount/update the real dom the comparing option.

Unmounting phase: in this process it clean up the component (like listener, settimeout) before if we want to remove some element

