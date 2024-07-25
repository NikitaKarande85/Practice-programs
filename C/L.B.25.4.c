/*4. Accept Character from user
 and check whether it is small
  case or not (a-z).
Input :  g
Output :  TRUE
Input :  D
Output :  FALSE */
#define TRUE 1
#define FALSE 0
typedef int BOOL;
BOOL funcall(char a)
{
    if(a>='a'&&a<='z' )
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
        printf("It is a Small case");

    }
    else
    {
        printf("Not it is a not small case");
    }
    return 0;
}

