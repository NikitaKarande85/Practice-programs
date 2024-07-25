//Java Program to Check Even Number
import java.lang.*;
import java.util.*;
public class Even
{
    public static void main(String[] args)
    {
        Scanner reader=new Scanner(System.in);
        System.out.println("Enter the number");
        int No1=reader.nextInt();

        if(No1%2==0)
        {
            System.out.println("Even");
        }
        else
        {
            System.out.println("Not Even");
        }
    }
}