file = File.open("data.txt")
file_data = file.readlines.map(&:chomp).map{|x| x.split("").map{|y| y.to_i} }
trees = []
def calculate (x, array)
    s = 0
    for y in array
        s += 1
        if x <= y
            break
        end 
    end
    return s
end
file_data.each_with_index {|x, row|
        x.each_with_index { |y, column|
            unless column == 0 || column == (x.length - 1) || row == 0 || row == (file_data.length - 1)
                left = calculate(y, x.slice(0..(column-1)).reverse())
                right = calculate(y, x.slice((column+1)..-1))
                column_trees = file_data.map{|z| z[column]}
                top = calculate(y, column_trees.slice(0..(row-1)).reverse())
                down = calculate(y, column_trees.slice((row+1)..-1))
                trees.push((left * right * top * down))
            end
        }
    }
print(trees.sort)
