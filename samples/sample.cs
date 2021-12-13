using System;

namespace sample
{
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
        public int getArea()
        {
            return width * height;
        }
    }

    internal class RectangleTester
    {
        [STAThread]
        private static void Main(string[] args)
        {
            Rectangle rect = new();

            rect.SetWidth(5);
            rect.SetHeight(7);

            // Print the area of the object.
            Console.WriteLine("Total area: {0}", rect.getArea());
            _ = Console.ReadKey();

            Console.WriteLine($"Test { rect }");
        }
    }
}
