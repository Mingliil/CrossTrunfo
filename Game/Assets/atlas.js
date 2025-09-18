var spritesheet = new Image();
spritesheet.onload=function(){

    // specify desired x,y,width,height
    // to be clipped from the spritesheet
    var x=0; 
    var y=0;
    var w=10;
    var h=10;

    // create an in-memory canvas
    var canvas=document.createElement('canvas');
    var ctx=canvas.getContext('2d');

    // size the canvas to the desired sub-sprite size
    canvas.width=w;
    canvas.height=h;

    // clip the sub-sprite from x,y,w,h on the spritesheet image
    // and draw the clipped sub-sprite on the canvas at 0,0
    ctx.drawImage(spritesheet,  x,y,w,h,  0,0,w,y);

    // convert the canvas to an image
    var subsprite=new Image();
    subsprite.onload=function(){ doCallback(subsprite); };
    subsprite.src=canvas.toDataURL();    

}
spritesheet.src ="Afonso_Lendario.png";


function doCallback(img){
    // do something with the new subsprite image
}