# Pixel Art Maker

<p align="center">
  <img src="img/canvas-example.png" alt="Sample Image Generated From Application Showing A Landscape Of A House And Surrounding Area">
</p>

### Running The Application
The application can be run by clicking [here](https://wbchristerson.github.io/pixel-art/). To download, you can clone the repository using this terminal command:
```
git clone https://github.com/wbchristerson/pixel-art.git
```

Alternatively, follow the instructions below to download to a hard drive:
* Click the green "Clone or download" button above then choose "Download ZIP".
* Find the folder `pixel-art-master` in your Downloads folder or wherever it was placed on your device.
* Right click and choose "Extract All".
* Open your browser and use `Ctrl + O` (for Windows machines) to open the file selector on your device.
* Go to `pixel-art-master`, enter `pixel-art-master` again, then select `index.html`. The game screen will appear.

### Structure
<!-- * The game includes 15 levels in which the user must traverse a crossing which contains enemies.
* The user traverses the board using the arrow keys.
* When the user comes in contact with an enemy, he/she loses a life and returns to the start of the level at the default position on screen.
* The user can also collect gems (of varying point values) and stars (which give extra lives).
* If the user loses all lives, then the game ends in a loss. If the user completes all 15 levels with at least one life left, then the game ends in a win.
* When the game ends, the player may then play again or return to the introductory page. -->

### Design
<!-- The game begins with an introductory page explaining how to play. It also lists the possible avatars for the user, along with the keys to be pressed to switch to those avatars. The player begins by pressing the "space" key.

<p align="center">
  <img src="images/intro-page.png" alt="Frogger Introductory Page">
</p>

The game page includes a background of grass, brick, and water units. The score, health, and level appear at the bottom. Enemy sprites cross the screen from left to right at varying speeds and positions. Gems and stars occasionally appear, bobbing up and down until collected. When a gem is collected, it disappears and its added point value drifts up the screen for several iterations. Blue gems are worth 3 points, green gems are worth 6 points, and orange gems are worth 9 points. Upon reaching levels 5, 10, and 15, an announcement appears across the screen for several iterations.

<p align="center">
  <img src="images/game-page.png" alt="Frogger Game Page">
</p>

The end page is very similar to the introductory page and congratulates both losses and wins.

<p align="center">
  <img src="images/end-lose-page.png" alt = "Frogger Lose End Page">
  <img src="images/end-page.png" alt = "Frogger Win End Page">
</p>

To give the impression of increasing difficulty, the chance of each of three independent rocks appearing on screen increases up to level 5, after which time they will all always appear (though sometimes overlapping each other). Furthermore, one strategy to avoid losing lives is to wait for the right half of the screen to become clear and cross from that half (since enemies always cross the screen from left to right). So to further increase difficulty beyond level 5, a fourth rock will always appear somewhere in the rightmost column. -->

<!-- ### Personal Programming Details -->
<!-- This was my first attempt at using object-oriented design in JavaScript to create a program. There are classes for the enemies (the bug sprites), the player, the health units appearing at the bottom of the screen, the game state, the rocks, and the gem/star.

I am not fond of the user sprites but they seem to fit the theme. -->

### Remaining Issues
* When the mouse remains clicked down and is moved around, the intermediate pixels are not colored, making it time consuming to color entire regions of pixels in the same color. I could try to use the hover pseudo-class somehow for this, but have not considered this in detail.
<!-- * The gems which appear in various levels are from image files which are rectangular, whereas the gems themselves have octagonal shapes. This makes the shapes appear incorrectly in the game.
* I would have liked to have had the user's sprite do something more noticeable upon finishing a level, like rotating 360 degrees. I tried using the `.save()` and `.restore()` functions in conjunction with the `.rotate` function but was unable to make it work correctly.
* Occasionally the board will be randomly set up so that there will be a gem or star visible but it will be impossible to obtain it because of rock obstructions and possibly also water (since upon reaching water, it cannot be left for the duration of the level). This kind of configuration ought to be avoided somehow. -->
