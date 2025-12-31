        let activities={work:[], duedate:[] };
        let time=document.getElementById("time");
        let par=document.getElementById("input");
        const butt=document.getElementById("btn");
        let container=document.getElementById("active");
        let dd=document.getElementById("date");
        let dark=document.querySelector(".dark");
        let g=localStorage.getItem("activities");
        if (g){
            JSON.parser(g);
            
        }
        butt.addEventListener("click",()=>{
            if (par.value===""){
                alert("Please Add A Task");
            }else if(dd.value==""){
                alert("Add Time please");
            }else{activities.work.push(par.value); 
                activities.duedate.push(dd.value);
                addTask();
                par.value="";
                dd.value="";
            }
        });
        function addTask() {
            container.innerHTML="";
            activities.work.forEach((value,index)=>{
            let pa=  document.createElement("p");
            let buty=  document.createElement("button");
            buty.id="del";
            buty.innerHTML="delete";
            buty.addEventListener("click",()=>{
                del(index);
            })
            pa.innerHTML=`${value} at ${activities.duedate[index]}`;
                container.appendChild(pa);
            pa.appendChild(buty);
            save();
            });
        }
        function del(ind){
        activities.work.splice(ind,1);
        activities.duedate.splice(ind,1);
        addTask();
        save();
        } 
        console.log(g);
        function save(){
        localStorage.setItem("activties",JSON.stringify(activities)); 
        }

        setInterval(() => {
            time.innerHTML=`${new Date().toLocaleTimeString()}`;  
        },1000);
            dark.addEventListener("click",()=>{
            mode();
            });
    function mode(){
        if (dark.innerHTML==="dark"){
            document.querySelector(".con").style.background="black";
            dark.innerHTML="white";
                }else{
                    document.querySelector(".con").style.background="white";
            dark.innerHTML="dark";
                }
    }
    
setInterval(()=>{
    let colors=["red","blue","green","gold"];
    let ra=Math.round(Math.random()*colors.length);
    dark.style.background=colors[ra];
},10);

    