import java.io.IOException;
import java.util.Scanner;

public class Main{
	
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int idadeDias = leitor.nextInt();
        
        int anos = 0, meses = 0, dias = 0, diasAtuais = 0;
        
        while (diasAtuais < idadeDias){
          if (diasAtuais < 365){
            anos = idadeDias / 365;
            idadeDias -= anos*365;
          }
            
          if (diasAtuais < 30){
            meses = idadeDias / 30;
            idadeDias -= meses*30;
          }  
          if (diasAtuais < 30){
            dias = idadeDias / 1;
            idadeDias -= dias*1;
          }
        }
        
        System.out.println( anos + " ano(s)");
        System.out.println( meses + " mes(es)");
        System.out.println( dias + " dia(s)");
    }
	
}