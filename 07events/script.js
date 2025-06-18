// in first approcah we directly write code in html file but its not scalable 
// second approach is clciking the event by accessing the element 
// third and best approcah is using the eventListener

// learn in detail ny internet or MDN docs

// read about the event function(e) like
//type,timestamp,defaultPrevented,target,toElement,srcElement,currentTarget,clientX,clientY,screenYaltkey,ctrlkey,shiftkey,keycode

// what is event prpagation ???
// the event propagation have two context 
//1) event bubbling ---->>>>> default false 
//2) event capturing ---->>>>> true
// also read about if one image have two links and we want to click only one link at a time so we use 
// [e.stopPropagation()]