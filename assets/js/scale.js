let scale = 1;

let rot = 0;

const scaleBike = (value) => {

    if(value == "plus") {
        scale += 0.2
        bike.style.transform = (`scale(${scale})`)
    } else if (value == "minus") {
        scale -= scale - 0.2 >= 1 ? 0.2 : 0
        bike.style.transform = (`scale(${scale})`)
    } else if (value == "rot") {
        console.log("down")

    }

} 

let intervalid = 0;
let flag = true

const startRotate = () => { 

   intervalid = setInterval(() => {

        if(rot == 360) {
            flag = flag ? false : true
        }
    
        rot += flag ? 10 : -10
    
        bike.style.transform = (`rotate(${rot}deg)`)

    }, 100)

}


const stopRotate = () => {
    clearInterval(intervalid)
    intervalid = 0
}