file = File.open("data.txt")
file_data = file.readlines.map(&:chomp)
numbers = file_data.index(" 1   2   3   4   5   6   7   8   9 ") # inducates border index
containers = []
containers_data = file_data.slice(0, numbers).map{ |s| " " + s + " "} # to easier regexes
mapped = containers_data.map{|s| s.scan(/((?<= )([A-Z\[\]]{3}| {3})(?= ))/)} # matches lines
mapped.each { |a| 
    a.each_with_index  { |b, bindex| 
        if b[0] != "   "
            if containers[bindex] == nil  # if index is null
                containers[bindex] = []   # create new array
            end
            containers[bindex].push(b[0].match(/(?<=\[)[A-Z](?=\])/)[0]) # use regex for: [X] => X
        end
    }
}
containers = containers.map{|c| c.reverse()} # reverses array
instuctions = file_data[(numbers + 2), file_data.length] # sokut instructions
instuctions.each { |i| 
    instuction_a = i.scan(/move (\d+) from (\d) to (\d)/)[0] # use regex for: move 20 from 2 to 3 => ["20", "2", "3"]
    amount = instuction_a[0].to_i # string to number: 20
    from = instuction_a[1].to_i # - : - 2
    to = instuction_a[2].to_i # - : - 3
    iterated = 0 # amount of items getted
    amount.times do
        iterated = iterated + 1
        element = containers[from-1].delete_at(-amount+iterated-1)) # # delete element with -x index
        containers[to-1].push(element) # add element
        end 
} 
print(containers.map{|a| a[-1]}.join("")) # snow it
