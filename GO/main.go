package main

import "fmt"

func main() {
	// greeting := "Hello there"
	// fmt.Println(strings.Contains(greeting, "Hello"))
	// fmt.Println(strings.ReplaceAll(greeting, "Hello", "Hi"))
	// fmt.Println("Original value =", greeting)
	// fmt.Println(strings.ToUpper(greeting))
	// fmt.Println(strings.Index(greeting, "ll"))
	// fmt.Print(strings.Split(greeting, " "))

	mybill := newBill("Vidushi's Bill")
	mybill.format()
	fmt.Println(mybill.format())
}
