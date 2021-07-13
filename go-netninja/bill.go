package main

import (
	"fmt"
	"os"
)

type bill struct {
	name  string
	items map[string]float64
	tip   float64
}

//make new bill
func newBill(name string) bill {
	b := bill{
		name:  name,
		items: map[string]float64{"pie": 5.99, "cake": 3.99},
		tip:   0,
	}
	return b
}

//receiver function
func (b bill) format() string {
	fs := "Bill Breakdown: \n"
	var total float64 = 0

	//list itemss
	for k, v := range b.items {
		fs += fmt.Sprintf("%-25v ... $%v \n", k+":", v)
		total += v
	}

	//add Tip
	fs += fmt.Sprintf("%-25v ... $%v \n", "Tip:", b.tip)

	//total
	fs += fmt.Sprintf("%-25v ... $%0.2f", "Total: ", total+b.tip)
	return fs
}

//update tip
func (b *bill) updateTip(tip float64) {
	//(*b).tip = tip
	b.tip = tip
}

//add an item to the Bill
func (b *bill) addItem(name string, price float64) {
	b.items[name] = price
}

//Save bill
func (b *bill) save() {
	data := []byte(b.format())

	err := os.WriteFile("bills/"+b.name+".txt", data, 0644)
	if err != nil {
		panic(err)
	}
	fmt.Println("Bill was saved")
}
