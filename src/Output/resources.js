

var corpus =
  `All angry about the bullshit. This bullshit has me whack. All black beyond the slime. The blackness that surrounds me. The evil this has laid on me. This evil black slime around me. You piece of demon work. You piece of slime. At night I lay awake. My heart stirs and sinks. My heart sinks at the disappointment. This disappointment is unbearable. The disappointment sinks my heart. My heart is heavy with grief. There is no way out. The sinning doesnt stop. Am I the victim or the victor.Is happy so abstract. Abstraction of happiness. Totally splintering beside the fire that burns.The fire that burns within me. The fun is vanishing. I see darkness everywhere. Totally rabid on this earth. I find dull inspiration. The inspiration is done. Flickering restless. Unreliable bullshit and my heart sinks heavy. I invoke the gods of yoke. I invoke the gods of consumerism. I invoke the gods of bullshit. I invoke the gods of let this bullshit work. I violate wanting rats below the clouds. Poisonous within the scope. Totally rabid with bullshit. I eat this black disaster bullshit. I invoke invisible meaning. Tighten up your wig. Tighten up your standards. Your standards are meaningless to me.Your standards are wavering restless. Dismayed I was. Dismayed I was to discover. Dismayed I was to uncover. Only to find that it disintegrates. Only to find that it breaks. Only to find that I am not the first. I fiddled and tried to no avail. I fiddled and tried. Exploding apple trees have more order than this. Exploding apple trees better built. Maybe ought to travel the seven seas. Maybe ought to give up and leave. To find another issue as bad as this. To find another problem as bad as this. To find another anything to up my hopes. In case you were wondering why. In case you were wondering. Infuriating to the core. Infuriating and unwielding. I call bullshit and you answer. Super crappyfragilisticexpeatrocious. Super crappyfragilisticexpeatrocious. What a burning ring of fire. Burning ring of fire. Throw it away. Throw it all away. Throw it out. Postmodernism in its grasp. Postmodernism in my own grasp. Fifty shades of pissed off. Fifty shades of broken hearted. Fifty shades of irritiated and on the brink. Fifty shades infuriating. Put it where the sun dont shine.`;

  var List0 = new Array (
    "All",
    "All",
    "All",
    "Weird and",
    "Strange and",
    "Dark and",
    "Sinful and",
    "Sinister and",
    "Evil and",
    "Strangely",
    "Totally",
    "Quite",
    "So",
    "So",
    "So",
    "I am",
    "We are",
    "Very"
  );

  var List1 = new Array(
    "dark",
    "quiet",
    "angry",
    "happy",
    "numb",
    "brilliant",
    "mournful",
    "black",
    "murky",
    "huge",
    "tiny",
    "big",
    "grotesque",
    "mammoth",
    "invisible",
    "evil",
    "scary",
    "quaking",
    "vaporous",
    "rabid",
    "poisonous",
    "odorous",
    "splintering",
    "transparent",
    "heavy",
    "dull",
    "dank",
    "blue",
    "yellow",
    "musty",
    "damp",
    "cold",
    "hot",
    "arid",
    "dry",
    "dream-like",
    "sinning",
    "sticky",
    "wanting"
  );

  var List2 = new Array(
    "on",
    "in",
    "beneath",
    "among",
    "below",
    "above",
    "under",
    "about",
    "near",
    "beside",
    "within",
    "beyond",
    "before",
    "behind",
    "against",
    "over"
  );

  var List3 = [
    "rain",
    "sky",
    "earth",
    "fire",
    "water",
    "air",
    "shadows",
    "slime",
    "mist",
    "fog",
    "clouds",
    "mud",
    "towers",
    "land",
    "wind",
    "sea",
    "trees",
    "gods",
    "vapors",
    "spirits",
    "flowers",
    "ground",
    "flock",
    "light",
    "tomb",
    "grave",
    "dream",
    "dreamscape",
    "bullshit",
    "virgin"
  ];

  var List4 = ["I", "We", "You"];

  var List5 = [
    "beat",
    "breed",
    "divine",
    "eat",
    "envision",
    "feel",
    "gather",
    "grasp",
    "poke",
    "prod",
    "examine",
    "absorb",
    "excrete",
    "transform",
    "bend",
    "summon",
    "conjure",
    "battle",
    "ensnare",
    "invoke",
    "create",
    "command",
    "expel",
    "rotate",
    "draw",
    "destroy",
    "dispel",
    "extort",
    "condemn",
    "confound",
    "condone",
    "converse with",
    "speak to",
    "stone",
    "sense",
    "smell",
    "taste",
    "meet",
    "find",
    "see",
    "dream of",
    "poke",
    "prod",
    "violate",
    "stroke",
    "pull",
    "grind",
    "shove",
    "enjoy",
    "swallow",
    "spread",
    "stretch",
    "smear"
  ];

  var List6 = [
    "toads",
    "bugs",
    "men",
    "women",
    "sirens",
    "elves",
    "witches",
    "evil",
    "animals",
    "snakes",
    "faces",
    "impressions",
    "fears",
    "monsters",
    "rabbits",
    "cats",
    "dogs",
    "weirdness",
    "children",
    "goats",
    "lights",
    "sounds",
    "flames",
    "whorls",
    "demons",
    "devils",
    "witches",
    "ghosts",
    "claws",
    "fangs",
    "teeth",
    "noses",
    "hands",
    "feet",
    "eyes",
    "tongues",
    "brains",
    "leeches",
    "vampires",
    "rats",
    "ghouls",
    "spirits",
    "wraiths",
    "vapors",
    "balls",
    "diamonds",
    "gems",
    "shivas",
    "knives",
    "keys",
    "hooks",
    "snares",
    "eggs",
    "tentacles",
    "spells",
    "bones",
    "meaning",
    "illusions",
    "thoughts",
    "delusions",
    "sensations",
    "graves",
    "tomb stones",
    "icons",
    "eruptions",
    "disasters",
    "inspirations",
    "idiots",
    "rubes",
    "dreams",
    "fragments",
    "symbols",
    "visions",
    "signs",
    "virgins"
  ];

  var List7 = [
    "Alass!",
    "Alack!",
    "Alass, Alack!",
    "Zounds!",
    "Ahhh!",
    "Atone!",
    "Repent!",
    "Beware!",
    "Awake!",
    "God!",
    "Oh God!",
    "Can you dig it?",
    "Word!",
    "Bizarre!",
    "Intense!",
    "Dig it!",
    "Way cool!",
    "Awaken, awaken!",
    "Awaken!",
    "Alass, alack!",
    "Take cover!",
    "Be watchful.",
    "Be luminous.",
    "Heavy!",
    "Be transparent.",
    "Damn!",
    "Whoa!",
    "Tighten up your wig!",
    "Crazy!",
    "I reach!",
    "We Reach!",
    "Yo!",
    "Be wary!",
    "Be aware!",
    "Awaken!"
  ];

  var List8 = [
    "King",
    "Queen",
    "Knave",
    "Fool",
    "Knight",
    "day",
    "life",
    "night",
    "day",
    "feeling",
    "pleasure",
    "sin",
    "thought",
    "vision",
    "inspiration",
    "fun",
    "heat",
    "passion",
    "insanity",
    "evil",
    "demon",
    "devil",
    "twilight",
    "end",
    "birth",
    "lust",
    "sin",
    "bitch",
    "bastard",
    "stink"
  ];

  var List9 = [
    "will go",
    "is going",
    "is gone",
    "has gone",
    "will vanish",
    "is vanishing",
    "has vanished",
    "will die",
    "is dying",
    "has died",
    "shall flee",
    "is fleeing",
    "has fled",
    "will come",
    "will come again",
    "is coming",
    "has come",
    "is no more",
    "is done",
    "is over",
    "was hard",
    "is hard",
    "continues",
    "never ends",
    "keeps going",
    "must continue",
    "gets weird"
  ];

var renderPoem;
var lexicon;
var input;
var inputS;
var tokenized;


export default state => {
  input = state;


  //RANDOMIZE DOESNT WORK IN PICK FX. JUST SHOWS FIRST ITEM OF ARRAY
  function Pick(List) {
    var word = List[Math.floor(Math.random()*List.length)];
    return word;
}
  function Line1() {
    return Pick(List0) + " " + Pick(List1) + " " + Pick(List2) + " ";
  }
  function Line2() {
    return Pick(List3) + " " + Pick(List4) + " " + Pick(List5);
  }

// inputS.push(window.RiString(input));
inputS = window.RiString(input);
// tokenized = window.RiTa.tokenize(inputS); //tokenize the input to break it up
// var lastWord = tokenized[tokenized.length -1] //get last word of the input array
// var rhymed = window.RiTa.rhymes(lastWord); //rhyme it
var rm = new window.RiMarkov(4);
rm.loadText(corpus);
var sentences = rm.generateSentences(10);



  //   var words = inputS.words();
  //   var pos = inputS.pos();
  //   var renderPoem = " ";
  //
  //   for (var i = 0; i < words.length; i++) {
  //     if (/nn.*/.test(pos[i])) {
  //       renderPoem += lexicon.randomWord(pos[i]);
  //     } else {
  //       // if (pos[i] === 'nnp') {
  //       //   renderPoem+=words[i];
  //       // }
  //       // else if (pos[i] === 'vbp' ) {
  //       //   renderPoem += lexicon.randomWord(pos[i]);
  //       // }
  //       renderPoem += words[i];
  //     }
  //     renderPoem += " ";
  //   }
  // }

  var line1 = Line1();
  var line2 = Line2();
  var line3 = inputS._text;
 renderPoem = `${inputS._text} ${line1} ${line2} ${line3}  ${sentences}`;
  return {
    inputS,
    renderPoem

  };
}
