file = File.open("data.txt")
file_data = file.read().split('')
file_data.each_with_index{|ch, index| 
    if index > 4 # start form 5th index
        start_index = index - 4 
        end_index= index - 1 
        sliced = file_data.slice(start_index..end_index) # slice it
        if sliced.uniq.length == sliced.length # check if in slicesd array arent any duplicates
            print("Character: " + ch, "Index: " + index.to_s)
            exit
        end
    end
}
