function collisionMaster(cm1,cm2)
{
  if(cm1.x-cm2.x <= cm1.width/2 + cm2.width/2 && cm2.x-cm1.x <= cm1.width/2 + cm2.width/2 
    && cm1.y-cm2.y <= cm1.height/2 + cm2.height/2 && cm2.y- cm1.y <= cm1.height/2 + cm2.height/2 ){
  // fixedRect.shapeColor="red"
  // movingRect.shapeColor="red"
 return true 
}
else{
 return false
}

}
function bounceOffMaster(bom1,bom2)
{

  
  if(bom1.x - bom2.x <= bom1.width/2 + bom2.width/2 && bom2.x - bom1.x <= bom1.width/2 + bom2.width/2){
    bom2.velocityX=bom2.velocityX * (-1);
    bom1.velocityX=bom1.velocityX * (-1);
   
   }
   
   if(bom1.y - bom2.y <= bom1.height/2 + bom2.height/2 && bom2.y - bom1.y <= bom1.height/2 + bom2.height/2){
     bom2.velocityY=bom2.velocityY * (-1);
     bom1.velocityY=bom1.velocityY * (-1);
    
    }

}