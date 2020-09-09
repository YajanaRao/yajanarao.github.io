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

// password should be 8 digit long
// password should contain non characters
// if password is root@123 he is a admin
// if password is other than that he is a user

int main(){
	char password[12];
	printf("Enter your password: ");
	scanf("%s", password);
	if(strlen(password) < 8){
		printf("password is weak\n");
		printf("Character is less than 8\n");
		
	} else if(allChars(password)){
		printf("password is weak\n");
		printf("Your password can be easily hacked");
	} else if(password == "password@123"){
		printf("password is weak");
		printf("Your password can be easily hacked");
	} else {
		printf("Welcome user\n");
		if(password == "root@123"){
			printf("You are an admin\n");
		} else if(password == "yajana@123"){
			printf("You are the developer\n");
		} else {
			printf("You are a user\n");
		}
	}
}

// pre requirements

// `allChars` input string -> output true if all characters are string
// `strcmp` inbuild function -> returns 0 is both are same

// step 1
// syntax
// how it works

int main(){

	if(true){
		// instructions to execute
	} else {
		// instructions to execute
	}
}


// step 2 if else
// branching
// control statement

int main(){
	char password[12];
	int varification_code;
	scanf("%s", password);
	if(password < 8){
		printf("Your password is weak");
	} else {
		printf("Welcome user")
	}
}

// chained conditions


int main(){
	char password[12]
	scanf("%s", password);
	if(password < 8){
		printf("Your password is weak");
	} else if(allChars(password)){
		printf("password is weak\n");
		printf("Your password can be easily hacked");
	} else {
		printf("Welcome user")
	}
}

// nested if else

int main(){
	char password[12];
	printf("Enter your password: ");
	scanf("%s", password);
	if(strlen(password) < 8){
		printf("password is weak\n");
		printf("Character is less than 8\n");
	} else if(allChars(password)){
		printf("password is weak\n");
		printf("Your password can be easily hacked");
	} else if(!strcmp(password, "password@123")){
		printf("password is weak");
		printf("Your password can be easily hacked");
	} else {
		printf("Welcome user\n");
		if(password == "root@123"){
			if(varification_code == 5){
				printf("You are an admin\n");
			}
		} else if(!strcmp(password, "yajana@123")){
			if(varification_code == 5){
				printf("You are the developer\n");
			}
		} else {
			if(varification_code == 5){
				printf("You are a user\n");
			}
		}
	}
}

// compound booealns with logical operators
//  or

int main(){
	char password[12];
	printf("Enter your password: ");
	scanf("%s", password);
	if(strlen(password) < 8){
		printf("password is weak\n");
		printf("Character is less than 8\n");
	} else if(allChars(password) || password == "password@123"){
		printf("password is weak\n");
		printf("Your password can be easily hacked");
	} else {
		printf("Welcome user\n");
		if(!strcmp(password, "root@123")){
			if(varification_code == 5){
				printf("You are an admin\n");
			}
		} else if(!strcmp(password, "yajana@123")){
			if(varification_code == 5){
				printf("You are the developer\n");
			}
		} else {
			printf("You are a user\n");
		}
	}
}

// and

int main(){
	char password[12];
	printf("Enter your password: ");
	scanf("%s", password);
	if(strlen(password) < 8){
		printf("password is weak\n");
		printf("Character is less than 8\n");
	} else if(allChars(password) || password == "password@123"){
		printf("password is weak\n");
		printf("Your password can be easily hacked");
	} else {
		printf("Welcome user\n");
		if(password == "root@123" && varification_code == 5){
			printf("You are an admin\n");
		} else if(password == "yajana@123" && varification_code == 5){
			printf("You are the developer\n");
		} else {	
			printf("You are a user\n");
		}
	}
}