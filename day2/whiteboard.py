# Find Middle Number
# Given a number (n) and an array of numbers (num_list) as input to a function, 
# return True if the number is greater than the middle number of the array. 
# Return False if the number is less than the middle number of the array.
# Example Input: n = 6, array = [3,5,8,10]
# Example Output: True
# Example Input: n = 105, array = [10,30,44,22,100]
# Example Output: True

def middle(n, num_list):
  return True if n > num_list[(len(num_list) // 2) - 1] else False

print(middle(6, [3,5,8,10]))
print(middle(105,[10,30,44,22,100]))