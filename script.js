/* .js files add interaction to your website */
var factList = [
  "Buy quality and make it last. Learning to avoid mass-produced, cheap fast fashion makes room in our closets and budgets for quality apparel from better brands.", 
  "Try made-to-order, custom clothing brands. They craft items with sustainable fabrics and release one collection at a time just to meet consumer demand.", 
  "Seek out clothing swaps, charity shops and thrift stores. Swap clothes with friends, and everyone can have a fresh wardrobe without waste.", 
  "Make sustainable fashion cool. Compliment acquaintances on clothes you've seen them wear before or can tell are homemade or vintage, instead of only when you see them wearing something new.", 
  "When you do wash clothes, follow care instructions. More and more ethical clothing brands also offer repair services."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
