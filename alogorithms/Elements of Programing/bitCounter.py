def BitCounter(x):
    number_of_bits = 0
    binary = ""
    while x:
        number_of_bits += x & 1
        binary += str(x & 1)
        x >>= 1
    print(binary)
    return number_of_bits

#000000011110111001110001011
#10100011100111011110000000
print(BitCounter(110000000))
