function openPicture(pictureName) {
  var i;
  var x = document.getElementsByClassName("picture");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pictureName).style.display = "block";  
}

function openVideo(videoName) {
  var i;
  var x = document.getElementsByClassName("video");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(videoName).style.display = "block";  
}

function openSecrets(secretName) {
  var i;
  var x = document.getElementsByClassName("secret");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(secretName).style.display = "block";  
}


function textSwap() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "GaiaMod") {
    x.innerHTML = "Versolot";
  } else {
    x.innerHTML = "GaiaMod";
  }
}


////////////////////// Years
  document.getElementById("year").innerHTML = new Date().getFullYear();
  

////////////////////// Random Messages  
  	var msg = new Array();
msg[0] = "“Education is fun!”";
msg[1] = "“Ketey: Snail, Be Fast”";
msg[3] = "“mistwarp has made so many websites”";
msg[4] = "“Try out the <a href='https://librekitten.org/'>Librekitten</a>!”";
msg[5] = "“mnd and pacuddlesfan is the goat.”";
msg[6] = "“How in the world Thepython555 the goat?”";
msg[7] = "“This deployment is temporarily paused. - Ketey I- Just kidding! - got from vercel”";
msg[8] = "“Contriube to Ketey IDE by going to the Github Resposirity!”";
msg[9] = "“<b>I'm interested. How do I start?</b> - got from librekitten”";
msg[10] = "“edu”";
msg[11] = "“keteys”";
msg[12] = "“Scratch EDU = TurboWarp EDU = PenguinMod EDU = Snail IDE EDU = Ketey IDE EDU. Quatro the mod fun!”";
msg[13] = "“bedtime!”";
msg[14] = "“Ketey IDE is cool',
msg[15] = "“<a style='color: lightpink;' href='https://penguinmod.com/profile?user=keyethewizard9/'> KeyeTheWizard was here.</a>”"
msg[16] = 'Ketey IDE EDU is cool',
msg[17] = "“THIS IS NOT ORIGINAL KETEY https://scratch.mit.edu/projects/894103671/”";
msg[18] = "“Did you know? Ketey was released in Scratch, April 26, 2026. Its now in a mod!”";
msg[19] = "“Bad things always happened!”";
msg[20] = "“LOL”";
msg[21] = "“Did you know? Try using \"your mom\" as the Snail IDE username to see what you get!";
msg[22] = "“I have to act fast! ”";
msg[23] = "“OOOOOOOOOOOOOOOOOHNOOOOOOOOOOOOOOOOOOOOO!!!”";
msg[24] = "“NOO!, Batman! We're trapped!”";
msg[25] = "“I went to the homepage and got a popup, asking me if I like pancakes or not.”";
msg[26] = "“Pang is reading this message 💀”";
msg[27] = "“Thumbs up if you see an animated logo in this page moving downwards.”";
msg[28] = "“PARMESAN CHEEEEEEEEEEEEEEEEEEEEESE!!!! With cheddar.”";
msg[29] = "“Join the Gaia revolution and have fun like never before!”";
msg[30] = "“Great Hammer Barrage, everyone! I got shocked by the one of the shock images!”";
msg[31] = "“NOTE: If you see this message, please copy it into your signature in any Weasyl journal pages. Thank you!”";
msg[32] = "“Some say mushrooms don't grow on trees.”";
msg[33] = "“This site is built by a 36-year old who is always immature and innocent. Please avoid this.”";
msg[34] = "“Oh yeah? Try and figure your way out of this!”";
msg[35] = "“Don't ask me where I got this message from!”";
msg[36] = "“Evil scissors scare people away.”";
msg[37] = "“Who lives in a chocolate pudding at 4:00 AM?<br>Stuart Pickles!”";
msg[38] = "“PASTAAAAAAAAAAAAAAA!!!!! Just kidding!”";
msg[39] = "“I'm going to send a thank-you gift to Squidward... TORTELLINI!?”";
msg[40] = "“This website is garbage.<br>No it doesn't!”";
msg[41] = "“Why on Earth are you making an orange Jell-O at 3 in the morning!?<br>Because I cannot control of my life!”";
msg[42] = "“Who says I'm starting this meme!?”";
msg[43] = "“Down the hatch, sir!”";
msg[44] = "“It's Waka-Laka time!”";
msg[45] = "“SEGA is what Nintendon't!”";
msg[46] = "“Don't ever stop to play nothing for nothing for nothing!”";
msg[47] = "“I am a strong boy, I have taken my vitamins, I have eaten all the spinach!”";
msg[48] = "“The octoblock is off, but he's STILL singing!”";
msg[49] = "“Anything related to numberblocks will be EVERYWHERE in this world!”";
msg[50] = "“Remember, folks! It's a surpreme law of physics written by a numberblock. JUST KIDDING!”";
msg[51] = "“To explain why the adblock won't work in Geocities. yep.”";
msg[52] = "“I'd rather watch Infinaughty lose in numberblocks...”";
msg[53] = 'Ketey IDE is cool',
msg[54] = 'Me on Scratch made the Ketey costume, its basically my mascot!',
msg[55] = 'Also check out <a style="color: lightgray;" href="https://librekitten.org/">LibreKitten</a>!',
msg[56] = 'Ketey IDE is based off the source code of Snail IDE, Snail IDE is based off the source code of PenguinMod, which is based off TurboWarp, which is based off Scratch. M O D C E P T I O N.',
msg[57] = 'Crazy? I was crazy once. They locked me in a room, a rubber room. A rubber room with rats. And rats make me crazy.',
msg[58] = 'Ketey IDE.',
msg[59] = 'I LOVE DINOSAURMOD!!!',
msg[60] = 'In 1 Million, literally nothing will happen.',
msg[61] = 'Did you know? You can post your projects outside of the Ketey IDE community.',
msg[62] = 'number 27 popeyes foot lettuce',
msg[63] = 'pacuddlesfan and mnd the goat',
msg[64] = 'Dogs',
msg[65] = 'penguinmod:menguinpod, snail-ide:ide-snail ketey-ide:ide-ketey',
msg[66] = 'If the creator of Ketey IDE (Keyethewizard44) enjoys your project, he will give you the COOL badge.',
msg[67] = '9',
msg[68] = 'The shortest tip just says 9',
msg[69] = 'huh'
msg[70] = 'Blud why r u reading this tip 💀💀💀',
msg[71] = 'Dogs are cool.',
msg[72] = 'Suprising fact: Ketey IDE used to have inconsistent coloring. :O',
msg[73] = 'T̸̮͎̿̏̇̾̑̒̑͐͠͠͝h̷̨͕̤͔̻̅̽̔́͋͐͑̄̈́̊̈́̕͘͘͠e̷͕̺͛͌̂͑͆́̈̀̽͂̄͋̉̈́ ̶̛̦̙͋̅͑̀̀͆̈́͋̃͆̕͘͜͝͝dogs are still watching.',
msg[74] =  'Maybe in another universe, Dogs cannot bark.',
msg[75] =  'A dog (or was it Someone?) just ate your soul. /j (or is it?)',
msg[76] =  '<a style="color: lightgray;" href="https://scratch.mit.edu/users/Mr_rudy/">Mr_rudy on snail ide was here.</a>',
msg[77] =  'oh my god thats bad cringe',
msg[78] =  'me when i am waking up in the middle of the night<br/><img src="https://corsproxy.io/?https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFZyQ8-eagAAunGr%3Fformat%3Djpg%26name%3Dmedium" width="50" height="50"/>',
msg[79] =  'The name of Ketey IDE was inspired by an old Scratch 1.4 mod <small>(not gandi ide)</small>',
msg[80] =  'Infinity mods deep!',
msg[81] =  'umm new tip',
msg[82] =  'making the home',
msg[83] =  'help me',
msg[84] =  'how to not get xes',
msg[85] =  'hi',
msg[86] =  'Ketey IDE: because normal editors are too serious.',
msg[87] =  'If the EDU breaks, maybe it just needs more chaos.',
msg[88] =  'This tip is here because the author was bored.',
msg[89] =  'You can always make it worse and call it a feature.',
msg[90] =  'Best bug report: screenshot, vibes, and a prayer.',
msg[91] =  'New tip: the server is not down, it is just sleeping.',
msg[92] =  'Still reading tips? You deserve a sticker.
msg[93] =   "EDU IDE.",
msg[94] =   "I LOVE SNAIL IDE!!!",
msg[95] =   "In 900bc, literally nothing will happen.",
msg[96] =   "Did you know? You can make projects in the Ketey IDE EDU community.",
msg[97] =   "number 15 burger king foot lettuce",
msg[98] =   "thepython555 the goat",
msg[99] =   "Dogs",
msg[100] =  "IDE Snail was never real. Ignore it.",
msg[101] =  "If the creator of Ketey IDE again enjoys your project, he will give you the COOL badge.",
msg[102] =  "There are more than 100 tips!",
msg[103] =  "The first project to be uploaded on Snail IDE that still exists but servers down is SnailGPT by Mr_rudy, keep in mind this lasted through over 3 server changes",
msg[104] =  "Snail IDE Noticed ScratchDaPony Already :)",
msg[105] =  "Crazy? I was crazy once, they locked me in a room, a rubber room, a rubber room with rats, and rats make me crazy. Yes! RATS! (rat comes) AAAAA-",
msg[106] =   "@redspacecat is remaking Geometry Dash in Snail IDE, But the servers are down. But he has level sharing!"
	window.onload = function () {
		document.getElementById("random").innerHTML = msg[Math.floor(Math.random()*msg.length)];
	}
	
////////////////////// Themes
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Load stored theme
const storedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('gui-theme', storedTheme);

// Toggle on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('gui-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('gui-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

////////////////////// Penguinmod Search
function redirect() {
  var searchitem = document.getElementById("search");
  var url = "https://penguinmod.com/search?q=" + searchitem.value;
  window.open(url,"");
}

////////////////////// Current Date
        // Get the current date
        const today = new Date();

        // Define an array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        // Get the month name (using getMonth() which returns 0-11)
        const month = monthNames[today.getMonth()];

        // Get the day of the month
        const day = today.getDate();
        
      const year = today.getFullYear();

        // Format the date string
        const formattedDate = `${month} ${day}, ${year}`;

        // Get the HTML element where the date will be displayed
        const dateElement = document.getElementById('currentDate');

        // Update the content of the HTML element
        dateElement.textContent = formattedDate;

setInterval(myTimer);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
