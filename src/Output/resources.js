

  var List0 = new Array (
    "All",
    "Weird and",
    "Strange and",
    "Dark and",
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
    "Very",
    "Disappointingly"
  );

  var List1 = new Array(
    "dark",
    "quiet",
    "angry",
    "numb",
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
    "fire.",
    "water.",
    "air.",
    "shadows.",
    "slime.",
    "mist.",
    "fog.",
    "clouds.",
    "mud.",
    "gods.",
    "vapors.",
    "spirits.",
    "ground.",
    "tomb.",
    "grave.",
    "bullshit.",
  ];

  var List4 = [ "You", "Why"];

  var List5 = [
    "beat",
    "breed",
    "eat",
    "envision",
    "feel",
    "excrete",
    "transform",
    "conjure",
    "battle",
    "ensnare",
    "invoke",
    "command",
    "expel",
    "destroy",
    "dispel",
    "extort",
    "condemn",
    "confound",
    "stone",
    "violate",
    "stroke",
    "pull",
    "grind",
    "shove",
    "swallow",
    "spread",
    "stretch",
    "smear"
  ];

  var List6 = [
    "men",
    "women",
    "sirens",
    "evil",
    "snakes",
    "faces",
    "impressions",
    "fears",
    "monsters",
    "weirdness",
    "flames",
    "whorls",
    "demons",
    "devils",
    "witches",
    "ghosts",
    "brains",
    "leeches",
    "vampires",
    "rats",
    "ghouls",
    "spirits",
    "wraiths",
    "vapors",
    "balls",
    "snares",
    "meaning",
    "illusions",
    "thoughts",
    "delusions",
    "sensations",
    "graves",
    "eruptions",
    "disasters",
    "idiots",
    "rubes",
    "virgins"
  ];

  var List7 = [
    "Atone!",
    "Repent!",
    "Beware!",
    "God!",
    "Oh God!",
    "Take cover!",
    "Be watchful.",
    "Be transparent.",
    "Damn!",
    "Damn!",
    "Damn!",
    "Damn!",
    "Crazy!",
    "Yo!",
    "Be wary!",
    "Be aware!",
  ];

  var List8 = [

    "Fool",
    "life",
    "night",
    "day",
    "feeling",
    "sin",
    "thought",
    "insanity",
    "evil",
    "demon",
    "devil",
    "end",
    "birth",
    "lust",
    "sin",
    "bitch",
    "bastard",
    "stink",
    "bitch",
    "end",
    "the end",
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
    "never ends",
    "must continue",
    "gets weird"
  ];

var renderPoem;

var input;
var inputS;
var lexicon;


export default state => {
  input = state;
  function Pick(List) {
    var word = List[Math.floor(Math.random()*List.length)];
    return word;  }
  function Line1() {
    return Pick(List0) + " " + Pick(List1) + " " + Pick(List2) + " the " + Pick(List3);

  }
  function Line2() {
    return Pick(List4) + " " + Pick(List5) + " " + Pick(List6);
  }
  function Line3() {
    return Pick(List7) + " " + Pick(List8) + " " + Pick(List9);
  }

// inputS.push(window.RiString(input));
inputS = window.RiString(input);
// tokenized = window.RiTa.tokenize(inputS); //tokenize the input to break it up
// var lastWord = tokenized[tokenized.length -1] //get last word of the input array
// var rhymed = window.RiTa.rhymes(lastWord); //rhyme it
var rm = new window.RiMarkov(3);
rm.loadText(corpus);
//var outputFirst;
var first = rm.generateSentences(1);
// function firstG(first) {
//   var firstS = window.RiString(first);
//   var words = firstS.words();
//   var pos = firstS.pos();
//   outputFirst = " ";
//     for (var i =0; i < words.length; i++) {
//         if (/nn.*/.test(pos[i])) {
//         outputFirst += window.RiTa.randomWord(pos[i]);
//       }
//       return outputFirst;
//       }
// }
var second = rm.generateSentences(1);
var third = rm.generateSentences(1);
var fourth = rm.generateSentences(1);
var fifth= rm.generateSentences(1);
var sixth = rm.generateSentences(1);
var seventh = rm.generateSentences(1);


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
  // function getAdjRhymes(word) {
  //   var rhymes = lexicon.rhymes(word);
  //   return .filter(rhymes, function(rhyme) {
  //     //  'jj' are (adjectives)
  //     return RiTa.getPosTags(rhyme)[0] === 'jj';
  //   });
  // }

  var line1 = Line1();
  var line2 = Line2();
  var line3 = Line3();
  var title = inputS._text + ".";
 renderPoem =`
 ${title}
 ${line1}

 ${fourth}

 ${fifth}

 ${title}

 ${first}
 ${second}
 ${third}
 ${sixth}
 ${seventh}
 `
;

  return {
    inputS,
    renderPoem,
  };
}

var corpus=
`
  This b.s. has me whack.
  This blackness that surrounds me.
  The evil this has laid on me.
  You piece of demon work.
  You piece of slime.
  My heart stirs and sinks.
  My heart sinks with disappointment.
  This disappointment unbears my heart.
  The disappointment sinks my heart.
  There is no way out.
   The pranking doesnt stop.
   Am I the victim or the victor.
   Is happy so abstract.
   Abstraction of happiness.
   Totally splintering beside the fire that burns.
   The fire that burns within me.
   The fun is vanishing.
   I see failure everywhere.
   Totally rabid on the earth.
   I find dull inspiration and inspiration dull.
   Flickering restless.
   Unreliable b.s. and my heart untethers.
   Invoke the gods of consumerism.
   Invoke the gods of bullshit.
   Invoke the gods of let this piece of shit work.
   I violate the wanting rats.
   Poison within its scope.
   Invoke invisible meaning.
   Tighten up your wig.
   Tighten up your standards.
   Dismayed I was.
   Dismayed I was to discover.
   Dismayed I was to uncover.
   Only to find that it disintegrates.
   Only to find that it breaks.
   Only to find that I am not the first.
   I fiddled and tried to no avail.
   I fiddled and tried and failed.
   Exploding trees branch into me.
   Maybe travel the seven seas and discover "good".
   Maybe ought to give up and leave.
   To find another issue as bad as this.
   To find another product as bad as this.
   To find another anything to up my hopes.
   In case you were wondering why.
   In case you were wondering.
   Infuriating to the core.
   Infuriating and unwielding.
   Super crappyfragilisticexpeatrocious.
   Super crappyfragilisticexpeatrocious.
   What a burning ring of fire.
   Throw it away.
   Throw it all away.
   Postmodernism in its grasp.
   Postmodernism in my own grasp.
   Fifty shades of pissed off.
   Fifty shades of broken hearted.
   Fifty shades of irritiated and on the brink.
   Fifty shades infuriating.
   Put it where the sun dont shine.
   Fifty shades of never again.
   Fifty shades of I should have known better.
  The course of love never did run smooth.
  But either it was different in blood.
  War, death, or sickness.
  Swift as a shadow, short as any dream.
  The jaws of darkness do devour me up.
  So quick bright things come to confusion.
  Of me you shall not win renown.
  I saw the snare, and I retired.
  You are not one to be desired.
  I know youre proud to bear your name.
  Your pride is yet no mate for mine.
  Too proud to care from whence I came.
  Some meekly dumbass you must find,
  And my disdain is my reply.
  You put strange memories in my head.
  But there was that slit across my throat.
  Which you had hardly cared to see.
  Indeed I heard one bitter word said meekly.
  The guilt of blood is at your door.
  You changed a wholesome heart to gall.
  You held your course without remorse.
  To make me trust my modest worth.
  And slew me with your noble birth.
  But sickening of a vague disease.
  You know so ill to deal with time.
  You needs must play such pranks as these.
  If Time be heavy on your hands.
  Are there no beggars at your gate.
  And let this foolish human go.
  So long had we in silence stood,
  Where not a pulse should beat but ours.
  And I might live, love, die alone!
  Far from the cruel and the cold.
  A paradise so pure and lonely.
  Would this be world enough for me?
  And, bursting into heartfelt tears.
  My dreams, have boded all too right.
  We part, forever part, tonight!
  I've seen my fondest hopes decay.
  Love not, love not.
  Things that are made to fade and fall away.
  You have but blossomed for a few short hours.
  Love not!
  Love not! the thing you love may change.
  The rosy lip may cease to smile on you.
  The heart still warmly beats, yet never true.
  Love not!
  Love not! the thing you love may die.
  Love not!

  And you've robbed my world of rest.
  It would have been a beauteous dream--if it had been no more!
  But I was sad, and felt no mirth.
  Do you call virtue your ungratefulness?


  How the dear waiting eyes.
  Watch me and love me yet.
  Sad home of broken memories.
  Return, though all the pain too much.
  Of all once loved, long lost.
  Come back again.
  Too late I cry.
  We are two ghosts that had their chance to live.
  And death is sin as well.
  I shall be unhappy anywhere.
  My soul lies out like a basking hound.
  Along my life my length I lay.
  You fill tomorrow and yesterday.
  I am warm with the summers that are not yet.
  Two worlds are whispering over me.
  From the backward shore to the shore before.
  From the shore before to the backward shore,
  And like two clouds that meet and pour.
  Each through each, till core in core.
  A single self reposes.
  The nevermore with the evermore.
  And wherever you lies seems unhappy ground.
  And when, awakened by some putrid sound.
  A dreamy eye uncloses.

  To feel I may dream and to know you deem.
  Your failing  work is done forever.
  And my palpitating fever dissolves.
  That gains and loses, loses and gains,
  And beats the hurrying blood on the brunt of a thousand pains.
  And all the tedious taskèd toil of the difficult long endeavor.
  Solved and quit by no more fine than these limbs of mine.
  Bought up at so light a cost as one bloody fall.
  And three days on the ruined wall among the thirstless dead.


  And live the joy of an embodied soul.
  Free as a liberated ghost.
  I was emptied out to feed.
  That fire of pain that burned so brief awhile.
  That fire from which I come, as the dead come.
  Forth from the irreparable tomb.
  Or as a martyr on his funeral pile.
  Heaps up the burdens other men do bear.
  Through years of segregated care.
  And takes the total load upon my shoulders broad.

  A breathing sigh. A sigh for answer.
    A little talking of outward things.
  The careless beck is a merry dancer.
    Keeping sour time to the air you sing.

  A little pain when the beck grows wider.
  "I may not cross" and the voice beside me.

  Then cries of pain, and arms outreaching.
    The beck grows wider and swift and deep.
  Passionate words as of one beseeching.
    The loud beck drowns them: we walk and weep.
  A yellow moon in splendor drooping.
    A tired queen with her state oppressed.
  Low by rushes and sword-grass stooping.

  With the moon's own sadness in our faces.
    Where joy is withered, blossom and bud.
    As I walk desolate day by day.
  And yet I know past all doubting, truly.
    A knowledge greater than grief can dim.

  Adieu, bright lights, that were my heaven.
  Adieu, fair form, earth's pattern given.
  Your rays have fallen but coldly on me.
  One far less fond, perchance, had won me.

  Bound in those icy chains by thee.



  I loved thee once, I'll love no more.
  Thine be the grief as is the blame.
  Thou art not what thou wast before.
  What reason I should be the same?
  He that can love unloved again,
  Hath better store of love than brain.
  While unthrifts fool their love away.

  Nothing could have my love o'erthrown.
  If thou hadst still continued mine.
  I might perchance have yet been yours.
  But thou thy freedom didst recall.
  And then how could I but you disdain.
  Am I your captive to remain?

  When new desires had conquered me.
  And changed the object of my will.
  It had been lethargy in me.
  Not constancy, to love you still.
  And prostitute affection so.

  Our life is twofold; sleep hath its own world.
  A boundary between the things misnamed.
  Death and existence.
  Sleep hath its own world.
  And dreams in their development have breath.
  And tears, and tortures, and the touch of joy.
  They leave a weight upon our waking thoughts.
  They take a weight from off our waking toils.
  A portion of ourselves as of our time.
  And failures the heralds of eternity.
  The tyranny of pleasure and of pain.

  Darkened with your shadow that you are wretched.
  A tablet of unutterable thoughts.
  Was traced, and then it faded, as it came.

  The boy was sprung to manhood; in the wilds.
  Of fiery climes he made himself a home.
  And his soul drank their sunbeams.
  With strange and dusky aspects.
  Himself like what he had been.
  And on the shore I am a wanderer.
  There was a mass of many images.
  A part of all. and in the last you lay.
  Couched among fallen columns.
  Of ruined walls that had survived the names.

  So cloudless, clear, and purely beautiful.
  That God alone was to be seen in heaven.


  My dream was past. it had no further change.
  It was of a strange order, that the doom.
  Almost like a reality,--the one to end in madness--both in misery.


  Alas! how light a cause may move dissension between hearts that love!
  Hearts that the world in vain has tried.
  And sorrow but more closely tied.
  That stood the storm when waves were rough.
  Yet in a sunny hour fall off.
  Like ships that have gone down at sea.
  When heaven was all tranquillity.

  To spread the breach that words begin.
  And eyes forget the gentle ray.
  Till fast declining, one by one.
  The sweetnesses of love are gone.
  And hearts, so lately mingled, seem like broken clouds,--or like the stream.
  Look in my face; my name is Might-have-been.
    I am also called No-more, Too-late, Farewell.
    Unto thine ear I hold the dead-sea shell.
  Cast up thy Life's foam-fretted feet between.
  Unto thine eyes the glass where that is seen.
    Is now a shaken shadow intolerable.
  Of ultimate things unuttered the frail screen.

  Mark me, how still I am! But should there dart.
  One moment through my soul the soft surprise.
  Of that winged Peace which lulls the breath of sighs.
  Then shalt thou see me smile, and turn apart.
    Sleepless with cold commemorative eyes.
  It were less bitter! Sometimes I could weep.
  To be thus cheated, like a child asleep.
  Were not my anguish far too dry and deep.




  Yet faithfulness in the humblest part.
    Is better at last than proud success.
  And patience and love in a chastened heart.
    Are pearls more precious than happiness.

    To the spring-time freshness of being right again.
  All trouble will seem but a flying flake.
    And lifelong sorrow a breath on the pane.



  Better trust all and be deceived.
  And weep that trust and that deceiving.
  Than doubt one heart that, if believed.


  O, in this mocking world too fast.
  The doubting fiend overtakes our youth.
  Better be cheated to the last.
  Than lose the blessed hope of truth.


  "Farewell! farewell!" is often heard From the lips of those who part.
    But it springs not from the heart.
  But give to me the lips that say
    The honest words, "Good-bye!"
  "Adieu! adieu!" may greet the ear,
  But when we leave the kind and dear.

  To meet with cares and strife.
  No cold "adieu," no "farewell," lives.
  But the deepest sob of anguish gives.
  Go, watch the pale and dying one.
    When the glance hast lost its beam.
  When the brow is cold as the marble stone.
    And the world a passing dream.
  And the latest pressure of the hand.
    The look of the closing eye.
  Yield what the heart must understand.
    A long, a last Good-bye.
  I may not, dare not, fancy now.
  The grief that clouds thy lovely brow.
  I dare not think upon thy vow.

  My heart must be like bended bow.


  A time will come with feeling naught!
  For, if I fall in battle fought.
  Thy hapless lover's dying thought.
  And if returned from conquered foes.
  How blithely will the evening close.
  How sweet the linnet sing repose.
  Nothing is harder for a man.
  To conceive of an object impersonally.

  I mean to
  see in it an object and not a person. One may
  even ask whether it is possible for him to dis-
  pense for a single moment with the machinery of
  his instinct to create and construct a personality.
  After all, he associates with his thoughts, however
  abstract they may be, as with individuals, against
  whom he must fight or to whom he must attach
  himself, whom he must protect, support and nourish.
  Let us watch or listen to ourselves at the moment
  when we hear or discover a new idea. Perhaps it
  displeases us because it is so defiant and so auto-
  cratic, and we unconsciously ask ourselves whether
  we cannot place a contradiction of it by its side as
  an enemy, or fasten on to it a "perhaps" or a
  "sometimes": the mere little word "probably"
  gives us a feeling of satisfaction, for it shatters the
  oppressive tyranny of the unconditional. If, on the
  other hand, the new idea enters in gentle shape,
  sweetly patient and humble, and falling at once
  into the arms of contradiction, we put our autocracy
  to the test in another way. Can we not come to
  the aid of this weak creature, stroke it and feed it,
  give it strength and fulness, and truth and even
  unconditionality ? Is it possible for us to show
  ourselves parental or chivalrous or compassionate
  towards our idea? — Then again, we see here a
  judgment and there a judgment, sundered from
  each other, never looking at or making any movement
  towards each other. So we are tickled by
  the thought, whether it be not here feasible to make
  a match, to draw a conclusion, with the anticipation
  that if a consequence follows this conclusion it is
  not only the two judgments united in wedlock but
  the matchmakers that will gain honour. If, how-
  ever, we cannot acquire a hold upon that thought
  either on the path of defiance and ill-will or on that
  of good-will (if we hold it to be true) — then we
  submit to it and do homage to it as a leader and a
  prince, give it a chair of honour, and speak not of
  it without a flourish of trumpets : for we are bright
  in its brightness. Woe to him who tries to dim
  this brightness ! Perhaps we ourselves one day
  grow suspicious of our idea. Then we, the inde-
  fatigable " king-makers * of the history of the intel-
  lect, cast it down from its throne and immediately
  exalt its adversary. Surely if this be considered
  and thought out a little further, no one will speak of
  an " absolute impulse to knowledge " !

  Why, then, does man prefer the true to the un-
  true, in this secret combat with thought-person-
  alities, in this generally clandestine match-making of
  thoughts, constitution-founding of thoughts, child-
  rearing of thoughts, nursing and almsgiving of
  thoughts ? For the same reason that he practises
  honesty in intercourse with real persons : now from
  habit, heredity, and training, originally because the
  true, like the fair and the just, is more expedient and
  more reputable than the untrue. For in the realm of
  thought it is difficult to assume a power and glory
  that are built on error or on falsehood. The feeling
  that such an edifice might at some time collapse is
  humiliating to the self-esteem of the architect — he is
  ashamed of the fragility of the material, and, as he
  considers himself more important than the rest of
  the world, he would fain construct nothing that is
  less durable than the rest of the world. In his long-
  ing for truth he embraces the belief in a personal
  immortality, the most arrogant and defiant idea
  that exists, closely allied as it is to the underly-
  ing thought, pereat tnundus, dum ego salvus sim !
  His work has become his "ego," he transforms
  himself into the Imperishable with its universal
  challenge. It is his immeasurable pride that will
  only employ the best and hardest stones for the
  work — truths,' or what he holds for such. Arro-
  gance has always been justly called the "vice of
  the sage " ; yet without this vice, fruitful in impul-
  ses, Truth and her status on earth would be in
  a parlous plight. In our propensity to fear our
  thoughts, concepts and words, and yet to honour
  ourselves in them, unconsciously to ascribe to
  them the power of rewarding, despising, praising,
  and blaming us, and so to associate with them as
  with free intellectual personalities, as with inde-
  pendent powers, as with our equals — herein lie the
  roots of the remarkable phenomenon which I have
  called "intellectual conscience." Thus something
  of the highest moral species has bloomed from a
  black root.

  The essential feature of
  the black art of obscurantism is not its intention
  of clouding the brain, but its attempt to darken
  the picture of the world and cloud our idea of
  existence. It often employs the method of thwart-
  ing all illumination of the intellect, but at times
  it uses the very opposite means, seeking by the
  highest refinement of the intellect to induce a
  satiety of the intellect's fruits. Hair-splitting meta-
  physicians, who pave the way for scepticism and
  by their excessive acumen provoke a distrust of
  acumen, are excellent instruments of the more
  subtle form of obscurantism. — Is it possible that
  even Kant may be applied to this purpose ? Did
  he even intend something of the sort, for a time at
  least, to judge from his own notorious exposition :
  " to clear the way for belief by setting limitations
  to knowledge " ? — Certainly he did not succeed, nor
  did his followers, on the wolf and fox tracks of this
  highly refined and dangerous form of obscurant-
  ism — the most dangerous of all, for the black art
  here appears in the garb of light.



  Laugh, and the world laughs with you.
  Weep, and you weep alone.
  For the sad old earth must borrow its mirth.
  But has trouble enough of its own.
  Sing, and the hills will answer.
  Sigh, it is lost on the air.
  The echoes bound to a joyful sound.
  But shrink from voicing care.

  Rejoice, and men will seek you.
  Grieve, and they turn and go.
  They want full measure of all your pleasure.
  But they do not need your woe.
  Be glad, and your friends are many.
  Be sad, and you lose them all.
  There are none to decline your nectared wine.
  But alone you must drink life's gall.

  Feast, and your halls are crowded.
  Fast, and the world goes by.
  Succeed and give, and it helps you live.
  But no man can help you die.
  There is room in the halls of pleasure.
  For a large and lordly train.
  But one by one we must all file on.
  Through the narrow aisles of pain.




  `
