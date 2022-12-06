file = File.open("data.txt")
file_data = file.read().split('')
file_data.each_with_index{|ch, index| 
    if index > 3
        start_index = index - 4 
        end_index= index - 1 
        sliced = file_data.slice(start_index..end_index)
        if sliced.uniq.length == sliced.length
            print("Character: " + ch, "Index: " + index.to_s)
            exit
        end
    end
}
