file = File.open("data.txt")
file_data = file.readlines.map(&:chomp).map{|x| x.split("").map{|y| y.to_i} }
sum = 0
file_data.each_with_index {|x, row|
        x.each_with_index { |y, column|
            unless column == 0 || column == (x.length - 1) || row == 0 || row == (file_data.length - 1)
                left = x.slice(0..(column-1))
                right = x.slice((column+1)..-1)
                column_trees = file_data.map{|z| z[column]}
                top = column_trees.slice(0..(row-1))
                down = column_trees.slice((row+1)..-1)
                visible = left.all?{|a| a < y} || right.all?{|a| a < y} || top.all?{|a| a < y} || down.all?{|a| a < y};
                if visible
                    sum += 1
                end
            else
                sum += 1 
            end
        }
    }

print(sum)
