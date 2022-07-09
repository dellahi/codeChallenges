import java.net.InetSocketAddress;
import java.util.*;
import java.util.stream.Collectors;

public class MethodsClass {

    public static boolean notGoodString(ArrayList<Integer> arr){
        boolean ok = false;
        for(Integer i : arr) {
            if (Collections.frequency(arr,i)!= 1 && i != 0 ) ok = true;
        }
        return ok;
    }

    public static ArrayList<Integer> charOccurenceCounter(String s) {

        HashMap<Character, Integer> charsOccurence = new HashMap();

        for(char c : s.toCharArray()) {

            if (charsOccurence.containsKey(c)) { charsOccurence.replace(c,charsOccurence.get(c)+1); }

            else charsOccurence.put(c,1);
        }
        System.out.println(charsOccurence.values());
        ArrayList<Integer> listOfValues = new ArrayList<>();

        for (Integer i : charsOccurence.values()) {
            listOfValues.add(i);
        }

        return listOfValues;
    }

    public static int minDeletions(String chaineS) {
        int minGoodness = 0;

        if((1 <= chaineS.length()) && (chaineS.length() <= Math.pow(10,5)) && (chaineS.compareTo(chaineS.toLowerCase()) == 0)) {

            ArrayList<Integer> charsOccur = charOccurenceCounter(chaineS);

                while (  notGoodString(charsOccur)) {
                    for (Integer i : charsOccur) {
                        if (Collections.frequency(charsOccur,i)!= 1 && i != 0){
                            charsOccur.set(charsOccur.indexOf(i), i.intValue() - 1);
                            minGoodness++;
                        }
                }
                System.out.println(charsOccur);
            }

        }
        return minGoodness;
    }

}