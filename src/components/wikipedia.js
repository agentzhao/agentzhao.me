
// identify an element to observe
const elementToObserve = document.querySelector("#wikipedia");

// create a new instance of `MutationObserver` named `observer`,
const observer = new MutationObserver(function () {
  console.log("callback that runs when observer is triggered");
});

// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, { subtree: true, childList: true });
observer.observe(elementToObserve, {subtree: true, childList: true});
