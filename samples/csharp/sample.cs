namespace sample;

using System;
// test
/*
test
*/
#pragma warning disable

internal class Shape
{
    public int test;

    public void SetWidth(int w)
    {
        width = w;
    }
    public void SetHeight(int h)
    {
        height = h;
    }
    protected int width;
    protected int height;
}

// Derived class
internal class Rectangle : Shape
{
    public int GetArea()
    {
        return width * height;
    }
}

internal class RectangleTester
{
    [STAThread]
    private static void Main()
    {
        Rectangle rect = new();

        rect.SetWidth(5 * 34);
        rect.SetHeight(7);

        unsafe
        {
            void* unsafePointer = (void*)0;
        }
        // Print the area of the object.
        Console.WriteLine("Total area: {0}", rect.GetArea());

        for (int i = 0; i < rect.GetArea(); i++)
        {
            Console.WriteLine($"Test \n{rect.GetArea()}" + 'a');
        }

        Console.ReadKey();
    }
}

enum Test
{
    tes, dsf, gdf, ds, th, gf
}

interface Isample
{

}

class Test123
{

}

struct TestStruct
{

}
