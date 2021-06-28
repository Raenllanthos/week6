# Check if Number and its double exists
# Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
# More formally check if there exists two indices i and j such that :
# i != j
# 0 <= i, j < arr.length
# arr[i] == 2 * arr[j]
# Example 1:
# Input: arr = [10,2,5,3]
# Output: true
# Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
# Example 2:
# Input: arr = [7,1,14,11]
# Output: true
# Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
# Example 3:
# Input: arr = [3,1,7,11]
# Output: false
# Explanation: In this case does not exist N and M, such that N = 2 * M.

def doubles(arr):
    # return bool([i for i in arr if (2*i) in arr])
    return [True if i*2 in arr else False for i in arr]
    # for i in arr:
    #     j = 2 * i
    #     if j in arr:
    #         return True
    # return False
        

arr1 = [10,2,5,3]
arr2 = [7,1,14,11]
arr3 = [3,1,7,11]
print(doubles(arr1))
print(doubles(arr2))
print(doubles(arr3))