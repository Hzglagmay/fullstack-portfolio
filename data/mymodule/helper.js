
// data/mymodule/helper.js
module.exports = {
  iconPath(kind) {
    switch (kind) {
      case "github": return "/img/github.svg";
      case "computer": return "/img/computer.svg";
      case "image": return "/img/image.svg";
      default: return "/img/computer.svg";
    }
  },
  chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }
};
