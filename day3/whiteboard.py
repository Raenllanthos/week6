# Check Consecutive
# Create a function that given a list of numbers as an input (nums_list) return True if the numbers are in consecutive order, return False if not.
# Example Input: [1,2,3,4,5]
# Example Output: True
# Example Input: [2,4,6,8,10]
# Example Output: False
# Example Input: [10,11,12,13,14]
# Example Output: True

# Mike's answer
# def consecutiveNumbers(num_list):  
#     maximum = max(num_list)
#     if sum(num_list) == maximum * (maximum+1) /2: 
#         return True
#     return False 

def check(numlist):
    for x in range(len(numlist)):
        if (numlist[x] + 1) == numlist[x+1]:
            return True
        else:
            return False

print(check([1,2,3,4,5]))
print(check([2,3,4,7,10]))
print(check([10,11,12,13,14]))