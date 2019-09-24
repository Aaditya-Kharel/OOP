require "filehandle"

--User Inputs Search Term
print("Enter your search term")
local search_term=io.read() --read and assign it to search_term
search_term=string.upper(search_term)

--This mysplit function is taken from stackoverflow
--The function tokenizes the string/file content
function mysplit(inputstr, sep)
        if sep == nil then
                sep = "%s"
        end
        local t={} ; i=1
        for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
                t[i] = str
                i = i + 1
        end --end for loop
        return t
end --end function

--Create two tables
--One for word frequency, whose value is frequency count in the doc
--Another for total word count, who value is total words in the doc
document_frequency_count={} -- number of time the search word appers in a particular document
document_total_word={} -- total number of words in a particular document

--This block tokenizes file content string and looks for
--total frequency of word appering in a given document
--including total word count for that document
for i=1, file_number do --iterate through all files
	document_frequency_count[i]=0
	document_total_word[i]=0
	local breakTheWords=file_content_table[file_name_table[i]] -- input content as a string
	breakTheWords=mysplit(breakTheWords,' ')--tokenize the string
	for k,v in ipairs(breakTheWords) do
		if search_term==v then 
			document_frequency_count[i]=document_frequency_count[i]+1	
		end
		document_total_word[i]=document_total_word[i]+1
	end
end


--In how many documents is the search term present ?
--This answer is stored in the variable word_is_present
local word_is_present=0
for i=1, file_number do
	if document_frequency_count[i]~=0 then --if search term does not apper, we don't care
		word_is_present=word_is_present+1 --in how many documents is the search word present
	end
end


--Calculate inverse document frequency(idf)
local idf
	if word_is_present~=0 then --if word is present in a document
		idf=math.log(file_number/word_is_present)
	else --if word_is_present==0 then we don't want to divide by zero
		idf=0
	end

--Calculate tf & tf-idf and store tf-idf in a table
tfidf_table={}

for i=1, file_number do
local tf=document_frequency_count[i]/document_total_word[i]
local tf_idf=tf*idf
tfidf_table[i]=tf_idf --store tfidf in table
--print(tf_idf)
end

--Print tfidf table before sorting or according to input file order
print("The tf-idf table for the search term ",search_term,"before sorting:")
for i=1, file_number do
	print("The file",file_name_table[i],"has ", "tf-idf score of", tfidf_table[i])
end

--Creating a table with key as tfidf score and value as file_name
tfidf_table_withfile={}
for  i=1, file_number do
	tfidf_table_withfile[tfidf_table[i]]=file_name_table[i]
end


--Bubble sorting the tfidf table
for i=1, file_number do
	for j=1, file_number-i do
		if (tfidf_table[j]<tfidf_table[j+1]) then
			tfidf_table[j]=tfidf_table[j]+tfidf_table[j+1]
			tfidf_table[j+1]=tfidf_table[j]-tfidf_table[j+1]
			tfidf_table[j]=tfidf_table[j]-tfidf_table[j+1]
		end
	end
end

print("\n")
print("The tf-idf table for the search term ",search_term,"after sorting:")
for i=1, file_number do 
print("The file",tfidf_table_withfile[tfidf_table[i]],"has ", "tf-idf score of", tfidf_table[i] )
end
print("\n")
print("**Note: The sorting displays correct file names only when the tf-idf scores are all unique.**")
print("**Thank you for using my tf-idf calculator in Lua**")








