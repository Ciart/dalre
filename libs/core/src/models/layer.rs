use rxrust::prelude::*;

#[derive(Debug, Copy, Clone)]
pub struct Layer {
    width: i32,
    height: i32
}

impl Layer {
    pub fn new(width: i32, height: i32) -> Layer {
        Layer {
            width,
            height,
        }
    }

    let a = observable::of()

    pub fn resize(&mut self, width: i32, height: i32) {
        self.width = width;
        self.height = height;
    }
}

impl Observable for Layer {

}
