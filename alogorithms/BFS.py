class Vertex:
    def __init__(self,name,data):
        self.name = name
        self.neigbhours = []
        self.visited = False
        self.previousVertex = None
        self.data = data

class BreadFirstSerach:
    def bfs(self,vertex):
        q = list()
        vertex.visited = True
        q.append(vertex)
        while q:
            actual = q.pop(0)
            print(actual.name,actual.data)
            for v in actual.neigbhours:
                if not v.visited:
                    v.visited = True
                    q.append(v)

class DepthFirstSearch:
    def dfs(self,vertex):
        s = list()
        vertex.visited = True
        s.append(vertex)
        while s:
            actual = q.pop()
            print(actual.name,actual.data)
            for v in actual.neigbhours:
                if not v.visited:
                    v.visited = True
                    s.append(v)