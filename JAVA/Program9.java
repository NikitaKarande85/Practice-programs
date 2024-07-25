/*4.Write a program which accept number from user and return multiplication of all digits.
Input :  2395  Output :  270
Input :  1018 Output :  8
Input :  9440 Output :  144
Input :  922432 Output :  864
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
        int iMult=1;
        int iDigit=0;
        while (iNo!=0)
        {
            iDigit=iNo%10;
            if(iDigit!=0)
            {
                iMult=iMult*iDigit;
            }
            iNo=iNo/10;
        }
        return iMult;
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
       System.out.println("Your Count of even digit is: " + iRet);
    }
}