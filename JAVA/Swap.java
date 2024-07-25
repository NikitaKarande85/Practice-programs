import java.util.*;
import java.lang.*;
public class Swap
{
    public static void main(String[] args)
    {
        Scanner reader=new Scanner(System.in);
        System.out.println("Enter first number");
        int No1=reader.nextInt();

        System.out.println("Enter second number");
        int No2=reader.nextInt();

        System.out.format("Before swapping No1= %d  No2=%d ",No1,No2);
        int temp=No1;
        No1=No2;
        No2=temp;
        System.out.format("After swapping No1= %d  No2=%d ",No1,No2);
    }
}