/*2.Write a program which accept number from user and return the count of odd digits.
Input :  2395  Output :  3
Input :  1018 Output :  2
Input :  -1018 Output :  2
Input :  8462 Output :  0
 */
import java.lang.*;
import java.util.*;

class Number
{
    int OddCount(int iNo)
    {
        if(iNo<0)
        {
            iNo=-iNo;
        }
        int iCount=0;
        int iDigit=0;
        while (iNo!=0)
        {
            iDigit=iNo%10;
            if(iDigit%2!=0)
            {
                iCount++;
            }
            iNo=iNo/10;
        }
        return iCount;
    }
}
class Demo
{
    public static void main(String arg[])
    {
        Scanner sobj=new Scanner(System.in);
        System.out.println("Enter the number:");
        int iValue=sobj.nextInt();

        Number nobj=new Number();
       int iRet=nobj.OddCount(iValue);
       System.out.println("Your Count of digit is: " + iRet);
    }
}