/*4. Accept Character from user and check
whether it is special symbol or not (!, @, #, $, %, ^, &, *).
Input :  %
Output :  TRUE
Input :  d
Output :  FALSE   */
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char a)
{
    if(a>='a'&&a<='z'||a>='A'&&a<='Z'||a>='1'&&a<='9' )
    {
        return FALSE;
    }
    else
    {
        return TRUE;
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
        printf("It is a Special character");

    }
    else
    {
        printf("Not it is a Special character");
    }
    return 0;
}

