use super::layer::*;

#[derive(Debug, Copy, Clone)]
pub struct Document {
  width: i32,
  height: i32,
  layer: Layer
}

impl Document {
  pub fn new(width: i32, height: i32) -> Self {
    Document{
      width,
      height,
      layer: Layer::new(width, height)
    }
  }

  pub fn resize(&mut self, width: i32, height: i32) {
    self.width = width;
    self.height = height;
    self.layer.resize(width, height);
  }
}
