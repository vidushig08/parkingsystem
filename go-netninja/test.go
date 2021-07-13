package main

import "fmt"

var someName = "hello"

func main() {
	fmt.Println("Hello world!")

	//Strings
	var nameOne string = "Vidushi"
	var nameTwo = "Mario"
	var nameThree string
	fmt.Println(nameOne, nameTwo, nameThree)
	nameOne = "peach"
	nameThree = "orange"
	fmt.Println(nameOne, nameTwo, nameThree)
	nameFour := "Palak"
	fmt.Println(nameFour, someName)

	//Ints
	var ageOne int = 20
	var ageTwo = 30
	ageThree := 40
	fmt.Println(ageOne, ageTwo, ageThree)

	// Bits & Memory
	var numOne int8 = 25
	var numTwo int8 = -128
	var numThree uint16 = 256
	fmt.Println(numOne, numTwo, numThree)

	var scoreOne float32 = -20.55
	var scoreTwo float64 = 45678987654567876
	scoreThree := 1.5
	fmt.Println(scoreOne, scoreTwo, scoreThree)

	fmt.Print("hello world, ")
	fmt.Print("\n new line")
	fmt.Print("hi")

	age := 35
	name := "vidushi"
	fmt.Println("My age is", age, "and my name is", name)

	//Formatting Strings %_ = format specifie
	fmt.Printf("my age is %v and my name is %v \n", age, name)
	fmt.Printf("my age is %q and my name is %q \n", age, name)
	fmt.Printf("age is of type %T \n", age)
	fmt.Printf("You scored %0.2f points \n", 225.55)

	//Save formatted strings
	var str = fmt.Sprintf("my age is %v and my name is %v \n", age, name)
	fmt.Println("Saved string is:", str)

	//Arrays
	//var ages [3]int = [3]int{1, 2, 3}
	var ages = [3]int{1, 2, 3}
	fmt.Println(ages, len(ages))

	names := [4]string{"vidushi", "pari", "palak", "jayant"}
	names[1] = "jyoti"
	fmt.Println(names, len(names))

	//Slices (use arrays under the hood, but can be manipulated)
	var scores = []int{100, 50, 60}
	scores[2] = 75
	scores = append(scores, 85)
	fmt.Println(scores, len(scores))

	//Slice ranges
	rangeOne := names[1:3]
	rangeTwo := names[2:]
	rangeThree := names[3:]
	fmt.Println(rangeOne, rangeTwo, rangeThree)

	rangeOne = append(rangeOne, "puru")
	fmt.Println(rangeOne)
}
