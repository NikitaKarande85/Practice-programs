/* 3. Write a program which accept matrix and return largest number from both the diagonals

3 2 5 9
4 3 2 2
8 4 1 9
3 9 7 5

 Output : 9
 */
import java.lang.*;
import java.util.*;
class Matrix
{
   int Larg(int arr[][])
   {
       int iLarge1=0,iLarge2=0;
       for(int i=0;i<arr.length;i++)
       {
           for(int j=0;j<arr[i].length;j++)
           {
               if(i<j)
               {
                   if(iLarge1<arr[i][j])
                   {
                       iLarge1=arr[i][j];
                   }
               }
               if(i>j)
               {
                   if(iLarge2<arr[i][j])
                   {
                       iLarge2=arr[i][j];
                   }
               }
           }
       }

       System.out.println("iLarge1:" + iLarge1);
       System.out.println("iLarge2:" + iLarge2);
       if(iLarge1==iLarge2)
       {
           return iLarge1;
       }
       return iLarge2;
   }
}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the Row:");
        int row=sobj.nextInt();

        System.out.println("Enter the Coloumn:");
        int col=sobj.nextInt();

        System.out.println("Enter the element");
        int arr[][]=new int[row][col];

        for (int i=0;i<arr.length;i++)
        {
            System.out.println("Row with index : "+i);
            for (int j=0;j<arr[i].length;j++)
            {
                System.out.println("Enter the element :"+i+" , "+j);
                arr[i][j]=sobj.nextInt();
            }
        }

        Matrix mobj=new Matrix();
        int ret=mobj.Larg(arr);
        System.out.println("Your Larger value both diagonal is:" + ret);
    }
}