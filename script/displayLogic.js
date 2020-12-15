class OrgChart {
  
}

class Team {
  
}

class PersonCircles {
  constructor(a,b){}
}


class UnionSkeleton { 
    constructor (xCenter, yStart, width, height, numPoints, wrapperId) {
    this.xCenter = xCenter
    this.yStart = yStart;
    this.width = width;
    this.height = height
    this.numPoints = numPoints;
    this.isEven = true;
    this.finalPoint = [xCenter,(yStart-height)];
    this.ctrlPoint1Y = (yStart-height+10);
    this.ctrlPoint2 = [xCenter,Math.round(-1*height/1.2+yStart+height)];
    this.wrapperId = wrapperId;
  }
  
  
    getXCoords() {
        let isEven = this.isEven;
        let xArray = new Array();
        let xDistance = this.width / (this.numPoints-1);
        let minX = 0;
        if ((this.numPoints%2) != 0) isEven = false;
        if(!isEven) {
          let minX =  this.xCenter - Math.floor(this.numPoints/2)*xDistance;
          xArray.push(Math.round(minX));
        } else { //isEven
          minX =  this.xCenter - (this.numPoints/2)*xDistance+(xDistance/2);
          xArray.push(Math.round(minX));
        }
        for(let i=1;i<(this.numPoints);i++) xArray.push(Math.round(minX+xDistance*i));
        return xArray;
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
          '<path class="glowLine" d="'+item+'" transform="translate(-250,-220)"/></path>'
        );
      });

    }

}

let u = new UnionSkeleton(218,225,337,80,4,'wr');
u.addLines();

$("#cont").html($("#cont").html());
