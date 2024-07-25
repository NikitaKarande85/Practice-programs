/*5. Write a java program which accept two array from user and check whether that array and its elements are palindrome or not. 
Input :   11 252 387783 252 11 
Output :   TRUE 
Input :   11 252 387783 77 11 
Output :   FALSE 
Input :   11 252 786 252 11 
Output :   FALSE 
Input :   11 252 786 253 11 
Output :   FALSE 4. Write a java program which accept two array from user and copy the contents
 of that array into another array and return new array.*/
import java.lang.*;
import java.util.*;
class Arrays
{
    boolean Concat(int arr[])
    {

        int size=arr.length;
        int flag=0;

       for (int i=0;i<=size/2 && size!=0;i++)
       {
          if(arr[i]==arr[size-i-1])
          {
             flag=1;
             break;
          }
       }
       if(flag==1)
       {
           return true;
       }
       else
       {
           return false;
       }
    }
}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        boolean Ret=false;
        System.out.println("Enter array size:");
        int size1=sobj.nextInt();

        int arr[]=new int[size1];


        System.out.println("Enter the first array element:");
        for(int i=0;i<arr.length;i++)
        {
            arr[i]=sobj.nextInt();
        }
        Arrays aobj=new Arrays();
        Ret=aobj.Concat(arr);
        if(Ret==true)
        {
            System.out.println("Palindrome");
        }
        else
        {
            System.out.println("Not Palindrome");
        }
    }
}