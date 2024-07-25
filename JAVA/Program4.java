/*4. Write Java program which accept N numbers from user and display all such elements which are divisible by 3 and 5.
Input :  N :   6
Elements : 85 66 3 15 93 88
Output : 15
*
 */
import com.sun.deploy.util.SyncAccess;

import java.lang.*;
import java.util.*;

class DemoArray
{
    void Divisible(int arr[])
    {
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]%3==0&&arr[i]%5==0)
            {
                System.out.println(" " + arr[i]);
            }
        }
    }
}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the number:");
        int size=sobj.nextInt();

        int arr[]=new int[size];
        System.out.println("Enter the Element:");
        for(int i=0;i<arr.length;i++)
        {
            arr[i]=sobj.nextInt();
        }

        DemoArray dobj=new DemoArray();
        dobj.Divisible(arr);

    }
}