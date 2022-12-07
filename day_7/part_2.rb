# LOL the craziest challange
file = File.open("data.txt")
file_system = {} # all files in one hash
file_data = file.readlines.map(&:chomp)
curr_dir = ""

file_data.each { |s|
    if s.start_with?("$")
        if s.start_with?("$ cd")
            path = s.scan(/\$ cd ([a-z\/\.]+)/)[0][0] # get cd path
            if path == ".."
                curr_dir = curr_dir.split("/").slice(0..-2).join("/")
            elsif path == "/"
                curr_dir = ""
            else
                if curr_dir != ""
                    curr_dir += ("/" + path)
                else 
                    curr_dir = path
                end
            end 
        end
    elsif s.start_with?("dir")
        path = s.scan(/dir ([a-z]+)/)[0][0] # get dir folder name
        if curr_dir == "" 
            file_system[path] = {}
        else 
            folder = file_system
            curr_dir.split("/").each {|dir|
                folder = folder[dir] 
            }
            folder[path] = {}
        end
    else 
        match = s.scan(/(\d+) (\S+)/)[0] # file check
        folder = file_system
        curr_dir.split("/").each {|dir| 
            folder = folder[dir] 
        }
        folder[match[1]] = match[0].to_i
    end
}
$sizes = []
def checkSize (key, value)
    if value.class == Integer
        $sume += value
        return value
    elsif value.respond_to?(:to_hash)
        folder_size = 0
        value.each_pair {|key, value| folder_size = folder_size + checkSize(key, value) }
        if folder_size > 4125990
            $sizes.push(folder_size) # add folder size to array
        end
        return folder_size
    end
end
file_system.each_pair{|key, value| checkSize(key, value) }
print($sizes.sort)
