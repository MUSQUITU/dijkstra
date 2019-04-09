function GRAPH() {
    const vertices = []
    GRAPH(numVertices)
      vertices = new [numVertices][numVertices]

      function makeEdge(vert1, vert2,time){
        vertices[vert1][vert2] = time
        vertices[vert2][vert2] = time
      }
      function removeEdge(vert1, vert2) {
        vertices[vert1][vert2] = time
        vertices[vert2][vert2] = time
      }
      function custo(vert1,vert2) {
        return vertices[vert1][vert2]
      }
      //uma lista com o índice de todos os vértices conectados ao vértice dado.
      function getVizinho(vertex) {
        const vizinho = new Array()
          for(const i=0; i<vertices[vertex].lenght; i++)
              if(vertices[vertex][i]>0){
                vizinho.add(i)
              }
              return vizinho


      }
      
}
