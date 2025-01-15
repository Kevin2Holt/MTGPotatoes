This is a pet project to make a website where I can sell my MTG cards. I then got into making proxies (ones that were very obviously not official), so I decided to also include selling those as well. Then to top it all off, I wanted to make MTG more accessible to new players—in part by making good/decent decks easy and affordable through proxies and pre-designed decks— so I started writing up simple instructions and "tutorials" on how to play. All of these ideas got combined into this one website.

As you might notice, there is a lot of missing parts. While not completely intentional, it is the unfortunate by-product of having many, many random ideas, ADHD which will switch it's hyperfocus every week or two, and life deciding how much time I actually have to work on these many assorted ideas.

In short, yes, I would love to return back to this project. Life just has this way of constantly changing things up on me, and when you combine that with consistently changing priorities, most of my pet/side projects have been put on hold for some unknown amount of time.


This project uses Node.js to run the web server. This can be done locally using a command line terminal such as Windows' "Command Prompt".

To run this locally, you will need to do a few things first:

1) Install Node.js & npm
	https://nodejs.org/en/download
	https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

2) Open a command line terminal to the project folder (with "app.js" in it)
3) Run the command "npm install"
	*This installs all of the dependencies (the packages need for the web server to run)

*Optional: Run the command "npm install -g nodemon"
	Nodemon is a node package that will automatically restart the server if it crashes or sees a file update (suh as development changes)

4) Run the command "node app.js"
	If you have nodemon installed, use "nodemon app.js"

Once the web server is running, you can then open a browser and connect to the website.
This is done easiest by using this "url":
	localhost:3000

All this "url" does is search for a web server on your local machine that is listening on port 3000



*Notes:
	An internet connection is not requred to run the web server, though it will cause certain parts of this specific website to not load.
	
	Devices on your local network (Wi-Fi) can access the website by using your devices local IP address in the place of "localhost"
		Example: 192.168.1.12:3000

	Without making specific changes to your network, no one outside of your local network will be able to reach the web server. Thus, you are not compromising your security just by running the web server on your device.
