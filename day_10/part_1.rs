use std::fs;

fn main() {
    println!("In file {}", "data.txt");
    
    let file = fs::read_to_string("data.txt").expect("Cant read");
    let lines = file.lines();
    let mut _cycle: i32 = 1;
    let mut _x: i32 = 1;
    for elem in lines.into_iter() {
        if elem.starts_with("addx") {
            let mut splited = elem.split(" ");
            let number = splited.nth(1);
            let as_number = number.unwrap().parse::<i32>().unwrap();
            if [20, 60, 100, 140, 180, 220].contains(&_cycle) {
                println!("{}", _cycle * _x);
            };
            _cycle += 1;
            if [20, 60, 100, 140, 180, 220].contains(&_cycle) {
                println!("{}", _cycle * _x);
            };
            _cycle += 1;
            _x += as_number;
            // println!("{}", as_number);
        }
        if elem == "noop" {
            if [20, 60, 100, 140, 180, 220].contains(&_cycle) {
                println!("{}", _cycle * _x);
            }
            _cycle += 1;
    }
}
}
