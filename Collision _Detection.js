function collisionDetection(p1,p2) {
    if(p1.x-p2.x<(p2.width+p1.width)/2&&p2.x-p1.x<(p2.width+p1.width)/2
    &&p1.y-p2.y<(p2.height+p1.height)/2&&p2.y-p1.y<(p2.height+p1.height)/2){
        p1.shapeColor="purple";
        p2.shapeColor="red";
  return  true;
    }
  
    else{
      p2.shapeColor="Blue";
      p1.shapeColor="Orange";
      return false;
    }
  
  
  }