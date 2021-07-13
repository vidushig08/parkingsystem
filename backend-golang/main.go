package main

import (
	"fmt"
	"html/template"
	"net/http"
	"time"
)

type Welcome struct {
	Name string
	Time string
}

func main() {
	welcome := Welcome{"Anonymous", time.Now().Format(time.Stamp)}
	templates := template.Must(template.ParseFiles("templates/welcome-template.html"))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if name := r.FormValue("name"); name != "" {
			welcome.Name = name
		}
		if err := templates.ExecuteTemplate(w, "welcome-template.html", welcome); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	http.HandleFunc("/api/v1/signup", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Successfully signed up"))
		w.WriteHeader(http.StatusOK)
	})
	http.HandleFunc("/api/v1/login", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Successfully logged in"))
		w.WriteHeader(http.StatusOK)
	})
	fmt.Println("Serving on PORT 8080")
	fmt.Println(http.ListenAndServe(":8080", nil))
}