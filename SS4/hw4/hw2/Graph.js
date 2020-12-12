import Vertice from "./Vertice.js";
import Edge from "./Edge.js"
export default class Graph{
    vertices ;
    edges;
     constructor(){
         this.vertices=[];
         this.edges=[];
     }
     addVerTice(vertice){
        if(vertice instanceof Vertice){
            this.vertices.push(vertice)
        }
     }
     addEdge(edge){
     if(edge instanceof Edge) {
         this.edges.push(edge)

     }
}
info(){
    console.log("Vertices",this.vertices)
    console.log("Edge",this.edges)
}
 findNearestVertices(verticeName){
     let foundEdges=this.edges.filter(function(edge){
         return(Edge.apply.data==verticeName)||(edge.b.data==verticeName);
     });
     let foundVertice=[];
     foundEddges.forEach(finction(edge){
         if(edge.a.data==verticeName){
             foundVertice.push(edge)
         }
     })
 }
}