local mybag=require("./bag")
local bag1=mybag.new { }

print("Inserting the following elements to the bag container")

bag1:bag_insert(5); --insertion
bag1:bag_insert(5); --insertion
bag1:bag_insert(5); --insertion
bag1:bag_insert(10); --insertion
bag1:bag_insert(10); --insertion
bag1:bag_insert(29); --insertion
bag1:bag_insert(29); --insertion
bag1:bag_insert(29); --insertion
bag1:bag_insert(29); --insertion
bag1:bag_insert(2); --insertion
bag1:bag_insert(2); --insertion

bag1:bag_print() --Display bag elements
print('\n')

print("Deleting all occurences of the element 5")
bag1:bag_erase_all(5) --erase
bag1:bag_print() --print elements
print('\n')


print("Printing the bag elements")
bag1:bag_print() --print elements
print('\n')


print("Removing one instance of element 2", '\n')
bag1:bag_erase_one(2) --erase
bag1:bag_print() --print elements
print('\n')

print("Printing the bag elements", '\n')
bag1:bag_print() --print elements
print('\n')


print("The current total size of the bag: ", bag1:bag_size(), '\n')
print("The number of times number 29 occurs in the bag: ", bag1:bag_count(29), '\n')

print("All functions tested successfully!")
