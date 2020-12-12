import Graph from "./Graph.js";
import Vertice from "./Vertice.js";
import Edge from "./Edge.js";
let graph=new Graph()
let A = new Vertice("A")
let B = new Vertice("B")
let C = new Vertice("C")
let D = new Vertice("D")
let E = new Vertice("E")

let AB = new Edge(A,B)
let AC = new Edge(A,C)
let AE = new Edge(A,E)
let BD = new Edge(B,D)

 graph.addVerTice(A)
 graph.addVerTice(B)
 graph.addVerTice(C)
 graph.addVerTice(D)
 graph.addVerTice(E) 

 graph.addEdge(AB)
 graph.addEdge(AC)
 graph.addEdge(AE)
 graph.addEdge(BD)
console.log(typeof graph)
 graph.info()
 console.log(grap.findNear)