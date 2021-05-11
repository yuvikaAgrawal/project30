class SlingShot{
    constructor(bodyA,pointB){
        var option={
        bodyA: bodyA,
        pointB:pointB,
        length:20,
        stiffness:0.07   
        }
        this.pointB=pointB
        this.sling = Constraint.create(option);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body;

    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4)
            stroke("blue")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}