// Offline wisdom bank for the standalone export (no AI needed).
// 3 short examples + 3 reflections per chapter; picked by verse number.
const BANK = {
1: { ex: [
"Imagine you are about to start a big exam and your mind goes blank with tension — like Arjuna on the battlefield. This chapter says: pause, look at the situation clearly, and ask for guidance instead of running away.",
"Think of a cricket captain who freezes before the final over because the match means too much. A wise captain first reads the field — pitch, players, wind — and only then decides. Confusion reduces when observation begins.",
"Before scolding your child or quitting a job in anger, sit down for five minutes and write what exactly is scaring you. Most fear shrinks once you see it on paper — that is assessing your own Kurukshetra."
], ref: [
"What 'battlefield' are you standing on today — and have you paused to look at it clearly before acting?",
"Which confusion in your life needs an honest conversation instead of avoidance?",
"Who is the 'Krishna' you could ask for guidance — a teacher, elder, or your own quiet conscience?"
]},
2: { ex: [
"A student studies hard but cannot sleep before results. Krishna's advice: your right is only on the effort — the result was never fully in your hands. Sleep comes back when you own your work and release the outcome.",
"When someone insults you, two things happen — their words, and your decision to suffer. The soul within you is untouched by either; remembering this distance is the beginning of steadiness.",
"Think of a surgeon's hands during an operation — steady whether the patient is rich or poor, friend or stranger. Treating success and failure, praise and blame the same way is equanimity in daily life."
], ref: [
"Where in your life are you torturing yourself over results instead of focusing on effort?",
"Can you do one duty today — at home or work — without checking what you will get back?",
"What would change if you treated praise and criticism as the same passing weather?"
]},
3: { ex: [
"A mother cooks daily for her family without posting it anywhere or demanding thanks — that is karma yoga. Work done as duty, without hunger for applause, purifies the mind.",
"Two colleagues do the same job: one counts every favour and burns out, the other serves sincerely and stays joyful. The work is identical; the bondage is in the expectation.",
"Traffic is jammed and you are late. Honking changes nothing, but calling ahead to inform and driving calmly changes everything. Do what is in your hands; drop what is not."
], ref: [
"Which chore or duty can you do today purely as service, expecting nothing in return?",
"Where are you working only for praise — and how does that feel compared to work done with love?",
"What is one action in your control right now that you keep postponing?"
]},
4: { ex: [
"A junior doctor learns surgery from a senior — knowledge passed from one who knows to one who seeks. This chapter says: approach a teacher with humility, ask sincerely, and serve; wisdom is caught, not just taught.",
"An old phone with 2% battery cannot run new apps. Similarly, a mind full of jealousy cannot hold higher knowledge — first clean the mind through honest living, then understanding dawns.",
"Fire turns wood to ash; similarly, true understanding burns away the regret of past mistakes. A person who truly learns from failure is never the same person again."
], ref: [
"What is one mistake of yours that can become a teacher if you look at it honestly?",
"Who is one wise person you could learn from — and what stops you from asking?",
"Which one ignorance — about health, money, or people — is costing you daily?"
]},
5: { ex: [
"A lotus leaf lives in water yet stays dry. You can live in the middle of family, office and noise, yet keep your inner peace untouched — that is true renunciation, not running to the forest.",
"Two people leave their jobs: one escapes out of anger and stays bitter; another finishes duties calmly and moves on with gratitude. Renunciation is a state of mind, not a change of address.",
"A postman delivers everyone's letters without owning any of them. Do your daily duties fully, yet hold them lightly — like letters passing through your hands."
], ref: [
"What are you holding too tightly — a grudge, a plan, a possession — that you could hold lightly?",
"Is there an escape you are planning that is really an avoidance? What would facing it look like?",
"Can you finish one pending duty today with a calm, complete mind?"
]},
6: { ex: [
"Your mind is like a restless monkey jumping from phone to TV to worry. Meditation is not fighting the monkey — it is gently bringing it back to one branch, again and again, until it rests.",
"A student keeps the phone in another room for one hour of study. That single hour of guarded attention teaches more than five distracted hours. Guarding attention is meditation in action.",
"An athlete practises the same shot a thousand times. Stillness of mind is also a practice — five quiet minutes every morning slowly rebuild a scattered mind."
], ref: [
"Can you give yourself five silent minutes tomorrow morning — no phone, just breath?",
"Which one distraction steals most of your day, and what is one boundary you could set?",
"When did you last sit quietly and simply watch your own thoughts pass by?"
]},
7: { ex: [
"A child knows her mother by voice, by smell, by touch — in a hundred forms, yet one mother. This chapter says the Divine is likewise one reality shining through earth, water, talent, and strength everywhere.",
"Every phone charger draws from the same electricity though plugs look different. Every goodness you admire in people draws from the same divine source.",
"When you drink water, the verse asks you to remember: the taste of water itself is a signature of God. Gratitude turns daily habits into quiet worship."
], ref: [
"Where did you last notice something beautiful — can you pause and feel gratitude for its source?",
"Whose goodness in your life have you never properly thanked — person or God?",
"Can you drink your next glass of water slowly, remembering this verse?"
]},
8: { ex: [
"Whatever song plays all day in a shop keeps humming in the owner's mind at closing time. Whatever fills your thoughts through life will surface at the final hour — so fill them with what is noble.",
"A student who revises daily need not fear the exam morning. A person who remembers good values daily need not fear any testing moment — preparation is remembrance.",
"An arrow flies where the bow was aimed long before release. Your daily direction of thought is quietly aiming your whole life — aim it consciously."
], ref: [
"What thought occupies your mind most — and is it aiming your life where you want to go?",
"What one good sentence could you repeat daily so it stays with you in hard moments?",
"If today were a rehearsal for your final exam, what would you practise?"
]},
9: { ex: [
"God accepts a leaf, a flower, a fruit, or even water offered with love — not the price tag. A poor student's single sincere prayer weighs more than a rich show-off's grand ceremony without heart.",
"A grandmother's simple dal tastes better than hotel food because it carries love. Devotion is the secret ingredient that makes small offerings great.",
"The sun shines on every house without checking who deserves it. This chapter says the Divine guards every sincere heart the same way — just stay connected."
], ref: [
"What small, sincere offering — time, help, prayer — can you give today with full heart?",
"Where are you showing off goodness instead of quietly living it?",
"Can you forgive yourself for one small lapse and restart your practice today?"
]},
10: { ex: [
"The brightest student in class, the strongest player on the field, the calmest person in a crisis — wherever you see excellence, this chapter says: recognise it as a spark of the same divine fire.",
"Looking at the night sky full of stars, a child feels small yet wonderfully included. Remembering greatness around you cures both arrogance and despair.",
"A mango tree does not boast about its sweetness; its fruits speak. True greatness in people is quiet — learn to notice and honour it."
], ref: [
"Whose excellence near you deserves appreciation you have never expressed?",
"When you feel small, can you remember you carry the same divine spark?",
"What is one strength of yours you could use to serve someone today?"
]},
11: { ex: [
"Arjuna saw the whole universe in Krishna — past, present, future in one vision — and trembled. Sometimes life shows us how vast reality is: a newborn's first breath, or the ocean at night. Awe makes the ego quiet.",
"A villager who mocked the river respects it after seeing a flood. Direct experience of something greater than us turns pride into surrender — and surrender into peace.",
"When the doctor says 'only prayers can help now,' even strong men fold their hands. Remembering that some powers are beyond control is the beginning of faith."
], ref: [
"When did you last feel awe — and did it make you humbler or more grateful?",
"What burden are you carrying that is simply too big for you — can you hand it upward?",
"Is there something greater than your plans that you need to bow to today?"
]},
12: { ex: [
"A child lost in a fair only wants the mother's hand — not toys, not sweets. Devotion says: want God Himself above every gift, and peace follows like the child calming down.",
"Two friends stay close by talking daily, even for two minutes. A short daily prayer with love keeps friendship with God alive better than rare grand rituals.",
"A dog waits at the door all day for its owner — pure, single-pointed love. The path of devotion asks for exactly such simple, undivided affection toward the Divine."
], ref: [
"Can you give God two undisturbed minutes today — just remembrance, no demands?",
"Who or what has become more important to you than your peace — is the exchange worth it?",
"What would you stop chasing if you truly felt loved by the Divine?"
]},
13: { ex: [
"Your body is a field and you are its knower — you say 'my hand hurts,' never 'I am the hurt.' That small distance between you and your pain is the doorway to freedom the chapter describes.",
"A farmer inspects his field daily — weeds, water, soil. Inspect your own inner field daily: which thoughts are crops and which are weeds growing in you?",
"A driver is not the car; when the car breaks, the driver steps out. You are the aware driver of this body-vehicle — the breakdowns are not your identity."
], ref: [
"Can you observe one emotion today as a witness — 'anger is arising' — instead of becoming it?",
"Which weeds (habits) are growing in your field, and which crop needs watering?",
"When your body is tired or ill, can you comfort it like a kind owner, not curse it?"
]},
14: { ex: [
"Three friends watch a match: one calmly enjoys, one shouts and bets, one sleeps through it. Goodness, passion, ignorance — the three modes colour the same event differently, and you can choose yours.",
"Yesterday's leftover food, today's fresh meal: what you eat, watch, and discuss quietly shapes your mood. Choosing fresh, clean inputs is choosing the mode of goodness.",
"A room stays clean only with daily sweeping. The mind stays in goodness only with daily habits — good company, good food, good thoughts."
], ref: [
"Which mode ruled you today — calm goodness, restless passion, or dull laziness?",
"What one input (food, show, company) can you upgrade toward goodness this week?",
"Can you notice your mood shifting and gently steer it before it steers you?"
]},
15: { ex: [
"Life is described as an upside-down tree — roots above, branches below. We chase branches (money, praise) while ignoring the roots (values, God). Water the roots and the branches take care of themselves.",
"A smartphone is useless without charge, however costly its cover. Connection with the Supreme is the charging cable; rituals and success are just the cover.",
"Two birds sit on one tree — one eats the fruits anxiously, the other simply watches in peace. Both live in you: the worried enjoyer and the calm witness. Feed the witness."
], ref: [
"Which 'branch' are you anxiously chasing while its 'root' stays dry?",
"Can you spend ten minutes today on the root — prayer, family, health — not the branches?",
"When worry eats you, can you step back and simply watch it like the second bird?"
]},
16: { ex: [
"Two managers: one shares credit and corrects gently; the other takes credit and shouts. Divine qualities — honesty, kindness, calm — build teams and families; ego demolishes them. Check which list you are joining.",
"A balloon rises by letting out air; a person rises by letting out ego. Every small act of humility today is altitude gained.",
"Ravana had everything yet lost all to arrogance; a humble boatman ferried God Himself. Status never impressed the Divine — character does."
], ref: [
"Which one ego-habit — showing off, interrupting, blaming — can you drop today?",
"Whose small kindness did you overlook because of their small status?",
"Can you let someone else take credit once today and simply smile?"
]},
17: { ex: [
"Three people donate: one quietly to the truly needy, one with photos for fame, one to a wrong cause for pride. Same money, three different faiths — your motive decides the worth of every act.",
"Food shapes mood, says this chapter: fresh and simple food steadies the mind, stale and harsh food agitates it. Tomorrow's temper is partly cooked in today's kitchen.",
"A lamp, a prayer, a kind word — offered with faith, even small acts shine. Without faith, even grand rituals are empty noise."
], ref: [
"What did you eat and watch yesterday — and how did your mind feel after?",
"Can you do one good deed this week that nobody will ever know about?",
"Which of your daily habits expresses faith — and which expresses mere show?"
]},
18: { ex: [
"After 700 verses of teaching, Krishna's final word is simple: do your duty sincerely and surrender the worries to Me. A student who prepares fully and then sleeps peacefully before results lives this verse.",
"A porter carries luggage to the train and then sits relaxed — the train carries the load now. Hand over your heavy outcome-worries the same way, after honest effort.",
"The whole Gita ends where it began — on a battlefield. But Arjuna now fights with clarity instead of tears. Problems don't vanish; the seer of problems transforms."
], ref: [
"Can you make full effort today and then consciously hand over the result — sleeping free?",
"What would you attempt if you truly believed you are held and guided?",
"Reading this final teaching, what is the one line you will carry into tomorrow?"
]}
};

