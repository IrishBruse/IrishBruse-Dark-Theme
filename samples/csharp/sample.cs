namespace sample;

using System;
using System.Numerics;

// test
/*
test
*/
#pragma warning disable

internal class Shape
{
    public int test;
    const int Testing = 12;
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
        Vector2 a = new();
        a += a * new Vector2();
        return width * height;
    }
}

/// <summary>  </summary>
internal class RectangleTester : Isample
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

struct TestStruct
{

}

class Test123
{

}

interface Isample
{

}
