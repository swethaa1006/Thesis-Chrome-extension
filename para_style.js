
function checkContent() {
  paragraphsH1 = document.getElementsByTagName('h1'); //fetching h1
  paragraphsDiv = document.getElementsByTagName('div'); //fetching h1
  paragraphsH2 = document.getElementsByTagName('h2'); //fetching h2
  paragraphsH6 = document.getElementsByTagName('h6'); //fetching h6
  paragraphsSpan = document.getElementsByTagName('span'); //fetching span
  paragraphs_p = document.getElementsByTagName('p'); //fetching p
  paragraphs_nav = document.getElementById('masthead'); //fetching masthead
  var links = document.getElementsByTagName("link"); //fetching link to change media to all
  paragraphsH3 = document.getElementsByTagName('h3'); //fetching h3
  paragraphsul = document.getElementsByTagName('ul'); //fetching ul
  paragraphsli = document.getElementsByTagName('li'); //fetching li
  a = document.getElementsByTagName('a');

  for (elt of paragraphsH2) {
    var s = elt.innerText;
    s = paragraphStyle(s);
    if (s.length>0) {
      return s;
    }
  }
  for (elt of a) {
    var s = elt.innerText;
    s = paragraphStyle(s);
    if (s.length>0) {
      return s;
    }
  }
  for (elt of paragraphsH3) {
    var s = elt.innerText;
    s = paragraphStyle(s);
    if (s.length>0) {
      return s;
    }
  }
  for (elt of paragraphsH6) {
    var s = elt.innerText;
    s = paragraphStyle(s);
    if (s.length>0) {
      return s;
    }
  }
  for (elt of paragraphsSpan) {
    var s = elt.innerText;
    s = paragraphStyle(s);
    if (s.length>0) {
      return s;
    }
  }
  for (elt of paragraphsli) {
    var s = elt.innerText;
    s = paragraphStyle(s);
    if (s.length>0) {
      return s;
    }
  }
  for (elt of paragraphs_p) {
    var s = elt.innerText;
    s = paragraphStyle(s);
    if (s.length>0) {
      return s;
    }
  }
}


// function to select words
function paragraphStyle(paragraph) {
    var randomNum = 1;

    s = paragraph;

    if ((/\b (producers?|production?)\b/gi).test(s)) {
      s = s.replace(/\b (producers?|production?)\b/gi, replacerBold);
      randomNum = 0;
    } else if ((/\b (type ?setters?)\b/gi).test(s)) {
      randomNum = 0;
      s = s.replace(/\b (type ?setters?)\b/gi, replacerBold);
      console.log(s);
    }else if ((/\b (Avant-garde|Surrealism|Dada)\b/gi).test(s)) {
      s = s.replace(/\b (Avant-garde|Surrealism|Dada)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (devices?)\b/gi).test(s)) {
      s = s.replace(/\b (devices?)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (cultural meaning)\b/gi).test(s)) {
      s = s.replace(/\b (cultural meaning)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (forms?)\b/gi).test(s)) {
      s = s.replace(/\b (forms?)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (communication)\b/gi).test(s)) {
      s = s.replace(/\b (communication)\b/gi, replacerBold);
      randomNum = 0;
    // }else if ((/\b (means)\b/gi).test(s)) {
    //   s = s.replace(/\b (means)\b/gi, replacer_color);
    //   randomNum = 0;
    }else if ((/\b (physical life|physical activity)\b/gi).test(s)) {
      s = s.replace(/\b (physical life|physical activity)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (manufactured|printing|making)\b/gi).test(s)) {
      s = s.replace(/\b (manufactured|printing|making)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (masters)\b/gi).test(s)) {
      s = s.replace(/\b (masters)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (tools?)\b/gi).test(s)) {
      s = s.replace(/\b (tools?)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (experimental)\b/gi).test(s)) {
      s = s.replace(/\b (experimental)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (medias?)\b/gi).test(s)) {
      s = s.replace(/\b (medias?)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (desk-?top)\b/gi).test(s)) {
      s = s.replace(/\b (desk-?top)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (designer|neutral)\b/gi).test(s)) {//designer
      s = s.replace(/\b (designer|neutral)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (concept)\b/gi).test(s)) {
      s = s.replace(/\b (concept)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (creation|adopt)\b/gi).test(s)) {//designer
      s = s.replace(/\b (creation|adopt)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (ideas|imagining)\b/gi).test(s)) {
      s = s.replace(/\b (ideas|imagining)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b(visual|author)\b/gi).test(s)) {//designer
      s = s.replace(/\b (visual|author)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (theory)\b/gi).test(s)) {
      randomNum = 0;
      s = s.replace(/\b (theory)\b/gi, replacerBold);
    }else if ((/\b (artist|poet|institution)\b/gi).test(s)) {//designer
      s = s.replace(/\b (artist|poet|institution)\b/gi, replacerBold);
      randomNum = 0;
    }else if ((/\b (slaves)\b/gi).test(s)) {
      s = s.replace(/\b (slaves)\b/gi, replacerBold);
    }else if(randomNum==1){
      s="";
      // console.log(s.length,s);
    }
    console.log(s,paragraph);
    return s;
  }
