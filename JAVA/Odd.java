//Java Program to Check Odd Number
import java.lang.*;
import java.util.*;
public class Odd
{
    public static void main(String[] args)
    {
        Scanner reader=new Scanner(System.in);
        System.out.println("Enter the number");
        int No1=reader.nextInt();

        if(No1%2!=0)
        {
            System.out.println("Odd");
        }
        else
        {
            System.out.println("Not Odd");
        }
    }
}