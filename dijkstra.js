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

}
