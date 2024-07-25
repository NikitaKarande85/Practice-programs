/*1. Write a program which search first occurrence
of particular element from singly linear linked list.
  Function should return position at which element is found.
Function Prototype :
int SearchFirstOcc( PNODE Head , int no );
Input linked list : |10|->|20|->|30|->|40|->|50|->|30|->|70|
Input element : 30
Output : 3   */
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node*next;
};
int main()
{
    int element_count,com,c,a;
    struct node *head=NULL;
    Insertfirst(70,&head);
    Insertfirst(30,&head);
    Insertfirst(50,&head);
    Insertfirst(40,&head);
    Insertfirst(30,&head);
    Insertfirst(20,&head);
    Insertfirst(10,&head);
    displayll(head);
    printf("\nEnter the element:");
    scanf("%d",&com);
    checkposition(com,&head);


    return 0;
}
void Insertfirst(int no,struct node**first)
{
    struct node *newn=NULL;

    newn=(struct node*)malloc(sizeof(struct node));

    newn->data=no;
    newn->next=NULL;

    if(NULL==*first)
    {
        *first=newn;
    }
    else
    {
        newn->next=*first;
        *first=newn;
    }
}
void displayll(struct node *first)
{
       if(NULL==first)
       {
            printf("link list is empty");
            return;
       }
        printf("\n\tInserted element is\n");
         printf("\n\t*********************************************\n");
        while(NULL!=first)
        {
            printf("\t|%d|=>",first->data);
            first=first->next;
        }
        printf("\n\t*********************************************");
}
int checkposition(int com,struct node *first)
{
    struct node *t;
    int c=0,m;

    if(first==NULL)
    {
        printf("List is empty");
    }
    else
    {

        t=first;
        while(t!=NULL)
        {

            if(com==t->data)
            {
                 break;
            }
            c++;

           t=t->next;

        }

    }

      printf("%d",c);
}
