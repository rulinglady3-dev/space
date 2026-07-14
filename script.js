const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
let columns = [];

const columnWidth = 120;

let columnCount = Math.floor(canvas.width / columnWidth);


function createColumns(){

    columns = [];

    columnCount = Math.floor(canvas.width / columnWidth);


    for(let i = 0; i < columnCount; i++){

        let texts = [];

        for(let j = 0; j < 8; j++){

            texts.push({

                y: -j * 80

            });

        }


        columns.push({

            x: i * columnWidth,
            speed: 1 + Math.random() * 4,
            texts:texts

        });

    }

}


createColumns();
function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.shadowColor = "red";
ctx.shadowBlur = 15;

ctx.fillStyle = "#ff4d88";
ctx.font = "bold 20px Arial";


    columns.forEach(column=>{


        column.texts.forEach(text=>{


            ctx.fillText(
                "I love you",
                column.x,
                text.y
            );


            text.y += column.speed;


            if(text.y > canvas.height + 50){

                text.y = -50;

            }


        });


    });


    requestAnimationFrame(animate);

}


animate();
