class Rope{
    constructor(bodyA,bodyB){
        var option ={
            bodyA : bodyA,
            bodyB : bodyB, 
            length : 100,
            stiffness : 0.04,
        }
      this.chain = Constraint.create(option)
    World.add(world, this.chain);
    }
    display(){
        var A = this.chain.bodyA.position 
        var B = this.chain.bodyB.position 
        push();
        strokeWeight(5)
        stroke("red");
        line(A.x,A.y,B.x,B.y)
        pop();
  }
}