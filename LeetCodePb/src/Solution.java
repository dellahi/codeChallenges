import java.util.*;

public class Solution {

    public static void main(String args[]) throws Exception {

        Scanner in = new Scanner(System.in);

        System.out.println("Entrez un mot ou String : ");

        String chaineS = in.next();

        int resultat = new MethodsClass().minDeletions(chaineS);

        System.out.println(" the result : " + resultat);

    }
}