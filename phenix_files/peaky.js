console.log("CONSOLE: Peaky loaded");

window.oncontextmenu = () => {
	return false // cancel default menu
}
//or

window.addEventListener('contextmenu', ()=>{
	console.log('right click');
	return false // cancel default menu
},false)



const video =  document.getElementById("my-video");

const onVisibilitychange =()=>{
   return console.log('ddd');
} 

document.addEventListener("visibilitychange", onVisibilitychange)

