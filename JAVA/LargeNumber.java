import java.util.*;
import java.lang.*;
public class LargeNumber
{
    public static void main(String args[])
    {
        Scanner reader=new Scanner(System.in);
        System.out.println("Enter first number");
        int No1=reader.nextInt();

        System.out.println("Enter first number");
        int No2=reader.nextInt();

        System.out.println("Enter first number");
        int No3=reader.nextInt();

        if(No1>No2 && No1>No3)
        {
            System.out.format("Largest number is:%d",No1);
        }
        else if(No2>No1 && No2>No3)
        {
            System.out.format("Largest number is:%d",No2);
        }
        else
        {
            System.out.format("Largest number is:%d",No3);
        }
    }
}