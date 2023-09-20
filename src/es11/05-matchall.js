const regex = /\b(Apple)+\b/g;

const fruta = 'Apple, Banana, Apple, mariahuana';

for(let match of fruta.matchAll(regex)){
    console.log(match);
}