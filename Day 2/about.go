package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    fmt.Print("Enter a sentence: ")
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    sentence := scanner.Text()

    words := strings.Fields(sentence)
    wordCount := make(map[string]int)

    for _, word := range words {
        wordCount[word]++
    }

    fmt.Println(wordCount)
}