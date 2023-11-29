//button displays prompt then navigates to /products
// function popup(mylink, windowname) { 
//     if (! window.focus)return true; 
//     let href; 
//     if (typeof(mylink) == 'string') href=mylink; 
//     else href=mylink.href; 
//     window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
//     return false; 
// }
export default function StartScreen() {
   return (
   <>
    <button className="startButton">Start</button>
   <button className="startButton">Setup</button>
   </>
   )
}



//button navigates to /login