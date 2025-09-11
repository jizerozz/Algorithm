
import java.util.Scanner;

public class Main{
	public static void main(String[] args) {
        int a, b, c;
		
		Scanner sc=new Scanner(System.in);
		a=sc.nextInt();
		b=sc.nextInt();
		c=sc.nextInt();
		
		int avg=(a+b)%c;
		int secondAvg=((a%c)+(b%c))%c;
		int thirdAvg=(a*b)%c;
		int fourthAvg=((a%c)*(b%c))%c;
		
		
		System.out.println(avg);
		System.out.println(secondAvg);
		System.out.println(thirdAvg);
		System.out.println(fourthAvg);		
    }
}