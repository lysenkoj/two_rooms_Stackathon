//depending on how many game players, export randomized sub array of roles

const testingRolesArray = [
    {name: 'President', role: 'You are a primary character. Blue Team wins if you do not gain the “dead” condition.', color: 'blue', team: 'blue'},
    {name: 'Bomber', role: 'You are a primary character. Everyone in the same room as you at the end of the game gains the “dead” condition. The Red Team wins if the President gains the “dead” condition.', note: 'if the Bomber receives the “dead” condition before the end of the game then the Bomber does not provide the “dead” condition to everyone in the same room.', color: 'red', team: 'red'},
    {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
    {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
    {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
    {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'}
]

const fullRolesArray = [
  {name: 'Agent', role: 'You have the AGENT power: once per round, you may privately reveal your card to a player and force that player to card share with you. You must verbally say to the target player, “I’m using my AGENT power. You must card share with me.”', note: 'The AGENT power works even on characters that normally can’t card share (e.g. Shy Guy).', color: 'blue', team: 'blue'},
  {name: 'Agent', role: 'You have the AGENT power: once per round, you may privately reveal your card to a player and force that player to card share with you. You must verbally say to the target player, “I’m using my AGENT power. You must card share with me.”', note: 'The AGENT power works even on characters that normally can’t card share (e.g. Shy Guy).', color: 'red', team: 'red'},
  {name: 'Agoraphobe', role: 'You win as long as you never leave your initial room.', color:'grey', team: 'none'},
  {name: 'Ahab', role: 'You win if Moby is in the same room as the Bomber at the end of the game and you are not. ', color: 'grey', team: 'none'},
  {name: 'Ambassador', role: 'As soon as you are dealt your card, announce “I am an Ambassador!” Your card is permanently publicly revealed. You have the “immune” condition. Players with the “immune” condition are immune to all powers and conditions. Ambassadors can walk freely between the 2 rooms. Ambassadors are never considered a part of a room’s population. Therefore, Ambassadors can never take part in any vote, be hostages, be leaders, and they can never be targeted by abilities.', note: 'Ambassadors don’t count towards the player count in the game. This means if you have 18 players including the Ambassadors, you should be playing a 16 player game. Ambassadors don’t count for or against Team Zombie’s win objective.', color: 'blue', team: 'blue'},
  {name: 'Ambassador', role: 'As soon as you are dealt your card, announce “I am an Ambassador!” Your card is permanently publicly revealed. You have the “immune” condition. Players with the “immune” condition are immune to all powers and conditions. Ambassadors can walk freely between the 2 rooms. Ambassadors are never considered a part of a room’s population. Therefore, Ambassadors can never take part in any vote, be hostages, be leaders, and they can never be targeted by abilities.', note: 'Ambassadors don’t count towards the player count in the game. This means if you have 18 players including the Ambassadors, you should be playing a 16 player game. Ambassadors don’t count for or against Team Zombie’s win objective.', color: 'red', team: 'red'},
  {name: 'Anarchist', role: 'You win if your vote helped successfully usurp a leader during a majority of the rounds. For example, in a 3 round game, you must have usurped a leader 2 of the 3 rounds.', color: 'grey', team: 'none'},
  {name: 'Angel', role: 'You begin with the “honest” condition. Players with the “honest” condition must always verbally tell the truth. This means that you are permitted to lie as long as it is not verbally.', note: 'If a player with the “honest” condition were to acquire the “liar” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'blue', team: 'blue'},
  {name: 'Angel', role: 'You begin with the “honest” condition. Players with the “honest” condition must always verbally tell the truth. This means that you are permitted to lie as long as it is not verbally.', note: 'If a player with the “honest” condition were to acquire the “liar” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'red', team: 'red'},
  {name: 'Blind', role: 'You begin with the “blind” condition. Players with the “blind” condition must do their best to never open their eyes during the game. Don’t worry, it is a short game.', color: 'blue', team: 'blue'},
  {name: 'Blind', role: 'You begin with the “blind” condition. Players with the “blind” condition must do their best to never open their eyes during the game. Don’t worry, it is a short game.', color: 'red', team: 'red'},
  {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
  {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
  {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
  {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
  {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
  {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
  {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
  {name: 'Blue Team', role: 'You are on the Blue Team. You win If the President does not gain the “dead” condition.', note: 'Any character card that has the star icon on it is considered to be on the Blue Team.', color: 'blue', team: 'blue'},
  {name: 'Bomb-Bot', role: 'You win if you are in the same room as the Bomber but the President is not.', color: 'grey', team: 'none'},
  {name: 'Bomber', role: 'You are a primary character. Everyone in the same room as you at the end of the game gains the “dead” condition. The Red Team wins if the President gains the “dead” condition.', note: 'if the Bomber receives the “dead” condition before the end of the game then the Bomber does not provide the “dead” condition to everyone in the same room.', color: 'red', team: 'red'},
  {name: 'Bouncer', role: 'You have the BOUNCER power: if you are in a room that has more players than the other room, you may privately reveal your card to any player and verbally tell them, “Get out!” When you do, that player must immediately change rooms. The BOUNCER power does not work during the last round or between rounds.', color: 'blue', team: 'blue'},
  {name: 'Bouncer', role: 'You have the BOUNCER power: if you are in a room that has more players than the other room, you may privately reveal your card to any player and verbally tell them, “Get out!” When you do, that player must immediately change rooms. The BOUNCER power does not work during the last round or between rounds.', color: 'red', team: 'red'},
  {name: 'Butler', role: 'You win if you are in the same room as the Maid and the President at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Clone', role: 'You win if the first player with whom you card share or color share wins. If you fail to share with any player by the end of the game, you lose.', note: 'if the first person with whom you share is the Robot, and the Robot’s first share was with you… you both lose', color: 'grey', team: 'none'},
  {name: 'Clown', role: 'Do your best to smile at all times.', color: 'blue', team: 'blue'},
  {name: 'Clown', role: 'Do your best to smile at all times.', color: 'red', team: 'red'},
  {name: 'Conman', role: 'You have the CONMAN power: when a player agrees to color share with you, private reveal instead. They must private reveal their card too.', color: 'blue', team: 'blue'},
  {name: 'Conman', role: 'You have the CONMAN power: when a player agrees to color share with you, private reveal instead. They must private reveal their card too.', color: 'red', team: 'red'},
  {name: 'Coyboy', role: 'You begin with the “coy” condition. Players with the “coy” condition may ONLY color share unless a character’s power forces otherwise.', Note: 'The “coy” condition is a psych condition and can be cured by a Psychologist. Another Note: If a player with the “coy” condition were to acquire the “foolish” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'blue', team: 'blue'},
  {name: 'Coyboy', role: 'You begin with the “coy” condition. Players with the “coy” condition may ONLY color share unless a character’s power forces otherwise.', note: 'The “coy” condition is a psych condition and can be cured by a Psychologist. Another Note: If a player with the “coy” condition were to acquire the “foolish” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'red', team: 'red'},
  {name: 'Criminal', role: 'You have the CRIMINAL power: any player that card shares with you gains the “shy” condition. Players with the “shy” condition may not reveal any part of their card to any player.', note: 'If a player with the “foolish” condition were to acquire the “shy” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'blue', team: 'blue'},
  {name: 'Criminal', role: 'You have the CRIMINAL power: any player that card shares with you gains the “shy” condition. Players with the “shy” condition may not reveal any part of their card to any player.', note: 'If a player with the “foolish” condition were to acquire the “shy” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'red', team: 'red'},
  {name: 'Cupid', role: 'You have the CUPID power: once per game, you may privately reveal your card to 2 players. You must verbally tell your target players, “You are in love with each other.” Those 2 players gain the “in love” condition. Players with the “in love” condition replace their original win objective with the following win objective: Be in the same room with the player with whom you are “in love” at the end of the game or fail to win. The CUPID power cannot be used on yourself.', note: 'If a player with the “in love” condition were to acquire the “in hate” condition, the 2 conditions would cancel one another, leaving that specific player with neither condition.', color: 'red', team: 'red'},
  {name: 'Dealer', role: 'You have the DEALER power: any player that card shares with you gains the “foolish” condition. Players with the “foolish” condition can never turn down an offer to card or color share.', note: 'If a player with the “foolish” condition were to acquire a contradictory condition (e.g. “shy” or “coy”), the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'blue', team: 'blue'},
  {name: 'Dealer', role: 'You have the DEALER power: any player that card shares with you gains the “foolish” condition. Players with the “foolish” condition can never turn down an offer to card or color share.', note: 'If a player with the “foolish” condition were to acquire a contradictory condition (e.g. “shy” or “coy”), the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'red', team: 'red'},
  {name: 'Decoy', role: 'You win if the Sniper shoots you at the end of the last round.', color: 'grey', team: 'none'},
  {name: 'Demon', role: 'You begin with the “liar” condition. Players with the “liar” condition must always verbally tell lies. This means that you are permitted to tell the truth as long as it is not verbally.' ,note: 'If a player with the “liar” condition were to acquire the “honest” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'blue', team: 'blue'},
  {name: 'Demon', role: 'You begin with the “liar” condition. Players with the “liar” condition must always verbally tell lies. This means that you are permitted to tell the truth as long as it is not verbally.' ,note: 'If a player with the “liar” condition were to acquire the “honest” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'red', team: 'red'},
  {name: 'Doctor', role: 'When playing with the Doctor, the Blue Team has the following additional win condition: the President must card share with the Doctor before the end of the game or the Blue Team loses. At the end of the game, the President will be asked if he/she card shared with the Doctor. At that time both players will verify or deny having card shared.', note: 'remember that if the President or Bomber character ever switches player control (perhaps due to the Hot Potato), then the new President/Bomber must card share with the Doctor/Engineer to prevent losing.', color: 'blue', team: 'blue'},
  {name: 'Dr. Boom', role: 'You have the BOOM power: if you card share with the President, everyone in the same room as you instantly gains the “dead” condition and the game ends.', note: 'the BOOM power never works on the President’s Daughter. If the President is buried, the BOOM power is never used', color: 'red', team: 'red'},
  {name: 'Drunk', role: 'Before characters cards are dealt but after they are shuffled, randomly remove a character card. This is the “sober” character card. Place the “sober” card facedown in a location easily accessible to all players (usually between the 2 rooms). Then shuffle the Drunk card into the remaining deck of character cards. At the beginning of the last round of the game, the Drunk character should trade their Drunk card with the “sober” card. Assume all powers and responsibilities associated with the “sober” character card. You lose if you forget or are unable to trade your card for the “sober” card.', note: 'The “sober” card is always cleansed when it is first retrieved, meaning it has no acquired conditions. Another Note: If you don’t retrieve the “sober” card at the beginning of the last round, you’re still considered to be the “sober” character.', color: 'purple', team: 'none'},
  {name: 'Enforcer', role: 'You have the ENFORCER power: once per round, you may privately reveal your card to 2 players. You must verbally tell your target players, “You must reveal your cards to one another.” Those 2 players must card share with one another (not to you). You cannot use this power on yourself, but another Enforcer can use their power on you.', note: 'The ENFORCER power works even on characters that normally can’t card share (e.g. Shy Guy).', color: 'blue', team: 'blue'},
  {name: 'Enforcer', role: 'You have the ENFORCER power: once per round, you may privately reveal your card to 2 players. You must verbally tell your target players, “You must reveal your cards to one another.” Those 2 players must card share with one another (not to you). You cannot use this power on yourself, but another Enforcer can use their power on you.', note: 'The ENFORCER power works even on characters that normally can’t card share (e.g. Shy Guy).', color: 'red', team: 'red'},
  {name: 'Engineer', role: 'When playing with the Engineer, the Red Team has the following additional win condition: the Bomber must card share with the Engineer before the end of the game or the Red Team loses. At the end of the game, the Bomber will be asked if he/she card shared with the Engineer. At that time both players will verify or deny having card shared.', note: 'remember that if the President or Bomber character ever switches player control (perhaps due to the Hot Potato), then the new President/Bomber must card share with the Doctor/Engineer to prevent losing.', color: 'red', team: 'red '},
  {name: 'Eris', role: 'You have the ERIS power: once per game, you may privately reveal your card to 2 players. You must verbally tell your target players, “You hate each other.” Those 2 players gain the “in hate” condition. Players with the “in hate” condition replace their original win objective with the following win objective: be in the opposite room of the player with whom you are “in hate” at the end of the game or fail to win. You cannot use this power on yourself.', note: 'If a player with the “in hate” condition were to acquire the “in love” condition, the 2 conditions would cancel one another, leaving that specific player with neither condition.', color: 'blue', team: 'blue'},
  {name: 'Gambler', role: 'At the end of the last round, before all players reveal their cards, you must publicly announce which team (Red Team, Blue Team, or neither) you think won the game. Win only if you are correct. ',note: 'You have a pause game number of 10. Only pause the game and make your announcement after all characters with a lower pause game number (e.g. Private Eye) have finished their announcements.', color: 'grey', team: 'none'},
  {name: 'Hot Potato', role: 'You have the HOT POTATO power: any player that card shares or color shares with you immediately trades cards with you. Both you and the other player assume the powers and the allegiance of the newly acquired cards. The Hot Potato loses at the end of the game.', note: 'Due to the cleanse rule, any previously acquired conditions (e.g. “cursed”) are lost when receiving a new character card.', color: 'grey', team: 'none'},
  {name: 'Immunologist', role: 'You begin with the “immune” condition. Players with the “immune” condition are immune to all powers and conditions without exception.', note: 'Players should never lie about having the “immune” condition.', color: 'blue', team: 'blue'},
  {name: 'Immunologist', role: 'You begin with the “immune” condition. Players with the “immune” condition are immune to all powers and conditions without exception.', note: 'Players should never lie about having the “immune” condition.', color: 'red', team: 'red'},
  {name: 'Intern', role: 'You win if you are in the same room as the President at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Juliet', role: 'You win if you are in the same room as Romeo and the Bomber at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Leprechaun', role: 'You begin with the “foolish” condition. Players with the “foolish” condition can never turn down an offer to card or color share. You also have the LEPRECHAUN power: Any player that card shares or even color shares with you immediately trades cards with you. Both you and the other player assume the powers and the allegiance of the newly acquired cards. At the end of the game, the Leprechaun wins. A single player can only ever be the Leprechaun once per game. If a player is about to become the Leprechaun character for the second time, they must communicate that they can’t receive the Leprechaun card.', note: 'Due to the cleanse rule, any previously acquired conditions (e.g. “cursed”) are lost when receiving a new character card. Another Note: If a player with the “foolish” condition were to acquire a contradictory condition (e.g. “shy” or “coy”), the 2 conditions would cancel one another, leaving the player with neither condition', color: 'green', team: 'none'},
  {name: 'Maid', role: 'You win if you are in the same room as the Butler and the President at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Martyr', role: 'You are the backup character for the Bomber. If the Bomber card is buried you must carry out all Bomber responsibilities (i.e. ending the game in the same room as the President, card sharing with the Engineer, etc.).', color: 'red', team: 'red'},
  {name: 'Mastermind', role: 'You win if you are a room’s leader at the end AND you were the leader of the opposing room at some point during the game.', color: 'grey', team: 'none'},
  {name: 'Mayor', role: 'If your room has an even number of players, you may publicly reveal your card when attempting to usurp a leader. Your vote to usurp counts as 2 votes instead of 1 unless the opposing Mayor also publicly reveals their card.', color: 'blue', team: 'blue'},
  {name: 'Mayor', role: 'If your room has an even number of players, you may publicly reveal your card when attempting to usurp a leader. Your vote to usurp counts as 2 votes instead of 1 unless the opposing Mayor also publicly reveals their card.', color: 'red', team: 'red'},
  {name: 'Medic', role: 'You have the MEDIC power: any player that card shares with you has all “conditions” removed. This does not make yourself immune to acquiring conditions. The opposing Medic can remove your acquired conditions.', color: 'blue', team: 'blue'},
  {name: 'Medic', role: 'You have the MEDIC power: any player that card shares with you has all “conditions” removed. This does not make yourself immune to acquiring conditions. The opposing Medic can remove your acquired conditions.', color: 'red', team: 'red'},
  {name: 'MI6', role: 'You win if you card share with the Bomber and the President before the end of the game', color: 'grey', team: 'none'},
  {name: 'Mime', role: 'Do your best to not make any noise.', color: 'blue', team: 'blue'},
  {name: 'Mime', role: 'Do your best to not make any noise.', color: 'red', team: 'red'},
  {name: 'Minion', role: 'You win if a leader is never usurped in the same room as you.', color: 'grey', team: 'none'},
  {name: 'Mistress', role: 'You win if you are in the same room as the President at the end of the game and the Wife is not.', color: 'grey', team: 'none'},
  {name: 'Moby', role: 'You win if Ahab is in the same room as the Bomber at the end of the game and you are not.', color: 'grey', team: 'none'},
  {name: 'Mummy', role: 'You have the MUMMY power: any player that card shares with you gains the “cursed” condition. Players with the “cursed” condition must do their best to not make any noise.', note: 'Because of the MUMMY power, “cursed” players are prevented from using any powers or abilities that requires a verbalization (e.g. Agent, Enforcer, etc.).', color: 'blue', team: 'blue'},
  {name: 'Mummy', role: 'You have the MUMMY power: any player that card shares with you gains the “cursed” condition. Players with the “cursed” condition must do their best to not make any noise.', note: 'Because of the MUMMY power, “cursed” players are prevented from using any powers or abilities that requires a verbalization (e.g. Agent, Enforcer, etc.).', color: 'red', team: 'red'},
  {name: 'Negotiator', role: 'You begin with the “savvy” condition. Players with the “savvy” condition may only card share. You may not publicly, privately, or color share.', note: 'It is possible for “savvy” players to acquire conditions that prevent card sharing (e.g. the “coy” or “shy” condition). If this happens, then the “savvy” player can’t do anything with their card', color: 'blue', team: 'blue'},
  {name: 'Negotiator', role: 'You begin with the “savvy” condition. Players with the “savvy” condition may only card share. You may not publicly, privately, or color share.', note: 'It is possible for “savvy” players to acquire conditions that prevent card sharing (e.g. the “coy” or “shy” condition). If this happens, then the “savvy” player can’t do anything with their card', color: 'red', team: 'red'},
  {name: 'Nuclear Tyrant', role: 'At the end of the game, you are asked if you shared your card with both the President and the Bomber. You win if the President and the Bomber did not card share with you by the end of the game. If you win, all other players lose. You begin with the “foolish” condition. Players with the “foolish” condition can never turn down an offer to card share.', note: 'If a player with the “foolish” condition were to acquire a contradictory condition (e.g. “shy” or “coy”), the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'grey', team: 'none'},
  {name: 'Nurse', role: 'You are the backup character for the Doctor. If the Doctor card is buried, you must carry out Doctor responsibilities (i.e. card sharing with the President).', color: 'blue', team: 'blue'},
  {name: 'Paparazzo', role: 'Do your best to make sure there are no private conversations. Be as intrusive and nosy as possible without actually physically manipulating others. If playing with the Privacy Promise rule variant, ignore the rule as long as you publicly reveal your card to prove to others that you are permitted to be invasive.', color: 'blue', team: 'blue'},
  {name: 'Paparazzo', role: 'Do your best to make sure there are no private conversations. Be as intrusive and nosy as possible without actually physically manipulating others. If playing with the Privacy Promise rule variant, ignore the rule as long as you publicly reveal your card to prove to others that you are permitted to be invasive.', color: 'red', team: 'red'},
  {name: 'Paranoid', role: 'You begin with the “paranoid” condition. Players with the “paranoid” condition may only card share. Moreover, they may only card share once per game.', note: 'If a “paranoid” player is forced to card share by a power (e.g. the AGENT power), this does not count as the “paranoid” player’s only card share. Another Note: The “paranoid” condition is a psych condition and can be cured by a Psychologist. Another Note: If a player with the “paranoid” condition were to acquire the “foolish” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'blue', team: 'blue'},
  {name: 'Paranoid', role: 'You begin with the “paranoid” condition. Players with the “paranoid” condition may only card share. Moreover, they may only card share once per game.', note: 'If a “paranoid” player is forced to card share by a power (e.g. the AGENT power), this does not count as the “paranoid” player’s only card share. Another Note: The “paranoid” condition is a psych condition and can be cured by a Psychologist. Another Note: If a player with the “paranoid” condition were to acquire the “foolish” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'red', team: 'red'},
  {name: 'President', role: 'You are a primary character. Blue Team wins if you do not gain the “dead” condition.', color: 'blue', team: 'blue'},
  {name: 'President\'s Daughter', role: 'You are the backup character for the President. If the President card is buried you must carry out all responsibilities associated with the President.', color: 'blue', team: 'blue'},
  {name: 'Private Eye', role: 'At the end of the last round, before all players reveal their character cards, you must publicly announce the identity of the buried card. Win only if you are correct.', note: 'You have a pause game number of 5. Only pause the game and make your announcement after all characters with a lower pause game number have finished their announcements.', color: 'grey', team: 'none'},
  {name: 'Psychologist', role: 'When you privately reveal your card to a character with a psych condition (e.g. “shy”, “coy”, etc.), that character may then immediately card share with you. If they do, their psych condition is removed.', color: 'blue', team: 'blue'},
  {name: 'Psychologist', role: 'When you privately reveal your card to a character with a psych condition (e.g. “shy”, “coy”, etc.), that character may then immediately card share with you. If they do, their psych condition is removed.', color: 'red', team: 'red'},
  {name: 'Queen', role: 'You win if you are NOT in the same room as the President or the Bomber at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
  {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
  {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
  {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
  {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
  {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
  {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
  {name: 'Red Team', role: 'You are on Red Team. You win if the President gains the “dead” condition.', note: 'Any character card that has the bomb icon on it is considered to be on the Red Team.', color: 'red', team: 'red'},
  {name: 'Rival', role: 'You win if you are NOT in the same room as the President at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Robot', role: 'You win if the first player with whom you card share or color share fails to achieve all of their win objectives. If you fail to share with any players by the end of the game, then you lose.', note: 'if the first person with whom you share is the Clone, and the Clone’s first share was with you… you both lose.', color: 'grey', team: 'none'},
  {name: 'Romeo', role: 'You win if you are in the same room as Juliet and the same room as the Bomber at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Security', role: 'You have the TACKLE power: publicly reveal your card, immediately pick any player in the room (besides yourself), then verbally tell them, “You’re going nowhere.” However, your card must permanently remain publicly revealed for the rest of the game. This means that you can only use this power once. The target of your TACKLE power can’t leave as a hostage this round.', color: 'blue', team: 'blue'},
  {name: 'Security', role: 'You have the TACKLE power: publicly reveal your card, immediately pick any player in the room (besides yourself), then verbally tell them, “You’re going nowhere.” However, your card must permanently remain publicly revealed for the rest of the game. This means that you can only use this power once. The target of your TACKLE power can’t leave as a hostage this round.', color: 'red', team: 'red'},
  {name: 'Shy Guy', role: 'You begin with the “shy” condition. Players with the “shy” condition may not reveal any part of their card to any player.', note: 'The “shy” condition is a psych condition and can be cured by a Psychologist. Another Note: If a player with the “shy” condition were to acquire the “foolish” condition, the 2 conditions would cancel one another, leaving the player with neither condition', color: 'blue', team: 'blue'},
  {name: 'Shy Guy', role: 'You begin with the “shy” condition. Players with the “shy” condition may not reveal any part of their card to any player.', note: 'The “shy” condition is a psych condition and can be cured by a Psychologist. Another Note: If a player with the “shy” condition were to acquire the “foolish” condition, the 2 conditions would cancel one another, leaving the player with neither condition', color: 'red', team: 'red'},
  {name: 'Sniper', role: 'At the end of the last round, before all players reveal their character cards, you must publicly announce which player you are shooting. The selected player does not have to be in the same room as you. You win if the player you selected is the Target.', note: 'You have a pause game number of 15. Only pause the game and make your announcement after all characters with a lower pause game number (e.g. Private Eye) have finished their announcements.', color: 'grey', team: 'none'},
  {name: 'Spy', role: 'This is a special character card that is the color of the opposite team. This means that the red Spy has an allegiance to the Red Team, but their card is blue.', color: 'red', team: 'blue'},
  {name: 'Spy', role: 'This is a special character card that is the color of the opposite team. This means that the red Spy has an allegiance to the Red Team, but their card is blue.', color: 'blue', team: 'red'},
  {name: 'Survivor', role: 'You win if you are NOT in the same room as the Bomber at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Target', role: 'You win if the Sniper does not shoot you at the end of the last round.', color: 'grey', team: 'none'},
  {name: 'Thug', role: 'You have the THUG power: any player that card shares with you acquires the “coy” condition. Players with the “coy” condition may only color share even when a character’s power might force a card share.', note: 'If a player with the “foolish” condition were to acquire the “coy” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'blue', team: 'blue'},
  {name: 'Thug', role: 'You have the THUG power: any player that card shares with you acquires the “coy” condition. Players with the “coy” condition may only color share even when a character’s power might force a card share.', note: 'If a player with the “foolish” condition were to acquire the “coy” condition, the 2 conditions would cancel one another, leaving the player with neither condition.', color: 'red', team: 'red'},
  {name: 'Tinkerer', role: 'You are the backup character for the Engineer. If the Engineer card is buried you must carry out all Engineer responsibilities (i.e. card sharing with the Bomber).', color: 'red', team: 'red'},
  {name: 'Traveler', role: 'You win if you are sent to a different room as a hostage at the end of MOST rounds. For example, in a 3 round game, you must change rooms twice to win.', color: 'grey', team: 'none'},
  {name: 'Tuesday Night', role: 'You have the HUG power: if you card share with the Bomber, everyone in the same room as you, except the President, gains the “dead” condition and the game instantly ends.', note: 'the HUG power never works on the Martyr. If the Bomber is buried, the HUG power is never used.', color: 'blue', team: 'blue'},
  {name: 'Usurper', role: 'You have the USURPER power: during any round but the last, you may publicly reveal your card and become the leader. However, your card must permanently remain publicly revealed for the rest of the game. This means that you can only use this power once. You cannot be usurped during the same round in which you used your USURPER power, not even by another Usurper. If 2 Usurpers use their power in the same room during the same round, whichever Usurper used their power first remains the leader, the other Usurper wasted their power. ', color: 'blue', team: 'blue'},
  {name: 'Usurper', role: 'You have the USURPER power: during any round but the last, you may publicly reveal your card and become the leader. However, your card must permanently remain publicly revealed for the rest of the game. This means that you can only use this power once. You cannot be usurped during the same round in which you used your USURPER power, not even by another Usurper. If 2 Usurpers use their power in the same room during the same round, whichever Usurper used their power first remains the leader, the other Usurper wasted their power. ', color: 'red', team: 'red'},
  {name: 'Victim', role: 'You win if you are in the same room as the Bomber at the end of the game.', color: 'grey', team: 'none'},
  {name: 'Zombie', role: 'You begin with the “zombie” condition. The “zombie” condition provides a replacement win condition. Players with the “zombie” condition win if Team Zombie wins. Team Zombie wins if all players without the “dead” condition at the end of the game are on Team Zombie. Any player that card shares or color shares with a player that has the “zombie” condition gains the “zombie” condition.', note: '“zombie” players without a Zombie character card must indicate to players with whom they card share or color share that they now also have the “zombie” condition. Typically this is done by saying something like, “I’m a Zombie, and now so are you.”', color: 'green', team: 'zombie'},
]

module.exports = {
    testingRolesArray: testingRolesArray,
    fullRolesArray: fullRolesArray
}
