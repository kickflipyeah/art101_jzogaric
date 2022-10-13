/*
 * Summary.
 * A bit of math, an array, possible loop
 *
 * Description:
 * Psuedo code for a possible heathbar implementation, without considering strict variable states
 *
 * @link   https://berrynul.github.io/art101/
 * @file   This files defines the MyClass class.
 * // @author Naomi Fonken Jessica Zogaric
 * @since  10.12.2022
 */

  /* jshint {inline configuration here} *
  /

  //Make an array of GameObjects with an attached sprite image
  //Divide canvas into the area you want the heart sprites
      //division would be healtharea = (canvas height)/6 (canvaswidth)/3

  //Divide that area further into the number of sprites
      //increment = healtharea/numberofhearts

  //Space each element of the array incrementally across the screen according to your divisions
      //foreach element of the array:
      //element.position = healtharea + (increment * element index+1)
