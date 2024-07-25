//  5. Write a program which accept total marks & obtained marks from user and 
// calculate percentage. 
// Input : 1000 745 
//  Output : 74.5% 
float Percentage(float total,float obtain)
{
    int Percentage=0;
    if(total!=0&&obtain!=0)
    {
        Percentage=(obtain/total)*100;
        return Percentage;
    }
}
int main()
{
   int iValue1 = 0,iValue2 = 0;
   float fRet = 0.0;
   printf("Please enter total marks");
   scanf("%d",&iValue1);
   printf("Please enter obtained marks");
   scanf("%d",&iValue2);
   fRet = Percentage(iValue1,iValue2);
   printf("%d",fRet);
   return 0;
}