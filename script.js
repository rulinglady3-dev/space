const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createColumns();

});



let columns = [];

const columnWidth = 120;

let columnCount;



function createColumns(){

    columns = [];

    columnCount = Math.floor(canvas.width / columnWidth);



    for(let i = 0; i < columnCount; i++){


        let texts = [];


        for(let j = 0; j < 15; j++){


            texts.push({

                y: -j * 60,

                size: 16 + Math.random()*10

            });


        }



        columns.push({

            x: i * columnWidth,

            speed: 8 + Math.random()*12,

            texts:texts

        });



    }


}



createColumns();





function animate(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    ctx.shadowColor = "red";
    ctx.shadowBlur = 15;



    columns.forEach(column=>{


        column.texts.forEach(text=>{


            ctx.fillStyle = "#ff4d88";

            ctx.font = 
            "bold " + text.size + "px Arial";



            ctx.fillText(
                "I love you",
                column.x,
                text.y
            );



            text.y += column.speed;



            if(text.y > canvas.height + 60){


                text.y = -60;


            }


        });



    });



    ctx.shadowBlur = 0;



    requestAnimationFrame(animate);


}



animate();
