import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner scan=new Scanner(System.in);
        int a;
        int b;
        
        a=scan.nextInt();
        b=scan.nextInt();
        if(a>0&&b<10){
            int sum=a+b;
            System.out.print(sum);
        }       
    }
}