package main

import "net/http"

func login(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Successfully logged in"))
	w.WriteHeader(http.StatusOK)
}

func signup(w http.Response, r *http.Request) {
	w.Write([]byte("Successfully signed up"))
	w.WriteHeader(http.StatusOK)
}

func home(w http.Response, r *http.Request) {
	if name := r.FormValue("name"); name != "" {
		welcome.Name = name
	}
	if err := templates.ExecuteTemplate(w, "welcome-template.html", welcome); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func noCacheMW(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "no-store")
		h.ServeHTTP(w, r)
	})
}
