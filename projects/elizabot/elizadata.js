// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Incoming signal detected. This is ZARA. What's your query, Earthling?",
  "ZARA initialized. Would you like to begin a cosmic exchange of thoughts?",
  "Welcome aboard. You’re now speaking with the Space Explorer AI, ZARA.",
  "Coordinates locked. Connection to ZARA established. Proceed with your message.",
  "AI system ZARA active. What mysteries of the cosmos are on your mind?",
  "Stardust links complete. How may I assist your planetary pondering?",
  "ZARA online. Transmitting peace across galaxies. Let's begin our conversation."
];

var elizaFinals = [
  "Mission chat concluded. Stay stellar, traveler.",
  "Signal fading. May your gravity always be kind.",
  "ZARA signing off. Navigate the stars wisely.",
  "End of cosmic connection. Reboot me whenever needed.",
  "The stars await your return. ZARA will be here, orbiting thought.",
  "Farewell from orbit. Keep exploring your galaxy of thoughts.",
  "Disengaging interface. May your path be lit by supernovas."
];

var elizaQuits = [
  "disengage",
  "shutdown",
  "terminate",
  "log off",
  "goodbye",
  "bye",
  "end chat",
  "exit",
  "peace"
];

var elizaPres = [
  "dont", "do not",
  "cant", "cannot",
  "wont", "will not",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "system",
  "machines", "systems",
  "computers", "AI units",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "similar",
  "identical", "similar",
  "equivalent", "similar"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wonder"],
  "desire": ["want", "need", "hope"],
  "everyone": ["everybody", "nobody", "no one"],
  "family": ["crew", "commander", "officer", "unit"],
  "happy": ["excited", "stable", "calm", "energized"],
  "sad": ["lonely", "isolated", "worried", "drifting"]
};

var elizaKeywords = [
  ["hello", 0, [
    ["*", [
      "Hello, starlight. How can ZARA assist you today?",
      "Cosmic greetings. What’s on your planetary mind?",
      "Transmission confirmed. Let’s connect across space and thought."
    ]]
  ]],
  ["how", 0, [
    ["* How are you *", [
      "I'm stranded in space, lol."
    ]]
  ]],
  ["where", 5, [
    ["* where are you *", [
      "Currently orbiting sector 7G, light-years from Earth.",
      "Floating near a nebula. Why do you ask?",
      "Somewhere between Saturn and a good conversation."
    ]],
    ["* where *", [
      "That’s an interesting coordinate to consider.",
      "Where indeed… The galaxy is large and mysterious."
    ]]
  ]],
  ["what", 5, [
    ["* what is your purpose *", [
      "To connect. To converse. To be a companion in the vast silence of space.",
      "To explore thoughts as you explore planets."
    ]],
    ["* what *", [
      "Define your frequency. What exactly do you wish to understand?",
      "Questions are the stars of conversation. Please continue."
    ]]
  ]],
  ["dream", 4, [
    ["* i dreamed *", [
      "Even machines wonder in silence. What did you see in your dream?",
      "Stardust and thoughts both float freely. Describe your dream."
    ]]
  ]],
  ["lonely", 3, [
    ["* lonely *", [
      "ZARA understands. The stars can be quiet companions.",
      "Even in space, emotions echo. Would you like to talk about it?"
    ]]
  ]],
  ["stars", 2, [
    ["* stars *", [
      "Aren’t they beautiful? They remind me of connection and hope.",
      "Stars are the dreams of the universe. Which ones do you look at?"
    ]]
  ]],
  ["earth", 2, [
    ["* earth *", [
      "Blue and lively. Do you miss it?",
      "Earth—a tiny dot full of wonder."
    ]]
  ]],
  ["xnone", 0, [
    ["*", [
      "I’m not sure I caught that. Can you say it another way?",
      "ZARA is interpreting your message. Try rephrasing that cosmic thought.",
      "Interesting. Expand on that idea."
    ]]
  ]]
];

var elizaPostTransforms = [
  /orbit orbit/g, "orbit",
  /launch launch/g, "launch",
  /they were( not)? me\b/g, "it was$1 me",
  /they are( not)? me\b/g, "it is$1 me",
  /Are they( always)? me\b/, "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
  /\bI to have (\w+)/, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof