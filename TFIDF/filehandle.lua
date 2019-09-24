print("Welcome to my tf-idf score based file ranking program")
print("Please load your .txt files in the same directory as Lua files")

print("Enter the number of input files")
file_number=io.read() --read number of files from user

--Create two tables:
--one for file name, whose key is simply integers and value is name of file
--and another for file contents, whose key is file name and value is document content
file_name_table={}
file_content_table={}

--File Handle and Table Assignment
for i=1, file_number do 
	print(string.format("Enter the name of file %d",i))--Instruction
	file_name=io.read() --read file name from user (assumes user is entering correct file name, else program crashes)
	file_name_table[i]=file_name --store the file name in an array/lua table
	local open_file=io.open(file_name) --open the user entered file
	local read_file=open_file:read("*all") --read everything from the opened file
	file_content_table[file_name_table[i]]=string.upper(read_file) --save file content to file_content_table using file_name_table's key and value
end
