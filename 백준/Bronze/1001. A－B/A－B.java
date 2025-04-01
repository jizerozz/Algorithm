import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int a;
        int b;
        
        a=sc.nextInt();
        b=sc.nextInt();
        
        if(a>0&&b<10){
            int sub=a-b;
            System.out.print(sub);
        }
    }
}