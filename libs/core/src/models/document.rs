#[derive(Debug, Copy, Clone)]
pub struct Document {
  width: i32,
  height: i32
}

impl Document {
  pub fn new(width: i32, height: i32) -> Document {
    Document{
      width,
      height,
    }
  }
}