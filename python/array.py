numbers = [1,2,100,3,4,5];
# print(numbers[0]);
# numbers[1]=200;
# print(numbers);

# for num in numbers:
#     print(num);
# for i in range(len(numbers)):
#     print(numbers[i])

# print(numbers[:-2]);
# print(numbers[2:]);

max = numbers[0];
for num in numbers:
    if num> max:
        max=num;

print(max);
