/*2. Accept Character from user and
check whether it is capital or not (A-Z).
Input :  F
Output :  TRUE
Input :  d
Output :  FALSE
*/
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char a)
{
    if(a>='A'&&a<='Z' )
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
        printf("It is a Capital");

    }
    else
    {
        printf("Not it is a Capital");
    }
    return 0;
}
