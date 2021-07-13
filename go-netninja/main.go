package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func getInput(prompt string, r *bufio.Reader) (string, error) {
	fmt.Print(prompt)
	input, error := r.ReadString('\n')

	return strings.TrimSpace(input), error
}

func createBill() bill {
	reader := bufio.NewReader(os.Stdin)

	// fmt.Print("Create a new bill name: ")
	// name, _ := reader.ReadString('\n')
	// name = strings.TrimSpace(name)

	name, _ := getInput("Create a new bill name: ", reader)
	b := newBill(name)
	fmt.Println("Created New Bill - ", b.name)

	return b
}

func promptOptions(b bill) {
	reader := bufio.NewReader(os.Stdin)

	opt, _ := getInput("Choose option (a - add item, s - save bill, t - add tip): ", reader)
	fmt.Println(opt)

	switch opt {
	case "a":
		name, _ := getInput("Enter item name: ", reader)
		price, _ := getInput("Enter item price: ", reader)

		p, err := strconv.ParseFloat(price, 64)
		if err != nil {
			fmt.Println("The price must be a number")
			promptOptions(b)
		}
		b.addItem(name, p)
		fmt.Println(name, price)
		fmt.Println("Item added - ", name, price)
		promptOptions(b)

	case "t":
		tip, _ := getInput("Enter tip amount ($): ", reader)

		t, err := strconv.ParseFloat(tip, 64)
		if err != nil {
			fmt.Println("The tip must be a number")
			promptOptions(b)
		}
		b.updateTip(t)
		fmt.Println("Tip added - ", tip)
		promptOptions(b)

	case "s":
		b.save()
		fmt.Println("You saved the bill - ", b.name)
	default:
		fmt.Println("Invalid option")
		promptOptions(b)
	}
}

func main() {
	// greeting := "Hello there"
	// fmt.Println(strings.Contains(greeting, "Hello"))
	// fmt.Println(strings.ReplaceAll(greeting, "Hello", "Hi"))
	// fmt.Println("Original value =", greeting)
	// fmt.Println(strings.ToUpper(greeting))
	// fmt.Println(strings.Index(greeting, "ll"))
	// fmt.Print(strings.Split(greeting, " "))

	/*
		mybill := newBill("Vidushi's Bill")
		mybill.addItem("soup", 4.50)
		mybill.addItem("choco pie", 2.50)
		mybill.addItem("pudding", 8.95)
		mybill.addItem("candy", 1.50)
		mybill.updateTip(10)

		fmt.Println(mybill.format())
	*/
	mybill := createBill()
	promptOptions(mybill)
}
