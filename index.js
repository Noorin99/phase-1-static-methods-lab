class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, "");
  }

  static titleize(str) {
    const strToArr = str.split(" ");
    const result = strToArr.map((word) => {
      if (strToArr.indexOf(word) === 0) {
        return this.capitalize(word);
      }
      if (
        word !== "the" &&
        word !== "a" &&
        word !== "an" &&
        word !== "but" &&
        word !== "of" &&
        word !== "and" &&
        word !== "for" &&
        word !== "at" &&
        word !== "by" &&
        word !== "from"
      ) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return result.join(" ");
  }
}
