import java.util.Scanner;
import java.lang.*;

public class Main{
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		long a=scan.nextLong();
		long b=scan.nextLong();
		long c=scan.nextLong();
		double max=Math.pow(10, 12);
		
		if(1<=a&&c<=max) {
		System.out.print(a+b+c);
	    }	
    }		
}