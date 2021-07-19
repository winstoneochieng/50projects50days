/**
*a simple calculator (for two operands) in C programming using the switch statement.
*/
#include <stdio.h>

int
main ()
{
  char op;
  double num1, num2;

  printf ("Enter the operater: ");
  scanf ("%c", &op);
  printf ("Enter two operands: ");
  scanf ("%lf  %lf", &num1, &num2);

  switch (op)
    {
    case '+':
      printf ("%.1lf + %.1lf = %.1lf", num1, num2, num1 + num2);
      break;

    case '-':
      printf ("%.1lf - %.1lf = %.1lf", num1, num2, num1 - num2);
      break;

    case '*':
      printf ("%.1lf * %.1lf = %.1lf", num1, num2, num1 * num2);
      break;

    case '/':
      printf ("%.1lf / %.1lf = %.1lf", num1, num2, num1 / num2);
      break;

      //operator doesnt match any case constant
    default:
      printf ("Error! Operator not correct");
    }

  return (0);

}
