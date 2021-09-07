import java.util.*;
import java.io.*;

/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/
class Player {
    static public int [] mountainTab ;
    static int MaxH = 0;
    static int indiceH = 0;

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        // game loop
        while (true) {
            MaxH = 0;
            mountainTab = new int[8] ;
            for (int i = 0; i < 8; i++) {

                int mountainH = in.nextInt(); // represents the height of one mountain.
                
                if (0 < mountainH && mountainH <= 9) {

                    mountainTab[i]= mountainH ;
              }
            }

            for (int j = 0; j < 8; j++) {

                   if ( MaxH < mountainTab[j] ) {
                    MaxH = mountainTab[j] ;
                    indiceH = j ;
                }
            }
                

            // Write an action using System.out.println()
            // To debug: System.err.println("Debug messages...");

            System.out.println(indiceH); // The index of the mountain to fire on.
           // N--;
        
        
        }
    }
}