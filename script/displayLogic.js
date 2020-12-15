class OrgChart {
  
}

class Team {
  
}

class PersonCircles {
    constructor(skel,radius){
      //this.xStart = skel.xStart;
      this.xCoords = skel.xCoords;
      this.yStart = skel.yStart;
      this.width = skel.width;
      this.numCircles = skel.numPoints;
      this.wrapperId = skel.wrapperId;
      this.radius = radius;
    }
  
    addCircles() {
      let wid = this.wrapperId;
      let yStart = this.yStart;
      let radius = this.radius;
      console.log(yStart);
        this.xCoords.forEach(function(item){
          $('#'+wid).append(
          '<circle class="pCircle" cx="'+item+'" cy="'+(yStart-200)+'" r="30"/>'
        );
        });
    }
}


class UnionSkeleton { 
    constructor (xCenter, yStart, width, height, numPoints, wrapperId) {
    this.xCenter = xCenter
    this.yStart = yStart;
    this.xStart = 0;
    this.width = width;
    this.height = height
    this.numPoints = numPoints;
    this.isEven = true;
    this.finalPoint = [xCenter,(yStart-height)];
    this.ctrlPoint1Y = (yStart-height+10);
    this.ctrlPoint2 = [xCenter,Math.round(-1*height/1.2+yStart+height)];
    this.wrapperId = wrapperId;
    this.xCoords = [];
  }
  
  
    getXCoords() {
        let isEven = this.isEven;
        let xDistance = this.width / (this.numPoints-1);
        let minX = 0;
        if ((this.numPoints%2) != 0) isEven = false;
        if(!isEven) {
          let minX =  this.xCenter - Math.floor(this.numPoints/2)*xDistance;
          this.xCoords.push(Math.round(minX));
        } else { //isEven
          minX =  this.xCenter - (this.numPoints/2)*xDistance+(xDistance/2);
          this.xCoords.push(Math.round(minX));
        }
        this.xStart = this.xCoords[0];
        for(let i=1;i<(this.numPoints);i++) this.xCoords.push(Math.round(minX+xDistance*i));
        return this.xCoords;
    }
  
    generateD() {
      let xArr = this.getXCoords();
      let dArr = new Array();
      for(let j=0;j<xArr.length;j++) {
        dArr.push (
        "M "+xArr[j] + " " + this.yStart + " C " + xArr[j] + " " 
        + this.ctrlPoint1Y  + "  " + this.ctrlPoint2[0] + " " + this.ctrlPoint2[1] 
        + "  " + this.finalPoint[0] + " " + this.finalPoint[1]       
        );
      }
      return dArr;
    }

    addLines() {
      let dArr = this.generateD();
      let wid = this.wrapperId;
      dArr.forEach(function(item){
        $('#'+wid).append(
          '<path class="glowLine" d="'+item+'" transform="translate(0,-220)"/></path>'
        );
      });

    }

}

let skel1 = new UnionSkeleton(218,225,337,80,4,'wr');
skel1.addLines();

// using Object Composition by passing an Object as an argument to the constructor
let circ1 = new PersonCircles(skel1);
circ1.addCircles();

$("#cont").html($("#cont").html());
