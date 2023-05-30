String.prototype.cliche = function () {
  const cliche = ["lock and load", "touch base", "open the kimono"];
  for (let i = 0; i < cliche.length; i++) {
    const index = this.indexOf(cliche[i]);
    if (index >= 0) {
      return true;
    }
  }
  return false;
};

const sentences = [
  "I'll send my car around to pick you up.",
  "Let's touch base in the morning and see where we are",
  "We don't want to open the kimono, we just want to inform them.",
];

for (let i = 0; i < sentences.length; i++) {
  if (sentences[i].cliche()) {
    console.log(`CLICHE ALERT: ${sentences[i]}`);
  }
}
