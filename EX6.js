EX6

var books=[
  { book: "Catcher in the Rye", readStatus: true, percent: 40},
  { book: "Animal Farm", readStatus: true, percent: 20}, 
  { book: "Solaris", readStatus: false, percent: 90}, 
  { book: "The Fall", readStatus: true, percent: 50}, 
  { book: "White Nights", readStatus: false, percent: 60} , 
  { book: "After Dark", readStatus: true, percent: 70}
]
var prcnts = [];
for (var i in books){
  if(books[i].readStatus){
   prcnts.push(books[i].percent)
  }
}
var sortedprcnts =prcnts.sort(function(a, b) {
  return b - a;
})
console.log(sortedprcnts)
 