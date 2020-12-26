class OrgChart {
  
}

class Team {
  
}

class UnionSkeleton { 
    constructor (xCenter, yStart, width, height, employeeArray,teamLeadCoords,wrapperId) {
    this.xCenter = xCenter
    this.yStart = yStart;
    this.xStart = 0;
    this.width = width;
    this.height = height
    this.employeeArray = employeeArray;
    this.numPoints = this.employeeArray.length;
    this.isEven = true;
    this.finalPoint = [xCenter,(yStart-height)];
    this.ctrlPoint1Y = (yStart-height+10);
    this.ctrlPoint2 = [xCenter,Math.round(-1*height/1.2+yStart+height)];
    this.wrapperId = wrapperId;
    this.xCoords = [];
    this.teamLeadCoords = teamLeadCoords;
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
        for(let i=1;i<(this.numPoints);i++) {
          this.xCoords.push(Math.round(minX+xDistance*i));
        }
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

class PersonCircles {
    constructor(skel,parNum,radius){
      this.xCoords = skel.xCoords;
      this.xCenter = skel.xCenter;
      this.yStart = skel.yStart;
      this.width = skel.width; 
      this.height = skel.height;
      this.employeeArray = skel.employeeArray;
      this.numCircles = skel.numPoints;
      this.wrapperId = skel.wrapperId;
      this.teamLeadCoords = skel.teamLeadCoords;
      this.radius = radius;
      this.parNum = parNum;
    }
  
    connectParent(){
      let wid = this.wrapperId;
      let parNum = this.parNum;
      let xConnStart = this.teamLeadCoords[parNum][0];
      let yConnStart = this.teamLeadCoords[parNum][1];
      let xConnEnd = this.xCenter;
      let yConnEnd = (this.yStart-220-this.radius-this.height);
         $('#'+wid).append(
          '<path class="glowLine" d="'+
           "M "+ xConnEnd + " " + yConnEnd +
           "L "+ xConnStart + " " + (yConnStart+26) +
           "L "+ xConnStart + " " + (yConnStart-26) +
           "'"+'transform="translate(0,0)"/></path>'
        );
    }
  
    addCircles() {
      let wid = this.wrapperId;
      let yStart = this.yStart;
      let radius = this.radius;
      //console.log(yStart);
      let pointNum = 0;
      let employeeArray = this.employeeArray;
        this.xCoords.forEach(function(item){
          if ((employeeArray[pointNum] == 0) || isNaN(employeeArray[pointNum])) {
            $('#'+wid).append(
              '<circle class="pCircle" cx="'+item+'" cy="'+(yStart-200)+'" r="'+radius+'"/>'
            );
          }
          pointNum++;
        });
        $('#'+wid).append(
          '<circle class="pCircle" cx="'+this.xCenter+'" cy="'+(yStart-220-this.radius-this.height)+'" r="'+radius+'"/>'
        );
    }
  
    getTLCoords() {
      let tlCoords = [];
      let yStart = this.yStart;
      let pointNum = 0;
      let employeeArray = this.employeeArray;
        this.xCoords.forEach(function(item){
          if ((employeeArray[pointNum] == 0) || isNaN(employeeArray[pointNum])) {    
          } else tlCoords.push([item,(yStart-200)]);
          pointNum++;
        });      
      return tlCoords;
    }
}

let employeeArray1 = [0,4,0,5,0,0];
let employeeArray2 = [0,0,0,0];
let employeeArray3 = [0,0,0,0,0,0];


// max 6 employees for width 337

let skel1 = new UnionSkeleton(218,290,337,80,employeeArray1,null,'wr');
skel1.addLines();

let circ1 = new PersonCircles(skel1,null,26);
//circ1.connectParent();
tlCoords1 = circ1.getTLCoords();
circ1.addCircles();

////////////////////////////////////////

let skel2 = new UnionSkeleton(100,520,337,80,employeeArray2,tlCoords1,'wr');
skel2.addLines();

let circ2 = new PersonCircles(skel2,0,26);
circ2.connectParent();
circ2.addCircles();

////////////////////////////////////////

let skel3 = new UnionSkeleton(550,520,337,80,employeeArray3,tlCoords1,'wr');
skel3.addLines();

let circ3 = new PersonCircles(skel3,1,26);
circ3.connectParent();
circ3.addCircles();




$("#cont").html($("#cont").html());
