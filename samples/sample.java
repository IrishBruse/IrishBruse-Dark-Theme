
// Single-line comments start with //

/*
Multi-line comments look like this.
*/

/**
 * JavaDoc comments look like this. Used to describe the Class or various
 * attributes of a Class. Main attributes:
 *
 * @author Name (and contact information such as email) of author(s).
 * @version Current version of the program.
 * @since When this part of the program was first added.
 * @param For describing the different parameters for a method.
 * @return For describing what the method returns.
 * @deprecated For showing the code is outdated or shouldn't be used.
 */

public class sample
{
    public static void main(String[] args)
    {
        Bicycle bike = new Bicycle();
        int test = 1;
        test = 2;
        // throw new Exception("test");
        System.out.println(bike.toString());
    }
}

class Bicycle implements ICycleable
{
    public int cadence; // Public: Can be accessed from anywhere
    private int speed; // Private: Only accessible from within the class
    protected int gear; // Protected: Accessible from the class and subclasses
    String name; // default: Only accessible from within this package
    static String className; // Static class variable

    // Constructors are a way of creating classes
    // This is a constructor
    public Bicycle()
    {
        this(1, 50, 5, "Bontrager");
    }

    // This is a constructor that takes arguments
    public Bicycle(int startCadence, int startSpeed, int startGear, String name)
    {
        this.gear = startGear;
        this.cadence = startCadence;
        this.speed = startSpeed;
        this.name = name;
    }

    // Method declaration syntax:
    // <access modifier> <return type> <method name>(<args>)
    public int getCadence()
    {
        return cadence;
    }

    // void methods require no return statement
    public void setCadence(int newValue)
    {
        cadence = newValue;
    }

    public void setGear(int newValue)
    {
        gear = newValue;
    }

    public void speedUp(int increment)
    {
        speed += increment;
    }

    public void slowDown(int decrement)
    {
        speed -= decrement;
    }

    public void setName(String newName)
    {
        name = newName;
    }

    public String getName()
    {
        return name;
    }

    // Method to display the attribute values of this Object.
    @Override // Inherited from the Object class.
    public String toString()
    {
        return "gear: " + gear + " cadence: " + cadence + " speed: " + speed + " name: " + name;
    }

    @Override public void cycle()
    {
        System.out.println("Cycling!");
    }
} // end class Bicycle

/**
 * ITest
 */
interface ICycleable
{
    void cycle();
}

enum Day
{
    Mon, Tue, Wed, Thu, Fri, Sat, Sun
}
