#include <stdio.h>

int main(void) {
    int m = 3; 
    int n = 4;

    int matrica[3][4];

    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 4; j++) {
            matrica[i][j] = i;
        }
    }

    int* matrica_p = &matrica[0][0];

    
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 4; j++) {
            printf("%d", *matrica_p);
            matrica_p++;
        }
    }




}