use std::fs;

fn main() {
    println!("In file {}", "data.txt");
    
    let file = fs::read_to_string("data.txt").expect("Cant read");
    let lines = file.lines();
    let mut _cycle: i32 = 1;
    let mut _x: i32 = 1;
    let mut screen = "".to_owned();
    for elem in lines.into_iter() {
        if elem.starts_with("addx") {
            for n in 0..2 {
                if ((_cycle - 1) % 40 >= (_x - 1)) && ((_cycle - 1) % 40 <= (_x + 1)) {
                    screen += "#"
                } else {
                    screen += "."
                }
                if (_cycle) % 40 == 0 {
                    println!("{} {}", _cycle, _x);
                    screen += "\n"
                }
                _cycle += 1;
            }
            let mut splited = elem.split(" ");
            let number = splited.nth(1);
            let as_number = number.unwrap().parse::<i32>().unwrap();
            _x += as_number;
        }
        if elem == "noop" {
            if ((_cycle - 1) % 40 >= (_x - 1)) && ((_cycle - 1) % 40 <= (_x + 1)) {
                screen += "#"
            } else {
                screen += "."
            }
            if (_cycle ) % 40 == 0 {
                screen += "\n"
            }
            _cycle += 1;
    }
}
println!("{}", screen)
}
