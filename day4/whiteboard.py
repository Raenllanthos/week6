# Move Zeros
# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
# Example:
# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Example Input: [0,0,11,2,3,4]
# Example Output: [11,2,3,4,0,0]

# devon's answer
def move(arr):
    for x in arr:
        if x == 0:
            arr.append(arr.pop(arr.index(x)))
    return arr

print(move([0,1,0,3,12]))