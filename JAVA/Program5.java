/*5. Write Java program which accept N numbers from user and display all such elements which are multiples of 11.
Input :  N :   6
Elements : 85 66 3 55 93 88
Output : 66 55 88
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
            if(arr[i]%11==0)
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