using System;

namespace InheritanceApplication
{
    class Shape
    {
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
    class Rectangle : Shape
    {
        public int getArea()
        {
            return width * height;
        }
    }

    class RectangleTester
    {
        [STAThread]
        static void Main(string[] args)
        {
            Rectangle rect = new Rectangle();

            rect.SetWidth(5);
            rect.SetHeight(7);

            // Print the area of the object.
            Console.WriteLine("Total area: {0}", rect.getArea());
            Console.ReadKey();

            Console.WriteLine($"Test { rect }");
        }
    }
}
