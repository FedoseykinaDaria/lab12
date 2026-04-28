// Калькулятор с ошибками
public class errorfile {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        int result = a / b;  // Ошибка: деление на ноль!
        
        int[] numbers = new int[5];
        numbers[10] = 100;    // Ошибка: выход за границы массива
        
        System.out.println(result);
        
        // Неиспользуемая переменная
        String unused = "Привет";
    }
    
    // Слишком длинная функция (запах кода)
    public void doEverything() {
        // много строк кода...
    }
}