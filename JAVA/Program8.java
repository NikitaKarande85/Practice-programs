/*3.Write a program which accept number from user and return the count of digits in between 3 and 7.
Input :  2395  Output :  1
Input :  1018 Output :  0
Input :  4521 Output :  2
Input :  9922 Output :  0
 */
import java.lang.*;
import java.util.*;

class Number
{
    int Count(int iNo)
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
            if(iDigit>3&&iDigit<7)
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
       int iRet=nobj.Count(iValue);
       System.out.println("Your Count of digit is: " + iRet);
    }
}