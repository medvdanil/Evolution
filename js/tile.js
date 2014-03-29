function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};
Tile.prototype.returnFinal = function () {
  return "svsddfwse";
};
Tile.prototype.img = function () {
    var a = this.value;
    return ((23263 + a * 5 + a % 100)+a*a+1255133*a+1230000333);
};
