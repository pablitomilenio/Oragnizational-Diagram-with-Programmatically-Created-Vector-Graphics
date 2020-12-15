function UnionSkeleton(xCenter, yStart, width, height, numPoints) {
    this.xStart = xCenter;
    this.yStart = yStart;
    this.width = width;
    this.height = height
    this.numPoints = numPoints;
    this.isEven = true;
    this.finalPoint = [xCenter,(yStart+height)];
    this.ctrlPoint1Y = (yStart+height-10);
    this.ctrlPoint2 = [xCenter,Math.round(-1*height/1.2+yStart+height)];
    this.getXCoords = function() {
        let isEven = this.isEven;
        let xArray = new Array();
        let xDistance = this.width / (this.numPoints-1);
        let minX = 0;
        if ((numPoints%2) != 0) isEven = false;
        if(!isEven) {
          minX =  xCenter - Math.floor(numPoints/2)*xDistance;
          xArray.push(Math.round(minX));
        } else {
          minX =  xCenter - (numPoints/2)*xDistance+(xDistance/2);
          xArray.push(Math.round(minX));
        }
        for(i=1;i<(numPoints);i++) xArray.push(Math.round(minX+xDistance*i));
        return xArray;
    };
    this.generateD = function() {
      let xArr = this.getXCoords();
      let dArr = new Array();
      
      for(j=0;j<xArr.length;j++) {
        dArr.push (
        "M "+xArr[j] + " " + yStart + " C " + xArr[j] + " " 
        + this.ctrlPoint1Y  + "  " + this.ctrlPoint2[0] + " " + this.ctrlPoint2[1] 
        + "  " + this.finalPoint[0] + " " + this.finalPoint[1]       
        );
      }
    return dArr;
    };
    this.addLines = function(wrapperId) {
      let dArr = this.generateD();
      this.wrapperId = wrapperId;
      
      dArr.forEach(function(item){
        $('#'+wrapperId).append(
          '<path class="glowLine" d="'+item+'" transform="translate(-250,-280)"/></path>'
        );
      });
      
      
    };
}

let u = new UnionSkeleton(218,225,337,60,4);
u.addLines('wr');

$("#cont").html($("#cont").html());