class heap:
    def __init__(self,capacity):
        self.size = 0
        self.hAr = [None] * capacity
        self.capacity = capacity

    def insert(self,data):
        if self.size == self.capacity:
            return
        self.hAr[self.size] = data
        self.size = self.size + 1
        self.fixUp(self.size-1)

    def fixUp(self,index):
        parent = (index-1)//2
        if index > 0 and self.hAr[index][1] - self.hAr[index][0] > 0:
            if self.hAr[index][1] < self.hAr[parent][1]:
                self.hAr[index],self.hAr[parent] = self.hAr[parent],self.hAr[index]
            self.fixUp(parent)

    def getMin(self):
        return self.hAr[0]
    
    def pop(self):
        mini = self.getMin()
        s = self.size - 1
        self.hAr[0],self.hAr[s] = self.hAr[s],self.hAr[0]
        self.size = s
        self.fixDown(0)
        return mini

    def fixDown(self,index):
        left = (2*index) + 1
        right = (2*index) + 2
        lowest = index
        if left < self.size and self.hAr[left][1] < self.hAr[index][1]:
            lowest = left
        if right < self.size and self.hAr[right][1] < self.hAr[left][1]:
            lowest = right
        if index != lowest:
            if self.hAr[index][1] - self.hAr[index][0] > 0:
                self.hAr[index],self.hAr[lowest] = self.hAr[lowest],self.hAr[index]
            self.fixDown(lowest)

    def heap_sort(self):
        previoupeopletime = 0
        totalTime = 0 
        size = self.size
        while self.size > 0:
            p = self.pop()
            print(p)
            histime = (p[1]-p[0]) + previoupeopletime
            previoupeopletime = previoupeopletime + p[1] 
            totalTime = totalTime + histime
            print(histime,previoupeopletime)
        return totalTime//size

if __name__ == '__main__':
    #fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    customers = heap(n)

    for _ in range(n):
        customers.insert(list(map(int, input().rstrip().split())))

    result = customers.heap_sort()
    print(result)
    #fptr.write(str(result) + '\n')

    #fptr.close()

