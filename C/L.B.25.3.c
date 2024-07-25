/*3. Accept Character from user and
check whether it is digit or not (0-9).
Input :  7
Output :  TRUE
Input :  d
Output :  FALSE */
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char a)
{
    if(a>='1'&&a<='9' )
    {
        return TRUE;
    }
    else
    {
        return FALSE;
    }
}
int main()
{
    char a='\0',ans;
    BOOL bRet = FALSE;
    printf("Enter the character:\n");
    scanf("%c",&a);

    ans=funcall(a);
    if(ans==TRUE)
    {
        printf("It is a Digit");

    }
    else
    {
        printf("Not it is a Digit");
    }
    return 0;
}
