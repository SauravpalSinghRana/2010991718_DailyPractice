function fnAdd(){
    let l = document.getElementById("l").value;
    let r = document.getElementById("r").value;
    let k = document.getElementById("k").value;

    l = Number(l);
    r = Number(r);
    k = Number(k);
    let count =0;
 
    for(let i=l;i<=r;i++){
        if(i%k==0){
count = count+1;
        }
    }
    document.getElementById("p1").innerHTML = count;

    //document.getElementById("p1").innerHTML = l+r+k;
}
console.log(new Date().getDay());
let day;
switch (new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
    case 1:
        day = "Monday";
        break;
        case 2:
            day = "Tuesday";
            break;
            case 3:
                day = "Wednesday";
                break;
                case 4:
                    day = "Thursday";
                    break;
                    case 5:
                        day = "Friday";
                        break;
                        case 6:
                            day = "Saturday";
                            break;
}