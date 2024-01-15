public class HelloWorld {

    public static void main(String [] args) {
        String ambiente = args[0];
        if (ambiente.equalsIgnoreCase("DEV")) {
        System.out.print("Execuntando em DEV");
        } else if (ambiente.equalsIgnoreCase("TEST")) {
            System.out.print("Execuntando em TEST");
        } else  {
            System.out.print(ambiente);
        }

    }

}
