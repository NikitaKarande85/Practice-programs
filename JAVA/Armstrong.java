import java.lang.*;
import java.util.Scanner;
public class Armstrong
{
    public static void main(String[] args)
    {
        int iCount=0,iCopy=0,iRem=0,iSum=0;
        Scanner reader=new Scanner(System.in);
        System.out.println("Enter the number");
        int iNo=reader.nextInt();

        iCopy=iNo;

        while(iCopy!=0)
        {
            iCount++;
            iCopy=iCopy/10;
        }
        iCopy=iNo;

        while(iCopy!=0)
        {
            iRem=iCopy%10;
            iSum+=Math.pow(iRem,iCount);
            iCopy=iCopy/10;
        }
        if(iSum==iNo)
        {
            System.out.println("Armstong");
        }
        else
        {
            System.out.println("Non Armstrong");
        }
    }
}