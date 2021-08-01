package models

type User struct {
	Id       uint64 `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"unique"`
	Password []byte `json:"password"`
}
