package main

import (
	"fmt"
)

type Day int

const (
	SUNDAY Day = iota
	MONDAY
	TUESDAY
	WEDNESDAY
	THURSDAY
	FRIDAY
	SATURDAY
)

func day() {
	fmt.Printf("Monday has the value %d\n", MONDAY)
	fmt.Printf("Friday has the value %d\n", FRIDAY)
}

// test
func main() {

	c := make(chan int)
	done := make(chan bool)
	test := "test\n"

	go func() {
		for i := 0; i < 10; i-- {
			c <- i
		}
		done <- true
	}()

	for n := range c {
		fmt.Println(n)
		fmt.Println(test)
	}
}
