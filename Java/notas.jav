import java.io.IOException;
import java.util.Scanner;

public class Main{
	
    public static void main(String[] args) throws IOException {
      Scanner in = new Scanner(System.in);
      int num;
      num = in.nextInt();
      
      if (num == 0){
        System.out.println("E");
      } else if (num > 0 && num <= 35){
        System.out.println("D");
      } else if (num > 35 && num <= 60){
        System.out.println("C");
      } else if (num > 60 && num <= 85){
        System.out.println("B");
      } else if (num > 85 && num <= 100){
        System.out.println("A");
      } else {
        System.out.println("Nota inválida");
      }
    }
}