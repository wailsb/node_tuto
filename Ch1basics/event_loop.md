# this chapter is one of the most important and fundamental concepts in Node.js
## we will cover not only event loop in details but also how node json works with asynchronous code functions set timeout and promises callbacks the callstack and the event queue
# 1. Event Loop
## 1.1 What is the Event Loop?
event loop is a core component of node.js that allows the execution of (all types of asynchronous code when I say async code i don't only mean async functions but also setTimeout, promises, callbacks, and more) in a non-blocking manner. It enables node.js to handle multiple operations concurrently without blocking the main thread.
## 1.2 what does it do?
before diving into how it works let's understand what it does. The event loop continuously checks for events in the event queue and executes the associated callbacks. It allows node.js to handle I/O operations, timers, and other asynchronous tasks efficiently.
when it does execute the callbacks?
the event loop executes callbacks when the call stack is empty. This means that when there are no synchronous tasks left to execute, the event loop will pick up the next callback from the event queue and execute it.
## 1.3 what is callback a callstack and an event queue?
**callback** let's understand with an example :
function 1 has to wait for user to say either yes or no 
user might say yes or no after 5 seconds
if we execute function 1 synchronously, it will block the execution of the next function until the user responds. so what we'll do we can't just skip function 1 right 
we will use a callback function that will be executed once the user responds.
in architecture terms, we have :
callstack,event queue, code before ,code after, function 1, callback function
the call stack is where the currently executing code resides. When a function is called, it is pushed onto the call stack, and when it returns, it is popped off the stack.
the event queue is where callbacks are placed when they are ready to be executed. When the call stack is empty, the event loop picks up the next callback from the event queue and executes it.
so followeing order of execution will be :
1. code before
2. function 1 (which will wait for user input)
3. code after
4. callback function (which will be executed once the user responds)
### how everything works together and placed in different structures?
code before -> call stack
function 1 -> initialized in the call stack (waiting for user input) from here task isn't handled synchronously so we can continue executing the code after it while waiting for the user response
code after -> call stack
callback function -> after the user responds the callback function is pushed to the event queue (waiting for the call stack to be empty)
event loop -> continuously checks the call stack and event queue
when the call stack is empty, the event loop picks up the callback function from the event queue and executes it.
## and we just explained how the event loop works with callbacks, call stack, and event queue works together
# 1.4 How does the Event Loop Handle Asynchronous Code?
the event loop handles asynchronous code by allowing the execution of non-blocking operations. When an asynchronous operation is initiated, such as a file read or a network request, node.js offloads that operation to the system's underlying APIs. This allows the main thread to continue executing other code without waiting for the operation to complete.
once the operation is complete, a callback function is triggered, which is then placed in the event queue. The event loop will execute this callback when the call stack is empty, ensuring that the asynchronous operation does not block the execution of other code.
# 1.5 note :
we skipped details such microtask queue for promises and explained them as part of the event loop.
even though the microtask queue is not explicitly mentioned, it's basically the same but using a different queue for promises and other microtasks. so if you want to really dive deep into those details you can check the official node.js documentation or other resources that cover the event loop in depth.
## did you like this lesson?
if you found this lesson helpful, please consider giving it a thumbs up or sharing it with others
who might benefit from it. Your support helps us create more content like this!
### by Ouweis Wail Sari Bey
