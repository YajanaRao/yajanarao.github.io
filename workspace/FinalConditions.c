#include<stdio.h>
#include<string.h>
#include <ctype.h>

int allChars(const char *str)
{
   size_t i;
   for(i=0;str[i];i++)
     if(!isalpha(str[i]))
        return 0;
   return 1;
}

int main(){
	char password[12];
	int varification_code;
	printf("Enter your password: ");
	scanf("%s", password);
	printf("Enter the varification code: ");
	scanf("%d", &varification_code);
	if(strlen(password) < 8){
		printf("password is weak\n");
		printf("Character is less than 8\n");
	} else if(allChars(password) || !strcmp(password, "password@123")){
		printf("password is weak\n");
		printf("Your password can be easily hacked\n");
	} else {
		printf("Welcome user\n");
		if(!strcmp(password, "root@123") && varification_code == 5){
			printf("You are an admin\n");
		} else if(password == "yajana@123" && varification_code == 5){
			printf("You are the developer\n");
		} else {	
			printf("You are a user\n");
		}
	}
}
