## Activity: Chaos Simulator
We are going to use our new knowledge of variables and micro:bit communication to make a game! The screen on one micro:bit will represent the universe as we know it. Each LED represents a single point in time in space. When LEDs turn on, they represent chaos in our universe. It's our job to travel to these points in space and time to remove the chaos and return the universe to a state of peace and tranquility. 

### Setup
For this activity you'll need: 
- 2 micro:bits
- 1 micro:bit cable
- 2 battery packs

### Step 1: Program Chaos in the Universe (Turn on LEDs)
We are going to start by programming one of our micro:bits to represent the universe. In this universe, chaos is random and inevitable. We need to program our micro:bit to turn on an LED at a random location and at random time intervals. 

1. Head to [MakeCode v4](https://makecode.microbit.org/v4) and create a new project. We’ll call our project “universe”
2. Drag an `every 500 ms` block from the `Loops` tab into the editor. Right now, anything we put inside this block will happen every 500 ms. 
3. To make our chaos happen at random times, let's use a `pick random 0 to 10` block from the `Math` tab. Plug this block in to replace the `500` in the `every 500 ms` block. 1000 milliseconds is the same as 1 second, so let's change this block so it says `pick random 1000 to 5000 ms`. Now, whatever we put inside the green `every` block will happen once every 1-5 seconds. 

<!-- ![Every 1 to 5 seconds](/pictures/day2/every-1-5-sec.png) -->

4. Now let's make some chaos and turn on some lights! Open the `LED` tab and find the `plot x 0 y 0` block. This block turns on LEDs on at the coordinates that you give it. Let's try it out! Drag a `plot x 0 y 0` into the `pick random 1000 to 5000 ms` block. You should see one LED turn on in the virtual micro:bit. 

<!-- ![One LED turns on](/pictures/day2/one-led.png) -->

5. Let's take a look at how these LEDs work. The LEDs on the micro:bit are arranged in a grid with the top left LED being at `x:0, y:0` on the grid. As we move left to right, the `x` value increases. As we move from top to bottom, the `y` value increases. You can hover over an LED on the virtual micro:bit to see what its `x` and `y` values are:

<!-- ![Sprite Coordinates](/pictures/day2/CoordinatesforSprite.gif) -->

6. Right now, our program is turning on the LED at 0, 0 again and again every 1-5 seconds, but we want LEDs to turn on randomly, all over the screen. We can do this with another `pick random 0 to 10` block, which we can use to assign random `x` and `y` LED coordinates. Drag two more `pick random 0 to 10` blocks into the editor and use them to replace both of the `0`'s in the `plot x 0 y 0` block. Since the LEDs on the micro:bit are counted from `0` to `4`, set each random block so that it says `pick random 0 to 4`. Now LEDs will start turning on all over the place!

At this point, your universe code should look like this:

<!-- ![Multiple random LEDs turn on](/pictures/day2/random-leds.png) -->

You can test your code with the virtual micro:bit. You should see random LEDs turning on at random times. You can also flash your code to one micro:bit and make sure it's working.

### Step 2: Traverse the Universe (Move an LED across the screen)
We have officially introduced chaos into the universe, so we should probably do something to fix that. Let's program our other micro:bit to send signals and guide them across the universe to the points where chaos has sparked. 

Let's set up our code so that when we push the `A button`, the LED moves across the screen and when we push the `B button`, the LED moves down the screen. Then, when we `shake` the micro:bit, it will tell our signal to stop and heal the spot at its current location.

1. Go to [MakeCode v4](https://makecode.microbit.org/v4) in another tab, and start another new program. We'll call it "chaos-healer"
2. Drag a `clear screen` block from the `basic` tab into `forever` block. Then drag a `plot x 0 y 0` into the `forever` block below the `clear screen` block. Instead of using random numbers to determine x and y values, we will use variables.As we change these variables, an LED will move across and down the screen, representing our healing signals. 
3. Create an `x` variable and a `y` variable in the `Variables` tab. Drag each variable into the editor and plug them into the `plot x 0 y 0` block so that it reads `plot x (x) y (y)`. Our healing signals will always start at (0,0), so we'll use a `set variable to 0` block from the `Variables` tab to set both of these new variables to `0` in the on start block. 

<!-- ![set variables to 0 in the on start block](/pictures/day2/x-and-y-0.png) -->

4. Now all we need to do to move around on the screen is change our variables! Let's use the `A button` to change the `x` variable and move our signal across the screen. Grab an `on button A pressed` block from the `Inputs` tab, and drag it into the editor. Then, put a `change variable by 1` block from the `Variables` tab into the `on button A pressed` block, and use the dropdown to make sure you are changing the `x` variable. 

<!-- ![change x](/pictures/day2/change-x.png) -->

5. When we push the `B button`, we want our signal to move down the screen. This will work exactly the same as moving across the screen with the `A button`, but instead of an `on button A pressed` pressed block, we need an `on button B pressed` block, and instead of changing the `x` value, we should change the `y` value. When you've got that set up, your code should look like this:

<!-- ![change x and y](/pictures/day2/change-x-and-y.png) -->

7. Once we send out a signal, it can never come back. It can only move across and down, ultimately disappearing at the edge of our known universe. We need a way to stop the healing signal and send a out a new one. We'll do this by setting both `x` and `y` back to `0`. Drag an `on shake` block from the `Inputs` tab into the editor. Place two `set variable to 0` blocks inside the `on shake` block: one for `x` and one for `y`. Now, when you shake the micro:bit, your healing signal will disappear -- this is where we will be healing the Universe -- and a new one will appear at (0,0). 

At this point, your chaos-healer code should look like this:

<!-- ![add on shake](/pictures/day2/add-on-shake.png) -->

Double check that your code is right and test it in the virtual micro:bit. When you press the `A button` on the virtual micro:bit, the lit LED should move across the screen. When you press the `B button`, the LED should move down. When you shake the micro:bit, a new signal should appear in the top left-hand corner. Flash this code to your other micro:bit and test it out! 

### Step 3: Create Peace and Tranquility (Use radio communication to turn off LEDs)
Now that we have our healing signals working, we need a way to send them out into the universe so we can calm the chaos! We'll use radio communication to tell the Universe micro:bit to turn off the LEDs at the locations that the Chaos Healer micro:bit sends. 

#### Step 3a - Send Healing Signals from the Chaos Healer
We'll start by setting up radio sends from the chaos healer. Make sure you're editing the chaos healer program.

1. The first thing we need to do when we want to use radio communication between two Micro:bits is set the radio group. In the `Radio` tab, find the `set radio group 1` block and drag it into the top of the `on start` block in the editor. You can set your radio group to whatever you want, but remember the number you pick! We'll set our radio group to `10`.

<!-- ![Radio group 10](/pictures/day2/radio-group-10.png) -->

2. We want to send healing signals to the Universe when we shake the micro:bit, so we need to use a couple blocks from the `Radio` tab in the `on shake` block. Since we need to send both x *and* y coordinates to the Universe micro:bit, we'll use `radio send "name" = 0` blocks so that the Universe micro:bit will be able to tell which numbers are `x` coordinates and which numbers are `y` coordinates. Drag two `radio send "name" = 0` blocks from the `Radio` tab into the top of `on shake` block.
3. We'll use the first `radio send "name" = 0` block to send x coordinates. In this block, change "name" to "x", and replace the `0` with an `x` variable from the `Variables` tab.
4. We'll use the other `radio send "name" = 0` to send y coordinates. Change it so that it says `radio send "y" = (y)`.

Now, when you shake the Chaos Healer, the micro:bit will send the current x coordinate to the Universe micro:bit. Then, it will send the current y coordiante. Finally, it will reset the `x` and `y` variables in the Chaos Healer micro:bit back to 0. Your Chaos Healer is complete! Double check that your code matches ours: 

<!-- ![Complete Chaos Healer](/pictures/day2/complete-chaos-healer.png) -->

Then, go ahead and flash it to one of your micro:bits. 

#### Step 3b - Receive Healing Signals in the Universe
We're almost done! We just need to set up the Universe micro:bit to recieve signals from the Chaos Healer and turn off the appropriate LEDs, representing order being restored to that point in the universe. 

1. Remember, the first thing we need to do is set the radio group. Drag a `radio group 1` block into your `on start` block and set it to the same number that you picked in Step 3a. In our example, we've been using radio group 10. 

<!-- ![Complete Chaos Healer](/pictures/day2/universe-set-group-10.png) -->

2. Since we used `radio send "name" = 0` blocks to send data to the Universe, we need to use an `on radio received name value` block to recieve the data. Drag an `on radio received name value` into the editor from the `Radio` tab. 
3. When we recieve healing signals from the Chaos Signal, we want to remove chaos from whatever coordinates the signals came from. We used a `plot` block to turn the LEDs on, so it makes sense that an `unplot` block would turn LEDs off! Drag an `unplot x 0 y 0` block from the `Led` tab into the `on radio received name value`. 
4. We'll need to use variables in this code, too, to set the values in our `unplot` block. Go ahead and create an `x` and a `y` variable, and plug them into the `unplot` block, just like we did in the Chaos Healer program. Your `on radio received name value` should look like this:

<!-- ![Unplot x and y](/pictures/day2/unplot-x-y.png) -->

5. We need to use an **if statement** to complete our code. This will be a little preview to if statements, which we'll talk about more in depth tomorrow. Drag an `if true then` block from the `Logic` tab into the top of the `on radio received name value` block. 

<!-- ![If true then block](/pictures/day2/if-block.png) -->

6. Then, drag a diamond-shaped `"0" = "0"` block from the `Logic` tab into `if block`. Notice that they fit together like puzzle pieces? 

<!-- !["0" = "0"](/pictures/day2/0is0.png) -->

7. Drag the `name` from the `on radio received name value` into one side of the `"0" = "0"` block. 

<!-- ![Drag the name](/pictures/day2/drag-name.gif) -->

8. Type "x" into the other side of the `"0" = "0"`. 
9. Click the plus sign in the bottom corner of the `if` block twice. This will add a line at the bottom called `else` and an `else if` line above that. 
10. Drag another diamond-shaped `"0" = "0"` block from the `Logic` tab into second line of the `if block`. Set this so that it says `if (name) = "y"`. Your `on radio received name value` block should look like this: 

<!-- ![Set conditional](/pictures/day2/conditionals.png) -->

11. We're almost done! All we need to do to finish our program is to set the `x` and `y` variables in the Universe code to the incoming values from the Chaos Healer. Drag a `set x to 0` block into the first empty line in the `if block` and a `set y to 0` block in the second space. 

<!-- ![Set variables](/pictures/day2/set-variables.png) -->

12. Finally, use a `value` block from the top of the `on radio received name value` to replace the 0's in the `set x to 0` and `set y to 0` blocks.

<!-- ![Drag the value into the set variable blocks](/pictures/day2/drag-value.gif) -->

That's it! Your complete `on radio received name value` block should look like this: 

<!-- ![Check the on radio received block](/pictures/day2/complete-received.png) -->

This block basically says that whenever a name-value pair is received:
- First, change the x variable to match the sent x value
- Then, change the y variable to match the sent y value
- Finally, turn off the LED at (x,y), which will be whatever coordinates were sent from the Chaos Healer.

Take a moment to double check your final Universe program: 

<details>
  <summary>Universe Solution Code!</summary>

  <img src="/img/universe.png" alt="Universe Solution"/>
</details>

### Step 4: Save the Universe
Let's test out our code! If you haven't already, flash your completed Universe code to one micro:bit and the Chaos Healer code to the other micro:bit. Then, plug both of your micro:bits into a battery pack. Set the Universe micro:bit somewhere you can see it, and test out the Chaos Healer. When you press the A and B buttons, an LED should move across and down the screen. When you shake the micro:bit the LED should return to the top-left corner, whichever LED you were on should turn off the corresponding LED on the Universe micro:bit. 

If you wanted to, you could turn this into a multi-player game by flashing the Chaos Healer code to multiple micro:bits and give them to your friends so that you can all save the Universe together, one healing signal at a time. 


<!-- ## Activity: Fruit Prices

Let's put our new knowledge of variables to use! Click on the "Home" button in the top left and create a new project called "Fruit". We are going to use the `A` and `B` buttons and the `on shake` tool as inputs again to make a simple price counter for fruit.  We could use the counter to keep track of how much we are spending at the grocery store!

Our goal is for the Micro:bit to display the number `0` when it starts up, and then keep track of how much money we are spending as we "buy" fruit. For this activity, let's say an `Apple` is `$1`, a `Banana` is `$2`, and an `orange` is `$3`. Then, we can press `A` to add an apple to our cart, `B` to add a banana, and `A and B` together to add an orange! Finally, we should have a way to restart our cost variable in case we accidentally add the wrong fruit. We can do this by resetting our cost to `$0` when we `shake` our Micro:bit!

### Setup
For this activity, you will need: 
- 1 micro:bit
- 1 micro:bit cable

### Step 1 - Create a Variable
Let's create a **variable** to hold the **value** of the current cost.

Click on the `Variable` tab and make a new variable. You can name it whatever you like, but it is a good idea to name your variable in a way that describes what the variable is doing.  In our case, the variable is holding the value of the current cost, so I'll name it `cost`!

### Step 2 - Set the Variable to its Initial Value
In our goal, we said we want the cost to start at `0`, so inside the `on start` block, let's set our new variable to `0` and then show that variable on the screen, just like we did earlier!

### Step 3 - Add an Apple When We Push `A`
Now, let's work on getting our variable, cost, to increase by 1 when we push `A`. `A` is our button to add an `Apple`, which costs `$1`.

Look in the `Input` tab on the left and drag an `on button A pressed` block into the editor.

We have to get a little bit tricky now; we want to set the value of our variable to be 1 higher than it was before, so we'll need to do some math!  First, let's drag a `set variable to 0` block into the editor and place it inside our `on button A pressed block`. We don't want to set our variable to `0` though, so we need to replace the `0` with the correct block to increase our variable by 1!

Head to the `Math` tab and select the `0 + 0` block, and drag it over the `0` in our `set variable to 0` block!

Now, we are setting our variable to the **value** of a math expression! Unfortunately this one isn't very useful, `0 + 0` will always be `0`. Luckily, we can use the **value** of our variable in our math expression. Remember, we want to add 1 to our variable, so our math equation will look similar to this one: `cost = cost + 1`. Let's model that in our editor! Go to the `Variables` tab and drag your variable into one side of `+` sign. Replace the other `0` with a 1!


Now all that's left to do is make sure we show the new value of our variable on the screen! Drag a `show number` block underneath the `set variable to variable + 1` block and replace the `0` with your variable.

Test out our new code by pressing the `A` button on the virtual Micro:bit. The virtual Micro:bit will now display a number that goes up by the cost of an apple (`$1`) every time you push `A`, congratulations!!

### Step 4 - Add a Banana When We Push `B`

This next step is really simple. We want to do the same thing we did earlier, except this time we want to add _2_ to our variable when we push the `B` button.

Go ahead and drag the necessary blocks into the editor to make that happen!

### Step 5 - Add an Orange When We Push `A and B`

Now to add our last fruit to the cost. It should be the same as the last two steps, except this time we are adding _3_ to our variable when we press the `A` and `B` button together.

### Step 6 - Reset The Cost Variable When We Shake

For the last step, let's make our variable go back to 0 when we shake the Micro:bit!

Go to the `Input` tab and drag out an `on shake` block. Drag a new `set cost to 0` block inside of it. Don't forget to add the `show number cost` block last!

Once again, test your new code by pressing the `A`, `B`, and `A+B` buttons on the virtual Micro:bit. The displayed number should go up by 1 when you push `A`, go up by 2 when you push `B`, and go up by 3 when you push `A+B`. After testing adding numbers to your variable, set it back to 0 by shaking it back and forth!

Try it out by thinking of a real world example! Let's say we have 3 apples, 1 banana, and 2 oranges. Figure out how much that should cost, then add those to your Micro:bit and see if it displays the right cost!

### Step 7 - Download the Program!

If your program is working as expected, download it to your physical Micro:bit and enjoy!

Solution Code -->
