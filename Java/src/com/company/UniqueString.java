package com.company;

import java.util.Arrays;

//Implement an algorithm to determine if a string has all unique characters. What if you
//cannot use additional data structures?


public class UniqueString {
    public void check(String[] args) {

        String check = "a1111cv";


        System.out.println(stringCheck(check));
    }

    private static boolean stringCheck(String check) {
        char[] temp = check.toCharArray();
        Arrays.sort(temp);
        for(int i = 0; i < temp.length - 1; i++) {
            if(temp[i] == temp[i + 1])
                return false;
        }
        return true;
    }

    private static boolean stringCheck2(String str) {
        //assuming input is lowercase alphabets
        boolean[] check = new boolean[26];
        for (int i=0; i< str.length(); i++) {
            int index = str.charAt(i) - 'a';

            if (check[index]) {
                return false;
            }

            check[index] = true;
        }
        return true;
    }

    public static void main(String args[]) {

        String str = "bogdan";
        System.out.println(UniqueString.stringCheck2(str));
        System.out.println(UniqueString.stringCheck(str));
    }
}

