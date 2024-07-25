/*2. Write Java program which accept N numbers from user and display all such elements which are divisible by 5.
Input :  N :   6
  Elements : 85 66 3 80 93 88
Output : 85 80*/
import java.lang.*;
import java.util.*;
class Displayn
{
    void Div(int size,int arr[])
    {
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]%5==0)
            {
                System.out.println(" " + arr[i]);
            }
        }
    }
}
class demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the size:");
        int size=sobj.nextInt();

        int arr[] = new int[size];

        System.out.println("Enter the element:");
        for(int i=0;i<arr.length;i++)
        {
            arr[i] = sobj.nextInt();
        }

        Displayn dobj=new Displayn();

         dobj.Div(size,arr);
    }

}