export interface Stanza {
  type: 'verse' | 'chorus' | 'bridge' | 'outro'
  lines: string[]
}

export interface Song {
  id: string
  number: string
  title: string
  overlayColor: string
  lyrics: Stanza[]
}

export const SONGS: Song[] = [
  {
    id: 'court-street-mile',
    number: '01',
    title: 'Court Street Mile',
    overlayColor: 'rgba(10, 18, 48, 0.88)',
    lyrics: [
      { type: 'verse', lines: ['Buzz buzz 26 minutes', 'Anticipation turned excitement', 'Rub-to-a-dub at the Bell House, six pointed lagers', 'One party, reckless went abandoned', 'From there on, we were infinitely connected'] },
      { type: 'chorus', lines: ["I'm going right, right again", 'You turn left, pretend', 'To go our separate ways', 'All the way from Gowanus', 'We end up where we belong on Baltic', "I'm coming for you Court Street Mile"] },
      { type: 'verse', lines: ['Buzz buzz 26 minutes', 'Anticipation turned excitement', 'From the brick in my hand to the cobbles on the hill', 'Lace my shoes, lock the door, start walking', "I can't wait to see you and your smug smile smiling"] },
      { type: 'chorus', lines: ["I'm going right, right again", 'You turn left, pretend', 'To go our separate ways', 'All the way from Gowanus', 'We end up where we belong on Baltic', "I'm coming for you again Court Street Mile"] },
      { type: 'verse', lines: ['Buzz buzz 26 minutes', 'Anticipation turned excitement', 'Strangers feeling strange things, friends of friends', 'Never knew not to expect surprises', 'Ended up 5 floors high, finishing the night again at Congress'] },
      { type: 'chorus', lines: ["I'm going right, right again", 'You turn left, pretend', 'To go our separate ways', 'All the way from Gowanus', 'We end up where we belong on Baltic'] },
      { type: 'bridge', lines: ["Thank God I'm coming for you again", "Thank God I'm coming for you again", "Thank God I'm coming for you again"] },
      { type: 'outro', lines: ["Thanking God while I'm walking along again, on that Court Street Mile"] },
    ],
  },
  {
    id: 'shoulders',
    number: '02',
    title: 'Shoulders',
    overlayColor: 'rgba(10, 18, 48, 0.85)',
    lyrics: [
      { type: 'verse', lines: ['Bare shoulders gliding guiding bright', "You wisped me away from western NY's starry nights", "I looked through the rack and asked if you're ready"] },
      { type: 'chorus', lines: ['Electricity ignites when you let it', "Electricity ignites don't blow it", "Electricity ignites let's show it", 'Bare shoulders, soft knees, I know it'] },
      { type: 'verse', lines: ['Cheers on the rooftop, toasts in the park', 'You shut down 41st in the flashing rain, freezing', 'I hung on tight, smile upright getting ready for the ride'] },
      { type: 'chorus', lines: ['Electricity ignites when you let it', "Electricity ignites don't blow it", "Electricity ignites let's show it", 'Bare shoulders, soft knees, I know it'] },
      { type: 'verse', lines: ['Alone at the bar, after the party', 'You held your beer, reservoir flowing', 'I exhaled relief, drying out my tux still hanging'] },
      { type: 'verse', lines: ['Reckless abandon or calculated test', 'Not one moment misstepped', 'Two knees, two years, two rings', "Call it magic, a meteor, I'm still in awe of it"] },
      { type: 'chorus', lines: ['Electricity ignites when you let it', "Electricity ignites don't blow it", "Electricity ignites let's show it", 'Bare shoulders, soft knees, I know it'] },
    ],
  },
  {
    id: 'so-fast',
    number: '03',
    title: 'So Fast',
    overlayColor: 'rgba(10, 18, 48, 0.72)',
    lyrics: [
      { type: 'verse', lines: ['Timeline timing, you were on a timeline, not mine', "It's fine, yes, let's go, to the next thing", 'Sprinting, wishing, wait for nothing', 'Hop on board, no use discussing'] },
      { type: 'verse', lines: ['Timeline timing, you were on a timeline, not mine', "Nice to meet you, holy shit, guess we're moving", 'Planning, buying, long list of choosing', 'This is the pace, no break, no chance adjusting'] },
      { type: 'chorus', lines: ['So fast here we go jump on board or let go', 'So fast here we go jump on board or let go', "So fast here we go ready or not it's happening"] },
      { type: 'verse', lines: ['Timeline timing, you were on a timeline, not mine', 'The biggest surprise full of joy, not that I was ready', 'Learning by doing, attempting understanding', 'Calm down carry on, oh so this is living'] },
      { type: 'verse', lines: ['Timeline timing, you were on a timeline, not mine', 'Resented before I could appreciate it', "Growing, aweing, now we're both conspiring", 'Alive and with a family so completely thriving'] },
      { type: 'chorus', lines: ['So fast here we go jump on board or let go', 'So fast here we go jump on board or let go', "So fast here we go ready or not it's happening"] },
      { type: 'bridge', lines: ["Here we go, let's go", "Here we go, let's go", "Here we go, let's go"] },
    ],
  },
  {
    id: 'island',
    number: '04',
    title: 'Island',
    overlayColor: 'rgba(10, 18, 48, 0.68)',
    lyrics: [
      { type: 'verse', lines: ['5 years in, 5 years out', 'No one ever said I wanted more than that', '4 bridges, a million miles away', "I didn't know I wouldn't get a say"] },
      { type: 'chorus', lines: ['The closer I look the more I want out', 'Get me off this island of doubt'] },
      { type: 'verse', lines: ['I followed you there like a magnet', "That's when you stopped listening, now I see it", "Be happy where you are, what if I'm not?", 'My point of view, eliminated'] },
      { type: 'chorus', lines: ['The closer I look the more I want out', 'Get me off this island of doubt'] },
      { type: 'verse', lines: ["It's not so much the place but the people", 'Opinions turned beliefs turned principles', "But I don't agree, nauseated hearing", "You can't march in our parade, no compassion"] },
      { type: 'chorus', lines: ['The closer I look the more I want out', 'Get me off this island of doubt'] },
      { type: 'verse', lines: ['This island heart shaped, heart broken, separated', 'Arms length away from ambition', 'This island downgraded, forgotten', 'Barriers from the ground up, not just my perception'] },
      { type: 'bridge', lines: ['Get me out, get me out, get me out', 'Off this island of doubt'] },
    ],
  },
  {
    id: 'minneapolis-january-2026',
    number: '05',
    title: 'Minneapolis January 2026',
    overlayColor: 'rgba(10, 18, 48, 0.62)',
    lyrics: [
      { type: 'verse', lines: ['Fear empowers the powers that be', 'Standing there shouting no kings', 'We want this to be the moment of transformation', 'Instead we sink further deteriorated', 'Evil persists from the hands behind masks', 'Stealing sons and daughters', 'Killing observers'] },
      { type: 'chorus', lines: ['Brave souls march, brave souls shout', 'Braving the cold that tears us apart', 'Brave souls interfere, brave souls ask what on earth is going on round here?'] },
      { type: 'verse', lines: ["Open hearts seize hope we can't see", 'Raising flashes, staring down spray and bullets', 'We want this to be a new chapter', "Instead we hear more critics' laughter", 'Evil persists from the naked orange emperor', 'Stealing belief, sewing rage', 'Killing compassion at every stage'] },
      { type: 'chorus', lines: ['Brave souls march, brave souls shout', 'Braving the cold that tears us apart', "Brave souls interfere, brave souls ask what on God's earth is going on round here?"] },
      { type: 'verse', lines: ['In solidarity I watch helplessly', "My wife and two kids ignorant, I'm praying", 'How can I help? What can I do?', 'Of course one march in October was never enough', 'Minneapolis January 26'] },
      { type: 'chorus', lines: ['Brave souls march, brave souls shout', 'Braving the cold that tears us apart', 'Brave souls interfere, brave souls ask what the fuck is going on in front of me?'] },
      { type: 'bridge', lines: ['Minneapolis January 26', 'Minneapolis January 26'] },
    ],
  },
  {
    id: 'shadow',
    number: '06',
    title: 'Shadow',
    overlayColor: 'rgba(10, 18, 48, 0.55)',
    lyrics: [
      { type: 'verse', lines: ['Flight or fight I had to go, so I chased the only thing I could ever know', 'Looked up and down, made safe by matching their sounds', 'There I was completely entrenched, soaking it all in, getting comfortable', 'Following in their footsteps'] },
      { type: 'chorus', lines: ['I learned my best place was to keep pace and chase', "That damn shadow's winning its race"] },
      { type: 'verse', lines: ["Another year, another lost memory I fear, keep looking forward, that's the only way", "Pretend again, borrowing their fulfillment as long as it didn't make me sick", 'There I was adopted choices, striving to want them instead of drowning my own voices', 'Following in their footsteps'] },
      { type: 'chorus', lines: ['I learned my best place was to keep pace and chase', "That damn shadow's winning its race"] },
      { type: 'verse', lines: ["Now I'm grown, strong and snarky, there's not enough space for me in checkers all boxy", 'Alone at home, finally I can breathe not needing to be the last one seen', 'There I was absolutely thriving, totally confused guess I got lost while abiding', 'Following in their footsteps'] },
      { type: 'chorus', lines: ['I learned my best place was to keep pace and chase', "That damn shadow's winning its race"] },
      { type: 'verse', lines: ['Back, back again. This young familiar place I forgot to face', "I forgot the cold, even worse when you're old", "Something's here you can't see reminding", "That damn shadow's winning its race against me"] },
    ],
  },
  {
    id: 'the-wheel',
    number: '07',
    title: 'The Wheel',
    overlayColor: 'rgba(10, 18, 48, 0.48)',
    lyrics: [
      { type: 'verse', lines: ["Man's search for meaning didn't sink", 'Finding ultra hit a wall', 'Swimming confusion, all I want is clarity', 'Do what you love, they say', 'Follow your passions', "But don't forget you must accomplish everything along the way"] },
      { type: 'chorus', lines: ['Achilles heel', 'Thorn in my side', 'Broken record spin spin', "I just don't want to be dead again", 'Kill the bridge', 'Redeem my love', 'Got, got to get off this not going anywhere wheel'] },
      { type: 'verse', lines: ['The tools were good', "Osho knows what's up", 'Try this, and that, and this again', '8 with a wing 2', "What's the role for that?", "Maybe you're not meant to be that successful type"] },
      { type: 'chorus', lines: ['Achilles heel', 'Thorn in my side', 'Broken record spin spin', "I just don't want to be dead again", 'Kill the bridge', 'Redeem my love', 'Got, got to get off this not going anywhere wheel'] },
      { type: 'verse', lines: ['The creative act, the hell yea act of being', 'Green lights, McConaughey was onto something', 'Hello coaches 1, 2, and 3', 'Stop eating, well', 'That seems to set me free', 'Perhaps I was enough all along, could that ever be a possibility?'] },
      { type: 'chorus', lines: ["Can't stop, won't stop", 'Leave behind the gasoline', 'Hands up, head bops', 'Finding my electricity', 'Love redeemed', "There's so many more paths for me"] },
      { type: 'chorus', lines: ["Can't stop, won't stop", 'Leave behind the gasoline', 'Hands up, head bops', 'Finding my electricity', 'Love redeemed', "There's so many more paths for me"] },
    ],
  },
  {
    id: 'more-i-forgive-you',
    number: '08',
    title: 'More (I Forgive You)',
    overlayColor: 'rgba(10, 18, 48, 0.38)',
    lyrics: [
      { type: 'verse', lines: ['I forgive you for believing in success', 'For being enamored with excess', 'I forgive you for trying to be the perfect child', 'For giving up every once in a while'] },
      { type: 'verse', lines: ['I forgive you for people pleasing', 'For never making it easy', 'I forgive you for coping with your vices', 'For hating yourself like I did'] },
      { type: 'chorus', lines: ["You arrived yesterday but didn't see it", "It's summer now don't need to wait for the ice to melt", 'Strip down, run into the ocean'] },
      { type: 'verse', lines: ['I forgive you for forgetting perspective', 'For being distracted', 'I forgive you for dreaming romantic', 'For confusing maturity with cold apathy'] },
      { type: 'verse', lines: ['I forgive you for not recognizing the devices', 'For getting by alone indulging identity crisis', 'I forgive you for ignoring the moments', 'For turning a blind eye to the glimpses'] },
      { type: 'chorus', lines: ["You arrived yesterday but didn't see it", "It's summer now don't need to wait for the ice to melt", 'Strip down, run into the ocean'] },
      { type: 'verse', lines: ["Here I am, it's me, you can trust it", 'Feet on the ground, reach out, touch it', 'I forgive you for always wanting more than promised'] },
      { type: 'bridge', lines: ['More and more and more', 'I forgive you for always wanting more'] },
      { type: 'outro', lines: ['More and more and more', 'I forgive you', 'Forevermore'] },
    ],
  },
  {
    id: 'spring-lake',
    number: '09',
    title: 'Spring Lake',
    overlayColor: 'rgba(10, 18, 48, 0.25)',
    lyrics: [
      { type: 'verse', lines: ['There is a place where we like to go', 'Natural beauty and a bit of pretense', "Just so happens it's perfectly perfect", "We're not from around here not sure we deserve this"] },
      { type: 'chorus', lines: ['Paradise on the Jersey Shore', "We've been here before", "We're old enough to know a good thing when we see it", "Let's get comfortable, babe, this is ours now too", 'Better believe it'] },
      { type: 'verse', lines: ['There is a place where we like to go', 'Breaking waves backdrop to the boardwalk', 'Go on be happy now, no shoes to drop, no catch', "We've found our oasis"] },
      { type: 'chorus', lines: ['Paradise on the Jersey Shore', "We've been here before", "We're old enough to know a good thing when we see it", "Let's get comfortable, babe, this is ours now too", 'Better believe it'] },
      { type: 'verse', lines: ['There is a place where we like to go', 'Just pleasant - no grime, no bullshit', 'Not everything needs depth to wrestle with', 'Nothing wrong with floating on the surface'] },
      { type: 'chorus', lines: ['Paradise on the Jersey Shore', "We've been here before", "We're old enough to know a good thing when we see it", "Let's get comfortable, babe, this is ours now too", 'Better believe it'] },
      { type: 'bridge', lines: ['Paradise on the Jersey Shore', 'Believe it', 'Paradise on the Jersey Shore', 'Believe it, be it', 'Paradise on the Jersey Shore', 'Believe it, be it, no regrets'] },
      { type: 'outro', lines: ['Paradise on the Jersey Shore', 'Believe it, be it, no regrets, not a moment wasted'] },
    ],
  },
  {
    id: 'not-mine-but-hers',
    number: '10',
    title: 'Not Mine But Hers',
    overlayColor: 'rgba(10, 18, 48, 0.18)',
    lyrics: [
      { type: 'verse', lines: ['Snoozing in the backseat', 'Meets peace so effortlessly', 'Dreams come and go casually', 'My greatest teacher, that', 'For her, for her, for her,', 'The future is not mine but hers'] },
      { type: 'verse', lines: ['Swaying on the bleachers', 'At ease everything pleasing her', 'Yesterday forgotten, tomorrow not bothered', 'Imagination taking action, knowing that', 'For her, for her, for her', 'The future is not mine but hers'] },
      { type: 'verse', lines: ['Prompting question after question', 'At once provoking and genuine', "She's coming into form, forming her connection", 'Aliveness given every second, that', 'For her, for her, for her', 'The future is not mine but hers'] },
      { type: 'verse', lines: ['The beauty, the peace, the fire', 'Her love, the real thing, beyond my desires', "She'll go where she goes, absolutely knowing", 'She was never mine'] },
      { type: 'bridge', lines: ['For her, for her, for her', 'She was never mine'] },
      { type: 'outro', lines: ['For her, for her, for her', 'The future is not mine but hers'] },
    ],
  },
  {
    id: 'home',
    number: '11',
    title: 'Home',
    overlayColor: 'rgba(10, 18, 48, 0.10)',
    lyrics: [
      { type: 'verse', lines: ['You say we need a bigger house', 'Where can we keep all the stuff?', 'I say I prefer hearing their voices from two floors up', 'You say this is next on the list, after that', "I say I'm just happy to have a chance", 'Where do we go from here?', 'Nowhere not near'] },
      { type: 'chorus', lines: ["We're already home", "We've already won", "And it feels like we've just begun"] },
      { type: 'verse', lines: ['You say we could renovate', "I say let's take a trip out of state", 'You say you the Jones have a mountain', "I say we'll make our own epic", 'Where do we go from here?', "We're living it, it's clear"] },
      { type: 'chorus', lines: ["We're already home", "We've already won", "And it feels like we've just begun"] },
      { type: 'verse', lines: ["You say it's movie night, in ten", 'Reliving romances from our own childhood heads', 'The best days are now', 'The best days are here', 'The best days right in front of us, dear'] },
      { type: 'chorus', lines: ["We're already home", "We've already won", "And it feels like we've just begun"] },
    ],
  },
]
